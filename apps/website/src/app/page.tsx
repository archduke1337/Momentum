import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { industries, solutions } from '@workspace/content';
import type { Industry, Solution } from '@workspace/types';
import { Hero } from '@/components/sections/hero';
import { ProductShowcase } from '@/components/sections/product-showcase';

const advantages = [
  {
    title: 'Open standards',
    body: 'ROS 2-native and VDA 5050 compliant, so your engineers extend the stack directly instead of filing a ticket and waiting on a vendor to unlock it.',
    detail: 'Extend it yourself; no ticket, no vendor gatekeeping.',
  },
  {
    title: 'Own it, don’t rent it',
    body: 'No per-seat licensing, no mandatory annual maintenance contract. You buy the fleet once and run it, which keeps the cost of ownership predictable over its working life.',
    detail: 'You buy the fleet once and it stays yours.',
  },
  {
    title: 'Education to industry',
    body: 'Pixel runs the same stack as Cyborg. What a student writes in the lab ships to the factory floor without a rewrite.',
    detail: 'Same stack in the lab and on the line.',
  },
  {
    title: 'Local and global',
    body: 'Engineered in Pune with European partnerships, deployable and serviceable worldwide.',
    detail: 'Serviced from Pune, deployed wherever you operate.',
  },
];

const tech = [
  { k: 'Perception', v: 'LiDAR + depth + IMU fusion, tuned for dust, glare, and reflective floors.' },
  { k: 'Fleet', v: 'VDA 5050 orchestration of mixed fleets from a single interface.' },
  { k: 'Safety', v: 'Certified scanners, e-stops, and human-robot collaboration zones built in.' },
  { k: 'Software', v: 'ROS 2 native — fully extensible, no black boxes, no lock-in.' },
];

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
    <div className="grid gap-y-6 border-t border-border pt-8 lg:grid-cols-12 lg:gap-x-10">
      <div className="flex items-baseline gap-4 lg:col-span-7">
        <span className="index-numeral text-sm">{index}</span>
        <div>
          <span className="label-mono">{label}</span>
          <h2 className="display mt-3 text-4xl sm:text-5xl">{title}</h2>
        </div>
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

      {/* 01 — INDUSTRIES (editorial list rows) */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeader
          index="01"
          label="Who we serve"
          title="The bottleneck, sector by sector."
          lede="Material movement looks different in every sector — but it’s the same unautomated step. See where Momentum fits yours."
        />
        <ul className="mt-16">
          {featuredIndustries.map((ind: Industry, i) => (
            <li key={ind.id}>
              <Link
                href={`/industries/${ind.slug}`}
                className="group grid items-baseline gap-y-2 border-t border-border py-8 transition-colors hover:bg-surface last:border-b md:grid-cols-12 md:gap-x-8"
              >
                <span className="index-numeral text-sm md:col-span-1">0{i + 1}</span>
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
      </section>

      {/* 02 — SOLUTIONS (modular hairline grid) */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeader
            index="02"
            label="What we do"
            title="Autonomous handling, five ways."
            lede="However material moves on your floor, it maps to one of these — from just-in-time line delivery to full fleet orchestration."
          />
          <div className="mt-16 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution: Solution, i) => (
              <Link
                key={solution.id}
                href={`/solutions/${solution.slug}`}
                className="group flex min-h-64 flex-col border-b border-r border-border p-8 transition-colors hover:bg-surface"
              >
                <span className="index-numeral text-sm">0{i + 1}</span>
                <h3 className="mt-5 text-xl tracking-tight">{solution.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {solution.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-foreground group-hover:text-primary">
                  Explore solution
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
            <Link
              href="/solutions"
              className="group flex min-h-64 flex-col justify-between border-b border-r border-border bg-surface/50 p-8 transition-colors hover:bg-surface"
            >
              <span className="label-mono">All solutions</span>
              <span className="inline-flex items-center gap-2 text-lg tracking-tight text-foreground group-hover:text-primary">
                See every solution
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 03 — TECHNOLOGY (definition list) */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeader
          index="03"
          label="Technology"
          title="Built on open standards, not black boxes."
          lede="Every Momentum robot runs the same ROS 2 stack with multi-sensor fusion tuned for real factory conditions."
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
      </section>

      {/* 04 — WHY MOMENTUM (modular hairline grid) */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeader
            index="04"
            label="Why Momentum"
            title="Open by default. Priced for reality."
            lede="Robotics you can own, extend, and afford — built by engineers who started where you are."
          />
          <div className="mt-16 grid border border-border md:grid-cols-2">
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
                className="flex flex-col border-border p-8 md:p-10 [&:nth-child(-n+2)]:border-b md:[&:nth-child(odd)]:border-r"
              >
                <span className="index-numeral text-sm">0{i + 1}</span>
                <h3 className="mt-5 text-xl tracking-tight">{adv.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{adv.body}</p>
                <p className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
                  {adv.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — PLATFORMS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-32">
          <SectionHeader
            index="05"
            label="Platforms"
            title="One stack. Three platforms."
            lede="What you learn on Pixel scales straight to a Cyborg fleet on the factory floor — no rewrite, no relearning."
          />
        </div>
        <ProductShowcase />
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="label-mono">Get started</p>
          <h2 className="display mt-5 max-w-4xl text-4xl sm:text-6xl">
            Tell us your floor. We&apos;ll map the robots.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Share your payloads, routes, and floor conditions — we&apos;ll come back with the
            right solution and a deployment plan for your operation.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get in touch
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
