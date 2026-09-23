import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { Magnetic } from './Magnetic';
import { GridPulse } from '@/components/ui/grid-pulse';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onSeeWork: () => void;
  onNavigateAbout: () => void;
  onSelectProject?: (slug: string) => void;
  onOpenResume?: () => void;
}

interface CompanyLogoItem {
  id: string;
  name: string;
  darkLogo: string;
  lightLogo: string;
  customClass?: string;
}

const companyLogos: CompanyLogoItem[] = [
  {
    id: 'reclaimz',
    name: 'Reclaimz',
    darkLogo: '/reclaimz_dark.png',
    lightLogo: '/reclaimz_light.png',
    customClass: 'h-7 sm:h-8 md:h-9 max-w-[130px] sm:max-w-[160px] md:max-w-[180px]',
  },
  {
    id: 'indulekha',
    name: 'Indulekha',
    darkLogo: '/indulekha_dark.png',
    lightLogo: '/indulekha_light.png',
    // Indulekha's graphic has more internal canvas padding, so optical boost aligns it with peers
    customClass: 'h-11 sm:h-13 md:h-14 max-w-[180px] sm:max-w-[220px] md:max-w-[260px] scale-110 sm:scale-125 origin-center',
  },
  {
    id: 'sx',
    name: 'SX',
    darkLogo: '/sx_dark.png',
    lightLogo: '/sx_light.png',
    customClass: 'h-7 sm:h-8 md:h-9 max-w-[120px] sm:max-w-[150px] md:max-w-[170px]',
  },
  {
    id: 'typeface',
    name: 'Typeface',
    darkLogo: '/typeface_dark.png',
    lightLogo: '/typeface_light.png',
    // Typeface optical boost to match the visual weight of Tech Mahindra and Reclaimz
    customClass: 'h-10 sm:h-11 md:h-12 max-w-[160px] sm:max-w-[190px] md:max-w-[220px] scale-110 sm:scale-120 origin-center',
  },
  {
    id: 'techm',
    name: 'Tech Mahindra',
    darkLogo: '/techm_dark.png',
    lightLogo: '/techm_light.png',
    customClass: 'h-7 sm:h-8 md:h-9 max-w-[130px] sm:max-w-[160px] md:max-w-[180px]',
  },
];

export const Hero: React.FC<HeroProps> = ({
  onSeeWork,
}) => {
  const { isDark } = useTheme();

  // Repeating array for seamless, continuous infinite marquee loop
  const tickerItems = [
    ...companyLogos,
    ...companyLogos,
    ...companyLogos,
    ...companyLogos,
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[1080px] snap-start bg-white dark:bg-[#18181b] text-[#111111] dark:text-[#F3F4F6] pt-28 sm:pt-32 pb-6 sm:pb-8 flex flex-col justify-between overflow-visible lg:overflow-hidden select-none transition-colors duration-250"
    >
      {/* Interactive Light-weight Grid Pulse Background */}
      <GridPulse
        cell={32}
        reach={2.4}
        ambient={1}
        maxLit={65}
        avoid="[data-grid-avoid]"
        className="opacity-70 pointer-events-none"
      />

      {/* Centered Hero Content */}
      <div className="relative z-10 max-w-[960px] w-full mx-auto px-6 sm:px-10 lg:px-12 my-auto flex flex-col items-center justify-center text-center">
        {/* 1. Status Indicator Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-5 sm:mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
          <span className="font-sans text-[11px] sm:text-[12.5px] font-bold tracking-wider text-[#6B7280] dark:text-neutral-400">
            Available for project work.
          </span>
        </motion.div>

        {/* 2. Refined 2-Line Headline */}
        <h1 data-grid-avoid className="font-display tracking-[-0.035em] text-center w-full">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ fontWeight: 600, fontStyle: 'normal' }}
            className="block text-[#111111] dark:text-white text-[40px] sm:text-[56px] md:text-[68px] lg:text-[78px] leading-[1.08] tracking-[-0.03em] font-semibold not-italic"
          >
            Making complex products
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ fontStyle: 'italic', fontWeight: 600 }}
            className="block italic text-[#8fc33b] text-[40px] sm:text-[56px] md:text-[68px] lg:text-[78px] leading-[1.08] tracking-[-0.03em] mt-1 sm:mt-2 font-semibold"
          >
            feel remarkably simple.
          </motion.span>
        </h1>

        {/* 3. Subtitle Description */}
        <motion.p
          data-grid-avoid
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{ lineHeight: '28px' }}
          className="mt-6 sm:mt-7 text-[16px] sm:text-[18px] lg:text-[19px] text-[#4A4A4A] dark:text-[#A3A3A3] font-sans font-normal max-w-[620px] mx-auto text-center"
        >
          I'm Mihir, a product designer with 5+ years of experience who gets close to messy problems until they become simple, useful experiences.
        </motion.p>

        {/* 4. Action CTA: "See work" */}
        <motion.div
          data-grid-avoid
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 sm:mt-10 flex items-center justify-center"
        >
          <Magnetic strength={0.2} activeScale={1.03}>
            <button
              type="button"
              onClick={onSeeWork}
              className="px-8 py-3.5 rounded-full bg-[#0D0D0D] dark:bg-white hover:bg-black dark:hover:bg-neutral-200 text-white dark:text-[#111111] font-sans text-[14px] sm:text-[15px] font-bold tracking-tight shadow-sm flex items-center gap-2 cursor-pointer transition-all hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] focus-visible:outline-2 focus-visible:outline-[#111111]"
            >
              <span className="font-bold">See work</span>
              <ArrowDown className="w-3.5 h-3.5 text-white/90 dark:text-black/90 animate-bounce" />
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* ================= BOTTOM BAR: FULL-WIDTH LOGO MARQUEE ================= */}
      <div className="w-full mt-auto pt-4 flex flex-col">
        {/* Continuous Running Logo Image Marquee spanning end-to-end device width */}
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden pt-1 pb-3">
          {/* Subtle gradient edge masks for seamless entry & exit */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white dark:from-[#18181b] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white dark:from-[#18181b] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-ticker flex items-center gap-8 sm:gap-12 md:gap-16 py-1 cursor-default">
            {tickerItems.map((company, index) => {
              const logoSrc = isDark ? company.darkLogo : company.lightLogo;
              return (
                <div
                  key={`${company.id}-${index}`}
                  className="h-12 sm:h-14 md:h-16 flex items-center justify-center shrink-0 px-2 sm:px-4 transition-all duration-300 hover:scale-105"
                  title={company.name}
                >
                  <img
                    src={logoSrc}
                    alt={company.name}
                    className={`${company.customClass || 'h-7 sm:h-8 md:h-9 max-w-[140px] sm:max-w-[170px] md:max-w-[200px]'} object-contain transition-all duration-300 opacity-85 hover:opacity-100 drop-shadow-xs`}
                    onError={(e) => {
                      // Fallback if one variant fails
                      const target = e.currentTarget;
                      if (!target.src.includes(company.lightLogo)) {
                        target.src = company.lightLogo;
                      }
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
