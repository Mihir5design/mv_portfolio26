import React, { useEffect, useRef, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      const container = document.getElementById('main-scroll-container');

      if (container && container.scrollHeight > container.clientHeight) {
        const totalHeight = container.scrollHeight - container.clientHeight;
        if (totalHeight > 0) {
          const currentProgress = (container.scrollTop / totalHeight) * 100;
          setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
          return;
        }
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    const handleScroll = () => {
      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateProgress();
      });
    };

    const container = document.getElementById('main-scroll-container');
    window.addEventListener('scroll', handleScroll, { passive: true });
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }

    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      id="scroll-progress-bar-container"
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading scroll progress"
      className="fixed top-0 left-0 right-0 z-50 h-[2.5px] pointer-events-none bg-black/[0.04]"
    >
      <div
        id="scroll-progress-indicator"
        className="h-full transition-all duration-75 ease-out bg-[#111111]"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
};
