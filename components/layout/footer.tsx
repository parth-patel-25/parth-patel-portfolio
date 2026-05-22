import { personalInfo } from "@/data/resume"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6">
        <p className="font-mono">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <p className="font-mono">Built with Next.js · Tailwind · shadcn/ui</p>
      </div>
    </footer>
  )
}
