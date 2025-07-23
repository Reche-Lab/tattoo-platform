// app/sitemap.js
import { artistas } from '@/data/artistas';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Páginas dos artistas
  const artistUrls = artistas.map((artista ) => ({
    url: `${baseUrl}/artistas/${artista.id}`,
    lastModified: new Date(),
  }));

  // Outras páginas estáticas
  const staticUrls = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/artistas`, lastModified: new Date() },
    { url: `${baseUrl}/nossa-historia`, lastModified: new Date() },
    { url: `${baseUrl}/contato`, lastModified: new Date() },
  ];

  return [...staticUrls, ...artistUrls];
}
