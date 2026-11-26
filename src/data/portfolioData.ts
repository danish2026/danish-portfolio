export interface Project {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  period: string;
  category: "Full-Stack" | "Frontend" | "Integration & API";
  description: string;
  longDescription: string;
  highlights: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  achievements: string[];
  skillsUsed: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export const personalInfo = {
  name: "Muhammed Danish KK",
  role: "Full-Stack Software Engineer",
  subRole: "Frontend Specialist & API Architect",
  tagline:
    "Crafting High-Performance Scalable Web Applications & Immersive Digital Experiences",
  experienceYears: "2+",
  location: "Calicut, Kerala, India (673520)",
  email: "Muhammeddanish5227@gmail.com",
  phone: "+91 7994715227",
  whatsappUrl:
    "https://wa.me/917994715227?text=Hi%20Muhammed%20Danish,%20I%20saw%20your%20portfolio!",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  bio: `Full-stack software developer with 2 years of proven industry experience building and shipping scalable web applications with JavaScript, TypeScript, React, Next.js, Node.js, Express, and Nest.js. Skilled in designing and integrating REST APIs, working with SQL & NoSQL databases (MySQL, PostgreSQL, MongoDB), and orchestrating Git/GitHub CI/CD pipelines for rock-solid production releases. Passionate problem-solver with a strong flair for AI, automation, and high-performance interactive architectures.`,
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "14+", label: "Enterprise Projects" },
    { value: "100%", label: "On-Time Delivery" },
    { value: "99.9%", label: "Uptime Reliability" },
  ],
};

export const projectsData: Project[] = [
  {
    id: "kenya-airways",
    title: "Kenya Airways Flight Date Modification",
    subtitle: "Enterprise Global Distribution System (GDS) Integration",
    company: "Foxiom Leads",
    period: "Mar 2026 – Present",
    category: "Integration & API",
    description:
      "Implemented deep Amadeus GDS integration for seamless automated flight date changes, real-time fare recalculations, and instant PNR updates.",
    longDescription:
      "A mission-critical enterprise module engineered for Kenya Airways booking ecosystem. Integrated directly with the Amadeus Global Distribution System (GDS) API to enable passengers and travel agents to re-schedule flights effortlessly. Engineered resilient backend microservices ensuring strict transactional integrity, real-time seat availability verification, dynamic fare-difference calculations, and instantaneous PNR (Passenger Name Record) synchronization.",
    highlights: [
      "Engineered Amadeus GDS SOAP/REST integration for automated flight itinerary adjustments.",
      "Optimized backend services for sub-second real-time fare validation and seat availability polling.",
      "Secured transactional PNR state synchronizations to eliminate overbooking and inconsistent ticket states.",
      "Implemented comprehensive error recovery and fallback protocols for third-party airline API latency spikes.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Amadeus GDS",
      "REST APIs",
      "Redis",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "GDS Latency Reduction", value: "38%" },
      { label: "Date Change Success", value: "99.8%" },
      { label: "Booking Synchronization", value: "Real-Time" },
    ],
    featured: true,
  },
  {
    id: "tax-go-global",
    title: "Tax Go Global",
    subtitle: "Enterprise Multi-Entity Financial & Accounting Software",
    company: "Foxiom Leads",
    period: "Mar 2026 – Present",
    category: "Full-Stack",
    description:
      "Engineered a robust corporate accounting platform with React, Node.js, and Redux, featuring dynamic inventory management, multi-tier payroll, and automated tax reporting.",
    longDescription:
      "Comprehensive enterprise financial software built to streamline bookkeeping, tax compliance, and payroll for businesses. Provides intelligent double-entry ledgers, dynamic automated taxation computation, batch invoicing, inventory valuation, and multi-currency ledger tracking.",
    highlights: [
      "Built high-performance financial data grids handling 10,000+ ledger entries smoothly.",
      "Implemented automated payroll calculation engine with configurable tax brackets and deductions.",
      "Integrated real-time inventory management with automatic cost-of-goods-sold (COGS) adjustments.",
      "Designed Redux state architecture with robust caching and offline-tolerant form drafts.",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Redux Toolkit",
      "Express.js",
      "PostgreSQL",
      "Ant Design",
      "Chart.js",
    ],
    metrics: [
      { label: "Tax Calculation Speed", value: "< 50ms" },
      { label: "Ledger Volume", value: "50k+ entries" },
      { label: "Accuracy Rate", value: "100%" },
    ],
    featured: true,
  },
  {
    id: "eazy-fatoora",
    title: "Eazy Fatoora CRM & Invoicing",
    subtitle: "Customer Lifecycle & E-Commerce Order Hub",
    company: "Foxiom Leads",
    period: "Mar 2026 – Present",
    category: "Full-Stack",
    description:
      "Developed a CRM-based e-commerce order and customer management platform with real-time order tracking, automated invoicing, and customer intelligence.",
    longDescription:
      "A full-scale customer relationship management (CRM) and e-commerce operations hub. Facilitates complete post-purchase lifecycle management, including automated PDF invoice generation, multi-channel customer communications, fulfillment status workflows, and interactive sales intelligence dashboards.",
    highlights: [
      "Designed unified CRM pipeline tracking customer journeys from lead acquisition to repeat purchase.",
      "Automated e-invoice generation and email delivery matching local regulatory compliance.",
      "Structured MongoDB schemas with optimized indexing for lightning-fast customer search across 100k+ records.",
      "Built responsive analytical dashboards displaying revenue metrics, retention rates, and fulfillment velocity.",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "PDFKit",
      "JWT Auth",
    ],
    metrics: [
      { label: "Order Visibility Boost", value: "65%" },
      { label: "Invoice Generation", value: "Instant" },
      { label: "Search Response", value: "< 80ms" },
    ],
    featured: true,
  },
  {
    id: "made-by-thin-air",
    title: "Made by Thin Air",
    subtitle: "AI Dataset Image Labeling & Canvas Annotation Platform",
    company: "Foxiom Leads",
    period: "Mar 2026 – Present",
    category: "Frontend",
    description:
      "Designed and built the interactive frontend of a high-precision image annotation and editing web application with HTML5 Canvas, Redux, Ant Design, and Next.js.",
    longDescription:
      "An advanced browser-based platform designed for machine learning computer vision engineers and dataset annotators. Features high-framerate interactive canvas tooling for bounding boxes, polygon segmentation, classification labeling, paired with a dynamic photo marketplace and checkout flow.",
    highlights: [
      "Engineered fluid HTML5 canvas zoom, pan, and vector polygon annotation tools with zero jitter.",
      "Integrated dynamic Next.js e-commerce purchase flows with instant high-resolution asset delivery.",
      "Employed Ant Design and custom CSS styling for an ultra-clean, distraction-free creative workspace.",
      "Optimized client-side memory usage when manipulating hundreds of high-res image datasets.",
    ],
    techStack: [
      "Next.js",
      "React.js",
      "Redux",
      "HTML5 Canvas",
      "Ant Design",
      "CSS Modules",
      "REST API",
    ],
    metrics: [
      { label: "Canvas Rendering", value: "60 FPS" },
      { label: "Asset Load Speed", value: "2.4x faster" },
      { label: "Annotation Efficiency", value: "+45%" },
    ],
    featured: true,
  },
];

export const experiencesData: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Foxiom Leads",
    location: "Calicut, India",
    period: "Mar 2026 – Present",
    type: "Full-Time",
    summary:
      "Leading frontend engineering for mission-critical client platforms, enterprise booking integrations, and internal CRM systems.",
    achievements: [
      "Build responsive, high-performance user interfaces with React.js, Next.js, and Redux, turning UI/UX designs into clean, modular, reusable components.",
      "Integrate REST APIs with backend services, optimizing web performance, asset caching, and initial page load times.",
      "Work closely with backend engineers, designers, and product managers to deliver polished, production-ready features for international clients (Kenya Airways, Tax Go Global, Thin Air).",
      "Establish frontend code standards, type safety with TypeScript, and reusable UI design token systems.",
    ],
    skillsUsed: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Ant Design",
      "Tailwind CSS",
      "REST API Integration",
    ],
  },
  {
    role: "Software Engineer",
    company: "Bairuha Tech",
    location: "Calicut, India",
    period: "Nov 2024 – Mar 2026",
    type: "Full-Time",
    summary:
      "Full-stack software developer delivering scalable, high-performance web applications across the full SDLC using MERN and Nest.js.",
    achievements: [
      "Built and delivered scalable, high-performance web applications as a full-stack developer using React, Node.js, and the MERN stack.",
      "Developed and integrated robust RESTful APIs with Node.js, Express, and Nest.js, managing SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases.",
      "Utilized Git version control and CI/CD pipelines to ensure safe, reproducible, and automated production deployments.",
      "Collaborated across requirement analysis, API schema design, unit testing, deployment, and ongoing server maintenance.",
      "Wrote clean, maintainable code and resolved complex concurrency and performance bottlenecks.",
    ],
    skillsUsed: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "React",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Git / GitHub",
      "CI/CD",
    ],
  },
];

export const educationData: Education[] = [
  {
    degree: "Full Stack Development Course",
    institution: "Bairuha Tech",
    location: "Calicut, India",
    period: "2024",
    details:
      "Immersive professional engineering training covering MERN stack, Nest.js, relational and document databases, architectural patterns, and production deployments.",
  },
  {
    degree: "B.A. Political Science",
    institution: "Golden Hills Arts and Science College",
    location: "Elathur, Kerala",
    period: "2021 – 2024",
    details:
      "Fostered analytical thinking, problem-solving, structured discourse, and strong intercultural communication.",
  },
  {
    degree: "12th Grade (Higher Secondary)",
    institution: "Gadhar College",
    location: "Panoor, Kerala",
    period: "2020",
    details:
      "Completed secondary education with distinction in academic coursework and extracurricular leadership.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: 95, highlight: true },
      { name: "Next.js", level: 90, highlight: true },
      { name: "TypeScript", level: 92, highlight: true },
      { name: "JavaScript (ES6+)", level: 96, highlight: true },
      { name: "Redux & Redux Toolkit", level: 90 },
      { name: "Tailwind CSS", level: 94 },
      { name: "Ant Design", level: 88 },
      { name: "HTML5 & CSS3 / SCSS", level: 98 },
      { name: "Three.js / WebGL & Canvas", level: 82 },
    ],
  },
  {
    title: "Backend & System APIs",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: 92, highlight: true },
      { name: "Express.js", level: 90, highlight: true },
      { name: "Nest.js", level: 86, highlight: true },
      { name: "RESTful API Design", level: 95, highlight: true },
      { name: "Microservices Architecture", level: 84 },
      { name: "Authentication (JWT / OAuth)", level: 90 },
      { name: "Amadeus GDS Integration", level: 88, highlight: true },
    ],
  },
  {
    title: "Databases & Storage",
    iconName: "Database",
    skills: [
      { name: "MongoDB (NoSQL)", level: 90, highlight: true },
      { name: "PostgreSQL", level: 86, highlight: true },
      { name: "MySQL", level: 88 },
      { name: "Database Indexing & Queries", level: 88 },
      { name: "Redis Caching", level: 80 },
    ],
  },
  {
    title: "DevOps, Tools & Practices",
    iconName: "GitBranch",
    skills: [
      { name: "Git & GitHub Workflows", level: 94, highlight: true },
      { name: "CI/CD Pipelines", level: 86, highlight: true },
      { name: "Production Deployments", level: 90 },
      { name: "Vite & Modern Bundlers", level: 92 },
      { name: "Postman & API Testing", level: 92 },
      { name: "Docker Basics", level: 80 },
    ],
  },
  {
    title: "Professional & Core Strengths",
    iconName: "Cpu",
    skills: [
      { name: "Problem Solving & Debugging", level: 96 },
      { name: "Full SDLC Ownership", level: 92 },
      { name: "Cross-Functional Collaboration", level: 94 },
      { name: "AI & Automation Curiosity", level: 90 },
      { name: "High-Performance UI/UX", level: 95 },
    ],
  },
];

export const terminalCommandsHelp = [
  { cmd: "help", desc: "List all available terminal commands" },
  { cmd: "about", desc: "Show biographical summary & career background" },
  { cmd: "skills", desc: "Display core technical skills across stack" },
  {
    cmd: "projects",
    desc: "List production projects & enterprise integrations",
  },
  {
    cmd: "experience",
    desc: "View work experience at Foxiom Leads & Bairuha Tech",
  },
  { cmd: "education", desc: "View academic degrees and certificates" },
  { cmd: "contact", desc: "Show email, phone number, and location" },
  { cmd: "hire", desc: "Launch recruiter inquiry / contact modal" },
  { cmd: "clear", desc: "Clear terminal history" },
];
