'use client';

import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';
import { useGlutenFilter } from '@/contexts/GlutenFilterContext';

export default function Header() {
  const { language } = useTranslation();
  const { isGlutenFree, toggleGlutenFilter } = useGlutenFilter();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        {/* Layout mobile: logo sx, filtri dx */}
        <div className="flex items-center justify-between md:hidden">
          <Image
            src="/magnaroma.png"
            alt="Magna Roma Trattoria & Pinseria"
            width={140}
            height={50}
            className="h-10 w-auto"
            priority
          />
          
          {/* Gruppo controlli: filtro + lingua */}
          <div className="flex items-center gap-2">
            {/* Pulsante filtro celiaci */}
            <button 
              onClick={toggleGlutenFilter}
              className={`p-2 rounded-lg transition-colors ${
                isGlutenFree 
                  ? 'bg-amber-100 hover:bg-amber-200' 
                  : 'hover:bg-gray-100'
              }`}
              aria-label="Filtro senza glutine"
              aria-pressed={isGlutenFree}
            >
              <span className="text-xl">🌾</span>
            </button>
            
            <LanguageSwitcher />
          </div>
        </div>

        {/* Layout desktop: logo centrato, filtri dx */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Spacer per bilanciare il layout */}
          <div className="w-[140px]"></div>
          
          {/* Logo centrato */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/magnaroma.png"
              alt="Magna Roma Trattoria & Pinseria"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </div>
          
          {/* Gruppo controlli a destra */}
          <div className="flex items-center gap-3">
            {/* Pulsante filtro celiaci */}
            <button 
              onClick={toggleGlutenFilter}
              className={`p-2.5 rounded-lg transition-colors ${
                isGlutenFree 
                  ? 'bg-amber-100 hover:bg-amber-200' 
                  : 'hover:bg-gray-100'
              }`}
              aria-label="Filtro senza glutine"
              aria-pressed={isGlutenFree}
            >
              <span className="text-2xl">🌾</span>
            </button>
            
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

