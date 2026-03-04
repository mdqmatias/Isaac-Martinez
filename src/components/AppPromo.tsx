import Image from 'next/image';
import './AppPromo.css';

export default function AppPromo() {
  return (
    <section className="app-section" id="app">
      <div className="section-container app-grid">
        <div className="app-image-wrapper">
          <div className="app-glow"></div>
          <Image 
            src="/images/App.png" 
            alt="App de Entrenamiento Isaac Martinez" 
            width={500}
            height={700}
            className="app-img" 
            priority
          />
        </div>
        <div className="app-content">
          <h2 className="section-title">
            <span className="section-eyebrow">Tu Gimnasio Virtual</span>
            LA APP OFICIAL <br/><span className="text-gradient">MÉTODO IRON</span>
          </h2>
          <p className="app-desc">
            Lleva tu entrenamiento al siguiente nivel con nuestra app oficial. Accede a tus rutinas, registra tus progresos y comunícate directamente conmigo desde tu celular.
          </p>
          <div className="app-features">
            <div className="app-feature-card glass-panel">
              <span className="feature-icon">📱</span>
              <h3>Entrenamientos Interactivos</h3>
              <p>Videos explicativos de cada ejercicio para una ejecución perfecta.</p>
            </div>
            <div className="app-feature-card glass-panel">
              <span className="feature-icon">📈</span>
              <h3>Registro de Progreso</h3>
              <p>Sigue tus avances mes a mes: entrenamientos y métricas corporales fácilmente medibles.</p>
            </div>
          </div>
          <a href="#contacto" className="btn-primary app-btn">
            CONSULTAR POR LA APP
          </a>
        </div>
      </div>
    </section>
  );
}
