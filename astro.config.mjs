import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [()],
  output: "hybrid",
  adapter: netlify()
});