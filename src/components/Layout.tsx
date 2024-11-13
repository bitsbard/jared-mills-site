import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full">
        <Image
          src="/algorism_background.jpg"
          alt="Algorism Background"
          layout="fill"
          className="object-cover z-0"
          priority
        />
      </div>

      <header className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/algorism.png"
            alt="Algorism Logo"
            width={75}
            height={20}
            className="object-contain"
          />
        </Link>
        
        <nav className="flex items-center space-x-8">
          <Link href="/our-work" className="text-white hover:font-bold transition-all">
            Our Work
          </Link>
          <Link href="https://calendar.app.google/e9nTLXZvwe4vFtRg8" className="text-white hover:font-bold transition-all" target="_blank" rel="noopener noreferrer">
            Talk With Us
          </Link>
        </nav>
      </header>

      {children}

      <footer className="py-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <Image
              src="/algorism.png"
              alt="Algorism Logo"
              width={60}
              height={16}
              className="object-contain"
            />
            <p className="text-white text-center md:text-left">
              <strong>Transform your idea into an AI app in weeks</strong>
            </p>
          </div>
          <p className="text-center text-gray-400">
            © 2024 Algorism LLC. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
