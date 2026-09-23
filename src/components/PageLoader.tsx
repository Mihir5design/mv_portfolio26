import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageLoaderProps {
  onLoadingComplete?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth, rapid architectural counter from 0 to 100
    const startTime = Date.now();
    const duration = 1200; // 1.2s optimal duration

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          onLoadingComplete?.();
        }, 220);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="page-loader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1], // Custom snappy cubic bezier
            },
          }}
          className="fixed inset-0 z-50 bg-[#0D0D0D] text-white flex flex-col justify-between p-6 sm:p-12 select-none"
        >
          {/* Top Label */}
          <div className="flex items-center justify-between font-mono text-[11px] sm:text-[12px] tracking-[0.2em] text-[#808080] uppercase">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>MIHIR VAIDYA / STUDIO '26</span>
            </div>
            <span>BANGALORE, IN</span>
          </div>

          {/* Center Typographic Manifesto */}
          <div className="my-auto max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-[11px] text-[#A0A0A0] tracking-widest uppercase mb-4"
            >
              INITIALIZING DESIGN SYSTEM
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-black text-[32px] sm:text-[54px] md:text-[68px] tracking-[-0.04em] leading-[0.95] text-white"
            >
              Making complex products feel obvious<span className="text-[#10B981]">.</span>
            </motion.h1>
          </div>

          {/* Bottom Progress Counter and Line */}
          <div className="space-y-4">
            <div className="flex items-end justify-between font-mono text-white">
              <span className="text-[12px] tracking-widest text-[#808080]">
                EXPERIENCE ARCHITECTURE
              </span>
              <span className="text-[28px] sm:text-[36px] font-bold tracking-tighter">
                {String(progress).padStart(2, '0')}%
              </span>
            </div>

            {/* Hairline Progress Bar */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
