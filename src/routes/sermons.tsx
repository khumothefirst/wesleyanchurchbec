import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/site-chrome";

const TITLE = "Sermons — Wesleyan Church SANC, Border & Eastern Cape District";
const DESCRIPTION =
  "Short sermon clips preached across the Border & Eastern Cape District of the Wesleyan Church SANC. Watch, share, and return to them through the week.";

export const Route = createFileRoute("/sermons")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/sermons" },
    ],
    links: [{ rel: "canonical", href: "/sermons" }],
  }),
  component: SermonsPage,
});

const clips = [
  {
    title: "Sermon Clip I",
    body: "A short word of exhortation from the pulpit — preached, recorded, and shared for the wider fellowship.",
    url: "https://youtube.com/shorts/xlAcKRF9luM",
  },
  {
    title: "Sermon Clip II",
    body: "A brief message drawing the hearer back to Scripture and the ordinary means of grace.",
    url: "https://youtube.com/shorts/46mvlunSKEE",
  },
  {
    title: "Sermon Clip III",
    body: "A short exhortation on the holiness life and the call of the gospel on every believer.",
    url: "https://youtube.com/shorts/apQZBbwSWZM",
  },
];

function SermonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Preaching · Short-form"
        title={<>Sermons from the pulpit</>}
        lead="A gathering place for short sermon clips preached across the Border & Eastern Cape District. Watch, share, and return to them through the week."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead eyebrow="Recent clips" title="Watch & hear the word preached" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {clips.map((clip) => (
            <article key={clip.title} className="flex flex-col border border-border bg-card p-6">
              <h3 className="text-2xl">{clip.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{clip.body}</p>
              <a
                href={clip.url}
                target="_blank"
                rel="noreferrer"
                className="label-caps mt-6 text-primary hover:underline"
              >
                Open on YouTube →
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
