import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, Globe2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Why we built Momentum Robotics — open, standards-based autonomous mobile robots engineered in Pune for industry and education.',
};

const story = [
  'In 2023, Indian discrete manufacturing faced a structural bottleneck: 99% of material movement between production stations remained manual, despite massive investment in production automation. We saw automotive plants with ₹50+ crore in robotic welding but forklifts still in the aisles, warehouses struggling to scale peak-season labour, and universities teaching SLAM on simulation rather than real hardware.',
  'We started Momentum to build the alternative that did not exist: open-source-first AMRs (ROS 2 native, VDA 5050 compliant), industry-grade at accessible price points, designed for real factory conditions. Not locked into proprietary software, not designed only for clean Western factories — works with legacy infrastructure and handles dust, reflective surfaces, and mixed human-robot zones.',
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-32">
        <span className="eyebrow">About Momentum</span>
        <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.1] md:text-6xl">
          Why we built Momentum
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          Momentum was founded to solve the last unautomated bottleneck in global
          manufacturing — material movement between stations, racks, and zones. We saw a
          gap between toy-grade education robots and million-rupee industrial platforms,
          and set out to build open, standards-based robots that serve both.
        </p>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl border-t border-border px-6 py-20">
        <span className="eyebrow">Our story</span>
        <h2 className="mt-4 font-heading text-3xl font-bold">From the factory floor up</h2>
        <div className="mt-8 space-y-6 leading-8 text-muted">
          {story.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Partnerships */}
      <section className="mx-auto max-w-4xl border-t border-border px-6 py-20">
        <span className="eyebrow">Partnerships</span>
        <h2 className="mt-4 font-heading text-3xl font-bold">Global partnerships</h2>
        <div className="surface-card mt-8 p-8">
          <h3 className="font-heading text-xl font-bold">Gebroeders Doms BV, Belgium</h3>
          <p className="mt-4 leading-8 text-muted">
            Our partnership with European automation firms brings standards expertise
            (VDA 5050, ISO compliance) and access to global markets. This collaboration
            combines Momentum&apos;s flexibility and cost advantages with European
            engineering rigour.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-4xl border-t border-border px-6 py-20">
        <span className="eyebrow">Our team</span>
        <h2 className="mt-4 font-heading text-3xl font-bold">The people behind Momentum</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="surface-card flex items-center gap-5 p-6">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary/12 font-heading text-xl font-bold text-primary">
              DY
            </span>
            <div>
              <h3 className="font-heading text-lg font-bold">Deepak Yadav</h3>
              <p className="text-sm font-semibold text-primary">Founder &amp; CTO</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Leads robotics engineering and the ROS 2 navigation stack across the
                Pixel, Orbit, and Cyborg platforms.
              </p>
            </div>
          </div>
          <Link
            href="/careers"
            className="surface-card flex flex-col justify-center p-6 text-center"
          >
            <p className="font-heading text-lg font-bold">We&apos;re hiring</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Roboticists, software engineers, and field deployment specialists.
            </p>
            <span className="mt-3 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-primary">
              View open roles
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-4xl border-t border-border px-6 py-20">
        <span className="eyebrow">Where we are</span>
        <h2 className="mt-4 font-heading text-3xl font-bold">Rooted in Pune, building globally</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="surface-card p-8">
            <span className="icon-tile">
              <Building2 className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-heading text-lg font-bold">Headquarters</h3>
            <p className="mt-3 leading-7 text-muted">
              A-612 Park Plaza Business Center
              <br />
              Porwal Rd, Lohegaon
              <br />
              Pune 411047, India
            </p>
          </div>
          <div className="surface-card p-8">
            <span className="icon-tile">
              <Globe2 className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-heading text-lg font-bold">Global presence</h3>
            <p className="mt-3 leading-7 text-muted">
              Operating from Pune and expanding globally, with European partnerships
              including Gebroeders Doms BV, Belgium.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl border-t border-border px-6 py-24">
        <div className="industrial-shell grid gap-8 rounded-3xl p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl">
              Let&apos;s talk
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted">
              Whether you are exploring solutions, want to discuss technical details, or
              are interested in partnership opportunities — get in touch with our team.
            </p>
          </div>
          <Link href="/contact" className="btn-primary gap-2 whitespace-nowrap">
            Contact Us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
