/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { OutcomesSection } from './components/OutcomesSection';
import { TechStackSection } from './components/TechStackSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSnapshot } from './components/AboutSnapshot';
import { Testimonial } from "@/components/ui/clean-testimonial";
import { FinalCTA } from './components/FinalCTA';
import { CaseStudyView } from './components/CaseStudyView';
import { ResumeModal } from './components/ResumeModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { PageLoader } from './components/PageLoader';
import { TactileCursor } from './components/TactileCursor';
import { ThemeProvider } from './context/ThemeContext';
import { projectsData } from './data/portfolioData';

function PortfolioContent() {
  const [selectedCaseStudySlug, setSelectedCaseStudySlug] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [, setIsLoaded] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // If case study modal is open, close it first
    if (selectedCaseStudySlug) {
      setSelectedCaseStudySlug(null);
    }

    const container = document.getElementById('main-scroll-container');
    const target = document.getElementById(sectionId);

    if (container && target) {
      const topOffset = target.offsetTop;
      container.scrollTo({ top: topOffset, behavior: 'smooth' });
    } else if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToTop = () => {
    const container = document.getElementById('main-scroll-container');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const activeProject = selectedCaseStudySlug
    ? projectsData.find((p) => p.slug === selectedCaseStudySlug)
    : null;

  return (
    <div className="h-screen w-full bg-[var(--bg)] text-[var(--ink)] font-sans overflow-hidden">
      {/* 0. Editorial Page Preloader */}
      <PageLoader onLoadingComplete={() => setIsLoaded(true)} />

      {/* 1. Custom Tactile Magnetic Cursor */}
      <TactileCursor />

      {/* 2. Minimal Scroll Progress Bar (Top of Screen) */}
      <ScrollProgressBar />

      {/* 3. Top Header Navigation */}
      <Navigation
        currentRoute="/"
        onNavigate={(route) => {
          if (route.startsWith('#')) {
            scrollToSection(route.replace('#', ''));
          } else {
            scrollToSection('hero');
          }
        }}
        onOpenResume={() => setIsResumeOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* 4. Single-Page Main Scrollable Container */}
      <main
        id="main-scroll-container"
        className="h-screen w-full overflow-y-auto scroll-smooth md:snap-y md:snap-mandatory architectural-canvas-grid relative"
      >
        {/* SECTION 01: HERO */}
        <Hero
          onSeeWork={() => scrollToSection('work')}
          onNavigateAbout={() => scrollToSection('about')}
          onSelectProject={(slug) => setSelectedCaseStudySlug(slug)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* SECTION 02: SELECTED WORK */}
        <SelectedWork
          onSelectProject={(slug) => setSelectedCaseStudySlug(slug)}
        />

        {/* SECTION 03: OUTCOMES (Value Prop & Impact) */}
        <OutcomesSection />

        {/* SECTION 04: TECH STACK (Primary Arsenal Tool Dock) */}
        <TechStackSection />

        {/* SECTION 05: HOW I WORK / PROCESS */}
        <ServicesSection />

        {/* SECTION 05: A LITTLE ABOUT ME */}
        <AboutSnapshot
          onNavigateAbout={() => scrollToSection('about')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* SECTION 06: TESTIMONIALS (Clean Testimonials) */}
        <Testimonial />

        {/* SECTION 07 & FOOTER: START A CONVERSATION + OBSIDIAN MAKE SENSE */}
        <FinalCTA
          onGetInTouch={() => scrollToSection('contact')}
          onScrollToTop={handleScrollToTop}
        />
      </main>

      {/* Case Study Full-Screen Modal Overlay (Keeps user on the one-pager) */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
          <CaseStudyView
            project={activeProject}
            allProjects={projectsData}
            onNavigateBack={() => setSelectedCaseStudySlug(null)}
            onSelectProject={(slug) => setSelectedCaseStudySlug(slug)}
          />
        </div>
      )}

      {/* Résumé Viewer & Printable Document */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
