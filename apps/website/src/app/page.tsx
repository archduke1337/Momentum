import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Testimonials } from '@/components/sections/testimonials';
import { CTA } from '@/components/sections/cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}
