'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Factory,
  CheckCircle2,
  Sliders,
  Mail,
  Zap,
  Award
} from 'lucide-react';
import { ClientLayout } from '@/components/layout/client-layout';
import { getDictionary, Language } from '@/lib/i18n';
import { PRODUCTS_DATA } from '@/lib/products-data';
import { ProductCard } from '@/components/ui/product-card';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';

export default function HomePage() {
  return (
    <ClientLayout>
      {(lang: Language) => {
        const dict = getDictionary(lang);
        const featuredProducts = PRODUCTS_DATA;

        return (
          <div className="space-y-24 pb-20">
            {/* 1. HERO SECTION (Warm, Spacious, Muji & Aesop Inspired) */}
            <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#E5E0D8] bg-[#FAF9F6]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Left Text */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F2EB] border border-[#E5E0D8] text-xs font-mono text-[#5E5A56]">
                      <ShieldCheck className="w-4 h-4 text-[#7A8B7B]" />
                      <span>{dict.hero.badge}</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2B2A] tracking-tight leading-[1.15]">
                      {dict.hero.title}
                    </h1>

                    <p className="text-base sm:text-lg text-[#5E5A56] leading-relaxed max-w-2xl">
                      {dict.hero.subtitle}
                    </p>

                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      <Link
                        href="/products"
                        className="px-6 py-3.5 text-xs font-semibold text-white bg-[#2D2B2A] hover:bg-[#3D3A39] rounded-xl shadow-sm transition-all flex items-center gap-2"
                      >
                        <span>{dict.hero.ctaProducts}</span>
                        <ArrowRight className="w-4 h-4 text-[#F5F2EB]" />
                      </Link>

                      <Link
                        href="/contact"
                        className="px-6 py-3.5 text-xs font-semibold text-[#2D2B2A] bg-[#F5F2EB] hover:bg-[#EFECE6] rounded-xl border border-[#E5E0D8] transition-all"
                      >
                        {dict.hero.ctaQuote}
                      </Link>
                    </div>

                    {/* Subtle Trust Indicators */}
                    <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-[#65625F]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#7A8B7B]" />
                        <span>{dict.home.heroTrust1}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#7A8B7B]" />
                        <span>{dict.home.heroTrust2}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#7A8B7B]" />
                        <span>{dict.home.heroTrust3}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#7A8B7B]" />
                        <span>{dict.home.heroTrust4}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Product Photography */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-3xl overflow-hidden shadow-soft bg-white border border-[#E5E0D8] p-3">
                      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5F2EB]">
                        <img
                          src="/images/factory/factory-overview.png"
                          alt="Suzhou Huihai Production Facility"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. COMPANY INTRODUCTION SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E0D8] shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-mono font-semibold text-[#4A6B82] uppercase tracking-wider">
                    {dict.nav.about}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2B2A]">
                    {dict.home.introTitle}
                  </h2>
                  <p className="text-sm text-[#5E5A56] leading-relaxed">
                    {dict.home.introText}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-[#65625F]">
                    <span className="inline-block px-3 py-1 bg-[#F5F2EB] border border-[#E5E0D8] rounded-md">
                      {dict.certificates.patentTitle}
                    </span>
                    <span className="inline-block px-3 py-1 bg-[#F5F2EB] border border-[#E5E0D8] rounded-md">
                      {dict.contact.addressVal}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#E5E0D8] bg-[#F5F2EB]">
                    <img
                      src="/images/factory/facility-overview-1.png"
                      alt="Suzhou Huihai Facility Overview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 3. OFFICIAL PRODUCT CATEGORIES GRID */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-[#E5E0D8] pb-4">
                <div>
                  <span className="text-xs font-mono font-semibold text-[#4A6B82] uppercase tracking-wider">
                    {dict.products.title}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2B2A] mt-1">
                    {dict.home.catTitle}
                  </h2>
                </div>
                <Link
                  href="/products"
                  className="text-xs font-semibold text-[#4A6B82] hover:underline flex items-center gap-1 font-mono"
                >
                  <span>{dict.home.viewAll}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    currentLang={lang}
                    onSelect={() => {
                      window.location.href = `/products`;
                    }}
                  />
                ))}
              </div>
            </section>

            {/* 4. OEM & ODM CAPABILITIES SECTION */}
            <section className="bg-[#F5F2EB] py-16 border-y border-[#E5E0D8]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs font-mono font-semibold text-[#4A6B82] uppercase tracking-wider">
                    {dict.oem.matrixTitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2B2A]">
                    {dict.home.oemTitle}
                  </h2>
                  <p className="text-sm text-[#5E5A56]">
                    {dict.home.oemSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
                  <div className="bg-white p-6 rounded-2xl border border-[#E5E0D8] space-y-2 shadow-soft">
                    <span className="text-xl font-black font-mono text-[#4A6B82]">01</span>
                    <h3 className="font-bold text-sm text-[#2D2B2A]">{dict.oem.step1Title}</h3>
                    <p className="text-[#65625F]">{dict.oem.step1Text}</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-[#E5E0D8] space-y-2 shadow-soft">
                    <span className="text-xl font-black font-mono text-[#4A6B82]">02</span>
                    <h3 className="font-bold text-sm text-[#2D2B2A]">{dict.oem.step2Title}</h3>
                    <p className="text-[#65625F]">{dict.oem.step2Text}</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-[#E5E0D8] space-y-2 shadow-soft">
                    <span className="text-xl font-black font-mono text-[#4A6B82]">03</span>
                    <h3 className="font-bold text-sm text-[#2D2B2A]">{dict.oem.step3Title}</h3>
                    <p className="text-[#65625F]">{dict.oem.step3Text}</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-[#E5E0D8] space-y-2 shadow-soft">
                    <span className="text-xl font-black font-mono text-[#4A6B82]">04</span>
                    <h3 className="font-bold text-sm text-[#2D2B2A]">{dict.oem.step4Title}</h3>
                    <p className="text-[#65625F]">{dict.oem.step4Text}</p>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <Link
                    href="/oem-odm"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#2D2B2A] hover:bg-[#3D3A39] rounded-xl transition-all shadow-sm"
                  >
                    <span>{dict.home.configureSpec}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F5F2EB]" />
                  </Link>
                </div>
              </div>
            </section>

            {/* 5. FACTORY & MANUFACTURING SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-xs font-mono font-semibold text-[#4A6B82] uppercase tracking-wider">
                  {dict.home.mfgTitle}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2B2A]">
                  {dict.home.mfgTitle}
                </h2>
                <p className="text-sm text-[#5E5A56]">
                  {dict.home.mfgSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Photo Frame */}
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#E5E0D8] bg-[#F5F2EB] shadow-soft">
                  <img
                    src="/images/factory/facility-overview-2.png"
                    alt="Automated Electrostatic Duster Production Lines"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Pillars */}
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] space-y-1 shadow-soft">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#2D2B2A]">
                      <Factory className="w-4 h-4 text-[#4A6B82]" />
                      <span>{dict.about.pillar1Title}</span>
                    </div>
                    <p className="text-xs text-[#65625F]">
                      {dict.about.pillar1Text}
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] space-y-1 shadow-soft">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#2D2B2A]">
                      <Zap className="w-4 h-4 text-[#4A6B82]" />
                      <span>{dict.about.pillar2Title}</span>
                    </div>
                    <p className="text-xs text-[#65625F]">
                      {dict.about.pillar2Text}
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] space-y-1 shadow-soft">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#2D2B2A]">
                      <Sliders className="w-4 h-4 text-[#4A6B82]" />
                      <span>{dict.about.pillar3Title}</span>
                    </div>
                    <p className="text-xs text-[#65625F]">
                      {dict.about.pillar3Text}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. CERTIFICATES & COMPLIANCE SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E0D8] shadow-soft flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2 max-w-xl">
                  <span className="text-xs font-mono font-semibold text-[#4A6B82] uppercase tracking-wider">
                    {dict.home.trustTitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2D2B2A]">
                    ISO 9001:2015 & SMETA v6.1
                  </h3>
                  <p className="text-xs text-[#5E5A56]">
                    {dict.home.trustSubtitle}
                  </p>
                </div>

                <Link
                  href="/certificates"
                  className="px-6 py-3 text-xs font-semibold text-white bg-[#2D2B2A] hover:bg-[#3D3A39] rounded-xl shrink-0 transition-colors shadow-sm"
                >
                  {dict.home.viewCertificates}
                </Link>
              </div>
            </section>

            {/* 7. CONTACT & B2B INQUIRY SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
              <div className="bg-[#F5F2EB] border border-[#E5E0D8] rounded-3xl p-10 space-y-4">
                <h3 className="text-2xl font-extrabold text-[#2D2B2A]">
                  {dict.home.ctaTitle}
                </h3>
                <p className="text-sm text-[#5E5A56] max-w-xl mx-auto">
                  {dict.home.ctaSubtitle}
                </p>
                <div className="pt-2 flex justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-3.5 text-xs font-semibold text-white bg-[#2D2B2A] hover:bg-[#3D3A39] rounded-xl shadow-sm transition-all flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#F5F2EB]" />
                    <span>{dict.home.ctaBtn}</span>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        );
      }}
    </ClientLayout>
  );
}
