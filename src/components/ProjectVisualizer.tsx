import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowRight, Check, Sparkles, Sliders, Activity } from 'lucide-react';

interface ProjectVisualizerProps {
  project: Project;
  interactive?: boolean;
}

export const ProjectVisualizer: React.FC<ProjectVisualizerProps> = ({ project, interactive = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [manualMode, setManualMode] = useState<'resolved' | 'attempt'>('resolved');

  const showAttempt = isHovered || manualMode === 'attempt';

  // Render bespoke visual representations for each known project
  const renderProjectCanvas = () => {
    switch (project.id) {
      case 'typeface':
        return (
          <div className="w-full h-full min-h-[340px] sm:min-h-[400px] p-5 sm:p-7 flex flex-col justify-between select-none relative overflow-hidden bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-xs">
            {/* Top Toolbar / Mac window chrome */}
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3.5">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-wider text-[var(--ink)] font-semibold">
                  {showAttempt ? 'typeface.ai/draft/modal-flow' : 'typeface.ai/studio/multichannel-canvas'}
                </span>
              </div>
              <span
                className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-semibold ${
                  showAttempt
                    ? 'bg-black/[0.05] dark:bg-white/[0.08] text-[var(--attempt)]'
                    : 'bg-[var(--resolved)]/15 text-[var(--resolved)]'
                }`}
              >
                {showAttempt ? 'DRAFT ATTEMPT' : 'RESOLVED'}
              </span>
            </div>

            {/* Central Canvas Area */}
            {showAttempt ? (
              // Early Attempt: Disjointed stepped inputs & modal chaos
              <div className="my-auto py-6 space-y-4">
                <div className="border border-dashed border-[var(--attempt)] p-4 bg-[var(--bg)]/60 rounded-xl">
                  <span className="font-mono text-[11px] text-[var(--attempt)] block uppercase mb-1">
                    Step 1: Raw Prompt Input (Modal popup)
                  </span>
                  <div className="h-4 bg-[var(--attempt)]/30 w-3/4 mb-2 rounded-[2px]" />
                  <div className="h-3 bg-[var(--attempt)]/20 w-1/2 rounded-[2px]" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-dashed border-[var(--attempt)] p-3 rounded-lg">
                    <span className="font-mono text-[10px] text-[var(--attempt)] block mb-1">
                      Tone of Voice (Hidden Menu)
                    </span>
                    <div className="h-3 bg-[var(--attempt)]/20 w-2/3" />
                  </div>
                  <div className="border border-dashed border-[var(--attempt)] p-3 rounded-lg">
                    <span className="font-mono text-[10px] text-[var(--attempt)] block mb-1">
                      Output Format (Separate Tab)
                    </span>
                    <div className="h-3 bg-[var(--attempt)]/20 w-1/2" />
                  </div>
                </div>
                <p className="font-mono text-[11px] text-[var(--attempt)] italic">
                  * Fragmented parameter modals required leaving the canvas to preview generated outputs.
                </p>
              </div>
            ) : (
              // Resolved: Unified generative workspace with synchronized live outputs
              <div className="my-auto py-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                {/* Left: Direct manipulation controls */}
                <div className="sm:col-span-5 border border-[var(--border)] p-4 bg-[var(--bg)] rounded-xl space-y-3 shadow-inner">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--resolved)]" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink)] font-bold">
                      Brand Context Lock
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[var(--secondary)] border-b border-[var(--border)] pb-1.5">
                      <span>Brand Voice</span>
                      <span className="text-[var(--ink)] font-semibold">Enterprise / Direct</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-[var(--secondary)] border-b border-[var(--border)] pb-1.5">
                      <span>Palette Lock</span>
                      <span className="text-[var(--resolved)] font-bold">Enforced (3 tokens)</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-[var(--secondary)]">
                      <span>Audience</span>
                      <span className="text-[var(--ink)]">Growth Leaders</span>
                    </div>
                  </div>
                </div>

                {/* Right: Live generated asset variants */}
                <div className="sm:col-span-7 grid grid-cols-2 gap-3">
                  <div className="border border-[var(--border)] p-3.5 bg-[var(--surface)] rounded-xl shadow-xs hover:border-[var(--resolved)] transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase text-[var(--secondary)]">Email Campaign</span>
                      <span className="w-2 h-2 rounded-full bg-[var(--resolved)]" />
                    </div>
                    <div className="h-3 bg-[var(--ink)] w-4/5 mb-1.5 rounded-[2px]" />
                    <div className="h-2 bg-[var(--secondary)]/40 w-full mb-1 rounded-[1px]" />
                    <div className="h-2 bg-[var(--secondary)]/40 w-3/5 rounded-[1px]" />
                  </div>

                  <div className="border border-[var(--border)] p-3.5 bg-[var(--surface)] rounded-xl shadow-xs hover:border-[var(--resolved)] transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase text-[var(--secondary)]">Ad Variant 02</span>
                      <span className="w-2 h-2 rounded-full bg-[var(--resolved)] opacity-70" />
                    </div>
                    <div className="h-3 bg-[var(--ink)]/80 w-3/5 mb-1.5 rounded-[2px]" />
                    <div className="h-2 bg-[var(--secondary)]/30 w-full mb-1 rounded-[1px]" />
                    <div className="h-2 bg-[var(--secondary)]/30 w-4/5 rounded-[1px]" />
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Status bar */}
            <div className="border-t border-[var(--border)] pt-3 flex items-center justify-between font-mono text-[11px] text-[var(--secondary)]">
              <span>{showAttempt ? project.visual.earlyAttemptNote : project.visual.resolvedNote}</span>
              <span className="text-[var(--ink)] font-semibold hidden sm:inline">5+ iterations resolved</span>
            </div>
          </div>
        );

      case 'indulekha':
        return (
          <div className="w-full h-full min-h-[340px] sm:min-h-[400px] p-5 sm:p-7 flex flex-col justify-between select-none relative overflow-hidden bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-xs">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3.5">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-wider text-[var(--ink)] font-semibold">
                  indulekha.in/ayurvedic-diagnosis
                </span>
              </div>
              <span
                className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-semibold ${
                  showAttempt
                    ? 'bg-black/[0.05] dark:bg-white/[0.08] text-[var(--attempt)]'
                    : 'bg-[var(--resolved)]/15 text-[var(--resolved)]'
                }`}
              >
                {showAttempt ? 'DRAFT ATTEMPT' : 'RESOLVED'}
              </span>
            </div>

            {showAttempt ? (
              <div className="my-auto py-6 space-y-4">
                <div className="border border-dashed border-[var(--attempt)] p-4 bg-[var(--bg)]/60 rounded-xl">
                  <span className="font-mono text-[11px] text-[var(--attempt)] block uppercase mb-1">
                    Old Catalog Grid
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 bg-[var(--attempt)]/20 border border-[var(--attempt)]/30 rounded-md" />
                    <div className="h-16 bg-[var(--attempt)]/20 border border-[var(--attempt)]/30 rounded-md" />
                    <div className="h-16 bg-[var(--attempt)]/20 border border-[var(--attempt)]/30 rounded-md" />
                  </div>
                </div>
                <p className="font-mono text-[11px] text-[var(--attempt)] italic">
                  * Ayurvedic clinical proof was buried under generic retail promotional discount banners.
                </p>
              </div>
            ) : (
              <div className="my-auto py-4 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-6 space-y-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--resolved)] font-bold">
                    100% Ayurvedic Efficacy
                  </span>
                  <h4 className="font-display font-bold text-[20px] sm:text-[22px] leading-tight text-[var(--ink)]">
                    Bringha Oil & Botanical Extracts
                  </h4>
                  <div className="space-y-1.5 font-mono text-[11px] text-[var(--secondary)]">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[var(--resolved)]" />
                      <span>Clinical Hair Fall Reduction Proof</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[var(--resolved)]" />
                      <span>Direct-to-Scalp Applicator Protocol</span>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-6 border border-[var(--border)] p-4 bg-[var(--bg)] rounded-xl shadow-inner">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink)] block mb-2 font-bold">
                    Personalized Botanical Regimen
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[var(--surface)] p-2.5 border border-[var(--border)] rounded-lg">
                      <span className="font-mono text-[10px] text-[var(--secondary)] uppercase block">Step 01</span>
                      <span className="text-[12px] font-medium text-[var(--ink)]">Scalp Diagnosis</span>
                    </div>
                    <div className="bg-[var(--surface)] p-2.5 border border-[var(--resolved)] rounded-lg">
                      <span className="font-mono text-[10px] text-[var(--resolved)] uppercase block font-bold">Step 02</span>
                      <span className="text-[12px] font-semibold text-[var(--ink)]">Targeted Therapy</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="border-t border-[var(--border)] pt-3 flex items-center justify-between font-mono text-[11px] text-[var(--secondary)]">
              <span>{showAttempt ? project.visual.earlyAttemptNote : project.visual.resolvedNote}</span>
              <span className="text-[var(--ink)] font-semibold hidden sm:inline">Unilever Brand System</span>
            </div>
          </div>
        );

      case 'reclaimz':
        return (
          <div className="w-full h-full min-h-[340px] sm:min-h-[400px] p-5 sm:p-7 flex flex-col justify-between select-none relative overflow-hidden bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-xs">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3.5">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-wider text-[var(--ink)] font-semibold">
                  reclaimz.health/claims/recovery
                </span>
              </div>
              <span
                className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-semibold ${
                  showAttempt
                    ? 'bg-black/[0.05] dark:bg-white/[0.08] text-[var(--attempt)]'
                    : 'bg-[var(--resolved)]/15 text-[var(--resolved)]'
                }`}
              >
                {showAttempt ? 'DRAFT ATTEMPT' : 'RESOLVED'}
              </span>
            </div>

            {showAttempt ? (
              <div className="my-auto py-6 space-y-4">
                <div className="border border-dashed border-[var(--attempt)] p-4 bg-[var(--bg)]/60 rounded-xl">
                  <div className="flex gap-2 mb-3 border-b border-[var(--attempt)]/30 pb-2">
                    <span className="font-mono text-[10px] text-[var(--attempt)] border-b border-[var(--attempt)]">
                      Tab 1: Claim ID
                    </span>
                    <span className="font-mono text-[10px] text-[var(--attempt)]/60">Tab 2: Billing</span>
                    <span className="font-mono text-[10px] text-[var(--attempt)]/60">Tab 3: Provider</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-[var(--attempt)]/20 w-full rounded-[2px]" />
                    <div className="h-3 bg-[var(--attempt)]/20 w-4/5 rounded-[2px]" />
                    <div className="h-3 bg-[var(--attempt)]/20 w-3/5 rounded-[2px]" />
                  </div>
                </div>
                <p className="font-mono text-[11px] text-[var(--attempt)] italic">
                  * 4 disconnected tabs forced users into repetitive navigation loops and lost claims.
                </p>
              </div>
            ) : (
              <div className="my-auto py-4 space-y-3">
                <div className="grid grid-cols-4 gap-2 border border-[var(--border)] p-3 bg-[var(--bg)] rounded-xl">
                  <div className="text-center border-r border-[var(--border)] pr-2">
                    <span className="font-mono text-[9px] uppercase text-[var(--secondary)] block">01 Submitted</span>
                    <span className="text-[12px] font-medium text-[var(--ink)]">Apr 12</span>
                  </div>
                  <div className="text-center border-r border-[var(--border)] pr-2">
                    <span className="font-mono text-[9px] uppercase text-[var(--secondary)] block">02 Review</span>
                    <span className="text-[12px] font-medium text-[var(--ink)]">In Progress</span>
                  </div>
                  <div className="text-center border-r border-[var(--border)] pr-2 bg-[var(--surface)] py-1 rounded">
                    <span className="font-mono text-[9px] uppercase text-[var(--resolved)] block font-bold">03 Decision</span>
                    <span className="text-[12px] font-bold text-[var(--resolved)]">Approved</span>
                  </div>
                  <div className="text-center">
                    <span className="font-mono text-[9px] uppercase text-[var(--secondary)] block">04 Payout</span>
                    <span className="text-[12px] font-medium text-[var(--secondary)]">Pending</span>
                  </div>
                </div>

                <div className="border border-[var(--border)] p-3.5 bg-[var(--surface)] rounded-xl flex items-center justify-between shadow-xs">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-[var(--secondary)] block">Claim Item #8492</span>
                    <span className="text-[13px] font-semibold text-[var(--ink)]">Specialist Consultation & Labs</span>
                  </div>
                  <span className="font-mono text-[13px] font-bold text-[var(--resolved)]">$1,240.00 Reimbursement</span>
                </div>
              </div>
            )}

            <div className="border-t border-[var(--border)] pt-3 flex items-center justify-between font-mono text-[11px] text-[var(--secondary)]">
              <span>{showAttempt ? project.visual.earlyAttemptNote : project.visual.resolvedNote}</span>
              <span className="text-[var(--ink)] font-semibold hidden sm:inline">Single-Action Stream</span>
            </div>
          </div>
        );

      case 'techm-linesense':
      default:
        return (
          <div className="w-full h-full min-h-[340px] sm:min-h-[400px] p-5 sm:p-7 flex flex-col justify-between select-none relative overflow-hidden bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-xs">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3.5">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-wider text-[var(--ink)] font-semibold">
                  linesense.internal/telemetry
                </span>
              </div>
              <span
                className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-semibold ${
                  showAttempt
                    ? 'bg-black/[0.05] dark:bg-white/[0.08] text-[var(--attempt)]'
                    : 'bg-[var(--resolved)]/15 text-[var(--resolved)]'
                }`}
              >
                {showAttempt ? 'DRAFT ATTEMPT' : 'RESOLVED'}
              </span>
            </div>

            {showAttempt ? (
              <div className="my-auto py-6 space-y-4">
                <div className="border border-dashed border-[var(--attempt)] p-3.5 font-mono text-[10px] space-y-1.5 text-[var(--attempt)] rounded-xl bg-[var(--bg)]/60">
                  <div className="flex justify-between border-b border-[var(--attempt)]/20 pb-1">
                    <span>SENS_01: 94.2 PSI</span>
                    <span>WARN_TEMP: 104C</span>
                  </div>
                  <div className="flex justify-between border-b border-[var(--attempt)]/20 pb-1">
                    <span>SENS_02: 88.1 PSI</span>
                    <span>STATUS: UNKNOWN</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SENS_03: 0.00 RPM</span>
                    <span>ALERT: TRIP_STOP</span>
                  </div>
                </div>
                <p className="font-mono text-[11px] text-[var(--attempt)] italic">
                  * 120 unweighted text rows delayed plant operator incident response times.
                </p>
              </div>
            ) : (
              <div className="my-auto py-4 space-y-3">
                <div className="border border-[var(--border)] p-4 bg-[var(--bg)] rounded-xl text-[var(--ink)] shadow-inner">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] tracking-wider text-[var(--secondary)] uppercase font-semibold">
                      Line 04 — Cell Assembly Topology
                    </span>
                    <span className="font-mono text-[11px] text-[var(--resolved)] font-bold">LIVE 120Hz</span>
                  </div>
                  {/* Schematic nodes */}
                  <div className="flex items-center justify-between gap-2 py-1">
                    <div className="p-2.5 border border-[var(--border)] bg-[var(--surface)] text-center flex-1 rounded-lg">
                      <span className="block font-mono text-[9px] text-[var(--secondary)]">FEED</span>
                      <span className="text-[12px] font-mono text-emerald-500 font-bold">99.4%</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--secondary)]" />
                    <div className="p-2.5 border border-[var(--resolved)] bg-[var(--resolved)]/10 text-center flex-1 rounded-lg">
                      <span className="block font-mono text-[9px] text-[var(--resolved)] font-bold">WELD</span>
                      <span className="text-[12px] font-mono text-[var(--resolved)] font-bold">104°C WARN</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--secondary)]" />
                    <div className="p-2.5 border border-[var(--border)] bg-[var(--surface)] text-center flex-1 rounded-lg">
                      <span className="block font-mono text-[9px] text-[var(--secondary)]">QC</span>
                      <span className="text-[12px] font-mono text-emerald-500 font-bold">NOMINAL</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="border-t border-[var(--border)] pt-3 flex items-center justify-between font-mono text-[11px] text-[var(--secondary)]">
              <span>{showAttempt ? project.visual.earlyAttemptNote : project.visual.resolvedNote}</span>
              <span className="text-[var(--ink)] font-semibold hidden sm:inline">Tech Mahindra</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className="w-full relative group"
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      {/* Visual Canvas */}
      {renderProjectCanvas()}

      {/* Interactive State Switcher */}
      {interactive && (
        <div className="mt-3.5 flex items-center justify-between gap-4">
          <p className="font-mono text-[11px] sm:text-[12px] text-[var(--secondary)] italic truncate pr-2">
            {project.visual.caption}
          </p>

          <div className="flex items-center gap-1.5 shrink-0 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider bg-[var(--surface)] p-1 rounded-full border border-[var(--border)]">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setManualMode('attempt');
              }}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                showAttempt
                  ? 'bg-[var(--border)] text-[var(--ink)] font-bold'
                  : 'text-[var(--secondary)] hover:text-[var(--ink)]'
              }`}
            >
              Early Attempt
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setManualMode('resolved');
              }}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                !showAttempt
                  ? 'bg-[var(--resolved)] text-white font-bold shadow-xs'
                  : 'text-[var(--secondary)] hover:text-[var(--ink)]'
              }`}
            >
              Resolved
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
