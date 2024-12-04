import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemVisionSection from '@/components/ProblemVisionSection';
import SolutionsSection from '@/components/SolutionsSection';
import ImpactSection from '@/components/ImpactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProblemVisionSection />
      <SolutionsSection />
      <ImpactSection />
      <Footer />
    </>
  );
}
