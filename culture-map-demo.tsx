"use client";

import {
  useEffect,
  useMemo,
  useState,
  type FocusEvent,
  type MouseEvent,
} from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  COUNTRY_SCORES,
  countries,
  type Country,
  type CountryId,
} from "./data/country-scores";
import {
  getPoleLabel,
  getScoreSourceCitation,
  getScoreSourceSummary,
  SCALES,
  type ScoreEntry,
  type ScaleId,
} from "./data/scales";
import {
  formatSourceCitation,
  sourceById,
  type Source,
  type SourceId,
} from "./data/sources";

const DEFAULT_COUNTRY_A: CountryId = "united-states";
const DEFAULT_COUNTRY_B: CountryId = "japan";
const DEFAULT_MAP_SCALE: ScaleId = "communicating";

const SCALE_REFERENCE_SOURCE_IDS: Record<ScaleId, SourceId[]> = {
  communicating: ["shen-2022"],
  evaluating: ["globe-phase-2"],
  persuading: ["ralston-2011"],
  leading: ["ralston-2011"],
  deciding: ["hofstede-2015"],
  trusting: ["pelham-2022"],
  disagreeing: ["globe-phase-2", "eriksson-2021"],
  scheduling: [
    "levine-norenzayan-1999",
    "wang-2016",
    "white-2011",
    "van-eerde-azar-2019",
    "krupka-2022",
  ],
};

const MAP_WIDTH = 920;
const MAP_HEIGHT = 500;
const WORLD_GEOJSON_URL =
  "https://cdn.jsdelivr.net/gh/holtzy/D3-graph-gallery@master/DATA/world.geojson";

type MapHover = {
  label: string;
  left: number;
  top: number;
};

type WorldGeometry =
  | {
      type: "Polygon";
      coordinates: number[][][];
    }
  | {
      type: "MultiPolygon";
      coordinates: number[][][][];
    };

interface WorldFeature {
  type: "Feature";
  properties: {
    name?: string;
  };
  geometry: WorldGeometry;
}

interface WorldGeoJson {
  type: "FeatureCollection";
  features: WorldFeature[];
}

const COUNTRY_NAME_ALIASES: Record<string, CountryId> = {
  "bosnia and herzegovina": "bosnia-and-herzegovina",
  bolivia: "bolivia",
  "burkina faso": "burkina-faso",
  "costa rica": "costa-rica",
  czechia: "czech-republic",
  "czech republic": "czech-republic",
  "dominican republic": "dominican-republic",
  "el salvador": "el-salvador",
  "hong kong": "hong-kong",
  iran: "iran",
  "iran islamic republic of": "iran",
  macao: "macao",
  macau: "macao",
  moldova: "moldova",
  "north macedonia": "north-macedonia",
  palestine: "palestine",
  "puerto rico": "puerto-rico",
  russia: "russia",
  "russian federation": "russia",
  serbia: "serbia",
  slovakia: "slovakia",
  "south africa": "south-africa",
  "south korea": "south-korea",
  "korea republic of": "south-korea",
  syria: "syria",
  "syrian arab republic": "syria",
  tanzania: "tanzania",
  "united kingdom": "united-kingdom",
  "united states": "united-states",
  "united states of america": "united-states",
  venezuela: "venezuela",
  vietnam: "vietnam",
  "viet nam": "vietnam",
};

function normalizeCountryName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toLowerCase();
}

function projectPoint([longitude, latitude]: number[]): [number, number] {
  return [
    ((longitude + 180) / 360) * MAP_WIDTH,
    ((90 - latitude) / 180) * MAP_HEIGHT,
  ];
}

function ringToPath(ring: number[][]): string {
  return `${ring
    .map((point, index) => {
      const [x, y] = projectPoint(point);
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ")} Z`;
}

function geometryToPath(geometry: WorldGeometry): string {
  if (geometry.type === "Polygon") {
    return geometry.coordinates.map(ringToPath).join(" ");
  }

  return geometry.coordinates
    .flatMap((polygon) => polygon.map(ringToPath))
    .join(" ");
}

function getCountryScore(
  country: Country,
  scaleId: ScaleId,
): ScoreEntry | undefined {
  return (country.scores as Partial<Record<ScaleId, ScoreEntry>>)[scaleId];
}

function collectSourcesFromCountries(...countryList: Country[]): Source[] {
  const used = new Map<SourceId, Source>();

  for (const country of countryList) {
    const entries = Object.values(
      country.scores as Partial<Record<ScaleId, ScoreEntry>>,
    );
    for (const entry of entries) {
      if (!entry) continue;
      for (const source of entry.sources) {
        const citation = sourceById[source.sourceId];
        used.set(citation.id, citation);
      }
    }
  }

  return [...used.values()].sort((a, b) => a.title.localeCompare(b.title));
}

function SourceCitationItem({ source }: { source: Source | undefined }) {
  if (!source) {
    return <li>Source metadata not yet added.</li>;
  }

  return (
    <li>
      {source.url ? (
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline-offset-4 hover:underline"
        >
          {formatSourceCitation(source)}
        </a>
      ) : (
        formatSourceCitation(source)
      )}
      {source.doi ? (
        <>
          {" "}
          <a
            href={`https://doi.org/${source.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-4 hover:underline"
          >
            doi:{source.doi}
          </a>
        </>
      ) : null}
      {source.note ? <span> — {source.note}</span> : null}
      {source.scoreDerivation ? (
        <span className="block">
          Score derivation: {source.scoreDerivation}
        </span>
      ) : null}
    </li>
  );
}

function CountrySelect({
  id,
  label,
  value,
  excludedId,
  onChange,
}: {
  id: string;
  label: string;
  value: CountryId;
  excludedId: CountryId;
  onChange: (value: CountryId) => void;
}) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Select
        value={value}
        onValueChange={(next) => onChange(next as CountryId)}
      >
        <SelectTrigger id={id} className="w-full" aria-label={label}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {countries.map((country) => (
            <SelectItem
              key={country.id}
              value={country.id}
              disabled={country.id === excludedId}
            >
              {country.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function ScaleBar({ score, color }: { score: number; color: string }) {
  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
      <div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{
          width: `${score}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
}

function CitedScore({
  entry,
  scaleId,
  color,
  countryName,
}: {
  entry: ScoreEntry;
  scaleId: ScaleId;
  color: string;
  countryName: string;
}) {
  const primary = entry.sources[0];
  const value = primary.value;
  const pole = getPoleLabel(scaleId, value);
  const secondary = entry.sources.slice(1);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <span style={{ color }}>{countryName}</span>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="cursor-help text-muted-foreground underline decoration-dotted underline-offset-2"
            >
              {value} · {pole}
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-xs space-y-1">
            <p>{getScoreSourceCitation(primary)}</p>
            {secondary.map((source) => (
              <p
                key={getScoreSourceCitation(source)}
                className="text-muted-foreground"
              >
                {getScoreSourceCitation(source)}
              </p>
            ))}
          </TooltipContent>
        </Tooltip>
      </div>
      <ScaleBar score={value} color={color} />
      {secondary.length > 0 && (
        <ul className="space-y-0.5 pt-1 text-[10px] text-muted-foreground">
          {secondary.map((source) => (
            <li key={getScoreSourceSummary(source)}>
              {getScoreSourceSummary(source)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MissingScore({
  color,
  countryName,
}: {
  color: string;
  countryName: string;
}) {
  return (
    <div className="space-y-1 text-xs text-muted-foreground">
      <span style={{ color }}>{countryName}</span>
      <p>No cited data yet for this scale.</p>
    </div>
  );
}

function ScaleSelect({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: ScaleId;
  onChange: (value: ScaleId) => void;
}) {
  return (
    <div className="flex min-w-56 flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Select value={value} onValueChange={(next) => onChange(next as ScaleId)}>
        <SelectTrigger id={id} className="w-full" aria-label={label}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {SCALES.map((scale) => (
            <SelectItem key={scale.id} value={scale.id}>
              {scale.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function getNeutralScoreColor(score: number): string {
  const normalized = Math.max(0, Math.min(99, score)) / 99;
  const midpoint = 0.5;

  if (normalized <= midpoint) {
    const t = normalized / midpoint;
    const hue = 178 + (235 - 178) * t;
    const saturation = 76 - (76 - 28) * t;
    const lightness = 38 + (72 - 38) * t;
    return `hsl(${hue} ${saturation}% ${lightness}%)`;
  }

  const t = (normalized - midpoint) / midpoint;
  const hue = 235 + (285 - 235) * t;
  const saturation = 28 + (76 - 28) * t;
  const lightness = 72 - (72 - 38) * t;
  return `hsl(${hue} ${saturation}% ${lightness}%)`;
}

function scoreLabel(country: Country, scaleId: ScaleId): string {
  const score = getCountryScore(country, scaleId)?.sources[0].value;
  if (typeof score !== "number") {
    return `${country.name}: no cited data for this scale`;
  }
  return `${country.name}: ${score} (${getPoleLabel(scaleId, score)})`;
}

export default function CultureMapDemo() {
  const [countryAId, setCountryAId] = useState<CountryId>(DEFAULT_COUNTRY_A);
  const [countryBId, setCountryBId] = useState<CountryId>(DEFAULT_COUNTRY_B);
  const [mapScaleId, setMapScaleId] = useState<ScaleId>(DEFAULT_MAP_SCALE);
  const [worldFeatures, setWorldFeatures] = useState<WorldFeature[]>([]);
  const [mapLoadFailed, setMapLoadFailed] = useState(false);
  const [mapHover, setMapHover] = useState<MapHover | null>(null);

  const countryA = COUNTRY_SCORES[countryAId];
  const countryB = COUNTRY_SCORES[countryBId];
  const mapScale = SCALES.find((scale) => scale.id === mapScaleId) ?? SCALES[0];

  useEffect(() => {
    let cancelled = false;

    async function loadWorldMap() {
      try {
        const response = await fetch(WORLD_GEOJSON_URL);
        if (!response.ok) {
          throw new Error("World map request failed");
        }

        const geoJson = (await response.json()) as WorldGeoJson;
        if (!cancelled) {
          setWorldFeatures(geoJson.features);
          setMapLoadFailed(false);
        }
      } catch {
        if (!cancelled) {
          setMapLoadFailed(true);
        }
      }
    }

    loadWorldMap();

    return () => {
      cancelled = true;
    };
  }, []);

  const countryByName = useMemo(() => {
    const byName = new Map<string, Country>();
    for (const country of countries) {
      byName.set(normalizeCountryName(country.name), country);
    }
    return byName;
  }, []);

  const chartData = useMemo(
    () =>
      SCALES.map((scale) => ({
        scale: scale.label,
        countryA: getCountryScore(countryA, scale.id)?.sources[0].value ?? null,
        countryB: getCountryScore(countryB, scale.id)?.sources[0].value ?? null,
      })),
    [countryA, countryB],
  );

  const activeSources = useMemo(
    () => collectSourcesFromCountries(countryA, countryB),
    [countryA, countryB],
  );

  const mapScores = useMemo(
    () =>
      countries
        .map((country) => ({
          country,
          score: getCountryScore(country, mapScaleId)?.sources[0].value,
        }))
        .filter(
          (entry): entry is { country: Country; score: number } =>
            typeof entry.score === "number",
        )
        .sort((a, b) => b.score - a.score),
    [mapScaleId],
  );

  function getCountryFromFeature(feature: WorldFeature): Country | undefined {
    const featureName = feature.properties.name;
    if (!featureName) return undefined;

    const normalizedName = normalizeCountryName(featureName);
    const alias = COUNTRY_NAME_ALIASES[normalizedName];
    return alias ? COUNTRY_SCORES[alias] : countryByName.get(normalizedName);
  }

  function getMapHoverLabel(
    country: Country | undefined,
    featureName: string,
  ): string {
    const score = country
      ? getCountryScore(country, mapScaleId)?.sources[0].value
      : undefined;
    return country && typeof score === "number"
      ? `${country.name}: ${score} (${getPoleLabel(mapScaleId, score)})`
      : `${country?.name ?? featureName}: no cited data for this scale`;
  }

  function showMapHover(
    event: MouseEvent<SVGPathElement>,
    country: Country | undefined,
    featureName: string,
  ) {
    setMapHover({
      label: getMapHoverLabel(country, featureName),
      left: event.clientX + 12,
      top: event.clientY + 12,
    });
  }

  function showMapFocus(
    event: FocusEvent<SVGPathElement>,
    country: Country | undefined,
    featureName: string,
  ) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setMapHover({
      label: getMapHoverLabel(country, featureName),
      left: bounds.left + bounds.width / 2,
      top: bounds.top + 12,
    });
  }

  const chartConfig = useMemo(
    () =>
      ({
        countryA: {
          label: countryA.name,
          color: "var(--chart-1)",
        },
        countryB: {
          label: countryB.name,
          color: "var(--chart-2)",
        },
      }) satisfies ChartConfig,
    [countryA.name, countryB.name],
  );

  return (
    <Card className="border-0 bg-transparent py-0 shadow-none">
      <CardHeader className="px-0">
        <CardTitle>Culture Map Comparison</CardTitle>
        <CardDescription>
          Compare two countries across eight behavioral scales.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8 px-0">
        <div className="flex flex-col gap-4 sm:flex-row">
          <CountrySelect
            id="country-a"
            label="Country A"
            value={countryAId}
            excludedId={countryBId}
            onChange={setCountryAId}
          />
          <CountrySelect
            id="country-b"
            label="Country B"
            value={countryBId}
            excludedId={countryAId}
            onChange={setCountryBId}
          />
        </div>

        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square min-h-[420px] w-full max-w-2xl"
          initialDimension={{ width: 480, height: 480 }}
        >
          <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="78%">
            <PolarGrid />
            <PolarAngleAxis dataKey="scale" tick={{ fontSize: 11 }} />
            <PolarRadiusAxis domain={[0, 99]} tickCount={5} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(label) => String(label)}
                  formatter={(value, name, item) => {
                    const scale = SCALES.find(
                      (entry) => entry.label === item?.payload?.scale,
                    );
                    const countryLabel =
                      chartConfig[name as keyof typeof chartConfig]?.label ??
                      name;
                    if (!scale || typeof value !== "number") {
                      return [value, countryLabel];
                    }
                    const pole = getPoleLabel(scale.id, value);
                    return [`${value} (${pole})`, countryLabel];
                  }}
                />
              }
            />
            <Radar
              name="countryA"
              dataKey="countryA"
              stroke="var(--color-countryA)"
              fill="var(--color-countryA)"
              fillOpacity={0.25}
              strokeWidth={2}
            />
            <Radar
              name="countryB"
              dataKey="countryB"
              stroke="var(--color-countryB)"
              fill="var(--color-countryB)"
              fillOpacity={0.25}
              strokeWidth={2}
            />
            <ChartLegend content={<ChartLegendContent nameKey="name" />} />
          </RadarChart>
        </ChartContainer>

        <div className="rounded-lg border bg-background/60 p-4">
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-sm font-semibold">Scale Map</h3>
              <p className="mt-1 max-w-2xl text-xs text-muted-foreground">
                Select a scale to see every country with cited data shaded on a
                balanced turquoise-to-purple gradient. The colors mark position
                on the scale without implying better or worse.
              </p>
            </div>
            <ScaleSelect
              id="map-scale"
              label="Map scale"
              value={mapScaleId}
              onChange={setMapScaleId}
            />
          </div>

          <div className="mb-3 flex items-center gap-3 text-[11px] text-muted-foreground">
            <span>{mapScale.low}</span>
            <div
              className="h-2 min-w-32 flex-1 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, hsl(178 76% 38%), hsl(235 28% 72%), hsl(285 76% 38%))",
              }}
            />
            <span>{mapScale.high}</span>
          </div>

          <div className="relative overflow-x-auto rounded-lg border bg-background p-3">
            {mapLoadFailed ? (
              <div className="flex min-h-[320px] items-center justify-center text-sm text-muted-foreground">
                Could not load the country map. The score list below is still
                available.
              </div>
            ) : worldFeatures.length === 0 ? (
              <div className="flex min-h-[320px] items-center justify-center text-sm text-muted-foreground">
                Loading country map...
              </div>
            ) : (
              <svg
                viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
                role="img"
                aria-label={`${mapScale.label} country score map`}
                className="min-w-[760px]"
                onMouseLeave={() => setMapHover(null)}
              >
                <rect
                  width={MAP_WIDTH}
                  height={MAP_HEIGHT}
                  rx="24"
                  fill="var(--background)"
                />
                {worldFeatures.map((feature) => {
                  const featureName =
                    feature.properties.name ?? "Unknown country";
                  const country = getCountryFromFeature(feature);
                  const score = country
                    ? getCountryScore(country, mapScaleId)?.sources[0].value
                    : undefined;
                  const hasScore = typeof score === "number";

                  return (
                    <path
                      key={featureName}
                      d={geometryToPath(feature.geometry)}
                      fill={
                        hasScore ? getNeutralScoreColor(score) : "var(--muted)"
                      }
                      fillOpacity={hasScore ? 1 : 0.35}
                      stroke="var(--border)"
                      strokeWidth={0.75}
                      className="transition-opacity hover:opacity-80"
                      onMouseMove={(event) =>
                        showMapHover(event, country, featureName)
                      }
                      onFocus={(event) =>
                        showMapFocus(event, country, featureName)
                      }
                      onBlur={() => setMapHover(null)}
                      tabIndex={0}
                    />
                  );
                })}
              </svg>
            )}

            {mapHover ? (
              <div
                className="pointer-events-none fixed z-50 max-w-64 rounded-md border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-md"
                style={{ left: mapHover.left, top: mapHover.top }}
              >
                {mapHover.label}
              </div>
            ) : null}
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-md bg-muted/30 p-3">
              <h4 className="text-xs font-semibold">
                Closest to {mapScale.low}
              </h4>
              <ol className="mt-2 space-y-1 text-xs text-muted-foreground">
                {mapScores
                  .slice(-5)
                  .reverse()
                  .map(({ country, score }) => (
                    <li key={country.id} className="flex justify-between gap-3">
                      <span>{country.name}</span>
                      <span>{score}</span>
                    </li>
                  ))}
              </ol>
            </div>
            <div className="rounded-md bg-muted/30 p-3">
              <h4 className="text-xs font-semibold">
                Closest to {mapScale.high}
              </h4>
              <ol className="mt-2 space-y-1 text-xs text-muted-foreground">
                {mapScores.slice(0, 5).map(({ country, score }) => (
                  <li key={country.id} className="flex justify-between gap-3">
                    <span>{country.name}</span>
                    <span>{score}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {SCALES.map((scale) => {
            const entryA = getCountryScore(countryA, scale.id);
            const entryB = getCountryScore(countryB, scale.id);
            const scoreA = entryA?.sources[0].value;
            const scoreB = entryB?.sources[0].value;
            const delta =
              typeof scoreA === "number" && typeof scoreB === "number"
                ? Math.abs(scoreA - scoreB)
                : null;

            return (
              <div
                key={scale.id}
                className="rounded-lg border bg-background/60 p-4"
              >
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold">{scale.label}</h3>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      {scale.description}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Δ {delta ?? "n/a"}
                  </span>
                </div>

                <div className="mb-3 grid gap-3 text-[11px] text-muted-foreground sm:grid-cols-2">
                  <div>
                    <p className="font-medium text-foreground">{scale.low}</p>
                    <p>{scale.lowDescription}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="font-medium text-foreground">{scale.high}</p>
                    <p>{scale.highDescription}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {entryA ? (
                    <CitedScore
                      entry={entryA}
                      scaleId={scale.id}
                      color="var(--chart-1)"
                      countryName={countryA.name}
                    />
                  ) : (
                    <MissingScore
                      color="var(--chart-1)"
                      countryName={countryA.name}
                    />
                  )}
                  {entryB ? (
                    <CitedScore
                      entry={entryB}
                      scaleId={scale.id}
                      color="var(--chart-2)"
                      countryName={countryB.name}
                    />
                  ) : (
                    <MissingScore
                      color="var(--chart-2)"
                      countryName={countryB.name}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {activeSources.length > 0 && (
          <div className="rounded-lg border bg-background/60 p-4">
            <h3 className="mb-3 text-sm font-semibold">Sources</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {activeSources.map((source) => (
                <SourceCitationItem key={source.id} source={source} />
              ))}
            </ul>
            <div className="mt-4 border-t pt-3">
              <h4 className="mb-3 text-xs font-semibold text-foreground">
                Scale references
              </h4>
              <div className="space-y-4">
                {SCALES.map((scale) => (
                  <div key={scale.id}>
                    <h5 className="mb-2 text-[11px] font-semibold text-foreground">
                      {scale.label} scale
                    </h5>
                    <ul className="space-y-2 text-[11px] text-muted-foreground">
                      {SCALE_REFERENCE_SOURCE_IDS[scale.id].map((sourceId) => (
                        <SourceCitationItem
                          key={`${scale.id}-${sourceId}`}
                          source={sourceById[sourceId]}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground">
              Hover any score to see its citation chain — primary first, then
              secondary sources.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
