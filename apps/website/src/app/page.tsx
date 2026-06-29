import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Testimonials } from '@/components/sections/testimonials';
import { CTA } from '@/components/sections/cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ProductShowcase />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}
