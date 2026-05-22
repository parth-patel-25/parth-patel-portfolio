import { SectionHeading } from "@/components/shared/section-heading"
import { TechnologyBadge } from "@/components/shared/technology-badge"
import { Reveal } from "@/components/shared/reveal"
import { skills } from "@/data/resume"

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading eyebrow="Skills" title="Tools I work with" />
        <h2 id="skills-heading" className="sr-only">
          Skills
        </h2>

        <dl className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, idx) => (
            <Reveal key={group.label} delay={idx * 0.03}>
              <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {group.label}
              </dt>
              <dd className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <TechnologyBadge key={item} name={item} />
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
