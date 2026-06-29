import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Mail, MapPin } from 'lucide-react';
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
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
              Contact Momentum
            </p>
            <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl">
              Start with one movement problem
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted md:text-lg">
            Tell us what needs to move, where it moves today, and what makes the route difficult. We will help decide if a pilot makes sense.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />

          <aside className="grid content-start gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <div className="rounded-2xl border border-border bg-surface p-6 transition hover:border-primary/35">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-sm font-semibold text-foreground">{card.title}</h2>
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

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="industrial-shell overflow-hidden rounded-2xl">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl">
                The right conversation comes before the right robot
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted md:text-base">
                Use this page for demos, pilot planning, product questions, partnerships, and early deployment discussions.
              </p>
              <Link
                href="mailto:hello@momentumrobotics.in"
                className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
              >
                Email the team
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="media-chrome aspect-video bg-background">
              <video
                aria-hidden="true"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                width={1280}
                height={720}
                className="h-full w-full object-cover"
              >
                <source src="/Assets/connect.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
