// app/contato/page.js

import Header from '@/app/components/Header';
import CustomMap from '@/app/components/CustomMap';
import { siteConfig } from '@/config/site';
// import BackgroundPrism from '@/app/components/BackgroundPrism';

export const metadata = {
  title: 'Contato e Localização',
  description: 'Encontre nosso estúdio de tatuagem em Ubatuba. Veja nosso endereço no mapa, e-mail e WhatsApp para agendamentos.',
  keywords: ['contato estúdio de tatuagem', 'localização ubatuba', 'estúdio de tatuagem contato', 'tatuagem ubatuba', 'agendamento tatuagem'],
  openGraph: {
    title: `Contato e Localização - ${siteConfig.name}`,
    description: 'Encontre nosso estúdio de tatuagem em Ubatuba. Veja nosso endereço no mapa, e-mail e WhatsApp para agendamentos.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contato`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Mapa de localização do Estúdio Místico em Ubatuba',
      },
    ],
    siteName: `${siteConfig.name}`,
    type: 'website',
  },
};

export default function PaginaContato() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <Header />
      {/* <BackgroundPrism /> */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-thin uppercase tracking-widest text-purple-300">
            Encontre-nos
          </h1>
          <p className="text-lg text-gray-400 mt-4">
            Onde a arte e a arcana se encontram.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Coluna de Informações */}
          <div className="text-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Nosso Santuário</h2>
            <p className="text-gray-300 leading-relaxed">
              Rua Dr. Felix Guisard Filho, 06 - Centro, Ubatuba - SP, 11690-141
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contato Digital</h2>
            <p className="text-gray-300">
              <strong className="text-purple-300">E-mail:</strong> contato@estudiomistico.com
            </p>
            <p className="text-gray-300 mt-2">
              <strong className="text-purple-300">WhatsApp:</strong> (11) 9 1313-1313
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Horário de Funcionamento</h2>
            <p className="text-gray-300">
              Terça a Sábado   

              Das 10h às 20h
            </p>
          </div>

          {/* Coluna do Mapa (Placeholder por enquanto) */}
          <div className="h-96 w-full rounded-3xl overflow-hidden border border-purple-900/50">
            <CustomMap />
          </div>
        </div>
      </div>
    </div>
  );
}
