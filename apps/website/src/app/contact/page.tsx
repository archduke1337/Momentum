import type { Metadata } from 'next';
import ContactForm from './contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Momentum Robotics for product inquiries, demos, and partnerships.',
};

export default function ContactPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-2xl">
        <p className="text-sm text-muted font-medium tracking-wide mb-4">Get in Touch</p>
        <h1 className="font-heading text-5xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-4 text-muted max-w-xl leading-relaxed">
          Ready to automate your operations? Reach out to our team.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-2 gap-16">
        <ContactForm />

        <div className="space-y-8">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-4">Email</h3>
            <a href="mailto:hello@momentumrobotics.in" className="text-foreground hover:text-primary transition-colors">
              hello@momentumrobotics.in
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-4">Location</h3>
            <p className="text-muted-foreground leading-relaxed">
              Bengaluru, Karnataka, India
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-4">Office Hours</h3>
            <p className="text-muted-foreground leading-relaxed">
              Monday - Friday: 9:00 AM - 6:00 PM IST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
