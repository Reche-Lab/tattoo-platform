// app/components/MysticObject.js (versão atualizada)

'use client';

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three'; // Importe o useSpring e o 'a'

// O 'a.Icosahedron' é um componente que pode ser animado pelo React Spring
const AnimatedIcosahedron = a(Icosahedron);

export default function MysticObject() {
  const meshRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Hook do React Spring para animar a escala
  const { scale } = useSpring({
    scale: isClicked ? 1.5 : 1, // O valor alvo da escala
    config: { mass: 1, tension: 30, friction: 50 }, // Configuração da "física" da animação
  });

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
      if (isHovered) {
        meshRef.current.rotation.y += delta * 0.5;
      }
    }
  });

  return (
    <AnimatedIcosahedron
      ref={meshRef}
      // A propriedade 'scale' agora é controlada pelo useSpring
      scale={scale}
      onClick={() => setIsClicked(!isClicked)}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      args={[1, 1]}
    >
      <meshStandardMaterial 
        color={isHovered ? '#f0f' : '#9e00ff'}
        emissive={isHovered ? '#f0f' : '#9e00ff'}
        emissiveIntensity={isHovered ? 0.5 : 0.1}
        metalness={0.1}
        roughness={0.2}
        wireframe
      />
    </AnimatedIcosahedron>
  );
}
