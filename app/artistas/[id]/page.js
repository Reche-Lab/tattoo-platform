// app/artistas/[id]/page.js

import { artistas } from '@/data/artistas';
import { siteConfig } from '@/config/site';
import ArtistProfile from '@/app/components/ArtistProfile'; // Importa o nosso novo Client Component

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  
  const artista = artistas.find((artista) => artista.id === resolvedParams.id);

  if (!artista) {
    return { title: 'Artista não encontrado' };
  }

  return {
    title: `${artista.nome} - ${artista.especialidade}`,
    description: `Veja o portfólio de ${artista.nome}, especialista em ${artista.especialidade} no ${siteConfig.name} em Ubatuba. ${artista.bio.substring(0, 120)}...`,
  };
}

// Este é o nosso Server Component. Simples e sem interatividade.
export default function PaginaPerfilArtista() {
  return <ArtistProfile />;
}
