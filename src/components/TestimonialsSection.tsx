import React, { useState } from 'react';
import { testimonialsData } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'founders' | 'engineering' | 'design'>('all');
  const [showAll, setShowAll] = useState(false);

  // Categorize testimonials
  const filteredTestimonials = testimonialsData.filter((t) => {
    if (activeFilter === 'all') return true;
    const lowerRole = (t.role + ' ' + t.company).toLowerCase();
    if (activeFilter === 'founders') {
      return lowerRole.includes('founder') || lowerRole.includes('ceo') || lowerRole.includes('vp') || lowerRole.includes('director') || lowerRole.includes('head');
    }
    if (activeFilter === 'engineering') {
      return lowerRole.includes('tech') || lowerRole.includes('engineer') || lowerRole.includes('developer') || lowerRole.includes('architect') || lowerRole.includes('cto');
    }
    if (activeFilter === 'design') {
      return lowerRole.includes('design') || lowerRole.includes('creative') || lowerRole.includes('product manager');
    }
    return true;
  });

  const displayList = showAll ? filteredTestimonials : filteredTestimonials.slice(0, 6);

  return (
    <section
      id="testimonials"
      className="relative w-full bg-white py-24 sm:py-32 border-b border-[#E5E5E2]"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center justify-between font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#8A8A87] mb-8 pb-3 border-b border-[#E5E5E2]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            <span>08 / FROM PEOPLE I’VE WORKED WITH</span>
          </div>
          <span className="font-sans font-semibold text-[#8A8A87]">
            12 VERIFIED RECOMMENDATIONS
          </span>
        </div>

        {/* Header & Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-[#E5E5E2]">
          <div className="max-w-[840px]">
            <h2 className="font-display font-bold text-[36px] sm:text-[56px] leading-[1.08] tracking-[-0.035em] text-[#111111]">
              What people say when I’m not in the room.
            </h2>
            <p className="mt-5 text-[18px] sm:text-[20px] text-[#575757] font-sans font-normal leading-[1.6]">
              A few words from colleagues, engineering partners, and founders I’ve built products alongside.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white border border-[#E5E5E2] p-1.5 rounded-full self-start md:self-end">
            <button
              type="button"
              onClick={() => { setActiveFilter('all'); setShowAll(false); }}
              className={`px-3.5 py-1 rounded-full text-[12px] font-sans font-semibold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#111111] text-white'
                  : 'text-[#575757] hover:text-[#111111]'
              }`}
            >
              All (12)
            </button>
            <button
              type="button"
              onClick={() => { setActiveFilter('founders'); setShowAll(false); }}
              className={`px-3.5 py-1 rounded-full text-[12px] font-sans font-semibold transition-all cursor-pointer ${
                activeFilter === 'founders'
                  ? 'bg-[#111111] text-white'
                  : 'text-[#575757] hover:text-[#111111]'
              }`}
            >
              Leadership
            </button>
            <button
              type="button"
              onClick={() => { setActiveFilter('engineering'); setShowAll(false); }}
              className={`px-3.5 py-1 rounded-full text-[12px] font-sans font-semibold transition-all cursor-pointer ${
                activeFilter === 'engineering'
                  ? 'bg-[#111111] text-white'
                  : 'text-[#575757] hover:text-[#111111]'
              }`}
            >
              Engineering
            </button>
            <button
              type="button"
              onClick={() => { setActiveFilter('design'); setShowAll(false); }}
              className={`px-3.5 py-1 rounded-full text-[12px] font-sans font-semibold transition-all cursor-pointer ${
                activeFilter === 'design'
                  ? 'bg-[#111111] text-white'
                  : 'text-[#575757] hover:text-[#111111]'
              }`}
            >
              Design & Product
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayList.map((t, idx) => {
            // Generate initials
            const initials = t.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2);

            return (
              <div
                key={idx}
                className="group relative rounded-[24px] bg-white border border-[#E5E5E2] hover:border-[#111111] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_32px_-8px_rgba(0,0,0,0.06)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-6 h-6 text-[#111111]/20" />
                    <span className="w-8 h-8 rounded-full bg-[#F7F7F7] border border-[#E5E5E2] text-[11px] font-display font-bold text-[#111111] flex items-center justify-center">
                      {initials}
                    </span>
                  </div>
                  <p className="text-[14px] sm:text-[15px] text-[#575757] font-sans leading-[1.7] italic">
                    “{t.quote}”
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#F0F0ED] flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-[16px] text-[#111111]">
                      {t.name}
                    </h4>
                    <p className="font-sans text-[12px] text-[#8A8A87] font-medium mt-0.5">
                      {t.role} • {t.company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show more toggle */}
        {filteredTestimonials.length > 6 && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full border border-[#E5E5E2] bg-white hover:border-[#111111] text-[#111111] font-sans text-[13px] font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
            >
              {showAll ? 'Show fewer recommendations ↑' : `View all ${filteredTestimonials.length} recommendations ↓`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
