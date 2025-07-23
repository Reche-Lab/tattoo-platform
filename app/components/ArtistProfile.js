// app/components/ArtistProfile.js
'use client'; // Este é o nosso componente de cliente!

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { artistas } from '@/data/artistas';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';
import PortfolioModal from '@/app/components/PortfolioModal';

function getArtista(id) {
  return artistas.find((artista) => artista.id === id);
}

// Renomeamos a função para refletir seu novo papel
export default function ArtistProfile() {
  const params = useParams();
  const artista = getArtista(params.id);

  const [initialModalIndex, setInitialModalIndex] = useState(null);

  if (!artista) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <p>Carregando artista...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <Header />
      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* Perfil do Artista */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Image src={artista.foto} alt={`Foto de ${artista.nome}`} width={500} height={700} className="object-cover w-full rounded-lg shadow-lg shadow-purple-900/20" />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-white" style={{ textShadow: '0 0 10px rgba(158, 0, 255, 0.5)' }}>{artista.nome}</h1>
            <h2 className="text-xl md:text-2xl text-purple-300 mt-2">{artista.especialidade}</h2>
            <p className="text-gray-300 mt-6 text-lg leading-relaxed">{artista.bio}</p>
            <div className="mt-8">
              <Link href="/artistas" className="text-purple-300 hover:text-white transition-colors">&larr; Ver todos os artistas</Link>
            </div>
          </div>
        </div>

        {/* Seção do Portfólio */}
        <div className="mt-16 md:mt-24">
          <h3 className="text-3xl font-semibold text-center mb-8 uppercase tracking-widest">Portfólio</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {artista.portfolio.map((imagem, index) => (
              <div key={imagem.id} className="group relative cursor-pointer w-[calc(50%-0.5rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)] aspect-square" onClick={() => setInitialModalIndex(index)}>
                <Image src={imagem.src} alt={imagem.alt} fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Renderiza o componente do modal */}
      {initialModalIndex !== null && (
        <PortfolioModal portfolio={artista.portfolio} initialIndex={initialModalIndex} onClose={() => setInitialModalIndex(null)} />
      )}
    </div>
  );
}
