import React, { useEffect } from 'react';
import { Printer, X, ExternalLink, Download } from 'lucide-react';
import { siteMeta } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  // Handle ESC key to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const resumeDriveUrl =
    siteMeta.resumeUrl ||
    'https://drive.google.com/drive/u/1/folders/1R_OU4xqRbaZ6ba2ga8Zan7RVciK60RGc';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mihir Vaidya Résumé Document Preview"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#1C1D22] text-[#111111] max-w-[880px] w-full border border-white/10 rounded-[24px] sm:rounded-[28px] my-4 sm:my-8 shadow-2xl relative overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Control Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 sm:px-6 py-3.5 bg-[#141518] text-white shrink-0">
          <div className="flex items-center gap-2 font-sans">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wide text-white truncate">
              Mihir Vaidya — Résumé Document
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Primary Action: Open Google Drive Folder / Redirect */}
            <a
              href={resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Redirect to Google Drive Folder"
              title="Open Mihir's Résumé on Google Drive"
              className="px-3 sm:px-4 py-1.5 rounded-full bg-white hover:bg-neutral-100 text-[#111111] font-sans text-[11.5px] sm:text-[12.5px] font-bold flex items-center gap-1.5 transition-all shadow-xs hover:scale-102 active:scale-95 cursor-pointer"
            >
              <span>Open in Drive</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>

            {/* Print / Save PDF */}
            <button
              type="button"
              onClick={handlePrint}
              aria-label="Print or Save PDF"
              title="Print / Save PDF"
              className="px-3 sm:px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-sans text-[11.5px] sm:text-[12.5px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-neutral-300" />
              <span className="hidden xs:inline">Print / PDF</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close document preview"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white cursor-pointer transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Document Viewport — Paper Aesthetic */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 md:p-8 bg-[#0F1012] flex justify-center">
          <article
            id="printable-resume"
            className="w-full max-w-[780px] bg-white text-[#111111] shadow-2xl rounded-xl sm:rounded-2xl p-6 sm:p-10 md:p-12 font-sans selection:bg-neutral-200"
            style={{ minHeight: '1020px' }}
          >
            {/* Header: Name, Title & Contacts (Centered matching exact PDF) */}
            <header className="text-center pb-6 border-b border-[#E5E5E2]">
              <h1 className="text-[30px] sm:text-[36px] font-bold text-[#111111] tracking-tight leading-tight">
                Mihir Vaidya
              </h1>
              <p className="text-[13px] sm:text-[14px] text-[#444444] font-medium mt-1.5">
                Product Designer · AI & Design System · B2B, SaaS, Enterprise, B2C
              </p>
              <div className="text-[12px] sm:text-[13px] text-[#555555] mt-1.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                <a
                  href="mailto:mihirvaidya.desing@gmail.com"
                  className="hover:text-[#111111] hover:underline"
                >
                  mihirvaidya.desing@gmail.com
                </a>
                <span>|</span>
                <a href="tel:999-385-3673" className="hover:text-[#111111] hover:underline">
                  999-385-3673
                </a>
              </div>
              <div className="text-[12px] sm:text-[13px] text-[#555555] mt-1 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                <span>
                  Portfolio:{' '}
                  <a
                    href="https://www.mihirvaidya.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#111111] font-semibold underline hover:text-black"
                  >
                    www.mihirvaidya.in
                  </a>
                </span>
                <span>|</span>
                <span>
                  LinkedIn:{' '}
                  <a
                    href="https://linkedin.com/in/mihirvaidya-design/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#111111] font-semibold underline hover:text-black"
                  >
                    linkedin.com/in/mihirvaidya-design/
                  </a>
                </span>
              </div>
            </header>

            {/* SUMMARY Section */}
            <section className="pt-5 pb-5 border-b border-[#E5E5E2]">
              <h2 className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#666666] mb-2">
                SUMMARY
              </h2>
              <p className="text-[13px] sm:text-[13.5px] leading-[1.65] text-[#222222]">
                Product designer with 5+ years of experience across B2B, SaaS, enterprise, FinTech, healthcare, manufacturing,
                and GenAI. Skilled in end-to-end UX, research, UI design, prototyping, and design systems, with 15+
                products/features delivered in collaboration with cross-functional teams.
              </p>
            </section>

            {/* WORK EXPERIENCE Section */}
            <section className="pt-5 pb-5 border-b border-[#E5E5E2]">
              <h2 className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#666666] mb-3">
                WORK EXPERIENCE
              </h2>

              <div className="space-y-4 text-[13px] sm:text-[13.5px] text-[#222222]">
                {/* 1. Atzean Technologies */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-bold text-[#111111]">
                      Senior Product Designer{' '}
                      <span className="font-normal text-[#555555]">
                        | Atzean Technologies LLP || CMMI Level 3 Certified
                      </span>
                    </h3>
                    <span className="text-[12px] text-[#666666] font-medium shrink-0">
                      Jan 26 - Present
                    </span>
                  </div>
                  <ul className="mt-1.5 space-y-1 pl-4 list-disc marker:text-[#111111] leading-[1.6]">
                    <li>Led end-to-end product design for complex B2B, B2C, SaaS, FinTech, and AI/ML products.</li>
                    <li>Simplified data-heavy workflows and complex interfaces through information architecture, interaction design, and rapid prototyping.</li>
                    <li>Collaborated with cross-functional teams to drive product decisions from discovery to developer handoff.</li>
                  </ul>
                </div>

                {/* 2. F1 Studioz */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-bold text-[#111111]">
                      UX Designer{' '}
                      <span className="font-normal text-[#555555]">
                        | F1 Studioz Private Limited
                      </span>
                    </h3>
                    <span className="text-[12px] text-[#666666] font-medium shrink-0">
                      Aug 22 - Dec 25
                    </span>
                  </div>
                  <ul className="mt-1.5 space-y-1 pl-4 list-disc marker:text-[#111111] leading-[1.6]">
                    <li>Increased end-user satisfaction by 64% through user-centered UX improvements.</li>
                    <li>Led end-to-end UX across the product development lifecycle, from discovery to delivery.</li>
                    <li>Improved interaction design and usability by applying user-centered design principles.</li>
                    <li>Contributed to internal initiatives and cross-functional collaboration to strengthen team effectiveness.</li>
                  </ul>
                </div>

                {/* 3. 7Edge */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-bold text-[#111111]">
                      UX/UI Designer{' '}
                      <span className="font-normal text-[#555555]">
                        | 7Edge Private Limited
                      </span>
                    </h3>
                    <span className="text-[12px] text-[#666666] font-medium shrink-0">
                      Oct 21 - Jul 22
                    </span>
                  </div>
                  <ul className="mt-1.5 space-y-1 pl-4 list-disc marker:text-[#111111] leading-[1.6]">
                    <li>Designed user-centered web and mobile experiences, improving interaction patterns and overall usability.</li>
                    <li>Translated business requirements into user flows, wireframes, prototypes, and production-ready UI.</li>
                    <li>Contributed to design initiatives and workshops that strengthened consistency across digital products.</li>
                  </ul>
                </div>

                {/* 4. Siya Tech Ventures */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-1">
                  <h3 className="font-bold text-[#111111]">
                    UX/UI Designer{' '}
                    <span className="font-normal text-[#555555]">
                      | Siya Tech Ventures
                    </span>
                  </h3>
                  <span className="text-[12px] text-[#666666] font-medium shrink-0">
                    Nov 20 - Jun 21
                  </span>
                </div>

                {/* 5. Credence Analytics */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-bold text-[#111111]">
                    UX/UI Designer{' '}
                    <span className="font-normal text-[#555555]">
                      | Credence Analytics
                    </span>
                  </h3>
                  <span className="text-[12px] text-[#666666] font-medium shrink-0">
                    Jan 20 - Oct 20
                  </span>
                </div>
              </div>
            </section>

            {/* SKILLS Section */}
            <section className="pt-5 pb-5 border-b border-[#E5E5E2]">
              <h2 className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#666666] mb-3">
                SKILLS
              </h2>
              <div className="space-y-2 text-[12.5px] sm:text-[13px] leading-[1.6] text-[#222222]">
                <p>
                  <strong className="text-[#111111]">Design:</strong> Product Thinking · Interaction Design · Design Systems · Prototyping · Information Architecture · Accessibility (WCAG 2.1 AA) · Visual Design · Graphic Design · Branding
                </p>
                <p>
                  <strong className="text-[#111111]">Research & Data:</strong> User Research & Interviews · Usability Testing · Journey Mapping · Competitive Benchmarking
                </p>
                <p>
                  <strong className="text-[#111111]">AI & Design-to-Code:</strong> Claude Code · Cursor · Lovable · HTML/CSS
                </p>
                <p>
                  <strong className="text-[#111111]">Tools & Collaboration:</strong> Figma · After Effects · Lottie · Jira · Confluence · Miro · Illustrator · Photoshop · Agile/Scrum
                </p>
              </div>
            </section>

            {/* EDUCATION Section */}
            <section className="pt-5">
              <h2 className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#666666] mb-2.5">
                EDUCATION
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-[13px] text-[#222222]">
                <p className="font-bold text-[#111111]">
                  Bachelor of Engineering in ECE,{' '}
                  <span className="font-normal text-[#555555]">
                    Shivajirao Kadam Institute Of Technology & Mgm, CGPC: 8.6
                  </span>
                </p>
                <span className="text-[12px] text-[#666666] font-medium shrink-0">
                  2016 - 20 Batch
                </span>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};
