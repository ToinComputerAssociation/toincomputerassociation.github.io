// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
const isDev = process.env.NODE_ENV === "development";
// https://astro.build/config
export default defineConfig({
  site: "https://toincomputerassociation.github.io/",
  base: isDev ? "/" : "/toincomputerassociation.github.io/",
  integrations: [mdx(), sitemap()],
});
