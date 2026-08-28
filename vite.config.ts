// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { circuits } from "./src/lib/district";

const staticPages = [
  "/",
  "/index.html",
  "/beliefs",
  "/structure",
  "/circuits",
  "/sermons",
  ...circuits.map((circuit) => `/circuits/${circuit.slug}`),
];

export default defineConfig({
  tanstackStart: {
    // Every route is static content, so prerender the whole site to HTML.
    // This lets the build be deployed as plain static files (dist/client).
    prerender: {
      enabled: true,
      crawlLinks: true,
      filter: ({ path }: { path: string }) => !path.startsWith("/api"),
    },
    pages: staticPages.map((path) => ({ path, prerender: { enabled: true } })),
  },
});
