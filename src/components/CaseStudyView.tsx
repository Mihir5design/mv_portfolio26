import React, { useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, X } from 'lucide-react';

interface CaseStudyViewProps {
  project: Project;
  allProjects: Project[];
  onNavigateBack: () => void;
  onSelectProject: (slug: string) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  project,
  allProjects,
  onNavigateBack,
  onSelectProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onNavigateBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNavigateBack]);
  // Find next project in sequence
  const publishedProjects = allProjects
    .filter((p) => p.status === 'published')
    .sort((a, b) => a.priority - b.priority);

  const currentIndex = publishedProjects.findIndex((p) => p.slug === project.slug);
  const nextProject =
    currentIndex >= 0 && currentIndex < publishedProjects.length - 1
      ? publishedProjects[currentIndex + 1]
      : publishedProjects[0];

  const externalUrl = project.externalCaseStudyUrl || '#';

  // Colorful graphical showcase for each project
  const projectShowcase: Record<string, React.ReactNode> = {
    typeface: (
      <div className="w-full h-80 sm:h-96 rounded-3xl bg-gradient-to-br from-[#1C1236] via-[#2D1654] to-[#4C1D84] p-6 sm:p-8 relative overflow-hidden shadow-md border border-[#E5E5E2] flex flex-col justify-between mb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            <span className="ml-2 text-[12px] font-sans font-bold text-white">Typeface Studio v2.4</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-fuchsia-500/20 border border-fuchsia-400/40 text-fuchsia-200 text-[11px] font-sans font-bold">
            GenAI Multimodal Canvas
          </span>
        </div>
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 my-auto space-y-3 max-w-[720px] mx-auto w-full">
          <div className="flex items-center justify-between text-[12px] font-sans text-purple-200">
            <span className="font-bold text-white">Prompt-to-Variant Asset Pipeline</span>
            <span className="text-[11px] bg-purple-500/30 px-2.5 py-0.5 rounded text-purple-100 font-mono">Real-time Synthesizer</span>
          </div>
          <div className="h-12 rounded-xl bg-gradient-to-r from-purple-600/30 via-pink-500/30 to-amber-500/30 border border-white/10 flex items-center px-4 justify-between">
            <span className="text-white text-sm font-medium">Enterprise Multichannel Campaign Specimen</span>
            <span className="text-lg">✨</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[12px] font-sans text-purple-200/90 font-medium">
          <span>Unified Contextual Canvas</span>
          <span className="text-white font-bold">Production Release</span>
        </div>
      </div>
    ),

    healthco: (
      <div className="w-full h-80 sm:h-96 rounded-3xl bg-gradient-to-br from-[#0B231D] via-[#0E3C2F] to-[#155945] p-6 sm:p-8 relative overflow-hidden shadow-md border border-[#E5E5E2] flex flex-col justify-between mb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[12px] font-sans font-bold text-white">Reclaimz Patient Intake</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-400 text-emerald-950 text-[11px] font-sans font-extrabold">
            50 SEC ONBOARDING
          </span>
        </div>
        <div className="bg-emerald-950/80 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-emerald-400/30 my-auto max-w-[680px] mx-auto w-full">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[12px] font-sans font-bold text-emerald-200">Patient Claim Verification</span>
            <span className="text-[11px] font-mono text-emerald-400 font-bold">APPROVED (4.2s OCR)</span>
          </div>
          <span className="text-2xl font-display font-bold text-white leading-tight block">$1,420 Instant Reimbursement</span>
          <span className="text-[12px] font-sans text-emerald-300/80 mt-1 block">Cross-verified across 32 clinical insurance payors</span>
        </div>
        <div className="flex items-center justify-between text-[12px] font-sans text-emerald-200/90 font-medium">
          <span>Conversational Progressive Architecture</span>
          <span className="text-white font-bold">Zero Form Drop-Off</span>
        </div>
      </div>
    ),

    indulekha: (
      <div className="w-full h-80 sm:h-96 rounded-3xl bg-gradient-to-br from-[#2D1E07] via-[#48300E] to-[#784D14] p-6 sm:p-8 relative overflow-hidden shadow-md border border-[#E5E5E2] flex flex-col justify-between mb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-base">🌿</span>
            <span className="text-[12px] font-sans font-bold text-white">Indulekha Ayurveda</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-amber-300 text-amber-950 text-[11px] font-sans font-extrabold">
            +15% CONVERSION LIFT
          </span>
        </div>
        <div className="bg-amber-950/80 backdrop-blur-md rounded-2xl p-5 border border-amber-500/30 my-auto flex items-center gap-4 max-w-[640px] mx-auto w-full">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 flex items-center justify-center text-3xl shadow-md shrink-0">
            🧴
          </div>
          <div>
            <span className="text-lg font-display font-bold text-white block">Bringha Ayurvedic Hair Oil</span>
            <span className="text-[12px] font-sans text-amber-200/90 block">Tailored 3-Step Botanical Diagnostic</span>
            <span className="text-[11px] font-sans text-amber-300 font-bold mt-1 inline-block">1.2M+ Completed Diagnostics</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[12px] font-sans text-amber-200/90 font-medium">
          <span>Editorial E-Commerce Experience</span>
          <span className="text-white font-bold">Direct Consumer Provenance</span>
        </div>
      </div>
    ),

    linesense: (
      <div className="w-full h-80 sm:h-96 rounded-3xl bg-gradient-to-br from-[#0B1D3A] via-[#102C57] to-[#1B4886] p-6 sm:p-8 relative overflow-hidden shadow-md border border-[#E5E5E2] flex flex-col justify-between mb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[12px] font-sans font-bold text-white">TechM LineSense IoT</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-cyan-300 text-cyan-950 text-[11px] font-sans font-extrabold">
            62% FASTER MODEL TRAINING
          </span>
        </div>
        <div className="bg-blue-950/80 backdrop-blur-md rounded-2xl p-5 border border-cyan-400/30 my-auto max-w-[640px] mx-auto w-full">
          <div className="flex items-center justify-between text-[12px] font-sans text-blue-200/90 mb-2">
            <span className="font-bold text-white">Assembly Line 04 High-Speed Telemetry</span>
            <span className="text-[11px] font-mono text-cyan-300">60Hz Real-Time</span>
          </div>
          <p className="text-[13px] font-sans text-blue-200">
            Automated model training time dropped from 8.4 hours to 3.2 hours per line cycle.
          </p>
        </div>
        <div className="flex items-center justify-between text-[12px] font-sans text-blue-200/90 font-medium">
          <span>Factory Floor Console</span>
          <span className="text-white font-bold">Topological Line Map</span>
        </div>
      </div>
    ),
  };

  return (
    <div className="w-full bg-white min-h-screen pt-28 sm:pt-36 pb-24 sm:pb-36 relative">
      {/* Floating Close Button */}
      <button
        type="button"
        onClick={onNavigateBack}
        aria-label="Close Case Study"
        className="fixed top-5 right-5 sm:top-7 sm:right-8 z-50 px-3.5 py-2 rounded-full bg-[#111111] hover:bg-black text-white shadow-xl flex items-center gap-2 font-mono text-[11px] font-bold tracking-wider cursor-pointer transition-all hover:scale-105"
      >
        <span>CLOSE</span>
        <X className="w-3.5 h-3.5" />
      </button>

      <article className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Metadata Strip */}
        <div className="flex items-center justify-between font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#8A8A87] mb-6 pb-2 border-b border-[#E5E5E2]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            <span>CASE STUDY / {project.slug.toUpperCase()}</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 font-semibold">
            <span>PORTFOLIO CASE STUDY</span>
            <span className="text-[#D0D0CC]">•</span>
            <span className="text-[#111111]">IN-DEPTH PROBLEM BREAKDOWN</span>
          </div>
        </div>

        {/* Back to Work navigation */}
        <div className="mb-8">
          <button
            type="button"
            onClick={onNavigateBack}
            className="inline-flex items-center gap-2 font-sans text-[12px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border border-[#E5E5E2] bg-white text-[#111111] hover:border-[#111111] transition-colors cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#111111]" />
            <span>BACK TO HOME PAGE</span>
          </button>
        </div>

        {/* Project Header */}
        <header className="border-b border-[#E5E5E2] pb-12 sm:pb-16 mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-2 font-sans text-[12px] uppercase tracking-wider mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white border border-[#E5E5E2] text-[#111111] font-semibold"
              >
                {tag}
              </span>
            ))}
            <span className="text-[#8A8A87] font-bold ml-1">{project.year}</span>
          </div>

          <h1 className="font-display font-bold text-[38px] sm:text-[58px] lg:text-[68px] leading-[1.08] text-[#111111] tracking-[-0.035em] max-w-[1020px]">
            {project.title}
          </h1>

          <p className="mt-6 text-[18px] sm:text-[22px] leading-[1.6] text-[#575757] max-w-[860px] font-sans font-normal">
            {project.shortDescription}
          </p>

          {/* Project Meta Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-[#E5E5E2] font-sans text-[13px]">
            <div>
              <span className="text-[#8A8A87] uppercase block mb-1 text-[11px] font-bold tracking-wider">CLIENT / CONTEXT</span>
              <span className="text-[#111111] font-bold">{project.client}</span>
            </div>
            <div>
              <span className="text-[#8A8A87] uppercase block mb-1 text-[11px] font-bold tracking-wider">ROLE</span>
              <span className="text-[#111111] font-bold">{project.role}</span>
            </div>
            <div>
              <span className="text-[#8A8A87] uppercase block mb-1 text-[11px] font-bold tracking-wider">CATEGORY</span>
              <span className="text-[#111111] font-bold">{project.category}</span>
            </div>
            <div>
              <span className="text-[#8A8A87] uppercase block mb-1 text-[11px] font-bold tracking-wider">OUTCOME</span>
              <span className="text-[#111111] font-bold">{project.outcome}</span>
            </div>
          </div>
        </header>

        {/* Graphical Showcase Mockup */}
        {projectShowcase[project.slug]}

        {/* External Case Study Routing Card */}
        <section className="mb-14 sm:mb-20">
          <div className="relative rounded-[28px] bg-white border border-[#E5E5E2] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
            <div className="max-w-[720px]">
              <span className="font-sans text-[11px] uppercase tracking-wider text-[#8A8A87] font-bold block mb-2">
                COMPLETE DOCUMENTATION & PROTOTYPES
              </span>
              <h2 className="font-display font-bold text-[26px] sm:text-[32px] text-[#111111] tracking-[-0.02em] leading-tight">
                Inspect the full design process & Figma artifacts
              </h2>
              <p className="mt-2 text-[15px] text-[#575757] font-sans leading-[1.6]">
                Explore the end-to-end research synthesis, design system component libraries, and interactive flows.
              </p>
            </div>

            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#111111] hover:bg-black text-white font-sans text-[13px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-2 cursor-pointer transition-all shrink-0"
            >
              <span>Read Full Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Lightweight Project Entry Overview */}
        {project.caseStudy && (
          <section className="space-y-10 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-8 border-t border-[#E5E5E2]">
              <div className="lg:col-span-4 font-sans text-[12px] uppercase tracking-wider font-bold text-[#111111]">
                THE PROBLEM & CONTEXT
              </div>
              <div className="lg:col-span-8 space-y-3 text-[16px] sm:text-[18px] text-[#575757] font-sans leading-[1.7]">
                <p>{project.caseStudy.context}</p>
                <p className="text-[#111111] font-semibold">{project.caseStudy.problem}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-8 border-t border-[#E5E5E2]">
              <div className="lg:col-span-4 font-sans text-[12px] uppercase tracking-wider font-bold text-[#111111]">
                ROLE & KEY DECISIONS
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p className="text-[16px] text-[#575757] font-sans leading-[1.7]">
                  {project.caseStudy.roleContribution}
                </p>
                {project.caseStudy.decisions && (
                  <ul className="space-y-2.5 mt-4">
                    {project.caseStudy.decisions.map((decision, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] text-[#111111] font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#111111] mt-1 shrink-0" />
                        <span>{decision}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-8 border-t border-[#E5E5E2]">
              <div className="lg:col-span-4 font-sans text-[12px] uppercase tracking-wider font-bold text-[#111111]">
                OUTCOME & IMPACT
              </div>
              <div className="lg:col-span-8 space-y-3 text-[16px] sm:text-[18px] text-[#575757] font-sans leading-[1.7]">
                <p className="text-[#111111] font-semibold">{project.caseStudy.outcome}</p>
                <p className="italic font-display text-[20px] text-[#111111] pt-2">
                  “{project.caseStudy.reflection}”
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Next Project Teaser Footer */}
        {nextProject && (
          <nav
            aria-label="Next Project"
            onClick={() => onSelectProject(nextProject.slug)}
            className="border-t border-[#E5E5E2] pt-12 mt-16 flex items-center justify-between group cursor-pointer"
          >
            <div>
              <span className="font-sans text-[11px] uppercase tracking-wider font-bold text-[#8A8A87] block mb-1">
                NEXT PROJECT
              </span>
              <span className="font-display font-bold text-[26px] sm:text-[34px] text-[#111111] group-hover:text-black transition-colors">
                {nextProject.title}
              </span>
            </div>
            <div className="flex items-center gap-2 font-sans text-[13px] font-bold uppercase tracking-wider text-[#111111] group-hover:text-black transition-colors">
              <span>VIEW CASE STUDY</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </nav>
        )}
      </article>
    </div>
  );
};
