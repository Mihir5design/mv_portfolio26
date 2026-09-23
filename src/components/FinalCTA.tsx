import React from 'react';
import { ArrowUpRight, Mail, Linkedin, MessageCircle } from 'lucide-react';
import { siteMeta } from '../data/portfolioData';
import { MihirLogo } from './MihirLogo';
import { GridPulse } from './ui/grid-pulse';
import { useTheme } from '../context/ThemeContext';

interface FinalCTAProps {
  onGetInTouch: () => void;
  onScrollToTop: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onScrollToTop }) => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    onScrollToTop();
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[1080px] snap-start bg-white dark:bg-[#18181b] select-none flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-0 transition-colors duration-250 overflow-hidden"
    >
      {/* Dynamic Grid Pulse ambient interactive background */}
      <GridPulse
        cell={32}
        reach={2.4}
        ambient={1}
        maxLit={45}
        avoid="[data-grid-avoid]"
        className="opacity-40 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1360px] w-full mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-center my-auto">
        {/* Top Contact Channels Row - Padded safely beneath the floating navbar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8fc33b]" />
              <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#8A8A87] dark:text-[#A1A1AA]">
                GET IN TOUCH
              </span>
            </div>

            <h2
              data-grid-avoid
              className="font-display font-bold text-[30px] sm:text-[40px] lg:text-[46px] leading-[1.08] tracking-tight text-[#111111] dark:text-white"
            >
              Start a conversation.
            </h2>
            <p
              data-grid-avoid
              className="text-[14px] sm:text-[15.5px] text-[#555555] dark:text-[#A1A1AA] font-sans leading-relaxed max-w-[460px] mt-2"
            >
              Tell me what you're building, changing, or trying to understand. Pick the channel that feels easiest.
            </p>
          </div>

          {/* Right Column: Sleek Direct Channels with Bold Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="space-y-2.5 w-full max-w-[480px] lg:ml-auto">
              {/* Email */}
              <a
                href={`mailto:${siteMeta.email}`}
                className="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl border border-[#E5E5E2] dark:border-[#2e2e34] bg-white dark:bg-[#202126] hover:bg-[#111111] dark:hover:bg-white text-[#111111] dark:text-white hover:text-white dark:hover:text-black transition-all duration-200 cursor-pointer shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8.5 h-8.5 rounded-xl bg-[#F4F4F2] dark:bg-[#292a30] group-hover:bg-white/10 dark:group-hover:bg-black/10 flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4 text-[#111111] dark:text-white group-hover:text-white dark:group-hover:text-black" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-[#8A8A87] dark:text-neutral-400 group-hover:text-white/70 dark:group-hover:text-black/70 block uppercase font-bold">
                      EMAIL
                    </span>
                    <span className="font-sans text-[13.5px] sm:text-[14px] font-bold">
                      {siteMeta.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8A8A87] group-hover:text-white dark:group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* LinkedIn */}
              <a
                href={siteMeta.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl border border-[#E5E5E2] dark:border-[#2e2e34] bg-white dark:bg-[#202126] hover:bg-[#111111] dark:hover:bg-white text-[#111111] dark:text-white hover:text-white dark:hover:text-black transition-all duration-200 cursor-pointer shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8.5 h-8.5 rounded-xl bg-[#F4F4F2] dark:bg-[#292a30] group-hover:bg-white/10 dark:group-hover:bg-black/10 flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4 text-[#111111] dark:text-white group-hover:text-white dark:group-hover:text-black" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-[#8A8A87] dark:text-neutral-400 group-hover:text-white/70 dark:group-hover:text-black/70 block uppercase font-bold">
                      LINKEDIN
                    </span>
                    <span className="font-sans text-[13.5px] sm:text-[14px] font-bold">
                      Connect professionally
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8A8A87] group-hover:text-white dark:group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* WhatsApp */}
              <a
                href={siteMeta.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl border border-[#E5E5E2] dark:border-[#2e2e34] bg-white dark:bg-[#202126] hover:bg-[#111111] dark:hover:bg-white text-[#111111] dark:text-white hover:text-white dark:hover:text-black transition-all duration-200 cursor-pointer shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8.5 h-8.5 rounded-xl bg-[#F4F4F2] dark:bg-[#292a30] group-hover:bg-white/10 dark:group-hover:bg-black/10 flex items-center justify-center transition-colors">
                    <MessageCircle className="w-4 h-4 text-[#111111] dark:text-white group-hover:text-white dark:group-hover:text-black" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-[#8A8A87] dark:text-neutral-400 group-hover:text-white/70 dark:group-hover:text-black/70 block uppercase font-bold">
                      WHATSAPP
                    </span>
                    <span className="font-sans text-[13.5px] sm:text-[14px] font-bold">
                      Start a quick chat
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8A8A87] group-hover:text-white dark:group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Reference-Style Footer: Connects absolute full width across entire screen from very left to very right */}
      <footer className="relative w-full overflow-hidden select-none mt-0 pl-[3px] pr-0 pb-0 shrink-0">
        {/* Centered White "Back to Top" Pill Button hovering directly above */}
        <div className="w-full flex justify-center mb-[-12px] sm:mb-[-14px] relative z-30 pointer-events-auto">
          <button
            type="button"
            onClick={handleScrollTop}
            className="px-5 sm:px-6 py-2 rounded-full bg-white hover:bg-neutral-100 text-[#111111] font-sans text-[12px] sm:text-[13px] font-bold tracking-tight shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer border border-neutral-200"
          >
            <span>Back to Top</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Monumental Icon + "Mihir Vaidya": Minimal space between emblem and text, 70% visible, bottom 30% submerged */}
        <div className="relative w-full px-2 sm:px-4 md:px-8 pb-0 mb-[-12px] flex items-center justify-center gap-1.5 xs:gap-2.5 sm:gap-3.5 md:gap-4.5 translate-y-[28%] sm:translate-y-[26%] select-none overflow-visible">
          {/* Circular Emblem Icon - Swaps dynamically based on dark / light theme */}
          <div className="shrink-0 flex items-center">
            <img
              src={isDark ? '/footer_dark.png' : '/footer_light.png'}
              alt="Mihir Vaidya Emblem"
              style={{ maxWidth: '200px', maxHeight: '200px' }}
              className="w-[90px] h-[90px] xs:w-[120px] xs:h-[120px] sm:w-[155px] sm:h-[155px] md:w-[185px] md:h-[185px] lg:w-[200px] lg:h-[200px] object-contain shrink-0 drop-shadow-[0_16px_36px_rgba(0,0,0,0.38)] transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                const target = e.currentTarget;
                target.src = '/logo.svg';
              }}
            />
          </div>

          {/* Mihir Vaidya Display Wordmark closely hugging the emblem */}
          <div className="shrink-0 flex items-center overflow-visible">
            <h2 className="font-display font-normal text-[52px] xs:text-[76px] sm:text-[108px] md:text-[144px] lg:text-[180px] xl:text-[210px] 2xl:text-[230px] leading-[0.72] tracking-[-0.04em] text-[#111111] dark:text-white whitespace-nowrap overflow-visible drop-shadow-[0_4px_24px_rgba(0,0,0,0.18)] text-left">
              Mihir Vaidya
            </h2>
          </div>
        </div>

        {/* Glowing Purple-Violet Gradient Bottom Strip - 100% full viewport width with 50% opacity and background blur */}
        <div className="relative z-20 w-full py-3 sm:py-3.5 px-4 text-center bg-gradient-to-r from-[#1b0632]/50 via-[#4a1c77]/50 to-[#1b0632]/50 backdrop-blur-md border-t border-purple-400/25 shadow-[0_-10px_35px_rgba(88,28,135,0.25)]">
          <p
            style={{ fontFamily: "'McLaren', sans-serif" }}
            className="text-[13px] text-white/95 font-normal tracking-wide"
          >
            {currentYear} © Design & Developed by Mihir
          </p>
        </div>
      </footer>
    </section>
  );
};
