'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function PasswordPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'isaac2026') {
      document.cookie = "demo_access=true; path=/; max-age=" + 60 * 60 * 24 * 7;
      router.push('/');
      router.refresh();
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#050505',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-body, "Inter", sans-serif)'
    }}>
      {/* Background decoration */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          top: '-10%',
          right: '-10%',
          zIndex: 0,
          filter: 'blur(60px)'
        }} 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #a3e635 0%, transparent 70%)',
          bottom: '-5%',
          left: '-5%',
          zIndex: 0,
          filter: 'blur(60px)'
        }} 
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="glass-panel" 
        style={{
          width: '100%',
          maxWidth: '440px',
          padding: '48px 32px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px'
        }}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ marginBottom: '32px' }}
        >
          <Image 
            src="/Logo horizontal.png" 
            alt="Isaac Martinez Logo" 
            width={200} 
            height={50} 
            style={{ objectFit: 'contain' }}
            priority
          />
        </motion.div>

        <h1 style={{ 
          fontSize: '28px', 
          marginBottom: '12px', 
          fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
          fontWeight: '700',
          color: '#f5f5f5',
          letterSpacing: '-0.02em'
        }}>
          Acceso Exclusivo
        </h1>
        <p style={{ 
          color: '#a0a0a0', 
          fontSize: '15px', 
          marginBottom: '32px',
          lineHeight: '1.5'
        }}>
          Introduce la contraseña para ver el demo <br/> del <strong>Método Iron</strong>.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ position: 'relative' }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              autoFocus
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: error ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.12)',
                color: '#f5f5f5',
                outline: 'none',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                textAlign: 'center',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
              }}
            />
            <AnimatePresence>
              {error && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{ 
                    color: '#ef4444', 
                    fontSize: '13px', 
                    marginTop: '10px',
                    fontWeight: '500' 
                  }}
                >
                  Contraseña incorrecta. Inténtalo de nuevo.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, opacity: 0.95 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            style={{
              padding: '16px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              color: 'white',
              border: 'none',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
              marginTop: '8px',
              boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
            }}
          >
            Desbloquear Demo
          </motion.button>
        </form>

        <div style={{ 
          marginTop: '40px', 
          fontSize: '11px', 
          color: 'rgba(255, 255, 255, 0.2)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontWeight: '500'
        }}>
          Isaac Martinez — Proyecto Privado
        </div>
      </motion.div>
    </main>
  );
}
