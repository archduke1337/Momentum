import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Website terms for Momentum Robotics.',
};

const sections = [
  {
    title: 'Website use',
    body: 'This website is provided for general information about Momentum Robotics, our products, and our services. You agree not to misuse the website or attempt to disrupt its operation.',
  },
  {
    title: 'Product information',
    body: 'Product descriptions, specifications, images, and availability may change as engineering work progresses. Final requirements, pricing, timelines, and deployment scope are confirmed through written business agreements.',
  },
  {
    title: 'Intellectual property',
    body: 'Website content, product names, images, branding, and design are owned by Momentum Robotics or used with permission. You may not copy or reuse them without written consent.',
  },
  {
    title: 'No warranty',
    body: 'The website is provided on an informational basis. We work to keep information accurate, but we do not guarantee that all content is complete, current, or error-free.',
  },
  {
    title: 'Contact',
    body: 'Questions about these terms can be sent to hello@momentumrobotics.in.',
  },
];

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <p className="mb-5 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
        Momentum Robotics
      </p>
      <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl">Terms of Service</h1>
      <p className="mt-5 text-sm leading-6 text-muted">Last updated: June 29, 2026</p>
      <p className="mt-8 max-w-2xl text-base leading-7 text-muted">
        These terms apply to use of the Momentum Robotics website. Separate commercial agreements govern product purchases, pilots, deployments, and support.
      </p>

      <div className="mt-12 grid gap-5">
        {sections.map((section) => (
          <section key={section.title} className="border border-border bg-surface p-6">
            <h2 className="font-heading text-2xl font-bold">{section.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{section.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
