import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Minus } from 'lucide-react';
import { industries, solutions } from '@workspace/content';
import type { Industry, Solution } from '@workspace/types';
import { Hero } from '@/components/sections/hero';
import { ProductShowcase } from '@/components/sections/product-showcase';

/* Real problem economics — sourced from Momentum's positioning research, framed
   as sector observations rather than guaranteed outcomes. */
const bottleneck = [
  {
    figure: '~99%',
    label: 'of inter-station moves are still manual',
    sub: 'even in plants that automated welding, paint and assembly',
  },
  {
    figure: '₹2–5L',
    label: 'lost per hour of line-down',
    sub: 'when a station is starved of material on a just-in-time line',
  },
  {
    figure: '65–75%',
    label: 'typical OEE on discrete lines',
    sub: 'material delivery is a leading performance-loss driver',
  },
  {
    figure: '25–35%',
    label: 'annual attrition of material handlers',
    sub: 'and every new hire takes weeks to reach full speed',
  },
];

const usual = [
  'Proprietary stack — sealed shut; every change is a vendor ticket',
  'Per-seat licences and annual maintenance that compounds your TCO',
  "One vendor's robots, locked to one vendor's fleet manager",
  'Tuned for clean, well-marked warehouse floors',
];

const momentum = [
  'Open ROS 2 (Humble · Nav2 · SLAM Toolbox) — read it, extend it, own it',
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
    v: 'ROS 2 Humble with Nav2 and SLAM Toolbox — proven across 100+ commercial deployments and tuned for dynamic factory floors.',
  },
  {
    k: 'Fleet',
    v: 'VDA 5050 orchestration of a mixed fleet from one interface, with REST and MQTT hooks into your WMS and MES.',
  },
  {
    k: 'Safety',
    v: 'Safety-rated LiDAR fields, e-stops and bumpers — engineered for mixed human-robot aisles, not cooperative-only zones.',
  },
];

const where = [
  { k: 'Founded', v: '2023 · Pune, India' },
  { k: 'Stage', v: 'R&D + selective deployment' },
  { k: 'Europe', v: 'Gebroeders Doms BV, Belgium' },
  { k: 'Platforms', v: 'Pixel · Orbit · Cyborg' },
];

function SectionHeader({
  label,
  title,
  lede,
}: {
  label: string;
  title: React.ReactNode;
  lede?: string;
}) {
  return (
    <div className="grid gap-y-6 lg:grid-cols-12 lg:gap-x-10">
      <div className="lg:col-span-7">
        <span className="eyebrow">
          <span aria-hidden className="size-1.5 self-center bg-primary" />
          {label}
        </span>
        <h2 className="display mt-5 text-4xl sm:text-5xl">{title}</h2>
      </div>
      {lede ? (
        <p className="self-end text-base leading-relaxed text-muted lg:col-span-4 lg:col-start-9">
          {lede}
        </p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  const featuredIndustries = industries.slice(0, 6);

  return (
    <>
      <Hero />

      {/* THE BOTTLENECK — real economics as data (full-bleed lead + stat band) */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-32">
          <span className="eyebrow">
            <span aria-hidden className="size-1.5 self-center bg-primary" />
            The bottleneck
          </span>
          <h2 className="display mt-6 max-w-4xl text-4xl sm:text-6xl">
            Production got automated. The moving between it didn&apos;t.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Factories poured investment into robotic welding, paint and assembly — then kept
            pushing the parts between those cells by forklift and hand trolley. That gap is
            where throughput, safety and cost quietly leak.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 pb-24 md:pb-32">
          <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {bottleneck.map((b) => (
              <div key={b.figure} className="border-b border-r border-border p-7">
                <p className="stat-figure text-5xl text-foreground sm:text-6xl">{b.figure}</p>
                <p className="mt-5 text-sm font-medium tracking-tight text-foreground">
                  {b.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO — solutions (modular hairline grid) */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeader
            label="What we do"
            title="Five ways material moves. We automate all of them."
            lede="However parts flow on your floor, it maps to one of these — from just-in-time line feeding to orchestrating a mixed fleet."
          />
          <div className="mt-16 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution: Solution) => (
              <Link
                key={solution.id}
                href={`/solutions/${solution.slug}`}
                className="group flex min-h-64 flex-col border-b border-r border-border p-8 transition-colors hover:bg-surface"
              >
                <h3 className="text-xl tracking-tight">{solution.name}</h3>
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
            label="Who we serve"
            title="The same manual step, sector by sector."
            lede="The bottleneck looks different in a paint shop than a cleanroom — but underneath, it's the same unautomated move."
          />
          <ul className="mt-16 border-t border-border">
            {featuredIndustries.map((ind: Industry, i) => (
              <li key={ind.id}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group grid items-baseline gap-y-2 border-b border-border py-8 transition-colors hover:bg-surface md:grid-cols-12 md:gap-x-8"
                >
                  <span className="index-numeral text-sm md:col-span-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl tracking-tight md:col-span-4">{ind.name}</h3>
                  <p className="text-muted md:col-span-6">{ind.tagline}</p>
                  <ArrowUpRight
                    className="size-5 text-muted transition-colors group-hover:text-foreground md:col-span-1 md:justify-self-end"
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
            label="Why Momentum"
            title="Open by default. Yours to keep."
            lede="Most AMRs are sold like a subscription you can never leave. We build the opposite of that."
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
            label="Technology"
            title="Standards you can audit, not a black box."
            lede="Every Momentum robot runs the same open ROS 2 stack, with sensing tuned for real factory conditions."
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
            label="Platforms"
            title="One stack. Three platforms."
            lede="What a student writes on Pixel in the lab runs on a Cyborg on the line — same ROS 2 stack, no rewrite, no relearning."
          />
        </div>
        <ProductShowcase />
      </section>

      {/* WHERE WE ARE — honest early-stage + partnership */}
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto grid max-w-7xl gap-y-12 px-6 py-24 md:py-32 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-6">
            <span className="eyebrow">
              <span aria-hidden className="size-1.5 self-center bg-primary" />
              Where we are
            </span>
            <h2 className="display mt-5 text-4xl sm:text-5xl">Early-stage, and straight about it.</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              We&apos;re not going to claim a fleet we haven&apos;t shipped. Momentum is in
              selective deployment — running pilots with early customers in education,
              automotive and logistics, and integrating deeply with a few operations rather
              than chasing volume. Our European standards work runs through our partnership
              with Gebroeders Doms BV in Belgium.
            </p>
          </div>
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
          <span className="eyebrow">
            <span aria-hidden className="size-1.5 self-center bg-primary" />
            Get started
          </span>
          <h2 className="display mt-6 max-w-4xl text-4xl sm:text-6xl">
            Show us the move you can&apos;t automate.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Send us your payloads, routes and floor conditions. We&apos;ll tell you honestly
            whether a Momentum robot fits your operation today — and if it doesn&apos;t yet,
            we&apos;ll say so.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary group">
              Book a deployment call
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link href="/solutions" className="btn-secondary">
              Explore solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
