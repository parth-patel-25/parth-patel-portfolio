"use client"

import { useEffect, useState } from "react"
import { Menu, X, Download } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navigation, personalInfo } from "@/data/resume"
import { siteConfig } from "@/data/site-config"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-transparent backdrop-blur transition-colors",
        scrolled ? "border-border bg-background/80" : "bg-background/40",
      )}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight"
          aria-label={`${personalInfo.name} — home`}
        >
          {personalInfo.name.toLowerCase().replace(" ", ".")}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={siteConfig.resumePath}
            download
            aria-label="Download resume PDF"
            className={buttonVariants({ size: "sm" })}
          >
            <Download className="size-3.5" aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-md border border-border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background md:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex max-w-5xl flex-col px-4 py-3 sm:px-6">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.resumePath}
              download
              onClick={() => setOpen(false)}
              aria-label="Download resume PDF"
              className={cn(buttonVariants({ size: "sm" }), "mt-2 h-9")}
            >
              <Download className="size-3.5" aria-hidden="true" />
              Download Resume
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
