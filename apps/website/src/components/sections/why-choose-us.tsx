'use client';

import RevealText from '@/components/smoothui/reveal-text';

const features = [
  {
    number: '01',
    title: 'Industrial AMR Expertise',
    desc: 'Robotics engineered for real factory conditions and high-duty cycles. Not lab prototypes.',
  },
  {
    number: '02',
    title: 'Customized Automation',
    desc: 'Solutions tailored to your layout constraints, payloads, and process flow. No rip-and-replace.',
  },
  {
    number: '03',
    title: 'Future-Ready Technology',
    desc: 'Scalable systems with intelligent navigation, dynamic routing, and fleet coordination.',
  },
  {
    number: '04',
    title: 'Proven Deployments',
    desc: 'Validated across automotive, pharma, FMCG, and warehousing environments in India.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-4 py-24 lg:py-32 lg:pr-16 lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs text-muted uppercase tracking-[0.2em] mb-3">
              <RevealText direction="up">Why Momentum</RevealText>
            </p>
            <h2 className="font-heading text-4xl font-bold md:text-5xl leading-tight tracking-tight">
              <RevealText direction="up" delay={50}>Why manufacturers</RevealText>
              <br />
              <RevealText direction="up" delay={100}>choose Momentum</RevealText>
            </h2>
            <p className="mt-5 text-muted max-w-xs leading-relaxed">
              Built for Indian industrial environments. Designed for scale.
            </p>
          </div>

          <div className="lg:col-span-8 py-24 lg:py-32">
            {features.map((feature, i) => (
              <div
                key={feature.number}
                className="grid grid-cols-[auto_1fr] gap-6 py-7 border-b border-border last:border-b-0"
              >
                <div className="font-mono text-xs text-primary mt-1">
                  <RevealText direction="up" delay={i * 80} triggerOnView>{feature.number}</RevealText>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    <RevealText direction="up" delay={i * 80 + 20} triggerOnView>{feature.title}</RevealText>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-lg leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
