import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { industries, solutions } from '@workspace/content';
import type { Industry, Solution } from '@workspace/types';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return industries.map((industry: Industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i: Industry) => i.slug === slug);
  if (!industry) return {};
  return {
    title: industry.name,
    description: industry.tagline,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i: Industry) => i.slug === slug);
  if (!industry) notFound();

  const industrySolutions = solutions.filter((s: Solution) =>
    industry.solutions.includes(s.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <Link
        href="/industries"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors mb-10"
      >
        &larr; All Industries
      </Link>

      {/* Hero image */}
      <div className="relative aspect-[21/9] rounded-2xl border border-border bg-surface overflow-hidden mb-12">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-10">
          <h1 className="font-heading text-5xl font-bold tracking-tight">{industry.name}</h1>
          <p className="mt-2 text-lg text-primary">{industry.tagline}</p>
        </div>
      </div>

      <div className="max-w-3xl">
        <p className="text-muted-foreground leading-relaxed text-lg">
          {industry.description}
        </p>
      </div>

      {industrySolutions.length > 0 && (
        <div className="mt-14">
          <h2 className="text-2xl font-semibold">Solutions for {industry.name}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {industrySolutions.map((solution: Solution) => (
              <Link
                key={solution.id}
                href={`/solutions/${solution.slug}`}
                className="group rounded-xl border border-border bg-surface p-7 transition-all hover:border-primary/30 hover:bg-surface-elevated"
              >
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {solution.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {solution.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
