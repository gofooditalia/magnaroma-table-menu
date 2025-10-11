'use client';

import { useTranslation } from '@/hooks/useTranslation';

interface InfoBoxProps {
  title?: string;
  content: string;
  type?: 'info' | 'warning' | 'note';
}

export default function InfoBox({ title, content, type = 'info' }: InfoBoxProps) {
  const { language } = useTranslation();

  const bgColors = {
    info: 'bg-blue-50 border-blue-200',
    warning: 'bg-amber-50 border-amber-200',
    note: 'bg-[#FFF8E7] border-[#D4AF37]',
  };

  const iconColors = {
    info: 'text-blue-600',
    warning: 'text-amber-600',
    note: 'text-[#D4AF37]',
  };

  return (
    <div className={`${bgColors[type]} border-2 rounded-lg p-4 md:p-5 mb-6 md:mb-8`}>
      <div className="flex items-start gap-3">
        <div className={`${iconColors[type]} mt-0.5 flex-shrink-0`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
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
        <div className="flex-1">
          {title && (
            <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
              {title}
            </h4>
          )}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

