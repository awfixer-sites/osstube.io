// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import markdoc from '@astrojs/markdoc';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  integrations: [markdoc(), mdx(), sitemap()]
});