import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface ToolDockItem {
  label: string;
  icon: React.ReactNode;
}

export interface ToolDockTileProps {
  className?: string;
  children: React.ReactNode;
}

export function ToolDockTile({ className = '', children }: ToolDockTileProps) {
  return (
    <div
      className={`w-full h-full rounded-[14px] sm:rounded-[18px] flex items-center justify-center shadow-[0_6px_18px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_22px_rgba(0,0,0,0.35)] border border-black/5 dark:border-white/10 overflow-hidden select-none transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}

export interface ToolDockProps {
  items: ToolDockItem[];
  label?: string;
  className?: string;
}

export function ToolDock({ items, className = '' }: ToolDockProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className={`relative flex items-center justify-center pt-10 pb-4 px-2 ${className}`}>
      {/* Completely Open, uncontained floating icon row (No dock background or border) */}
      <div
        className="relative flex items-center justify-center gap-3 sm:gap-4 md:gap-5 flex-wrap max-w-[960px] mx-auto overflow-visible py-4"
        onMouseLeave={() => setHoveredIdx(null)}
      >
        {items.map((item, idx) => {
          const isHovered = hoveredIdx === idx;
          const isNeighbor =
            hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1;

          const scale = isHovered ? 1.34 : isNeighbor ? 1.12 : 1;
          const translateY = isHovered ? -14 : isNeighbor ? -5 : 0;

          return (
            <div
              key={item.label}
              className="relative flex flex-col items-center group cursor-pointer"
              onMouseEnter={() => setHoveredIdx(idx)}
            >
              {/* Tooltip bubble appearing above hovered icon */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute -top-12 z-40 pointer-events-none flex flex-col items-center"
                  >
                    <div className="px-3 py-1 rounded-[10px] bg-[#111111] dark:bg-white text-white dark:text-[#111111] font-sans text-[12px] sm:text-[13px] font-bold shadow-[0_8px_24px_rgba(0,0,0,0.25)] whitespace-nowrap">
                      {item.label}
                    </div>
                    {/* Downward triangle arrow */}
                    <div className="w-0 h-0 border-x-[5px] border-x-transparent border-t-[5px] border-t-[#111111] dark:border-t-white -mt-[0.5px]" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Animated Floating Icon Tile */}
              <motion.div
                animate={{
                  scale,
                  y: translateY,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 420,
                  damping: 22,
                  mass: 0.5,
                }}
                className={`w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-[14px] sm:rounded-[18px] origin-bottom transition-all ${
                  isHovered ? 'z-30 drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]' : 'z-10'
                }`}
              >
                {item.icon}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
