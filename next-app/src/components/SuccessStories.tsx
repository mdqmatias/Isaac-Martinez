'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import './SuccessStories.css';

const stories = [
  {
    name: "Carlos R.",
    image: "/images/Isaac Martinez (20).jpeg",
    quote: "Perdí 15kg de grasa en 4 meses. El Método Iron cambió mi relación con el entrenamiento por completo."
  },
  {
    name: "Andrés M.",
    image: "/images/Isaac Martinez (30).jpeg",
    quote: "Gracias al plan IRON PRO gané la masa muscular que buscaba. El acompañamiento es de otro nivel."
  },
  {
    name: "Diego L.",
    image: "/images/Isaac Martinez (14).jpeg",
    quote: "Mejoré mi postura, resistencia y sobre todo mi confianza. Isaac sabe exactamente cómo guiarte."
  }
];

export default function SuccessStories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.children[0]?.clientWidth || 0;
    const gap = 24;
    const index = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, stories.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section className="stories-section" id="resultados">
      <div className="section-container">
        <div className="section-header text-center mb-12">
          <h2 className="section-title">
            <span className="section-eyebrow">Resultados</span>
            VIDAS <span className="text-gradient">CAMBIADAS</span>
          </h2>
          <p className="section-subtitle">Casos reales, resultados reales con el Método Iron.</p>
        </div>

        <div className="stories-grid" ref={scrollRef}>
          {stories.map((story, idx) => (
            <div className="story-card glass-panel" key={idx}>
              <div className="story-image-container">
                <Image 
                  src={story.image} 
                  alt={story.name} 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="story-image"
                />
                <div className="story-image-overlay"></div>
              </div>
              <div className="story-content">
                <div className="story-quote-mark">&ldquo;</div>
                <p className="story-quote">{story.quote}</p>
                <div className="story-author">
                  <span className="story-name">{story.name}</span>
                  <span className="story-stars">★★★★★</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel indicators */}
        <div className="carousel-dots stories-dots">
          {stories.map((_, i) => (
            <span key={i} className={`carousel-dot ${i === activeIndex ? 'carousel-dot-active' : ''}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
