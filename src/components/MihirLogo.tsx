import React from 'react';

interface MihirLogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
  variant?: 'light' | 'dark';
  wordmarkClassName?: string;
}

export const MihirLogo: React.FC<MihirLogoProps> = ({
  className = '',
  size = 36,
  showWordmark = true,
  variant = 'light',
  wordmarkClassName,
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Circle emblem with provided logo image */}
      <div
        className="rounded-full relative shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-105 overflow-hidden flex items-center justify-center bg-black"
        style={{ width: size, height: size }}
        aria-label="Mihir Logo"
      >
        <img
          src="/logo.svg"
          alt="Mihir Vaidya Logo"
          width={size}
          height={size}
          className="w-full h-full object-contain block"
        />
      </div>

      {/* Brand wordmark "Mihir Vaidya" */}
      {showWordmark && (
        <span
          className={
            wordmarkClassName ||
            `font-sans font-bold text-[17px] sm:text-[19px] tracking-[-0.02em] leading-none whitespace-nowrap ${
              isDark ? 'text-white' : 'text-[#000000]'
            }`
          }
        >
          Mihir Vaidya
        </span>
      )}
    </div>
  );
};
