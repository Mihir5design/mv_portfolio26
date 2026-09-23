import React from 'react';
import { experienceData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { Magnetic } from './Magnetic';

interface ExperienceSectionProps {
  onOpenResume: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="experience"
      className="relative w-full bg-white py-24 sm:py-32 border-b border-[#E5E5E2]"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center justify-between font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#8A8A87] mb-8 pb-3 border-b border-[#E5E5E2]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            <span>07 / EXPERIENCE</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 font-semibold">
            <span>5+ YEARS PRACTICE</span>
            <span className="text-[#D0D0CC]">•</span>
            <span className="text-[#111111]">CHRONOLOGICAL HISTORY</span>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-[#E5E5E2]">
          <div className="max-w-[820px]">
            <h2 className="font-display font-bold text-[36px] sm:text-[56px] leading-[1.08] tracking-[-0.035em] text-[#111111]">
              A career built around complex problems.
            </h2>
            <p className="mt-5 text-[18px] sm:text-[20px] text-[#575757] font-sans font-normal leading-[1.6]">
              5+ years of experience across product design, UX, and digital experiences—working with teams on products that range from consumer journeys to complex enterprise systems.
            </p>
          </div>

          <Magnetic strength={0.25} activeScale={1.03}>
            <button
              type="button"
              onClick={onOpenResume}
              className="font-sans text-[13px] font-bold uppercase tracking-wider text-[#111111] hover:text-black transition-colors flex items-center gap-2 group self-start md:self-end px-6 py-3.5 rounded-full border border-[#E5E5E2] bg-white hover:border-[#111111] shadow-xs cursor-pointer shrink-0"
            >
              <span>View full resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </Magnetic>
        </div>

        {/* Experience Chronological List */}
        <div className="divide-y divide-[#E5E5E2]">
          {experienceData.map((item, idx) => (
            <div
              key={item.id}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 items-start group hover:bg-[#FAFAFA] -mx-4 px-4 sm:px-6 rounded-2xl transition-colors"
            >
              {/* Column 1: Dates & Location */}
              <div className="md:col-span-3 font-sans text-[13px]">
                <span className="block text-[#111111] font-bold">{item.dates}</span>
                <span className="text-[#8A8A87] font-medium">{item.location}</span>
              </div>

              {/* Column 2: Role & Company */}
              <div className="md:col-span-4">
                <h3 className="font-display font-bold text-[22px] sm:text-[24px] text-[#111111] tracking-tight group-hover:text-black transition-colors">
                  {item.role}
                </h3>
                <p className="font-sans text-[12px] font-bold text-[#8A8A87] uppercase tracking-wider mt-1">
                  {item.company}
                </p>
              </div>

              {/* Column 3: Brief Description */}
              <div className="md:col-span-5">
                <p className="text-[14px] sm:text-[15px] text-[#575757] font-sans leading-[1.65]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
