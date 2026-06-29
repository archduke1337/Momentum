'use client';

import Image from 'next/image';
import RevealText from '@/components/smoothui/reveal-text';
import ScrollRevealParagraph from '@/components/smoothui/scroll-reveal-paragraph';
import { CTA } from '@/components/sections/cta';

const process = [
  {
    step: '01',
    title: 'Site Survey',
    desc: 'We study your operations, workflows, and constraints before proposing anything.',
  },
  {
    step: '02',
    title: 'Solution Design',
    desc: 'Robot configuration, navigation logic, and system integration tailored to your use case.',
  },
  {
    step: '03',
    title: 'Deploy & Integrate',
    desc: 'Tested in real conditions before handover. We stay until it works.',
  },
  {
    step: '04',
    title: 'Support & Scale',
    desc: 'Ongoing maintenance, fleet expansion, and software updates as your needs grow.',
  },
];

const values = [
  {
    title: 'Engineering First',
    desc: 'Every decision starts with what solves the problem, not what looks good on a slide.',
    image: '/Assets/Square_metalcut.avif',
  },
  {
    title: 'Build for Scale',
    desc: 'Solutions that work for one robot work for a fleet. We design for growth.',
    image: '/Assets/draw.avif',
  },
  {
    title: 'Stay Honest',
    desc: 'We tell customers when automation is not the right answer. Trust matters more than deals.',
    image: '/Assets/drawing.avif',
  },
  {
    title: 'Own the Outcome',
    desc: 'We do not disappear after deployment. We are accountable for results.',
    image: '/Assets/Agility_Digit.avif',
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-end pb-20 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-[0.04]"
            style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <p className="text-sm text-muted font-medium tracking-wide mb-6">
            <RevealText direction="up">About Momentum Robotics</RevealText>
          </p>
          <h1 className="font-heading text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl max-w-3xl">
            <RevealText direction="up" delay={100}>Engineering intelligent</RevealText>
            <br />
            <RevealText direction="up" delay={200}>factory automation</RevealText>
          </h1>
          <div className="mt-6 max-w-xl">
            <ScrollRevealParagraph
              paragraph="Momentum Robotics is an industrial robotics company focused on transforming factory logistics through Autonomous Mobile Robots."
              className="text-lg text-muted leading-relaxed"
            />
          </div>
        </div>
      </section>

      {/* Mission + Robot Arm */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-muted uppercase tracking-[0.2em] mb-3">
              <RevealText direction="up" triggerOnView>Our Mission</RevealText>
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight">
              <RevealText direction="up" delay={50} triggerOnView>Mission</RevealText>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              To help manufacturers automate material movement using reliable
              autonomous robotics. We deliver industrial-grade AMR platforms that
              integrate seamlessly into existing operations.
            </p>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl border border-border bg-surface overflow-hidden">
            <Image
              src="/Assets/343x480.png"
              alt="Industrial robot arm"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      </section>

      {/* What We Do + High-res Arm */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] rounded-2xl border border-border bg-surface overflow-hidden order-2 lg:order-1">
            <Image
              src="/Assets/1266x1776.png"
              alt="UR-style collaborative robot arm"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs text-muted uppercase tracking-[0.2em] mb-3">
              <RevealText direction="up" delay={100} triggerOnView>What We Do</RevealText>
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight">
              <RevealText direction="up" delay={150} triggerOnView>What we do</RevealText>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We build intelligent robotics solutions using advanced navigation,
              control systems, and fleet management software engineered for
              industrial environments.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border bg-surface/20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-xs text-muted uppercase tracking-[0.2em] mb-3">
            <RevealText direction="up" triggerOnView>How We Work</RevealText>
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight mb-16">
            <RevealText direction="up" delay={50} triggerOnView>Our process</RevealText>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <div key={item.step}>
                <div className="font-mono text-xs text-primary mb-4">
                  <RevealText direction="up" delay={i * 100} triggerOnView>{item.step}</RevealText>
                </div>
                <h3 className="text-lg font-semibold">
                  <RevealText direction="up" delay={i * 100 + 30} triggerOnView>{item.title}</RevealText>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values with images */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-xs text-muted uppercase tracking-[0.2em] mb-3">
          <RevealText direction="up" triggerOnView>Our Principles</RevealText>
        </p>
        <h2 className="font-heading text-4xl font-bold tracking-tight mb-12">
          <RevealText direction="up" delay={50} triggerOnView>Values</RevealText>
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((item, i) => (
            <div
              key={item.title}
              className="border border-border rounded-2xl overflow-hidden bg-surface"
            >
              <div className="aspect-[16/9] bg-accent relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-lg font-semibold">
                  <RevealText direction="up" delay={i * 80} triggerOnView>{item.title}</RevealText>
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team with robot hand */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-muted uppercase tracking-[0.2em] mb-3">
              <RevealText direction="up" triggerOnView>Our Team</RevealText>
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight leading-tight">
              <RevealText direction="up" delay={50} triggerOnView>Leadership driving industrial robotics excellence</RevealText>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our team combines deep expertise in industrial robotics, automation
              engineering, embedded systems, and enterprise software.
            </p>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl border border-border bg-surface overflow-hidden">
            <Image
              src="/Assets/hi hand.avif"
              alt="Robotic hand"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
