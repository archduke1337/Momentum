import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
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
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:pb-32">
      {/* meta rule */}
      <div className="flex items-center justify-between border-b border-border py-3">
        <Link
          href="/industries"
          className="label-mono inline-flex items-center gap-2 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          All industries
        </Link>
        <span className="label-mono hidden sm:block">Industry</span>
      </div>

      {/* header */}
      <div className="grid gap-y-6 pt-12 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-7">
          <span className="label-mono text-primary">{industry.tagline}</span>
          <h1 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">{industry.name}</h1>
        </div>
        <p className="self-end text-base leading-relaxed text-muted lg:col-span-4 lg:col-start-9">
          {industry.description}
        </p>
      </div>

      {/* image */}
      <div className="relative mt-12 aspect-[21/9] overflow-hidden border border-border bg-surface">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover"
        />
      </div>

      {/* challenge + approach */}
      {industry.challenge || industry.approach ? (
        <div className="mt-16 grid gap-x-10 gap-y-12 border-t border-border pt-12 lg:grid-cols-2">
          {industry.challenge ? (
            <div>
              <div className="flex items-baseline gap-4">
                <span className="index-numeral text-sm">01</span>
                <span className="label-mono">The challenge</span>
              </div>
              <p className="mt-5 text-lg leading-relaxed text-muted">{industry.challenge}</p>
            </div>
          ) : null}
          {industry.approach ? (
            <div>
              <div className="flex items-baseline gap-4">
                <span className="index-numeral text-sm">02</span>
                <span className="label-mono">Our approach</span>
              </div>
              <p className="mt-5 text-lg leading-relaxed text-foreground">{industry.approach}</p>
            </div>
          ) : null}
        </div>
      ) : null}

      {/* related solutions */}
      {industrySolutions.length > 0 ? (
        <div className="mt-16 border-t border-border pt-12">
          <span className="label-mono">Solutions for {industry.name}</span>
          <div className="mt-6 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
            {industrySolutions.map((solution: Solution, i) => (
              <Link
                key={solution.id}
                href={`/solutions/${solution.slug}`}
                className="group flex flex-col border-b border-r border-border p-6 transition-colors hover:bg-surface"
              >
                <span className="index-numeral text-xs">0{i + 1}</span>
                <h3 className="mt-4 text-lg tracking-tight transition-colors group-hover:text-primary">
                  {solution.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                  {solution.description}
                </p>
                <ArrowUpRight
                  className="mt-4 size-4 text-muted transition-colors group-hover:text-foreground"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      {/* CTA */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-12 sm:flex-row">
        <Link href="/contact" className="btn-primary">
          Talk to our team
        </Link>
        <Link href="/solutions" className="btn-secondary">
          Explore all solutions
        </Link>
      </div>
    </section>
  );
}
