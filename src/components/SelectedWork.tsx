import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, X } from 'lucide-react';
import { motion } from 'motion/react';
import { projectsData } from '../data/portfolioData';
import { GridPulse } from './ui/grid-pulse';

interface SelectedWorkProps {
  onSelectProject?: (slug: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = () => {
  const [activePdfUrl, setActivePdfUrl] = useState<string | null>(null);

  // 4 Project cover images provided by user
  const projectCoverImages: Record<string, { src: string; alt: string }> = {
    typeface: { src: '/Typeface_cover.png', alt: 'Typeface Cover' },
    healthco: { src: '/Healthco_cover.png', alt: 'HealthCo Cover' },
    indulekha: { src: '/Indulekha_cover.png', alt: 'Indulekha Cover' },
    linesense: { src: '/TechM_cover.png', alt: 'Tech Mahindra LineSense Cover' },
  };

  const projectPdfLinks: Record<string, string> = {
    typeface: '/Case Study/TypeFace.pdf',
    healthco: '/Case Study/Healthco.pdf',
    indulekha: '/Case Study/Indulekha.pdf',
    linesense: '/Case Study/TechM.pdf',
  };

  const projectMeta: Record<
    string,
    {
      domain: string;
      metric: string;
      hook: string;
      tags: string[];
    }
  > = {
    typeface: {
      domain: 'AI · ENTERPRISE',
      metric: '4 workflows → 1 canvas',
      hook: 'GenAI multimodal canvas for enterprise campaign generation.',
      tags: ['Multimodal AI', 'Canvas Tooling'],
    },
    healthco: {
      domain: 'HEALTHCARE TECH',
      metric: '8m → 50s intake',
      hook: 'Digital patient intake and medical extraction system.',
      tags: ['Healthcare UX', 'Doc Extraction'],
    },
    indulekha: {
      domain: 'CONSUMER · COMMERCE',
      metric: '+15% lead conversion',
      hook: 'Ayurvedic hair diagnosis consultation with personalisation.',
      tags: ['D2C Diagnostic', 'E-Commerce'],
    },
    linesense: {
      domain: 'MANUFACTURING · AI',
      metric: '62% faster setup',
      hook: 'Acoustic inspection platform reducing machine calibration cycles.',
      tags: ['Industrial AI', 'Telemetry'],
    },
  };

  const allProjects = projectsData.slice(0, 4);

  return (
    <section
      id="work"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[1080px] md:snap-start bg-white dark:bg-[#18181b] select-none overflow-visible lg:overflow-hidden flex flex-col justify-center pt-24 sm:pt-28 lg:py-16 pb-12 sm:pb-14 transition-colors duration-250"
    >
      {/* Dynamic Grid Pulse ambient interactive background */}
      <GridPulse
        cell={32}
        reach={2.4}
        ambient={1}
        maxLit={65}
        avoid="[data-grid-avoid]"
        className="opacity-45 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1360px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-between h-auto lg:h-full min-h-full lg:max-h-[920px]">
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8fc33b]" />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] font-bold text-[#8A8A87] dark:text-[#A1A1AA]">
                SELECTED WORK
              </span>
            </div>
            <h2
              data-grid-avoid
              className="font-display font-bold text-[24px] sm:text-[32px] lg:text-[36px] tracking-tight text-[#111111] dark:text-white leading-tight"
            >
              Problems I've enjoyed solving.
            </h2>
          </div>
        </div>

        {/* Viewport-Optimized Horizontal Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-5 flex-1 items-stretch my-0 lg:my-auto">
            {allProjects.map((project, idx) => {
              const meta = projectMeta[project.slug] || {
                domain: project.category,
                metric: project.outcome.slice(0, 20),
                hook: project.shortDescription,
                tags: ['Product Design'],
              };

              const cover = projectCoverImages[project.slug] || {
                src: '/Healthco_cover.png',
                alt: project.title,
              };
              const pdfUrl = projectPdfLinks[project.slug];

              return (
                <motion.button
                  key={project.id}
                  id={`project-card-${project.slug}`}
                  type="button"
                  onClick={() => setActivePdfUrl(pdfUrl)}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="group rounded-[20px] sm:rounded-[24px] border border-[#E8E8E5] dark:border-[#2e2e34] hover:border-[#111111] dark:hover:border-[#8fc33b] bg-white dark:bg-[#202126] p-3 sm:p-4.5 flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 transition-all duration-300 hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.18)] cursor-pointer relative overflow-hidden block no-underline text-left"
                >
                  {/* Left Column: Cover Image */}
                  <div className="w-full sm:w-[150px] lg:w-[185px] h-[120px] xs:h-[135px] sm:h-auto shrink-0 rounded-xl overflow-hidden relative bg-[#F5F5F3] dark:bg-[#18181b] border border-[#E5E5E2] dark:border-[#2e2e34] flex items-center justify-center">
                    <img
                      src={cover.src}
                      alt={cover.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Right Column: Content & Metadata */}
                  <div className="flex-1 flex flex-col justify-between min-w-0 font-sans">
                    <div>
                      {/* Domain & Outcome Metric Pill — Body font (font-sans) */}
                      <div className="flex items-center justify-between font-sans text-[11px] text-[#737373] dark:text-[#A1A1AA] mb-1.5">
                        <span className="font-bold tracking-wider uppercase text-[#111111] dark:text-neutral-200 truncate pr-2">
                          {meta.domain}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#F5F5F3] dark:bg-[#292a30] text-[#111111] dark:text-white font-sans text-[10px] font-bold border border-[#E5E5E2] dark:border-[#3a3b42] shrink-0">
                          {meta.metric}
                        </span>
                      </div>

                      {/* Project Title — Body font (font-sans) */}
                      <h3 className="font-sans font-bold text-[18px] sm:text-[20px] lg:text-[21px] tracking-tight text-[#111111] dark:text-white leading-snug flex items-center justify-between">
                        <span className="truncate">{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#111111] dark:text-white shrink-0 ml-1.5" />
                      </h3>

                      {/* Compact Hook — Body font (font-sans) */}
                      <p className="font-sans text-[12.5px] sm:text-[13px] text-[#555555] dark:text-[#A1A1AA] mt-1 line-clamp-2 leading-relaxed font-normal">
                        {meta.hook}
                      </p>

                      {/* Deliverable Tags — Body font (font-sans) */}
                      <div className="flex flex-wrap gap-1 mt-2.5 font-sans">
                        {meta.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-[#F7F7F6] dark:bg-[#27272a] text-[#666666] dark:text-neutral-300 font-sans text-[10px] font-medium tracking-normal"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Row — Body font (font-sans) */}
                    <div className="pt-2.5 mt-2 border-t border-[#F0F0ED] dark:border-[#2e2e34] flex items-center justify-between font-sans">
                      <span className="font-bold uppercase tracking-wider text-[#111111] dark:text-white text-[11px] inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
                        <span className="font-bold">Read Case Study</span>
                        <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
        </div>
      </div>

      {activePdfUrl && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Case study PDF"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
          onClick={() => setActivePdfUrl(null)}
        >
          <div
            className="relative w-full max-w-6xl h-[88vh] rounded-2xl overflow-hidden bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePdfUrl(null)}
              aria-label="Close case study PDF"
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white border border-[#E5E5E2] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe title="Case study PDF" src={activePdfUrl} className="w-full h-full border-0" />
          </div>
        </div>
      )}
    </section>
  );
};
