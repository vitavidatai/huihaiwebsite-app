'use client';

import React from 'react';
import { ClientLayout } from '@/components/layout/client-layout';
import { getDictionary, Language } from '@/lib/i18n';
import { OEMCalculator } from '@/components/ui/oem-calculator';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';

export default function OEMPage() {
  const [activeSceneIndex, setActiveSceneIndex] = React.useState(0);

  const sceneImages = [
    { id: 'szhh-01', model: '# NO.SZHH-01', name: '360° Duster Scene', img: '/images/products/szhh-01-scene.jpg' },
    { id: 'szhh-02', model: '# NO.SZHH-02', name: '180° Duster Scene', img: '/images/products/szhh-02-scene.jpg' },
    { id: 'szhh-03', model: '# NO.SZHH-03', name: '270° Duster Scene', img: '/images/products/szhh-03-scene.jpg' },
    { id: 'szhh-04', model: '# NO.SZHH-04', name: 'Bio Fiber Sweeper Scene', img: '/images/products/szhh-04-scene.jpg' },
    { id: 'szhh-05', model: '# NO.SZHH-05', name: '180° Head Fiber Scene', img: '/images/products/szhh-05-scene.jpg' },
  ];

  return (
    <ClientLayout>
      {(lang: Language) => {
        const dict = getDictionary(lang);

        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
            {/* Header Title */}
            <div className="space-y-3 max-w-3xl">
              <span className="text-xs font-mono font-semibold text-[#4A6B82] uppercase tracking-wider">
                {dict.nav.oem}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D2B2A]">
                {dict.oem.title}
              </h1>
              <p className="text-sm text-[#5E5A56] leading-relaxed">
                {dict.oem.subtitle}
              </p>
            </div>

            {/* Customization Matrix & Product Scene Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-2xl font-bold text-[#2D2B2A]">
                  {dict.oem.matrixTitle}
                </h2>
                <p className="text-sm text-[#5E5A56] leading-relaxed">
                  {dict.oem.matrixDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 bg-white rounded-2xl border border-[#E5E0D8] space-y-1 shadow-soft">
                    <span className="font-bold text-[#2D2B2A] block">{dict.oem.matrix1Title}</span>
                    <span className="text-[#8C8883] font-mono">{dict.oem.matrix1Sub}</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-[#E5E0D8] space-y-1 shadow-soft">
                    <span className="font-bold text-[#2D2B2A] block">{dict.oem.matrix2Title}</span>
                    <span className="text-[#8C8883] font-mono">{dict.oem.matrix2Sub}</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-[#E5E0D8] space-y-1 shadow-soft">
                    <span className="font-bold text-[#2D2B2A] block">{dict.oem.matrix3Title}</span>
                    <span className="text-[#8C8883] font-mono">{dict.oem.matrix3Sub}</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-[#E5E0D8] space-y-1 shadow-soft">
                    <span className="font-bold text-[#2D2B2A] block">{dict.oem.matrix4Title}</span>
                    <span className="text-[#8C8883] font-mono">{dict.oem.matrix4Sub}</span>
                  </div>
                </div>
              </div>

              {/* Product Scene Showcase Frame for OEM & ODM */}
              <div className="lg:col-span-6 space-y-3">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#E5E0D8] bg-[#F5F2EB] shadow-soft group">
                  <img
                    src={sceneImages[activeSceneIndex].img}
                    alt={sceneImages[activeSceneIndex].name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#2D2B2A]/85 text-white text-xs font-mono px-3 py-1.5 rounded-xl backdrop-blur-md shadow-sm">
                    {dict.oem.sceneTag} • {sceneImages[activeSceneIndex].model}
                  </div>
                </div>

                {/* Scene thumbnails selector */}
                <div className="grid grid-cols-5 gap-2">
                  {sceneImages.map((scene, idx) => (
                    <button
                      key={scene.id}
                      type="button"
                      onClick={() => setActiveSceneIndex(idx)}
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden border transition-all ${
                        activeSceneIndex === idx
                          ? 'border-[#4A6B82] ring-2 ring-[#4A6B82]/30 scale-105 z-10'
                          : 'border-[#E5E0D8] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={scene.img} alt={scene.name} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive OEM Specifier Calculator Tool */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold text-[#4A6B82] uppercase tracking-wider">
                  {dict.oem.calcHeaderTag}
                </span>
                <h2 className="text-2xl font-bold text-[#2D2B2A]">
                  {dict.oem.calculatorTitle}
                </h2>
              </div>

              <OEMCalculator currentLang={lang} />
            </div>

            {/* 4-Step Process Pipeline */}
            <div className="bg-[#F5F2EB] rounded-3xl p-8 sm:p-10 border border-[#E5E0D8] space-y-8">
              <h2 className="text-2xl font-bold text-[#2D2B2A] text-center">
                {dict.oem.pipelineTitle}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
                <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] space-y-2 shadow-soft">
                  <div className="text-[#4A6B82] font-mono font-bold text-base">{dict.oem.step1Tag}</div>
                  <h3 className="font-bold text-[#2D2B2A] text-sm">{dict.oem.step1Title}</h3>
                  <p className="text-[#65625F]">{dict.oem.step1Text}</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] space-y-2 shadow-soft">
                  <div className="text-[#4A6B82] font-mono font-bold text-base">{dict.oem.step2Tag}</div>
                  <h3 className="font-bold text-[#2D2B2A] text-sm">{dict.oem.step2Title}</h3>
                  <p className="text-[#65625F]">{dict.oem.step2Text}</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] space-y-2 shadow-soft">
                  <div className="text-[#4A6B82] font-mono font-bold text-base">{dict.oem.step3Tag}</div>
                  <h3 className="font-bold text-[#2D2B2A] text-sm">{dict.oem.step3Title}</h3>
                  <p className="text-[#65625F]">{dict.oem.step3Text}</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8] space-y-2 shadow-soft">
                  <div className="text-[#4A6B82] font-mono font-bold text-base">{dict.oem.step4Tag}</div>
                  <h3 className="font-bold text-[#2D2B2A] text-sm">{dict.oem.step4Title}</h3>
                  <p className="text-[#65625F]">{dict.oem.step4Text}</p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ClientLayout>
  );
}
