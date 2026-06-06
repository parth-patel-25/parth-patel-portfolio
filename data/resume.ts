export type SocialLink = {
  label: string
  href: string
  type: "email" | "phone" | "github" | "linkedin" | "website"
}

export type Experience = {
  company: string
  role: string
  start: string
  end: string
  location?: string
  bullets: string[]
  stack?: string[]
}

export type Project = {
  name: string
  description: string
  bullets: string[]
  stack?: string[]
  href?: string
}

export type SkillGroup = {
  label: string
  items: string[]
}

export type Education = {
  degree: string
  start?: string
  end?: string
  institution?: string
}

export type NavigationItem = {
  label: string
  href: string
}

export type PersonalInfo = {
  name: string
  fullName: string
  title: string
  summary: string
  availability?: string
  location?: string
  socials: SocialLink[]
}

export const personalInfo: PersonalInfo = {
  name: "Parth Patel",
  fullName: "Parth Pareshbhai Patel",
  title: "Full Stack Developer · React · Next.js · React Native · Node.js",
  summary:
    "Full Stack Developer building scalable web, mobile, AI-powered, and automation-driven products. I work across React, Next.js, React Native, and Node.js — designing secure APIs, integrating AI/LLM systems, and shipping clean, performance-focused architecture.",
  availability: "Open to opportunities",
  socials: [
    { label: "parthpatelaa19@gmail.com", href: "mailto:parthpatelaa19@gmail.com", type: "email" },
    { label: "+91 70483 77117", href: "tel:+917048377117", type: "phone" },
  ],
}

export const skills: SkillGroup[] = [
  { label: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { label: "Mobile", items: ["React Native"] },
  { label: "Backend", items: ["Node.js", "Express.js", "NestJS", "REST APIs", "Next.js API Routes"] },
  { label: "Database", items: ["PostgreSQL", "MongoDB", "Supabase"] },
  { label: "State & Data", items: ["Redux Toolkit", "RTK Query", "TanStack Query"] },
  {
    label: "AI & Automation",
    items: ["OpenAI APIs", "LLM APIs", "Prompt Engineering", "Puppeteer", "Playwright"],
  },
  {
    label: "Architecture & Auth",
    items: [
      "Feature-based structure",
      "Separation of Concerns",
      "JWT Authentication",
      "Role-Based Access Control",
      "WebSockets",
    ],
  },
  { label: "Performance", items: ["Memoization", "Rendering optimization", "Lazy loading"] },
  { label: "Forms & Validation", items: ["Formik"] },
  { label: "Tools & DevOps", items: ["Git", "Vite", "Webpack", "Babel", "Docker (Basics)", "Vercel"] },
]

export const experience: Experience[] = [
  {
    company: "ReverseBits",
    role: "Associate Software Engineer",
    start: "Sep 2025",
    end: "Present",
    bullets: [
      "Built scalable frontend, mobile, and backend systems using React, Next.js, React Native, and Node.js.",
      "Developed reusable components, custom hooks, internal dashboards, and secure API-driven workflows.",
      "Integrated APIs with strong validation, error mapping, fallback handling, and role-based access control.",
      "Integrated AI/LLM APIs for intelligent chatbot and assistant features.",
      "Built automation workflows with Node.js, Puppeteer, and Playwright for data extraction and processing.",
      "Improved performance through modular architecture, rendering optimization, and clean separation of concerns.",
    ],
    stack: ["React", "Next.js", "React Native", "Node.js", "TypeScript", "Redux Toolkit"],
  },
]

export const projects: Project[] = [
  {
    name: "Veriscreen",
    description: "Frontend with strict validation, role-based access, and resilient API handling.",
    bullets: [
      "Implemented Redux Toolkit and RTK Query for state and API handling.",
      "Built strong validation with Formik; mapped API errors against HTTP status codes.",
      "Implemented route protection and role-based access control.",
    ],
    stack: ["React", "Redux Toolkit", "RTK Query", "Formik"],
  },
  {
    name: "Leadify",
    description: "AI tutoring platform with real-time webcam and microphone interaction.",
    bullets: [
      "Developed AI tutoring platform with real-time interaction (webcam and mic).",
      "Integrated AI agents and handled user activity tracking (tab switch, close events).",
      "Built responsive UI and event-driven backend communication.",
    ],
    stack: ["React", "WebRTC", "AI Agents"],
  },
  {
    name: "Viberrr",
    description: "Subscription product delivered on a tight timeline with Stripe billing.",
    bullets: [
      "Delivered 20+ responsive pages under tight deadlines using efficient workflows.",
      "Integrated Stripe payments (recurring and annual) with retry handling.",
      "Built backend using Next.js API routes and Supabase.",
    ],
    stack: ["Next.js", "Stripe", "Supabase"],
  },
  {
    name: "Retainly",
    description: "Stability and UX improvements on an existing React product.",
    bullets: [
      "Fixed critical bugs and improved code quality.",
      "Managed useEffect dependencies and cleanup effectively.",
      "Implemented guided UI tours using React Joyride.",
    ],
    stack: ["React", "React Joyride"],
  },
  {
    name: "Wellness Vault",
    description: "Health platform combining a modular TypeScript frontend with secure AI-powered Node.js APIs.",
    bullets: [
      "Refactored legacy codebase into modular TypeScript architecture with reusable components and a global styling system.",
      "Built an AI-powered health assistant using LLM APIs.",
      "Implemented document and medical report processing via secure Node.js APIs.",
      "Added JWT authentication with role-based dashboards.",
      "Built real-time features with WebSockets and a barcode scanner (webcam + mobile torch).",
    ],
    stack: ["TypeScript", "Node.js", "LLM APIs", "WebSockets"],
  },
  {
    name: "AI Multi-Agent Blog Generator",
    description: "Full-stack multi-agent content platform with real-time LLM streaming.",
    bullets: [
      "Built full-stack app with Next.js and Node.js APIs.",
      "Designed multi-agent architecture (research, writing, and SEO agents).",
      "Integrated LLM APIs with real-time streaming responses.",
      "Added Markdown export and publishing workflows.",
    ],
    stack: ["Next.js", "Node.js", "LLM APIs"],
  },
  {
    name: "Automation & Scraping Engine",
    description: "Large-scale scraping and automation system with a monitoring dashboard.",
    bullets: [
      "Built scraping pipelines with Puppeteer and Playwright.",
      "Handled data processing, scheduling, and efficient request handling.",
      "Built a dashboard to monitor and manage automation tasks.",
    ],
    stack: ["Node.js", "Puppeteer", "Playwright"],
  },
]

export const education: Education[] = [
  { degree: "Bachelor of Technology (B.Tech)", start: "2022", end: "2025" },
  { degree: "Diploma in Engineering" },
]

export const navigation: NavigationItem[] = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]
