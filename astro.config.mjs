// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'child_process';

const gitSha = execSync('git rev-parse --short HEAD').toString().trim();

// https://astro.build/config
export default defineConfig({
	site: 'https://jamesadevine.com',
	integrations: [mdx(), sitemap()],
	vite: {
		define: {
			__GIT_SHA__: JSON.stringify(gitSha),
		},
  	},
});
