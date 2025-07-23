// app/components/CustomMap.js
'use client';

import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { siteConfig } from '@/config/site';

export default function CustomMap() {
  const position = { lat: -23.432664608137888, lng: -45.07011687349329 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Map
        defaultCenter={position}
        defaultZoom={14.9}
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
        disableDefaultUI={true}
      >
        <AdvancedMarker position={position} title={siteConfig.name} />
      </Map>
    </APIProvider>
  );
}
