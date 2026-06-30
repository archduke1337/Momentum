import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { careers } from '@workspace/content';
import type { Career } from '@workspace/types';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Momentum Robotics and help build the future of autonomous mobile robots.',
};

function CareersSkeleton() {
  return (
    <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-surface p-6" aria-busy="true">
          <div className="mb-4 h-3 w-24 animate-pulse rounded-md bg-muted-foreground/20" />
          <div className="mb-3 h-5 w-2/3 animate-pulse rounded-md bg-muted-foreground/20" />
          <div className="space-y-2">
            <div className="h-3 w-full animate-pulse rounded-md bg-muted-foreground/20" />
            <div className="h-3 w-3/4 animate-pulse rounded-md bg-muted-foreground/20" />
          </div>
          <div className="mt-5 h-8 w-20 animate-pulse rounded-full bg-muted-foreground/10" />
        </div>
      ))}
    </div>
  );
}

export default function CareersPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <div className="max-w-3xl">
        <p className="mb-5 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
          Join Us
        </p>
        <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl">
          Careers
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
          We are building an Indian robotics brand around education, navigation, and industrial material movement.
        </p>
      </div>

      {careers.length === 0 ? (
        <CareersSkeleton />
      ) : (
        <div className="mt-14 grid gap-px border border-border bg-border">
          {careers.map((career: Career) => (
            <div
              key={career.id}
              className="grid gap-5 bg-surface p-7 md:grid-cols-[1fr_auto] md:p-8"
            >
              <div>
                <p className="text-sm font-medium text-primary">{career.department}</p>
                <h2 className="mt-2 font-heading text-2xl font-bold">{career.title}</h2>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted">
                  <span>{career.location}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="capitalize">{career.type}</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{career.description}</p>
                {career.requirements.length > 0 && (
                  <div className="mt-5">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-2">Requirements</h3>
                    <ul className="space-y-1.5">
                      {career.requirements.map((req: string) => (
                        <li key={req} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="shrink-0">
                <Link
                  href="mailto:hello@momentumrobotics.in"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-semibold text-foreground transition hover:border-primary/45"
                >
                  Apply
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
        <div className="bg-surface p-8">
          <h2 className="font-heading text-2xl font-bold">Don&apos;t see your role?</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            We are always interested in hearing from engineers, designers, and operators who want to work on robotics.
          </p>
        </div>
        <div className="bg-surface p-8 flex items-center">
          <Link
            href="mailto:hello@momentumrobotics.in"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            <Mail className="size-4" aria-hidden="true" />
            Send your resume
          </Link>
        </div>
      </div>
    </section>
  );
}
