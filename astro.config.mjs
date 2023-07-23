import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import { DEFAULT_LOCALE } from './src/constants';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap({
      lastmod: new Date(),
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: { es: 'es', en: 'en' }
      },
    })
  ],
  site: 'https://gabrielaborraz.com'
});
