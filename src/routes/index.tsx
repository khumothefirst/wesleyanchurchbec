import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/site-chrome";
import { circuits, tiers } from "@/lib/district";
import bishopPortrait from "@/assets/bishop-madaza.jpg.asset.json";

const TITLE =
  "Wesleyan Church SANC — Border & Eastern Cape District, Mthatha";
const DESCRIPTION =
  "The Wesleyan Church South African National Conference, Border & Eastern Cape District, seated in Mthatha — eighteen circuits, one discipline, walking the Wesleyan–Arminian way.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const convictions = [
  {
    tag: "Scripture",
    title: "The Authority of Scripture",
    body: "The 66 books of the Old and New Testaments are received as the inspired, infallible, and inerrant Word of God in their original manuscripts — the ultimate authority for faith and living.",
  },
  {
    tag: "God",
    title: "The Triune God",
    body: "One living and true God, eternally existing in three persons: Father, Son, and Holy Spirit.",
  },
  {
    tag: "Salvation",
    title: "Universal Atonement & Free Will",
    body: "Christ's death on the cross provided a perfect remedy for the sins of the whole world. Because God granted humans free will, salvation is available to anyone who chooses to repent and believe — it is not restricted to a pre-selected elect.",
  },
  {
    tag: "Distinctive",
    title: "Entire Sanctification",
    body: "After a person is born again, there is a distinct, subsequent work of the Holy Spirit known as entire sanctification — an experience in which the believer's heart is cleansed from the systemic power of sin and filled with a pure love for God and others, enabling a life of daily holiness.",
  },
  {
    tag: "Method",
    title: "The Wesleyan Quadrilateral",
    body: "Scripture remains primary, but Wesleyans naturally filter faith and practice through four lenses: Scripture, Tradition, Reason, and Experience.",
  },
];

function Index() {
  return (
    <>
      <PageHero
        eyebrow="District roll · 8 circuits · 1 discipline"
        title={
          <>
            Holiness of heart,{" "}
            <em className="text-gold">ordered</em> for the whole district.
          </>
        }
        lead="The Wesleyan Church South African National Conference gathers Societies into Circuits, Circuits into the Border & Eastern Cape District, and Districts into a Conference — one body, seated in Mthatha, governed in the open, walking the Wesleyan–Arminian way."
      >
        <Link
          to="/circuits"
          className="label-caps bg-primary px-6 py-4 text-primary-foreground transition-opacity hover:opacity-90"
        >
          View the circuit roll →
        </Link>
        <Link
          to="/beliefs"
          className="label-caps border border-white/30 px-6 py-4 transition-colors hover:bg-white/10"
        >
          Read our doctrine
        </Link>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead
          eyebrow="What we hold"
          title="Five convictions that shape everything else."
          lead="These are the convictions that make us recognisably Wesleyan, distinct from Calvinist traditions, and rooted in the holiness movement."
        />
        <div className="mt-12">
          {convictions.map((c) => (
            <div key={c.title} className="rule-thin grid gap-3 py-8 md:grid-cols-[10rem_1fr] md:gap-10">
              <p className="label-caps text-primary">{c.tag}</p>
              <div>
                <h3 className="text-2xl">{c.title}</h3>
                <p className="mt-3 max-w-3xl text-muted-foreground">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
        <blockquote className="mt-14 border-l-2 border-primary pl-6">
          <p className="font-display text-2xl leading-snug md:text-3xl">
            “You shall love the Lord your God with all your heart, with all your soul, and with all
            your mind — and your neighbour as yourself.”
          </p>
          <footer className="label-caps mt-4 text-muted-foreground">Matthew 22:37–39</footer>
        </blockquote>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHead
            eyebrow="The office of the Presiding Bishop"
            title="Presiding Bishop Rev. C.L. Madaza"
            lead="The Presiding Bishop gives pastoral and spiritual oversight to the Wesleyan Church South African National Conference — shepherding the Conference, the districts, and every society gathered under its discipline."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-[20rem_1fr] md:items-start">
            <figure className="border border-border bg-card p-3">
              <img
                src={bishopPortrait.url}
                alt="Presiding Bishop Rev. C.L. Madaza in ecclesiastical robes and red stole"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="label-caps mt-3 text-center text-muted-foreground">
                Presiding Bishop Rev. C.L. Madaza
              </figcaption>
            </figure>
            <div className="space-y-6 text-muted-foreground">
              <p>
                The Presiding Bishop is the supreme pastoral and administrative officer of the
                Conference, charged with guarding the doctrine, discipline, and unity of the church.
                He presides over the Conference sessions, ordains and commissions ministers, and
                represents the Wesleyan Church South African National Conference across the districts.
              </p>
              <p>
                Under his leadership, the Border & Eastern Cape District — seated in Mthatha —
                carries the holiness message into eighteen circuits, from Mthatha Central to Burning
                Bush, uniting Societies, Circuits, and Districts under one Discipline.
              </p>
              <p className="label-caps text-primary">Presiding Bishop · Wesleyan Church SANC</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHead
            eyebrow="How we are governed"
            title="Authority and representation, held in balance."
            lead="Our governance mixes episcopal and congregational elements across four tiers — from the Society, through the Circuit and District, to the Conference."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t) => (
              <article key={t.name} className="border border-border bg-card p-6">
                <p className="label-caps text-primary">{t.tier}</p>
                <h3 className="mt-3 text-2xl">{t.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{t.body}</p>
              </article>
            ))}
          </div>
          <Link to="/structure" className="label-caps mt-10 inline-block text-primary hover:underline">
            See the full church order →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead
          eyebrow="The district roll"
          title={`${circuits.length} circuits, one district, seated in Mthatha.`}
          lead="From Mthatha Central to Burning Bush, each circuit is served by its own superintendent or minister and carries its own character."
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {circuits.map((c) => (
            <li key={c.slug}>
              <Link
                to="/circuits/$slug"
                params={{ slug: c.slug }}
                className="flex items-baseline justify-between gap-4 border border-border bg-card px-5 py-4 transition-colors hover:border-primary"
              >
                <span>
                  <span className="label-caps text-muted-foreground">{c.index}</span>
                  <span className="ml-3 font-display text-xl">{c.name}</span>
                </span>
                <span className="label-caps text-primary">View →</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/circuits" className="label-caps mt-10 inline-block text-primary hover:underline">
          Open the circuit roll →
        </Link>
      </section>
    </>
  );
}
