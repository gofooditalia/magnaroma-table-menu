'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import CategoryNav from '@/components/CategoryNav';
import DishCard from '@/components/DishCard';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import InfoBox from '@/components/InfoBox';
import { useTranslation } from '@/hooks/useTranslation';
import menuData from '@/data/menu.json';
import allergensData from '@/data/allergens.json';
import { MenuData } from '@/types/menu';

export default function Home() {
  const { t, language } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categoryRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const menu = menuData as MenuData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-150px 0px -50% 0px',
        threshold: 0,
      }
    );

    Object.values(categoryRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (categoryId: string) => {
    const element = categoryRefs.current[categoryId];
    if (element) {
      const headerHeight = 73;
      const navHeight = 56;
      const offset = headerHeight + navHeight + 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <CategoryNav
        categories={menu.categories}
        activeCategory={activeCategory}
        onCategoryClick={scrollToCategory}
      />
      <ScrollToTop />

      <main className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
        {/* Hero Section */}
        <section className="text-center mb-8 md:mb-12 py-6 md:py-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#8B0000] mb-3 md:mb-4 text-shadow leading-tight">
            {language === 'it' ? 'Il Nostro Menù' : 'Our Menu'}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
            {language === 'it'
              ? 'Scopri i sapori autentici della tradizione romana, preparati con passione e ingredienti di prima qualità'
              : 'Discover the authentic flavors of Roman tradition, prepared with passion and top quality ingredients'}
          </p>
        </section>

        {/* Menu Categories */}
        {menu.categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            ref={(el) => {
              categoryRefs.current[category.id] = el;
            }}
            className="mb-12 md:mb-16 scroll-mt-32"
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="h-0.5 md:h-1 flex-grow bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mx-4 md:mx-6 text-center whitespace-nowrap">
                {t(category.name)}
              </h3>
              <div className="h-0.5 md:h-1 flex-grow bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            </div>

            {/* Info box for Pinse Romane */}
            {category.id === 'pinse' && (
              <InfoBox
                title={language === 'it' ? 'Informazioni sulle Basi' : 'Information about Bases'}
                content={allergensData.note[language]}
                type="note"
              />
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
              {category.dishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          </section>
        ))}

      </main>

      <Footer />
    </div>
  );
}
