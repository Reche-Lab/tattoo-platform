// app/layout.js

import { Inter, Dancing_Script } from "next/font/google";
import { siteConfig } from '@/config/site';
import "@/app/globals.css";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-dancing-script',
});

export const metadata = {
  title: {
    default: `${siteConfig.name} - Tatuagem Autoral em Ubatuba`,
    template: `%s | ${siteConfig.name} Ubatuba`,
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
    <html lang="pt-br" className={`${inter.variable} ${dancingScript.variable}`}>
      <body className={`${inter.className} h-full bg-black`}>
        {children}
         <Footer />
      </body>
    </html>
  );
}
