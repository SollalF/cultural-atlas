# Cultural Atlas

Cultural Atlas is an interactive country comparison tool for exploring cross-cultural working styles. It lets users compare two countries across eight behavioral scales, inspect cited score sources, and view country positions through radar charts and a choropleth-style map.

This module is designed to be embedded in the parent Next.js portfolio app at `/projects/cultural-atlas`.

## Features

- Compare any two supported countries side by side.
- Visualize differences with a radar chart.
- Explore scale-specific country scores on an interactive map.
- Review the citation trail behind each score.
- Read plain-language descriptions for each scale and pole.

## Scales

Each score runs from 0 to 99. Lower scores sit closer to the first pole, while higher scores sit closer to the second pole.

- Communicating: low context to high context
- Evaluating: direct negative feedback to indirect negative feedback
- Persuading: principles-first to application-first
- Leading: egalitarian to hierarchical
- Deciding: consensual to top-down
- Trusting: task-based to relationship-based
- Disagreeing: confrontational to avoids confrontation
- Scheduling: linear time to flexible time

## Data Sources

The score data combines practitioner frameworks and academic proxies, including work by Erin Meyer, Edward T. Hall, Hofstede, GLOBE, World Values Survey / Integrated Values Surveys, and other cross-cultural communication research.

Source metadata lives in `data/sources.ts`. Score values and their citations live in `data/country-scores.ts`. Scale definitions live in `data/scales.ts`.

Important caveat: the scores are directional comparison aids, not fixed truths about individuals. They summarize broad country-level tendencies from cited sources and should be interpreted with context.

## File Structure

- `page.tsx` - Next.js project page that renders overview content, scale explanations, the demo, and fetched GitHub README content.
- `project-details.ts` - metadata used by the parent project gallery.
- `culture-map-demo.tsx` - client-side comparison UI, charts, map interaction, and source display.
- `culture-map-demo-wrapper.tsx` - dynamic client-only wrapper for the interactive demo.
- `data/scales.ts` - scale labels, descriptions, poles, and source helper types.
- `data/country-scores.ts` - country score dataset and per-score citations.
- `data/sources.ts` - source registry and citation formatting helpers.

## Local Development

Run the parent app from the repository root:

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000/projects/cultural-atlas](http://localhost:3000/projects/cultural-atlas).

## Adding or Updating Data

1. Add or update source metadata in `data/sources.ts`.
2. Add country scores in `data/country-scores.ts`.
3. Attach at least one cited source to each score.
4. Keep values normalized to the 0-99 display scale.
5. Update `data/scales.ts` only when changing the meaning, labels, or poles of a scale.
