import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { AnchorHTMLAttributes, ReactNode } from "react"

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  showIcon?: boolean
}

export function ExternalLink({ children, className, showIcon = true, ...rest }: Props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-1 underline-offset-4 hover:underline focus-visible:underline",
        className,
      )}
      {...rest}
    >
      {children}
      {showIcon ? (
        <ArrowUpRight
          aria-hidden="true"
          className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      ) : null}
    </a>
  )
}
