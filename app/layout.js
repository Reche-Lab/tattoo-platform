// app/layout.js

import { Inter } from "next/font/google";
import { siteConfig } from '@/config/site';
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: `${siteConfig.name} - Tatuagem Autoral em Ubatuba`, // Título padrão
    template: `%s | ${siteConfig.name} Ubatuba`, // Modelo para outras páginas
  },
  description: 'Primeiro estúdio de tatuagem em Ubatuba fundado por mulheres. Tatuagens autorais, fineline, blackwork e geometria sagrada em um ambiente seguro e acolhedor.',
  keywords: ['tatuagem ubatuba', 'estúdio de tatuagem ubatuba', 'tatuagem fineline', 'tatuagem blackwork', 'tatuadoras mulheres', `${siteConfig.name}`],
  openGraph: {
    title: `${siteConfig.name} - Tatuagem Autoral em Ubatuba`,
    description: 'Primeiro estúdio de tatuagem em Ubatuba fundado por mulheres. Tatuagens autorais, fineline, blackwork e geometria sagrada em um ambiente seguro e acolhedor.',
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Tatuagem Autoral em Ubatuba`,
      },
    ],
    siteName: siteConfig.name,
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      {/* ADICIONE h-full AQUI */}
      <body className={`${inter.className} h-full bg-black`}>
        {children}
      </body>
    </html>
  );
}
