// app/components/Footer.js
'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-4 right-4 z-50">
      <Link 
        href="https://www.rechelab.com" 
        target="_blank"
        rel="noopener noreferrer"
        className="footer-signature"
      >
        Idealizado e produzido por Bruno Reche - {currentYear}
      </Link>
    </footer>
   );
}
