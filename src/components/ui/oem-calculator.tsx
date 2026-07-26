'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, ArrowRight, Sliders } from 'lucide-react';
import { Language, getDictionary } from '@/lib/i18n';

interface OEMCalculatorProps {
  currentLang: Language;
}

export const OEMCalculator: React.FC<OEMCalculatorProps> = ({ currentLang }) => {
  const router = useRouter();
  const dict = getDictionary(currentLang);

  const categories = [
    { key: 'dusters', label: dict.oem.catDusters },
    { key: 'mops', label: dict.oem.catMops },
    { key: 'microfiber', label: dict.oem.catMicrofiber },
    { key: 'specialty', label: dict.oem.catSpecialty },
  ];

  const materials = [
    { key: 'pet_pp', label: dict.oem.matPetPp },
    { key: 'viscose', label: dict.oem.matViscose },
    { key: 'microfiber', label: dict.oem.matMicrofiber },
    { key: 'pla', label: dict.oem.matPla },
  ];

  const gsmOptions = [
    { key: '25gsm', label: dict.oem.gsm25 },
    { key: '50gsm', label: dict.oem.gsm50 },
    { key: '70gsm', label: dict.oem.gsm70 },
    { key: '300gsm', label: dict.oem.gsm300 },
    { key: '400gsm', label: dict.oem.gsm400 },
  ];

  const scentOptions = [
    { key: 'pure', label: dict.oem.scentPure },
    { key: 'citrus', label: dict.oem.scentCitrus },
    { key: 'antibacterial', label: dict.oem.scentAntiBacterial },
    { key: 'antistatic', label: dict.oem.scentAntiStatic },
  ];

  const packOptions = [
    { key: 'box', label: dict.oem.packBox },
    { key: 'polybag', label: dict.oem.packPolybag },
    { key: 'carton', label: dict.oem.packCarton },
    { key: 'container', label: dict.oem.packContainer },
  ];

  const volumeOptions = [
    { key: 'trial', label: dict.oem.volTrial },
    { key: 'batch', label: dict.oem.volBatch },
    { key: 'fcl', label: dict.oem.volFcl },
  ];

  const [categoryKey, setCategoryKey] = useState('dusters');
  const [materialKey, setMaterialKey] = useState('pet_pp');
  const [gsmKey, setGsmKey] = useState('50gsm');
  const [scentKey, setScentKey] = useState('pure');
  const [packKey, setPackKey] = useState('box');
  const [volumeKey, setVolumeKey] = useState('batch');

  const selectedCategoryObj = categories.find((c) => c.key === categoryKey) || categories[0];
  const selectedMaterialObj = materials.find((m) => m.key === materialKey) || materials[0];
  const selectedGsmObj = gsmOptions.find((g) => g.key === gsmKey) || gsmOptions[0];
  const selectedScentObj = scentOptions.find((s) => s.key === scentKey) || scentOptions[0];
  const selectedPackObj = packOptions.find((p) => p.key === packKey) || packOptions[0];
  const selectedVolumeObj = volumeOptions.find((v) => v.key === volumeKey) || volumeOptions[0];

  const handleApplySpec = () => {
    const specSummary = `OEM Request: ${selectedCategoryObj.label} | Material: ${selectedMaterialObj.label} | GSM: ${selectedGsmObj.label} | Treatment: ${selectedScentObj.label} | Packaging: ${selectedPackObj.label} | Quantity: ${selectedVolumeObj.label}`;
    router.push(`/contact?spec=${encodeURIComponent(specSummary)}`);
  };

  return (
    <div className="bg-white border border-[#E5E0D8] rounded-3xl shadow-soft overflow-hidden">
      {/* Tool Bar Header */}
      <div className="bg-[#2D2B2A] text-white p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#4A6B82] flex items-center justify-center text-white">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">{dict.oem.calculatorTitle}</h3>
            <p className="text-[11px] text-[#B0ACA6] font-mono">{dict.oem.calculatorSubtitle}</p>
          </div>
        </div>
        <span className="hidden sm:inline-block px-3 py-1 text-[10px] font-mono bg-[#3D3A39] text-[#F5F2EB] border border-[#5E5A56] rounded-lg">
          {dict.oem.calcHeaderTag}
        </span>
      </div>

      <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* 1. Category */}
          <div>
            <label className="block text-xs font-mono font-semibold text-[#8C8883] uppercase tracking-wider mb-2">
              1. {dict.oem.selectProduct}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {categories.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setCategoryKey(item.key)}
                  className={`p-3.5 rounded-xl border text-left font-medium transition-all ${
                    categoryKey === item.key
                      ? 'border-[#4A6B82] bg-[#F0F4F7] text-[#4A6B82] font-semibold'
                      : 'border-[#E5E0D8] hover:bg-[#FAF9F6] text-[#2D2B2A]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Fiber Material */}
          <div>
            <label className="block text-xs font-mono font-semibold text-[#8C8883] uppercase tracking-wider mb-2">
              2. {dict.oem.selectMaterial}
            </label>
            <select
              value={materialKey}
              onChange={(e) => setMaterialKey(e.target.value)}
              className="w-full p-3.5 text-xs bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl font-medium text-[#2D2B2A] focus:ring-2 focus:ring-[#4A6B82] outline-none"
            >
              {materials.map((m) => (
                <option key={m.key} value={m.key}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          {/* 3. GSM & Scent Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-semibold text-[#8C8883] uppercase tracking-wider mb-2">
                3. {dict.oem.selectGsm}
              </label>
              <select
                value={gsmKey}
                onChange={(e) => setGsmKey(e.target.value)}
                className="w-full p-3.5 text-xs bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl font-medium text-[#2D2B2A] focus:ring-2 focus:ring-[#4A6B82] outline-none"
              >
                {gsmOptions.map((g) => (
                  <option key={g.key} value={g.key}>
                    {g.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-[#8C8883] uppercase tracking-wider mb-2">
                4. {dict.oem.selectScent}
              </label>
              <select
                value={scentKey}
                onChange={(e) => setScentKey(e.target.value)}
                className="w-full p-3.5 text-xs bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl font-medium text-[#2D2B2A] focus:ring-2 focus:ring-[#4A6B82] outline-none"
              >
                {scentOptions.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 5. Packaging & Volume */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-semibold text-[#8C8883] uppercase tracking-wider mb-2">
                5. {dict.oem.selectPack}
              </label>
              <select
                value={packKey}
                onChange={(e) => setPackKey(e.target.value)}
                className="w-full p-3.5 text-xs bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl font-medium text-[#2D2B2A] focus:ring-2 focus:ring-[#4A6B82] outline-none"
              >
                {packOptions.map((p) => (
                  <option key={p.key} value={p.key}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-[#8C8883] uppercase tracking-wider mb-2">
                6. {dict.oem.selectQty}
              </label>
              <select
                value={volumeKey}
                onChange={(e) => setVolumeKey(e.target.value)}
                className="w-full p-3.5 text-xs bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl font-medium text-[#2D2B2A] focus:ring-2 focus:ring-[#4A6B82] outline-none"
              >
                {volumeOptions.map((v) => (
                  <option key={v.key} value={v.key}>
                    {v.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Live Spec Preview Summary Card */}
        <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#E5E0D8] flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E0D8] mb-4">
              <span className="text-xs font-mono font-semibold uppercase text-[#65625F] flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#4A6B82]" />
                {dict.oem.specSummaryTitle}
              </span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 bg-white rounded-xl border border-[#E5E0D8]">
                <span className="text-[#8C8883] block text-[10px]">{dict.oem.specCategory}</span>
                <span className="font-semibold text-[#2D2B2A]">{selectedCategoryObj.label}</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#E5E0D8]">
                <span className="text-[#8C8883] block text-[10px]">{dict.oem.specMaterial}</span>
                <span className="font-semibold text-[#2D2B2A]">{selectedMaterialObj.label}</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#E5E0D8]">
                <span className="text-[#8C8883] block text-[10px]">{dict.oem.specGsmScent}</span>
                <span className="font-semibold text-[#2D2B2A]">{selectedGsmObj.label} • {selectedScentObj.label}</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#E5E0D8]">
                <span className="text-[#8C8883] block text-[10px]">{dict.oem.specPackVol}</span>
                <span className="font-semibold text-[#2D2B2A]">{selectedPackObj.label} | {selectedVolumeObj.label}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleApplySpec}
            className="w-full py-3.5 px-4 text-xs font-semibold text-[#F5F2EB] bg-[#2D2B2A] hover:bg-[#3D3A39] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>{dict.oem.btnSubmitSpec}</span>
            <ArrowRight className="w-4 h-4 text-[#F5F2EB]" />
          </button>
        </div>
      </div>
    </div>
  );
};
