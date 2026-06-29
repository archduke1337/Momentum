import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const beliefs = [
  {
    title: 'Robotics should be teachable',
    body: 'Pixel and Orbit help teams understand ROS2, SLAM, sensors, and navigation before they commit to larger automation decisions.',
  },
  {
    title: 'Robots should earn their floor space',
    body: 'Cyborg is built around real material movement problems: payload, route, operator safety, charging, and repeatable handoff.',
  },
  {
    title: 'Indian industry needs close support',
    body: 'Momentum is building locally so pilots, commissioning, service, and iteration can happen near the teams using the robots.',
  },
];

const process = ['Learn autonomy', 'Validate movement', 'Pilot Cyborg', 'Scale carefully'];

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
              About Momentum
            </p>
            <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl">
              Building robotics from classroom autonomy to factory movement
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted md:text-lg">
            Momentum Robotics is an Indian robotics startup connecting education platforms, navigation research, and industrial AMRs into one focused product path.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[520px] overflow-hidden border border-border bg-[#f4f5ef]">
            <Image
              src="/Product/cyborg/Cyborg.png"
              alt="Cyborg industrial AMR"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-contain object-bottom p-5"
            />
          </div>

          <div className="grid border border-border">
            {beliefs.map((belief) => (
              <article key={belief.title} className="border-b border-border bg-surface p-7 last:border-b-0 md:p-8">
                <h2 className="font-heading text-3xl font-bold">{belief.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted-foreground md:text-base md:leading-7">{belief.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/25">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-px border border-border bg-border md:grid-cols-4">
            {process.map((item, index) => (
              <div key={item} className="bg-background p-6">
                <p className="font-heading text-4xl font-bold text-primary">{index + 1}</p>
                <p className="mt-4 text-lg font-semibold text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 border border-border bg-surface p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">Talk to the team building it</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted md:text-base">
              Bring a lab, research, or factory movement problem. We will help place it on the right Momentum track.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Contact Momentum
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
