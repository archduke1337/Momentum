'use client';

import RevealText from '@/components/smoothui/reveal-text';

const signals = [
  { value: '3', label: 'AMR platform families', detail: 'Compact, heavy-duty, and modular robots for different floor needs.' },
  { value: '100-1000 kg', label: 'Payload planning range', detail: 'A practical span for pilots, plant logistics, and future fleet growth.' },
  { value: 'Pilot-first', label: 'Deployment method', detail: 'Start with one high-value route before expanding into full fleet automation.' },
  { value: 'India-built', label: 'Market focus', detail: 'Designed around local support, factory realities, and procurement expectations.' },
];

export function Stats() {
  return (
    <section className="industrial-section mx-auto max-w-7xl px-6 py-20">
      <div className="industrial-shell rounded-2xl p-5 md:p-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((stat, i) => (
            <div key={stat.label} className="rounded-xl border border-border bg-background/45 p-5">
              <div className="font-heading text-3xl font-bold tracking-normal text-primary md:text-4xl">
                <RevealText direction="up" delay={i * 65} triggerOnView>{stat.value}</RevealText>
              </div>
              <div className="mt-3 text-sm font-semibold text-foreground">
                <RevealText direction="up" delay={i * 65 + 20} triggerOnView>{stat.label}</RevealText>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
