'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function Footer() {
  const { language } = useTranslation();

  const locations = [
    { 
      city: 'Palermo', 
      address: 'Via Paolo Paternostro n.7',
      phone: '091 332213 - 3206729295'
    },
    { 
      city: 'Palermo', 
      address: 'Viale Strasburgo n.364',
      phone: '091 7283177 - 3922151234'
    },
    { 
      city: 'Catania', 
      address: 'Via Martino Cilestri n.95',
      phone: '095 0925271 - 3206529370'
    },
    { 
      city: 'Bagheria', 
      address: 'Via Ingegnere Giuseppe Bagnera 27/b',
      phone: '3895491937'
    },
    { 
      city: 'Cefalù', 
      address: 'Via Giuseppe Vazzana n.2',
      phone: '0921 442010'
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-[#FFF8E7] border-t-2 border-[#D4AF37] mt-16">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Image
              src="/magnaroma.png"
              alt="Magna Roma Logo"
              width={150}
              height={50}
              className="h-12 w-auto mx-auto md:mx-0 mb-3"
            />
            <p className="text-sm text-gray-600 mb-4">
              {language === 'it'
                ? 'Trattoria & Pinseria'
                : 'Traditional Roman Cuisine'}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              {language === 'it'
                ? 'Autentica cucina romana con i sapori della tradizione'
                : 'Authentic Roman cuisine with traditional flavors'}
            </p>
            <div className="flex justify-center md:justify-start">
              <Image
                src="/icon.svg"
                alt="Colosseo"
                width={48}
                height={48}
                className="w-12 h-12 opacity-70"
              />
            </div>
          </div>

          {/* Le Nostre Sedi */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              {language === 'it' ? 'Le Nostre Sedi' : 'Our Locations'}
            </h4>
            <ul className="space-y-3 text-sm text-gray-700 mb-4">
              {locations.map((location, index) => (
                <li key={index} className="leading-relaxed">
                  <span className="font-semibold text-[#8B0000]">
                    {location.city}
                  </span>
                  <br />
                  <span className="text-xs block">{location.address}</span>
                  {location.phone && (
                    <span className="text-xs block">📞 {location.phone}</span>
                  )}
                </li>
              ))}
            </ul>
            <a 
              href="mailto:info@magnaromatrattoria.com"
              className="text-sm text-[#8B0000] hover:underline inline-flex items-center gap-1"
            >
              ✉️ info@magnaromatrattoria.com
            </a>
          </div>

          {/* Links Utili */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              {language === 'it' ? 'Informazioni' : 'Information'}
            </h4>
            <ul className="space-y-3 mb-6">
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

            {/* Social Media */}
            <div>
              <h5 className="text-sm font-semibold text-gray-900 mb-3">
                {language === 'it' ? 'Seguici' : 'Follow Us'}
              </h5>
              <div className="flex gap-3 justify-center md:justify-start">
                <a
                  href="https://www.facebook.com/magnaromatrattoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-[#8B0000] transition-colors"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a
                  href="https://www.instagram.com/magna.roma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-[#8B0000] transition-colors"
                  aria-label="Instagram"
                >
                  📸
                </a>
                <a
                  href="https://www.tripadvisor.it/Restaurant_Review-g187890-d16869145-Reviews-Magna_Roma_Trattoria-Palermo_Province_of_Palermo_Sicily.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-[#8B0000] transition-colors"
                  aria-label="TripAdvisor"
                >
                  🦉
                </a>
              </div>
            </div>
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

