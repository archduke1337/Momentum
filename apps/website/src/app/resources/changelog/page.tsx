import type { Metadata } from 'next';
import { changelog } from '@workspace/content';
import { formatDate } from '@workspace/utils';
import type { ChangelogEntry } from '@workspace/types';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Product updates and improvements from Momentum Robotics.',
};

export default function ChangelogPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-2xl">
        <h1 className="font-heading text-5xl font-bold tracking-tight">Changelog</h1>
        <p className="mt-4 text-muted max-w-xl leading-relaxed">
          Track product updates, new features, and improvements.
        </p>
      </div>
      <div className="mt-14 space-y-12 max-w-3xl">
        {changelog.map((entry: ChangelogEntry) => (
          <div key={entry.version} className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary">
            <div className="flex items-baseline gap-3">
              <h2 className="text-xl font-semibold">v{entry.version}</h2>
              <p className="text-sm text-muted">{formatDate(entry.date)}</p>
            </div>
            <ul className="mt-4 space-y-2">
              {entry.changes.map((change, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span
                    className={`mt-0.5 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      change.type === 'added'
                        ? 'bg-primary/20 text-primary'
                        : change.type === 'improved'
                          ? 'bg-accent-blue/20 text-accent-blue'
                          : 'bg-yellow-500/20 text-yellow-400'
                    }`}
                  >
                    {change.type}
                  </span>
                  {change.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
