import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { solutions, caseStudies } from '@workspace/content';
import type { Solution, CaseStudy } from '@workspace/types';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return solutions.map((solution: Solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s: Solution) => s.slug === slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.description.slice(0, 160),
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((s: Solution) => s.slug === slug);
  if (!solution) notFound();

  const relatedCaseStudies = caseStudies.filter(
    (cs: CaseStudy) =>
      cs.industry === solution.industry || solution.products.includes(cs.product)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <Link
        href="/solutions"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors mb-10"
      >
        &larr; All Solutions
      </Link>

      {/* Hero image */}
      <div className="relative aspect-[21/9] rounded-2xl border border-border bg-surface overflow-hidden mb-12">
        <Image
          src={solution.image}
          alt={solution.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-10">
          <h1 className="font-heading text-5xl font-bold tracking-tight">{solution.name}</h1>
        </div>
      </div>

      <div className="max-w-3xl">
        <p className="text-muted-foreground leading-relaxed text-lg">
          {solution.description}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mt-14">
        <div>
          <h2 className="text-lg font-semibold">Benefits</h2>
          <ul className="mt-4 space-y-3">
            {solution.benefits.map((benefit: string) => (
              <li key={benefit} className="flex items-center gap-3 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Use Cases</h2>
          <div className="mt-4 grid gap-3">
            {solution.useCases.map((useCase: string) => (
              <div
                key={useCase}
                className="rounded-xl border border-border bg-surface px-5 py-4 text-sm text-muted-foreground"
              >
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </div>

      {relatedCaseStudies.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Case Studies</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {relatedCaseStudies.map((cs: CaseStudy) => (
              <div
                key={cs.id}
                className="rounded-xl border border-border bg-surface overflow-hidden transition-all hover:border-primary/30 hover:bg-surface-elevated"
              >
                <div className="aspect-[2/1] bg-accent relative overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-semibold">{cs.title}</h3>
                  <p className="mt-1 text-sm text-primary">{cs.client}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {cs.challenge}
                  </p>
                  <ul className="mt-5 space-y-1.5">
                    {cs.results.map((result: string) => (
                      <li
                        key={result}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
