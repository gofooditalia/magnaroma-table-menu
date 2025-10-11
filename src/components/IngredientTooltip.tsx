'use client';

import { useState } from 'react';
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

  return (
    <>
      <span
        onClick={() => setIsOpen(true)}
        className="underline decoration-dotted decoration-[#D4AF37] cursor-help hover:text-[#D4AF37] transition-colors"
        title={language === 'it' ? 'Clicca per info ingredienti' : 'Click for ingredient info'}
      >
        {term}
      </span>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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

            <div className="flex items-start gap-3 mb-4">
              <div className="bg-[#FFF8E7] p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#D4AF37]"
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
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                  {term}
                </h3>
                <p className="text-sm text-gray-500">
                  {language === 'it' ? 'Composizione' : 'Composition'}
                </p>
              </div>
            </div>

            <div className="bg-[#FFF8E7] rounded-lg p-4 border border-[#D4AF37]/30">
              <p className="text-gray-700 leading-relaxed">
                {info[language]}
              </p>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#C4A037] text-white rounded-full hover:shadow-lg transition-shadow font-medium"
              >
                {language === 'it' ? 'Chiudi' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

