<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is an Astro (v5) personal website/blog project scaffolded from the official Astro blog template.

## Tech + conventions

- Astro uses ESM (see `"type": "module"` in `package.json`). Prefer modern ESM imports.
- Markdown + MDX are supported via `@astrojs/mdx`.
- Content Collections are used for blog posts.

## Blog content collections

- Blog posts live in `src/content/posts/**` as `.md` or `.mdx` (configured in `src/content.config.ts`).
- Frontmatter is type-checked; keep it valid:
	- `title`: string (required)
	- `description`: string (required)
	- `pubDate`: date-ish string (required; coerced to `Date`)
	- `updatedDate`: date-ish string (optional)
	- `heroImage`: optional image reference compatible with Astro content images (keep images alongside the post when practical)

## Layouts + pages

- Prefer existing layouts over ad-hoc page structure:
	- `src/layouts/BlogPost.astro` for blog posts
	- `src/layouts/Page.astro` for general pages
- Prefer existing shared components (`src/components/*`) such as `BaseHead`, `Header`, `Footer`, `FormattedDate`, and `BlogPostList`.
- Keep pages file-based in `src/pages/` and follow existing route patterns (`src/pages/posts/[...slug].astro`, `src/pages/posts/index.astro`).

## Styling

- Global styles live in `src/styles/global.css` and are included via `src/components/BaseHead.astro`.
- Keep styling minimal and consistent with the existing Bear Blog–style CSS.
- Prefer reusing existing CSS variables rather than adding new design tokens.

## Images + assets

- Use `astro:assets` (`<Image />`) when you want optimized images.
- Put truly static files in `public/`.

## Implementation guidance

- Favor Astro’s default (server-rendered) approach; avoid client-side hydration (`client:*`) unless explicitly needed.
- Keep TypeScript types for component props when applicable (e.g., `CollectionEntry<'blog'>['data']`).
- Keep changes small, consistent with the existing structure, and avoid introducing new libraries unless necessary.

## Verification

- After changes, ensure `npm run build` passes (or run the “Build Astro Site” task).
- For local dev, use `npm run dev` (or the “Start Astro Dev Server” task).
