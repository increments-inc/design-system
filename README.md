# Increments Inc. — Design System

[![Status](https://img.shields.io/badge/status-v0.1%20Brand%20Foundations-C0FE71?labelColor=09100C)](./)
[![Stack](https://img.shields.io/badge/stack-Astro%205%20%C2%B7%20MDX%20%C2%B7%20Lucide-09100C?labelColor=16312C)](./)

> The single source of truth for every Increments Inc. surface — product screens, marketing flyers, sales decks, partner collateral, landing pages, and emails. Dark, premium, opinionated, and built to scale.

**Owner:** MSI Shamim · Founder & CEO · [ceo@incrementsinc.com](mailto:ceo@incrementsinc.com)

---

## What's inside

The system ships in three layers:

| Layer | Status | Count |
|---|---|---|
| **Brand Foundations** | Shipped in v0.1 | 12 pages |
| **Components** | Planned for v0.2 | ~30 |
| **Patterns** | Planned for v0.3 | ~15 |

### Brand Foundations (v0.1)

1. **Introduction** — what the system is, who it's for, how to use it
2. **Brand Essence** — north star, six principles, canonical italic-accent moments
3. **Color** — dark-forest base + single lime accent, gradients, atmospheric glows
4. **Typography** — Inter + Instrument Serif, scale, italic-accent headline rule
5. **Spacing & Layout** — 16-step scale, grid patterns, breakpoints, A4 print canvas
6. **Radii & Elevation** — radius-by-role, lime-tinted shadow system
7. **Iconography** — Lucide icon set, lime-tile pattern, 18-icon curated palette
8. **Motion** — single pulse animation, prefers-reduced-motion
9. **Logo** — inline-SVG pattern, sizing, clear-space, color usage
10. **Voice & Content** — copy ↔ design alignment, contact footer convention
11. **Accessibility** — WCAG 2.1 AA contrast matrix, focus states, keyboard nav
12. **Tokens** — CSS custom properties + Figma variable names

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

### Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local dev server with hot reload (port 4321) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the built static site |

---

## Project structure

```
design-system/
├── astro.config.mjs         # MDX + astro-icon (Lucide) integrations
├── public/
│   ├── logo.svg             # Master wordmark
│   └── favicon.svg
└── src/
    ├── data/
    │   └── navigation.ts    # Sidebar nav — single source for all page links
    ├── styles/
    │   ├── tokens.css       # Design tokens (14 categories)
    │   └── global.css       # Reset + base type + focus ring + utilities
    ├── layouts/
    │   └── BaseLayout.astro # Shell: Header + Sidebar + <main> + Footer
    ├── components/          # Shared display components
    │   ├── PageHeader.astro     # eyebrow + H1 with italic accent + lede
    │   ├── Section.astro        # titled block inside a foundation page
    │   ├── ColorSwatch.astro    # single color swatch card
    │   ├── TokenTable.astro     # dense token-reference table
    │   ├── Callout.astro        # note/warning/accent inset box
    │   ├── DoDont.astro         # two-column Do / Don't card
    │   ├── Logo.astro           # inline-SVG wordmark (never <symbol>+<use>)
    │   ├── Header.astro         # sticky top header with logo + version pill
    │   ├── Sidebar.astro        # grouped navigation with active highlight
    │   └── Footer.astro         # contact footer with non-negotiable format
    └── pages/
        ├── index.astro          # landing page — hero + 12 foundation cards
        └── foundations/         # 12 brand-foundation pages
```

---

## Tech stack

- **[Astro 5](https://astro.build)** — static-first, zero-JS-by-default, file-based routing
- **[@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)** — MDX authoring support (reserved for future content pages)
- **[astro-icon](https://www.astroicon.dev/) + [Lucide](https://lucide.dev)** — the canonical icon family (never emoji, never mixed libraries)
- **TypeScript strict mode** — inherits `astro/tsconfigs/strict`
- **No CSS framework** — hand-authored scoped styles over CSS custom properties

---

## Core conventions

Before editing, read [src/pages/foundations/introduction.astro](src/pages/foundations/introduction.astro) and skim all 12 foundation pages. The brand is opinionated — the rules below are hard-earned, not stylistic preference.

- **Tokens, not raw values.** Never write `#C0FE71` in a stylesheet. Always `var(--color-brand-lime)`. Same for spacing, radii, shadows.
- **One lime moment per viewport.** Either the featured card *or* the CTA panel — never both dominant on the same screen.
- **Italic-accent headlines.** Every display H1 swaps 1–2 words to Instrument Serif italic in lime. It's the brand signature.
- **Lucide icons everywhere.** No emoji, no Feather/Phosphor/Heroicons. One stroke-icon family, set on a 38px lime tile with dark ink.
- **Luxury over density.** More pages beats crammed pages. Default card padding is 28–32px — it's generous on purpose.
- **Inline logo SVG.** Never `<symbol>` + `<use>` — it silently fails in PDF export.
- **Footer format is non-negotiable.** `MSI Shamim · Founder & CEO · incrementsinc.com · ceo@incrementsinc.com` — no comma after CEO, lime-dot separators, public `ceo@` email only.

Full conventions live at [/foundations/voice-content/](http://localhost:4321/foundations/voice-content/) in the dev server.

---

## Contributing

Tokens and components are a **public interface** — every downstream product, flyer, and email depends on them. Changes follow these rules:

- **Additions** — safe, ship anytime.
- **Value changes** — require visual-regression review across every consumer surface.
- **Renames** — deprecation window required; keep the old name as an alias for one minor version.
- **Removals** — never in a patch; always a minor bump with a migration note.

Open a discussion before opening a PR — breaking a foundation token ripples everywhere.

---

## Roadmap

- [x] **v0.1** — Brand Foundations (12 pages)
- [ ] **v0.2** — Component library (buttons, inputs, tables, nav, feedback, data display)
- [ ] **v0.3** — Patterns (forms, dashboards, auth, onboarding, error states)
- [ ] **v0.4** — Figma library + Code Connect mappings

---

## License

Proprietary · © Increments Inc. All rights reserved.

---

*Maintained by [MSI Shamim](mailto:ceo@incrementsinc.com). Last updated 2026-04-21.*
