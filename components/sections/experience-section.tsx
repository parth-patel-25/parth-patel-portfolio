import { SectionHeading } from "@/components/shared/section-heading"
import { TechnologyBadge } from "@/components/shared/technology-badge"
import { Reveal } from "@/components/shared/reveal"
import { experience } from "@/data/resume"

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been building"
          className="[&_h2]:scroll-mt-24"
        />
        <h2 id="experience-heading" className="sr-only">
          Experience
        </h2>

        <ol className="relative space-y-12 border-l border-border pl-6 sm:pl-8">
          {experience.map((job, idx) => (
            <Reveal as="li" key={`${job.company}-${idx}`} delay={idx * 0.05}>
              <span className="absolute -left-[5px] mt-2 size-2.5 rounded-full bg-foreground" aria-hidden="true" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-medium tracking-tight sm:text-lg">
                  {job.role}{" "}
                  <span className="text-muted-foreground">· {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {job.start} — {job.end}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {job.stack && job.stack.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((t) => (
                    <TechnologyBadge key={t} name={t} />
                  ))}
                </div>
              ) : null}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
