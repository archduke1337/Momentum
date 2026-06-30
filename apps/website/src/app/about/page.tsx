import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Why we built Momentum Robotics — open, standards-based autonomous mobile robots engineered in Pune for industry and education.',
};

const story = [
  'Indian discrete manufacturing has a structural blind spot: production itself is heavily automated, but most material movement between stations is still manual. We saw automotive plants running advanced robotic welding cells while forklifts and hand-carts still worked the aisles, warehouses struggling to scale peak-season labour, and universities teaching SLAM in simulation rather than on real hardware.',
  'We started Momentum to build the alternative that did not exist: open-source-first AMRs (ROS 2 native, VDA 5050 compliant), industry-grade at accessible price points, designed for real factory conditions. Not locked into proprietary software, not designed only for clean Western factories — works with legacy infrastructure and handles dust, reflective surfaces, and mixed human-robot zones.',
];

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 border-t border-border pt-8">
      <span className="index-numeral text-sm">{index}</span>
      <span className="label-mono">{label}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-b border-border py-3">
            <span className="label-mono">About Momentum</span>
            <span className="label-mono hidden sm:block">Pune, India</span>
          </div>
          <div className="grid gap-y-8 py-16 lg:grid-cols-12 lg:gap-x-10 lg:py-24">
            <h1 className="display max-w-3xl text-5xl sm:text-6xl lg:col-span-8 lg:text-7xl">
              Why we built Momentum.
            </h1>
            <p className="self-end text-lg leading-relaxed text-muted lg:col-span-4">
              Closing the gap between toy-grade education robots and million-rupee
              industrial platforms — with open, standards-based machines that serve both.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionLabel index="01" label="Our story" />
        <div className="mt-10 grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
          <h2 className="display text-3xl sm:text-4xl lg:col-span-5">From the factory floor up.</h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
            {story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionLabel index="02" label="Partnerships" />
        <div className="mt-10 grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
          <h2 className="display text-3xl sm:text-4xl lg:col-span-5">Global partnerships.</h2>
          <div className="border border-border p-8 md:p-10 lg:col-span-7">
            <h3 className="text-xl tracking-tight">Gebroeders Doms BV, Belgium</h3>
            <p className="mt-4 leading-relaxed text-muted">
              Our partnership with European automation firms brings standards expertise
              (VDA 5050, ISO compliance) and access to global markets. This collaboration
              combines Momentum&apos;s flexibility and cost advantages with European
              engineering rigour.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionLabel index="03" label="Our team" />
        <h2 className="display mt-10 text-3xl sm:text-4xl">The people behind Momentum.</h2>
        <div className="mt-10 grid border-t border-l border-border sm:grid-cols-2">
          <div className="flex items-center gap-5 border-b border-r border-border p-8">
            <span className="flex size-16 shrink-0 items-center justify-center border border-border font-mono text-lg text-foreground">
              DY
            </span>
            <div>
              <h3 className="text-lg tracking-tight">Deepak Yadav</h3>
              <p className="label-mono mt-1 text-primary">Founder &amp; CTO</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Leads robotics engineering and the ROS 2 navigation stack across the
                Pixel, Orbit, and Cyborg platforms.
              </p>
            </div>
          </div>
          <Link
            href="/careers"
            className="group flex flex-col justify-center border-b border-r border-border p-8 transition-colors hover:bg-surface"
          >
            <p className="text-lg tracking-tight">We&apos;re hiring</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Roboticists, software engineers, and field deployment specialists.
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium tracking-tight text-foreground group-hover:text-primary">
              View open roles
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionLabel index="04" label="Where we are" />
        <h2 className="display mt-10 text-3xl sm:text-4xl">Rooted in Pune, building globally.</h2>
        <div className="mt-10 grid border-t border-l border-border md:grid-cols-2">
          <div className="border-b border-r border-border p-8 md:p-10">
            <span className="label-mono">Headquarters</span>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              A-612 Park Plaza Business Center
              <br />
              Porwal Rd, Lohegaon
              <br />
              Pune 411047, India
            </p>
          </div>
          <div className="border-b border-r border-border p-8 md:p-10">
            <span className="label-mono">Global presence</span>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Operating from Pune and expanding globally, with European partnerships
              including Gebroeders Doms BV, Belgium.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="label-mono">Contact</p>
          <h2 className="display mt-5 max-w-3xl text-4xl sm:text-5xl">Let&apos;s talk.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Whether you are exploring solutions, want to discuss technical details, or are
            interested in partnership opportunities — get in touch with our team.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary gap-2">
              Contact us
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
