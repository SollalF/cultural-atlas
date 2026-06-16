/**
 * Authoritative country score registry.
 *
 * Add country entries to COUNTRY_SCORES when new data is ready.
 */
import type { CountryScores } from "./scales";

interface CountryScoreInput {
  id: string;
  name: string;
  scores: CountryScores;
}

type CountryScoreRegistry = Record<string, CountryScoreInput>;

function defineCountryScores<const Scores extends CountryScoreRegistry>(
  scores: Scores & { [Id in keyof Scores]: { id: Id } },
): Scores {
  return scores;
}

export const COUNTRY_SCORES: CountryScoreRegistry = defineCountryScores({});

export type CountryId = keyof typeof COUNTRY_SCORES;
export type Country = (typeof COUNTRY_SCORES)[CountryId];

export const countries: Country[] = Object.values(COUNTRY_SCORES);
