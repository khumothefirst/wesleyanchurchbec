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
        lead={`${circuits.length} circuits, gathered under one District Bishop. Select a circuit to see its ministers, stewards and societies.`}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="border border-border bg-parchment p-6 md:p-8">
          <p className="label-caps text-primary">District Bishop</p>
          <p className="mt-2 font-display text-2xl">The District Bishop, Mthatha</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Oversight of the District Synod and all {circuits.length} circuits on this roll.
          </p>
        </div>

        <div className="mt-12 overflow-hidden border border-border">
          <div className="label-caps grid grid-cols-[3rem_1fr] gap-4 bg-parchment px-5 py-3 text-muted-foreground md:grid-cols-[3rem_1fr_1fr_5rem]">
            <span>No.</span>
            <span>Circuit</span>
            <span className="hidden md:block">Superintendent / Minister</span>
            <span className="hidden md:block" />
          </div>
          {circuits.map((c) => (
            <Link
              key={c.slug}
              to="/circuits/$slug"
              params={{ slug: c.slug }}
              className="grid grid-cols-[3rem_1fr] items-center gap-4 border-t border-border bg-card px-5 py-4 transition-colors hover:bg-accent md:grid-cols-[3rem_1fr_1fr_5rem]"
            >
              <span className="label-caps text-primary">{c.index}</span>
              <span>
                <span className="block font-display text-xl">{c.name}</span>
                {c.number ? (
                  <span className="label-caps block text-muted-foreground">{c.number}</span>
                ) : null}
              </span>
              <span className="hidden text-sm text-muted-foreground md:block">
                {c.ministers.map((m) => m.name).join(", ") || "To be confirmed"}
              </span>
              <span className="label-caps hidden text-primary md:block">View →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
