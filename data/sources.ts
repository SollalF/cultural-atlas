export type SourceId = string;

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

type SourceRegistry = Record<SourceId, Source>;

export const sourceById: SourceRegistry = {};

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
