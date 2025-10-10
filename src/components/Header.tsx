'use client';

import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';

export default function Header() {
  const { language } = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        {/* Layout mobile: logo sx, switcher dx */}
        <div className="flex items-center justify-between md:hidden">
          <Image
            src="/magnaroma.svg"
            alt="Magna Roma Trattoria & Pinseria"
            width={140}
            height={50}
            className="h-10 w-auto"
            priority
          />
          <LanguageSwitcher />
        </div>

        {/* Layout desktop: logo centrato, switcher dx */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Spacer per bilanciare il layout */}
          <div className="w-[140px]"></div>
          
          {/* Logo centrato */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/magnaroma.svg"
              alt="Magna Roma Trattoria & Pinseria"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </div>
          
          {/* Language Switcher a destra */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

