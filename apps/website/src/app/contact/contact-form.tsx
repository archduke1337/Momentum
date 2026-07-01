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

const field = 'min-h-12 rounded-none border-border bg-background px-4';

export default function ContactForm() {
  return (
    <form
      action="mailto:hello@momentumrobotics.in"
      method="post"
      encType="text/plain"
      className="border border-border bg-surface p-6 md:p-8"
    >
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name" className="label-mono">Name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            className={field}
            placeholder="Your name"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="email" className="label-mono">Work email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              className={field}
              placeholder="you@company.com"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone" className="label-mono">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              className={field}
              placeholder="+91"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="company" className="label-mono">Company</Label>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            className={field}
            placeholder="Company name"
          />
        </div>

        <div className="grid gap-2">
          <Label className="label-mono">Primary need</Label>
          <Select name="requirement">
            <SelectTrigger className={`w-full ${field}`}>
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
          <Label htmlFor="message" className="label-mono">Movement problem</Label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            required
            className="min-h-36 resize-none rounded-none border-border bg-background px-4 py-3"
            placeholder="Tell us the payload, route, floor condition, and what slows the current process."
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-8 w-full gap-2 sm:w-auto">
        Send inquiry
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </form>
  );
}
