# CLAUDE.md

Portfolio site. Next.js 16 (App Router, Turbopack) + React 19 + Tailwind 4 + shadcn (style `base-vega`, neutral) + Base UI + lucide. Package manager: bun.

## Commands

- `bun dev` — dev server (turbopack)
- `bun run build` / `bun start`
- `bun run lint` / `bun run typecheck` / `bun run format`

## Component rule (HARD)

**Never hand-roll a UI primitive that shadcn ships.** Order of operations for any new UI element:

1. Check `components/ui/` — reuse if present.
2. If absent, install from shadcn registry: `bunx shadcn@latest add <name>`. Aliases already configured in `components.json` (`@/components/ui`, `@/lib/utils`, `@/hooks`).
3. Also check registered registries (e.g. `@loading-ui`) before writing custom: `bunx shadcn@latest add @loading-ui/<name>`.
4. Only if a component does **not** exist in any registry, build custom — place in `components/` (not `components/ui/`), compose Base UI + shadcn primitives, use `cn()` from `@/lib/utils`, follow CVA variant pattern matching existing `button.tsx`.
5. Never duplicate a shadcn primitive under a new name.

Icons: `lucide-react` only.

## Skill auto-invoke

Skills in `skills-lock.json` must auto-invoke when relevant — no need for user to ask:

| Trigger | Skill |
|---|---|
| Adding/installing/composing any shadcn component, registry work, theming tokens | `shadcn` |
| New page/route, layout, server/client component decisions, data fetching, caching, metadata, route handlers | `next-best-practices` |
| Hooks, state, effects, suspense, server components, memoization, refs | `vercel-react-best-practices` |
| Visual design, layout, spacing, typography, color, hierarchy, landing/marketing sections | `web-design-guidelines` |
| Interaction polish, micro-animation, a11y, motion, focus, empty/loading/error states | `ui-ux-pro-max` |
| Non-trivial refactor, naming, function decomposition, readability review | `clean-code-principles` |

If task spans multiple, invoke all that apply. For any frontend component task: at minimum `shadcn` + (`web-design-guidelines` or `ui-ux-pro-max`).

## Conventions

- Path aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`.
- Styling: Tailwind v4 (CSS-vars in `app/globals.css`), `tw-animate-css` for animation utilities, `next-themes` for dark mode.
- TS strict. RSC by default — add `"use client"` only when needed (state/effects/browser APIs).
- Format: prettier + prettier-plugin-tailwindcss (class sorting auto).

## Layout

```
app/          routes, layout, globals.css
components/   custom components (theme-provider, ring, ...)
components/ui shadcn primitives ONLY (button, ...)
lib/          utils (cn, ...)
hooks/        custom hooks
public/       static assets
```
