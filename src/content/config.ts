import { defineCollection, z } from "astro:content"

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tech: z.array(z.string()),
      github: z.string().url().optional(),
      live: z.string().url().optional(),
      date: z.coerce.date(),
      featured: z.boolean().default(false),
      cover: image().optional(),
    }),
})

export const collections = {
  projects,
}
