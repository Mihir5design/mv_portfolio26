import React from 'react';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { siteMeta } from '../data/portfolioData';

interface NavigationProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenResume?: () => void;
  onScrollToSection?: (sectionId: string) => void;
}

// Custom Saturn Emblem matching the exact icon in image.png
const SaturnEmblem: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
  >
    <g transform="rotate(-28 12 12)">
      {/* Back ring */}
      <path
        d="M2.2 12 C2.2 7.8 6.5 6.6 12 6.6 C17.5 6.6 21.8 7.8 21.8 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      {/* Solid center planet */}
      <circle cx="12" cy="12" r="5.2" fill="currentColor" />
      {/* Front ring */}
      <path
        d="M21.8 12 C21.8 16.2 17.5 17.4 12 17.4 C6.5 17.4 2.2 16.2 2.2 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const Navigation: React.FC<NavigationProps> = ({
  onNavigate,
  onOpenResume,
  onScrollToSection,
}) => {
  const { isDark, toggleTheme } = useTheme();

  const handleSectionClick = (sectionId: string) => {
    if (onScrollToSection) {
      onScrollToSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        onNavigate('/');
      }
    }
  };

  return (
    <header
      id="site-header"
      className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-24px)] pointer-events-auto select-none"
    >
      {/* Centered Floating Pill Navigation with frosted glass effect */}
      <nav
        aria-label="Main Navigation"
        className="flex items-center gap-1 sm:gap-2 md:gap-3 bg-[#181818]/70 backdrop-blur-xl backdrop-saturate-150 border border-white/15 dark:border-white/20 shadow-[0_16px_36px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.12)] rounded-full px-2 py-1.5 sm:py-2 text-white transition-all duration-200"
      >
        {/* Left: Circular emblem with favicon image */}
        <button
          type="button"
          onClick={() => handleSectionClick('hero')}
          aria-label="Go to home"
          title="Mihir - Home"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#111111] flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-xs overflow-hidden"
        >
          <img
            src="/Fevicon.png"
            alt="Mihir Logo"
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            onError={(e) => {
              const target = e.currentTarget;
              target.src = '/logo.svg';
            }}
          />
        </button>

        {/* Center Nav Links: Work, About, Playground, Contact */}
        <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 px-1 sm:px-2">
          <button
            type="button"
            onClick={() => handleSectionClick('work')}
            className="px-2.5 sm:px-3 py-1.5 rounded-full text-[13px] sm:text-[14px] font-sans font-semibold text-[#D4D4D8] hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            Work
          </button>
          <button
            type="button"
            onClick={() => handleSectionClick('about')}
            className="px-2.5 sm:px-3 py-1.5 rounded-full text-[13px] sm:text-[14px] font-sans font-semibold text-[#D4D4D8] hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => handleSectionClick('process')}
            className="hidden xs:inline-flex px-2.5 sm:px-3 py-1.5 rounded-full text-[13px] sm:text-[14px] font-sans font-semibold text-[#D4D4D8] hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            Process
          </button>
          <button
            type="button"
            onClick={() => handleSectionClick('contact')}
            className="hidden sm:inline-flex px-2.5 sm:px-3 py-1.5 rounded-full text-[13px] sm:text-[14px] font-sans font-semibold text-[#D4D4D8] hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Theme Switcher Button */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[#B5B5B5] hover:text-white hover:bg-white/10 transition-all cursor-pointer shrink-0"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-[#FACC15] transition-transform hover:rotate-45" />
          ) : (
            <Moon className="w-4 h-4 text-[#E0E0E0] transition-transform hover:-rotate-12" />
          )}
        </button>

        {/* Right: White pill button for Resume preview & redirect matching selector 1 */}
        <a
          href="https://drive.google.com/file/d/1pcVUt6C3Yf59K1sPkvUoCSqE4cqEenbf/view"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Preview and redirect Mihir's Resume"
          title="Preview and download Mihir's Resume"
          className="px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full bg-white hover:bg-[#F2F2F2] text-[#111111] font-sans text-[12px] sm:text-[13px] font-bold flex items-center gap-1.5 shrink-0 transition-all shadow-xs hover:shadow-sm active:scale-95 cursor-pointer ml-0.5 border border-white/20"
        >
          <span className="font-bold">Resume</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#111111] stroke-[2.5]" />
        </a>
      </nav>
    </header>
  );
};
