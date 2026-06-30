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

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs tracking-[0.2em] text-primary/60 uppercase">about momentum</p>
          <h1 className="mt-4 font-heading text-5xl font-bold leading-tight md:text-7xl">
            Building robotics from classroom autonomy to factory movement
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
            Momentum Robotics is an Indian robotics startup connecting education platforms, navigation research, and industrial AMRs into one focused product path.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative min-h-[520px] overflow-hidden border border-border bg-[#f4f5ef]">
            <Image
              src="/Product/cyborg/Cyborg.png"
              alt="Cyborg industrial AMR"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-contain object-bottom p-5"
            />
          </div>

          <div className="flex flex-col justify-center gap-6">
            {beliefs.map((belief) => (
              <div key={belief.title} className="border-l-2 border-primary/30 pl-5">
                <h2 className="font-heading text-2xl font-bold">{belief.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground md:text-base md:leading-7">{belief.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid divide-x-0 divide-y divide-border/50 md:grid-cols-4 md:divide-x md:divide-y-0">
            {[
              { num: '01', label: 'Learn autonomy' },
              { num: '02', label: 'Validate movement' },
              { num: '03', label: 'Pilot Cyborg' },
              { num: '04', label: 'Scale carefully' },
            ].map((item) => (
              <div key={item.num} className="py-10 md:px-6 md:py-16">
                <p className="font-mono text-sm font-bold text-primary/60">{item.num}</p>
                <p className="mt-3 font-heading text-xl font-bold text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">Talk to the team building it</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            Bring a lab, research, or factory movement problem. We will help place it on the right Momentum track.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Contact Momentum
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
