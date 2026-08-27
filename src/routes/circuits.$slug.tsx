import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site-chrome";
import { circuits, type Person } from "@/lib/district";

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
    const title = `${circuit.name} Circuit — Border & Eastern Cape District`;
    const description = `Circuit ${circuit.index}${circuit.number ? ` (${circuit.number})` : ""} — ${circuit.name}: superintendents, ministers, circuit stewards and societies in the Border & Eastern Cape District of the Wesleyan Church SANC.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
        { property: "og:url", content: `/circuits/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/circuits/${params.slug}` }],
    };
  },
  component: CircuitPage,
});

function PersonLine({ person }: { person: Person }) {
  return (
    <li className="flex flex-wrap items-baseline gap-x-3">
      <span className="text-lg">{person.name}</span>
      {person.phone ? (
        <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="text-sm text-primary hover:underline">
          {person.phone}
        </a>
      ) : null}
    </li>
  );
}

function CircuitPage() {
  const { circuit } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={`Circuit ${circuit.index}${circuit.number ? ` · ${circuit.number}` : ""} · District roll`}
        title={
          <>
            {circuit.name} <em className="text-gold">Circuit</em>
          </>
        }
        lead={circuit.address ? `Address: ${circuit.address}` : "Border & Eastern Cape District, seated in Mthatha."}
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
            <dd className="mt-2 font-display text-3xl">{circuit.number ?? circuit.index}</dd>
          </div>
          <div>
            <dt className="label-caps text-primary">Address</dt>
            <dd className="mt-2 text-lg">{circuit.address ?? "To be confirmed"}</dd>
          </div>
          <div>
            <dt className="label-caps text-primary">Societies</dt>
            <dd className="mt-2 font-display text-3xl">{circuit.societies.length || "—"}</dd>
          </div>
        </dl>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <p className="label-caps text-primary">Superintendent / Minister</p>
            <ul className="mt-4 space-y-3">
              {circuit.ministers.length ? (
                circuit.ministers.map((m) => <PersonLine key={m.name} person={m} />)
              ) : (
                <li className="text-muted-foreground">To be confirmed</li>
              )}
            </ul>
          </div>
          <div>
            <p className="label-caps text-primary">Circuit steward</p>
            <ul className="mt-4 space-y-3">
              {circuit.stewards.length ? (
                circuit.stewards.map((s) => <PersonLine key={s.name} person={s} />)
              ) : (
                <li className="text-muted-foreground">To be confirmed</li>
              )}
            </ul>
          </div>
        </div>

        {circuit.societies.length ? (
          <div className="mt-16">
            <p className="label-caps text-primary">Societies &amp; society stewards</p>
            <div className="mt-4 overflow-hidden border border-border">
              {circuit.societies.map((s) => (
                <div
                  key={s.name}
                  className="grid gap-2 border-b border-border bg-card px-5 py-4 last:border-b-0 md:grid-cols-2"
                >
                  <span className="font-display text-xl">{s.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {s.steward
                      ? `${s.steward.name}${s.steward.phone ? ` · ${s.steward.phone}` : ""}`
                      : "Steward to be confirmed"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

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
                    {c.index} · {c.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}
