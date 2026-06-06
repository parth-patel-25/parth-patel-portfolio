"use client"

import { useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react"

type Props = {
  children: ReactNode
  className?: string
  strength?: number
}

export function Magnetic({ children, className, strength = 0.25 }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const reduced = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 350, damping: 22, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 350, damping: 22, mass: 0.4 })

  function handleMove(e: React.PointerEvent<HTMLSpanElement>) {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    const max = 5
    x.set(Math.max(-max, Math.min(max, dx * strength)))
    y.set(Math.max(-max, Math.min(max, dy * strength)))
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      className={className}
    >
      {children}
    </motion.span>
  )
}
