// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jimmygaucher.com",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "fr",
        locales: {
          fr: "fr",
          en: "en",
        },
      },
      exclude: ["/404", "/fr/404", "/en/404"],
    }),
  ],
  trailingSlash: "never",
});
