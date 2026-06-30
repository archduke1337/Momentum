import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology — ROS 2 Navigation & Fleet Management',
  description: 'Learn about Momentum robotics technology stack: ROS 2 native, VDA 5050 compliance, multi-sensor autonomous navigation, fleet management software.',
};

export default function TechnologyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-32 pb-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Technology</h1>
      <p className="text-xl text-muted mb-12">
        {/* TODO: Add technology intro */}
        Built on open standards. Engineered for real-world conditions. No vendor lock-in.
      </p>

      {/* Section 1: Navigation Stack */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Autonomous Navigation Stack</h2>
        <p className="text-muted mb-4 leading-7">
          {/* TODO: Add navigation stack details */}
          Every Momentum robot uses LiDAR SLAM for map building, adaptive Monte Carlo localization for real-time positioning,
          and Nav2 for global and local path planning. No magnetic tape. No infrastructure changes. Works in real Indian factory
          conditions — dust, reflective surfaces, dynamic obstacles.
        </p>
      </section>

      {/* Section 2: Sensor Fusion */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Multi-Sensor Fusion & Perception</h2>
        <p className="text-muted mb-4 leading-7">
          {/* TODO: Add sensor fusion details */}
          2D LiDAR (25-30m range) + Intel RealSense 3D camera + 9-axis IMU + wheel encoders. This redundancy handles
          the challenges of real factory floors — reflective surfaces, dust, variable lighting, mixed human-robot zones.
        </p>
      </section>

      {/* Section 3: Fleet Management */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Fleet Management Architecture</h2>
        <p className="text-muted mb-4 leading-7">
          {{/* TODO: Add fleet management details */}}
          Centralized browser-based dashboard. Mission assignment, traffic arbitration, deadlock prevention, charging optimization.
          VDA 5050 compliant for multi-vendor interoperability. REST API + MQTT for WMS/MES integration.
        </p>
      </section>

      {/* Section 4: Software Architecture */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Software Architecture</h2>
        <p className="text-muted mb-4 leading-7">
          {{/* TODO: Add software details */}}
          ROS 2 Humble on Ubuntu 22.04. Standard DDS communication. Documented topics, services, and actions. Open-source packages
          (Nav2, SLAM Toolbox). No proprietary black boxes. Your engineers can extend and customize.
        </p>
      </section>

      {/* Section 5: Integration */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Integration & Extensibility</h2>
        <p className="text-muted mb-4 leading-7">
          {{/* TODO: Add integration details */}}
          REST API for mission management. MQTT for real-time telemetry. PLC connectivity via OPC-UA or Modbus TCP.
          WMS integration patterns for pull-based missions. Custom perception and planning modules.
        </p>
      </section>

      {/* Section 6: Safety & Compliance */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Safety & Compliance</h2>
        <p className="text-muted mb-4 leading-7">
          {{/* TODO: Add safety details */}}
          ISO 3691-4 (AGV/AMR safety standard) compliance. Safety-rated LiDAR fields. Bumper sensors. E-stop functionality.
          Zone-based traffic management. Audit logging for regulatory compliance (pharma, food, etc.).
        </p>
      </section>

      {/* CTA */}
      <section className="mt-20 p-8 border border-border rounded-lg bg-surface">
        <h3 className="text-2xl font-bold mb-4">Ready to explore technical details?</h3>
        <p className="text-muted mb-6">
          {{/* TODO: Add CTA text */}}
          Let's discuss how our technology solves your specific challenge.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition"
        >
          Talk to Our Engineers
        </a>
      </section>
    </div>
  );
}
