import React, { useEffect, useRef, useState } from 'react';

export const TactileCursor: React.FC = () => {
  const targetPos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const haloRef = useRef<HTMLDivElement | null>(null);
  const pointerRef = useRef<HTMLDivElement | null>(null);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsTouchDevice(isTouch || prefersReducedMotion);
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('button, a, input, textarea, [role="button"], .cursor-pointer, [data-cursor="pointer"]')
        );
        setIsHoveringClickable(isClickable);
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    if (isTouchDevice || !isVisible) return;

    let animFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      followerPos.current = {
        x: lerp(followerPos.current.x, targetPos.current.x, 0.16),
        y: lerp(followerPos.current.y, targetPos.current.y, 0.16),
      };

      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) scale(${isMouseDown ? 0.85 : 1})`;
        haloRef.current.style.width = isHoveringClickable ? '38px' : '26px';
        haloRef.current.style.height = isHoveringClickable ? '38px' : '26px';
        haloRef.current.style.backgroundColor = isHoveringClickable ? 'rgba(143, 195, 59, 0.08)' : 'transparent';
      }

      if (pointerRef.current) {
        pointerRef.current.style.transform = `translate3d(${targetPos.current.x}px, ${targetPos.current.y}px, 0) scale(${isMouseDown ? 0.9 : 1})`;
      }

      animFrameId = requestAnimationFrame(animate);
    };

    animFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameId);
  }, [isHoveringClickable, isMouseDown, isTouchDevice, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <div
        ref={haloRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,transform] duration-150 ease-out will-change-transform"
        style={{
          width: isHoveringClickable ? '38px' : '26px',
          height: isHoveringClickable ? '38px' : '26px',
          border: '1.5px solid rgba(143, 195, 59, 0.65)',
          backgroundColor: isHoveringClickable ? 'rgba(143, 195, 59, 0.08)' : 'transparent',
        }}
      />

      <div
        ref={pointerRef}
        className="fixed top-0 left-0 -translate-x-1 -translate-y-1 will-change-transform transition-transform duration-75"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]"
        >
          <path
            d="M3 3L10.07 20.97L13.58 13.58L20.97 10.07L3 3Z"
            fill="#8fc33b"
            stroke="#111111"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
