// Replace SITE_URL with your production domain before deployment.
export const siteConfig = {
  name: "Parth Patel",
  title: "Parth Patel — React & React Native Developer",
  description:
    "Portfolio of Parth Patel, a React & React Native developer focused on scalable web and mobile applications, TypeScript, performance, and modular architecture.",
  url: "https://your-domain.com",
  resumePath: "/resume/Parth_Patel_Resume.pdf",
  ogImage: "/og.png",
} as const

export type SiteConfig = typeof siteConfig
