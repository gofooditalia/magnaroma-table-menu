'use client';

import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';

export default function Header() {
  const { language } = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/magnaroma.svg"
              alt="Magna Roma Logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
            <p className="text-xs md:text-sm text-gray-600 font-light ml-2">
              {language === 'it' ? 'Trattoria & Pinseria' : 'Traditional Roman Cuisine'}
            </p>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

