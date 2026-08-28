// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { circuits } from "./src/lib/district";

// Inside Lovable the build targets the managed server runtime (Nitro/Cloudflare).
// Anywhere else (Netlify, GitHub CI, local `bun run build`) we emit a fully
// prerendered static site into dist/client so it can be published as plain files.
const isLovableBuild = Boolean(process.env["LOVABLE_NITRO_PRESET"]);

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
  nitro: isLovableBuild ? true : false,
  tanstackStart: isLovableBuild
    ? {
        // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
        // nitro/vite builds from this
        server: { entry: "server" },
      }
    : {
        // Every route is static content, so prerender the whole site to HTML.
        prerender: {
          enabled: true,
          crawlLinks: true,
          filter: ({ path }: { path: string }) => !path.startsWith("/api"),
        },
        pages: staticPages.map((path) => ({ path, prerender: { enabled: true } })),
      },
});
