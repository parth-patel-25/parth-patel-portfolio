"use client"

import { useEffect, useSyncExternalStore } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

const CURSOR_QUERY =
  "(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)"
const CURSOR_SIZE = 28

function subscribeCursorMedia(cb: () => void) {
  if (typeof window === "undefined") return () => {}
  const mql = window.matchMedia(CURSOR_QUERY)
  mql.addEventListener("change", cb)
  return () => mql.removeEventListener("change", cb)
}
function getCursorEnabled() {
  if (typeof window === "undefined") return false
  return window.matchMedia(CURSOR_QUERY).matches
}
function getServerCursorEnabled() {
  return false
}

export function CustomCursor() {
  const enabled = useSyncExternalStore(
    subscribeCursorMedia,
    getCursorEnabled,
    getServerCursorEnabled,
  )

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const cursorX = useSpring(x, { stiffness: 1500, damping: 80, mass: 0.2 })
  const cursorY = useSpring(y, { stiffness: 1500, damping: 80, mass: 0.2 })

  useEffect(() => {
    if (!enabled) return

    document.documentElement.classList.add("has-custom-cursor")

    function onMove(e: PointerEvent) {
      if (e.pointerType && e.pointerType !== "mouse") return
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener("pointermove", onMove, { passive: true })

    return () => {
      document.documentElement.classList.remove("has-custom-cursor")
      window.removeEventListener("pointermove", onMove)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999]"
    >
      <motion.svg
        className="absolute top-0 left-0"
        width={CURSOR_SIZE}
        height={CURSOR_SIZE}
        viewBox="0 0 24 24"
        fill="none"
        style={{ x: cursorX, y: cursorY }}
      >
        <path
          d="M5.5 3.5 L5.5 18.5 L9.5 14.5 L12 20 L14.5 19 L12 13.5 L17.5 13.5 Z"
          fill="white"
          stroke="black"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  )
}
