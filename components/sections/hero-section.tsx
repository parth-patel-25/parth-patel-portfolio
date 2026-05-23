import { ArrowRight, Download, Mail } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/shared/reveal"
import { Magnetic } from "@/components/shared/magnetic"
import { personalInfo } from "@/data/resume"
import { siteConfig } from "@/data/site-config"

export function HeroSection() {
  const email = personalInfo.socials.find((s) => s.type === "email")

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <Reveal>
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {personalInfo.title}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {personalInfo.fullName}.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {personalInfo.summary}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href={siteConfig.resumePath}
                download
                aria-label="Download resume PDF"
                className={buttonVariants()}
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#projects" className={buttonVariants({ variant: "outline" })}>
                View Projects
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Magnetic>
            {email ? (
              <a
                href={email.href}
                aria-label={`Email ${personalInfo.name}`}
                className={buttonVariants({ variant: "ghost" })}
              >
                <Mail className="size-4" aria-hidden="true" />
                {email.label}
              </a>
            ) : null}
          </div>
        </Reveal>
        {personalInfo.availability ? (
          <Reveal delay={0.2}>
            <div className="mt-10 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="relative inline-flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {personalInfo.availability}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
