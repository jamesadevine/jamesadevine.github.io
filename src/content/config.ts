import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
    docs: defineCollection({ schema: docsSchema() }),
    blog: defineCollection({
        schema: z.object({
            title: z.string(),
            description: z.string(),
            tags: z.array(z.string()),
            date: z.string(),
            image: z.string().optional(),
        })
    }),
};
