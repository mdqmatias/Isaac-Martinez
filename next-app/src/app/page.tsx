import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import SuccessStories from '@/components/SuccessStories';
import Contact from '@/components/Contact';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FadeIn delay={0.2}><About /></FadeIn>
        <FadeIn delay={0.2}><Services /></FadeIn>
        <FadeIn delay={0.2}><SuccessStories /></FadeIn>
        <FadeIn delay={0.2}><Contact /></FadeIn>
      </main>
    </>
  );
}
