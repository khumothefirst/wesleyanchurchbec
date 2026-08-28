import { createFileRoute } from "@tanstack/react-router";
import { HomeContent, HOME_TITLE, HOME_DESCRIPTION } from "@/components/home-content";

export const Route = createFileRoute("/index.html")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESCRIPTION },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomeContent,
});
