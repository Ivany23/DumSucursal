import type { Metadata } from 'next';
import { Outfit, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { MotionProvider } from '@/components/motion/MotionProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// next/font auto-downloads and self-hosts fonts — zero external requests, zero render blocking
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
  preload: false, // Secondary font — load async
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  preload: false, // Secondary font — load async
});

export const metadata: Metadata = {
  title: 'DUM Sociedade Lda | Armazém Moderno & Experiência de Compra',
  description:
    'Apresentação institucional e catálogo do armazém DUM Sociedade Lda. Produtos alimentares, bebidas, laticínios, congelados, higiene e limpeza com qualidade e atendimento de confiança.',
  keywords: [
    'DUM Sociedade Lda',
    'Armazém DUM',
    'Supermercado Moçambique',
    'Armazém Maputo',
    'Produtos Alimentares',
    'Bebidas Moçambique',
    'Mercearia & Essenciais',
    'Laticínios e Frescos',
    'Congelados',
  ],
  openGraph: {
    title: 'DUM Sociedade Lda | Tudo o que precisa. Num só lugar.',
    description:
      'Uma experiência de compra moderna, acolhedora e com variedade premium para famílias e empresas.',
    type: 'website',
    locale: 'pt_AO',
  },
  icons: {
    icon: '/images/logo/DumLogo1.png',
    apple: '/images/logo/DumLogo1.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" data-scroll-behavior="smooth" suppressHydrationWarning className={`${outfit.variable} ${playfair.variable} ${jakarta.variable}`}>
      <body className="bg-white text-dum-text-primary antialiased selection:bg-dum-primary selection:text-white min-h-screen flex flex-col justify-between font-[family-name:var(--font-outfit)]">
        <MotionProvider>
          <SmoothScroll>
            <Navbar />
            <main className="flex-grow pt-0">{children}</main>
            <Footer />
          </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
