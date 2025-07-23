// app/nossa-historia/page.js

import Header from '../components/Header';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'A Nossa História',
  description: `Descubra a origem do ${siteConfig.name}, o primeiro estúdio de tatuagem em Ubatuba fundado por mulheres. Conheça nossa jornada, filosofia e compromisso com a arte autoral.`,
  keywords: [`história do ${siteConfig.name}`, 'tatuagem ubatuba', 'estúdio de tatuagem fundado por mulheres', 'arte autoral', 'tatuagem segura', 'tatuagem acolhedora'],
  openGraph: {
    title: `A Nossa História - ${siteConfig.name}`,
    description: `Descubra a origem do ${siteConfig.name}, o primeiro estúdio de tatuagem em Ubatuba fundado por mulheres. Conheça nossa jornada, filosofia e compromisso com a arte autoral.`,
    url: `${siteConfig.name}/nossa-historia`,
    images: [
      {
        url: `${siteConfig.name}/estudio-sobre.jpeg`,
        width: 1200,
        height: 630,
        alt: `Fachada do ${siteConfig.name} em Ubatuba`,
      },
    ],
    siteName: `${siteConfig.name}`,
    type: 'website',
  },
};

export default function PaginaNossaHistoria() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Título da Página */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-thin uppercase tracking-widest text-purple-300">
              Nossa História
            </h1>
            <p className="text-lg text-gray-400 mt-4">
              A jornada que nos trouxe até aqui.
            </p>
          </div>

          {/* Imagem Principal da Página */}
          <div className="mb-12">
            <Image
              src="/estudio-sobre.jpeg" // Podemos reutilizar a imagem ou usar uma nova
              alt={`Fachada do ${siteConfig.name} em Ubatuba`}
              width={1200}
              height={700}
              className="rounded-lg object-cover w-full shadow-lg shadow-purple-900/20"
            />
          </div>

          {/* Conteúdo da História */}
          <div className="text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              A semente do {siteConfig.name} foi plantada a partir de um sonho compartilhado: criar em Ubatuba, nossa casa, um espaço que fosse mais do que um simples estúdio de tatuagem. Sonhávamos com um refúgio, um santuário de arte onde a força e a criatividade feminina pudessem florescer sem barreiras. Como artistas e mulheres, sentimos na pele a necessidade de um ambiente que fosse genuinamente seguro, acolhedor e inspirador.
            </p>
            <p>
              Fomos as pioneiras. Com coragem e muita tinta, inauguramos o primeiro estúdio da cidade fundado e operado inteiramente por mulheres. Nossa casa está ancorada no coração da região histórica de Ubatuba, um lugar que respira cultura e beleza, assim como a arte que criamos. Cada canto do nosso estúdio foi pensado para refletir nossa alma: um toque místico, um design minimalista e uma energia que convida à introspecção e à autoexpressão.
            </p>
            <h3 className="text-2xl font-semibold text-purple-300 pt-4">
              Nossa Filosofia
            </h3>
            <p>
              Acreditamos que tatuar é um ritual. É um ato de transformar o corpo em tela, de contar histórias sem palavras e de carregar símbolos de poder pessoal. Por isso, nossa filosofia se baseia em três pilares: <strong className="text-white">Arte Autoral</strong>, onde cada design é único; <strong className="text-white">Segurança Máxima</strong>, com os mais altos padrões de higiene; e <strong className="text-white">Acolhimento Verdadeiro</strong>, garantindo que toda pessoa se sinta respeitada e à vontade em nossa casa.
            </p>
            <p>
              O {siteConfig.name} é a materialização da nossa jornada. É um convite para que você encontre e celebre a sua própria história através da arte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
