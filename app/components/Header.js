// app/components/Header.js (versão final minimalista)

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Transition } from '@headlessui/react';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/artistas', label: 'Artistas' },
    { href: '/nossa-historia', label: 'A História' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header className="absolute top-0 left-0 z-20 w-full p-4 md:p-8">
      {/* O container agora centraliza seu conteúdo com 'justify-center' */}
      <div className="container mx-auto flex justify-center items-center">
        
        {/* O LOGO FOI REMOVIDO DAQUI */}

        {/* NAVEGAÇÃO PARA DESKTOP */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-white font-semibold uppercase tracking-widest transition-colors text-sm
                ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                  ? 'text-purple-400'
                  : 'hover:text-purple-400'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* BOTÃO HAMBÚRGUER PARA MOBILE */}
        {/* Este botão agora precisa ser posicionado de forma absoluta para não interferir na centralização */}
        <div className="md:hidden absolute top-4 right-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2" // Adicionado padding para área de clique maior
            aria-label="Abrir menu"
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* PAINEL DO MENU MOBILE (sem alterações) */}
      <Transition
        show={isOpen}
        as="div"
        className="md:hidden fixed inset-0 z-30"
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white focus:outline-none p-2"
              aria-label="Fechar menu"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl text-white font-thin uppercase tracking-widest transition-colors
                  ${pathname === link.href ? 'text-purple-400' : 'hover:text-purple-400'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Transition>
    </header>
  );
}
