import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { GridPulse } from './ui/grid-pulse';

interface AboutSnapshotProps {
  onNavigateAbout: () => void;
  onContactClick?: () => void;
}

export const AboutSnapshot: React.FC<AboutSnapshotProps> = ({
  onNavigateAbout,
  onContactClick,
}) => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[1080px] snap-start bg-white dark:bg-[#18181b] select-none overflow-hidden flex flex-col justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 transition-colors duration-250"
    >
      {/* Dynamic Grid Pulse ambient interactive background */}
      <GridPulse
        cell={32}
        reach={2.4}
        ambient={1}
        maxLit={50}
        avoid="[data-grid-avoid]"
        className="opacity-45 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1360px] w-full mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-between h-full max-h-[820px]">
        {/* Center Grid: Tilted Specimen Tablet on Left, Bio on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-auto">
          {/* Left Column: Floating Levitating Character Artwork with Airspace Ground Shadow */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-4 sm:py-6 group cursor-pointer">
            <motion.div
              data-grid-avoid
              animate={{
                y: [-8, 8, -8],
              }}
              whileHover={{
                scale: 1.05,
                y: -14,
              }}
              transition={{
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className="relative w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] z-10 flex items-center justify-center select-none"
            >
              <img
                src="/aboutme.png"
                alt="Mihir Vaidya — Levitating in Peace"
                className="w-full h-auto max-h-[500px] sm:max-h-[540px] object-contain drop-shadow-[0_24px_38px_rgba(0,0,0,0.28)] dark:drop-shadow-[0_28px_45px_rgba(0,0,0,0.65)] transition-all duration-300 group-hover:drop-shadow-[0_32px_48px_rgba(0,0,0,0.38)] dark:group-hover:drop-shadow-[0_36px_56px_rgba(0,0,0,0.8)] pointer-events-none"
                loading="lazy"
              />
            </motion.div>

            {/* Darker Realistic Levitating Ground Shadow in Airspace */}
            <motion.div
              aria-hidden="true"
              animate={{
                scale: [0.88, 1.12, 0.88],
                opacity: [0.6, 0.88, 0.6],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[180px] sm:w-[220px] md:w-[260px] h-[18px] sm:h-[24px] rounded-[100%] bg-radial from-black/75 via-black/40 to-transparent dark:from-black/95 dark:via-black/60 dark:to-transparent blur-[7px] sm:blur-[9px] mt-1 pointer-events-none transition-all duration-300 group-hover:scale-110 group-hover:opacity-95"
            />
          </div>

          {/* Right Column: Bio Copy */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-grid-avoid
              className="font-display font-bold text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[48px] tracking-tight text-[#111111] dark:text-white leading-[1.06] mb-4 sm:mb-5"
            >
              Part designer. Part
              <br />
              problem investigator.
              <br />
              Part professional
              <br />
              overthinker.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              data-grid-avoid
              className="text-[14.5px] sm:text-[16px] lg:text-[17px] text-[#525252] dark:text-[#A1A1AA] font-sans leading-[1.65] max-w-[560px] mb-5 sm:mb-6"
            >
              I've spent 5+ years designing products across B2B, healthcare, fintech, AI, and enterprise. The industry changes; the enjoyable part stays the same: getting into the details, finding the real problem, and making it intuitive to use.
            </motion.p>

            {/* Status Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3 font-sans text-[12px] sm:text-[13px] font-bold text-[#111111] dark:text-white"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E5E5E2] dark:border-[#3a3b42] bg-[#F7F7F7] dark:bg-[#202126]">
                <MapPin className="w-3.5 h-3.5 text-[#111111] dark:text-white" />
                <span>Indore, India</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E5E5E2] dark:border-[#3a3b42] bg-[#F7F7F7] dark:bg-[#202126]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Available for Projects</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Experience Strip with Bold CTA */}
        <div className="pt-4 border-t border-[#EAEAE8] dark:border-[#2e2e34]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center font-sans text-[12.5px] sm:text-[13.5px]">
            {/* Experience */}
            <div className="md:col-span-5 flex items-center gap-2">
              <span className="font-mono text-[9.5px] text-[#8A8A87] dark:text-[#A1A1AA] uppercase tracking-wider font-bold">
                EXPERIENCE:
              </span>
              <span className="font-bold text-[#111111] dark:text-white">F1 Studioz</span>
              <span className="text-[#737373] dark:text-[#A1A1AA]">/ UX Designer · 2022 — 2025</span>
            </div>

            {/* Also worked with */}
            <div className="md:col-span-5 flex items-center gap-2">
              <span className="font-mono text-[9.5px] text-[#8A8A87] dark:text-[#A1A1AA] uppercase tracking-wider font-bold">
                ALSO WORKED WITH:
              </span>
              <span className="font-bold text-[#333333] dark:text-neutral-300">
                7Edge · Siya Tech · Credence
              </span>
            </div>

            {/* Say hello button */}
            <div className="md:col-span-2 flex md:justify-end">
              <button
                type="button"
                onClick={onContactClick || onNavigateAbout}
                className="font-bold text-[#111111] dark:text-white hover:text-[#8fc33b] dark:hover:text-[#8fc33b] flex items-center gap-1 group cursor-pointer"
              >
                <span className="font-bold">Say hello</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
