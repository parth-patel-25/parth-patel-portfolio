import fs from "node:fs"
import path from "node:path"
import Image from "next/image"
import { ArrowRight, Download, Mail } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/shared/reveal"
import { Magnetic } from "@/components/shared/magnetic"
import { personalInfo } from "@/data/resume"
import { siteConfig } from "@/data/site-config"

const PORTRAIT_SRC = "/images/parth-profile.webp"
const portraitExists = fs.existsSync(
  path.join(process.cwd(), "public", "images", "parth-profile.webp"),
)

export function HeroSection() {
  const email = personalInfo.socials.find((s) => s.type === "email")

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_auto] md:gap-12">
          <div className="order-2 md:order-1">
            {portraitExists ? (
              <Reveal>
                <div className="mb-6 md:hidden">
                  <Image
                    src={PORTRAIT_SRC}
                    alt="Portrait of Parth Patel"
                    width={112}
                    height={132}
                    priority
                    sizes="112px"
                    className="rounded-xl border border-border bg-black"
                  />
                </div>
              </Reveal>
            ) : null}
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
          {portraitExists ? (
            <Reveal delay={0.1}>
              <div className="order-1 hidden md:order-2 md:block">
                <Image
                  src={PORTRAIT_SRC}
                  alt="Portrait of Parth Patel"
                  width={220}
                  height={260}
                  priority
                  sizes="220px"
                  className="rounded-xl border border-border bg-black object-cover"
                  style={{ width: 220, height: 260 }}
                />
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  )
}
