# Isaac Martinez — Entrenador Personal 🏋️‍♂️

Sitio web profesional para **Isaac Martinez**, entrenador personal especializado en el **Método Iron** — un sistema de entrenamiento basado en fases de fuerza, hipertrofia y resistencia.

## 🚀 Tecnologías

- **Next.js 16** (App Router, Turbopack)
- **React 19** con componentes cliente/servidor
- **CSS Vanilla** — sistema de diseño con variables CSS, gradientes y glassmorphism
- **TypeScript**

## 📁 Estructura del Proyecto

```
Isaac-Martinez/
├── next-app/                 # Aplicación Next.js
│   ├── public/               # Assets estáticos (imágenes, logos, iconos)
│   ├── src/
│   │   ├── app/              # App Router (layout, page, globals.css)
│   │   └── components/       # Componentes React + CSS
│   │       ├── Header.tsx    # Header con menú off-canvas mobile
│   │       ├── Hero.tsx      # Hero con carousel de imágenes
│   │       ├── About.tsx     # Sobre mí con contadores animados
│   │       ├── Services.tsx  # Planes con carousel mobile
│   │       ├── SuccessStories.tsx  # Testimonios con carousel mobile
│   │       └── Contact.tsx   # Formulario + newsletter + footer
│   └── next.config.ts
├── Recursos/                 # Assets fuente (ignorado por git)
└── .gitignore
```

## ✨ Características

- **Diseño premium** con paleta violeta eléctrico (#8b5cf6) y verde lima (#a3e635)
- **Header glass** con efecto blur al scrollear
- **Carousel de imágenes** en el hero con transiciones suaves
- **Contadores animados** con IntersectionObserver en "Sobre Mí"
- **Menú off-canvas** con hamburguesa animada y overlay de blur
- **Carousels touch** para planes y testimonios en mobile
- **Newsletter** con campo de suscripción
- **Fondos full-width** con blobs de gradientes por sección
- **SEO completo** (OpenGraph, Twitter Cards, keywords, canonical)
- **Favicon** personalizado desde el isologo
- **Responsive** optimizado para desktop, tablet y mobile

## 🛠️ Desarrollo

```bash
# Instalar dependencias
cd next-app
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

## 📝 Créditos

- **Diseño y desarrollo**: [Dropping](https://dropping.digital)
- **Entrenador**: Isaac Martinez — [@isaacmartinez.f](https://www.instagram.com/isaacmartinez.f/)
