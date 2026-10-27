// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.new/config
export default defineConfig({
  site: 'https://alicoding.com',
  integrations: [sitemap()],
});
