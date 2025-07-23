/* eslint-disable react-hooks/exhaustive-deps */
// app/components/PortfolioModal.js
'use client';

import { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function PortfolioModal({ portfolio, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % portfolio.length;
    setCurrentIndex(nextIndex);
  };

  const goToPreviousImage = () => {
    const prevIndex = (currentIndex - 1 + portfolio.length) % portfolio.length;
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') goToNextImage();
      if (e.key === 'ArrowLeft') goToPreviousImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  if (initialIndex === null || currentIndex === null) {
    return null;
  }

  return (
    <Transition show={initialIndex !== null} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        {/* Backdrop */}
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
        </Transition.Child>

        {/* Container para centralizar o painel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            
            {/* O Dialog.Panel agora envolve TUDO: a imagem e as setas */}
            <Dialog.Panel className="relative w-full max-w-4xl">
              {/* Botão Seta Esquerda (AGORA DENTRO DO PAINEL) */}
              <button onClick={goToPreviousImage} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="Imagem anterior">
                <ChevronLeftIcon className="h-8 w-8 text-white" />
              </button>

              {/* Imagem Central */}
              <div className="w-full h-auto max-h-[80vh] flex items-center justify-center">
                <Image
                  src={portfolio[currentIndex].src}
                  alt={portfolio[currentIndex].alt}
                  width={1200}
                  height={1200}
                  className="w-auto h-auto max-h-[80vh] max-w-full object-contain rounded-lg"
                />
              </div>

              {/* Botão Seta Direita (AGORA DENTRO DO PAINEL) */}
              <button onClick={goToNextImage} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="Próxima imagem">
                <ChevronRightIcon className="h-8 w-8 text-white" />
              </button>
            </Dialog.Panel>

          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
