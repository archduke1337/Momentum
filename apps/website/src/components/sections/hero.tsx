'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const telemetry = [
  { k: 'Payload', v: '150–1000 kg' },
  { k: 'Runtime', v: 'up to 16 h' },
  { k: 'Navigation', v: 'ROS 2 · Nav2 · SLAM' },
  { k: 'Fleet', v: 'VDA 5050' },
  { k: 'Sensing', v: 'LiDAR + 3D cam + IMU' },
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
        className="grid-backdrop pointer-events-none absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
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
          <span className="label-mono hidden sm:block">Pune&nbsp;⇄&nbsp;Belgium · Selective deployment</span>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* stat kicker */}
        <motion.p {...rise(0)} className="label-mono mt-10 text-muted">
          In most plants, ~99% of moves between stations are still manual
        </motion.p>

        {/* headline */}
        <motion.h1
          {...rise(0.04)}
          className="display mt-5 max-w-[16ch] text-[3rem] leading-[0.95] sm:text-[4.5rem] lg:text-[6rem]"
        >
          Robots for the last manual step on the floor.
        </motion.h1>

        {/* body grid */}
        <div className="mt-12 grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <motion.div {...rise(0.1)} className="lg:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-muted">
              Momentum builds open, ROS&nbsp;2-native mobile robots that carry parts
              between stations, racks and storage — the moves still run by forklifts and
              hand trolleys. Own the stack, extend it yourself, skip the vendor lock-in.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary group">
                Book a deployment call
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link href="/technology" className="btn-secondary">
                How it works
              </Link>
            </div>
          </motion.div>

          <motion.div {...rise(0.16)} className="relative lg:col-span-7">
            {/* technical corner marks */}
            <span aria-hidden className="pointer-events-none absolute -left-px -top-px z-10 size-3 border-l border-t border-border" />
            <span aria-hidden className="pointer-events-none absolute -right-px -top-px z-10 size-3 border-r border-t border-border" />
            <span aria-hidden className="pointer-events-none absolute -bottom-px -left-px z-10 size-3 border-b border-l border-border" />
            <span aria-hidden className="pointer-events-none absolute -bottom-px -right-px z-10 size-3 border-b border-r border-border" />

            <span className="label-mono absolute left-2 top-2 z-10">Cyborg // 1000 kg</span>
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

      {/* telemetry / datasheet band */}
      <motion.div {...rise(0.22)} className="relative mt-12 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <dl className="grid grid-cols-2 border-l border-border sm:grid-cols-3 lg:grid-cols-5">
            {telemetry.map((t) => (
              <div key={t.k} className="border-b border-r border-border px-5 py-5">
                <dt className="spec-key">{t.k}</dt>
                <dd className="spec-value mt-1.5 text-[0.9375rem]">{t.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  );
}
