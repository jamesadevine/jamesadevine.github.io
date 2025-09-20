// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'child_process';
import fs from 'fs';
import { SCHOLAR_USER_ID } from './src/consts';

const gitSha = execSync('git rev-parse --short HEAD').toString().trim();

console.log(`Building site with git SHA: ${gitSha}`);

// https://astro.build/config
export default defineConfig({
	site: 'https://jamesadevine.com',
	integrations: [mdx(), sitemap()],
	vite: {
		define: {
			'import.meta.env.GIT_SHA': JSON.stringify(gitSha),
		},
  	},
});
