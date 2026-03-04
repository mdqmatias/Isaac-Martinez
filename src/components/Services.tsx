'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import './Services.css';

const plans = [
  {
    name: "IRON BASE",
    price: "$30",
    features: [
      "Plan de entrenamiento mensual",
      "Rutinas basadas en hipertrofia",
      "Soporte vía WhatsApp",
      "Revisión de avances cada 15 días"
    ],
    recommended: false
  },
  {
    name: "IRON PRO",
    price: "$75",
    features: [
      "Todo lo de IRON BASE",
      "Plan nutricional personalizado",
      "Llamada 1 a 1 quincenal",
      "Ajuste de rutinas semanal",
      "Comunidad exclusiva Vip"
    ],
    recommended: true
  },
  {
    name: "IRON ELITE",
    price: "$150",
    features: [
      "Todo lo de IRON PRO",
      "Acompañamiento diario",
      "Revisión de técnica mediante videos",
      "Videollamada semanal de mindset",
      "Prioridad 24/7"
    ],
    recommended: false
  }
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1); // Start at recommended (center)

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.children[0]?.clientWidth || 0;
    const gap = 24;
    const index = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, plans.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    // Scroll to recommended (index 1) on mobile on mount
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        const cw = el.children[0]?.clientWidth || 0;
        const g = 16;
        el.scrollTo({ left: (cw + g) * 1, behavior: 'instant' });
        setActiveIndex(1);
      }, 200);
    }
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section className="services-section" id="planes">
      <div className="section-container">
        <div className="services-header">
          <h2 className="section-title text-center">
            <span className="section-eyebrow">Planes</span>
            POTENCIA TUS <span className="text-gradient">RESULTADOS</span>
          </h2>
          <p className="services-subtitle text-center">
            Elige el plan que mejor se adapte a tus objetivos y empieza tu transformación hoy.
          </p>
        </div>

        <div className="plans-grid" ref={scrollRef}>
          {plans.map((plan, index) => (
            <div className={`plan-card glass-panel ${plan.recommended ? 'recommended' : ''}`} key={index}>
              {plan.recommended && <div className="recommended-badge">MÁS ELEGIDO</div>}
              
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price.replace('$', '')}</span>
                <span className="period">/mes</span>
              </div>
              
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#contacto" className={plan.recommended ? "btn-primary w-full text-center" : "btn-primary outline-btn w-full text-center"}>
                CONSULTAR PLAN
              </a>
            </div>
          ))}
        </div>

        {/* Mobile carousel indicators */}
        <div className="carousel-dots plans-dots">
          {plans.map((_, i) => (
            <span key={i} className={`carousel-dot ${i === activeIndex ? 'carousel-dot-active' : ''}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
