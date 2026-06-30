import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code2, Wallet, GraduationCap, Globe2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Momentum — Competitive Advantages',
  description: 'Discover what makes Momentum different: ROS 2 native, cost-effective, open standards, education-to-industry bridge.',
};

const advantages = [
  {
    icon: Code2,
    title: 'Open Standards, No Lock-In',
    body: 'ROS 2 native and VDA 5050 compliant. Your engineers can read, modify, and extend our code — you are never locked into proprietary software or maintenance contracts. Hire a roboticist trained anywhere and they will understand our stack.',
    contrast: 'Most proprietary stacks lock you in for both development and maintenance.',
  },
  {
    icon: Wallet,
    title: 'Cost-Effective at Scale',
    body: '₹15–30L per robot with a 2–3 year payback in most deployments. Low total cost of ownership: no licensing, no annual maintenance contracts, no proprietary software costs — Indian engineering efficiency without premium pricing.',
    contrast: 'Imported robots cost ₹40–100L plus annual maintenance.',
  },
  {
    icon: GraduationCap,
    title: 'Education-to-Industry Bridge',
    body: 'Pixel is an industry-grade autonomous platform at education pricing. Students learn on the exact same ROS 2 stack and navigation architecture used in our industrial Cyborg deployments — no retraining when they join a factory.',
    contrast: 'Toy education robots do not translate to real factories; industrial platforms are too expensive for universities.',
  },
  {
    icon: Globe2,
    title: 'Global Ambitions, Local Roots',
    body: 'Rooted in Pune, partnering with European automation firms. We understand Indian factory conditions while building for global standards — not a global company ignoring local needs, and not a local startup that cannot scale.',
    contrast: 'Global AMR companies miss regional specifics; pure local startups lack international experience.',
  },
];

export default function WhyMomentumPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-32">
        <span className="eyebrow">Why Momentum</span>
        <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.1] md:text-6xl">
          A different approach to autonomy
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          We combine open standards, cost-effectiveness, and education pathways to solve
          material handling challenges — without vendor lock-in.
        </p>
      </section>

      {/* Advantages */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <div key={adv.title} className="surface-card flex flex-col p-8">
                <div className="flex items-center justify-between">
                  <span className="icon-tile">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
                </div>
                <h2 className="mt-6 font-heading text-xl font-bold">{adv.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{adv.body}</p>
                <p className="mt-5 border-t border-border/60 pt-4 text-xs leading-5 text-muted-foreground">
                  <span className="font-semibold text-foreground">vs. competitors: </span>
                  {adv.contrast}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-28 pt-12">
        <div className="industrial-shell relative overflow-hidden rounded-3xl px-8 py-14 text-center md:px-16">
          <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              See these advantages in action
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
              Whether you are a plant, an engineering team, or a university — let&apos;s
              discuss how Momentum fits your challenge.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/contact" className="btn-primary gap-2">
                Get in Touch
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
