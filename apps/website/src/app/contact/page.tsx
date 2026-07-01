import type { Metadata } from 'next';
import ContactForm from './contact-form';
import { SocialLinks } from '@/components/layout/social-links';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Momentum Robotics for AMR product demos, pilot planning, and industrial automation partnerships in India.',
};

const details = [
  { label: 'Email', value: 'hello@momentumrobotics.in', href: 'mailto:hello@momentumrobotics.in' },
  { label: 'Phone / WhatsApp', value: '+91 92360 03396', href: 'tel:+919236003396' },
  { label: 'Location', value: 'Pune, Maharashtra, India' },
  { label: 'Office hours', value: 'Monday to Friday, 9:00–18:00 IST' },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:pb-32">
      {/* meta rule */}
      <div className="flex items-center justify-between border-b border-border py-3">
        <span className="label-mono">Contact</span>
        <span className="label-mono hidden sm:block">Pune, India</span>
      </div>

      {/* header */}
      <div className="grid gap-y-6 pt-12 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-7">
          <h1 className="display text-5xl sm:text-6xl lg:text-7xl">
            Tell us what
            <br />
            you move.
          </h1>
        </div>
        <p className="self-end text-base leading-relaxed text-muted lg:col-span-4 lg:col-start-9">
          Share your payloads, routes, and floor conditions. We&apos;ll come back with the right
          platform and a deployment plan for your operation.
        </p>
      </div>

      {/* body */}
      <div className="mt-16 grid gap-x-10 gap-y-12 border-t border-border pt-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <span className="label-mono">Direct</span>
          <dl className="mt-6 border-t border-border">
            {details.map((d) => (
              <div key={d.label} className="border-b border-border py-5">
                <dt className="label-mono">{d.label}</dt>
                <dd className="mt-2 text-lg leading-relaxed text-foreground">
                  {d.href ? (
                    <a href={d.href} className="transition-colors hover:text-primary">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <span className="label-mono">Or reach us directly</span>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
