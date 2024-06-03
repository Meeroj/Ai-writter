import Hero from '@/components/homepage/hero.tsx';
import Logos from '@/components/homepage/logos.tsx';
import Features from '@/components/homepage/features.tsx';
import Testimonials from '@/components/homepage/testimonials.tsx';
import Pricing from '@/components/homepage/pricing.tsx';
import Footer from '@/components/homepage/footer.tsx';

export default function Homepage() {
  return (
    <>
      <Hero />
      <Logos />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </>
  );
}
