import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/site-chrome";

const TITLE = "Core Beliefs & Articles of Religion — Wesleyan Church SANC";
const DESCRIPTION =
  "The Articles of Religion held by the Wesleyan Church SANC, Border & Eastern Cape District: Trinity, Scripture, atonement, and entire sanctification.";

export const Route = createFileRoute("/beliefs")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/beliefs" },
    ],
    links: [{ rel: "canonical", href: "/beliefs" }],
  }),
  component: BeliefsPage,
});

const articles = [
  ["I", "Faith in the Holy Trinity", "We believe in the one living and true God who is both holy and loving. Within the divine unity are three co-equal persons: Father, Son and Holy Spirit."],
  ["II", "The Father", "God the Father is the source of everything that exists and relates to people as Father, seeking and receiving those who repent."],
  ["III", "The Son of God", "Jesus Christ is fully God and fully human. He died for sin, rose bodily, ascended into heaven, intercedes for us, and will return to judge the living and the dead."],
  ["IV", "The Holy Spirit", "The Holy Spirit points out sin, brings new birth, sets believers apart for God, guides, assures, preserves, and enables holy living."],
  ["V", "The Holy Scriptures", "The Old and New Testaments are the inspired and infallibly written Word of God and the highest authority for faith and life."],
  ["VI", "God's Purpose for Humanity", "God's law is summarized in loving God with all our heart and loving our neighbours as ourselves."],
  ["VII", "Marriage and the Family", "Human sexuality is intended to be expressed within the covenant of marriage between one man and one woman."],
  ["VIII", "Personal Choice", "Human beings are morally responsible, yet need God's prevenient grace to repent, believe, and be saved."],
  ["IX", "The Atonement", "Christ's death and resurrection provide redemption and atonement for the sins of the whole world."],
  ["X", "Repentance and Faith", "People voluntarily respond to God's grace in repentance and faith, trusting Christ fully as Savior and Lord."],
  ["XI", "Justification, Regeneration and Adoption", "Those who repent and believe are pardoned, made new, adopted into God's family, and assured by the Holy Spirit."],
  ["XII", "Good Works", "Good works cannot save, but they are the fruit of faith and follow regeneration."],
  ["XIII", "Sin After Regeneration", "Believers can fall into sin, yet God's grace restores those who truly repent and believe."],
] as const;

function BeliefsPage() {
  return (
    <>
      <PageHero
        eyebrow="A summary of Wesleyan beliefs"
        title={
          <>
            Core Beliefs <em className="text-gold">&</em> Articles of Religion
          </>
        }
        lead="Wesleyans believe in one God, who is Father, Son, and Holy Spirit, the Savior of all persons who put their faith in Him alone for eternal life. We believe those who receive new life in Christ are called to be holy in character and conduct."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead eyebrow="Articles of Religion" title="What we believe, article by article." />
        <div className="mt-12">
          {articles.map(([numeral, title, body]) => (
            <div key={numeral} className="rule-thin grid gap-3 py-8 md:grid-cols-[6rem_1fr] md:gap-10">
              <p className="font-display text-2xl text-primary">{numeral}</p>
              <div>
                <h3 className="text-2xl">{title}</h3>
                <p className="mt-3 max-w-3xl text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHead
            eyebrow="XIV · The core distinction"
            title="Sanctification: Initial, Progressive, Entire"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <p className="border border-border bg-card p-6 text-muted-foreground">
              Sanctification begins the moment we are justified and regenerated, continues as we grow
              in grace, and prepares for the crisis of entire sanctification by the Holy Spirit.
            </p>
            <p className="border border-border bg-card p-6 text-muted-foreground">
              The human heart is cleansed from inbred sin and filled with love for God and neighbour.
            </p>
            <p className="border border-border bg-card p-6 text-muted-foreground">
              This life of holiness is continued through faith in Christ and demonstrated by loving
              obedience to God's revealed will.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead
          eyebrow="Method"
          title="Scripture, Tradition, Reason, and Experience."
          lead="Scripture remains primary, while tradition, reason, and experience help the Church test and apply faithful doctrine."
        />
      </section>
    </>
  );
}
