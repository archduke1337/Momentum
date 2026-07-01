'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';

const specs = [
  { k: 'Payload', v: '150–1000 kg' },
  { k: 'Stack', v: 'ROS 2' },
  { k: 'Fleet', v: 'VDA 5050' },
  { k: 'Built in', v: 'India' },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden border-b border-border pt-24">
      {/* faint technical grid backdrop, fading before it reaches the copy */}
      <div
        aria-hidden
        className="grid-backdrop pointer-events-none absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_72%)]"
      />

      {/* meta rule */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b border-border py-3">
          <span className="label-mono flex items-center gap-2.5">
            <span className="relative flex size-1.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping bg-primary opacity-60" />
              <span className="relative inline-flex size-1.5 bg-primary" />
            </span>
            Autonomous Material Handling
          </span>
          <span className="label-mono hidden sm:block">Pune, India — EST. 2024</span>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* headline */}
        <motion.h1
          {...rise(0.02)}
          className="display mt-12 max-w-5xl text-[3.25rem] leading-[0.95] sm:text-7xl lg:text-[6.5rem]"
        >
          We move material
          <br />
          so people don&apos;t.
        </motion.h1>

        {/* body grid */}
        <div className="mt-14 grid gap-y-12 border-t border-border pt-10 lg:grid-cols-12 lg:gap-x-10">
          <motion.div {...rise(0.08)} className="lg:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-muted">
              Open, ROS&nbsp;2-native autonomous mobile robots that take over the last
              unautomated step on the factory floor — moving parts between stations,
              racks, and zones, around the clock.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary group">
                Request a demo
                <span className="ml-2 transition-transform group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </Link>
              <Link href="/technology" className="btn-secondary">
                How it works
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 border-t border-border sm:grid-cols-4 lg:grid-cols-2">
              {specs.map((s) => (
                <div key={s.k} className="border-b border-border py-4 pr-4">
                  <dt className="label-mono">{s.k}</dt>
                  <dd className="mt-1 font-mono text-base text-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div {...rise(0.14)} className="relative lg:col-span-7">
            {/* technical corner marks */}
            <span aria-hidden className="pointer-events-none absolute -left-px -top-px z-10 size-3 border-l border-t border-border" />
            <span aria-hidden className="pointer-events-none absolute -right-px -top-px z-10 size-3 border-r border-t border-border" />
            <span aria-hidden className="pointer-events-none absolute -bottom-px -left-px z-10 size-3 border-b border-l border-border" />
            <span aria-hidden className="pointer-events-none absolute -bottom-px -right-px z-10 size-3 border-b border-r border-border" />

            <span className="label-mono absolute left-2 top-2 z-10">Cyborg / 1000 kg</span>
            <Image
              src="/Product/cyborg/Cyborg.png"
              alt="Cyborg industrial autonomous mobile robot"
              width={1600}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="h-auto w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
