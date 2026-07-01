import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Momentum',
  description:
    'What actually makes Momentum different: an open ROS 2 stack exposed to customers, native VDA 5050 fleet orchestration, and perception tuned for real factory floors.',
};

const advantages = [
  {
    title: 'Open ROS 2, exposed — not buried under a layer',
    body: 'Momentum runs ROS 2 Humble with Nav2 and SLAM Toolbox, and we hand you the actual stack — topics, services, and source you can read and extend. Your engineers own the navigation logic instead of filing a ticket for every change.',
    pattern:
      'ROS 2 is common under the hood across the industry, but it usually stays internal — wrapped in a closed application layer the customer never touches.',
  },
  {
    title: 'VDA 5050 native, not retrofitted',
    body: 'Fleet orchestration speaks VDA 5050 from the ground up, so a mixed fleet — including third-party robots — can run under one interface, one dashboard, one traffic model.',
    pattern:
      'VDA 5050 is now a tender requirement on a growing number of automotive lines, and several established vendors are still building adapter layers to bridge older, proprietary APIs onto it.',
  },
  {
    title: 'Tuned for the floor you actually have',
    body: 'Perception fuses 2D LiDAR, 3D depth, and IMU specifically to hold a stable map through dust, glare, and reflective metal — the conditions on a working floor, not a clean demo warehouse.',
    pattern:
      'A lot of AMR navigation is validated on flat, well-lit, well-marked warehouse floors, and degrades once conditions get messier.',
  },
  {
    title: 'Education-to-industry, same stack',
    body: 'Pixel runs the identical ROS 2 navigation architecture as our industrial Cyborg line. A student building SLAM and multi-robot coordination on Pixel in a lab is training on the exact software a Cyborg runs on a factory floor.',
    pattern:
      'Education robots and industrial robots are typically built by different companies on different stacks, so the skills rarely transfer directly.',
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
              Open standards and a straight line from the lab to the factory floor —
              with no vendor lock-in.
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
              <p className="mt-6 border-t border-border pt-4 text-sm leading-6 text-muted-foreground">
                <span className="label-mono">Industry pattern</span>
                <br />
                {adv.pattern}
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
