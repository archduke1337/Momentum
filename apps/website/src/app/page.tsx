import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Hero } from '@/components/sections/hero';
import { ProductShowcase } from '@/components/sections/product-showcase';

const industries = [
  {
    name: 'Automotive',
    problem: 'Line starvation when parts don’t reach the station in time.',
    impact: 'Idle lines, missed takt',
    href: '/industries/automotive',
  },
  {
    name: 'Warehouse & Logistics',
    problem: 'Peak-season demand spikes force temporary hires with high attrition.',
    impact: 'Labour cost & errors',
    href: '/industries/warehouses-logistics',
  },
  {
    name: 'Pharma & Life Sciences',
    problem: 'Manual movement risks cleanroom contamination and audit exposure.',
    impact: 'Compliance & audit risk',
    href: '/industries/pharma',
  },
];

const advantages = [
  {
    title: 'Open standards',
    body: 'ROS 2-native and VDA 5050 compliant. Your engineers extend the stack instead of waiting on a vendor.',
    detail: 'Extend it yourself; no ticket, no vendor gatekeeping.',
  },
  {
    title: 'Own it, don’t rent it',
    body: 'No per-seat licensing and no mandatory annual maintenance contracts — a lower total cost of ownership over the life of the fleet.',
    detail: 'You buy the fleet once and it stays yours.',
  },
  {
    title: 'Education to industry',
    body: 'Pixel runs the same stack as Cyborg — what you learn in the lab ships straight to the factory floor.',
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
  return (
    <>
      <Hero />

      {/* 01 — INDUSTRIES (editorial list rows) */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeader
          index="01"
          label="The bottleneck"
          title="Material movement is the last unautomated step."
          lede="It looks different in every sector, but it’s the same problem: people pushing carts where robots should run."
        />
        <ul className="mt-16">
          {industries.map((ind, i) => (
            <li key={ind.name}>
              <Link
                href={ind.href}
                className="group grid items-baseline gap-y-2 border-t border-border py-8 transition-colors hover:bg-surface md:grid-cols-12 md:gap-x-8 last:border-b"
              >
                <span className="index-numeral text-sm md:col-span-1">0{i + 1}</span>
                <h3 className="text-2xl tracking-tight md:col-span-3">{ind.name}</h3>
                <p className="text-muted md:col-span-5">{ind.problem}</p>
                <span className="label-mono text-destructive md:col-span-2">{ind.impact}</span>
                <ArrowUpRight
                  className="size-5 text-muted transition-colors group-hover:text-foreground md:col-span-1 md:justify-self-end"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 02 — WHY MOMENTUM (modular hairline grid) */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeader
            index="02"
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

      {/* 04 — PLATFORMS */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-32">
          <SectionHeader
            index="04"
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
            right platform and a deployment plan for your operation.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
            <Link href="/products" className="btn-secondary">
              View products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
