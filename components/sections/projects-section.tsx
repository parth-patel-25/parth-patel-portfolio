import { SectionHeading } from "@/components/shared/section-heading"
import { TechnologyBadge } from "@/components/shared/technology-badge"
import { Reveal } from "@/components/shared/reveal"
import { projects } from "@/data/resume"

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading eyebrow="Projects" title="Selected work" />
        <h2 id="projects-heading" className="sr-only">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {projects.map((p, idx) => (
            <Reveal
              as="article"
              key={p.name}
              delay={idx * 0.04}
              className="group flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-muted/30"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-medium tracking-tight">{p.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {p.stack && p.stack.length > 0 ? (
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {p.stack.map((t) => (
                    <TechnologyBadge key={t} name={t} />
                  ))}
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
