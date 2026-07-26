'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Download, CheckCircle2, ZoomIn, X, Eye } from 'lucide-react';
import { ClientLayout } from '@/components/layout/client-layout';
import { getDictionary, Language } from '@/lib/i18n';

interface CertItem {
  id: string;
  title: Record<Language, string>;
  issuingBody: Record<Language, string>;
  scope: Record<Language, string>;
  validity: string;
  imageSrc: string;
  imageAlt: string;
}

export default function CertificatesPage() {
  const [activeModalCert, setActiveModalCert] = useState<{
    src: string;
    title: string;
    validity: string;
  } | null>(null);

  const certificateItems: CertItem[] = [
    {
      id: 'iso-9001',
      title: {
        en: 'ISO 9001:2015 Quality Management System',
        zh: 'ISO 9001:2015 质量管理体系认证',
        ja: 'ISO 9001:2015 品質マネジメントシステム',
      },
      issuingBody: {
        en: 'NOA Testing & Certification Group (IAF / IAS Accredited)',
        zh: '诺尔检测认证集团 (IAF / IAS 权威认可)',
        ja: 'NOA Testing & Certification Group (IAF / IAS 認定)',
      },
      scope: {
        en: 'Production and sales of daily sundries, electrostatic mopping towels, disposable electrostatic dusters, and cleaning supplies.',
        zh: '日用杂品、静电拖地干巾、一次性静电除尘掸及清洁用品的生产与销售。',
        ja: '日用品、静電気モップシート、使い捨て静電気ダスターおよび清掃用品の製造・販売。',
      },
      validity: 'GB/T 19001-2016 / ISO 9001:2015',
      imageSrc: '/images/certificates/iso-9001-certificate.png',
      imageAlt: 'ISO 9001:2015 Quality Management System Certificate',
    },
    {
      id: 'smeta-audit',
      title: {
        en: 'SMETA Ethical Trade Audit',
        zh: 'SMETA 商业道德贸易审计报告',
        ja: 'SMETA 倫理的貿易監査レポート',
      },
      issuingBody: {
        en: 'Sedex Approved Auditing Body',
        zh: 'Sedex 官方授权第三方审计机构',
        ja: 'Sedex 認定第三者監査機関',
      },
      scope: {
        en: 'SMETA 4-Pillar Audit covering Labor Standards, Health & Safety, Environment, and Business Ethics.',
        zh: 'SMETA 四大支柱审核，涵盖劳工标准、健康与安全、环境及商业道德。',
        ja: 'SMETA 4柱監査（労働基準、健康と安全、環境、ビジネス倫理）。',
      },
      validity: 'SMETA Version 6.1 Compliant',
      imageSrc: '/images/certificates/smeta-audit-report.png',
      imageAlt: 'SMETA Ethical Trade Audit Report',
    },
    {
      id: 'smeta-capr',
      title: {
        en: 'SMETA Corrective Action Plan (CAPR)',
        zh: 'SMETA 纠正措施计划 (CAPR) 报告',
        ja: 'SMETA 是正措置計画 (CAPR) レポート',
      },
      issuingBody: {
        en: 'Sedex Approved Auditing Body',
        zh: 'Sedex 官方授权第三方审计机构',
        ja: 'Sedex 認定第三者監査機関',
      },
      scope: {
        en: 'Corrective Action Plan Report (CAPR) verification for continuous social and environmental compliance.',
        zh: '纠正措施计划报告（CAPR）复核，验证社会责任与环境持续合规。',
        ja: '社会・環境責任の持続的コンプライアンスを検証する是正措置計画報告（CAPR）。',
      },
      validity: 'SMETA CAPR Verified',
      imageSrc: '/images/certificates/smeta-capr-report.png',
      imageAlt: 'SMETA Corrective Action Plan (CAPR) Report',
    },
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
                {dict.certificates.tagline}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D2B2A]">
                {dict.certificates.title}
              </h1>
              <p className="text-sm text-[#5E5A56] leading-relaxed">
                {dict.certificates.subtitle}
              </p>
            </div>

            {/* Clean Three-Column Certification Cards Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {certificateItems.map((cert) => {
                const titleText = cert.title[lang] || cert.title.en;
                const issuingText = cert.issuingBody[lang] || cert.issuingBody.en;
                const scopeText = cert.scope[lang] || cert.scope.en;

                return (
                  <div
                    key={cert.id}
                    className="bg-white rounded-3xl border border-[#E5E0D8] p-6 flex flex-col justify-between space-y-6 shadow-soft hover:shadow-elevated-warm transition-all duration-300 group"
                  >
                    <div className="space-y-4">
                      {/* Clickable Image Container */}
                      <div
                        onClick={() =>
                          setActiveModalCert({
                            src: cert.imageSrc,
                            title: titleText,
                            validity: cert.validity,
                          })
                        }
                        className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[#E5E0D8] bg-[#FAF9F6] p-2 flex items-center justify-center cursor-pointer group/img"
                        title="Click to view full size"
                      >
                        <img
                          src={cert.imageSrc}
                          alt={cert.imageAlt}
                          className="w-full h-full object-contain rounded-xl shadow-sm group-hover/img:scale-102 transition-transform duration-300"
                        />
                        {/* Hover Overlay Icon */}
                        <div className="absolute inset-0 bg-[#2D2B2A]/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-mono text-xs backdrop-blur-[2px]">
                          <ZoomIn className="w-5 h-5 text-white" />
                          <span>View Full Size</span>
                        </div>
                      </div>

                      {/* Card Information */}
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[#F2F5F2] text-[#7A8B7B]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{cert.validity}</span>
                        </div>

                        <h3 className="text-base font-bold text-[#2D2B2A] leading-snug group-hover:text-[#4A6B82] transition-colors">
                          {titleText}
                        </h3>
                      </div>

                      <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-[#E5E0D8] text-xs space-y-2 font-mono">
                        <div>
                          <span className="text-[#8C8883] block text-[10px] uppercase">
                            {dict.certificates.issuingLabel}
                          </span>
                          <span className="font-semibold text-[#2D2B2A]">
                            {issuingText}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#8C8883] block text-[10px] uppercase">
                            {dict.certificates.scopeLabel}
                          </span>
                          <span className="text-[#5E5A56] leading-relaxed block mt-0.5">
                            {scopeText}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveModalCert({
                            src: cert.imageSrc,
                            title: titleText,
                            validity: cert.validity,
                          })
                        }
                        className="flex-1 py-2.5 px-3 text-xs font-semibold text-[#2D2B2A] bg-[#F5F2EB] hover:bg-[#2D2B2A] hover:text-white rounded-xl transition-all flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview</span>
                      </button>

                      <Link
                        href={`/contact?certificate=${encodeURIComponent(titleText)}`}
                        className="flex-1 py-2.5 px-3 text-xs font-semibold text-white bg-[#2D2B2A] hover:bg-[#3D3A39] rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5 text-[#F5F2EB]" />
                        <span>Inquire</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Patent Highlight Banner */}
            <div className="bg-[#F5F2EB] rounded-3xl p-8 sm:p-10 border border-[#E5E0D8] space-y-4">
              <span className="text-xs font-mono font-semibold text-[#4A6B82] uppercase tracking-wider">
                {dict.certificates.patentTag}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#2D2B2A]">
                {dict.certificates.patentTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#5E5A56] leading-relaxed max-w-3xl">
                {dict.certificates.patentDesc}
              </p>
            </div>

            {/* Full Size Image Preview Modal Lightbox */}
            {activeModalCert && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2D2B2A]/85 backdrop-blur-md transition-all duration-300"
                onClick={() => setActiveModalCert(null)}
              >
                <div
                  className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-elevated-warm flex flex-col border border-[#E5E0D8]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-4 sm:p-6 bg-[#FAF9F6] border-b border-[#E5E0D8]">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-medium uppercase bg-[#F2F5F2] text-[#7A8B7B] rounded mb-1">
                        {activeModalCert.validity}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#2D2B2A]">
                        {activeModalCert.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveModalCert(null)}
                      className="p-2 text-[#8C8883] hover:text-[#2D2B2A] hover:bg-[#F5F2EB] rounded-xl transition-colors"
                      title="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Image Display */}
                  <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-[#FAF9F6] max-h-[75vh]">
                    <img
                      src={activeModalCert.src}
                      alt={activeModalCert.title}
                      className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-md border border-[#E5E0D8]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      }}
    </ClientLayout>
  );
}
