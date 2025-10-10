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
          <Image
            src="/magnaroma.svg"
            alt="Magna Roma Trattoria & Pinseria"
            width={180}
            height={60}
            className="h-12 md:h-14 w-auto"
            priority
          />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

