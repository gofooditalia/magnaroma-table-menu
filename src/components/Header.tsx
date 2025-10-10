'use client';

import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';

export default function Header() {
  const { language } = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#8B0000] tracking-tight leading-tight">
              Magna Roma
            </h1>
            <p className="text-xs md:text-sm text-gray-600 font-light leading-tight">
              {language === 'it' ? 'Trattoria & Pinseria' : 'Traditional Roman Cuisine'}
            </p>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

