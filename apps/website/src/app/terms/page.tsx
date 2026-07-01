import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Website terms for Momentum Robotics Pvt. Ltd.',
};

const sections = [
  {
    title: 'Website use',
    body: 'This website is provided for general information about Momentum Robotics, our products, and our services. You agree not to misuse the website, attempt to disrupt its operation, or access it by any means other than the interface we provide.',
  },
  {
    title: 'Product & content accuracy',
    body: 'Product descriptions, specifications, images, and availability reflect the state of our engineering work and may change as it progresses. Final requirements, pricing, timelines, and deployment scope for any project are confirmed through a written business agreement, not this website.',
  },
  {
    title: 'Intellectual property',
    body: 'Website content, product names, images, branding, and design are owned by Momentum Robotics Pvt. Ltd. or used with permission. You may not copy, reproduce, or reuse them without our prior written consent.',
  },
  {
    title: 'No warranty',
    body: 'This website is provided on an "as is" basis for informational purposes. We work to keep it accurate and current, but we do not guarantee that all content is complete, error-free, or up to date at every moment.',
  },
  {
    title: 'Limitation of liability',
    body: 'To the extent permitted by law, Momentum Robotics is not liable for any indirect, incidental, or consequential loss arising from your use of this website. This does not limit any liability we hold under a signed commercial agreement.',
  },
  {
    title: 'Governing law',
    body: 'These terms are governed by the laws of India, and any dispute arising from them falls under the jurisdiction of the courts of Pune, Maharashtra.',
  },
  {
    title: 'Changes to these terms',
    body: 'We may update these terms as the website and business evolve. The date below reflects the most recent revision — continued use of the site after a change means you accept the updated terms.',
  },
  {
    title: 'Contact',
    body: 'Questions about these terms can be sent to hello@momentumrobotics.in.',
  },
];

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:pb-32">
      {/* meta rule */}
      <div className="flex items-center justify-between border-b border-border py-3">
        <span className="label-mono">Legal</span>
        <span className="label-mono hidden sm:block">Last updated: June 29, 2026</span>
      </div>

      {/* header */}
      <div className="grid gap-y-6 pt-12 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-7">
          <h1 className="display text-5xl sm:text-6xl lg:text-7xl">Terms of Service</h1>
        </div>
        <p className="self-end text-base leading-relaxed text-muted lg:col-span-4 lg:col-start-9">
          These terms apply to use of the Momentum Robotics website. Separate written
          agreements govern product purchases, pilots, deployments, and support.
        </p>
      </div>

      {/* sections */}
      <dl className="mt-16 border-t border-border">
        {sections.map((section, i) => (
          <div
            key={section.title}
            className="grid gap-y-2 border-b border-border py-7 md:grid-cols-12 md:gap-x-8"
          >
            <dt className="flex items-baseline gap-3 md:col-span-3">
              <span className="index-numeral text-sm text-muted-foreground">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="label-mono">{section.title}</span>
            </dt>
            <dd className="text-base leading-relaxed text-muted md:col-span-9">
              {section.body}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
