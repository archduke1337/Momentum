import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-32">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl mb-6">
            Why We Built Momentum
          </h1>
          <p className="text-lg text-muted leading-8">
            {/* TODO: Add company origin story - why was momentum started, what problem did the founder see */}
            Momentum was founded to solve the last unautomated bottleneck in global manufacturing — material movement between
            stations, racks, and zones. We saw a gap: between toy-grade education robots and million-rupee industrial platforms.
            We're building open-source, standards-based robots that work for both education and industry.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="mx-auto max-w-4xl px-6 py-24 border-t border-border">
        <h2 className="text-3xl font-bold mb-8">Our Story</h2>
        <div className="space-y-6 text-muted leading-8">
          <p>
            {{/* TODO: Add detailed company story - background, founding, early days */}}
            In 2023, Indian discrete manufacturing faced a structural bottleneck: 99% of material movement between production
            stations remained manual, despite massive investments in production automation. We saw automotive plants with ₹50+
            crore in robotic welding but forklifts in the aisles. Warehouses struggling with peak season labor scaling. Universities
            teaching SLAM algorithms on simulation, not real hardware.
          </p>
          <p>
            {{/* TODO: Add vision - where momentum is going */}}
            We started Momentum to build the alternative that didn't exist: open-source first AMRs (ROS 2 native, VDA 5050
            compliant), industry-grade at accessible price points, designed for real Indian factory conditions. Not locked into
            proprietary software. Not designed for clean Western factories. Works with legacy infrastructure, handles dust,
            reflective surfaces, mixed human-robot zones.
          </p>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="mx-auto max-w-4xl px-6 py-24 border-t border-border">
        <h2 className="text-3xl font-bold mb-8">Global Partnerships</h2>
        <div className="border border-border rounded-lg bg-surface p-8">
          <h3 className="text-xl font-bold mb-4">{{/* TODO: Add partnership name */}} Gebroeders Doms BV, Belgium</h3>
          <p className="text-muted leading-8">
            {{/* TODO: Add partnership details - what is their role, how did we meet, what we're building together */}}
            Partnership with European automation firms brings standards expertise (VDA 5050, ISO compliance) and access to
            global markets. This collaboration combines Momentum's flexibility and cost advantages with European engineering rigor.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto max-w-4xl px-6 py-24 border-t border-border">
        <h2 className="text-3xl font-bold mb-12">Our Team</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Team Member 1: Deepak Yadav */}
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="aspect-square bg-muted/50 flex items-center justify-center">
              {{/* TODO: Add team member photo URL or use placeholder */}}
              <p className="text-muted text-sm">[Deepak Yadav Photo]</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Deepak Yadav</h3>
              <p className="text-sm font-semibold text-primary mb-3">Founder & CTO</p>
              <p className="text-sm text-muted leading-6">
                {{/* TODO: Add Deepak's background - education, years in robotics, previous roles, expertise */}}
                [Add background: IIT/NIT, robotics experience, previous companies, ROS 2 expertise]
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="aspect-square bg-muted/50 flex items-center justify-center">
              {{/* TODO: Add team member photo URL or use placeholder */}}
              <p className="text-muted text-sm">[Team Member Photo]</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{{/* TODO: Add name */}} [Name]</h3>
              <p className="text-sm font-semibold text-primary mb-3">{{/* TODO: Add title */}} [Title]</p>
              <p className="text-sm text-muted leading-6">
                {{/* TODO: Add background */}}
                [Add background: expertise, previous roles, focus area]
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="aspect-square bg-muted/50 flex items-center justify-center">
              {{/* TODO: Add team member photo URL or use placeholder */}}
              <p className="text-muted text-sm">[Team Member Photo]</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{{/* TODO: Add name */}} [Name]</h3>
              <p className="text-sm font-semibold text-primary mb-3">{{/* TODO: Add title */}} [Title]</p>
              <p className="text-sm text-muted leading-6">
                {{/* TODO: Add background */}}
                [Add background: expertise, previous roles, focus area]
              </p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="aspect-square bg-muted/50 flex items-center justify-center">
              {{/* TODO: Add team member photo URL or use placeholder */}}
              <p className="text-muted text-sm">[Team Member Photo]</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{{/* TODO: Add name */}} [Name]</h3>
              <p className="text-sm font-semibold text-primary mb-3">{{/* TODO: Add title */}} [Title]</p>
              <p className="text-sm text-muted leading-6">
                {{/* TODO: Add background */}}
                [Add background: expertise, previous roles, focus area]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="mx-auto max-w-4xl px-6 py-24 border-t border-border">
        <h2 className="text-3xl font-bold mb-8">Where We Are</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="border border-border rounded-lg bg-surface p-8">
            <h3 className="font-bold text-lg mb-3">Headquarters</h3>
            <p className="text-muted leading-7">
              {{/* TODO: Add HQ details */}}
              A-612 Park Plaza Business Center
              <br />
              Porwal Rd, Lohegaon
              <br />
              Pune 411047, India
            </p>
          </div>
          <div className="border border-border rounded-lg bg-surface p-8">
            <h3 className="font-bold text-lg mb-3">Global Presence</h3>
            <p className="text-muted leading-7">
              {{/* TODO: Add regions we operate in */}}
              Currently operating in Pune and expanding globally.
              <br />
              <br />
              European partnerships: Gebroeders Doms BV, Belgium
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-t border-border">
        <div className="grid gap-8 border border-border bg-surface p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center rounded-lg">
          <div>
            <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl mb-4">Let's Talk</h2>
            <p className="max-w-2xl text-sm leading-6 text-muted md:text-base">
              {{/* TODO: Add CTA copy */}}
              Whether you're exploring solutions, want to discuss technical details, or are interested in partnership opportunities —
              get in touch with our team.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110 whitespace-nowrap"
          >
            Contact Us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
