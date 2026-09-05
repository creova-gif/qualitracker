# QualiTracker Website — Master Plan

Status: **Phase 1–8 (documentation) complete. Implementation not started — awaiting sign-off.**

## The mission, precisely

> OUR BRAND + GRAPHIFY-LEVEL DIGITAL EXPERIENCE, not GRAPHIFY'S BRAND + OUR CONTENT.

Take the real QualiTracker brand system and raise the *website's* craft, storytelling and interactivity to the standard Graphify demonstrates — without adopting Graphify's visual identity, dark palette, or subject matter. The two inputs to every decision below are:

1. **The brand** — `qualitracker-io`, the Claude Design system at `claude.ai/design/p/d0356225-4765-462a-9902-0f998d35a197`. This is locked. See [02_BRAND_SOURCE_OF_TRUTH.md](02_BRAND_SOURCE_OF_TRUTH.md).
2. **The experience bar** — graphify.com, studied directly (browsed live, not assumed). See [03_GRAPHIFY_EXPERIENCE_ANALYSIS.md](03_GRAPHIFY_EXPERIENCE_ANALYSIS.md).

## How we got here (worth recording — it changed the plan)

The initial ask described a dark, node-graph, WebGL-heavy "infrastructure company" aesthetic modeled on Graphify. Before writing anything, the audit turned up **three different, conflicting prior brand directions** for QualiTracker:

1. The **live coded site** (`artifacts/qualitracker-website`) — a real, working React/Tailwind site with a warm green/cream/terracotta palette (`#17483f` / `#f7f4ed` / `#e7774d`) and Bricolage Grotesque/Plus Jakarta Sans/DM Mono type. Coherent and well-crafted, but **does not match the official brand system** — see the audit.
2. An **abandoned Framer plan** (`~/dev/qualitracker-web/docs/`) — an earlier, approximate read of the brand (Deep Teal `#0B6E5F` vs. the real `#025561`), a 5-page IA, and a full copy draft (`reference/qualitracker-website-copy-v2.md`) with real metrics, a real comparison matrix, and real team bios. Never built. Its copy and numbers are valuable; its color values are superseded.
3. **The actual brand system** — a comprehensive Claude Design project (`qualitracker-io`) with generated tokens, 19 components, and full brand guidelines, extracted from the real QualiTracker Figma brand kit. This is the one the user confirmed as authoritative: *"This design represents OUR BRAND. Do not replace it."*

Resolution (confirmed by the user):
- **Brand direction**: evolve the real brand system (③) — do not import Graphify's dark aesthetic, do not keep the live site's off-brand palette.
- **Content**: mine the abandoned Framer copy doc (②) for real metrics, comparisons, and structure — every number gets flagged for the user's verification before it ships (see the audit's open-verification list).
- **Pacing**: documentation and creative direction first (this batch), implementation only after sign-off.

## Document index

| # | Doc | Purpose |
|---|---|---|
| 00 | This file | Plan, decisions, status |
| 01 | [`01_EXISTING_BRAND_AUDIT.md`](01_EXISTING_BRAND_AUDIT.md) | What exists today, against the real brand — keep/improve/rewrite/remove |
| 02 | [`02_BRAND_SOURCE_OF_TRUTH.md`](02_BRAND_SOURCE_OF_TRUTH.md) | Locked / evolvable / missing, extracted from the Claude Design system |
| 03 | [`03_GRAPHIFY_EXPERIENCE_ANALYSIS.md`](03_GRAPHIFY_EXPERIENCE_ANALYSIS.md) | What Graphify actually does, principle by principle, and how it translates |
| 04 | [`04_CREATIVE_DIRECTIONS.md`](04_CREATIVE_DIRECTIONS.md) | Three directions, evaluated, one recommended synthesis |
| 05 | [`05_INFORMATION_ARCHITECTURE.md`](05_INFORMATION_ARCHITECTURE.md) | Site map, nav, depth model |
| 06 | [`06_HOMEPAGE_STORY.md`](06_HOMEPAGE_STORY.md) | The homepage as a chaptered narrative |
| 07 | [`07_DESIGN_SYSTEM.md`](07_DESIGN_SYSTEM.md) | Web-ready tokens, motion, component mapping to the live Vite/Tailwind stack |

Not written in this pass (deferred to the implementation phase, where they're cheaper to get right against real code): `08_INTERACTION_SYSTEM`, `09_MOTION_SYSTEM` detail beyond what's in 07, `10_TECHNOLOGY_VISUALIZATION` component spec, `11_RESPONSIVE_SYSTEM`, `12_ACCESSIBILITY`, `13_PERFORMANCE`, `14_CONTENT_STRATEGY` (full page copy), `15_FINAL_QA`.

## Before implementation starts, four things need your sign-off

1. **Direction choice** — pick one of the three in `04_CREATIVE_DIRECTIONS.md` (or a named combination).
2. **Number verification** — the audit lists every metric/name pulled from the old Framer copy doc that must be confirmed still true (pricing, the NPHL Tanzania reference, team roster, the $220/13–31x/90%/R²=0.81 figures) before any of it appears live.
3. **IA sign-off** — single-page (current) vs. multi-page (`05_INFORMATION_ARCHITECTURE.md` proposes both, recommends one).
4. **Scope for v1** — the master prompt describes a large signature-interaction build (technology graph, architecture explorer, etc.). `06_HOMEPAGE_STORY.md` recommends which one to build first versus defer.
