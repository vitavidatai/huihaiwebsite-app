'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/lib/i18n';
import { AuthProvider } from '@/context/auth-context';
import { Header } from './header';
import { Footer } from './footer';

interface ClientLayoutProps {
  children: (lang: Language) => React.ReactNode;
}

export const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('huihai_lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'zh' || savedLang === 'ja')) {
      setCurrentLang(savedLang);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('huihai_lang', lang);
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
        <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
        <main className="flex-1">
          {children(currentLang)}
        </main>
        <Footer currentLang={currentLang} />
      </div>
    </AuthProvider>
  );
};
