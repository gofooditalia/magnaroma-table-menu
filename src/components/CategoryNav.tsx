'use client';

import { Category } from '@/types/menu';
import { useTranslation } from '@/hooks/useTranslation';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string | null;
  onCategoryClick: (categoryId: string) => void;
}

export default function CategoryNav({ categories, activeCategory, onCategoryClick }: CategoryNavProps) {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-[73px] md:top-[81px] z-40 bg-gradient-to-r from-[#FFF8E7] to-white shadow-md border-b border-gray-200/50">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 px-4 py-3 min-w-max">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all touch-manipulation ${
                activeCategory === category.id
                  ? 'bg-[#8B0000] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 active:bg-gray-200 border border-gray-200'
              }`}
            >
              {t(category.name)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

