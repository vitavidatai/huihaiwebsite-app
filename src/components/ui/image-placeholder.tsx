'use client';

import React from 'react';
import { Camera } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  aspectRatio?: string;
  className?: string;
  height?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  sublabel = 'Replace with real photograph',
  aspectRatio = 'aspect-[16/9]',
  className = '',
  height
}) => {
  return (
    <div
      className={`relative w-full ${height ? height : aspectRatio} bg-[#F5F2EB] border border-[#E5E0D8] rounded-xl overflow-hidden group flex flex-col items-center justify-center p-6 transition-all duration-300 hover:border-[#4A6B82]/40 ${className}`}
    >
      {/* Background Subtle Warm Mesh Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#787571 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center space-y-2.5 max-w-md">
        <div className="w-11 h-11 rounded-full bg-[#EFECE6] border border-[#E5E0D8] flex items-center justify-center text-[#787571] group-hover:scale-105 transition-transform duration-200">
          <Camera className="w-4 h-4" />
        </div>
        
        <div>
          <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-medium tracking-widest bg-[#EFECE6] text-[#65625F] rounded mb-1 uppercase">
            Photo Placeholder
          </span>
          <h4 className="text-xs font-semibold text-[#2D2B2A] leading-snug">
            {label}
          </h4>
          <p className="text-[11px] text-[#8C8883] mt-1 font-mono">
            {sublabel}
          </p>
        </div>
      </div>

      {/* Frame Corner Accents */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-[#8C8883]/40" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-[#8C8883]/40" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-[#8C8883]/40" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-[#8C8883]/40" />
    </div>
  );
};
