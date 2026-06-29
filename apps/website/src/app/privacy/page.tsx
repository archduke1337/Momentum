import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Momentum Robotics website inquiries and communications.',
};

const sections = [
  {
    title: 'Information we collect',
    body: 'When you contact Momentum Robotics, we may collect your name, work email, phone number, company name, role, and details about your robotics or automation requirement.',
  },
  {
    title: 'How we use information',
    body: 'We use inquiry information to respond to you, plan demos, evaluate pilot requirements, improve our website, and maintain business communication records.',
  },
  {
    title: 'Sharing',
    body: 'We do not sell personal information. We may share limited information with service providers who help us operate the website, manage email, or support business operations.',
  },
  {
    title: 'Retention',
    body: 'We keep inquiry information for as long as needed to manage the business relationship, comply with obligations, resolve disputes, and improve our services.',
  },
  {
    title: 'Your choices',
    body: 'You can ask us to update, correct, or delete your contact information by emailing hello@momentumrobotics.in.',
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <p className="mb-5 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
        Momentum Robotics
      </p>
      <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl">Privacy Policy</h1>
      <p className="mt-5 text-sm leading-6 text-muted">Last updated: June 29, 2026</p>
      <p className="mt-8 max-w-2xl text-base leading-7 text-muted">
        This policy explains how Momentum Robotics Pvt. Ltd. handles information submitted through this website and related business communications.
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
