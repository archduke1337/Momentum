import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology — ROS 2 Navigation & Fleet Management',
  description: 'Learn about Momentum robotics technology stack: ROS 2 native, VDA 5050 compliance, multi-sensor autonomous navigation, fleet management software.',
};

const stack = [
  {
    title: 'Autonomous Navigation Stack',
    body: 'LiDAR SLAM for map building, adaptive Monte Carlo localization for real-time positioning, and Nav2 for global and local path planning. No magnetic tape, no infrastructure changes — works in real factory conditions with dust, reflective surfaces, and dynamic obstacles.',
  },
  {
    title: 'Multi-Sensor Fusion & Perception',
    body: '2D LiDAR (25–30 m range) + Intel RealSense 3D camera + 9-axis IMU + wheel encoders. This redundancy handles the realities of factory floors: reflective surfaces, dust, variable lighting, and mixed human-robot zones.',
  },
  {
    title: 'Fleet Management Architecture',
    body: 'A centralized browser-based dashboard handling mission assignment, traffic arbitration, deadlock prevention, and charging optimization. VDA 5050 compliant for multi-vendor interoperability, with REST API and MQTT for WMS/MES integration.',
  },
  {
    title: 'Software Architecture',
    body: 'ROS 2 Humble on Ubuntu 22.04 with standard DDS communication. Documented topics, services, and actions built on open-source packages (Nav2, SLAM Toolbox). No proprietary black boxes — your engineers can extend and customize.',
  },
  {
    title: 'Integration & Extensibility',
    body: 'REST API for mission management, MQTT for real-time telemetry, and PLC connectivity via OPC-UA or Modbus TCP. WMS integration patterns enable pull-based missions, plus custom perception and planning modules.',
  },
  {
    title: 'Safety & Compliance',
    body: 'ISO 3691-4 (AGV/AMR safety) compliance with safety-rated LiDAR fields, bumper sensors, and E-stop functionality. Zone-based traffic management and mission logging for regulated, audited environments.',
  },
];

export default function TechnologyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-b border-border py-3">
            <span className="label-mono">Technology</span>
            <span className="label-mono hidden sm:block">ROS 2 — VDA 5050</span>
          </div>
          <div className="grid gap-y-8 py-16 lg:grid-cols-12 lg:gap-x-10 lg:py-24">
            <h1 className="display max-w-3xl text-5xl sm:text-6xl lg:col-span-8 lg:text-7xl">
              Built on open standards. Engineered for the real world.
            </h1>
            <p className="self-end text-lg leading-relaxed text-muted lg:col-span-4">
              ROS 2 native, VDA 5050 compliant, and tuned for dust, glare, and mixed
              human-robot zones — with no vendor lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* Stack — numbered editorial grid */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid border-t border-l border-border md:grid-cols-2 lg:grid-cols-3">
          {stack.map((item, i) => (
            <div key={item.title} className="flex flex-col border-b border-r border-border p-8 md:p-10">
              <span className="index-numeral text-sm">0{i + 1}</span>
              <h2 className="mt-5 text-xl tracking-tight">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="label-mono">Talk to us</p>
          <h2 className="display mt-5 max-w-3xl text-4xl sm:text-5xl">
            Ready to explore the technical details?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Let&apos;s discuss how our stack solves your specific navigation, fleet, and
            integration challenges.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary gap-2">
              Talk to our engineers
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
