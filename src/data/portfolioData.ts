import {
  ApproachStep,
  ExperienceItem,
  OutcomeMetric,
  Project,
  ServiceItem,
  SiteMeta,
  TestimonialItem,
} from '../types';

export const siteMeta: SiteMeta = {
  name: 'Mihir Vaidya',
  role: 'Product Designer',
  heroEyebrow: "I’m a product designer... but not the usual kind.",
  heroHeadline: [
    'I get uncomfortably close to complex problems',
    'until they become simple, loveable, usable and comfortable experiences.',
  ],
  heroSubhead:
    'I’m Mihir, a product designer with 5+ years of experience simplifying complex digital products across B2B, healthcare, fintech, AI, and enterprise.',
  primaryCtaText: 'Explore my work →',
  secondaryCtaText: 'A little about me →',
  email: 'mihirvaidya.desing@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/mihirvaidya-design/',
  whatsappUrl: 'https://wa.me/919993853673?text=Hi%20Mihir%2C%20let%27s%20talk%20about%20a%20project',
  resumeUrl: 'https://drive.google.com/drive/u/1/folders/1R_OU4xqRbaZ6ba2ga8Zan7RVciK60RGc',
  location: 'Indore, India',
};

// 02 — TRAIN / COMPANIES
export const trainCompanies = [
  { name: 'TechM', domain: 'Enterprise & AI' },
  { name: 'Reclaimz', domain: 'Healthcare Tech' },
  { name: 'Unilever', domain: 'Consumer & Commerce' },
  { name: 'Aditya Birla Opus', domain: 'Paints & Retail' },
  { name: 'QMentisAI', domain: 'Neurotech & AI' },
  { name: 'Equntis', domain: 'Fintech & Wealth' },
  { name: 'Global Fintech Fest', domain: 'Global Conference' },
];

// 03 — OUTCOMES
export const outcomesData = {
  sectionLabel: 'THE PART I LIKE TO MEASURE',
  heading: 'Design should change something.',
  supportingCopy:
    'A good-looking interface is nice. A better product is nicer.\nI look for the difference design makes beyond the Figma canvas—saving time, improving conversions, reducing complexity, and helping teams work more efficiently.',
  metrics: [
    {
      value: '50 sec',
      label: 'Average patient onboarding time',
      context: 'Reclaimz | HealthCo',
    },
    {
      value: '15%',
      label: 'Improvement in lead conversion',
      context: 'Indulekha',
    },
    {
      value: '62%',
      label: 'Faster model training',
      context: 'TechM | Linesense',
    },
  ] as OutcomeMetric[],
  closingLine: 'The screen is the output. The outcome is the point.',
};

// 04 — SELECTED WORK
export const projectsData: Project[] = [
  {
    id: 'typeface',
    slug: 'typeface',
    title: 'Typeface',
    narrativeHook: 'Structuring generative AI from raw prompt chaos into predictable, brand-faithful enterprise workflows.',
    shortDescription:
      'Designing GenAI tool that help businesses, industry teams, designers, non-designers, and marketers work smarter.',
    role: 'Product Designer',
    category: 'AI / Enterprise',
    client: 'Typeface',
    year: '2023 — 2024',
    tags: ['AI', 'Enterprise', 'B2B', 'B2C'],
    outcome: 'Unified multi-modal creative workflows, making generative tools accessible to both technical and marketing teams.',
    featured: true,
    priority: 1,
    status: 'published',
    externalCaseStudyUrl: 'https://typeface.ai',
    visual: {
      earlyAttemptLabel: 'Early Attempt: Disconnected Prompt Modals',
      resolvedLabel: 'Resolved: Unified Contextual Canvas',
      caption: 'GenAI interface — transforming raw prompt fields into a structured direct-manipulation workspace',
      earlyAttemptNote: 'Isolated parameter drawers forced users to toggle between views without continuous visual preview.',
      resolvedNote: 'Real-time contextual canvas with unified style presets and multi-channel asset generation.',
    },
    caseStudy: {
      context:
        'Typeface is an enterprise GenAI platform enabling content, marketing, and cross-functional teams to produce on-brand creative collateral.',
      problem:
        'Users experienced cognitive friction navigating disparate generative models and abstract numerical parameters.',
      roleContribution:
        'Lead product designer across generative canvas workflows, contextual prompting, and content variant comparison.',
      decisions: [
        'Shifted interface architecture from linear form wizards to a direct-manipulation canvas.',
        'Mapped technical model parameters into semantic, human-readable creative controls.',
        'Built side-by-side asset comparison shelf for fast editorial decisions.',
      ],
      process: [
        'Mapped end-to-end user workflows from initial brief drafting to final multichannel delivery.',
        'Prototyped and tested multiple layout paradigms with creative teams.',
        'Designed feedback states to maintain user confidence during high-compute model responses.',
      ],
      designNotes:
        'Muted, high-contrast dark canvas ensures user-generated visuals remain the hero element.',
      outcome:
        'A unified GenAI workspace that lets businesses and creators design, refine, and ship campaigns in one seamless flow.',
      reflection:
        'In AI design, the goal is not to automate away human intention, but to make nuanced creative control feel effortless.',
    },
  },
  {
    id: 'healthco',
    slug: 'healthco',
    title: 'HealthCo',
    narrativeHook: 'Untangling complex healthcare onboarding through compassionate, error-tolerant interaction design.',
    shortDescription:
      'Reducing friction in patient onboarding by simplifying the experience around the people using it.',
    role: 'Product Designer',
    category: 'Healthcare',
    client: 'HealthCo / Reclaimz',
    year: '2022 — 2023',
    tags: ['Healthcare', 'Workflow', 'Product Design'],
    outcome: 'Brought average patient onboarding down to 50 seconds while virtually eliminating dropped form inputs.',
    featured: true,
    priority: 2,
    status: 'published',
    externalCaseStudyUrl: 'https://reclaimz.com',
    visual: {
      earlyAttemptLabel: 'Early Attempt: Multi-Screen Regulatory Form',
      resolvedLabel: 'Resolved: Conversational Progressive Flow',
      caption: 'Patient onboarding — from fragmented clinical questions to a guided 50-second experience',
      earlyAttemptNote: 'Intimidating clinical terminology and ambiguous document upload requirements caused high drop-off.',
      resolvedNote: 'Guided step progression with automated verification, clear status milestones, and zero jargon.',
    },
    caseStudy: {
      context:
        'HealthCo is a patient advocacy and digital healthcare claims management platform designed to simplify intake and reimbursement.',
      problem:
        'Patients faced overwhelming cognitive stress when entering clinical and insurance details across cumbersome multi-tab forms.',
      roleContribution:
        'End-to-end UX and product design: mapped user mental models, created modular input patterns, and tested error recovery.',
      decisions: [
        'Replaced dense multi-page medical forms with conversational progressive disclosure.',
        'Added real-time validation and instant document parsing to reduce manual data entry.',
        'Established transparent, color-coded status badges for every onboarding step.',
      ],
      process: [
        'Conducted patient usability sessions to isolate specific stress and friction triggers.',
        'Iterated on typography, color contrast, and microcopy to deliver reassuring clarity.',
        'Tested edge cases including missing insurance documentation and partial submissions.',
      ],
      designNotes:
        'Soft neutral backgrounds with clear focus indicators and generous touch targets create a calm, dignified environment.',
      outcome:
        'Reduced patient onboarding time to 50 seconds with significant improvements in completion rates.',
      reflection:
        'In healthcare UX, clarity is kindness. Removing ambiguity from form fields directly relieves user anxiety.',
    },
  },
  {
    id: 'indulekha',
    slug: 'indulekha',
    title: 'Indulekha',
    narrativeHook: 'Translating centuries of Ayurvedic botanical authenticity into a modern, high-conversion digital journey.',
    shortDescription:
      'Improving the digital journey from discovery to action, with a sharper focus on conversion.',
    role: 'Product Designer',
    category: 'Consumer / Commerce',
    client: 'Unilever',
    year: '2023',
    tags: ['Consumer', 'Conversion', 'Digital Experience'],
    outcome: 'Achieved a 15% improvement in lead conversion through a personalized hair concern diagnostic.',
    featured: true,
    priority: 3,
    status: 'published',
    externalCaseStudyUrl: 'https://indulekha.co.in',
    visual: {
      earlyAttemptLabel: 'Early Attempt: Cluttered Product Catalog',
      resolvedLabel: 'Resolved: Diagnostic-Led Regimen Journey',
      caption: 'Indulekha e-commerce — pairing botanical authenticity with interactive diagnostic consultation',
      earlyAttemptNote: 'Dense product grids overwhelmed first-time shoppers seeking solutions for specific hair concerns.',
      resolvedNote: 'Personalized 3-step diagnostic flow routing consumers straight to clinical proof and tailored regimens.',
    },
    caseStudy: {
      context:
        'Indulekha is Unilever’s flagship Ayurvedic haircare brand celebrated for cold-pressed botanical formulations and clinical efficacy.',
      problem:
        'Legacy e-commerce catalog layouts lacked storytelling, clinical credibility, and guidance on product regimens.',
      roleContribution:
        'UX and digital experience redesign: architected interactive diagnostic flow, redesigned product detail hierarchy, and refined visual tone.',
      decisions: [
        'Created a hair concern diagnostic tool that pairs users with their custom herbal regimen.',
        'Restructured product pages to showcase clinical trial data, active herbs, and verified user outcomes.',
        'Adopted clean editorial typography paired with earthy botanical accents.',
      ],
      process: [
        'Analyzed consumer drop-off analytics across discovery, product consideration, and checkout stages.',
        'Prototyped and A/B tested personalized quiz steps versus traditional category filters.',
        'Crafted responsive design components ensuring rapid mobile browsing speeds.',
      ],
      designNotes:
        'Editorial typography combined with restrained gold and green accents reinforces premium botanical integrity.',
      outcome:
        'Delivered a 15% lift in lead conversion and higher user engagement with product education.',
      reflection:
        'E-commerce design succeeds when it shifts from pushing products to answering the shopper’s core question with clarity.',
    },
  },
  {
    id: 'linesense',
    slug: 'linesense',
    title: 'Tech M Linesense',
    narrativeHook: 'Transforming industrial machine telemetry into clean, fast model-training workflows.',
    shortDescription:
      'Designing around complex model-training workflows without making the complexity visible to the user.',
    role: 'Product Designer',
    category: 'Manufacturing / AI',
    client: 'Tech Mahindra',
    year: '2022 — 2023',
    tags: ['Manufacturing', 'AI', 'Data'],
    outcome: 'Enabled 62% faster model training by streamlining telemetry mapping and training parameters.',
    featured: true,
    priority: 4,
    status: 'published',
    externalCaseStudyUrl: 'https://techmahindra.com',
    visual: {
      earlyAttemptLabel: 'Early Attempt: Dense Tabular Log Dumps',
      resolvedLabel: 'Resolved: Topological Factory Floor Console',
      caption: 'LineSense IoT console — rendering 60Hz sensor telemetry as an actionable spatial line map',
      earlyAttemptNote: 'Hundreds of raw data rows made rapid anomaly triage and model tuning virtually impossible.',
      resolvedNote: 'Visual machine schematic with color-coded sensor health and automated model training presets.',
    },
    caseStudy: {
      context:
        'TechM LineSense is an enterprise industrial IoT and computer vision line-monitoring suite for high-volume manufacturing facilities.',
      problem:
        'Operators and machine learning engineers struggled with convoluted training configurations and dense tabular error logs.',
      roleContribution:
        'Lead product designer: translated intricate computer vision workflows into an intuitive operational console.',
      decisions: [
        'Mapped factory telemetry to an interactive physical assembly line schematic.',
        'Built a 3-tier severity notification system ensuring critical line stoppages receive instant attention.',
        'Consolidated training parameter tuning into a single-pane model calibration wizard.',
      ],
      process: [
        'Conducted control room field observations to understand operator shift handoffs and alarm fatigue.',
        'Iterated on information density to optimize screen space without losing vital sensor depth.',
        'Ensured high-contrast readability under harsh factory floor lighting.',
      ],
      designNotes:
        'Purpose-built industrial dark theme with monospaced telemetry metrics and clear ergonomic color codes.',
      outcome:
        '62% faster model training cycles and significantly reduced operator response times during anomalies.',
      reflection:
        'Enterprise AI tools do not need to look like spreadsheets. When designed with precision, deep technical systems become empowering.',
    },
  },
];

// 05 — DESIGN SERVICES & APPROACH
export const approachData: ApproachStep[] = [
  {
    step: '01',
    title: 'Understand',
    description: 'Get close to the users, business, context, and constraints.',
  },
  {
    step: '02',
    title: 'Simplify',
    description: 'Find the underlying problem instead of treating every symptom as a separate problem.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Explore multiple directions, test assumptions, and shape the experience.',
  },
  {
    step: '04',
    title: 'Ship',
    description: 'Work with developers and stakeholders to make sure the design works in the real product.',
  },
  {
    step: '05',
    title: 'Learn',
    description: 'Look at what happened after launch and use it to make the next decision better.',
  },
];

export const servicesData: ServiceItem[] = [
  {
    index: '01',
    title: 'Product Design',
    description:
      'End-to-end product experiences from initial ambiguity and user discovery to production-ready design systems.',
    secondaryNote: 'Discovery → Architecture → Flows → Hi-Fi Prototypes',
  },
  {
    index: '02',
    title: 'UX Design',
    description:
      'User journeys, wireframes, and interaction patterns tested against real behaviors, constraints, and ergonomic usability.',
    secondaryNote: 'Usability Testing → Mental Models → Friction Reduction',
  },
  {
    index: '03',
    title: 'Design Systems',
    description:
      'Scalable, token-driven component libraries that bridge design and engineering teams with consistency and speed.',
    secondaryNote: 'Design Tokens → Accessible Components → Documentation',
  },
  {
    index: '04',
    title: 'Complex Workflows / Enterprise AI',
    description:
      'Untangling multi-stakeholder enterprise software, data-heavy consoles, and generative AI interfaces into clear, useful tools.',
    secondaryNote: 'Enterprise SaaS → AI Tools → High-Throughput Data',
  },
];

// 06 — ABOUT SNAPSHOT
export const aboutSnapshotData = {
  sectionLabel: 'A LITTLE ABOUT ME',
  heading: 'I’m curious about how things work—and slightly obsessed with making them work better.',
  supportingCopy:
    'I’ve spent the last 5+ years designing products, working with teams, learning unfamiliar domains, and trying to make complicated things a little less complicated.\n\nMy work has taken me across different industries and problem spaces, but the part I enjoy most has stayed consistent: getting into the details, finding the real problem, and turning it into a solution people can understand.',
  personalityLine: 'Part designer. Part problem investigator. Part professional overthinker.',
  ctaText: 'More about me →',
};

// 07 — EXPERIENCE SNAPSHOT & FULL EXPERIENCE
export const experienceData: ExperienceItem[] = [
  {
    id: 'atzean-technologies',
    company: 'Atzean Technologies LLP',
    role: 'Senior Product Designer',
    dates: 'Jan 2026 — Present',
    location: 'Remote / Hybrid',
    progressionStage: 'Senior Product Design',
    description:
      'Led end-to-end product design for complex B2B, B2C, SaaS, FinTech, and AI/ML products. Simplified data-heavy workflows and complex interfaces.',
    whatIWorkedOn: [
      'End-to-end product design for B2B, B2C, SaaS, FinTech, and AI/ML products',
      'Information architecture, interaction design, and rapid prototyping',
      'Cross-functional collaboration from discovery to developer handoff',
    ],
    impact: 'Streamlined complex enterprise interfaces into clear, actionable workflows.',
  },
  {
    id: 'f1-studioz',
    company: 'F1 Studioz Private Limited',
    role: 'UX Designer',
    dates: 'Aug 2022 — 2025',
    location: 'Bangalore',
    progressionStage: 'Product / UX Design',
    description:
      'Leading UX and product design initiatives for global clients, untangling complex B2B workflows, enterprise design systems, and AI-enabled product experiences.',
    whatIWorkedOn: [
      'Enterprise SaaS platforms and GenAI tooling (Typeface)',
      'Healthcare patient onboarding and insurance claims pipelines (HealthCo / Reclaimz)',
      'Design systems and cross-functional design-to-dev workflows',
    ],
    impact: 'User satisfaction increased by 64% and onboarding friction dropped significantly across key engagements.',
  },
  {
    id: '7edge',
    company: '7Edge Private Limited',
    role: 'UI/UX Designer',
    dates: 'Oct 2021 — Jul 2022',
    location: 'Mangalore',
    progressionStage: 'UI / UX Design',
    description:
      'End-to-end interface and interaction design across multi-platform client applications in fintech, healthcare, and e-commerce.',
    whatIWorkedOn: [
      'Design of consumer web and mobile applications from concept to handoff',
      'Information architecture, wireframing, and interactive prototyping',
      'Multi-device responsive layouts and accessibility audits',
    ],
    impact: 'Delivered over 5 successful client products on tight delivery milestones.',
  },
  {
    id: 'siya-tech',
    company: 'Siya Tech Ventures Pvt. Ltd',
    role: 'UI UX Designer',
    dates: 'Nov 2020 — Jun 2021',
    location: 'Indore',
    progressionStage: 'UX Design',
    description:
      'User flows, wireframing, and interactive prototypes for consumer and startup digital products.',
    whatIWorkedOn: [
      'Early-stage product discovery and wireframing',
      'UI kits, design assets, and developer specifications',
    ],
    impact: 'Helped launch early MVP releases and streamlined user onboarding paths.',
  },
  {
    id: 'credence-analytics',
    company: 'Credence Analytics Pvt. Ltd',
    role: 'UX Designer Intern',
    dates: 'Apr 2020 — Oct 2020',
    location: 'Mumbai',
    progressionStage: 'UX Design',
    description:
      'User research assistance, information architecture mapping, and interface usability evaluations for financial software.',
    whatIWorkedOn: [
      'Auditing complex financial screens and dense data tables',
      'User journey mapping and usability heuristic evaluations',
    ],
    impact: 'Identified key navigation bottlenecks and contributed to internal UI guidelines.',
  },
  {
    id: 'arihant-capital',
    company: 'Arihant Capital Market',
    role: 'Graphic Designer',
    dates: 'Mar 2019 — Sep 2019',
    location: 'Indore',
    progressionStage: 'Graphic Design',
    description:
      'Visual brand communication, marketing collateral, typography, and publication design for a prominent capital market firm.',
    whatIWorkedOn: [
      'Brand communication, infographics, and investor reports',
      'Digital campaign creative assets and editorial layouts',
    ],
    impact: 'Modernized brand collateral across digital and print touchpoints.',
  },
];

// 08 — TESTIMONIALS (12 People as explicitly specified by user)
export const testimonialsData: TestimonialItem[] = [
  {
    quote:
      'Mihir has an uncanny ability to get uncomfortably close to complex problems and turn ambiguous requirements into clear, intuitive product experiences that just work.',
    name: 'Vipul Sharma',
    role: '[Designation]',
    company: 'F1 Studioz',
  },
  {
    quote:
      'His attention to detail and sharp product thinking cut through complexity effortlessly. Mihir designs with both genuine user empathy and business rigor.',
    name: 'Deepak Panchal',
    role: '[Designation]',
    company: 'Product Lead',
  },
  {
    quote:
      'Working with Mihir on product delivery was seamless. He bridges design and development with great clarity, rapid prototyping, and genuine care for the end outcome.',
    name: 'Sachin Sharma',
    role: '[Designation]',
    company: 'Engineering Lead',
  },
  {
    quote:
      'Mihir takes deep ownership of the problem space. He does not stop at making things look polished—he ensures the workflow genuinely solves the user’s real need.',
    name: 'Bhushan Pungliya',
    role: '[Designation]',
    company: 'Product Director',
  },
  {
    quote:
      'His methodical approach to problem-solving and willingness to question assumptions made a massive difference across our product initiatives.',
    name: 'Vedanth',
    role: '[Designation]',
    company: 'UX Lead',
  },
  {
    quote:
      'Mihir’s work had an immediate, measurable impact on user engagement and conversion. He understands how design drives actual business outcomes beyond the screen.',
    name: 'Mahak Jain',
    role: '[Designation]',
    company: 'Growth & Strategy',
  },
  {
    quote:
      'A wonderfully creative and collaborative designer. Mihir’s craft, typographic precision, and user-centric focus elevate every project he touches.',
    name: 'Richa Singh',
    role: '[Designation]',
    company: 'Design Specialist',
  },
  {
    quote:
      'Mihir excels when thrown into ambiguous, complex domains. He maps out the system fast and brings structured clarity to messy UX challenges.',
    name: 'Jinsy John',
    role: '[Designation]',
    company: 'Senior UX Designer',
  },
  {
    quote:
      'Collaborating with Mihir was an absolute pleasure. He brings energy, thoughtful perspective, and high standards to the entire design process.',
    name: 'Tanisha',
    role: '[Designation]',
    company: 'Product Partner',
  },
  {
    quote:
      'His design approach is refreshingly grounded. Mihir focuses on what is truly useful for real users rather than superficial design trends.',
    name: 'Khushi',
    role: '[Designation]',
    company: 'UI/UX Associate',
  },
  {
    quote:
      'Mihir communicates design decisions with crisp rationale and partners exceptionally well across cross-functional product and engineering teams.',
    name: 'Pooja',
    role: '[Designation]',
    company: 'Project Lead',
  },
  {
    quote:
      'Mihir consistently delivers high-impact design solutions on tight timelines, always maintaining exceptional craft, usability, and domain focus.',
    name: 'Rahul Bhide',
    role: '[Designation]',
    company: 'Tech Mahindra',
  },
];

// 09 — CONTACT CTA
export const contactCtaData = {
  sectionLabel: '✦ GOT A PROBLEM?',
  heading: 'Have something complicated? Let’s make it simpler.',
  supportingCopy:
    'Whether you’re building a new product, untangling an existing one, or just have an interesting problem to discuss—I’m always open to a conversation.',
  primaryCtaText: 'Contact me →',
  secondaryCtaText: 'Connect on LinkedIn →',
};

// ABOUT PAGE SPECIFIC DATA
export const aboutPageData = {
  intro: {
    heading: 'Hi, I’m Mihir. I design products and solve problems.',
    body: 'I’m a product designer who likes understanding the things behind the interface—the people, systems, decisions, constraints, and occasionally the chaos.',
  },
  story: {
    heading: 'How I ended up here.',
    stages: [
      {
        stage: 'Where it started',
        content:
          'I started out in visual and graphic design, obsessed with typography, balance, and communication. But I quickly realized that making things look right only mattered if the underlying system actually solved a problem.',
      },
      {
        stage: 'What changed',
        content:
          'Moving into product and UX design shifted everything. I discovered that the messy, ambiguous parts—the user journeys, edge cases, system rules, and technical boundaries—were where the real design happens.',
      },
      {
        stage: 'What I learned',
        content:
          'Over the last 5+ years, working on enterprise software, healthcare flows, and AI products, I learned that good design is rarely about adding features. It’s almost always about untangling complexity until the answer feels obvious.',
      },
      {
        stage: 'Where I am now',
        content:
          'Today, I work across product, UX, and visual design to build products that are not just functional, but genuinely comfortable, loveable, and simple to use.',
      },
    ],
  },
  philosophy: {
    heading: 'My job isn’t to make things complicated beautifully.',
    body: [
      'I believe good design starts by understanding the problem properly.',
      'The interface is only one part of the work. The harder questions usually happen before it:',
      'What are we actually solving?',
      'Who are we solving it for?',
      'Why does the problem exist?',
      'What constraints are real?',
      'And what is the simplest useful answer?',
    ],
  },
  workingStyle: {
    heading: 'How I like to work.',
    principles: [
      {
        title: 'Ask before assuming.',
        description: 'Understand the context before jumping into solutions.',
      },
      {
        title: 'Make the complicated visible.',
        description: 'Map the system, workflow, or problem before trying to simplify it.',
      },
      {
        title: 'Bring people into the process.',
        description: 'Design gets better when product, engineering, business, and users are part of the conversation.',
      },
      {
        title: 'Prototype early.',
        description: 'Ideas become much easier to discuss once people can interact with them.',
      },
      {
        title: 'Stay close to the outcome.',
        description: 'Shipping isn’t the finish line. It’s where you start learning whether the work actually helped.',
      },
    ],
  },
  personalSide: {
    heading: 'When I’m not designing...',
    items: [
      {
        title: 'Exploring Visual Experiments',
        detail: 'Experimenting with typography pairings, kinetic motion, and generative visual tools.',
      },
      {
        title: 'Travel & Photography',
        detail: 'Observing everyday architecture, street signs, and how people navigate physical spaces.',
      },
      {
        title: 'Curious Reading',
        detail: 'Books on human behavior, cognitive science, and the history of everyday industrial objects.',
      },
      {
        title: 'Continuous Learning',
        detail: 'Tinkering with code, design systems engineering, and modern web interfaces.',
      },
    ],
    closingLine: 'Design is what I do. It’s not everything I am.',
  },
};

// WORK PAGE SPECIFIC DATA
export const workPageData = {
  heading: 'The work, without the portfolio fluff.',
  supportingCopy:
    'A collection of projects where I’ve worked through real constraints, messy problems, and complicated requirements to create better product experiences.',
  categories: [
    'All',
    'Product Design',
    'UX',
    'Enterprise',
    'Healthcare',
    'AI / Data',
    'Consumer',
  ],
};
