// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Candele Vive — versión "Almanaque Botánico".
// Stack minimal: Astro 5 + CSS puro + SVG ilustrado. Cero frameworks de UI.
export default defineConfig({
  site: 'https://candelevive.es',
  output: 'static',
  integrations: [sitemap()],
});
