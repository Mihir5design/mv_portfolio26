import React from 'react';
import { trainCompanies } from '../data/portfolioData';

export const CompaniesTrain: React.FC = () => {
  // Duplicate companies list for seamless continuous infinite marquee loop
  const tickerItems = [...trainCompanies, ...trainCompanies, ...trainCompanies];

  return (
    <section
      id="companies-train"
      className="relative w-full border-y border-[#E5E5E2] bg-white py-8 sm:py-10 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 mb-6">
        {/* Section Label */}
        <div className="flex items-center justify-between font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#8A8A87]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            <span>02 / WORKED WITH & DESIGNED FOR</span>
          </div>
          <span className="hidden sm:inline font-sans font-semibold text-[#8A8A87]">
            ENTERPRISE • HEALTHCARE • CONSUMER AI
          </span>
        </div>
      </div>

      {/* Running Ticker Runway with Edge Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Right Gradient Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Continuous Running Marquee Ticker Track */}
        <div className="animate-ticker flex items-center gap-6 sm:gap-8 py-2 cursor-grab active:cursor-grabbing">
          {tickerItems.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center gap-4 px-6 sm:px-8 py-3 rounded-full border border-[#E5E5E2] bg-white hover:border-[#111111] transition-all shrink-0 group hover:shadow-xs"
            >
              <span className="font-display font-bold text-[17px] sm:text-[19px] tracking-tight text-[#111111] group-hover:text-black">
                {company.name}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#D0D0CC] group-hover:bg-[#111111] transition-colors" />
              <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#8A8A87] group-hover:text-[#575757] transition-colors">
                {company.domain}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
