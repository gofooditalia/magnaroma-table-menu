'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

interface IngredientInfo {
  it: string;
  en: string;
}

interface IngredientTooltipProps {
  term: string;
  info: IngredientInfo;
}

export default function IngredientTooltip({ term, info }: IngredientTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useTranslation();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        spanRef.current &&
        !spanRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <span className="relative inline-block">
      <span
        ref={spanRef}
        onClick={() => setIsOpen(!isOpen)}
        className="underline decoration-dotted decoration-[#D4AF37] cursor-help hover:text-[#D4AF37] transition-colors"
        title={language === 'it' ? 'Clicca per info ingredienti' : 'Click for ingredient info'}
      >
        {term}
      </span>

      {isOpen && (
        <div
          ref={tooltipRef}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 sm:w-80 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          {/* Freccia verso il basso */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
            <div className="border-8 border-transparent border-t-white" />
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
            <div className="border-8 border-transparent border-t-[#D4AF37]/20" />
          </div>

          {/* Contenuto tooltip */}
          <div className="bg-white rounded-lg shadow-xl border border-[#D4AF37]/20 p-4">
            <div className="flex items-start gap-2 mb-2">
              <div className="flex-shrink-0 mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#D4AF37]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900 text-sm mb-1">
                  {term}
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  {language === 'it' ? 'Ingredienti' : 'Ingredients'}
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="bg-[#FFF8E7] rounded p-3 border border-[#D4AF37]/20">
              <div className="text-gray-700 text-sm leading-relaxed">
                {info[language]}
              </div>
            </div>
          </div>
        </div>
      )}
    </span>
  );
}

