'use client';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import './Hero.css';

/* ─── Slideshow images (portrait / vertical) ─── */
const heroImages = [
  '/images/Isaac Martinez (8).jpeg',
  '/images/Isaac Martinez (22).jpeg',
  '/images/Isaac Martinez (4).jpeg',
  '/images/Isaac Martinez (28).jpeg',
  '/images/Isaac Martinez (24).jpeg',
];

/* ─── Stats ─── */
const stats = [
  { value: '+200', label: 'Clientes activos' },
  { value: '10+', label: 'Años de experiencia' },
  { value: '3 Fases', label: 'Método completo' },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-inner">
      {/* ── Left: content ── */}
      <div className={`hero-left ${isVisible ? 'hero-visible' : ''}`}>
        {/* Trust badge */}
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>
            <strong>+200 personas</strong> ya entrenan con el Método IRON
          </span>
        </div>

        <h1 className="hero-title">
          TRANSFORMA TU <br />
          CUERPO CON EL <br />
          <span className="accent-text highlight">MÉTODO IRON</span>
        </h1>

        <p className="hero-subtitle">
          El sistema de entrenamiento basado en fases de fuerza, hipertrofia y
          resistencia que ya ha cambiado la vida de cientos de personas.
        </p>

        <div className="hero-actions">
          <a href="#planes" className="btn-primary hero-cta-main">
            EMPEZAR MI TRANSFORMACIÓN
          </a>
          <a href="#resultados" className="btn-secondary">
            VER RESULTADOS <span className="play-icon">💪</span>
          </a>
        </div>

        {/* Social proof */}
        <div className="hero-social-proof">
          <div className="social-proof-avatars">
            {[
              'https://randomuser.me/api/portraits/men/32.jpg',
              'https://randomuser.me/api/portraits/women/44.jpg',
              'https://randomuser.me/api/portraits/men/75.jpg',
              'https://randomuser.me/api/portraits/women/68.jpg',
              'https://randomuser.me/api/portraits/men/46.jpg',
            ].map((src, i) => (
              <div key={i} className="sp-avatar">
                <Image
                  src={src}
                  alt={`Cliente ${i + 1}`}
                  width={40}
                  height={40}
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
              </div>
            ))}
          </div>
          <div className="social-proof-text">
            <div className="sp-stars">★★★★★</div>
            <p>
              <strong>4.9/5</strong> — Valoración de nuestros clientes
            </p>
          </div>
        </div>

        {/* Stats inline */}
        <div className={`hero-stats ${isVisible ? 'stats-visible' : ''}`}>
          {stats.map((stat, i) => (
            <div key={i} className="hero-stat">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: portrait photo slideshow ── */}
      <div className={`hero-right ${isVisible ? 'hero-visible' : ''}`}>
        <div className="hero-image-wrapper">
          <div className="hero-image-frame">
            {heroImages.map((src, i) => (
              <div
                key={src}
                className={`hero-slide ${i === currentSlide ? 'slide-active' : ''}`}
              >
                <Image
                  src={src}
                  alt={`Isaac Martinez entrenando ${i + 1}`}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority={i === 0}
                />
              </div>
            ))}
            {/* Decorative accents around the image */}
            <div className="image-accent accent-top-right"></div>
            <div className="image-accent accent-bottom-left"></div>
          </div>

          {/* Slide indicators */}
          <div className="slide-indicators">
            {heroImages.map((_, i) => (
              <button
                key={i}
                className={`slide-dot ${i === currentSlide ? 'dot-active' : ''}`}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Imagen ${i + 1}`}
            />
          ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
