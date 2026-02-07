import { defineContentConfig, defineCollection } from '@nuxt/content';
import { z } from 'zod';

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
        draft: z.boolean(),
        tags: z.array(z.string()),
        hero: z.string(),
        slug: z.string(),
        timeToRead: z.number(),
      }),
    }),
    experience: defineCollection({
      type: 'data',
      source: 'experience/*.md',
      schema: z.object({
        company: z.string(),
        logo: z.string(),
        position: z.string(),
        location: z.string(),
        startDate: z.string(),
        endDate: z.string().nullable(),
        website: z.url(),
        skills: z.array(z.string()),
        description: z.string(),
      }),
    }),
    project: defineCollection({
      type: 'page',
      source: 'project/*.md',
    }),
  },
});
