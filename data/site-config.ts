// Replace SITE_URL with your production domain before deployment.
export const siteConfig = {
  name: "Parth Patel",
  title: "Parth Patel — Full Stack Developer (React, Next.js, React Native, Node.js)",
  description:
    "Portfolio of Parth Patel, a Full Stack Developer building scalable web, mobile, AI-powered, and automation-driven products with React, Next.js, React Native, and Node.js.",
  url: "https://your-domain.com",
  resumePath: "/resume/Parth_Patel_Resume.pdf",
  ogImage: "/og.png",
} as const

export type SiteConfig = typeof siteConfig
