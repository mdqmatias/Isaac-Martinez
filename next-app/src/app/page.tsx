import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import SuccessStories from '@/components/SuccessStories';
import NutritionCTA from '@/components/NutritionCTA';
import AppPromo from '@/components/AppPromo';
import Contact from '@/components/Contact';
import FadeIn from '@/components/FadeIn';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FadeIn delay={0.2}><About /></FadeIn>
        <FadeIn delay={0.2}><Services /></FadeIn>
        <FadeIn delay={0.2}><NutritionCTA /></FadeIn>
        <FadeIn delay={0.2}><AppPromo /></FadeIn>
        <FadeIn delay={0.2}><SuccessStories /></FadeIn>
        <FadeIn delay={0.2}><Contact /></FadeIn>
        <ScrollToTop />
      </main>
    </>
  );
}
