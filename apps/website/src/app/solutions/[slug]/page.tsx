import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { solutions } from '@workspace/content';
import type { Solution } from '@workspace/types';

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

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:pb-32">
      {/* meta rule */}
      <div className="flex items-center justify-between border-b border-border py-3">
        <Link
          href="/solutions"
          className="label-mono inline-flex items-center gap-2 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          All solutions
        </Link>
        <span className="label-mono hidden sm:block">Solution</span>
      </div>

      {/* header */}
      <div className="grid gap-y-6 pt-12 lg:grid-cols-12 lg:gap-x-10">
        <h1 className="display text-4xl sm:text-5xl lg:col-span-7 lg:text-6xl">{solution.name}</h1>
        <p className="self-end text-base leading-relaxed text-muted lg:col-span-4 lg:col-start-9">
          {solution.description}
        </p>
      </div>

      {/* image */}
      <div className="relative mt-12 aspect-[21/9] overflow-hidden border border-border bg-surface">
        <Image
          src={solution.image}
          alt={solution.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover"
        />
      </div>

      {/* the problem */}
      {solution.problem ? (
        <div className="mt-16 grid gap-y-4 border-t border-border pt-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="flex items-baseline gap-4 lg:col-span-4">
            <span className="index-numeral text-sm">01</span>
            <span className="label-mono">The problem</span>
          </div>
          <p className="text-xl leading-relaxed text-foreground lg:col-span-7 lg:col-start-6">
            {solution.problem}
          </p>
        </div>
      ) : null}

      {/* benefits + use cases */}
      <div className="mt-16 grid gap-x-10 gap-y-12 border-t border-border pt-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <span className="label-mono">What you gain</span>
          <ul className="mt-6 border-t border-border">
            {solution.benefits.map((benefit: string) => (
              <li key={benefit} className="border-b border-border py-4 text-lg leading-relaxed">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <span className="label-mono">Where it runs</span>
          <ul className="mt-6 border-t border-border">
            {solution.useCases.map((useCase: string) => (
              <li key={useCase} className="flex items-baseline gap-4 border-b border-border py-4">
                <span className="index-numeral text-xs">→</span>
                <span className="leading-relaxed text-muted">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-12 sm:flex-row">
        <Link href="/contact" className="btn-primary">
          Discuss this solution
        </Link>
        <Link href="/products" className="btn-secondary">
          View the platforms
        </Link>
      </div>
    </section>
  );
}
