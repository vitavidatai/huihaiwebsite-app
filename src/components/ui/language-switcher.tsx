'use client';

import React, { useState } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { Language } from '@/lib/i18n';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const LANGUAGES: { code: Language; name: string; label: string }[] = [
  { code: 'en', name: 'English', label: 'EN' },
  { code: 'ja', name: '日本語', label: 'JP' },
  { code: 'zh', name: '中文', label: 'CN' }
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLangObj = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#2D2B2A] bg-[#F5F2EB] hover:bg-[#EFECE6] rounded-lg border border-[#E5E0D8] transition-colors"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-[#65625F]" />
        <span>{activeLangObj.name}</span>
        <ChevronDown className={`w-3 h-3 text-[#8C8883] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute right-0 z-50 mt-1.5 w-36 rounded-xl bg-white border border-[#E5E0D8] shadow-soft py-1 text-xs">
            <div className="px-3 py-1.5 font-mono text-[10px] text-[#8C8883] uppercase border-b border-[#F5F2EB]">
              Select Language
            </div>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-left hover:bg-[#FAF9F6] transition-colors ${
                  currentLang === lang.code
                    ? 'font-semibold text-[#4A6B82] bg-[#F0F4F7]'
                    : 'text-[#2D2B2A]'
                }`}
              >
                <span>{lang.name}</span>
                {currentLang === lang.code && <Check className="w-3.5 h-3.5 text-[#4A6B82]" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
