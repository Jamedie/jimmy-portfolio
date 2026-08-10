import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://3bcd447473ffdea2a7c63a65455eda41@o4511885513195520.ingest.de.sentry.io/4511885537902672",
  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
});
