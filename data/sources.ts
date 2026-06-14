export type SourceId =
  | "meyer-culture-map"
  | "hall-beyond-culture"
  | "hall-hall-1990"
  | "hofstede-software-of-mind"
  | "globe-introduction-2002"
  | "globe-culture-leadership-2004"
  | "globe-phase2-societal-culture-data"
  | "globe-phase2-leadership-data"
  | "mckay-semmler-2017"
  | "cardon-2008"
  | "kaplan-cultural-thought-patterns-1966"
  | "siepmann-academic-writing-culture-2006"
  | "uysal-argumentation-2012"
  | "helal-franco-american-aids-war-2014"
  | "norenzayan-formal-intuitive-reasoning-2002"
  | "lechuga-holistic-reasoning-mexicans-2011"
  | "klein-rosetta-phase1-2009"
  | "ting-toomey-conflict-styles-1991"
  | "integrated-values-surveys-trust"
  | "delhey-newton-welzel-2011"
  | "levine-norenzayan-pace-life-1999"
  | "kaufman-scarborough-monochronic-polychronic-2017";

export interface Source {
  id: SourceId;
  title: string;
  author?: string;
  year?: number;
  url?: string;
  publisher?: string;
  doi?: string;
  note?: string;
  scoreDerivation?: string;
}

type SourceRegistry = { [Id in SourceId]: Source & { id: Id } };

export const sourceById = {
  "meyer-culture-map": {
    id: "meyer-culture-map",
    title: "The Culture Map",
    author: "Erin Meyer",
    year: 2014,
    publisher: "PublicAffairs",
    url: "https://erinmeyer.com/books/the-culture-map/",
    note:
      "Practitioner framework used for the Evaluating, Persuading, Leading, Deciding, Disagreeing, and Scheduling scales.",
    scoreDerivation:
      "Meyer's Culture Map presents country positions visually along each scale rather than as a 0-99 data table. Values were approximated from those diagrams and normalized into this app's 0-99 display range.",
  },
  "hall-beyond-culture": {
    id: "hall-beyond-culture",
    title: "Beyond Culture",
    author: "Edward T. Hall",
    year: 1976,
    publisher: "Doubleday",
    url: "https://www.penguinrandomhouse.com/books/73813/beyond-culture-by-edward-t-hall/",
    note:
      "Introduces the high-context / low-context communication continuum used on the Communicating scale.",
    scoreDerivation:
      "Hall describes relative context dependence rather than country-level numeric scores, so values were positioned qualitatively on the 0-99 scale using the country and regional placements in the text as anchors.",
  },
  "hall-hall-1990": {
    id: "hall-hall-1990",
    title: "Understanding Cultural Differences",
    author: "Edward T. Hall & Mildred Reed Hall",
    year: 1990,
    publisher: "Intercultural Press",
    url: "https://search.worldcat.org/title/20259415",
    note:
      "Applies Hall's context model to international business; classifies e.g. Japan as high-context and Germany as low-context.",
    scoreDerivation:
      "Classifications such as high-context or low-context were converted to broad 0-99 bands, then adjusted within those bands when the source distinguishes countries or regions from one another.",
  },
  "hofstede-software-of-mind": {
    id: "hofstede-software-of-mind",
    title: "Cultures and Organizations: Software of the Mind",
    author: "Geert Hofstede, Gert Jan Hofstede & Michael Minkov",
    year: 2010,
    publisher: "McGraw-Hill",
    url: "https://www.hofstede-insights.com/",
    note:
      "Individualism–Collectivism (IDV) correlates with low- vs. high-context communication; proxy score = 100 − IDV.",
    scoreDerivation:
      "Hofstede IDV is already a 0-100 country index, but its direction is opposite this scale; proxy values use 100 - IDV and are clamped into the app's 0-99 display range.",
  },
  "globe-introduction-2002": {
    id: "globe-introduction-2002",
    title:
      "Understanding Cultures and Implicit Leadership Theories Across the Globe: An Introduction to Project GLOBE",
    author: "Robert House, Mansour Javidan, Paul Hanges & Peter Dorfman",
    year: 2002,
    publisher: "Journal of World Business",
    doi: "10.1016/S1090-9516(01)00069-4",
    url: "https://doi.org/10.1016/S1090-9516(01)00069-4",
    note:
      "Introduces the GLOBE research program, its country-level culture dimensions, and the link between societal culture and implicit leadership theories.",
    scoreDerivation:
      "Used to justify Power Distance Societal Practices as the academic proxy for the Leading scale: higher power distance indicates stronger acceptance of hierarchy, authority, and status differences.",
  },
  "globe-culture-leadership-2004": {
    id: "globe-culture-leadership-2004",
    title: "Culture, Leadership, and Organizations: The GLOBE Study of 62 Societies",
    author: "Robert J. House, Paul J. Hanges, Mansour Javidan, Peter W. Dorfman & Vipin Gupta",
    year: 2004,
    publisher: "SAGE Publications",
    url: "https://us.sagepub.com/en-us/cam/book/culture-leadership-and-organizations",
    note:
      "Academic GLOBE study of societal culture and leadership across 62 societies, including Assertiveness, Power Distance, and Participative Leadership constructs.",
    scoreDerivation:
      "Used to justify Assertiveness Societal Practices as a proxy for the Evaluating and Disagreeing scales, Power Distance Societal Practices as a proxy for the Leading scale, and Participative Leadership as a proxy for the Deciding scale.",
  },
  "globe-phase2-societal-culture-data": {
    id: "globe-phase2-societal-culture-data",
    title: "GLOBE Phase 2 Aggregated Societal Level Data for Society Culture Scales",
    author: "GLOBE Project",
    year: 2004,
    publisher: "GLOBE Foundation",
    url: "https://www.globeproject.com/data/GLOBE-Phase-2-Aggregated-Societal-Culture-Data.xls",
    note:
      "Official country-level culture practices workbook from the 2004 GLOBE study.",
    scoreDerivation:
      "Evaluating and Disagreeing use Assertiveness Societal Practices, reversed and min-max normalized because higher GLOBE assertiveness indicates more direct, confrontational behavior while the high poles here are indirect negative feedback and confrontation avoidance. Leading uses Power Distance Societal Practices, min-max normalized directly because higher GLOBE power distance indicates stronger acceptance of hierarchy, authority, and status differences.",
  },
  "globe-phase2-leadership-data": {
    id: "globe-phase2-leadership-data",
    title: "GLOBE Phase 2 Aggregated Societal Level Data for Leadership Scales",
    author: "GLOBE Project",
    year: 2004,
    publisher: "GLOBE Foundation",
    url: "https://globeproject.com/data/GLOBE-Phase-2-Aggregated-Leadership-Data.xls",
    note:
      "Official country-level leadership workbook from the 2004 GLOBE study.",
    scoreDerivation:
      "Deciding uses the Participative Global Leadership Dimension, reversed and min-max normalized because higher GLOBE participative leadership indicates involving others in decisions while the high pole here is top-down decision making.",
  },
  "mckay-semmler-2017": {
    id: "mckay-semmler-2017",
    title: "High- and Low-Context Cultures",
    author: "Kelly L. McKay-Semmler",
    year: 2017,
    publisher: "The International Encyclopedia of Intercultural Communication (Wiley)",
    doi: "10.1002/9781118783665.ieicc0106",
    url: "https://doi.org/10.1002/9781118783665.ieicc0106",
    note:
      "Survey of Hall's continuum, its applications, and critiques in intercultural communication research.",
    scoreDerivation:
      "Not a country score table; used to validate terminology and keep qualitative placements tied to the published high-/low-context framework.",
  },
  "cardon-2008": {
    id: "cardon-2008",
    title:
      "A Critique of Hall's Contexting Model: A Meta-Analysis of Literature on Intercultural Business and Technical Communication",
    author: "Peter W. Cardon",
    year: 2008,
    publisher: "Journal of Business and Technical Communication",
    doi: "10.1177/1050651908320361",
    url: "https://doi.org/10.1177/1050651908320361",
    note:
      "Meta-analysis of 224 articles; finds Hall's model widely cited but empirically under-tested.",
    scoreDerivation:
      "Not used to generate numeric values directly; included to document why scores are treated as approximate, cited placements rather than measured empirical indices.",
  },
  "kaplan-cultural-thought-patterns-1966": {
    id: "kaplan-cultural-thought-patterns-1966",
    title: "Cultural Thought Patterns in Inter-Cultural Education",
    author: "Robert B. Kaplan",
    year: 1966,
    publisher: "Language Learning",
    url: "https://www.colby.edu/wp-content/uploads/2024/10/Kaplan_CR_1965.pdf",
    note:
      "Foundational contrastive-rhetoric article arguing that rhetorical logic varies by culture and that English expository writing expects linear argument development.",
    scoreDerivation:
      "Used as a qualitative proxy for the Persuading scale where country evidence concerns argument organization rather than a direct numeric principles-first/applications-first index.",
  },
  "siepmann-academic-writing-culture-2006": {
    id: "siepmann-academic-writing-culture-2006",
    title:
      "Academic Writing and Culture: An Overview of Differences between English, French and German",
    author: "Dirk Siepmann",
    year: 2006,
    publisher: "Meta",
    url: "https://iuuk.mff.cuni.cz/~andrew/EAP/Siepmann-Academic%20Writing%20and%20Culture.pdf",
    note:
      "Reviews culture-specific intellectual styles in English, French, and German academic writing, including Galtung's Saxonic, Gallic, and Teutonic styles.",
    scoreDerivation:
      "Used for Persuading where the source describes data-oriented Saxonic style, theory-/deduction-oriented German style, and French dialectical essay traditions.",
  },
  "uysal-argumentation-2012": {
    id: "uysal-argumentation-2012",
    title: "Argumentation across L1 and L2 Writing: Exploring Cultural Influences and Transfer Issues",
    author: "Hacer Hande Uysal",
    year: 2012,
    publisher: "Vigo International Journal of Applied Linguistics",
    url: "https://revistas.uvigo.es/index.php/vial/article/download/53/53/105",
    note:
      "Surveys intercultural argumentation research and reports Turkish L1/L2 argumentative-writing evidence.",
    scoreDerivation:
      "Used as a Persuading proxy where argument orientation, evidence style, and directness are closer to persuasion behavior than broad value indices.",
  },
  "helal-franco-american-aids-war-2014": {
    id: "helal-franco-american-aids-war-2014",
    title:
      "Genres, Styles and Discourse Communities in Global Communicative Competition: The Case of the Franco-American 'AIDS War' (1983-1987)",
    author: "Fethi Helal",
    year: 2014,
    publisher: "Discourse Studies",
    doi: "10.1177/1461445613496352",
    url: "https://doi.org/10.1177/1461445613496352",
    note:
      "Compares American and French scientific rhetorical strategies in a high-stakes research controversy.",
    scoreDerivation:
      "Used as a country-specific Persuading proxy for French and American argument presentation styles.",
  },
  "norenzayan-formal-intuitive-reasoning-2002": {
    id: "norenzayan-formal-intuitive-reasoning-2002",
    title: "Cultural Preferences for Formal versus Intuitive Reasoning",
    author: "Ara Norenzayan, Richard E. Nisbett, Edward E. Smith & Beom Jun Kim",
    year: 2002,
    publisher: "Cognitive Science",
    url: "https://websites.umich.edu/~nisbett/formalreas.pdf",
    note:
      "Experimental comparison of European American, Chinese, Korean, and Asian American reasoning when formal rules conflict with intuitive strategies.",
    scoreDerivation:
      "Used as supporting evidence for East Asian reasoning-style placements on Persuading; it is not treated as a direct numeric business-persuasion scale.",
  },
  "lechuga-holistic-reasoning-mexicans-2011": {
    id: "lechuga-holistic-reasoning-mexicans-2011",
    title: "Holistic Reasoning on the Other Side of the World: Validation of the Analism/Holism Scale in Mexicans",
    author: "Julia Lechuga, Beatriz Maldonado Santos, Azenett A. Garza-Caballero & Ricardo Villarreal",
    year: 2011,
    publisher: "Cultural Diversity and Ethnic Minority Psychology",
    doi: "10.1037/a0023881",
    url: "https://doi.org/10.1037/a0023881",
    note:
      "Validates the Analysis-Holism Scale in Mexican samples and compares Mexican and U.S. American holistic-reasoning tendencies.",
    scoreDerivation:
      "Used as supporting evidence for Mexico's Persuading placement only; the source measures holistic reasoning, not an exact persuasion index.",
  },
  "klein-rosetta-phase1-2009": {
    id: "klein-rosetta-phase1-2009",
    title: "Cultural Differences in Cognition: Rosetta Phase I",
    author: "Helen Altman Klein, Mei-Hua Lin, Mark Radford, Takahiko Masuda, Incheol Choi, Yunnwen Lien, Yeiyuh Yeh & Kenneth R. Boff",
    year: 2009,
    publisher: "Psychological Reports",
    doi: "10.2466/PR0.105.2.659-674",
    url: "https://doi.org/10.2466/PR0.105.2.659-674",
    note:
      "Assesses analytic-holistic cognition tasks across U.S., Japan, Korea, and Taiwan student samples.",
    scoreDerivation:
      "Used as supporting evidence for East Asian Persuading placements; the measured construct is analytic-holistic reasoning, not a direct Meyer-scale score.",
  },
  "ting-toomey-conflict-styles-1991": {
    id: "ting-toomey-conflict-styles-1991",
    title:
      "Culture, Face Maintenance, and Styles of Handling Interpersonal Conflict: A Study in Five Cultures",
    author:
      "Stella Ting-Toomey, Ge Gao, Paula Trubisky, Zhizhong Yang, Hak Soo Kim, Sung-Ling Lin & Tsukasa Nishida",
    year: 1991,
    publisher: "International Journal of Conflict Management",
    doi: "10.1108/eb022702",
    url: "https://doi.org/10.1108/eb022702",
    note:
      "Tests face-negotiation theory in Japan, China, South Korea, Taiwan, and the United States, linking other-face concern with avoiding and obliging conflict styles.",
    scoreDerivation:
      "Used as supporting evidence for the Disagreeing scale: cultures emphasizing other-face maintenance are more likely to avoid or soften interpersonal conflict, matching the high confrontation-avoidance pole.",
  },
  "integrated-values-surveys-trust": {
    id: "integrated-values-surveys-trust",
    title:
      'Share of people agreeing with the statement "most people can be trusted"',
    author: "Integrated Values Surveys",
    year: 2024,
    publisher: "Our World in Data",
    url: "https://ourworldindata.org/grapher/self-reported-trust-attitudes",
    note:
      "Country-level World Values Survey / European Values Study trust measure asking whether most people can be trusted.",
    scoreDerivation:
      "Trusting uses the latest available country observation, inverted as 99 - trust percentage because higher generalized trust implies more task-based trust while lower generalized trust implies stronger reliance on relationship-based trust.",
  },
  "delhey-newton-welzel-2011": {
    id: "delhey-newton-welzel-2011",
    title:
      'How General Is Trust in "Most People"? Solving the Radius of Trust Problem',
    author: "Jan Delhey, Kenneth Newton & Christian Welzel",
    year: 2011,
    publisher: "American Sociological Review",
    doi: "10.1177/0003122411420817",
    url: "https://doi.org/10.1177/0003122411420817",
    note:
      "Uses World Values Survey data for 51 countries to distinguish in-group and out-group trust and estimate the radius of generalized trust.",
    scoreDerivation:
      "Used to justify generalized interpersonal trust as a proxy for the task-based versus relationship-based trust distinction; wider out-group trust supports more task-based trust.",
  },
  "levine-norenzayan-pace-life-1999": {
    id: "levine-norenzayan-pace-life-1999",
    title: "The Pace of Life in 31 Countries",
    author: "Robert V. Levine & Ara Norenzayan",
    year: 1999,
    publisher: "Journal of Cross-Cultural Psychology",
    doi: "10.1177/0022022199030002003",
    url: "https://doi.org/10.1177/0022022199030002003",
    note:
      "Country-level field study measuring walking speed, postal-service speed, and public-clock accuracy in 31 countries.",
    scoreDerivation:
      "Scheduling uses the overall pace-of-life index as a clock-time proxy: faster pace maps toward linear time, slower pace maps toward flexible time. Scores are min-max normalized from the paper's overall index into this app's 0-99 display range.",
  },
  "kaufman-scarborough-monochronic-polychronic-2017": {
    id: "kaufman-scarborough-monochronic-polychronic-2017",
    title: "Monochronic and Polychronic Time",
    author: "Carol Kaufman-Scarborough",
    year: 2017,
    publisher: "The International Encyclopedia of Intercultural Communication (Wiley)",
    doi: "10.1002/9781118783665.ieicc0110",
    url: "https://doi.org/10.1002/9781118783665.ieicc0110",
    note:
      "Review of Hall's monochronic and polychronic time constructs across intercultural communication, business, management, and organizational research.",
    scoreDerivation:
      "Used to justify interpreting pace, punctuality, and clock accuracy as supporting evidence for the linear-time versus flexible-time Scheduling scale.",
  },
} satisfies SourceRegistry;

export function formatSourceCitation(source: Source): string {
  const parts: string[] = [];
  if (source.author) {
    parts.push(source.author);
  }
  parts.push(source.title);
  if (source.year) {
    parts.push(`(${source.year})`);
  }
  if (source.publisher) {
    parts.push(`— ${source.publisher}`);
  }
  return parts.join(", ");
}
