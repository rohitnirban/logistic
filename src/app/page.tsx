import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemVisionSection from '@/components/ProblemVisionSection';
import SolutionsSection from '@/components/SolutionsSection';
import { TestimonialSlider } from '@/components/ImpactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProblemVisionSection />
      <SolutionsSection />
      <TestimonialSlider />
      <Footer />
    </>
  );
}
