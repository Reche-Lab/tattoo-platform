// app/page.js (versão final atualizada)

'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MysticObject from './components/MysticObject';
import Header from './components/Header';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    // A tag <main> agora controla o fluxo de toda a página
    <main>
      {/* --- SEÇÃO 1: ÁREA 3D INTERATIVA --- */}
      <section className="relative w-screen h-screen">
        <Header />

        <Canvas camera={{ position: [0, 0, 3.5], fov: 75 }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={100} color="#fff" />
          <pointLight position={[-10, -10, -10]} intensity={100} color="#9e00ff" />
          <MysticObject />
          <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.4} />
        </Canvas>

        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full pointer-events-none">
          <h1 className="text-4xl font-thin text-white uppercase tracking-widest md:text-6xl" style={{ textShadow: '0 0 15px rgba(255, 0, 255, 0.7)' }}>
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-lg text-purple-300">
            Toque a arte. Sinta a tinta.
          </p>
        </div>
      </section>

      {/* --- SEÇÃO 2: SOBRE O ESTÚDIO (NOVO LAYOUT) --- */}
      <section className="py-20 md:py-32 text-white">
        <div className="container mx-auto px-4">
          {/* Container para o conteúdo de texto centralizado */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-purple-300 mb-4">
              Pioneiras da Tinta em Ubatuba
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Somos o primeiro estúdio de tatuagem de Ubatuba fundado e operado por mulheres. Ancoradas na região histórica de uma das cidades mais belas do litoral brasileiro, nosso espaço é um santuário que reúne diferentes estilos artísticos em um ambiente seguro e acolhedor.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Aqui, cada tatuagem é uma celebração da arte, da força feminina e da identidade pessoal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/artistas" 
                className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-purple-700 transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Conheça as Artistas
              </Link>
              
              <Link 
                href="/nossa-historia" 
                className="inline-block bg-transparent border border-purple-400 text-purple-400 font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-purple-400 hover:text-black transition-colors duration-300 w-full sm:w-auto"
              >
                Leia nossa história
              </Link>
            </div>
          </div>

          {/* Container para a imagem abaixo do texto */}
          <div className="max-w-5xl mx-auto mt-16">
            <Image
              src="/estudio-sobre.jpeg" // Caminho para a imagem que você salvou
              alt={`Foto do interior do ${siteConfig.name} em Ubatuba`}
              width={1200}
              height={800}
              className="rounded-lg object-cover shadow-lg shadow-purple-900/30"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
