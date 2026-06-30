import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Momentum — Competitive Advantages',
  description: 'Discover what makes Momentum different: ROS 2 native, cost-effective, open standards, education-to-industry bridge.',
};

const advantages = [
  {
    title: 'Open Standards, No Lock-In',
    body: 'ROS 2 native and VDA 5050 compliant. Your engineers can read, modify, and extend our code — you are never locked into proprietary software or maintenance contracts. Hire a roboticist trained anywhere and they will understand our stack.',
    contrast: 'Most proprietary stacks lock you in for both development and maintenance.',
  },
  {
    title: 'Lower Total Cost of Ownership',
    body: 'No licensing fees, no mandatory annual maintenance contracts, and no proprietary software costs. We build with Indian engineering efficiency so the economics work over the full life of the fleet, not just at purchase.',
    contrast: 'Imported platforms often carry premium pricing plus recurring maintenance contracts.',
  },
  {
    title: 'Education-to-Industry Bridge',
    body: 'Pixel is an industry-grade autonomous platform made accessible for the classroom. Students learn on the exact same ROS 2 stack and navigation architecture used in our industrial Cyborg platforms — no retraining when they join a factory.',
    contrast: 'Toy education robots do not translate to real factories; industrial platforms are too expensive for universities.',
  },
  {
    title: 'Global Ambitions, Local Roots',
    body: 'Rooted in Pune, partnering with European automation firms. We understand Indian factory conditions while building for global standards — not a global company ignoring local needs, and not a local startup that cannot scale.',
    contrast: 'Global AMR companies miss regional specifics; pure local startups lack international experience.',
  },
];

export default function WhyMomentumPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-b border-border py-3">
            <span className="label-mono">Why Momentum</span>
          </div>
          <div className="grid gap-y-8 py-16 lg:grid-cols-12 lg:gap-x-10 lg:py-24">
            <h1 className="display max-w-3xl text-5xl sm:text-6xl lg:col-span-8 lg:text-7xl">
              A different approach to autonomy.
            </h1>
            <p className="self-end text-lg leading-relaxed text-muted lg:col-span-4">
              Open standards, honest pricing, and a path from the lab to the floor — with
              no vendor lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages — numbered modular grid */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid border-t border-l border-border md:grid-cols-2">
          {advantages.map((adv, i) => (
            <div key={adv.title} className="flex flex-col border-b border-r border-border p-8 md:p-10">
              <span className="index-numeral text-sm">0{i + 1}</span>
              <h2 className="mt-5 text-2xl tracking-tight">{adv.title}</h2>
              <p className="mt-4 flex-1 leading-relaxed text-muted">{adv.body}</p>
              <p className="mt-6 border-t border-border pt-4 text-sm leading-6 text-mut-foreground">
                <span className="label-mono">Vs. competitors</span>
                <br />
                {adv.contrast}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="label-mono">Get started</p>
          <h2 className="display mt-5 max-w-3xl text-4xl sm:text-5xl">
            See these advantages in action.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Whether you are a plant, an engineering team, or a university — let&apos;s
            discuss how Momentum fits your challenge.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary gap-2">
              Get in touch
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
