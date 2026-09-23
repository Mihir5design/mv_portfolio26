import React, { useRef, useState, useEffect, useCallback } from 'react';

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Distance multiplier for magnetic pull (e.g. 0.35)
  innerStrength?: number; // Parallax multiplier for inner content (e.g. 0.15)
  activeScale?: number; // Scale on hover (e.g. 1.05)
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  as?: 'div' | 'button' | 'a' | 'span';
  href?: string;
  target?: string;
  rel?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  title?: string;
}

export const Magnetic: React.FC<MagneticProps> = ({
  children,
  className = '',
  strength = 0.35,
  innerStrength = 0.15,
  activeScale = 1.02,
  disabled = false,
  onClick,
  as = 'div',
  href,
  target,
  rel,
  id,
  type,
  ariaLabel,
  title,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect coarse pointer / touch devices
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(isTouch);
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (disabled || isTouchDevice || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from center
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      setPosition({
        x: distanceX * strength,
        y: distanceY * strength,
      });
    },
    [disabled, isTouchDevice, strength]
  );

  const handleMouseEnter = () => {
    if (disabled || isTouchDevice) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (disabled || isTouchDevice) return;
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const Component = as as any;

  const style: React.CSSProperties = isTouchDevice || disabled
    ? {}
    : {
        transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${
          isHovered ? activeScale : 1
        })`,
        transition: isHovered
          ? 'transform 0.12s cubic-bezier(0.25, 1, 0.5, 1)'
          : 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        willChange: 'transform',
      };

  const innerStyle: React.CSSProperties = isTouchDevice || disabled || innerStrength === 0
    ? {}
    : {
        transform: `translate3d(${position.x * innerStrength}px, ${position.y * innerStrength}px, 0)`,
        transition: isHovered
          ? 'transform 0.14s cubic-bezier(0.25, 1, 0.5, 1)'
          : 'transform 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      };

  return (
    <Component
      ref={ref}
      id={id}
      type={as === 'button' ? type || 'button' : undefined}
      href={as === 'a' ? href : undefined}
      target={as === 'a' ? target : undefined}
      rel={as === 'a' ? rel : undefined}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      title={title}
      className={`relative inline-block ${className}`}
      style={style}
    >
      <span style={innerStyle}>{children}</span>
    </Component>
  );
};
