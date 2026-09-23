'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { m, AnimatePresence } from 'framer-motion';
import { X, MapPin, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { StoreStatus } from '@/components/ui/StoreStatus';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navLinks,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-6">
            <Link href="/" onClick={onClose} className="flex items-center">
              <Image
                src="/images/logo/DumLogo1.png"
                alt="DUM Sociedade Lda"
                width={1071}
                height={634}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <button
              onClick={onClose}
              className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0B1B3A] hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links List */}
          <div className="py-8 flex flex-col gap-4">
            <div className="mb-2">
              <StoreStatus />
            </div>

            {navLinks.map((link, idx) => (
              <m.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between text-xl sm:text-2xl font-bold text-[#0B1B3A] hover:text-[#0066FF] transition-colors py-2.5 group border-b border-slate-100"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[#0066FF]" />
                </Link>
              </m.div>
            ))}
          </div>

          {/* Bottom Quick Contacts */}
          <div className="border-t border-slate-100 pt-6 flex flex-col gap-3">
            <Link
              href="/localizacao"
              onClick={onClose}
              className="flex items-center justify-center gap-3 p-3.5 rounded-xl bg-[#0066FF] text-white text-sm font-bold shadow-sm"
            >
              <MapPin className="w-4 h-4" />
              <span>Ver Localização & Como Chegar</span>
            </Link>

            <a
              href="https://wa.me/244900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Contactar pelo WhatsApp</span>
            </a>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};
