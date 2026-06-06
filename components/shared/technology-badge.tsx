import { Badge } from "@/components/ui/badge"

export function TechnologyBadge({ name }: { name: string }) {
  return (
    <Badge
      variant="secondary"
      className="rounded-md border border-border bg-muted/40 px-2 py-0.5 font-mono text-[11px] font-normal tracking-tight text-muted-foreground"
    >
      {name}
    </Badge>
  )
}
