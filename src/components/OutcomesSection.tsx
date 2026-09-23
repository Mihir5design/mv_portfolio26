import React from 'react';
import { motion } from 'motion/react';
import { GridPulse } from './ui/grid-pulse';

export const OutcomesSection: React.FC = () => {
  const metrics = [
    {
      num: '01',
      stat: '50 sec',
      label: 'Average clinical patient onboarding (reduced from 8 mins)',
      client: 'Reclaimz / HealthCo',
      accentColor: '#10B981',
    },
    {
      num: '02',
      stat: '15%',
      label: 'Improvement in Ayurvedic diagnostic lead conversion',
      client: 'Indulekha / Unilever',
      accentColor: '#F59E0B',
    },
    {
      num: '03',
      stat: '62%',
      label: 'Faster acoustic model training & shop-floor setup',
      client: 'TechM / LineSense',
      accentColor: '#06B6D4',
    },
  ];

  return (
    <section
      id="outcomes"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[1080px] snap-start bg-[#FBFBFA] dark:bg-[#18181b] text-[#111111] dark:text-white select-none overflow-hidden flex flex-col justify-center py-14 sm:py-16 lg:py-20 transition-colors duration-250"
    >
      {/* Dynamic Grid Pulse ambient interactive background */}
      <GridPulse
        cell={32}
        reach={2.4}
        ambient={1}
        maxLit={50}
        avoid="[data-grid-avoid]"
        className="opacity-40 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1360px] w-full mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Value Prop Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8fc33b]" />
              <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#8A8A87] dark:text-[#A1A1AA]">
                VALUE PROP · MEASURED IMPACT
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-grid-avoid
              className="font-display font-bold text-[36px] sm:text-[46px] lg:text-[54px] leading-[1.04] tracking-[-0.03em] text-[#111111] dark:text-white"
            >
              The screen is the output.
              <br />
              <span className="text-[#8fc33b] italic">The outcome is the point.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              data-grid-avoid
              className="mt-6 text-[15px] sm:text-[17px] text-[#555555] dark:text-[#A1A1AA] font-sans max-w-[500px] leading-relaxed"
            >
              Good design should save time, reduce friction, or help somebody make a better decision. Every interface is measured against actual business health and user retention.
            </motion.p>
          </div>

          {/* Right Column: Numbers Vertically Beside Content (No Cards layout) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="divide-y divide-[#E5E5E2] dark:divide-[#2e2e34]">
              {metrics.map((item, idx) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 * idx }}
                  className="py-6 sm:py-7 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 group"
                >
                  {/* Metric Stat Number */}
                  <div className="flex items-baseline gap-3 shrink-0 sm:w-[170px] lg:w-[190px]">
                    <span className="font-mono text-[11px] font-bold text-[#8A8A87] dark:text-[#71717A]">
                      {item.num}
                    </span>
                    <span className="font-display font-bold text-[44px] sm:text-[52px] lg:text-[56px] text-[#111111] dark:text-white leading-none tracking-tight group-hover:text-[#8fc33b] transition-colors">
                      {item.stat}
                    </span>
                  </div>

                  {/* Context & Client */}
                  <div className="flex-1">
                    <p className="font-sans text-[15px] sm:text-[16px] text-[#222222] dark:text-[#E4E4E7] font-medium leading-snug">
                      {item.label}
                    </p>
                    <span className="font-mono text-[11px] text-[#8A8A87] dark:text-[#A1A1AA] uppercase tracking-wider block mt-1.5">
                      {item.client}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
