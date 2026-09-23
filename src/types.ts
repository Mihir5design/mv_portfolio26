export type ProjectCategory =
  | 'All'
  | 'Product Design'
  | 'UX'
  | 'Enterprise'
  | 'Healthcare'
  | 'AI / Data'
  | 'Consumer';

export interface ProjectAttemptVisual {
  earlyAttemptLabel: string;
  resolvedLabel: string;
  caption: string;
  earlyAttemptNote: string;
  resolvedNote: string;
}

export interface CaseStudySection {
  context?: string;
  problem?: string;
  roleContribution?: string;
  decisions?: string[];
  process?: string[];
  designNotes?: string;
  outcome?: string;
  reflection?: string;
  beforeAfter?: {
    beforeCaption: string;
    afterCaption: string;
    beforeNote: string;
    afterNote: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  narrativeHook: string;
  shortDescription: string;
  role: string;
  category: string;
  client: string;
  year: string;
  tags: string[];
  outcome?: string;
  featured: boolean;
  priority: number;
  status: 'published' | 'draft';
  externalCaseStudyUrl?: string;
  visual?: ProjectAttemptVisual;
  caseStudy?: CaseStudySection;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  progressionStage: string;
  description?: string;
  highlightMetric?: string;
  whatIWorkedOn?: string[];
  impact?: string;
}

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
  secondaryNote?: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface OutcomeMetric {
  value: string;
  label: string;
  context: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface SiteMeta {
  name: string;
  role: string;
  heroEyebrow: string;
  heroHeadline: [string, string];
  heroSubhead: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  email: string;
  linkedinUrl: string;
  whatsappUrl: string;
  resumeUrl?: string;
  location: string;
}
