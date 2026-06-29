import type { Metadata } from 'next';
import { careers } from '@workspace/content';
import type { Career } from '@workspace/types';
import SmoothButton from '@/components/smoothui/smooth-button';
import { CareersEmpty } from './empty';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Momentum Robotics and help build the future of autonomous mobile robots.',
};

export default function CareersPage() {
  if (careers.length === 0) {
    return <CareersEmpty />;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-2xl">
        <span className="inline-block rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted font-medium mb-5">
          Join Us
        </span>
        <h1 className="font-heading text-5xl font-bold tracking-tight">Careers</h1>
        <p className="mt-4 text-muted max-w-xl leading-relaxed text-lg">
          We are always looking for talented people to join our mission.
        </p>
      </div>
      <div className="mt-16 grid gap-6">
        {careers.map((career: Career) => (
          <div
            key={career.id}
            className="group rounded-2xl border border-border bg-surface p-8 transition-all duration-500 hover:border-primary/20 hover:bg-surface-elevated"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {career.title}
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted">
                  <span>{career.department}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{career.location}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="capitalize">{career.type}</span>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{career.description}</p>
                {career.requirements.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-3">Requirements</h3>
                    <ul className="space-y-2">
                      {career.requirements.map((req: string) => (
                        <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="shrink-0">
                <SmoothButton variant="outline" size="sm" className="rounded-full px-6 py-3 text-sm font-medium">
                  Apply
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SmoothButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
