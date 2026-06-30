import type { Metadata } from 'next';
import { Clock, Mail, MapPin } from 'lucide-react';
import ContactForm from './contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Momentum Robotics for AMR product demos, pilot planning, and industrial automation partnerships in India.',
};

const contactCards = [
  {
    title: 'Email',
    value: 'hello@momentumrobotics.in',
    href: 'mailto:hello@momentumrobotics.in',
    icon: Mail,
  },
  {
    title: 'Location',
    value: 'Pune, Maharashtra, India',
    icon: MapPin,
  },
  {
    title: 'Office hours',
    value: 'Monday to Friday, 9:00 AM to 6:00 PM IST',
    icon: Clock,
  },
];

export default function ContactPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32">
        <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl">
          Contact
        </h1>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6">
            <ContactForm />
          </div>

          <aside className="grid content-start gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-sm font-semibold text-foreground">{card.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.value}</p>
                </div>
              );

              return card.href ? (
                <a key={card.title} href={card.href}>
                  {content}
                </a>
              ) : (
                <div key={card.title}>{content}</div>
              );
            })}
          </aside>
        </div>
      </section>
    </div>
  );
}
