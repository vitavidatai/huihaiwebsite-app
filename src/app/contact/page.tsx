'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ClientLayout } from '@/components/layout/client-layout';
import { getDictionary, Language } from '@/lib/i18n';
import { PRODUCTS_DATA } from '@/lib/products-data';

function ContactFormContent({ lang }: { lang: Language }) {
  const dict = getDictionary(lang);
  const searchParams = useSearchParams();

  const defaultCategory = PRODUCTS_DATA[0].name[lang] || PRODUCTS_DATA[0].name.en;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    country: '',
    category: defaultCategory,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const spec = searchParams.get('spec');
    const interest = searchParams.get('interest');
    const certificate = searchParams.get('certificate');

    if (spec) {
      setFormData((prev) => ({
        ...prev,
        message: spec
      }));
    } else if (interest) {
      setFormData((prev) => ({
        ...prev,
        category: interest,
        message: `Inquiry for Product Sample & Datasheet: ${interest}`
      }));
    } else if (certificate) {
      setFormData((prev) => ({
        ...prev,
        message: `Request for Official Certificate Copy of: ${certificate}`
      }));
    }
  }, [searchParams]);

  
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (isSubmitting) return;

  setIsSubmitting(true);

  try {
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send inquiry");
    }

    setIsSubmitted(true);
  } catch (error) {
    console.error("Inquiry submission failed:", error);
    alert("Failed to send your inquiry. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Form Side */}
      <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#E5E0D8] shadow-soft">
        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-[#F2F5F2] text-[#7A8B7B] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#2D2B2A]">
              {dict.contact.successMsg}
            </h3>
            <p className="text-xs font-mono text-[#65625F] max-w-md mx-auto">
              {dict.contact.replyNotice}
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#2D2B2A] bg-[#F5F2EB] rounded-xl hover:bg-[#EFECE6]"
            >
              {dict.contact.submitAnother}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-[#E5E0D8] pb-4">
              <h2 className="text-xl font-bold text-[#2D2B2A]">
                {dict.contact.formTitle}
              </h2>
              <p className="text-xs text-[#8C8883] mt-1">
                {dict.contact.formSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-[#8C8883] uppercase tracking-wider mb-1.5">
                  {dict.contact.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={dict.contact.namePlaceholder}
                  className="w-full p-3.5 text-xs bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl text-[#2D2B2A] focus:ring-2 focus:ring-[#4A6B82] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-[#8C8883] uppercase tracking-wider mb-1.5">
                  {dict.contact.emailLabel} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={dict.contact.emailPlaceholder}
                  className="w-full p-3.5 text-xs bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl text-[#2D2B2A] focus:ring-2 focus:ring-[#4A6B82] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-[#8C8883] uppercase tracking-wider mb-1.5">
                  {dict.contact.companyLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder={dict.contact.companyPlaceholder}
                  className="w-full p-3.5 text-xs bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl text-[#2D2B2A] focus:ring-2 focus:ring-[#4A6B82] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-[#8C8883] uppercase tracking-wider mb-1.5">
                  {dict.contact.countryLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder={dict.contact.countryPlaceholder}
                  className="w-full p-3.5 text-xs bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl text-[#2D2B2A] focus:ring-2 focus:ring-[#4A6B82] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-[#8C8883] uppercase tracking-wider mb-1.5">
                {dict.contact.interestLabel}
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full p-3.5 text-xs bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl text-[#2D2B2A] focus:ring-2 focus:ring-[#4A6B82] outline-none"
              >
                {PRODUCTS_DATA.map((p) => {
                  const pName = p.name[lang] || p.name.en;
                  return (
                    <option key={p.id} value={pName}>
                      {p.modelNumber} • {pName}
                    </option>
                  );
                })}
                <option value={dict.contact.optCustom}>{dict.contact.optCustom}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-[#8C8883] uppercase tracking-wider mb-1.5">
                {dict.contact.messageLabel}
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={dict.contact.messagePlaceholder}
                className="w-full p-3.5 text-xs bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl text-[#2D2B2A] focus:ring-2 focus:ring-[#4A6B82] outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 text-xs font-semibold text-white bg-[#2D2B2A] hover:bg-[#3D3A39] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-4 h-4 text-[#F5F2EB]" />
              <span>{isSubmitting ? dict.contact.submitting : dict.contact.btnSubmit}</span>
            </button>
          </form>
        )}
      </div>

      {/* Direct Info Side */}
      <div className="lg:col-span-5 space-y-8">
        <div className="bg-[#F5F2EB] p-8 rounded-3xl border border-[#E5E0D8] space-y-6">
          <h3 className="text-lg font-bold text-[#2D2B2A] border-b border-[#E5E0D8] pb-3">
            {dict.contact.infoTitle}
          </h3>

          <div className="space-y-4 text-xs font-mono">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#4A6B82] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#8C8883] block">{dict.contact.addressLabel}:</span>
                <span className="text-[#2D2B2A] leading-relaxed block mt-0.5">
                  {dict.contact.addressVal}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#4A6B82] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#8C8883] block">{dict.contact.emailLabelVal}:</span>
                <a href="mailto:shenfengxs@163.com" className="text-[#4A6B82] hover:underline font-semibold block mt-0.5">
                  shenfengxs@163.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#4A6B82] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#8C8883] block">{dict.contact.phoneLabelVal}:</span>
                <span className="text-[#2D2B2A] block mt-0.5">+86-13372119011</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E5E0D8] text-[11px] text-[#65625F] space-y-1 font-mono">
            <div className="flex items-center gap-1.5 text-[#7A8B7B]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{dict.contact.certNotice}</span>
            </div>
          </div>
        </div>

        {/* Plant Overview Frame */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-[#E5E0D8] bg-[#F5F2EB] shadow-soft">
          <img
            src="/images/factory/factory-overview.png"
            alt={dict.contact.mapAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <ClientLayout>
      {(lang: Language) => {
        const dict = getDictionary(lang);

        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div className="space-y-3 max-w-3xl">
              <span className="text-xs font-mono font-semibold text-[#4A6B82] uppercase tracking-wider">
                {dict.contact.tagline}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D2B2A]">
                {dict.contact.title}
              </h1>
              <p className="text-sm text-[#5E5A56] leading-relaxed">
                {dict.contact.subtitle}
              </p>
            </div>

            <Suspense fallback={<div className="p-8 text-center text-xs font-mono text-[#8C8883]">Loading form...</div>}>
              <ContactFormContent lang={lang} />
            </Suspense>
          </div>
        );
      }}
    </ClientLayout>
  );
}
