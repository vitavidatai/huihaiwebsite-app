'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { Language, getDictionary } from '@/lib/i18n';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const dict = getDictionary(currentLang);

  return (
    <footer className="bg-[#F5F2EB] text-[#2D2B2A] border-t border-[#E5E0D8]">
      {/* Top Compliance Bar */}
      <div className="border-b border-[#E5E0D8] py-5 bg-[#EFECE6]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <span className="text-[#65625F] uppercase tracking-wider">{dict.footer.accreditationLabel}</span>
          <div className="flex flex-wrap items-center gap-4 text-[#2D2B2A]">
            <span className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-[#E5E0D8] shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7A8B7B]" /> ISO 9001:2015
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-[#E5E0D8] shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7A8B7B]" /> SMETA / Sedex Audit
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Company Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#2D2B2A] flex items-center justify-center text-white font-bold">
              <Sparkles className="w-4 h-4 text-[#F5F2EB]" />
            </div>
            <span className="font-bold text-[#2D2B2A] text-base tracking-tight">
              {dict.nav.companyName}
            </span>
          </div>
          <p className="text-xs text-[#5E5A56] leading-relaxed max-w-sm">
            {dict.footer.companyInfo}
          </p>
          <div className="pt-2 text-xs text-[#5E5A56] space-y-2 font-mono">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#4A6B82] shrink-0 mt-0.5" />
              <span>{dict.contact.addressVal}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#4A6B82] shrink-0" />
              <a href="mailto:shenfengxs@163.com" className="hover:text-[#2D2B2A] transition-colors font-semibold">
                shenfengxs@163.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#4A6B82] shrink-0" />
              <span>+86-13372119011</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-xs font-mono font-semibold text-[#2D2B2A] uppercase tracking-wider mb-4 border-l-2 border-[#4A6B82] pl-2">
            {dict.footer.quickLinks}
          </h4>
          <ul className="space-y-2.5 text-xs text-[#5E5A56]">
            <li><Link href="/" className="hover:text-[#2D2B2A] transition-colors">{dict.nav.home}</Link></li>
            <li><Link href="/products" className="hover:text-[#2D2B2A] transition-colors">{dict.nav.products}</Link></li>
            <li><Link href="/about" className="hover:text-[#2D2B2A] transition-colors">{dict.nav.about}</Link></li>
            <li><Link href="/oem-odm" className="hover:text-[#2D2B2A] transition-colors">{dict.nav.oem}</Link></li>
            <li><Link href="/certificates" className="hover:text-[#2D2B2A] transition-colors">{dict.nav.certificates}</Link></li>
            <li><Link href="/contact" className="hover:text-[#2D2B2A] transition-colors">{dict.nav.contact}</Link></li>
          </ul>
        </div>

        {/* Product Portfolio */}
        <div>
          <h4 className="text-xs font-mono font-semibold text-[#2D2B2A] uppercase tracking-wider mb-4 border-l-2 border-[#4A6B82] pl-2">
            {dict.footer.productRange}
          </h4>
          <ul className="space-y-2.5 text-xs text-[#5E5A56]">
            <li><Link href="/products" className="hover:text-[#2D2B2A] transition-colors">{dict.footer.rangeDusters}</Link></li>
            <li><Link href="/products" className="hover:text-[#2D2B2A] transition-colors">{dict.footer.rangeMops}</Link></li>
            <li><Link href="/products" className="hover:text-[#2D2B2A] transition-colors">{dict.footer.rangeWet}</Link></li>
            <li><Link href="/products" className="hover:text-[#2D2B2A] transition-colors">{dict.footer.rangeMicrofiber}</Link></li>
            <li><Link href="/products" className="hover:text-[#2D2B2A] transition-colors">{dict.footer.rangeEco}</Link></li>
          </ul>
        </div>

        {/* Export Support */}
        <div>
          <h4 className="text-xs font-mono font-semibold text-[#2D2B2A] uppercase tracking-wider mb-4 border-l-2 border-[#4A6B82] pl-2">
            {dict.footer.contactSupport}
          </h4>
          <p className="text-xs text-[#5E5A56] mb-4 leading-relaxed">
            {dict.footer.exportNotice}
          </p>
          <Link
            href="/contact"
            className="inline-block w-full text-center py-2.5 px-3 bg-[#2D2B2A] hover:bg-[#3D3A39] text-white font-medium text-xs rounded-xl shadow-sm transition-colors"
          >
            {dict.nav.requestQuote}
          </Link>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-[#E5E0D8] py-5 bg-[#EFECE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8C8883] gap-3">
          <p>{dict.footer.rights}</p>
          <p className="font-mono text-[11px]">
            {dict.footer.bottomNotice}
          </p>
        </div>
      </div>
    </footer>
  );
};
