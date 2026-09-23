import React, { useState } from 'react';
import { Search, Compass, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { GridPulse } from './ui/grid-pulse';

interface StepItem {
  num: string;
  title: string;
  focus: string;
  summary: string;
  icon: React.ReactNode;
}

export const ServicesSection: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps: StepItem[] = [
    {
      num: '01',
      title: 'Discover & Frame',
      focus: 'CLARITY FIRST',
      summary: 'Auditing workflows and identifying the real human bottleneck before opening Figma.',
      icon: <Search className="w-5 h-5 text-[#8fc33b]" />,
    },
    {
      num: '02',
      title: 'Structural Architecture',
      focus: 'REDUCING FRICTION',
      summary: 'Mapping mental models, core entities, and high-clarity grayscale wire flows.',
      icon: <Compass className="w-5 h-5 text-[#8fc33b]" />,
    },
    {
      num: '03',
      title: 'Tactile Interface',
      focus: 'CRAFT & ERGONOMICS',
      summary: 'High-density tooling, tokenized systems, and micro-interactions for daily power users.',
      icon: <Layers className="w-5 h-5 text-[#8fc33b]" />,
    },
    {
      num: '04',
      title: 'Ship & Validate',
      focus: 'ZERO TRANSLATION LOSS',
      summary: 'Production-ready tokens, usability scorecards, and relentless design QA reviews.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#8fc33b]" />,
    },
  ];

  return (
    <section
      id="process"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[1080px] snap-start bg-white dark:bg-[#18181b] select-none flex flex-col justify-center pt-28 sm:pt-32 pb-12 sm:pb-16 transition-colors duration-250 overflow-hidden"
    >
      {/* Ambient Grid Pulse Background */}
      <GridPulse
        cell={32}
        reach={2.4}
        ambient={1}
        maxLit={45}
        avoid="[data-grid-avoid]"
        className="opacity-40 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1360px] w-full mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-between h-full max-h-[760px]">
        {/* Header: Concise and clean */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8fc33b]" />
              <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#8A8A87] dark:text-[#A1A1AA]">
                DISCIPLINED METHODOLOGY
              </span>
            </div>
            <h2
              data-grid-avoid
              className="font-display font-bold text-[30px] sm:text-[40px] lg:text-[46px] tracking-tight text-[#111111] dark:text-white leading-[1.08]"
            >
              A simple process for complicated work.
            </h2>
          </div>

          <p
            data-grid-avoid
            className="text-[14px] sm:text-[15px] text-[#71717A] dark:text-[#A1A1AA] font-sans max-w-[380px] leading-relaxed md:text-right"
          >
            From ambiguous problem spaces to intuitive, production-ready interfaces.
          </p>
        </div>

        {/* Horizontal Step Journey (Less informative, purely visual & streamlined) */}
        <div className="my-auto py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 relative">
            {steps.map((step, idx) => {
              const isHovered = hoveredStep === idx;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 * idx }}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`relative rounded-[22px] sm:rounded-[26px] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between min-h-[240px] sm:min-h-[270px] cursor-pointer border ${
                    isHovered
                      ? 'bg-[#FBFBFA] dark:bg-[#202126] border-[#111111] dark:border-[#8fc33b] shadow-[0_16px_36px_-12px_rgba(0,0,0,0.12)] -translate-y-1.5'
                      : 'bg-[#FBFBFA]/60 dark:bg-[#202126]/50 border-[#E8E8E5] dark:border-[#2e2e34] hover:border-[#CCCCCC]'
                  }`}
                >
                  {/* Top: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[12px] font-bold text-[#8A8A87] dark:text-[#71717A]">
                        PHASE
                      </span>
                      <span
                        className={`w-7 h-7 rounded-lg font-mono text-[12px] font-bold flex items-center justify-center transition-colors ${
                          isHovered
                            ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111]'
                            : 'bg-[#EDEDEB] dark:bg-[#2c2d33] text-[#111111] dark:text-white'
                        }`}
                      >
                        {step.num}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#27282e] border border-[#E5E5E2] dark:border-[#383940] flex items-center justify-center shadow-2xs">
                      {step.icon}
                    </div>
                  </div>

                  {/* Body: Punchy Title & 1-sentence summary */}
                  <div className="flex-1 flex flex-col justify-center my-2">
                    <span className="font-mono text-[10px] text-[#8fc33b] uppercase font-bold tracking-wider mb-1.5 block">
                      {step.focus}
                    </span>
                    <h3 className="font-display font-bold text-[20px] sm:text-[22px] text-[#111111] dark:text-white tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 font-sans text-[13.5px] sm:text-[14px] text-[#555555] dark:text-[#A1A1AA] leading-relaxed">
                      {step.summary}
                    </p>
                  </div>

                  {/* Bottom: Subtle Step Connection indicator */}
                  <div className="pt-4 border-t border-[#EDEDEB] dark:border-[#2e2e34] flex items-center justify-between font-mono text-[10.5px] text-[#8A8A87] dark:text-[#71717A]">
                    <span>STEP 0{idx + 1} OF 04</span>
                    {idx < steps.length - 1 ? (
                      <ArrowRight className="w-3.5 h-3.5 text-[#8A8A87] dark:text-[#71717A]" />
                    ) : (
                      <span className="text-[#8fc33b] font-bold">SHIP</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom subtle progress trajectory */}
        <div className="hidden lg:flex items-center justify-between pt-4 border-t border-[#EAEAE8] dark:border-[#2e2e34] font-mono text-[11px] text-[#8A8A87] dark:text-[#71717A]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8fc33b]" />
            Repeatable sprint cadences designed for zero engineering friction.
          </span>
          <span className="font-bold text-[#111111] dark:text-white">
            5+ YEARS CONTINUOUS ITERATION
          </span>
        </div>
      </div>
    </section>
  );
};
