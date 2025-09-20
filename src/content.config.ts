import { file, glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});

// Publications collection using file loader for JSON data
const publications = defineCollection({
	loader: file("./public/publications.json"),
	schema: z.object({
		pub_type: z.enum(["paper", "patent"]),
		accolades: z.enum(["none", "best_paper", "honorable_mention", "distinguished_paper"]),
		title: z.string(),
		authors: z.array(z.string()),
		year: z.number(),
		venue: z.string().optional(),
		abstract: z.string().optional(),
		doi: z.string().optional(),
		key: z.string(),
		type: z.enum(['journal', 'conference', 'workshop', 'thesis', 'book', 'preprint']).default('journal'),
	}),
});


export const collections = { blog, publications };