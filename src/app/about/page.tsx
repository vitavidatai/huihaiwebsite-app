'use client';

import React from 'react';
import {
  Factory,
  Zap,
  Sliders,
  ShieldCheck,
  MapPin,
  Award
} from 'lucide-react';
import { ClientLayout } from '@/components/layout/client-layout';
import { getDictionary, Language } from '@/lib/i18n';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';

export default function AboutPage() {
  return (
    <ClientLayout>
      {(lang: Language) => {
        const dict = getDictionary(lang);

        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
            {/* Header Title */}
            <div className="space-y-3 max-w-3xl">
              <span className="text-xs font-mono font-semibold text-[#4A6B82] uppercase tracking-wider">
                {dict.nav.about}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D2B2A]">
                {dict.about.title}
              </h1>
              <p className="text-sm text-[#5E5A56] leading-relaxed">
                {dict.about.subtitle}
              </p>
            </div>

            {/* Story & Factory Overview Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-2xl font-bold text-[#2D2B2A]">
                  {dict.about.storyTitle}
                </h2>
                <p className="text-sm text-[#5E5A56] leading-relaxed">
                  {dict.about.storyText}
                </p>

                <div className="p-5 bg-white rounded-2xl border border-[#E5E0D8] space-y-2.5 text-xs font-mono text-[#5E5A56] shadow-soft">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#4A6B82] shrink-0 mt-0.5" />
                    <span>{dict.about.addressValFull}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Factory className="w-4 h-4 text-[#4A6B82] shrink-0" />
                    <span>{dict.about.facilityVal}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#4A6B82] shrink-0" />
                    <span>{dict.about.patentsVal}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#4A6B82] shrink-0" />
                    <span>{dict.about.accreditationVal}</span>
                  </div>
                </div>
              </div>

              {/* Photo Frame for Factory Exterior */}
              <div className="lg:col-span-6">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#E5E0D8] bg-[#F5F2EB] shadow-soft">
                  <img
                    src="/images/factory/factory-overview.png"
                    alt="Suzhou Huihai Manufacturing Plant Facility"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#2D2B2A]">
                {dict.about.principlesTitle}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-[#E5E0D8] space-y-3 shadow-soft">
                  <div className="w-9 h-9 rounded-xl bg-[#F0F4F7] text-[#4A6B82] flex items-center justify-center">
                    <Factory className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base text-[#2D2B2A]">
                    {dict.about.pillar1Title}
                  </h3>
                  <p className="text-xs text-[#5E5A56] leading-relaxed">
                    {dict.about.pillar1Text}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#E5E0D8] space-y-3 shadow-soft">
                  <div className="w-9 h-9 rounded-xl bg-[#F0F4F7] text-[#4A6B82] flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base text-[#2D2B2A]">
                    {dict.about.pillar2Title}
                  </h3>
                  <p className="text-xs text-[#5E5A56] leading-relaxed">
                    {dict.about.pillar2Text}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#E5E0D8] space-y-3 shadow-soft">
                  <div className="w-9 h-9 rounded-xl bg-[#F0F4F7] text-[#4A6B82] flex items-center justify-center">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base text-[#2D2B2A]">
                    {dict.about.pillar3Title}
                  </h3>
                  <p className="text-xs text-[#5E5A56] leading-relaxed">
                    {dict.about.pillar3Text}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#E5E0D8] space-y-3 shadow-soft">
                  <div className="w-9 h-9 rounded-xl bg-[#F0F4F7] text-[#4A6B82] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base text-[#2D2B2A]">
                    {dict.about.pillar4Title}
                  </h3>
                  <p className="text-xs text-[#5E5A56] leading-relaxed">
                    {dict.about.pillar4Text}
                  </p>
                </div>
              </div>
            </div>

            {/* 5-Stage QC Workflow */}
            <div className="bg-[#F5F2EB] rounded-3xl p-8 sm:p-10 border border-[#E5E0D8] space-y-8">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-[#4A6B82] uppercase tracking-wider">
                  {dict.about.qcTitle}
                </span>
                <h2 className="text-2xl font-bold text-[#2D2B2A]">
                  {dict.about.qcTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs font-mono">
                {[dict.about.qc1, dict.about.qc2, dict.about.qc3, dict.about.qc4, dict.about.qc5].map((step, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-[#E5E0D8] space-y-2 shadow-soft">
                    <div className="text-[#7A8B7B] font-bold">STAGE 0{i + 1}</div>
                    <div className="text-[#2D2B2A] leading-snug">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Frames */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#E5E0D8] bg-[#F5F2EB] shadow-soft">
                <img
                  src="/images/factory/facility-overview-1.png"
                  alt={dict.about.processingLinesAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#E5E0D8] bg-[#F5F2EB] shadow-soft">
                <img
                  src="/images/factory/facility-overview-2.png"
                  alt={dict.about.qcTestingAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        );
      }}
    </ClientLayout>
  );
}
