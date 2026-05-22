import { Download, Mail, Phone } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { SectionHeading } from "@/components/shared/section-heading"
import { Reveal } from "@/components/shared/reveal"
import { personalInfo } from "@/data/resume"
import { siteConfig } from "@/data/site-config"

function iconFor(type: string) {
  if (type === "email") return Mail
  if (type === "phone") return Phone
  return Mail
}

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading eyebrow="Contact" title="Get in touch" />
        <h2 id="contact-heading" className="sr-only">
          Contact
        </h2>

        <Reveal>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Open to roles building serious React and React Native products. The fastest way to reach
            me is email — feel free to drop a line.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-3">
            {personalInfo.socials.map((s) => {
              const Icon = iconFor(s.type)
              return (
                <a
                  key={s.href}
                  href={s.href}
                  aria-label={`${s.type}: ${s.label}`}
                  className={buttonVariants({ variant: "outline" })}
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {s.label}
                </a>
              )
            })}
            <a
              href={siteConfig.resumePath}
              download
              aria-label="Download resume PDF"
              className={buttonVariants()}
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
