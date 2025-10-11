'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
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
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const { language } = useTranslation();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handleClick = () => {
    if (!spanRef.current) return;
    
    const rect = spanRef.current.getBoundingClientRect();
    setPosition({
      top: rect.top + window.scrollY,
      left: rect.left + rect.width / 2 + window.scrollX,
    });
    setIsOpen(!isOpen);
  };

  const tooltip = mounted && isOpen ? (
    <div
      ref={tooltipRef}
      style={{
        position: 'absolute',
        top: `${position.top - 8}px`,
        left: `${position.left}px`,
        transform: 'translate(-50%, -100%)',
      }}
      className="w-56 z-[9999] animate-in fade-in slide-in-from-bottom-2 duration-200"
    >
      {/* Freccia verso il basso */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
        <div className="border-6 border-transparent border-t-white" />
      </div>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-0.5">
        <div className="border-6 border-transparent border-t-[#D4AF37]/20" />
      </div>

      {/* Contenuto tooltip */}
      <div className="bg-white rounded-lg shadow-lg border border-[#D4AF37]/20 p-3 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="pr-5 text-gray-700 text-xs leading-relaxed">
          {info[language]}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <span
        ref={spanRef}
        onClick={handleClick}
        className="underline decoration-dotted decoration-[#D4AF37] cursor-help hover:text-[#D4AF37] transition-colors"
        title={language === 'it' ? 'Clicca per info ingredienti' : 'Click for ingredient info'}
      >
        {term}
      </span>
      {mounted && tooltip && createPortal(tooltip, document.body)}
    </>
  );
}

