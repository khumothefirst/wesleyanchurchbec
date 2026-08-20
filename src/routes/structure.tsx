import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/site-chrome";
import { tiers } from "@/lib/district";

const TITLE = "Structure & Governance — Wesleyan Church SANC, Border & Eastern Cape";
const DESCRIPTION =
  "How the Wesleyan Church SANC is governed across four tiers — Society, Circuit, District, and Conference — in the Border & Eastern Cape District, seated in Mthatha.";

export const Route = createFileRoute("/structure")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/structure" },
    ],
    links: [{ rel: "canonical", href: "/structure" }],
  }),
  component: StructurePage,
});

const offices = [
  ["Conference", "Presiding Bishop", "The senior episcopal office of the Church, presiding over the Conference and giving oversight to the Districts."],
  ["District", "District Bishop", "Episcopal oversight of all Circuits within the Border & Eastern Cape District; convenes and chairs the District Synod in Mthatha."],
  ["District", "District Management Team", "The team that carries day-to-day governance and ministry coordination between sittings of the Synod."],
  ["Circuit", "Circuit Superintendent", "The minister carrying pastoral and administrative oversight of a Circuit and its Societies."],
  ["Circuit", "Circuit Minister", "An ordained minister serving alongside the Superintendent in the pastoral work of the Circuit."],
  ["Circuit", "Circuit Management Team", "The lay-and-clergy team that governs the practical life of the Circuit."],
] as const;

function StructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Church order"
        title={
          <>
            Structure <em className="text-gold">&</em> Governance
          </>
        }
        lead="The governance of the Wesleyan Church (SANC) balances the authority of leadership with the representation of local church members across four representative tiers — expressed in the Border & Eastern Cape District from its seat in Mthatha."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead eyebrow="The four tiers" title="Society · Circuit · District · Conference" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => (
            <article key={t.name} className="border border-border bg-card p-6">
              <p className="label-caps text-primary">{t.tier}</p>
              <h3 className="mt-3 text-2xl">{t.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{t.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHead eyebrow="Offices & teams" title="Who carries which responsibility." />
          <div className="mt-12">
            {offices.map(([scope, name, body]) => (
              <div key={name} className="rule-thin grid gap-3 py-8 md:grid-cols-[10rem_1fr] md:gap-10">
                <p className="label-caps text-primary">{scope}</p>
                <div>
                  <h3 className="text-xl">{name}</h3>
                  <p className="mt-2 max-w-3xl text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
