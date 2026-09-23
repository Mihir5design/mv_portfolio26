import React, { useId } from 'react';
import { ToolDock, ToolDockTile, type ToolDockItem } from '@/components/ui/techstack';
import { motion } from 'motion/react';
import { GridPulse } from './ui/grid-pulse';

/**
 * The Codex app icon: the mark (from svgl.app) in its blue-violet gradient.
 */
function CodexIcon() {
  const gradient = useId();
  return (
    <ToolDockTile className="bg-[#222]">
      <svg viewBox="0 0 24 24" aria-hidden className="w-[62%] h-[62%]">
        <defs>
          <linearGradient id={gradient} x1="0.35" y1="0" x2="0.6" y2="1">
            <stop offset="0" stopColor="#bdacf9" />
            <stop offset="0.5" stopColor="#7590f7" />
            <stop offset="1" stopColor="#352df5" />
          </linearGradient>
        </defs>
        <rect x="6" y="7" width="12" height="10" fill="#fff" />
        <path
          fill={`url(#${gradient})`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.086.457a6.105 6.105 0 013.046-.415c1.333.153 2.521.72 3.564 1.7a.117.117 0 00.107.029c1.408-.346 2.762-.224 4.061.366l.063.03.154.076c1.357.703 2.33 1.77 2.918 3.198.278.679.418 1.388.421 2.126a5.655 5.655 0 01-.18 1.631.167.167 0 00.04.155 5.982 5.982 0 011.578 2.891c.385 1.901-.01 3.615-1.183 5.14l-.182.22a6.063 6.063 0 01-2.934 1.851.162.162 0 00-.108.102c-.255.736-.511 1.364-.987 1.992-1.199 1.582-2.962 2.462-4.948 2.451-1.583-.008-2.986-.587-4.21-1.736a.145.145 0 00-.14-.032c-.518.167-1.04.191-1.604.185a5.924 5.924 0 01-2.595-.622 6.058 6.058 0 01-2.146-1.781c-.203-.269-.404-.522-.551-.821a7.74 7.74 0 01-.495-1.283 6.11 6.11 0 01-.017-3.064.166.166 0 00.008-.074.115.115 0 00-.037-.064 5.958 5.958 0 01-1.38-2.202 5.196 5.196 0 01-.333-1.589 6.915 6.915 0 01.188-2.132c.45-1.484 1.309-2.648 2.577-3.493.282-.188.55-.334.802-.438.286-.12.573-.22.861-.304a.129.129 0 00.087-.087A6.016 6.016 0 015.635 2.31C6.315 1.464 7.132.846 8.086.457zm-.804 7.85a.848.848 0 00-1.473.842l1.694 2.965-1.688 2.848a.849.849 0 001.46.864l1.94-3.272a.849.849 0 00.007-.854l-1.94-3.393zm5.446 6.24a.849.849 0 000 1.695h4.848a.849.849 0 000-1.696h-4.848z"
        />
      </svg>
    </ToolDockTile>
  );
}

/** A brand logo from svgl.app on its app-icon tile. */
function logo(
  label: string,
  file: string,
  tile: string,
  { fit = 'w-[54%] h-[54%]', tone = '' } = {}
): ToolDockItem {
  return {
    label,
    icon: (
      <ToolDockTile className={tile}>
        <img
          src={`https://svgl.app/library/${file}.svg`}
          alt={label}
          draggable={false}
          className={`${fit} object-contain ${tone}`}
        />
      </ToolDockTile>
    ),
  };
}

/** Tools and platforms Mihir builds with */
const items: ToolDockItem[] = [
  logo('Claude Code', 'claude-ai-icon', 'bg-[#d76f4d]', {
    fit: 'w-[58%] h-[58%]',
    tone: 'brightness-0 invert',
  }),
  { label: 'Codex', icon: <CodexIcon /> },
  logo('GitHub', 'github_dark', 'bg-[#0d1117]'),
  logo('Figma', 'figma', 'bg-white', { fit: 'w-[46%] h-[46%]' }),
  logo('Supabase', 'supabase', 'bg-[#171717]'),
  logo('Cursor', 'cursor_dark', 'bg-[#14120b]', { fit: 'w-[50%] h-[50%]' }),
];

export const TechStackSection: React.FC = () => {
  return (
    <section
      id="techstack"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[1080px] snap-start bg-white dark:bg-[#18181b] select-none flex flex-col items-center justify-center text-center transition-colors duration-250 py-16 sm:py-20 overflow-hidden"
    >
      {/* Same Dynamic Grid Pulse ambient interactive background across all sections */}
      <GridPulse
        cell={32}
        reach={2.4}
        ambient={1}
        maxLit={45}
        avoid="[data-grid-avoid]"
        className="opacity-40 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1360px] w-full mx-auto px-6 sm:px-10 lg:px-12 flex flex-col items-center my-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8fc33b]" />
            <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#8A8A87] dark:text-[#A1A1AA]">
              PRIMARY ARSENAL
            </span>
          </div>

          <h2
            data-grid-avoid
            className="text-[28px] sm:text-[36px] lg:text-[42px] font-display font-bold text-[#111111] dark:text-white tracking-tight leading-tight"
          >
            Tools, systems & technologies I build with.
          </h2>
          <p
            data-grid-avoid
            className="mt-3 text-[14.5px] sm:text-[16px] text-[#666666] dark:text-[#A1A1AA] font-sans max-w-[560px] leading-relaxed"
          >
            From high-fidelity prototyping and design tokens to production-ready frontend workflows and intelligence layers.
          </p>
        </motion.div>

        {/* Open, uncontained floating icon row with spring cursor hover animation */}
        <div className="w-full max-w-full pt-6 flex justify-center">
          <ToolDock items={items} label="Tech stack" />
        </div>
      </div>
    </section>
  );
};
