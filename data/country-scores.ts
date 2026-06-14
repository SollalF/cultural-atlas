/**
 * Authoritative country score registry.
 *
 * Scores are listed directly on each country so the dataset can be read in one place.
 * Some countries have partial coverage when an academic source only supports one scale.
 */
import type { CountryScores } from "./scales";

interface CountryScoreInput {
  id: string;
  name: string;
  scores: CountryScores;
}

function defineCountryScores<const Scores extends Record<string, CountryScoreInput>>(
  scores: Scores & { [Id in keyof Scores]: { id: Id } },
): Scores {
  return scores;
}

export const COUNTRY_SCORES = defineCountryScores({
  usa: {
    id: "usa",
    name: "United States",
    scores: {
      communicating: {
        sources: [
          {
            value: 32,
            sourceId: "hall-beyond-culture",
            explanation: "Northern American tier on Hall's continuum; messages expected at face value.",
          },
          {
            value: 9,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 91 (Hofstede et al., 2010).",
          },
          {
            label: "Low-context",
            sourceId: "hall-hall-1990",
            explanation: "Northern Americans — low-context, explicit communication (Hall, 1976).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 22,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "USA assertiveness practices = 4.55 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 72,
            label: "Concrete-evidence argument proxy",
            sourceId: "uysal-argumentation-2012",
            explanation:
              "Intercultural argumentation research describes Americans as preferring practical/scientific orientation and factual concrete evidence, so the placement remains toward application-first.",
          },
          {
            label: "English linear rhetoric",
            sourceId: "kaplan-cultural-thought-patterns-1966",
            explanation:
              "Kaplan describes English expository rhetoric as linear and accepting examples-to-claim development, supporting an applications-oriented presentation style.",
          },
          {
            label: "Franco-American scientific rhetoric comparison",
            sourceId: "helal-franco-american-aids-war-2014",
            explanation:
              "Helal's Franco-American corpus provides country-specific evidence that persuasive research introductions differ by national scientific discourse community.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 58,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "USA power distance practices = 4.88 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 10,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "USA participative global leadership dimension = 5.93 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 62,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 37.0% of United States respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 22,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "USA assertiveness practices = 4.55 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 40,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "United States overall pace-of-life index = -0.30 (rank 16 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  japan: {
    id: "japan",
    name: "Japan",
    scores: {
      communicating: {
        sources: [
          {
            value: 99,
            sourceId: "hall-beyond-culture",
            explanation: "Highest position on Hall's published LC→HC continuum.",
          },
          {
            value: 54,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 46 (Hofstede et al., 2010).",
          },
          {
            label: "High-context",
            sourceId: "hall-hall-1990",
            explanation: "Archetypal high-context culture; meaning often implicit (Hall, 1976).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 85,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Japan assertiveness practices = 3.59 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 24,
            label: "Holistic/situational argument proxy",
            sourceId: "uysal-argumentation-2012",
            explanation:
              "Review of Japanese argumentation research reports more holistic, situational, and less concrete-evidence-centered patterns than U.S. writing; normalized toward the principles/holistic side of this scale.",
          },
          {
            label: "Analytic-holistic cognition tasks",
            sourceId: "klein-rosetta-phase1-2009",
            explanation:
              "Rosetta Phase I found task evidence distinguishing Japanese and U.S. analytic-holistic reasoning tendencies.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 68,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Japan power distance practices = 5.11 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 63,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Japan participative global leadership dimension = 5.07 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 65,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 33.7% of Japan respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 85,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Japan assertiveness practices = 3.59 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 10,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Japan overall pace-of-life index = -2.68 (rank 4 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  france: {
    id: "france",
    name: "France",
    scores: {
      communicating: {
        sources: [
          {
            value: 42,
            sourceId: "hall-hall-1990",
            explanation: "French tier on Hall's continuum — nuanced, layered business communication.",
          },
          {
            value: 29,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 71 (Hofstede et al., 2010).",
          },
          {
            label: "Moderate-context",
            sourceId: "hall-beyond-culture",
            explanation: "French culture more high-context than Germany or the U.S. (Hall & Hall, 1990).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 50,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "France assertiveness practices = 4.13 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 34,
            label: "French dialectical essay tradition",
            sourceId: "siepmann-academic-writing-culture-2006",
            explanation:
              "French academic training emphasizes defining the problem, ordered precision, analytic rigor, and dialectical progression before the conclusion.",
          },
          {
            label: "Franco-American scientific rhetoric comparison",
            sourceId: "helal-franco-american-aids-war-2014",
            explanation:
              "Country-specific comparison of French and American scientific introductions documents distinct French rhetorical expectations.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 76,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "France power distance practices = 5.28 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 12,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "France participative global leadership dimension = 5.90 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 73,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 26.3% of France respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 50,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "France assertiveness practices = 4.13 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 27,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "France overall pace-of-life index = -1.36 (rank 11 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  germany: {
    id: "germany",
    name: "Germany",
    scores: {
      communicating: {
        sources: [
          {
            value: 12,
            sourceId: "hall-hall-1990",
            explanation: "Second tier on Hall's continuum — explicit, compartmentalized communication.",
          },
          {
            value: 33,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 67 (Hofstede et al., 2010).",
          },
          {
            label: "Low-context",
            sourceId: "hall-beyond-culture",
            explanation: "Grouped with low-context European cultures (Hall & Hall, 1990).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 16,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Mean of GLOBE Germany East = 4.73 and Germany West = 4.55 assertiveness practices (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 20,
            label: "Teutonic deductive reasoning proxy",
            sourceId: "siepmann-academic-writing-culture-2006",
            explanation:
              "Siepmann summarizes the Teutonic style as focused on theory formation and deductive reasoning rather than data analysis and induction.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 81,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Mean of GLOBE Germany East = 5.54 and Germany West = 5.25 power distance practices (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 19,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Mean of GLOBE Germany East and Germany West participative global leadership dimension = 5.79 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 57,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 41.6% of Germany respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 16,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Mean of GLOBE Germany East = 4.73 and Germany West = 4.55 assertiveness practices (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 6,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Germany overall pace-of-life index = -3.00 (rank 3 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  uk: {
    id: "uk",
    name: "United Kingdom",
    scores: {
      communicating: {
        sources: [
          {
            value: 52,
            sourceId: "hall-beyond-culture",
            explanation: "English tier on Hall's LC→HC continuum.",
          },
          {
            value: 11,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 89 (Hofstede et al., 2010).",
          },
          {
            label: "Low- to moderate-context",
            sourceId: "hall-hall-1990",
            explanation: "English-speaking cultures sit mid-to-low on Hall's context continuum.",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 48,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "GLOBE England assertiveness practices = 4.15 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 56,
            label: "Saxonic data-oriented style",
            sourceId: "siepmann-academic-writing-culture-2006",
            explanation:
              "The Saxonic style is described as strong on collecting and organizing data and reader-oriented structure, supporting a moderate applications-first placement.",
          },
          {
            label: "English linear rhetoric",
            sourceId: "kaplan-cultural-thought-patterns-1966",
            explanation:
              "Kaplan describes expected English expository sequence as linear and open to inductive examples-to-claim development.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 70,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "GLOBE England power distance practices = 5.15 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 32,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "GLOBE England participative global leadership dimension = 5.57 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 56,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 43.3% of United Kingdom respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 48,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "GLOBE England assertiveness practices = 4.15 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 17,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "United Kingdom (England sample) overall pace-of-life index = -2.09 (rank 6 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  netherlands: {
    id: "netherlands",
    name: "Netherlands",
    scores: {
      communicating: {
        sources: [
          {
            value: 12,
            sourceId: "hall-beyond-culture",
            explanation: "Grouped with Germanic low-context cultures on Hall's continuum.",
          },
          {
            value: 20,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 80 (Hofstede et al., 2010).",
          },
          {
            label: "Low-context",
            sourceId: "hall-hall-1990",
            explanation: "Germanic Northern European; low-context norms (Hall, 1976).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 37,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Netherlands assertiveness practices = 4.32 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 62,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 23,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Netherlands power distance practices = 4.11 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 21,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Netherlands participative global leadership dimension = 5.75 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 42,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 57.0% of Netherlands respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 37,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Netherlands assertiveness practices = 4.32 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 26,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Netherlands overall pace-of-life index = -1.43 (rank 9 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  china: {
    id: "china",
    name: "China",
    scores: {
      communicating: {
        sources: [
          {
            value: 90,
            sourceId: "hall-beyond-culture",
            explanation: "Chinese tier on Hall's continuum — meaning often implicit and relational.",
          },
          {
            value: 80,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 20 (Hofstede et al., 2010).",
          },
          {
            label: "High-context",
            sourceId: "hall-hall-1990",
            explanation: "Added to Hall's high-context end (Hall & Hall, 1987/1990).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 74,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "China assertiveness practices = 3.76 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 28,
            label: "Formal-vs-intuitive reasoning proxy",
            sourceId: "norenzayan-formal-intuitive-reasoning-2002",
            explanation:
              "Chinese participants were included in studies where East Asian respondents relied more on intuitive/holistic strategies than European Americans when formal rules conflicted with intuition.",
          },
          {
            label: "Chinese argumentation evidence",
            sourceId: "uysal-argumentation-2012",
            explanation:
              "The argumentation review cites Chinese student-writing studies showing fewer counterargument/rebuttal claims and data than U.S.-style argumentation.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 65,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "China power distance practices = 5.04 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 65,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "China participative global leadership dimension = 5.04 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 36,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 63.5% of China respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 74,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "China assertiveness practices = 3.76 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 58,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "China overall pace-of-life index = 1.03 (rank 23 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  india: {
    id: "india",
    name: "India",
    scores: {
      communicating: {
        sources: [
          {
            value: 52,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Not on Hall's original continuum; score derived as 100 − IDV (IDV = 48).",
          },
          {
            label: "Moderate- to high-context",
            sourceId: "hall-beyond-culture",
            explanation: "South Asian communication relies on implicit context and relational cues.",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 76,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "India assertiveness practices = 3.73 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 54,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 84,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "India power distance practices = 5.47 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 68,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "India participative global leadership dimension = 4.99 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 82,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 16.9% of India respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 76,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "India assertiveness practices = 3.73 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 74,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
    },
  },
  brazil: {
    id: "brazil",
    name: "Brazil",
    scores: {
      communicating: {
        sources: [
          {
            value: 72,
            sourceId: "hall-beyond-culture",
            explanation: "Latin American tier on Hall's LC→HC continuum.",
          },
          {
            value: 62,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 38 (Hofstede et al., 2010).",
          },
          {
            label: "Moderate- to high-context",
            sourceId: "hall-hall-1990",
            explanation: "Latin American cultures classified as high-context (Hall, 1976).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 45,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Brazil assertiveness practices = 4.20 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 58,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 78,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Brazil power distance practices = 5.33 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 2,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Brazil participative global leadership dimension = 6.06 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 92,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 6.5% of Brazil respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 45,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Brazil assertiveness practices = 4.20 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 96,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Brazil overall pace-of-life index = 3.98 (rank 29 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  mexico: {
    id: "mexico",
    name: "Mexico",
    scores: {
      communicating: {
        sources: [
          {
            value: 72,
            sourceId: "hall-beyond-culture",
            explanation: "Latin American tier on Hall's LC→HC continuum.",
          },
          {
            value: 70,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 30 (Hofstede et al., 2010).",
          },
          {
            label: "Moderate- to high-context",
            sourceId: "hall-hall-1990",
            explanation: "Latin American cultures classified as high-context (Hall, 1976).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 29,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Mexico assertiveness practices = 4.45 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 58,
            label: "Mexican holistic-reasoning proxy",
            sourceId: "lechuga-holistic-reasoning-mexicans-2011",
            explanation:
              "Mexican samples scored higher than U.S. Americans on some holistic-reasoning dimensions, so the placement is moderated from strongly application-first toward the middle.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 73,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Mexico power distance practices = 5.22 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 90,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Mexico participative global leadership dimension = 4.64 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 89,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 10.5% of Mexico respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 29,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Mexico assertiveness practices = 4.45 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 99,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Mexico overall pace-of-life index = 4.23 (rank 31 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  sweden: {
    id: "sweden",
    name: "Sweden",
    scores: {
      communicating: {
        sources: [
          {
            value: 22,
            sourceId: "hall-beyond-culture",
            explanation: "Scandinavian tier on Hall's LC→HC continuum.",
          },
          {
            value: 29,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 71 (Hofstede et al., 2010).",
          },
          {
            label: "Low- to moderate-context",
            sourceId: "hall-hall-1990",
            explanation: "Scandinavian cultures rank toward the low-context end (Hall, 1976).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 99,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Sweden assertiveness practices = 3.38 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 52,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 56,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Sweden power distance practices = 4.85 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 34,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Sweden participative global leadership dimension = 5.54 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 36,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 62.8% of Sweden respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 99,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Sweden assertiveness practices = 3.38 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 19,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Sweden overall pace-of-life index = -1.96 (rank 7 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  italy: {
    id: "italy",
    name: "Italy",
    scores: {
      communicating: {
        sources: [
          {
            value: 62,
            sourceId: "hall-beyond-culture",
            explanation: "Italian / Mediterranean tier on Hall's continuum.",
          },
          {
            value: 24,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 76 (Hofstede et al., 2010).",
          },
          {
            label: "Moderate- to high-context",
            sourceId: "hall-hall-1990",
            explanation: "Mediterranean cultures placed above Northern Europe (Hall, 1976).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 54,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Italy assertiveness practices = 4.07 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 40,
            label: "Direct argumentation proxy",
            sourceId: "uysal-argumentation-2012",
            explanation:
              "The intercultural argumentation review cites Italian argumentation among cultures reported as more direct than U.S. patterns; retained as a moderate principles-side placement.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 82,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Italy power distance practices = 5.43 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 38,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Italy participative global leadership dimension = 5.47 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 72,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 26.6% of Italy respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 54,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Italy assertiveness practices = 4.07 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 17,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Italy overall pace-of-life index = -2.13 (rank 5 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  spain: {
    id: "spain",
    name: "Spain",
    scores: {
      communicating: {
        sources: [
          {
            value: 62,
            sourceId: "hall-beyond-culture",
            explanation: "Mediterranean tier on Hall's LC→HC continuum.",
          },
          {
            value: 49,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 51 (Hofstede et al., 2010).",
          },
          {
            label: "Moderate- to high-context",
            sourceId: "hall-hall-1990",
            explanation: "Mediterranean high-context tendencies; implicit cues common (Hall, 1976).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 31,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Spain assertiveness practices = 4.42 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 38,
            label: "Direct argumentation proxy",
            sourceId: "uysal-argumentation-2012",
            explanation:
              "The intercultural argumentation review cites Spanish argumentation among cultures reported as more direct than U.S. patterns; retained as a moderate principles-side placement.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 86,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Spain power distance practices = 5.52 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 61,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Spain participative global leadership dimension = 5.11 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 58,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 41.0% of Spain respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 31,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Spain assertiveness practices = 4.42 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 70,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
    },
  },
  "south-korea": {
    id: "south-korea",
    name: "South Korea",
    scores: {
      communicating: {
        sources: [
          {
            value: 90,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Score derived as 100 − IDV (IDV = 18); consistent with East Asian high-context norms.",
          },
          {
            label: "High-context",
            sourceId: "hall-beyond-culture",
            explanation: "East Asian cultures — implicit communication and status cues (Hall-derived).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 32,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "South Korea assertiveness practices = 4.40 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 36,
            label: "Formal-vs-intuitive reasoning proxy",
            sourceId: "norenzayan-formal-intuitive-reasoning-2002",
            explanation:
              "Korean participants were included in studies where East Asian respondents relied more on intuitive/holistic strategies than European Americans when formal rules conflicted with intuition.",
          },
          {
            label: "Analytic-holistic cognition tasks",
            sourceId: "klein-rosetta-phase1-2009",
            explanation:
              "Rosetta Phase I measured Korean, Japanese, Taiwanese, and U.S. samples on analytic-holistic cognition tasks.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 90,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "South Korea power distance practices = 5.61 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 73,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "South Korea participative global leadership dimension = 4.92 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 66,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 32.9% of South Korea respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 32,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "South Korea assertiveness practices = 4.40 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 44,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "South Korea (S. Korea sample) overall pace-of-life index = -0.02 (rank 18 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  "saudi-arabia": {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    scores: {
      communicating: {
        sources: [
          {
            value: 82,
            sourceId: "hall-beyond-culture",
            explanation: "Arab tier on Hall's LC→HC continuum.",
          },
          {
            value: 62,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 38 (Hofstede et al., 2010).",
          },
          {
            label: "High-context",
            sourceId: "hall-hall-1990",
            explanation: "Arab cultures among Hall's highest-context groups.",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 78,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 44,
            label: "Direct argumentation proxy",
            sourceId: "uysal-argumentation-2012",
            explanation:
              "The intercultural argumentation review cites Greek argumentation among cultures reported as more direct than U.S. patterns; retained near the middle with a principles-side tilt.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 90,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 86,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 48,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2004): 50.5% of Saudi Arabia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 88,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 84,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
    },
  },
  australia: {
    id: "australia",
    name: "Australia",
    scores: {
      communicating: {
        sources: [
          {
            value: 35,
            sourceId: "hall-beyond-culture",
            explanation: "Low-context Western culture; grouped with explicit-communication societies.",
          },
          {
            value: 10,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 90 (Hofstede et al., 2010).",
          },
          {
            label: "Low- to moderate-context",
            sourceId: "hall-hall-1990",
            explanation: "Low-context Anglo culture; direct communication preferred (Hall, 1976).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 40,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Australia assertiveness practices = 4.28 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 70,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 52,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Australia power distance practices = 4.74 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 24,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Australia participative global leadership dimension = 5.71 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 50,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 48.5% of Australia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 40,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Australia assertiveness practices = 4.28 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 28,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
    },
  },
  canada: {
    id: "canada",
    name: "Canada",
    scores: {
      communicating: {
        sources: [
          {
            value: 32,
            sourceId: "hall-beyond-culture",
            explanation: "Northern American tier on Hall's continuum alongside the United States.",
          },
          {
            value: 20,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 80 (Hofstede et al., 2010).",
          },
          {
            label: "Low-context",
            sourceId: "hall-hall-1990",
            explanation: "Low-context Anglo culture; explicit verbal communication (Hall, 1976).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 55,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "GLOBE English-speaking Canada assertiveness practices = 4.05 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 65,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 55,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "GLOBE English-speaking Canada power distance practices = 4.82 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 0,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "GLOBE Canada English-speaking participative global leadership dimension = 6.09 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 52,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 46.7% of Canada respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 55,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "GLOBE English-speaking Canada assertiveness practices = 4.05 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 41,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Canada overall pace-of-life index = -0.26 (rank 17 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  switzerland: {
    id: "switzerland",
    name: "Switzerland",
    scores: {
      communicating: {
        sources: [
          {
            value: 5,
            sourceId: "hall-beyond-culture",
            explanation: "Lowest position on Hall's published LC→HC continuum (Hall, 1976).",
          },
          {
            value: 32,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 68 (Hofstede et al., 2010).",
          },
          {
            label: "Low-context",
            sourceId: "hall-hall-1990",
            explanation: "Swiss-Germans anchor the low-context end of Hall's continuum.",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 25,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Switzerland assertiveness practices = 4.51 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 58,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 59,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Switzerland power distance practices = 4.90 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 9,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Switzerland participative global leadership dimension = 5.94 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 40,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 58.5% of Switzerland respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 25,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Switzerland assertiveness practices = 4.51 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 0,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Switzerland overall pace-of-life index = -3.43 (rank 1 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  norway: {
    id: "norway",
    name: "Norway",
    scores: {
      communicating: {
        sources: [
          {
            value: 22,
            sourceId: "hall-beyond-culture",
            explanation: "Scandinavian tier on Hall's LC→HC continuum.",
          },
          {
            value: 31,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 69 (Hofstede et al., 2010).",
          },
          {
            label: "Low- to moderate-context",
            sourceId: "hall-hall-1990",
            explanation: "Scandinavian cultures rank toward the low-context end (Hall, 1976).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 46,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 54,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 18,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 62,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 27,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 72.1% of Norway respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 42,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 22,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
    },
  },
  greece: {
    id: "greece",
    name: "Greece",
    scores: {
      communicating: {
        sources: [
          {
            value: 65,
            sourceId: "hall-beyond-culture",
            explanation: "Middle-context position in updated Hall country classifications.",
          },
          {
            value: 65,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 35 (Hofstede et al., 2010).",
          },
          {
            label: "Moderate- to high-context",
            sourceId: "hall-hall-1990",
            explanation: "Classified as a middle- to high-context culture in follow-up Hall research (Broeder, 2021).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 20,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Greece assertiveness practices = 4.58 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 44,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 81,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Greece power distance practices = 5.40 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 18,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Greece participative global leadership dimension = 5.81 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 91,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 8.4% of Greece respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 20,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Greece assertiveness practices = 4.58 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 51,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Greece overall pace-of-life index = 0.54 (rank 21 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  russia: {
    id: "russia",
    name: "Russia",
    scores: {
      communicating: {
        sources: [
          {
            value: 65,
            sourceId: "hall-beyond-culture",
            explanation: "High-context tendencies in Hall-derived intercultural classifications.",
          },
          {
            value: 61,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 39 (Hofstede et al., 2010).",
          },
          {
            label: "Moderate- to high-context",
            sourceId: "hall-hall-1990",
            explanation: "Eastern European / Slavic cultures treated as high-context in Hall-derived taxonomies.",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 79,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Russia assertiveness practices = 3.68 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 40,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 86,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Russia power distance practices = 5.52 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 88,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Russia participative global leadership dimension = 4.67 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 76,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 22.9% of Russia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 79,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Russia assertiveness practices = 3.68 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 70,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
    },
  },
  argentina: {
    id: "argentina",
    name: "Argentina",
    scores: {
      communicating: {
        sources: [
          {
            value: 72,
            sourceId: "hall-beyond-culture",
            explanation: "Latin American tier on Hall's LC→HC continuum.",
          },
          {
            value: 54,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 46 (Hofstede et al., 2010).",
          },
          {
            label: "Moderate- to high-context",
            sourceId: "hall-hall-1990",
            explanation: "Latin American cultures classified as high-context (Hall, 1976).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 44,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Argentina assertiveness practices = 4.22 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 56,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 92,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Argentina power distance practices = 5.64 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 12,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Argentina participative global leadership dimension = 5.89 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 80,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 19.2% of Argentina respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 44,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Argentina assertiveness practices = 4.22 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 76,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
    },
  },
  singapore: {
    id: "singapore",
    name: "Singapore",
    scores: {
      communicating: {
        sources: [
          {
            value: 88,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Score derived as 100 − IDV (IDV = 20); corroborates high-context classification.",
          },
          {
            label: "High-context",
            sourceId: "hall-beyond-culture",
            explanation: "East Asian / Chinese-influenced high-context business communication.",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 47,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Singapore assertiveness practices = 4.17 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 36,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 63,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Singapore power distance practices = 4.99 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 49,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Singapore participative global leadership dimension = 5.30 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 65,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 34.4% of Singapore respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 47,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Singapore assertiveness practices = 4.17 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 36,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Singapore overall pace-of-life index = -0.65 (rank 15 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  indonesia: {
    id: "indonesia",
    name: "Indonesia",
    scores: {
      communicating: {
        sources: [
          {
            value: 86,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Score derived as 100 − IDV (IDV = 14).",
          },
          {
            label: "High-context",
            sourceId: "hall-beyond-culture",
            explanation: "Southeast Asian collectivist communication — strongly implicit (McKay-Semmler, 2017).",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 67,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Indonesia assertiveness practices = 3.86 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 30,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 71,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Indonesia power distance practices = 5.18 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 92,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Indonesia participative global leadership dimension = 4.60 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 94,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 4.6% of Indonesia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 67,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Indonesia assertiveness practices = 3.86 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 98,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Indonesia overall pace-of-life index = 4.14 (rank 30 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  turkey: {
    id: "turkey",
    name: "Turkey",
    scores: {
      communicating: {
        sources: [
          {
            value: 63,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Not on Hall's original continuum; score derived as 100 − IDV (IDV = 37).",
          },
          {
            label: "Moderate- to high-context",
            sourceId: "hall-beyond-culture",
            explanation: "Middle-context culture; relational and indirect tendencies.",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 23,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Turkey assertiveness practices = 4.53 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 48,
            label: "Turkish L1/L2 argumentation proxy",
            sourceId: "uysal-argumentation-2012",
            explanation:
              "Uysal's Turkish L1/L2 argumentative-writing study ties argument patterns to cultural and educational writing instruction, supporting a central placement.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 89,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Turkey power distance practices = 5.57 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 62,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Turkey participative global leadership dimension = 5.09 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 85,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 14.0% of Turkey respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 23,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Turkey assertiveness practices = 4.53 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 70,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
    },
  },
  egypt: {
    id: "egypt",
    name: "Egypt",
    scores: {
      communicating: {
        sources: [
          {
            value: 82,
            sourceId: "hall-beyond-culture",
            explanation: "Arab tier on Hall's LC→HC continuum.",
          },
          {
            value: 62,
            label: "High-context proxy (100 - IDV)",
            sourceId: "hofstede-software-of-mind",
            explanation: "Individualism index = 38 (Hofstede et al., 2010).",
          },
          {
            label: "High-context",
            sourceId: "hall-hall-1990",
            explanation: "Arab cultures among Hall's highest-context groups.",
          },
        ],
      },
      evaluating: {
        sources: [
          {
            value: 64,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Egypt assertiveness practices = 3.91 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more indirect negative feedback.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a proxy for direct feedback norms.",
          },
        ],
      },
      persuading: {
        sources: [
          {
            value: 48,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
      leading: {
        sources: [
          {
            value: 59,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Egypt power distance practices = 4.92 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },
      deciding: {
        sources: [
          {
            value: 87,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Egypt participative global leadership dimension = 4.69 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 92,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 7.3% of Egypt respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      disagreeing: {
        sources: [
          {
            value: 64,
            label: "GLOBE assertiveness practices (inverse normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Egypt assertiveness practices = 3.91 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate stronger confrontation avoidance.",
          },
          {
            label: "Assertiveness construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines assertiveness as assertive, confrontational, and aggressive behavior in social relationships, making it a direct proxy for open disagreement norms.",
          },
          {
            label: "Face-negotiation conflict styles",
            sourceId: "ting-toomey-conflict-styles-1991",
            explanation:
              "Cross-cultural conflict research links other-face concern with avoiding, obliging, integrating, and compromising conflict styles, supporting the high pole as confrontation avoidance.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 72,
            sourceId: "meyer-culture-map",
            explanation: "Approximated from Culture Map diagram.",
          },
        ],
      },
    },
  },
  albania: {
    id: "albania",
    name: "Albania",
    scores: {
      leading: {
        sources: [
          {
            value: 46,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Albania power distance practices = 4.62 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 99,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Albania participative global leadership dimension = 4.50 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 96,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 2.8% of Albania respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  austria: {
    id: "austria",
    name: "Austria",
    scores: {
      leading: {
        sources: [
          {
            value: 61,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Austria power distance practices = 4.95 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 6,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Austria participative global leadership dimension = 6.00 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 49,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 49.8% of Austria respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 26,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Austria overall pace-of-life index = -1.43 (rank 8 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  bolivia: {
    id: "bolivia",
    name: "Bolivia",
    scores: {
      leading: {
        sources: [
          {
            value: 41,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Bolivia power distance practices = 4.51 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 49,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Bolivia participative global leadership dimension = 5.29 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 90,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 8.5% of Bolivia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  colombia: {
    id: "colombia",
    name: "Colombia",
    scores: {
      leading: {
        sources: [
          {
            value: 88,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Colombia power distance practices = 5.56 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 36,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Colombia participative global leadership dimension = 5.51 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 94,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 4.5% of Colombia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  "costa-rica": {
    id: "costa-rica",
    name: "Costa Rica",
    scores: {
      leading: {
        sources: [
          {
            value: 51,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Costa Rica power distance practices = 4.74 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 34,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Costa Rica participative global leadership dimension = 5.54 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 30,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Costa Rica overall pace-of-life index = -1.13 (rank 13 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  "czech-republic": {
    id: "czech-republic",
    name: "Czech Republic",
    scores: {
      leading: {
        sources: [
          {
            value: 0,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Czech Republic power distance practices = 3.59 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 15,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Czech Republic participative global leadership dimension = 5.85 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 72,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 27.3% of Czech Republic respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 48,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Czech Republic overall pace-of-life index = 0.28 (rank 20 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  denmark: {
    id: "denmark",
    name: "Denmark",
    scores: {
      leading: {
        sources: [
          {
            value: 14,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Denmark power distance practices = 3.89 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 18,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Denmark participative global leadership dimension = 5.80 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 25,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 73.9% of Denmark respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  ecuador: {
    id: "ecuador",
    name: "Ecuador",
    scores: {
      leading: {
        sources: [
          {
            value: 90,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Ecuador power distance practices = 5.60 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 36,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Ecuador participative global leadership dimension = 5.51 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 93,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 5.8% of Ecuador respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  "el-salvador": {
    id: "el-salvador",
    name: "El Salvador",
    scores: {
      leading: {
        sources: [
          {
            value: 93,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "El Salvador power distance practices = 5.68 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 43,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "El Salvador participative global leadership dimension = 5.40 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 85,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (1998): 14.1% of El Salvador respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 91,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "El Salvador overall pace-of-life index = 3.63 (rank 28 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  finland: {
    id: "finland",
    name: "Finland",
    scores: {
      leading: {
        sources: [
          {
            value: 58,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Finland power distance practices = 4.89 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 11,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Finland participative global leadership dimension = 5.91 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 31,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 68.4% of Finland respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  georgia: {
    id: "georgia",
    name: "Georgia",
    scores: {
      leading: {
        sources: [
          {
            value: 73,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Georgia power distance practices = 5.22 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 75,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Georgia participative global leadership dimension = 4.88 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 90,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 9.0% of Georgia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  guatemala: {
    id: "guatemala",
    name: "Guatemala",
    scores: {
      leading: {
        sources: [
          {
            value: 90,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Guatemala power distance practices = 5.60 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 40,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Guatemala participative global leadership dimension = 5.45 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 81,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 18.0% of Guatemala respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  "hong-kong": {
    id: "hong-kong",
    name: "Hong Kong",
    scores: {
      leading: {
        sources: [
          {
            value: 61,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Hong Kong power distance practices = 4.96 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 76,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Hong Kong participative global leadership dimension = 4.86 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 63,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 36.4% of Hong Kong respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 26,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Hong Kong overall pace-of-life index = -1.39 (rank 10 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  hungary: {
    id: "hungary",
    name: "Hungary",
    scores: {
      leading: {
        sources: [
          {
            value: 88,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Hungary power distance practices = 5.56 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 54,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Hungary participative global leadership dimension = 5.22 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 72,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 27.2% of Hungary respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 44,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Hungary overall pace-of-life index = 0.01 (rank 19 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  iran: {
    id: "iran",
    name: "Iran",
    scores: {
      leading: {
        sources: [
          {
            value: 82,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Iran power distance practices = 5.43 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 70,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Iran participative global leadership dimension = 4.97 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 84,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 14.8% of Iran respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  ireland: {
    id: "ireland",
    name: "Ireland",
    scores: {
      leading: {
        sources: [
          {
            value: 70,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Ireland power distance practices = 5.15 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 28,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Ireland participative global leadership dimension = 5.64 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 62,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2010): 37.3% of Ireland respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 5,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Ireland overall pace-of-life index = -3.02 (rank 2 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  israel: {
    id: "israel",
    name: "Israel",
    scores: {
      leading: {
        sources: [
          {
            value: 51,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Israel power distance practices = 4.73 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 70,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Israel participative global leadership dimension = 4.96 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 76,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2004): 22.9% of Israel respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  kazakhstan: {
    id: "kazakhstan",
    name: "Kazakhstan",
    scores: {
      leading: {
        sources: [
          {
            value: 77,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Kazakhstan power distance practices = 5.31 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 62,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Kazakhstan participative global leadership dimension = 5.10 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 76,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 22.8% of Kazakhstan respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  kuwait: {
    id: "kuwait",
    name: "Kuwait",
    scores: {
      leading: {
        sources: [
          {
            value: 69,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Kuwait power distance practices = 5.12 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 66,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Kuwait participative global leadership dimension = 5.03 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 70,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2014): 28.5% of Kuwait respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  malaysia: {
    id: "malaysia",
    name: "Malaysia",
    scores: {
      leading: {
        sources: [
          {
            value: 71,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Malaysia power distance practices = 5.17 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 60,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Malaysia participative global leadership dimension = 5.12 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 79,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 19.6% of Malaysia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  morocco: {
    id: "morocco",
    name: "Morocco",
    scores: {
      leading: {
        sources: [
          {
            value: 99,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Morocco power distance practices = 5.80 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 48,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Morocco participative global leadership dimension = 5.32 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 82,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 16.5% of Morocco respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  namibia: {
    id: "namibia",
    name: "Namibia",
    scores: {
      leading: {
        sources: [
          {
            value: 76,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Namibia power distance practices = 5.29 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 38,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Namibia participative global leadership dimension = 5.48 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
    },
  },
  "new-zealand": {
    id: "new-zealand",
    name: "New Zealand",
    scores: {
      leading: {
        sources: [
          {
            value: 58,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "New Zealand power distance practices = 4.89 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 37,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "New Zealand participative global leadership dimension = 5.50 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 42,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 56.6% of New Zealand respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  nigeria: {
    id: "nigeria",
    name: "Nigeria",
    scores: {
      leading: {
        sources: [
          {
            value: 99,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Nigeria power distance practices = 5.80 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 56,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Nigeria participative global leadership dimension = 5.18 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 86,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 13.0% of Nigeria respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  philippines: {
    id: "philippines",
    name: "Philippines",
    scores: {
      leading: {
        sources: [
          {
            value: 83,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Philippines power distance practices = 5.44 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 43,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Philippines participative global leadership dimension = 5.40 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 94,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 5.3% of Philippines respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  poland: {
    id: "poland",
    name: "Poland",
    scores: {
      leading: {
        sources: [
          {
            value: 68,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Poland power distance practices = 5.10 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 65,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Poland participative global leadership dimension = 5.04 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 75,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 24.1% of Poland respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 27,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Poland overall pace-of-life index = -1.32 (rank 12 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  portugal: {
    id: "portugal",
    name: "Portugal",
    scores: {
      leading: {
        sources: [
          {
            value: 83,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Portugal power distance practices = 5.44 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 38,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Portugal participative global leadership dimension = 5.48 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 82,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 16.9% of Portugal respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  qatar: {
    id: "qatar",
    name: "Qatar",
    scores: {
      leading: {
        sources: [
          {
            value: 51,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Qatar power distance practices = 4.73 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 83,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Qatar participative global leadership dimension = 4.75 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 78,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2014): 21.4% of Qatar respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  slovenia: {
    id: "slovenia",
    name: "Slovenia",
    scores: {
      leading: {
        sources: [
          {
            value: 78,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Slovenia power distance practices = 5.33 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 42,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Slovenia participative global leadership dimension = 5.42 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 74,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 25.3% of Slovenia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  "south-africa-black-sample": {
    id: "south-africa-black-sample",
    name: "South Africa (Black sample)",
    scores: {
      leading: {
        sources: [
          {
            value: 23,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "South Africa Black sample power distance practices = 4.11 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 65,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "South Africa Black sample participative global leadership dimension = 5.04 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
    },
  },
  "south-africa-white-sample": {
    id: "south-africa-white-sample",
    name: "South Africa (White sample)",
    scores: {
      leading: {
        sources: [
          {
            value: 70,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "South Africa White sample power distance practices = 5.16 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 29,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "South Africa White sample participative global leadership dimension = 5.62 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
    },
  },
  taiwan: {
    id: "taiwan",
    name: "Taiwan",
    scores: {
      leading: {
        sources: [
          {
            value: 71,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Taiwan power distance practices = 5.18 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 85,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Taiwan participative global leadership dimension = 4.73 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 68,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 30.8% of Taiwan respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 35,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Taiwan overall pace-of-life index = -0.73 (rank 14 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  thailand: {
    id: "thailand",
    name: "Thailand",
    scores: {
      leading: {
        sources: [
          {
            value: 91,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Thailand power distance practices = 5.63 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 49,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Thailand participative global leadership dimension = 5.29 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 70,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 28.9% of Thailand respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  venezuela: {
    id: "venezuela",
    name: "Venezuela",
    scores: {
      leading: {
        sources: [
          {
            value: 81,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Venezuela power distance practices = 5.40 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 75,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Venezuela participative global leadership dimension = 4.88 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 85,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 14.2% of Venezuela respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  zambia: {
    id: "zambia",
    name: "Zambia",
    scores: {
      leading: {
        sources: [
          {
            value: 77,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Zambia power distance practices = 5.31 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 50,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Zambia participative global leadership dimension = 5.29 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 88,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2010): 10.8% of Zambia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  zimbabwe: {
    id: "zimbabwe",
    name: "Zimbabwe",
    scores: {
      leading: {
        sources: [
          {
            value: 93,
            label: "GLOBE power distance practices (normalized)",
            sourceId: "globe-phase2-societal-culture-data",
            explanation:
              "Zimbabwe power distance practices = 5.67 (1-7). Min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more hierarchical leadership expectations.",
          },
          {
            label: "Power-distance leadership construct",
            sourceId: "globe-introduction-2002",
            explanation:
              "GLOBE connects national culture dimensions, including power distance, with implicit leadership expectations across surveyed societies.",
          },
        ],
      },

      deciding: {
        sources: [
          {
            value: 32,
            label: "GLOBE participative leadership (inverse normalized)",
            sourceId: "globe-phase2-leadership-data",
            explanation:
              "Zimbabwe participative global leadership dimension = 5.57 (1-7). Reversed and min-max normalized across GLOBE Phase 2 societies so higher app scores indicate more top-down decision making.",
          },
          {
            label: "Participative leadership construct",
            sourceId: "globe-culture-leadership-2004",
            explanation:
              "GLOBE defines participative leadership as involving others in making and implementing decisions, with nonparticipative and autocratic dimensions reverse-scored.",
          },
        ],
      },
      trusting: {
        sources: [
          {
            value: 97,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 2.1% of Zimbabwe respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  algeria: {
    id: "algeria",
    name: "Algeria",
    scores: {
      trusting: {
        sources: [
          {
            value: 82,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2014): 17.2% of Algeria respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  andorra: {
    id: "andorra",
    name: "Andorra",
    scores: {
      trusting: {
        sources: [
          {
            value: 74,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 25.5% of Andorra respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  armenia: {
    id: "armenia",
    name: "Armenia",
    scores: {
      trusting: {
        sources: [
          {
            value: 81,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 17.5% of Armenia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  azerbaijan: {
    id: "azerbaijan",
    name: "Azerbaijan",
    scores: {
      trusting: {
        sources: [
          {
            value: 73,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 26.3% of Azerbaijan respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  bangladesh: {
    id: "bangladesh",
    name: "Bangladesh",
    scores: {
      trusting: {
        sources: [
          {
            value: 86,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 12.9% of Bangladesh respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  belarus: {
    id: "belarus",
    name: "Belarus",
    scores: {
      trusting: {
        sources: [
          {
            value: 59,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 40.0% of Belarus respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  belgium: {
    id: "belgium",
    name: "Belgium",
    scores: {
      trusting: {
        sources: [
          {
            value: 63,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2010): 35.7% of Belgium respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  "bosnia-and-herzegovina": {
    id: "bosnia-and-herzegovina",
    name: "Bosnia and Herzegovina",
    scores: {
      trusting: {
        sources: [
          {
            value: 89,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 9.6% of Bosnia and Herzegovina respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  bulgaria: {
    id: "bulgaria",
    name: "Bulgaria",
    scores: {
      trusting: {
        sources: [
          {
            value: 82,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 17.1% of Bulgaria respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 65,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Bulgaria overall pace-of-life index = 1.59 (rank 24 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  "burkina-faso": {
    id: "burkina-faso",
    name: "Burkina Faso",
    scores: {
      trusting: {
        sources: [
          {
            value: 85,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2010): 13.8% of Burkina Faso respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  chile: {
    id: "chile",
    name: "Chile",
    scores: {
      trusting: {
        sources: [
          {
            value: 86,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 12.9% of Chile respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  croatia: {
    id: "croatia",
    name: "Croatia",
    scores: {
      trusting: {
        sources: [
          {
            value: 85,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 13.6% of Croatia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  cyprus: {
    id: "cyprus",
    name: "Cyprus",
    scores: {
      trusting: {
        sources: [
          {
            value: 92,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 6.6% of Cyprus respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  "dominican-republic": {
    id: "dominican-republic",
    name: "Dominican Republic",
    scores: {
      trusting: {
        sources: [
          {
            value: 74,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (1998): 25.2% of Dominican Republic respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  estonia: {
    id: "estonia",
    name: "Estonia",
    scores: {
      trusting: {
        sources: [
          {
            value: 65,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 33.9% of Estonia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  ethiopia: {
    id: "ethiopia",
    name: "Ethiopia",
    scores: {
      trusting: {
        sources: [
          {
            value: 87,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 11.9% of Ethiopia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  ghana: {
    id: "ghana",
    name: "Ghana",
    scores: {
      trusting: {
        sources: [
          {
            value: 94,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2014): 5.0% of Ghana respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  haiti: {
    id: "haiti",
    name: "Haiti",
    scores: {
      trusting: {
        sources: [
          {
            value: 78,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2014): 21.3% of Haiti respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  iceland: {
    id: "iceland",
    name: "Iceland",
    scores: {
      trusting: {
        sources: [
          {
            value: 37,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 62.3% of Iceland respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  iraq: {
    id: "iraq",
    name: "Iraq",
    scores: {
      trusting: {
        sources: [
          {
            value: 88,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 11.0% of Iraq respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  jordan: {
    id: "jordan",
    name: "Jordan",
    scores: {
      trusting: {
        sources: [
          {
            value: 83,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 15.9% of Jordan respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 76,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Jordan overall pace-of-life index = 2.44 (rank 26 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  syria: {
    id: "syria",
    name: "Syria",
    scores: {
      scheduling: {
        sources: [
          {
            value: 86,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Syria overall pace-of-life index = 3.26 (rank 27 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  kenya: {
    id: "kenya",
    name: "Kenya",
    scores: {
      trusting: {
        sources: [
          {
            value: 90,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 9.5% of Kenya respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 54,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Kenya overall pace-of-life index = 0.78 (rank 22 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  kosovo: {
    id: "kosovo",
    name: "Kosovo",
    scores: {
      trusting: {
        sources: [
          {
            value: 88,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2010): 10.5% of Kosovo respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  kyrgyzstan: {
    id: "kyrgyzstan",
    name: "Kyrgyzstan",
    scores: {
      trusting: {
        sources: [
          {
            value: 86,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 12.8% of Kyrgyzstan respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  latvia: {
    id: "latvia",
    name: "Latvia",
    scores: {
      trusting: {
        sources: [
          {
            value: 77,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 22.2% of Latvia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  lebanon: {
    id: "lebanon",
    name: "Lebanon",
    scores: {
      trusting: {
        sources: [
          {
            value: 89,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 9.9% of Lebanon respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  libya: {
    id: "libya",
    name: "Libya",
    scores: {
      trusting: {
        sources: [
          {
            value: 90,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 9.1% of Libya respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  lithuania: {
    id: "lithuania",
    name: "Lithuania",
    scores: {
      trusting: {
        sources: [
          {
            value: 67,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 31.7% of Lithuania respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  luxembourg: {
    id: "luxembourg",
    name: "Luxembourg",
    scores: {
      trusting: {
        sources: [
          {
            value: 68,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2010): 31.4% of Luxembourg respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  macao: {
    id: "macao",
    name: "Macao",
    scores: {
      trusting: {
        sources: [
          {
            value: 58,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 41.4% of Macao respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  maldives: {
    id: "maldives",
    name: "Maldives",
    scores: {
      trusting: {
        sources: [
          {
            value: 78,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 21.1% of Maldives respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  mali: {
    id: "mali",
    name: "Mali",
    scores: {
      trusting: {
        sources: [
          {
            value: 84,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2010): 14.9% of Mali respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  malta: {
    id: "malta",
    name: "Malta",
    scores: {
      trusting: {
        sources: [
          {
            value: 78,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2010): 21.3% of Malta respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  moldova: {
    id: "moldova",
    name: "Moldova",
    scores: {
      trusting: {
        sources: [
          {
            value: 85,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2010): 14.1% of Moldova respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  mongolia: {
    id: "mongolia",
    name: "Mongolia",
    scores: {
      trusting: {
        sources: [
          {
            value: 73,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 26.0% of Mongolia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  montenegro: {
    id: "montenegro",
    name: "Montenegro",
    scores: {
      trusting: {
        sources: [
          {
            value: 77,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 21.7% of Montenegro respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  myanmar: {
    id: "myanmar",
    name: "Myanmar",
    scores: {
      trusting: {
        sources: [
          {
            value: 84,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 15.1% of Myanmar respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  nicaragua: {
    id: "nicaragua",
    name: "Nicaragua",
    scores: {
      trusting: {
        sources: [
          {
            value: 95,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 4.2% of Nicaragua respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  "north-macedonia": {
    id: "north-macedonia",
    name: "North Macedonia",
    scores: {
      trusting: {
        sources: [
          {
            value: 84,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 15.1% of North Macedonia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  "northern-cyprus": {
    id: "northern-cyprus",
    name: "Northern Cyprus",
    scores: {
      trusting: {
        sources: [
          {
            value: 94,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2010): 4.7% of Northern Cyprus respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  "northern-ireland": {
    id: "northern-ireland",
    name: "Northern Ireland",
    scores: {
      trusting: {
        sources: [
          {
            value: 60,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 38.8% of Northern Ireland respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  pakistan: {
    id: "pakistan",
    name: "Pakistan",
    scores: {
      trusting: {
        sources: [
          {
            value: 76,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 23.3% of Pakistan respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  palestine: {
    id: "palestine",
    name: "Palestine",
    scores: {
      trusting: {
        sources: [
          {
            value: 83,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2014): 15.8% of Palestine respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  peru: {
    id: "peru",
    name: "Peru",
    scores: {
      trusting: {
        sources: [
          {
            value: 95,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 4.2% of Peru respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  "puerto-rico": {
    id: "puerto-rico",
    name: "Puerto Rico",
    scores: {
      trusting: {
        sources: [
          {
            value: 81,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 17.7% of Puerto Rico respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  romania: {
    id: "romania",
    name: "Romania",
    scores: {
      trusting: {
        sources: [
          {
            value: 87,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 12.1% of Romania respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
      scheduling: {
        sources: [
          {
            value: 76,
            label: "Pace-of-life flexible-time proxy",
            sourceId: "levine-norenzayan-pace-life-1999",
            explanation:
              "Romania overall pace-of-life index = 2.42 (rank 25 of 31; lower ranks are faster). Min-max normalized so higher app scores indicate more flexible time and lower scores indicate more linear clock-time scheduling.",
          },
          {
            label: "Monochronic/polychronic time construct",
            sourceId: "kaufman-scarborough-monochronic-polychronic-2017",
            explanation:
              "Kaufman-Scarborough reviews Hall's monochronic and polychronic time constructs, linking clock-oriented pace and punctuality to the linear-time versus flexible-time distinction.",
          },
        ],
      },
    },
  },
  rwanda: {
    id: "rwanda",
    name: "Rwanda",
    scores: {
      trusting: {
        sources: [
          {
            value: 82,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2014): 16.6% of Rwanda respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  serbia: {
    id: "serbia",
    name: "Serbia",
    scores: {
      trusting: {
        sources: [
          {
            value: 83,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 16.3% of Serbia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  slovakia: {
    id: "slovakia",
    name: "Slovakia",
    scores: {
      trusting: {
        sources: [
          {
            value: 77,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 21.6% of Slovakia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  "south-africa": {
    id: "south-africa",
    name: "South Africa",
    scores: {
      trusting: {
        sources: [
          {
            value: 76,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2014): 23.3% of South Africa respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  tajikistan: {
    id: "tajikistan",
    name: "Tajikistan",
    scores: {
      trusting: {
        sources: [
          {
            value: 78,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 20.6% of Tajikistan respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  tanzania: {
    id: "tanzania",
    name: "Tanzania",
    scores: {
      trusting: {
        sources: [
          {
            value: 91,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2004): 7.7% of Tanzania respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  "trinidad-and-tobago": {
    id: "trinidad-and-tobago",
    name: "Trinidad and Tobago",
    scores: {
      trusting: {
        sources: [
          {
            value: 96,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2014): 3.2% of Trinidad and Tobago respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  tunisia: {
    id: "tunisia",
    name: "Tunisia",
    scores: {
      trusting: {
        sources: [
          {
            value: 85,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 13.8% of Tunisia respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  uganda: {
    id: "uganda",
    name: "Uganda",
    scores: {
      trusting: {
        sources: [
          {
            value: 91,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2004): 7.6% of Uganda respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  ukraine: {
    id: "ukraine",
    name: "Ukraine",
    scores: {
      trusting: {
        sources: [
          {
            value: 71,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 28.3% of Ukraine respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  uruguay: {
    id: "uruguay",
    name: "Uruguay",
    scores: {
      trusting: {
        sources: [
          {
            value: 85,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 14.5% of Uruguay respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  uzbekistan: {
    id: "uzbekistan",
    name: "Uzbekistan",
    scores: {
      trusting: {
        sources: [
          {
            value: 65,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 33.6% of Uzbekistan respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  vietnam: {
    id: "vietnam",
    name: "Vietnam",
    scores: {
      trusting: {
        sources: [
          {
            value: 71,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2022): 27.7% of Vietnam respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
  yemen: {
    id: "yemen",
    name: "Yemen",
    scores: {
      trusting: {
        sources: [
          {
            value: 60,
            label: "Generalized trust inverse proxy",
            sourceId: "integrated-values-surveys-trust",
            explanation:
              "IVS/WVS latest observation (2014): 38.5% of Yemen respondents answered \"most people can be trusted\". Inverted to 0-99 so higher app scores indicate stronger relationship-based trust reliance.",
          },
          {
            label: "Radius-of-trust construct",
            sourceId: "delhey-newton-welzel-2011",
            explanation:
              "Delhey et al. show the standard WVS generalized-trust question usually reflects out-group trust, supporting its use as an inverse proxy for task- versus relationship-based trust.",
          },
        ],
      },
    },
  },
});

export type CountryId = keyof typeof COUNTRY_SCORES;
export type Country = (typeof COUNTRY_SCORES)[CountryId];

export const countries: Country[] = Object.values(COUNTRY_SCORES);
