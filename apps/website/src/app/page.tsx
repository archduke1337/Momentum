import { Hero } from '@/components/sections/hero';
import { ProductShowcase } from '@/components/sections/product-showcase';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* SECTION 2: Choose Your Path */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold md:text-4xl mb-12">
          {/* TODO: Customize headline for your audience */}
          Choose Your Path
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Path 1: Plant Manager */}
          <div className="border border-border rounded-lg bg-surface p-8">
            <h3 className="text-xl font-bold mb-3">I'm a Plant Manager</h3>
            <p className="text-muted mb-4">
              {/* TODO: Add plant manager pain point */}
              How do I scale material movement without hiring more people?
            </p>
            <a href="/solutions/line-side-delivery" className="text-primary font-semibold hover:underline">
              Explore Industrial Solutions →
            </a>
          </div>

          {/* Path 2: Engineering Director */}
          <div className="border border-border rounded-lg bg-surface p-8">
            <h3 className="text-xl font-bold mb-3">I'm an Engineering Director</h3>
            <p className="text-muted mb-4">
              {/* TODO: Add engineering pain point */}
              How do I avoid vendor lock-in in robotics?
            </p>
            <a href="/technology" className="text-primary font-semibold hover:underline">
              Explore Our Technology →
            </a>
          </div>

          {/* Path 3: University/Lab */}
          <div className="border border-border rounded-lg bg-surface p-8">
            <h3 className="text-xl font-bold mb-3">I'm a University/Lab</h3>
            <p className="text-muted mb-4">
              {/* TODO: Add education pain point */}
              How do I teach real autonomous systems on industry-grade hardware?
            </p>
            <a href="/products/pixel" className="text-primary font-semibold hover:underline">
              Explore Pixel Education Kit →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: Real Problems by Industry */}
      <section className="mx-auto max-w-7xl px-6 py-24 bg-surface/50">
        <h2 className="text-center text-3xl font-bold md:text-4xl mb-12">
          {/* TODO: Customize headline */}
          The Bottleneck Exists Everywhere
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Industry 1: Automotive */}
          <div className="border border-border rounded-lg bg-background p-8">
            <h3 className="text-xl font-bold mb-3">Automotive Manufacturing</h3>
            <p className="text-muted mb-2 font-semibold">Problem:</p>
            <p className="text-muted mb-4">
              {/* TODO: Add automotive specific problem and impact */}
              Line starvation when material doesn't arrive on time → ₹2-5L per hour downtime
            </p>
            <a href="/industries/automotive" className="text-primary font-semibold hover:underline">
              Learn More →
            </a>
          </div>

          {/* Industry 2: Warehouse */}
          <div className="border border-border rounded-lg bg-background p-8">
            <h3 className="text-xl font-bold mb-3">Warehouse & Logistics</h3>
            <p className="text-muted mb-2 font-semibold">Problem:</p>
            <p className="text-muted mb-4">
              {/* TODO: Add warehouse specific problem and impact */}
              Peak season demand (2-3x) requires temporary hires with high attrition
            </p>
            <a href="/industries/warehousing-logistics" className="text-primary font-semibold hover:underline">
              Learn More →
            </a>
          </div>

          {/* Industry 3: Pharma */}
          <div className="border border-border rounded-lg bg-background p-8">
            <h3 className="text-xl font-bold mb-3">Pharma & Life Sciences</h3>
            <p className="text-muted mb-2 font-semibold">Problem:</p>
            <p className="text-muted mb-4">
              {/* TODO: Add pharma specific problem and impact */}
              Manual material movement = cleanroom contamination risk + audit exposure
            </p>
            <a href="/industries/pharma" className="text-primary font-semibold hover:underline">
              Learn More →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4: Why Momentum */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold md:text-4xl mb-12">
          Built Different
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          {/* Advantage 1: Open Standards */}
          <div className="border border-border rounded-lg bg-surface p-8">
            <h3 className="text-lg font-bold mb-3">Open Standards</h3>
            <p className="text-muted text-sm mb-3">
              ROS 2 native, VDA 5050 compliant. Your engineers can extend the code.
            </p>
            <p className="text-xs text-muted-foreground">
              {/* TODO: Add competitive comparison */}
              vs. Proprietary stacks that lock you in
            </p>
          </div>

          {/* Advantage 2: Cost-Effective */}
          <div className="border border-border rounded-lg bg-surface p-8">
            <h3 className="text-lg font-bold mb-3">Cost-Effective</h3>
            <p className="text-muted text-sm mb-3">
              ₹15-30L per unit. 2-3 year payback. Low TCO.
            </p>
            <p className="text-xs text-muted-foreground">
              {/* TODO: Add competitive comparison */}
              vs. ₹40-100L imported robots with annual contracts
            </p>
          </div>

          {/* Advantage 3: Education Bridge */}
          <div className="border border-border rounded-lg bg-surface p-8">
            <h3 className="text-lg font-bold mb-3">Education Bridge</h3>
            <p className="text-muted text-sm mb-3">
              Pixel is industry-grade at education pricing. Same stack as Cyborg.
            </p>
            <p className="text-xs text-muted-foreground">
              {/* TODO: Add competitive comparison */}
              vs. Toy platforms that don't translate to real factories
            </p>
          </div>

          {/* Advantage 4: Global + Local */}
          <div className="border border-border rounded-lg bg-surface p-8">
            <h3 className="text-lg font-bold mb-3">Global + Local</h3>
            <p className="text-muted text-sm mb-3">
              Rooted in Pune, European partnerships, works worldwide.
            </p>
            <p className="text-xs text-muted-foreground">
              {/* TODO: Add competitive comparison */}
              Global companies ignore local needs; local startups don't scale
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: Technology Overview */}
      <section className="mx-auto max-w-7xl px-6 py-24 bg-surface/50">
        <h2 className="text-center text-3xl font-bold md:text-4xl mb-6">
          Built on Industry Standards
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted mb-6">
            {/* TODO: Add technology summary */}
            Every Momentum robot runs on ROS 2 (industry-standard robotics software) with VDA 5050 fleet management.
            Multi-sensor fusion handles real factory conditions — dust, reflective surfaces, mixed human-robot zones.
          </p>
          <a href="/technology" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            Dive into our technology →
          </a>
        </div>
      </section>

      {/* SECTION 6: Product Platforms */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold md:text-4xl mb-12">
          {/* TODO: Customize headline */}
          From Education to Industrial Deployment
        </h2>
        <ProductShowcase />
      </section>

      {/* SECTION 7: Final CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-lg border border-border bg-surface p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Solve Your Material Handling Challenge?
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            {/* TODO: Add CTA supporting text */}
            Whether you're a plant looking to scale, an engineer avoiding lock-in, or a lab teaching real robotics —
            let's talk about your challenge.
          </p>
          <a
            href="/contact"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
