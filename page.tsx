import { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { projectDetails } from "./project-details";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { fetchReadmeFromGitHub } from "@/lib/github-utils";
import CultureMapDemoWrapper from "./culture-map-demo-wrapper";
import { SCALES } from "./data/scales";

export const metadata: Metadata = {
  title: projectDetails.title,
  description: projectDetails.description,
};

export default async function CulturalAtlas() {
  let readmeContent = "Loading README content...";

  try {
    if (projectDetails.githubUrl) {
      const urlParts = projectDetails.githubUrl.split("/");
      if (urlParts.length >= 2) {
        const owner = urlParts[urlParts.length - 2] || "SollalF";
        const repo =
          urlParts[urlParts.length - 1]?.replace(".git", "") ||
          "cultural-atlas";
        readmeContent = await fetchReadmeFromGitHub(owner, repo);
      }
    }
  } catch (error) {
    console.error("Error in CulturalAtlas component:", error);
    readmeContent = "Error loading README content. Please try again later.";
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl relative">
      <div className="flex flex-col items-center space-y-8 relative">
        <h1 className="text-4xl font-bold text-center">
          {projectDetails.title}
        </h1>

        <div className="w-full relative h-[400px]">
          <Image
            src={projectDetails.imageUrl}
            alt={projectDetails.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {projectDetails.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-center text-lg text-muted-foreground">
            {projectDetails.description}
          </p>
          <p className="whitespace-pre-line">
            {projectDetails.longDescription}
          </p>
        </div>

        {projectDetails.githubUrl && (
          <div className="flex gap-4 justify-center">
            <a
              href={projectDetails.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 inline-block"
            >
              View Source →
            </a>
          </div>
        )}
      </div>

      <section className="my-8 rounded-lg border bg-card p-6">
        <div className="mb-6 max-w-2xl">
          <h2 className="text-2xl font-semibold">How to read the scales</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Each scale runs from 0 to 99. Lower scores sit closer to the first
            pole, while higher scores sit closer to the second pole. These are
            tendencies, not rules for every individual.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {SCALES.map((scale) => (
            <article
              key={scale.id}
              className="rounded-lg border bg-background/60 p-4"
            >
              <h3 className="text-sm font-semibold">{scale.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {scale.description}
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Low: {scale.low}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {scale.lowDescription}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    High: {scale.high}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {scale.highDescription}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="w-full min-h-[600px] rounded-lg border bg-card p-4 py-8">
        <CultureMapDemoWrapper />
      </div>

      <div className="prose dark:prose-invert max-w-none w-full py-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {readmeContent}
        </ReactMarkdown>
      </div>
    </main>
  );
}
