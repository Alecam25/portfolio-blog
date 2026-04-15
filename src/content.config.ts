import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.string(),
    slug: z.string(),
    github: z.string().optional(),
    demo: z.string().optional()
  })
});

export const collections = {
  projects
};