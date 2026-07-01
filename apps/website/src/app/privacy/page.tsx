import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Momentum Robotics website inquiries and communications.',
};

const sections = [
  {
    title: 'Information we collect',
    body: 'When you contact us through this website, we collect what you submit directly — name, work email, phone number, company name, and details about your material-handling or robotics requirement.',
  },
  {
    title: 'How we use it',
    body: 'Inquiry information is used to respond to you, plan demos, evaluate pilot requirements, and keep a record of business communication. We do not use it for advertising or resell it.',
  },
  {
    title: 'Cookies & tracking',
    body: 'This website does not run analytics or advertising trackers. Your light/dark theme preference is stored locally in your browser (not a cookie sent to our servers) and never leaves your device.',
  },
  {
    title: 'Sharing',
    body: 'We do not sell personal information. We may share limited information with service providers who help us operate the website, manage email, or support business operations — never for their own marketing use.',
  },
  {
    title: 'Retention',
    body: 'We keep inquiry information for as long as needed to manage the business relationship, meet legal obligations, and resolve disputes, then delete or anonymise it.',
  },
  {
    title: 'Your choices',
    body: 'You can ask us to access, correct, or delete the contact information we hold on you at any time by emailing hello@momentumrobotics.in.',
  },
  {
    title: 'Governing law',
    body: 'This policy is governed by the laws of India. Momentum Robotics Pvt. Ltd. is headquartered in Pune, Maharashtra.',
  },
  {
    title: 'Changes to this policy',
    body: 'We may update this policy as our practices evolve. The date below reflects the most recent revision.',
  },
];

export default function PrivacyPage() {
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
          <h1 className="display text-5xl sm:text-6xl lg:text-7xl">Privacy Policy</h1>
        </div>
        <p className="self-end text-base leading-relaxed text-muted lg:col-span-4 lg:col-start-9">
          How Momentum Robotics Pvt. Ltd. handles information submitted through this
          website and related business communications.
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
