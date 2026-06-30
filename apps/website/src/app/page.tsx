import Link from 'next/link';
import {
  ArrowRight,
  Factory,
  Cpu,
  GraduationCap,
  Boxes,
  FlaskConical,
  Car,
  Code2,
  Wallet,
  Layers,
  Globe2,
  Radar,
  Network,
  ShieldCheck,
  Gauge,
} from 'lucide-react';
import { Hero } from '@/components/sections/hero';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { CountUp } from '@/components/ui/count-up';

const stats = [
  { value: 1000, suffix: ' kg', label: 'Max payload per AMR' },
  { value: 16, suffix: ' hrs', label: 'Continuous runtime' },
  { value: 99.9, suffix: '%', decimals: 1, label: 'Navigation uptime' },
  { value: 24, suffix: '/7', label: 'Autonomous operation' },
];

const paths = [
  {
    icon: Factory,
    role: 'Plant Manager',
    question: 'How do I scale material movement without hiring more people?',
    cta: 'Explore Industrial Solutions',
    href: '/solutions/warehouse-automation',
  },
  {
    icon: Cpu,
    role: 'Engineering Director',
    question: 'How do I avoid proprietary vendor lock-in in robotics?',
    cta: 'Explore Our Technology',
    href: '/technology',
  },
  {
    icon: GraduationCap,
    role: 'University / Lab',
    question: 'How do I teach real autonomy on industry-grade hardware?',
    cta: 'Explore Pixel Education Kit',
    href: '/products/pixel',
  },
];

const industries = [
  {
    icon: Car,
    name: 'Automotive Manufacturing',
    problem: 'Line starvation when material does not arrive on time.',
    impact: '₹2–5L per hour of downtime',
    href: '/industries/automotive',
  },
  {
    icon: Boxes,
    name: 'Warehouse & Logistics',
    problem: 'Peak season demand (2–3×) forces temporary hires with high attrition.',
    impact: 'Spiralling labour cost & error rates',
    href: '/industries/warehouses-logistics',
  },
  {
    icon: FlaskConical,
    name: 'Pharma & Life Sciences',
    problem: 'Manual movement risks cleanroom contamination and audit exposure.',
    impact: 'Compliance & traceability gaps',
    href: '/industries/pharma',
  },
];

const advantages = [
  {
    icon: Code2,
    title: 'Open Standards',
    body: 'ROS 2 native and VDA 5050 compliant. Your engineers can extend the stack.',
    contrast: 'vs. proprietary stacks that lock you in',
  },
  {
    icon: Wallet,
    title: 'Cost-Effective',
    body: '₹15–30L per unit with a 2–3 year payback and low total cost of ownership.',
    contrast: 'vs. ₹40–100L imports with annual contracts',
  },
  {
    icon: Layers,
    title: 'Education Bridge',
    body: 'Pixel is industry-grade at education pricing — the same stack as Cyborg.',
    contrast: 'vs. toy platforms that never reach the factory',
  },
  {
    icon: Globe2,
    title: 'Global + Local',
    body: 'Rooted in Pune with European partnerships, deployable worldwide.',
    contrast: 'vs. vendors that ignore local realities',
  },
];

const techFeatures = [
  {
    icon: Radar,
    title: 'Multi-Sensor Fusion',
    body: 'LiDAR, depth cameras, and IMU fused for reliable navigation through dust, glare, and reflective surfaces.',
  },
  {
    icon: Network,
    title: 'VDA 5050 Fleet Management',
    body: 'Coordinate mixed fleets from a single interface using the open interoperability standard.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety by Design',
    body: 'Certified safety scanners, emergency stops, and human-robot collaboration zones built in.',
  },
  {
    icon: Gauge,
    title: 'ROS 2 Native',
    body: 'The industry-standard robotics framework — no black boxes, fully extensible by your team.',
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className={`eyebrow ${center ? 'eyebrow--center' : ''}`}>{eyebrow}</span>
      <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* STATS BAR */}
      <section className="border-y border-border/60 bg-surface/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 py-10 text-center sm:py-12">
              <div className="font-heading text-4xl font-bold text-foreground md:text-5xl">
                <CountUp
                  to={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHOOSE YOUR PATH */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Where do you fit"
          title="Choose your path"
          description="Momentum meets you where you are — from the factory floor to the research lab."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <Link key={path.role} href={path.href} className="group surface-card flex flex-col p-8">
                <span className="icon-tile">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-heading text-xl font-bold">I&apos;m a {path.role}</h3>
                <p className="mt-3 flex-1 leading-7 text-muted">{path.question}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {path.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* THE BOTTLENECK BY INDUSTRY */}
      <section className="border-y border-border/60 bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="The problem"
            title="The bottleneck exists everywhere"
            description="Material movement between stations, racks, and zones is the last unautomated step on most factory floors."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.name}
                  href={industry.href}
                  className="group surface-card flex flex-col p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="icon-tile">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-heading text-lg font-bold">{industry.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">{industry.problem}</p>
                  <p className="mt-4 rounded-lg bg-destructive/10 px-3 py-2 text-sm font-semibold text-destructive">
                    {industry.impact}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUILT DIFFERENT */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Why Momentum"
          title="Built different"
          description="Open by default, priced for reality, and engineered to grow with you."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div key={adv.title} className="surface-card flex flex-col p-7">
                <span className="icon-tile">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-heading text-lg font-bold">{adv.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{adv.body}</p>
                <p className="mt-4 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                  {adv.contrast}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="relative overflow-hidden border-y border-border/60 bg-surface/40">
        <div className="grid-backdrop pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="The technology"
            title="Built on industry standards"
            description="Every Momentum robot runs on ROS 2 with VDA 5050 fleet management and multi-sensor fusion tuned for real factory conditions."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="surface-card flex flex-col p-7">
                  <span className="icon-tile">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-heading text-base font-bold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{feature.body}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Dive into our technology
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT PLATFORMS */}
      <section className="mx-auto max-w-7xl px-6 pb-4 pt-24">
        <SectionHeading
          eyebrow="The platforms"
          title="From education to industrial deployment"
          description="One open software stack across three hardware platforms — so what you learn on Pixel scales straight to the factory floor."
        />
      </section>
      <ProductShowcase />

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="industrial-shell relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16 md:py-20">
          <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight md:text-5xl">
              Ready to solve your material handling challenge?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">
              Whether you are scaling a plant, avoiding lock-in, or teaching real robotics —
              let&apos;s talk about your floor, your routes, and your payloads.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary gap-2">
                Get in Touch
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="/products" className="btn-secondary">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
