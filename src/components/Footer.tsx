'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function Footer() {
  const { language } = useTranslation();

  const locations = [
    { city: 'Palermo', address: 'Via Paolo Paternostro, 7' },
    { city: 'Palermo', address: 'Viale Strasburgo, 364' },
    { city: 'Catania', address: 'Via Martino Cilestri, 95' },
    { city: 'Bagheria', address: 'Via Giuseppe Bagnera, 23' },
    { city: 'Cefalù', address: 'Via Giuseppe Vazzana, 2' },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-[#FFF8E7] border-t-2 border-[#D4AF37] mt-16">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-[#8B0000] mb-2">
              Magna Roma
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {language === 'it'
                ? 'Trattoria & Pinseria'
                : 'Traditional Roman Cuisine'}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {language === 'it'
                ? 'Autentica cucina romana con i sapori della tradizione'
                : 'Authentic Roman cuisine with traditional flavors'}
            </p>
          </div>

          {/* Le Nostre Sedi */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              {language === 'it' ? 'Le Nostre Sedi' : 'Our Locations'}
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {locations.map((location, index) => (
                <li key={index} className="leading-relaxed">
                  <span className="font-semibold text-[#8B0000]">
                    {location.city}
                  </span>
                  <br />
                  <span className="text-xs">{location.address}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Utili */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              {language === 'it' ? 'Informazioni' : 'Information'}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/allergeni"
                  className="inline-flex items-center gap-2 text-[#8B0000] hover:text-[#6B0000] font-medium transition-colors"
                >
                  <span className="text-lg">🛡️</span>
                  {language === 'it' ? 'Allergeni' : 'Allergens'}
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-[#8B0000] transition-colors"
                >
                  <span className="text-lg">🍝</span>
                  {language === 'it' ? 'Menu' : 'Menu'}
                </Link>
              </li>
              <li>
                <a
                  href="https://www.magnaromatrattoria.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-[#8B0000] transition-colors"
                >
                  <span className="text-lg">🌐</span>
                  {language === 'it' ? 'Sito Web' : 'Website'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Bottom Footer */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">
            {language === 'it'
              ? 'Chiamare il cameriere per ordinare'
              : 'Call the waiter to order'}
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Magna Roma Trattoria - {language === 'it' ? 'Tutti i diritti riservati' : 'All rights reserved'}
          </p>
        </div>
      </div>
    </footer>
  );
}

