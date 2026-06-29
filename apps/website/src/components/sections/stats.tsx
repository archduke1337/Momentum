'use client';

import RevealText from '@/components/smoothui/reveal-text';

const stats = [
  { value: '—', label: 'Happy Customers', detail: 'Across automotive, pharma, FMCG & warehousing' },
  { value: '—', label: 'Robots Deployed', detail: 'Running 24/7 in real factory environments' },
  { value: '—', label: 'Days of Deployment', detail: 'From site survey to live operations' },
  { value: '—', label: 'System Uptime', detail: 'Enterprise-grade reliability' },
];

export function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={stat.label}>
            <div className="font-heading text-4xl md:text-5xl font-bold text-primary tracking-tight">
              <RevealText direction="up" delay={i * 100} triggerOnView>{stat.value}</RevealText>
            </div>
            <div className="mt-2 text-sm font-semibold text-foreground">
              <RevealText direction="up" delay={i * 100 + 30} triggerOnView>{stat.label}</RevealText>
            </div>
            <div className="mt-1 text-xs text-muted leading-relaxed">
              {stat.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
