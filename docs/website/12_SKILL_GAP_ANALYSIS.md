# Skill & Tooling Gap Analysis

Honest classification of the candidate tools named in the brief, plus what's actually available in this environment, against what the QualiTracker site genuinely needs — not an install-everything list. Categories (A–G) per the brief's own scheme:

- **A** — Already installed + required (keep)
- **B** — Already installed + redundant (explain why)
- **C** — Missing + high value (recommend)
- **D** — Missing + optional (document, don't auto-install)
- **E** — Incompatible
- **F** — Security/maintenance concern
- **G** — Not relevant

## Named tools from the brief

| Tool | Class | Reason |
|---|---|---|
| **Framer Motion** | **A** | Already a `package.json` dependency, currently unused (see `10_WEBSITE_AUDIT.md`'s motion score). It's the correct tool for everything the current motion gap needs — scroll-triggered reveals, staggered lists, `whileHover`/`whileTap`, layout transitions, `prefers-reduced-motion` handling via `useReducedMotion()`. No new dependency required to fix the site's biggest weakness. |
| **shadcn/ui primitives** (`src/components/ui/*`) | **B** | Already installed. Now largely redundant: the actual pages use hand-rolled brand components (`Button`, `SectionHeader`, form fields) built directly against the real brand tokens, because the brand kit's own component specs (44px controls, specific hover colours, gold-only-in-two-places) don't map cleanly onto shadcn's default variants. The shadcn primitives aren't broken, they're just unused by anything currently in the site — worth a prune pass later so the bundle and mental model don't carry dead weight, not urgent. |
| **Lucide** (`lucide-react`) | **A** | Already installed and used throughout; also the brand kit's own documented icon substitute (see `02_BRAND_SOURCE_OF_TRUTH.md`, Missing → icon set). Correct, keep. |
| **GSAP / GSAP MCP** | **G** | Not present in this environment, and not justified by the work: nothing on the site needs scroll-scrubbed timelines, pinned sections, or complex sequencing beyond what Framer Motion's `whileInView`/`useScroll` already covers. Graphify's own confirmed stack (see `11_REFERENCE_ANALYSIS_GRAPHIFY_ADDENDUM.md`) has no GSAP signal either — the reference itself doesn't need it. Revisit only if a future signature interaction (e.g. the deferred "Under the Hood" architecture explorer) turns out to need real scroll-scrubbing Framer Motion can't do cleanly. |
| **Anime.js** | **G** | Same reasoning as GSAP — a second animation engine alongside an installed, sufficient one (Framer Motion) is pure redundancy, not capability. |
| **Canvas / WebGL / Three.js** | **G** | No 3D or particle-system need exists anywhere in the approved creative direction (`04_CREATIVE_DIRECTIONS.md`, Direction B) — and per `03`'s corrected analysis, Graphify itself doesn't use any either. Would be pure dependency weight and a performance risk for zero storytelling gain on this product. |
| **21st.dev / Magic MCP** | **D** | Available as a set of skills (`21st-ui-build`, `21st-ui-explore`, `21st-ui-review`) but not installed as a project dependency. Genuinely useful for fast component *exploration* when a direction is undecided — not needed here, since the real brand system (tokens, 19 components, guidelines) already exists and is the actual source of truth. Worth remembering for a future greenfield surface that doesn't have that. |
| **Figma MCP / Figma Context MCP** | **G** for this project | Two Figma MCP server connections are available in this session, but the QualiTracker brand's actual Figma file (`Qualitracker-BI.fig`, referenced by path in this conversation) isn't reachable through them — it's a local file, not a Figma cloud file these MCP tools query by URL/key. It's also unnecessary: the real brand system was already extracted from that same Figma file into the `qualitracker-io` Claude Design project (`DesignSync`), which *is* directly readable and was the actual source for every token, colour, and component spec used to build v1. Opening the raw `.fig` would be re-deriving what's already been faithfully extracted. |
| **open-design MCP** | **F** | Listed as a configured server but fails to connect in this environment (`ENOENT` — a missing local app bundle path). Not usable as configured; flag for the user to fix or remove the config rather than something to route around silently. |
| **DesignSync (Claude Design)** | **A** | The tool that actually mattered this session — it's how the real brand tokens, components, and guidelines were pulled in. Already used, already required. |
| **Claude_Browser (browser automation/visual QA)** | **A** | Used throughout this session for real in-browser verification (desktop + mobile, form submission, contrast computation via inspection, per-route title checks) — this *is* the "browser testing" and "visual QA" capability the brief asks about in sections 25–26. No separate visual-regression tool (Percy/Chromatic) is installed or needed yet at this project's scale; revisit if the team wants automated screenshot diffing in CI. |
| **react-hook-form / @tanstack/react-query** | **B** | Both installed, both unused — the two lead-capture forms use plain controlled inputs + manual `fetch`, which is fine at this scale (two simple forms, no complex validation schemas, no server-state caching need yet). Not a problem to leave as-is; don't add `react-hook-form` wiring just because it's installed if the plain approach is already correct and simpler. |
| **Higgsfield / generative image-video tooling** | **G** | No photography or illustration exists in the real brand kit by design (flat colour + type + data graphics only, per `02_BRAND_SOURCE_OF_TRUTH.md`) — generating imagery would contradict the locked brand system, not extend it. |
| **Testing tooling (Vitest/Playwright, etc.)** | **C** | Genuinely missing and genuinely high value: no test runner exists despite `data-testid` attributes suggesting one was planned. Two concrete, cheap wins: a Vitest smoke test per route (renders without throwing) and a Playwright check of the two lead-capture forms' validation/error states. Not installed automatically here — this is a real dependency addition and belongs in the implementation plan, not silently added mid-audit. |
| **ESLint** | **C** | Missing entirely — no lint script anywhere in the repo, despite `prettier` being present as a devDependency. Cheap, high-value, standard addition; same reasoning as testing tooling — flagged for the plan, not auto-installed. |

## What this analysis is *not* recommending

No new animation library, no 3D/WebGL, no CMS, no design-token pipeline replacement, no component-library swap. The single actionable tooling gap that's both missing-in-effect and already-paid-for is **using the Framer Motion that's already installed** — everything else genuinely optional or genuinely not needed stays that way.
