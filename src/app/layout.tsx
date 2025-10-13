import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { GlutenFilterProvider } from "@/contexts/GlutenFilterContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Magna Roma Trattoria - Menu Digitale",
  description: "Scopri il menu della Magna Roma Trattoria, autentica cucina romana con i piatti della tradizione",
  keywords: "ristorante romano, menu digitale, cucina romana, trattoria, pinsa romana",
  openGraph: {
    title: "Magna Roma Trattoria - Menu Digitale",
    description: "Scopri il menu della Magna Roma Trattoria, autentica cucina romana con i piatti della tradizione",
    type: "website",
    images: [
      {
        url: '/magnaroma.png',
        width: 512,
        height: 512,
        alt: 'Magna Roma Trattoria Logo',
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#8B0000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#FFF8E7]`}
      >
        <LanguageProvider>
          <GlutenFilterProvider>
            {children}
          </GlutenFilterProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
