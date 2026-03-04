import Image from 'next/image';
import './NutritionCTA.css';

export default function NutritionCTA() {
  return (
    <section className="nutrition-section" id="nutricion">
      <div className="section-container nutrition-grid">
        <div className="nutrition-content">
          <h2 className="section-title">
            <span className="section-eyebrow">Plan Nutricional</span>
            NUTRICIÓN A TU <br/><span className="text-gradient">MEDIDA</span>
          </h2>
          <p className="nutrition-desc">
            El entrenamiento es fundamental, pero sin la alimentación adecuada, los resultados nunca serán óptimos. Diseñaré un plan nutricional adaptado a tus objetivos, gustos y estilo de vida para maximizar tu transformación.
          </p>
          <ul className="nutrition-benefits">
            <li>
              <span className="benefit-icon">✔</span>
              Macros ajustados a tu meta (déficit, mantenimiento o superávit).
            </li>
            <li>
              <span className="benefit-icon">✔</span>
              Opciones flexibles y fáciles de preparar en tu día a día.
            </li>
            <li>
              <span className="benefit-icon">✔</span>
              Seguimiento constante de tu progreso para ajustar el plan.
            </li>
          </ul>
          <a href="#contacto" className="btn-primary nutrition-btn">
            CONSULTAR POR PLAN NUTRICIONAL
          </a>
        </div>
        <div className="nutrition-image-wrapper">
          <div className="nutrition-image-container">
            <Image 
              src="/images/Isaac Martinez (22).jpeg" 
              alt="Isaac Martinez Nutrición" 
              fill 
              className="nutrition-img" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="nutrition-floating-badge glass-panel">
            <span className="badge-icon">🥗</span>
            <div>
              <strong>100% Personalizado</strong>
              <p>Adaptado a tu estilo de vida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
