'use client';

import { BatteryCharging, Map, PlugZap, ShieldCheck } from 'lucide-react';
import RevealText from '@/components/smoothui/reveal-text';

const capabilities = [
  {
    icon: Map,
    title: 'Pilot routes before big promises',
    desc: 'We begin with one route, one payload, and measurable handoff points. The fleet plan comes after the floor proves it.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety as deployment design',
    desc: 'Speed, zones, stops, charging, and operator flow are treated as one system, not separate sales-line features.',
  },
  {
    icon: PlugZap,
    title: 'Integration without black boxes',
    desc: 'ERP, MES, WMS, and operator dashboards are planned early so the robot fits the process around it.',
  },
  {
    icon: BatteryCharging,
    title: 'Support close to the customer',
    desc: 'As an Indian startup, we are building for local commissioning, service loops, and faster iteration with plants here.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="industrial-section border-y border-border bg-surface/20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            <RevealText direction="up" triggerOnView>Built like a partner, not just a robot supplier</RevealText>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            Momentum is early, focused, and hands-on. That is an advantage when your floor needs adaptation, not theatre.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-background/55 p-6 transition duration-300 hover:border-primary/35 hover:bg-surface"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">
                  <RevealText direction="up" delay={i * 70} triggerOnView>{item.title}</RevealText>
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
