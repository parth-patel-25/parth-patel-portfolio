import { cn } from "@/lib/utils"

type Props = {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, className }: Props) {
  return (
    <div className={cn("mb-10 flex flex-col gap-3", className)}>
      <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        {eyebrow}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">{description}</p>
      ) : null}
    </div>
  )
}
