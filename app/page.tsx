import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { EducationSection } from "@/components/sections/education-section"
import { ContactSection } from "@/components/sections/contact-section"
import { SmoothScrollProvider } from "@/components/shared/smooth-scroll-provider"
import { personalInfo } from "@/data/resume"
import { siteConfig } from "@/data/site-config"

export default function Page() {
  const email = personalInfo.socials.find((s) => s.type === "email")?.label

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.fullName,
    jobTitle: personalInfo.title,
    url: siteConfig.url,
    email: email ? `mailto:${email}` : undefined,
    description: personalInfo.summary,
    knowsAbout: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "Frontend Architecture",
      "Mobile Development",
    ],
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <SmoothScrollProvider />
      <Navbar />
      <main id="main">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  )
}
