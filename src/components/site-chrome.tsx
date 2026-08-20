import { Link } from "@tanstack/react-router";
import logo from "@/assets/wesleyan-logo.jpg.asset.json";
import { DISTRICT_SEAT } from "@/lib/district";

const nav = [
  { to: "/", label: "Home" },
  { to: "/beliefs", label: "Beliefs & Doctrine" },
  { to: "/structure", label: "Structure & Governance" },
  { to: "/circuits", label: "Circuits" },
  { to: "/sermons", label: "Sermons" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 lg:flex-row lg:items-center lg:justify-between lg:py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="Wesleyan Church cross and globe emblem" className="h-10 w-10 object-contain" />
          <span className="leading-tight">
            <span className="block font-display text-lg text-foreground">
              Wesleyan <em className="not-italic text-primary">Church</em> (SANC)
            </span>
            <span className="label-caps block text-muted-foreground">
              Border &amp; Eastern Cape · Mthatha
            </span>
          </span>
        </Link>
        <nav className="-mx-1 flex flex-wrap items-center gap-x-5 gap-y-2 overflow-x-auto px-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="label-caps whitespace-nowrap border-b-2 border-transparent pb-1 text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "!border-primary !text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="hero-oxblood mt-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">
            Wesleyan Church <span className="opacity-80">(SANC)</span>
          </p>
          <p className="mt-2 text-sm opacity-80">
            South African National Conference — Border &amp; Eastern Cape District, seated in {DISTRICT_SEAT}.
          </p>
        </div>
        <div>
          <p className="label-caps opacity-70">Pages</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="opacity-85 transition-opacity hover:opacity-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-caps opacity-70">District seat</p>
          <p className="mt-3 text-sm opacity-85">
            Mthatha, Eastern Cape
            <br />
            South Africa
          </p>
          <p className="mt-4 text-sm opacity-85">
            Eight circuits · One district · One Discipline
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs opacity-70">
          © {new Date().getFullYear()} Wesleyan Church South African National Conference — Border &amp; Eastern Cape District.
        </p>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="hero-oxblood">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <span className="label-caps inline-block rounded-full border border-white/25 px-4 py-2">
          {eyebrow}
        </span>
        <h1 className="mt-7 max-w-3xl text-4xl leading-[1.05] md:text-6xl">{title}</h1>
        {lead ? <p className="mt-6 max-w-2xl text-base opacity-85 md:text-lg">{lead}</p> : null}
        {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="label-caps text-primary">{eyebrow}</p>
      <h2 className="mt-4 text-3xl md:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 text-muted-foreground">{lead}</p> : null}
    </div>
  );
}
