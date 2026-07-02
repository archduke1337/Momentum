import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Minus } from 'lucide-react';
import { industries, solutions } from '@workspace/content';
import type { Industry, Solution } from '@workspace/types';
import { Hero } from '@/components/sections/hero';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { Reveal } from '@/components/ui/reveal';

const bottleneck = [
  {
    title: 'A late delivery stops the station, not just slows it',
    sub: 'On a just-in-time line, material timing depends on who is on shift and whether a Kanban card survived the last changeover.',
  },
  {
    title: 'Forklifts and pedestrians already share the aisle',
    sub: 'Mixed-traffic aisles between stations are a standing safety cost that predates any automation project.',
  },
  {
    title: 'Peak season means hiring people you will lose in weeks',
    sub: 'New material handlers take weeks to reach full speed, then the peak ends and headcount is cut again.',
  },
  {
    title: 'Skilled operators are pushing carts, not running machines',
    sub: 'The most automated line in the plant is often still fed by hand, one trolley at a time.',
  },
];

const usual = [
  'Proprietary stack, sealed shut. Every change is a vendor ticket',
  'Per-seat licences and annual maintenance that compounds your TCO',
  "One vendor's robots, locked to one vendor's fleet manager",
  'Tuned for clean, well-marked warehouse floors',
];

const momentum = [
  'Open ROS 2 stack (Humble · Nav2 · SLAM Toolbox) your own engineers can read and modify',
  'Buy the fleet once. No licences, no mandatory service contract',
  'VDA 5050 fleet control across a mixed, multi-vendor fleet',
  'LiDAR + 3D camera + IMU fusion tuned for dust, glare and reflective metal',
];

const tech = [
  {
    k: 'Perception',
    v: '2D LiDAR (25–30 m) with Intel RealSense 3D depth and IMU, fused to hold a map through dust, glare and reflective metal.',
  },
  {
    k: 'Navigation',
    v: 'ROS 2 Humble with Nav2 and SLAM Toolbox, the same open navigation stack running in industrial fleets worldwide, tuned here for busy factory floors.',
  },
  {
    k: 'Fleet',
    v: 'VDA 5050 orchestration of a mixed fleet from one interface, with REST and MQTT hooks into your WMS and MES.',
  },
  {
    k: 'Safety',
    v: 'Safety-rated LiDAR fields, e-stops and bumpers, specced for aisles where people and forklifts already share the space.',
  },
];

const where = [
  { k: 'HQ', v: 'Pune, India · R&D + mfg' },
  { k: 'Stage', v: 'Selective deployment' },
  { k: 'Europe', v: 'Gebroeders Doms BV, Belgium' },
  { k: 'Platforms', v: 'Pixel · Orbit · Cyborg' },
];

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Momentum Robotics',
  legalName: 'Momentum Robotics Pvt. Ltd.',
  url: 'https://momentumrobotics.in',
  logo: 'https://momentumrobotics.in/logo.png',
  email: 'hello@momentumrobotics.in',
  sameAs: ['https://www.linkedin.com/company/momentum-robotics/'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-612 Park Plaza Business Center, Porwal Rd, Lohegaon',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411047',
    addressCountry: 'IN',
  },
};

function SectionHeader({
  index,
  label,
  title,
  lede,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  lede?: string;
}) {
  return (
    <Reveal className="grid gap-y-6 lg:grid-cols-12 lg:gap-x-10">
      <div className="lg:col-span-7">
        <span className="eyebrow">
          <span aria-hidden className="index-numeral text-primary">
            {index}
          </span>
          {label}
        </span>
        <h2 className="display mt-5 text-4xl sm:text-5xl">{title}</h2>
      </div>
      {lede ? (
        <p className="self-end text-base leading-relaxed text-muted lg:col-span-4 lg:col-start-9">
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}

export default function HomePage() {
  const featuredIndustries = industries.slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Hero />

      {/* THE BOTTLENECK — real economics as data (full-bleed lead + stat band) */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-32">
          <Reveal>
            <span className="eyebrow">
              <span aria-hidden className="index-numeral text-primary">
                01
              </span>
              The bottleneck
            </span>
            <h2 className="display mt-6 max-w-4xl text-4xl sm:text-6xl">
              The stations got automated. The runs between them didn&apos;t.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Factories have spent decades automating welding, paint and assembly. The parts
              still travel between those cells the way they always have: on a forklift, or
              behind someone pushing a trolley. That gap is the least automated part of the
              building.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 pb-24 md:pb-32">
          <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {bottleneck.map((b, i) => (
              <div key={b.title} className="border-b border-r border-border p-7">
                <span className="index-numeral text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-5 text-lg leading-snug tracking-tight text-foreground">
                  {b.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO — solutions (modular hairline grid) */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeader
            index="02"
            label="What we do"
            title="Five ways material moves. We automate all of them."
            lede="Line feeding, warehouse runs, pallet moves, fleet control and the odd custom job. However material moves on your floor, it lands in one of these five."
          />
          <div className="mt-16 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution: Solution, i) => (
              <Link
                key={solution.id}
                href={`/solutions/${solution.slug}`}
                className="group flex min-h-64 flex-col border-b border-r border-border p-8 transition-colors hover:bg-surface"
              >
                <span className="index-numeral text-sm transition-colors group-hover:text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 text-xl tracking-tight">{solution.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {solution.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-foreground group-hover:text-primary">
                  Explore solution
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
            <Link
              href="/solutions"
              className="group flex min-h-64 flex-col justify-between border-b border-r border-border bg-surface/50 p-8 transition-colors hover:bg-surface"
            >
              <span className="label-mono">Index</span>
              <span className="inline-flex items-center gap-2 text-lg tracking-tight text-foreground group-hover:text-primary">
                All solutions
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE — editorial industry list */}
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeader
            index="03"
            label="Who we serve"
            title="The same manual step, sector by sector."
            lede="A paint shop and an SMT line look nothing alike. Walk either floor and you find the same thing: a person, a trolley, and parts that need to be somewhere else."
          />
          <ul className="mt-16 border-t border-border">
            {featuredIndustries.map((ind: Industry, i) => (
              <li key={ind.id}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group grid items-baseline gap-y-2 border-b border-border py-8 transition-colors hover:bg-surface md:grid-cols-12 md:gap-x-8"
                >
                  <span className="index-numeral text-sm transition-colors group-hover:text-primary md:col-span-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl tracking-tight md:col-span-4">{ind.name}</h3>
                  <p className="text-muted md:col-span-6">{ind.tagline}</p>
                  <ArrowUpRight
                    className="hidden size-5 text-muted transition-colors group-hover:text-foreground md:col-span-1 md:block md:justify-self-end"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-foreground hover:text-primary"
            >
              All industries
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT — them vs us contrast */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeader
            index="04"
            label="Why Momentum"
            title="Open by default. Yours to keep."
            lede="Most AMRs are sold like subscriptions you can never cancel. We sell robots the way machine tools are sold: you buy one, you own it."
          />
          <div className="mt-16 grid border border-border md:grid-cols-2">
            <div className="border-b border-border p-8 md:border-b-0 md:border-r md:p-10">
              <span className="label-mono text-muted-foreground">The usual AMR deal</span>
              <ul className="mt-8 space-y-5">
                {usual.map((item) => (
                  <li key={item} className="flex gap-3.5 text-muted">
                    <Minus className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span className="text-[0.9375rem] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface/40 p-8 md:p-10">
              <span className="label-mono text-primary">How Momentum works</span>
              <ul className="mt-8 space-y-5">
                {momentum.map((item) => (
                  <li key={item} className="flex gap-3.5 text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-[0.9375rem] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY — definition list */}
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeader
            index="05"
            label="Technology"
            title="Built on standards your team can audit."
            lede="Every Momentum robot runs the same open ROS 2 stack, with sensing chosen for dust, glare and forklift traffic."
          />
          <dl className="mt-16 border-t border-border">
            {tech.map((t) => (
              <div
                key={t.k}
                className="grid gap-y-1 border-b border-border py-7 md:grid-cols-12 md:gap-x-8"
              >
                <dt className="label-mono pt-1 md:col-span-3">{t.k}</dt>
                <dd className="text-lg leading-relaxed text-foreground md:col-span-9">{t.v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-foreground hover:text-primary"
            >
              Read the technical overview
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-32">
          <SectionHeader
            index="06"
            label="Platforms"
            title="One stack. Three platforms."
            lede="Code written on a Pixel in the lab runs unchanged on a Cyborg on the line. One ROS 2 stack across all three platforms."
          />
        </div>
        <ProductShowcase />
      </section>

      {/* WHERE WE ARE — honest early-stage + partnership */}
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto grid max-w-7xl gap-y-12 px-6 py-24 md:py-32 lg:grid-cols-12 lg:gap-x-10">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">
              <span aria-hidden className="index-numeral text-primary">
                07
              </span>
              Where we are
            </span>
            <h2 className="display mt-5 text-4xl sm:text-5xl">Early-stage, and straight about it.</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Momentum is in selective deployment: pilots with early customers in education,
              automotive and logistics, each one integrated properly before we take on the
              next. Our European standards work runs through our partner Gebroeders Doms BV
              in Belgium. We&apos;d rather tell you that plainly than pretend to a fleet we
              haven&apos;t shipped.
            </p>
          </Reveal>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-center">
            <dl className="border-t border-border">
              {where.map((f) => (
                <div
                  key={f.k}
                  className="flex items-baseline justify-between gap-6 border-b border-border py-4"
                >
                  <dt className="label-mono">{f.k}</dt>
                  <dd className="spec-value text-right text-sm text-foreground">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <span className="eyebrow">
              <span aria-hidden className="index-numeral text-primary">
                08
              </span>
              Get started
            </span>
            <h2 className="display mt-6 max-w-4xl text-4xl sm:text-6xl">
              Show us the move you can&apos;t automate.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Send us your payloads, routes and floor conditions. If a Momentum robot fits
              your operation, we&apos;ll tell you. If it doesn&apos;t yet, we&apos;ll tell you
              that too.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary group">
                Book a consultation
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link href="/solutions" className="btn-secondary">
                Explore solutions
              </Link>
            </div>
          </Reveal>

          <dl className="mt-16 grid gap-y-8 border-t border-border pt-8 sm:grid-cols-3">
            <div>
              <dt className="spec-key">Email</dt>
              <dd className="mt-1.5">
                <a
                  href="mailto:hello@momentumrobotics.in"
                  className="spec-value text-sm transition-colors hover:text-primary"
                >
                  hello@momentumrobotics.in
                </a>
              </dd>
            </div>
            <div>
              <dt className="spec-key">Hours</dt>
              <dd className="spec-value mt-1.5 text-sm">Mon–Fri · 09:00–18:00 IST</dd>
            </div>
            <div>
              <dt className="spec-key">HQ</dt>
              <dd className="spec-value mt-1.5 text-sm">Lohegaon, Pune, India</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
