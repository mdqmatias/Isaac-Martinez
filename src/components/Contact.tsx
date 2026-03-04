'use client';
import Image from 'next/image';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contacto">
      {/* ── Newsletter ribbon ── */}
      <div className="newsletter-ribbon">
        <div className="newsletter-content section-container">
          <div className="newsletter-text">
            <span className="newsletter-icon">📩</span>
            <div>
              <strong>Suscríbete al newsletter</strong>
              <p>Recibe tips de entrenamiento, nutrición y motivación directamente en tu correo.</p>
            </div>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Tu correo electrónico" required />
            <button type="submit" className="btn-primary newsletter-btn">SUSCRIBIRME</button>
          </form>
        </div>
      </div>

      {/* ── Contact form ── */}
      <div className="section-container">
        <div className="contact-wrapper glass-panel">
          <div className="contact-info">
            <h2 className="section-title">
              <span className="section-eyebrow">Contacto</span>
              ¿LISTO PARA <br/><span className="text-gradient">EMPEZAR?</span>
            </h2>
            <p className="contact-desc">
              No pierdas más el tiempo con metodologías que no funcionan. Únete a mi equipo y transforma tu físico para siempre.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/isaacmartinez.f/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Image src="/instagram-logo.svg" alt="Instagram" width={18} height={18} className="social-icon" />
                Instagram
              </a>
              <a href="#" className="social-link">
                <Image src="/whatsapp-logo.svg" alt="WhatsApp" width={18} height={18} className="social-icon" />
                WhatsApp
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <form className="form">
              <div className="form-group">
                <input type="text" placeholder="Tu Nombre" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Tu Correo Electrónico" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Tu WhatsApp (ej: +54 11 1234-5678)" required />
              </div>
              <div className="form-group">
                <select required defaultValue="">
                  <option value="" disabled>Motivo de consulta</option>
                  <option value="entrenamiento_personalizado">Entrenamiento Personalizado</option>
                  <option value="plan_nutricional">Plan Nutricional</option>
                  <option value="app_entrenamiento">App de Entrenamiento</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              <button type="submit" className="btn-primary form-submit">ENVIAR AHORA</button>
            </form>
          </div>
        </div>
        
        <footer className="footer">
          <p>© 2026 Isaac Martinez. Todos los derechos reservados.</p>
          <p className="sub-footer">Hecho por <a href="https://dropping.digital" target="_blank" rel="noopener noreferrer" className="dropping-link">Dropping</a></p>
        </footer>
      </div>
    </section>
  );
}
