import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site-chrome";
import { circuits } from "@/lib/district";

const TITLE = "Circuit Roll — Border & Eastern Cape District, Wesleyan Church SANC";
const DESCRIPTION =
  "The circuits of the Border & Eastern Cape District of the Wesleyan Church SANC, with superintendents, ministers and circuit stewards, gathered under one District Bishop.";

export const Route = createFileRoute("/circuits/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/circuits" },
    ],
    links: [{ rel: "canonical", href: "/circuits" }],
  }),
  component: CircuitsPage,
});

function CircuitsPage() {
  return (
    <>
      <PageHero
        eyebrow="District roll"
        title={
          <>
            The District <em className="text-gold">Circuit Roll</em>
          </>
        }
        lead="Eight circuits, gathered under one District Bishop. Select a circuit to see its details."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="border border-border bg-parchment p-6 md:p-8">
          <p className="label-caps text-primary">District Bishop</p>
          <p className="mt-2 font-display text-2xl">The District Bishop, Mthatha</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Oversight of the District Synod and all eight circuits on this roll.
          </p>
        </div>

        <div className="mt-12 overflow-hidden border border-border">
          <div className="label-caps grid grid-cols-[4.5rem_1fr] gap-4 bg-parchment px-5 py-3 text-muted-foreground md:grid-cols-[5rem_1fr_1fr_5rem]">
            <span>Circuit</span>
            <span>Name</span>
            <span className="hidden md:block">Superintendent / Minister</span>
            <span className="hidden md:block" />
          </div>
          {circuits.map((c) => (
            <Link
              key={c.slug}
              to="/circuits/$slug"
              params={{ slug: c.slug }}
              className="grid grid-cols-[4.5rem_1fr] items-center gap-4 border-t border-border bg-card px-5 py-4 transition-colors hover:bg-accent md:grid-cols-[5rem_1fr_1fr_5rem]"
            >
              <span className="label-caps text-primary">{c.number}</span>
              <span className="font-display text-xl">{c.name}</span>
              <span className="hidden text-sm text-muted-foreground md:block">{c.minister}</span>
              <span className="label-caps hidden text-primary md:block">View →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
