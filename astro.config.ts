import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [react()],
  site: "https://borisliao.github.io",

  vite: {
    plugins: [tailwindcss()],
  },
});