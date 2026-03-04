'use client';
import Image from 'next/image';
import AnimatedCounter from './AnimatedCounter';
import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-glow"></div>
            <Image 
              src="/images/Isaac Martinez (6).jpeg" 
              alt="Isaac Martinez"
              width={500}
              height={600}
              className="about-image"
            />
          </div>
          
          <div className="about-content">
            <h2 className="section-title">
              <span className="section-eyebrow">Sobre Mí</span>
              Potenciando tu <span className="text-gradient">verdadero</span> nivel
            </h2>
            
            <p className="about-text">
              <strong>Mi nombre es Isaac Martinez</strong> y llevo más de 10 años transformando físicos y mentes. Mi metodología no se trata solo de levantar pesas, sino de construir una disciplina inquebrantable a través de entrenamientos basados en ciencia y resultados comprobables.
            </p>
            
            <div className="stats-grid">
              <div className="stat-card glass-panel">
                <AnimatedCounter end={10} suffix="+" />
                <span className="stat-label">Años de Exp.</span>
              </div>
              <div className="stat-card glass-panel">
                <AnimatedCounter end={500} suffix="+" />
                <span className="stat-label">Vidas Cambiadas</span>
              </div>
              <div className="stat-card glass-panel">
                <AnimatedCounter end={10} suffix="k+" />
                <span className="stat-label">Horas de Asesoría</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
