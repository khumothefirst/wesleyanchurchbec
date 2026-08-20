import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site-chrome";
import { circuits } from "@/lib/district";

export const Route = createFileRoute("/circuits/$slug")({
  loader: ({ params }) => {
    const circuit = circuits.find((c) => c.slug === params.slug);
    if (!circuit) throw notFound();
    return { circuit };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Circuit unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const { circuit } = loaderData;
    const title = `Circuit ${circuit.number} · ${circuit.name} — Border & Eastern Cape District`;
    return {
      meta: [
        { title },
        { name: "description", content: circuit.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: circuit.intro },
        { property: "og:url", content: `/circuits/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/circuits/${params.slug}` }],
    };
  },
  component: CircuitPage,
});

function CircuitPage() {
  const { circuit } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={`Circuit ${circuit.number} · District roll`}
        title={
          <>
            {circuit.name} <em className="text-gold">{circuit.minister.split(" (")[0]}</em>
          </>
        }
        lead={circuit.intro}
      >
        <Link
          to="/circuits"
          className="label-caps border border-white/30 px-6 py-4 transition-colors hover:bg-white/10"
        >
          ← Back to the roll
        </Link>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <dl className="grid gap-6 border border-border bg-parchment p-6 md:grid-cols-3 md:p-8">
          <div>
            <dt className="label-caps text-primary">Circuit no.</dt>
            <dd className="mt-2 font-display text-3xl">{circuit.number}</dd>
          </div>
          <div>
            <dt className="label-caps text-primary">Seat</dt>
            <dd className="mt-2 font-display text-3xl">{circuit.seat}</dd>
          </div>
          <div>
            <dt className="label-caps text-primary">Oversight</dt>
            <dd className="mt-2 text-lg">{circuit.minister}</dd>
          </div>
        </dl>

        <div className="mt-16 max-w-3xl">
          <p className="label-caps text-primary">Ministry focus</p>
          <h2 className="mt-4 text-3xl md:text-4xl">{circuit.focus}</h2>
          <p className="mt-6 text-muted-foreground">
            {circuit.name} sits within the wider Border &amp; Eastern Cape District, seated in
            Mthatha, alongside seven other circuits on the district roll.
          </p>
        </div>

        <div className="mt-16">
          <p className="label-caps text-muted-foreground">Other circuits</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {circuits
              .filter((c) => c.slug !== circuit.slug)
              .map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/circuits/$slug"
                    params={{ slug: c.slug }}
                    className="label-caps inline-block border border-border px-4 py-3 transition-colors hover:border-primary hover:text-primary"
                  >
                    {c.number} · {c.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}
