'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Dish } from '@/types/menu';
import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';
import { parseIngredients } from '@/utils/ingredientParser';

interface DishCardProps {
  dish: Dish;
}

const allergenTranslations: Record<string, { it: string; en: string }> = {
  glutine: { it: 'Glutine', en: 'Gluten' },
  crostacei: { it: 'Crostacei', en: 'Crustaceans' },
  uova: { it: 'Uova', en: 'Eggs' },
  pesce: { it: 'Pesce', en: 'Fish' },
  arachidi: { it: 'Arachidi', en: 'Peanuts' },
  soia: { it: 'Soia', en: 'Soy' },
  lattosio: { it: 'Lattosio', en: 'Lactose' },
  'frutta-secca': { it: 'Frutta secca', en: 'Nuts' },
  sedano: { it: 'Sedano', en: 'Celery' },
  senape: { it: 'Senape', en: 'Mustard' },
  sesamo: { it: 'Sesamo', en: 'Sesame' },
  solfiti: { it: 'Solfiti', en: 'Sulphites' },
  lupini: { it: 'Lupini', en: 'Lupin' },
  molluschi: { it: 'Molluschi', en: 'Molluscs' },
};

export default function DishCard({ dish }: DishCardProps) {
  const { t, language } = useTranslation();
  const [imageError, setImageError] = useState(false);
  const placeholderImage = '/images/dishes/dish_placeholder.svg';

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#FFF8E7] to-[#D4AF37]/20">
        <Image
          src={imageError ? placeholderImage : dish.image}
          alt={t(dish.name)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`${imageError ? 'object-contain p-8' : 'object-cover'} hover:scale-105 transition-transform duration-500`}
          priority={false}
          onError={() => setImageError(true)}
        />
        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4AF37] to-[#C4A037] text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
          <span className="font-bold text-lg">€{dish.price}</span>
        </div>
      </div>
      
      <div className="p-4 md:p-5">
        <h3 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-gray-900 mb-2 leading-tight">
          {t(dish.name)}
        </h3>
        
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 min-h-[3em]">
          {parseIngredients(t(dish.description))}
        </p>
        
        {dish.allergens && dish.allergens.length > 0 && (
          <div className="mt-4 space-y-3">
            <div className="flex flex-wrap gap-2">
              {dish.allergens.map((allergen) => (
                <span
                  key={allergen}
                  className="text-xs px-2.5 py-1 bg-amber-50 text-amber-800 rounded-full border border-amber-200"
                >
                  {allergenTranslations[allergen]?.[language] || allergen}
                </span>
              ))}
            </div>
            <Link
              href="/allergeni"
              className="inline-flex items-center gap-1.5 text-sm text-[#8B0000] hover:text-[#6B0000] font-medium transition-colors"
            >
              <span>ℹ️</span>
              {language === 'it' ? 'Vedi info allergeni' : 'See allergen info'}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

