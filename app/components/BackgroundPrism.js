// app/components/BackgroundPrism.js
'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three'; // 'a' não está sendo usado, mas podemos deixar

function Prism() {
  const groupRef = useRef();

  // Rotação contínua e lenta no grupo inteiro
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.00;
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  // Usamos um <group> para que os dois cones girem juntos como um único objeto
  return (
    <group ref={groupRef} scale={0.7}>
      {/* 
        Cone Superior
        args: [radius, height, radialSegments]
        O cone é posicionado para cima no eixo Y.
      */}
      <mesh position={[0, 0.6, 0]}>
        <coneGeometry args={[1, 1.6, 30]} />
        <meshStandardMaterial 
          wireframe 
          color="#8A2BE2"
          emissive="#6A0DAD"
          emissiveIntensity={1}
        />
      </mesh>

      {/* 
        Cone Inferior
        Ele é rotacionado 180 graus no eixo X para apontar para baixo
        e posicionado para baixo no eixo Y para se encontrar com o cone superior.
      */}
      <mesh position={[0, -1, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[1, 1.6, 30]} />
        <meshStandardMaterial 
          wireframe 
          color="#8A2BE2"
          emissive="#6A0DAD"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}

export default function BackgroundPrism() {
  return (
    // 3. AUMENTAR A OPACIDADE DO CONTAINER
    // Estava 'opacity-15', vamos tentar 'opacity-25' ou 'opacity-30'
    <div className="absolute inset-0 -z-10 opacity-25"> 
      {/* 4. APROXIMAR A CÂMERA */}
      {/* A posição Z estava 5, vamos mudar para 4 para um leve "zoom" */}
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}> 
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={100} />
        <Prism />
      </Canvas>
    </div>
  );
}
