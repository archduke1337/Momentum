'use client';

import AnimatedInput from '@/components/ui/smoothui/animated-input';
import MagneticButton from '@/components/ui/smoothui/magnetic-button';

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <AnimatedInput
        label="Name"
        placeholder="Your name"
        className="w-full"
        inputClassName="rounded-xl border-border bg-surface px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50"
        labelClassName="bg-surface text-muted"
      />
      <AnimatedInput
        label="Email"
        placeholder="you@company.com"
        className="w-full"
        inputClassName="rounded-xl border-border bg-surface px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50"
        labelClassName="bg-surface text-muted"
      />
      <AnimatedInput
        label="Company"
        placeholder="Your company"
        className="w-full"
        inputClassName="rounded-xl border-border bg-surface px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50"
        labelClassName="bg-surface text-muted"
      />
      <div className="relative">
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Message</label>
        <textarea
          id="message"
          rows={5}
          className="w-full rounded-xl border border-border bg-surface px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>
      <MagneticButton
        className="rounded-full px-8 py-4 text-sm font-semibold"
        strength={0.3}
      >
        Send Message
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </MagneticButton>
    </form>
  );
}
