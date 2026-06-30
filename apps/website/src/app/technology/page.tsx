import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Compass,
  Radar,
  Network,
  Boxes,
  Plug,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology — ROS 2 Navigation & Fleet Management',
  description: 'Learn about Momentum robotics technology stack: ROS 2 native, VDA 5050 compliance, multi-sensor autonomous navigation, fleet management software.',
};

const stack = [
  {
    icon: Compass,
    title: 'Autonomous Navigation Stack',
    body: 'LiDAR SLAM for map building, adaptive Monte Carlo localization for real-time positioning, and Nav2 for global and local path planning. No magnetic tape, no infrastructure changes — works in real factory conditions with dust, reflective surfaces, and dynamic obstacles.',
  },
  {
    icon: Radar,
    title: 'Multi-Sensor Fusion & Perception',
    body: '2D LiDAR (25–30 m range) + Intel RealSense 3D camera + 9-axis IMU + wheel encoders. This redundancy handles the realities of factory floors: reflective surfaces, dust, variable lighting, and mixed human-robot zones.',
  },
  {
    icon: Network,
    title: 'Fleet Management Architecture',
    body: 'A centralized browser-based dashboard handling mission assignment, traffic arbitration, deadlock prevention, and charging optimization. VDA 5050 compliant for multi-vendor interoperability, with REST API and MQTT for WMS/MES integration.',
  },
  {
    icon: Boxes,
    title: 'Software Architecture',
    body: 'ROS 2 Humble on Ubuntu 22.04 with standard DDS communication. Documented topics, services, and actions built on open-source packages (Nav2, SLAM Toolbox). No proprietary black boxes — your engineers can extend and customize.',
  },
  {
    icon: Plug,
    title: 'Integration & Extensibility',
    body: 'REST API for mission management, MQTT for real-time telemetry, and PLC connectivity via OPC-UA or Modbus TCP. WMS integration patterns enable pull-based missions, plus custom perception and planning modules.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Compliance',
    body: 'ISO 3691-4 (AGV/AMR safety) compliance with safety-rated LiDAR fields, bumper sensors, and E-stop functionality. Zone-based traffic management and audit logging for regulated environments such as pharma and food.',
  },
];

export default function TechnologyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="grid-backdrop pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-32">
          <span className="eyebrow">The technology</span>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.1] md:text-6xl">
            Built on <span className="text-gradient">open standards</span>.
            <br />
            Engineered for the real world.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            ROS 2 native, VDA 5050 compliant, and tuned for dust, glare, and mixed
            human-robot zones — with no vendor lock-in.
          </p>
        </div>
      </section>

      {/* Stack grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="surface-card flex flex-col p-8">
                <span className="icon-tile">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-heading text-xl font-bold">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="industrial-shell relative overflow-hidden rounded-3xl px-8 py-14 text-center md:px-16">
          <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Ready to explore the technical details?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
              Let&apos;s discuss how our stack solves your specific navigation, fleet,
              and integration challenges.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/contact" className="btn-primary gap-2">
                Talk to Our Engineers
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
