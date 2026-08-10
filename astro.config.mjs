// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import sentry from "@sentry/astro";
import { loadEnv } from "vite";

const { SENTRY_AUTH_TOKEN } = loadEnv(
  process.env.NODE_ENV ?? "development",
  process.cwd(),
  "",
);

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
      filter: (page) =>
        !["/404", "/fr/404", "/en/404"].includes(new URL(page).pathname),
    }),
    sentry({
      project: "jimmy-portfolio",
      org: "jamedie",
      authToken: SENTRY_AUTH_TOKEN,
    }),
  ],
  trailingSlash: "never",
});
