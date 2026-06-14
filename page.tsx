import { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { projectDetails } from "./project-details";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { fetchReadmeFromGitHub } from "@/lib/github-utils";

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

      <div className="prose dark:prose-invert max-w-none w-full py-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {readmeContent}
        </ReactMarkdown>
      </div>
    </main>
  );
}
