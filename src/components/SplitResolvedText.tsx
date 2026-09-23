import React, { useEffect, useState } from 'react';

interface SplitResolvedTextProps {
  text: string;
  className?: string;
  delayStartMs?: number;
  charStaggerMs?: number;
  wordMode?: boolean;
  onResolvedChange?: (isResolved: boolean) => void;
}

/**
 * SplitResolvedText
 * Reveals text by transitioning font-weight from thin/unresolved (200) to regular/bold (800),
 * closing the letter spacing from loose (0.12em) to tight (-0.04em),
 * and smoothly dropping blur and opacity into focus, reinforcing the 'Closer' / 'Resolved' concept.
 */
export const SplitResolvedText: React.FC<SplitResolvedTextProps> = ({
  text,
  className = '',
  delayStartMs = 150,
  charStaggerMs = 35,
  wordMode = false,
  onResolvedChange,
}) => {
  const [resolvedIndices, setResolvedIndices] = useState<Set<number>>(new Set());
  const [isFullyResolved, setIsFullyResolved] = useState(false);

  // Split into units (words or characters)
  const units = wordMode ? text.split(' ') : text.split('');

  useEffect(() => {
    // Reset state
    setResolvedIndices(new Set());
    setIsFullyResolved(false);

    const timeouts: ReturnEventId[] = [];
    type ReturnEventId = ReturnType<typeof setTimeout>;

    units.forEach((_, index) => {
      const timeoutId = setTimeout(() => {
        setResolvedIndices((prev) => {
          const next = new Set(prev);
          next.add(index);
          return next;
        });

        if (index === units.length - 1) {
          setIsFullyResolved(true);
          onResolvedChange?.(true);
        }
      }, delayStartMs + index * charStaggerMs);

      timeouts.push(timeoutId);
    });

    return () => {
      timeouts.forEach((id) => clearTimeout(id));
    };
  }, [text, delayStartMs, charStaggerMs, wordMode]);

  return (
    <span className={`inline-flex flex-wrap items-baseline ${className}`} aria-label={text}>
      {units.map((unit, index) => {
        const isResolved = resolvedIndices.has(index);

        return (
          <span
            key={`${unit}-${index}`}
            style={{
              // Weight transition: thin/unresolved (200) -> resolved/bold (800)
              fontWeight: isResolved ? 800 : 200,
              // Letter spacing: loose unclosed gap (0.10em) -> closed tight (-0.04em)
              letterSpacing: isResolved ? '-0.04em' : '0.10em',
              opacity: isResolved ? 1 : 0.2,
              transform: isResolved ? 'translateY(0px) scale(1)' : 'translateY(10px) scale(0.96)',
              filter: isResolved ? 'blur(0px)' : 'blur(4px)',
              transition: `
                font-weight 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                letter-spacing 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                opacity 0.5s ease-out,
                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                filter 0.5s ease-out
              `,
              display: 'inline-block',
              whiteSpace: unit === ' ' ? 'pre' : 'normal',
            }}
            className="transition-all select-none will-change-[font-weight,letter-spacing,transform]"
          >
            {unit === ' ' ? '\u00A0' : unit}
          </span>
        );
      })}
    </span>
  );
};
