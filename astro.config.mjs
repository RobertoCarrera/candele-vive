// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Candele Vive — versión "Domingo por la tarde".
// Stack minimal: Astro 5 + CSS puro + SVG ilustrado. Cero frameworks de UI.
export default defineConfig({
  site: 'https://candelevive.es',
  output: 'static',
  integrations: [
    sitemap({
      // Excluir del sitemap las páginas de checkout (específicas de cada usuario)
      filter: (page) =>
        !page.includes('/cesta') &&
        !page.includes('/404'),
      entryLimit: 10000,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date('2026-08-21'),
    }),
  ],
});
