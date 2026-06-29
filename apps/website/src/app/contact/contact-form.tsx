'use client';

import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ContactForm() {
  return (
    <form
      action="mailto:hello@momentumrobotics.in"
      method="post"
      encType="text/plain"
      className="rounded-2xl border border-border bg-surface p-5 md:p-7"
    >
      <div className="grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            className="min-h-12 rounded-xl bg-background/55 px-4"
            placeholder="Your name"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            className="min-h-12 rounded-xl bg-background/55 px-4"
            placeholder="you@company.com"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            className="min-h-12 rounded-xl bg-background/55 px-4"
            placeholder="Company name"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="min-h-12 rounded-xl bg-background/55 px-4"
            placeholder="+91"
          />
        </div>

        <div className="grid gap-2">
          <Label>Primary need</Label>
          <Select name="requirement">
            <SelectTrigger className="min-h-12 w-full rounded-xl bg-background/55 px-4">
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="warehouse-automation">Warehouse automation</SelectItem>
              <SelectItem value="factory-logistics">Factory logistics</SelectItem>
              <SelectItem value="product-demo">Product demo</SelectItem>
              <SelectItem value="partnership">Partnership</SelectItem>
              <SelectItem value="careers">Careers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">Movement problem</Label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            required
            className="min-h-36 resize-none rounded-xl bg-background/55 px-4 py-3"
            placeholder="Tell us the payload, route, floor condition, and what slows the current process."
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98] sm:w-auto"
      >
        Send inquiry
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </form>
  );
}
