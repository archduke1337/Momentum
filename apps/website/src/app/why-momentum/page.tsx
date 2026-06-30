import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Momentum — Competitive Advantages',
  description: 'Discover what makes Momentum different: ROS 2 native, cost-effective, open standards, education-to-industry bridge.',
};

export default function WhyMomentumPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-32 pb-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Momentum</h1>
      <p className="text-xl text-muted mb-16">
        {/* TODO: Add intro text */}
        We approach autonomous robotics differently — combining open standards, cost-effectiveness, and education pathways
        to solve material handling challenges without vendor lock-in.
      </p>

      {/* Advantage 1: Open Standards */}
      <section className="mb-16 pb-16 border-b border-border">
        <h2 className="text-3xl font-bold mb-4">1. Open Standards, No Lock-In</h2>
        <p className="text-muted mb-4 leading-7">
          {/* TODO: Add detail */}
          ROS 2 native. VDA 5050 compliant. Your engineers can read, modify, and extend our code. You're never locked into proprietary
          software or maintenance contracts. Hire a roboticist trained anywhere — they'll understand our stack.
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>Vs. Competitors:</strong> {/* TODO: Add competitor comparison */} Most proprietary stacks lock you in for both
          software development and maintenance.
        </p>
      </section>

      {/* Advantage 2: Cost-Effective */}
      <section className="mb-16 pb-16 border-b border-border">
        <h2 className="text-3xl font-bold mb-4">2. Cost-Effective at Scale</h2>
        <p className="text-muted mb-4 leading-7">
          {/* TODO: Add detail */}
          ₹15-30L per robot. 2-3 year payback in most deployments. Low TCO: no licensing, no annual maintenance contracts,
          no proprietary software costs. Leveraging Indian engineering and manufacturing efficiency without premium pricing.
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>Vs. Competitors:</strong> {/* TODO: Add competitor comparison */} Imported robots cost ₹40-100L + annual maintenance.
        </p>
      </section>

      {/* Advantage 3: Education Bridge */}
      <section className="mb-16 pb-16 border-b border-border">
        <h2 className="text-3xl font-bold mb-4">3. Education-to-Industry Bridge</h2>
        <p className="text-muted mb-4 leading-7">
          {/* TODO: Add detail */}
          Pixel is an industry-grade autonomous platform at education pricing. Students learn on the exact same ROS 2 stack
          and navigation architecture used in our industrial Cyborg deployments. No retraining when they join a factory.
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>Vs. Competitors:</strong> {/* TODO: Add competitor comparison */} Toy education robots don't translate to real
          factories. Industrial platforms are too expensive for universities.
        </p>
      </section>

      {/* Advantage 4: Global + Local */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">4. Global Ambitions, Local Roots</h2>
        <p className="text-muted mb-4 leading-7">
          {/* TODO: Add detail */}
          Rooted in Pune, partnering with European automation firms. We understand Indian factory conditions while building
          for global standards. Not a global company ignoring local needs, and not a local startup that can't scale.
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>Vs. Competitors:</strong> {/* TODO: Add competitor comparison */} Global AMR companies often miss regional
          specifics. Pure Indian startups lack international experience.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-20 p-8 border border-border rounded-lg bg-surface">
        <h3 className="text-2xl font-bold mb-4">Ready to see these advantages in action?</h3>
        <p className="text-muted mb-6">
          {/* TODO: Add CTA text */}
          Whether you're a plant, an engineering team, or a university — let's discuss how Momentum fits your challenge.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
