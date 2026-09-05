# Performance Audit

Real numbers from `pnpm --filter @workspace/qualitracker-website run build` (Vite production build, this session), not estimates. Measured twice: before and after wiring Framer Motion into the homepage — the difference is itself a finding.

## Bundle size (single bundle, 8 routes)

| Asset | Before Framer Motion | After Framer Motion |
|---|---|---|
| JS | 378.16 KB / 117.17 KB gzip | **501.36 KB / 158.48 KB gzip** |
| CSS | 97.27 KB / 16.90 KB gzip | unchanged |
| HTML | 2.01 KB / 0.74 KB | unchanged |

Adding real motion cost **~41 KB gzip** and pushed the bundle past Vite's own 500 KB chunk-size warning threshold (Vite now prints this warning on every build). This is a direct, measured trade-off from the `13_MOTION_SYSTEM.md` fix: the site went from under-motioned to correctly using its installed animation library, at a real, now-quantified size cost.

## The concrete, cheap fix — now more urgent than before this pass

**Route-based code splitting.** `App.tsx` currently statically imports all 8 page components, so a visitor landing on `/waitlist` downloads the Docs sidebar, the RAG diagram, and all of Framer Motion before they need any of it. This was already recommended before the motion change; the motion change is exactly why it should move up the priority list (see `17_WEBSITE_IMPLEMENTATION_PLAN.md`, P1) rather than staying a nice-to-have. Converting to `React.lazy()` + `Suspense` per route (wouter supports this cleanly) is the fix — no new dependency required.

## Fonts

Confirmed and fixed this session: `index.html` was loading Inter via a direct Google Fonts `<link>` **and** `index.css` separately `@import`s all four brand families (Playfair Display, Poppins, Inter, Roboto Mono) — a duplicate request for Inter. Removed the redundant `<link>`; the `@import` in CSS is now the single source, with `preconnect` hints kept in `index.html` for it.

## Images

None — no photography/illustration exists in the current design (see the accessibility audit's "not applicable" note), so there's no image-loading cost to optimize yet. This will need real attention if/when the site ever adds photography.

## Core Web Vitals — now measured (real Lighthouse run, production build)

`vite preview`, not `vite dev` — the dev server gives misleading numbers (unminified, unbundled, plus a Replit-only runtime-error-modal script injected into `<head>` that also broke the charset audit in dev only). Numbers below are the production build via `pnpm --filter @workspace/qualitracker-website run build && run serve`.

| Page | Performance | LCP | FCP | CLS | TBT |
|---|---|---|---|---|---|
| Home (heaviest — Framer Motion, both diagrams) | 92/100 | 2.9s | 2.3s | 0 | 0ms |
| Waitlist (code-split, no motion/diagrams) | 97/100 | — | — | — | — |

CLS of 0 and TBT of 0ms are real, good results — confirms the motion system isn't causing layout shift or blocking the main thread. LCP at 2.9s is "needs improvement" territory (Lighthouse's "good" threshold is <2.5s), not failing.

**Two real, measured fixes applied this pass:**
1. **Font loading was render-blocking (~800ms).** The Google Fonts CSS was loaded via `@import` inside `index.css`, undiscoverable by the browser's preload scanner until that stylesheet itself was parsed. Moving it to a `<link>` in `index.html` didn't fix it alone (a plain `<link rel="stylesheet">` still blocks render) — the actual fix was the standard preload-then-swap pattern (`rel="preload" as="style"` with `onload` flipping it to `rel="stylesheet"`, plus a `<noscript>` fallback). Confirmed via re-run: LCP improved, render-blocking-insight now flags only the local CSS chunk (~154ms, unavoidable without critical-CSS inlining — not worth the fragility for that gain).
2. Confirmed via measurement, not left as a guess: **CSS bundle and route-splitting fixes from the earlier P1/P2 pass are real and holding** (97/100 on a non-home route validates the code-splitting claim directly, not just from build-output file sizes).

**Not fixed, real and quantified, lower priority**: `unused-javascript` — ~72KB wasted across the shared vendor chunk and the homepage chunk (~400ms estimated LCP savings). Diagnosing the exact culprit needs a bundle visualizer (e.g. `rollup-plugin-visualizer`), which wasn't added this pass — flagged for the implementation plan rather than guessed at.

## Not measured

- **Hydration cost** — this is a plain client-rendered Vite SPA (no SSR/hydration step at all), so this category doesn't apply the way it would to a Next.js site.
- **Third-party script cost** — none installed (no analytics yet, see `16_SEO_AUDIT.md`'s analytics note), so nothing to measure here today; this will need a fresh look the moment analytics is added.

## Recommendation

Don't add a performance-monitoring dependency yet — there's no traffic to monitor. The concrete next step, if squeezing more performance matters before then, is `rollup-plugin-visualizer` to find the specific unused-JS culprit — everything else measured here is now either fixed or a small, known, low-priority remainder.

## Shipped this pass (real, measured)

- **Route-based code splitting**: `App.tsx` now uses `React.lazy` per page. Build output confirms real per-route chunks (e.g. `waitlist-page` is 2.09 KB gzip on its own) instead of one 158 KB gzip bundle for every route regardless of what a visitor actually opens. The shared vendor chunk (React/wouter/react-query) is 104.59 KB gzip; the homepage chunk carries the Framer Motion/diagram weight (44.77 KB gzip) since that's genuinely where it's used.
- **Pruned ~47 unused shadcn/ui component files** (confirmed unreachable from any route via a full import-graph check, not assumed) — **CSS bundle dropped from 97.27 KB to 32.70 KB raw (16.90 KB → 7.33 KB gzip)**. Tailwind was generating utility classes for markup in components nothing ever rendered.
