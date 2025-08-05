import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Ajoutez cette ligne :
  output: "server",

  integrations: [
    /* ...vos intégrations actuelles... */
  ],
});
