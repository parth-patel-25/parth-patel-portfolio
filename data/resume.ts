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
  title: "React & React Native Developer",
  summary:
    "React & React Native developer building scalable web and mobile applications. Focused on TypeScript, modular architecture, performance optimization, and API integration — with experience in complex frontend challenges, real-time systems, and cross-platform development.",
  availability: "Open to opportunities",
  socials: [
    { label: "parthpatelaa19@gmail.com", href: "mailto:parthpatelaa19@gmail.com", type: "email" },
    { label: "+91 70483 77117", href: "tel:+917048377117", type: "phone" },
  ],
}

export const skills: SkillGroup[] = [
  { label: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { label: "Mobile", items: ["React Native"] },
  { label: "State & Data", items: ["TanStack Query", "Redux Toolkit", "RTK Query"] },
  { label: "Architecture", items: ["Feature-based structure", "Separation of Concerns"] },
  { label: "Forms & Validation", items: ["Formik"] },
  { label: "Performance", items: ["Memoization", "Rendering optimization"] },
  { label: "Tools", items: ["Git", "Babel", "Webpack", "Vite"] },
]

export const experience: Experience[] = [
  {
    company: "ReverseBits",
    role: "Associate Software Engineer",
    start: "Sep 2025",
    end: "Present",
    bullets: [
      "Built scalable frontend and mobile architectures using modular design.",
      "Developed reusable components and custom hooks.",
      "Integrated APIs with error mapping and fallback handling.",
      "Optimized performance and handled cross-platform dependencies.",
      "Implemented route protection and permission-based access control.",
    ],
    stack: ["React", "React Native", "TypeScript", "Redux Toolkit"],
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
    description: "Legacy codebase refactored into a modular TypeScript architecture with realtime features.",
    bullets: [
      "Refactored legacy codebase into modular structure with TypeScript.",
      "Built reusable components and a global styling system.",
      "Implemented real-time features using sockets.",
      "Developed barcode scanner with webcam and mobile torch support.",
    ],
    stack: ["TypeScript", "React", "Sockets"],
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
