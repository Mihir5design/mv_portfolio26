import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteMeta } from '../data/portfolioData';
import { MihirLogo } from './MihirLogo';
import { Magnetic } from './Magnetic';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="bg-white text-[#111111] py-16 sm:py-20 border-t border-[#E5E5E2]"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#E5E5E2]">
          {/* Identity with MihirLogo */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#F7F7F7] border border-[#E5E5E2] flex items-center justify-center text-[#111111] shadow-xs">
              <MihirLogo size={26} className="text-[#111111]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-[22px] sm:text-[24px] text-[#111111] block tracking-tight font-bold">
                  {siteMeta.name}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F7F7F7] border border-[#E5E5E2] text-[#111111] font-sans text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                  ONLINE
                </span>
              </div>
              <span className="font-sans text-[12px] font-semibold text-[#8A8A87] block mt-0.5">
                {siteMeta.role} — Indore, India
              </span>
            </div>
          </div>

          {/* Links: LinkedIn, résumé, email */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 font-sans text-[13px] font-semibold">
            <Magnetic strength={0.2} activeScale={1.03}>
              <a
                href={siteMeta.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-[#E5E5E2] bg-[#F7F7F7] hover:border-[#111111] text-[#111111] transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8A87]" />
              </a>
            </Magnetic>

            <Magnetic strength={0.2} activeScale={1.03}>
              <button
                type="button"
                onClick={onOpenResume}
                className="px-4 py-2 rounded-full border border-[#E5E5E2] bg-[#F7F7F7] hover:border-[#111111] text-[#111111] transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Résumé</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8A87]" />
              </button>
            </Magnetic>

            <Magnetic strength={0.2} activeScale={1.03}>
              <a
                href={`mailto:${siteMeta.email}`}
                className="px-4 py-2 rounded-full border border-[#E5E5E2] bg-[#F7F7F7] hover:border-[#111111] text-[#111111] transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>{siteMeta.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8A87]" />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans text-[12px] text-[#8A8A87]">
          <div className="flex items-center gap-3 font-medium">
            <span>© {currentYear} {siteMeta.name}. Built with craft & intent.</span>
          </div>
          <span className="font-semibold text-[#111111]">
            Observe → Understand → Simplify → Design → Ship
          </span>
        </div>
      </div>
    </footer>
  );
};
