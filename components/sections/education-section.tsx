import { SectionHeading } from "@/components/shared/section-heading"
import { Reveal } from "@/components/shared/reveal"
import { education } from "@/data/resume"

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <h2 id="education-heading" className="sr-only">
          Education
        </h2>

        <ul className="divide-y divide-border border-y border-border">
          {education.map((e, idx) => (
            <Reveal as="li" key={e.degree} delay={idx * 0.04}>
              <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="text-base font-medium tracking-tight">{e.degree}</p>
                  {e.institution ? (
                    <p className="text-sm text-muted-foreground">{e.institution}</p>
                  ) : null}
                </div>
                {e.start || e.end ? (
                  <span className="font-mono text-xs text-muted-foreground">
                    {[e.start, e.end].filter(Boolean).join(" — ")}
                  </span>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
