import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GridPulse } from "./grid-pulse";

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Mihir has a very good understanding of design beyond just visuals. He asks the right questions, takes ownership, and brings thoughtful ideas to the table.",
    name: "Bhushan Pungaliya",
    role: "Founder, CEO",
    company: "Varlyq",
  },
  {
    quote:
      "Mihir was great at understanding what we were trying to achieve and turning those ideas into something clear, practical, and genuinely easy to use.",
    name: "Vedanth P",
    role: "Founder, CEO",
    company: "Aarogya ID",
  },
  {
    quote:
      "What I really appreciate about Mihir is how involved he gets in the problem. He brings his own perspective and never hesitates to explore better solutions.",
    name: "Deepak Panchal",
    role: "Founder, CEO",
    company: "Atzean Technologies",
  },
  {
    quote:
      "Mihir brings a lot of curiosity into his work. He is open to discussions, takes feedback well, and always pushes the design a little further.",
    name: "Jinsy John",
    role: "Senior Manager, UX Design",
    company: "F1Studioz",
  },
  {
    quote:
      "Working with Mihir was always smooth. He understood technical constraints, communicated his design decisions clearly, and worked closely with developers to make sure the final experience came together well.",
    name: "Jatin Nimade",
    role: "Senior Developer",
    company: "Standard Technology",
  },
];

export function Testimonial({
  testimonials = DEFAULT_TESTIMONIALS,
  title = "What people say when I'm not in the room.",
  eyebrow = "RECOMMENDATIONS",
  autoPlay = false,
  interval = 7000,
}: {
  testimonials?: TestimonialItem[];
  title?: string;
  eyebrow?: string;
  autoPlay?: boolean;
  interval?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeItem = testimonials[currentIndex] || testimonials[0];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[1080px] snap-start bg-white dark:bg-[#18181b] text-[#111111] dark:text-[#F3F4F6] overflow-hidden select-none flex flex-col justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 transition-colors duration-250"
    >
      {/* Dynamic Grid Pulse ambient interactive background */}
      <GridPulse
        cell={32}
        reach={2.4}
        ambient={1}
        maxLit={50}
        avoid="[data-grid-avoid]"
        className="opacity-45 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1100px] w-full mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-between h-full max-h-[780px]">
        {/* Centered Heading without subtext or separation line */}
        <div className="text-center mx-auto max-w-[800px] mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8fc33b]" />
            <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#8A8A87] dark:text-[#A1A1AA]">
              {eyebrow}
            </span>
          </div>
          <h2
            data-grid-avoid
            className="font-display font-bold text-[30px] sm:text-[40px] lg:text-[46px] leading-[1.08] tracking-tight text-[#111111] dark:text-white"
          >
            {title}
          </h2>
        </div>

        {/* Featured Testimonial Content (No card background, pure typographic elegance) */}
        <div className="w-full max-w-[880px] mx-auto my-auto px-2 sm:px-6 py-4 flex flex-col justify-between relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center text-center justify-between"
            >
              {/* Quote Text */}
              <blockquote
                data-grid-avoid
                className="font-display font-medium text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.3] tracking-tight text-[#111111] dark:text-white mb-8 text-center max-w-[820px] mx-auto"
              >
                “{activeItem.quote}”
              </blockquote>

              {/* Author Meta */}
              <div className="flex flex-col items-center justify-center gap-2.5 pt-5 border-t border-[#EAEAE8] dark:border-[#2e2e34] w-full max-w-[360px] mx-auto text-center">
                <div className="flex flex-col items-center text-center">
                  <div className="font-display font-bold text-[16px] text-[#111111] dark:text-white leading-tight">
                    {activeItem.name}
                  </div>
                  <div className="font-sans text-[13px] text-[#737373] dark:text-[#A1A1AA] mt-0.5">
                    {activeItem.role} · <span className="text-[#111111] dark:text-neutral-200 font-bold">{activeItem.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls: Chevrons directly integrated alongside dotted positions */}
        <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8 shrink-0">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full border border-[#E5E5E2] dark:border-[#3a3b42] bg-white dark:bg-[#202126] text-[#111111] dark:text-white flex items-center justify-center hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-[#111111] transition-all cursor-pointer shadow-xs active:scale-95"
          >
            <ChevronLeft className="w-4.5 h-4.5" />
          </button>

          {/* Dotted positions */}
          <div className="flex items-center gap-2 px-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === i
                    ? "w-6 bg-[#111111] dark:bg-white"
                    : "w-2 bg-[#D1D1CE] dark:bg-[#3a3b42] hover:bg-[#8A8A87]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full border border-[#E5E5E2] dark:border-[#3a3b42] bg-white dark:bg-[#202126] text-[#111111] dark:text-white flex items-center justify-center hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-[#111111] transition-all cursor-pointer shadow-xs active:scale-95"
          >
            <ChevronRight className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
