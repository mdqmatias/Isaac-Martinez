'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="header-content">
          <Link href="/" className="logo-container">
            <Image 
              src="/Logo horizontal.png" 
              alt="Isaac Martinez Logo" 
              width={160} 
              height={36} 
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
          <nav className="nav-links">
            <Link href="#about">SOBRE MÍ</Link>
            <Link href="#planes">PLANES</Link>
            <Link href="#resultados">RESULTADOS</Link>
            <Link href="#contacto">CONTACTO</Link>
          </nav>
          <div className="nav-actions">
            <a href="#contacto" className="btn-primary">EMPEZAR</a>
          </div>

          {/* Hamburger button */}
          <button 
            className={`hamburger ${menuOpen ? 'hamburger-active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Off-canvas overlay */}
      <div 
        className={`offcanvas-overlay ${menuOpen ? 'overlay-active' : ''}`} 
        onClick={closeMenu}
      />

      {/* Off-canvas menu */}
      <nav className={`offcanvas ${menuOpen ? 'offcanvas-active' : ''}`}>
        <div className="offcanvas-header">
          <Image 
            src="/Logo horizontal.png" 
            alt="Isaac Martinez Logo" 
            width={140} 
            height={32} 
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div className="offcanvas-links">
          <a href="#about" onClick={closeMenu} className="offcanvas-link">
            <span className="offcanvas-link-num">01</span>
            <span>SOBRE MÍ</span>
          </a>
          <a href="#planes" onClick={closeMenu} className="offcanvas-link">
            <span className="offcanvas-link-num">02</span>
            <span>PLANES</span>
          </a>
          <a href="#resultados" onClick={closeMenu} className="offcanvas-link">
            <span className="offcanvas-link-num">03</span>
            <span>RESULTADOS</span>
          </a>
          <a href="#contacto" onClick={closeMenu} className="offcanvas-link">
            <span className="offcanvas-link-num">04</span>
            <span>CONTACTO</span>
          </a>
        </div>

        <div className="offcanvas-footer">
          <a href="#contacto" onClick={closeMenu} className="btn-primary offcanvas-cta">
            EMPEZAR MI TRANSFORMACIÓN
          </a>
          <div className="offcanvas-socials">
            <a href="https://www.instagram.com/isaacmartinez.f/" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram-logo.svg" alt="Instagram" width={22} height={22} className="social-icon" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/whatsapp-logo.svg" alt="WhatsApp" width={22} height={22} className="social-icon" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
