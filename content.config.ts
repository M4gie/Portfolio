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
      }),
    }),
    project: defineCollection({
      type: 'page',
      source: 'project/*.md',
    }),
  },
});
