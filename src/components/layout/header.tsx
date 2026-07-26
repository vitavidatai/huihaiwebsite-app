'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { Language, getDictionary } from '@/lib/i18n';
import { LanguageSwitcher } from '../ui/language-switcher';
import { UserAuthButton } from '../ui/user-auth-button';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const dict = getDictionary(currentLang);

  const navLinks = [
    { href: '/', label: dict.nav.home },
    { href: '/products', label: dict.nav.products },
    { href: '/about', label: dict.nav.about },
    { href: '/oem-odm', label: dict.nav.oem },
    { href: '/certificates', label: dict.nav.certificates },
    { href: '/contact', label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E5E0D8] transition-colors">
      {/* Top Warm B2B Trust Bar */}
      <div className="w-full bg-[#F5F2EB] text-[#5E5A56] py-1.5 px-4 text-xs font-mono border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#7A8B7B] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              {dict.nav.topBarBadge}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[#8C8883]">
            <span>Tel: +86-13372119011 | Email: shenfengxs@163.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[#2D2B2A] flex items-center justify-center text-white font-bold text-base shadow-sm">
            <Sparkles className="w-4 h-4 text-[#F5F2EB]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[#2D2B2A] text-base tracking-tight group-hover:text-[#4A6B82] transition-colors">
              {dict.nav.companyName}
            </span>
            <span className="text-[10px] font-mono text-[#8C8883] uppercase tracking-wider">
              {dict.nav.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-[#4A6B82] bg-[#F0F4F7] font-semibold'
                    : 'text-[#5E5A56] hover:text-[#2D2B2A] hover:bg-[#F5F2EB]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Tools */}
        <div className="hidden lg:flex items-center space-x-3">
          <UserAuthButton currentLang={currentLang} />
          <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#2D2B2A] hover:bg-[#3D3A39] rounded-xl transition-all shadow-sm active:scale-95"
          >
            <span>{dict.nav.requestQuote}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F5F2EB]" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <UserAuthButton currentLang={currentLang} />
          <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2D2B2A] hover:bg-[#F5F2EB] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E5E0D8] bg-[#FAF9F6] px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium ${
                  isActive
                    ? 'text-[#4A6B82] bg-[#F0F4F7] font-semibold'
                    : 'text-[#2D2B2A] hover:bg-[#F5F2EB]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-[#E5E0D8] flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 px-4 text-sm font-semibold text-white bg-[#2D2B2A] rounded-xl shadow-sm"
            >
              {dict.nav.requestQuote}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
