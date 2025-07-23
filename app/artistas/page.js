// app/artistas/page.js

import { artistas } from '@/data/artistas';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';

export default function PaginaArtistas( ) {
  return (
    <div className="min-h-screen text-white pt-24 pb-12">
        <Header /> {/* Use o componente aqui */}
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-thin uppercase tracking-widest text-purple-300">
                    Nossas Artistas
                </h1>
                <p className="text-lg text-gray-400 mt-4">
                    Artesãs da tinta e da alma.
                </p>
            </div>

            {/* Grade de Artistas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artistas.map((artista) => (
                <Link key={artista.id} href={`/artistas/${artista.id}`} className="block">
                    <div 
                        className="group relative overflow-hidden rounded-lg bg-gray-900 border border-purple-900/50 h-full"
                    >
                        <Image
                            src={artista.foto}
                            alt={`Foto de ${artista.nome}`}
                            width={500}
                            height={700}
                            className="object-cover w-full h-96 transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                            <h3 className="text-2xl font-semibold tracking-wider text-white">
                                {artista.nome}
                            </h3>
                            <p className="text-purple-300">{artista.especialidade}</p>
                        </div>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    </div>
  );
}
