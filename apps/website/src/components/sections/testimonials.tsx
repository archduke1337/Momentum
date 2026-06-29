'use client';

import { ClipboardCheck, Gauge, Wrench } from 'lucide-react';
import RevealText from '@/components/smoothui/reveal-text';

const buyerQuestions = [
  {
    icon: ClipboardCheck,
    title: 'Can we start without changing the whole plant?',
    answer: 'Yes. We scope a pilot route first, document constraints, and expand only after operators and managers see the flow working.',
  },
  {
    icon: Gauge,
    title: 'How do we know the robot is right for our floor?',
    answer: 'Payload, corridor width, surface condition, traffic, charging access, and handoff timing are reviewed before recommending a platform.',
  },
  {
    icon: Wrench,
    title: 'What happens after installation?',
    answer: 'We plan training, maintenance, software updates, and support ownership as part of the deployment, not as a late add-on.',
  },
];

export function Testimonials() {
  return (
    <section className="industrial-section mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            <RevealText direction="up" triggerOnView>Questions serious buyers ask first</RevealText>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            The site is designed to support early market conversations with plant heads, founders, operations teams, and procurement.
          </p>
        </div>

        <div className="grid gap-4">
          {buyerQuestions.map((item, i) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex gap-4">
                  <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">
                      <RevealText direction="up" delay={i * 70} triggerOnView>{item.title}</RevealText>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
