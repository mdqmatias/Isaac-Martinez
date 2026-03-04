import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isaac Martinez | Entrenador Personal – Método Iron",
  description:
    "Transforma tu cuerpo con el Método Iron de Isaac Martinez. Entrenamiento personalizado basado en fases de fuerza, hipertrofia y resistencia. +200 clientes activos, +10 años de experiencia.",
  keywords: [
    "entrenador personal",
    "método iron",
    "Isaac Martinez",
    "entrenamiento personalizado",
    "plan de entrenamiento",
    "hipertrofia",
    "fuerza",
    "transformación física",
    "nutrición deportiva",
  ],
  openGraph: {
    title: "Isaac Martinez | Entrenador Personal – Método Iron",
    description:
      "Transforma tu cuerpo con el Método Iron. Entrenamiento personalizado basado en ciencia y resultados comprobables.",
    type: "website",
    locale: "es_AR",
    siteName: "Isaac Martinez - Entrenador Personal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Martinez | Entrenador Personal – Método Iron",
    description:
      "Transforma tu cuerpo con el Método Iron. +200 clientes activos, +10 años de experiencia.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050505" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
