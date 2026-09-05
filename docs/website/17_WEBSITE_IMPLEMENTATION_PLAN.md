# Website Implementation Plan

Synthesized from `10_WEBSITE_AUDIT.md`, `12_SKILL_GAP_ANALYSIS.md`, `13_MOTION_SYSTEM.md`, `14`–`16` (accessibility/performance/SEO). P0 items marked **shipped** were completed and verified during this audit pass, not deferred.

## P0 — Critical (done or blocking)

| Item | Status |
|---|---|
| Fix the two failing-contrast text labels (gold-on-light, 9px, ~3.66:1) | **Shipped** — verified computation, fixed in `ask-qualitracker-demo.tsx` |
| Replace off-brand favicon with the real QT mark | **Shipped** |
| Update sitemap to cover all 8 routes | **Shipped** |
| Per-route `<title>`/description (`useDocumentMeta`) | **Shipped**, verified in-browser |
| Remove duplicate Inter font request | **Shipped** |
| Convert homepage scroll reveals from mount-time CSS to real `whileInView` (Framer Motion) | **Shipped**, verified sections reveal correctly on scroll |
| Fix render-blocking font loading (~800ms, found by Lighthouse) | **Shipped** — preload-then-activate pattern in `index.html`; verified via before/after Lighthouse runs. |
| Fix `maximum-scale=1` blocking pinch-zoom (found by Lighthouse) | **Shipped** |
| Resolve canonical domain (`qualitracker.org` vs `qualitracker.co`) | **Open — needs the user's decision**, not a code fix |
| Run the actual `db push` migration for the new lead kinds/columns | **Open — needs a real `DATABASE_URL`**, not run without knowing the target DB |

## P1 — Important

| Item | Status |
|---|---|
| Route-based code splitting (`React.lazy` per page) | **Shipped** — verified: non-home routes now ship without Framer Motion/RAG-diagram/widget code; `/waitlist` no longer pulls in the homepage's chunk. Build output confirms per-route chunks. |
| Add ESLint | **Shipped** — flat config (`eslint.config.js`) scoped to hand-written website source (excludes generated code/build scripts on purpose). `pnpm run lint` clean except one pre-existing warning in unmodified shadcn scaffold code. |
| Add a minimal test setup | **Shipped** — Vitest + Testing Library. 9 page smoke tests (render without throwing, nav present) + 2 behavioural tests on the waitlist form (success and failure paths, the same failure path verified manually earlier). All 11 pass. |
| Vary the repeated card-grid pattern | **Shipped** — the "Reality" section's 4 identical cards became a numbered, staggered sequence (top-rule accent, no card chrome) — visually distinct from the capability-list rows and the pricing-card-shaped `qt-card` used elsewhere. |
| Verify remaining blocked content | **Open — needs you**, not code. Team roster resolved; pricing removed; NPHL Tanzania naming, the R²=0.81 citation, and cost/time-savings figures remain correctly unused. |
| Real Lighthouse/axe pass | **Shipped** — real run against the production build. Caught and fixed 2 real contrast bugs (opacity-dimming in the RAG pipeline and quality graph) plus a pinch-zoom-blocking viewport meta and an ~800ms render-blocking font-loading bug. Final: 100/100 accessibility, 100/100 best practices, 100/100 SEO, 92-97/100 performance depending on route. See `10_WEBSITE_AUDIT.md`'s second rescore, `14_ACCESSIBILITY_AUDIT.md`, `15_PERFORMANCE_AUDIT.md`. |

## P2 — Enhancement

| Item | Status |
|---|---|
| Staggered reveals on card grids | **Shipped** — the Reality sequence uses Framer Motion `staggerChildren` (0.1s), reduced-motion-aware. |
| Wire `.qt-thinking` onto a real state | **Shipped** — the Ask QualiTracker demo now has a genuine ~450ms "Checking your lab's records…" thinking beat with the pulsing ring when switching questions, instead of an instant swap. |
| Non-colour indicator on the accreditation widget | **Shipped** — a small warning icon now appears next to any category under 70%, alongside the existing gold/teal colour coding. |
| Prune unused shadcn/ui primitives | **Shipped** — removed ~47 unused files from `components/ui/` and the unused `use-mobile` hook; kept only `toast`/`toaster`/`tooltip` (the only ones actually reachable from `App.tsx`). **Real, measured result: CSS bundle dropped from 97 KB to 32 KB raw (17 KB → 7.3 KB gzip)** — Tailwind was generating utility classes for all the dead components' markup. |
| Structured data (schema.org) | **Open** — once Security/Docs have stable, real content worth marking up. |
| Bundle-visualizer pass for the ~72KB unused-JS Lighthouse found | **Open** — real, measured (~400ms est. LCP impact on home), but the exact culprit needs `rollup-plugin-visualizer` to pinpoint rather than guessed at. |
| Static-chain → connected graph for `/product`'s technical visualization | **Shipped** — `QualityIntelligenceGraph` (10 nodes, 11 edges, hover-to-highlight) replaced the old linear `quality-knowledge-graph.tsx` chain, using only entities already established elsewhere on the site (no new fabricated concepts). |

## P3 — Experimental / deferred pending real input

- The "Under the Hood" architecture explorer (deferred since `04_CREATIVE_DIRECTIONS.md` — needs real architecture input from engineering, not something to invent).
- Full `/docs` content (MCP reference, API reference, Security, Compliance) and the four `/solutions` segment pages — deliberately scaffolded, not written, per `08_PIVOT_ADDENDUM.md`.
- SSR/prerendering for true per-route SEO metadata (`16_SEO_AUDIT.md`) — a real architectural change, not a quick win.

## Wave 2 — real-repo-grounded homepage expansion (this pass)

Triggered by inspecting two real repos (`thestartupgroup7/qmswebsite`, `thestartupgroup7/qualitrackerchatbot` — both private) directly, plus the Figma brand file (confirmed to contain only the cover/logo page, no dashboard designs).

| Item | Status |
|---|---|
| Hero typography pushed toward the brand kit's upper range | **Shipped** — `clamp(2.4rem,5.2vw,3.75rem)` → `clamp(3rem,7vw,6rem)` |
| Quality Command Center (real dashboard shape: lab/dept/role/user stats) | **Shipped** — grounded in the actual `templates/dashboard.html` |
| Quality Intelligence Graph promoted to the homepage, with its own section | **Shipped** — same component now shared between Home and `/product#quality-intelligence` |
| Document lifecycle timeline (real `STATUS_CHOICES`: Draft → Pending Collaboration → Under Review → Under Approval → Approved/Rejected) | **Shipped** |
| CAPA/non-conformance lifecycle timeline (real, two-independent-reviewer states, not the brief's simplified example) | **Shipped** |
| Security page rewritten with real, verified content (per-tenant vector isolation, Presidio PII redaction with Tanzanian recognizers, self-hosted Ollama inference, confidence-gated retrieval) | **Shipped** |
| QualiBOT demo corrected: dropped an unverifiable "High confidence" label (the real system gates retrieval by score internally but doesn't expose a labeled confidence tier in what I could verify) | **Shipped** |
| Homepage grew from 7 to 11 distinct sections, each with its own visual grammar (editorial hero, numbered sequence, dashboard canvas, connected graph, two-tone cards, two lifecycle timelines, chat demo, scroll pipeline, vision-distinction cards, CTA) | **Shipped**, verified via `get_page_text` (correct order, no console errors) and a fresh Lighthouse run |
| Lighthouse re-run after the expansion | **Shipped** — 100/100/100 accessibility/best-practices/SEO held; performance 87/100 (down from 92, real and honest trade-off — see `15_PERFORMANCE_AUDIT.md`) |
| A real, contrast-failing bug caught before shipping (gold text/gold-fill-with-white-text in the new lifecycle timeline) | **Caught and fixed pre-ship**, not left for the next Lighthouse run to find |
| GitHub repo links on the site | **Blocked — both repos are private.** Linking to a private repo publicly shows visitors a 404, which is worse than no link. Needs your decision (make one/both public, or don't link). |

## Wave 3 — performance fix + technical UI language foundation

Triggered by (a) "why is performance 87?" and (b) a full "TECHNICAL UI LANGUAGE" brief modeled on Graphify's typography/terminal-block/traceability language, adapted to QualiTracker's own brand and real product concepts — not copied.

| Item | Status |
|---|---|
| Bundle-visualizer pass on the ~72KB unused-JS finding | **Shipped** — pinpointed `<Toaster/>`/`<TooltipProvider/>` (wired in `App.tsx` but never called anywhere — confirmed by grep) as ~35-45KB gzip of dead Radix/floating-ui code in the vendor chunk. |
| Remove dead Toaster/TooltipProvider wiring + 4 orphaned shadcn files | **Shipped** — vendor chunk 104.6KB → 70.2KB gzip. Lighthouse performance **87 → 96**, LCP 3.7s → 2.5s. Accessibility/Best Practices/SEO held at 100/100/100. All 11 tests still pass. |
| Fixed a real bug: `.qt-eyebrow`'s mono font declaration was silently overridden by a duplicate `font-family: 'Inter'` line right below it — eyebrows were rendering in Inter, not Roboto Mono, this whole time | **Shipped** |
| Technical typography layer (`.qt-technical-eyebrow/-label/-value/-timestamp/-id`, status-dot variants, restrained arrow-nudge utility) added to `index.css` | **Shipped** — uses Roboto Mono, already the brand kit's designated technical typeface; no new font introduced. |
| `TechnicalBlock` component family (`src/components/site/technical-block.tsx`): `TechnicalRecordBlock` (label/value metadata), `TraceBlock` (directional entity path), `NarrativeBlock` (query/response prose), `StatusIndicator` | **Shipped** |
| QualiBOT demo restyled with a real `QUALIBOT / RESPONSE` technical record block | **Shipped** — shows `RETRIEVAL: ABOVE/BELOW THRESHOLD` and `STATUS`/`HUMAN REVIEW`, never an invented confidence percentage (the real system only exposes a threshold gate, not a labeled score) — verified in-browser for both demo states. |
| Traceability path on `/product`, bidirectionally wired to `QualityIntelligenceGraph` (hover either one, the other highlights) | **Shipped** — reuses the graph's own 9 real entities at the same abstraction level (no invented instance IDs like "SOP-014"); verified via dispatched `mouseover`/`mouseout` events in both directions, plus a mobile-width layout check (grid collapses to one column, no horizontal overflow). |
| Repo-history check for a real "Recently Shipped"/changelog | **Checked — thin.** `qmswebsite`: 2 real annotated tags (`v1.0-pilot` 2026-07-09, `v1.1-pilot` 2026-07-11), both ops/security housekeeping, not features. `qualitrackerchatbot`: 0 tags/releases, 8 real dated commits (Aug 20 + Aug 25, 2026) framed as engineering phases, not customer-facing announcements. **Deferred** — building a polished changelog widget from this would mean editorializing internal ops work as "shipped features," which needs your call, not a guess. |
| Typography-scale push, buttons/tabs redesign, IDE-style product explorer, dark technical surfaces, `/changelog` page, design-token formalization beyond CSS utilities | **Not started this wave** — the brief is ~30 sub-requirements; this wave covers the reusable foundation + two real applications of it, not the full scope. |

## Wave 4 — hero typography push, button/tab micro-interactions

Triggered by "fill the gaps" after an honest creativity comparison against the old pre-rebuild site named two concrete gaps: hero type scale, and buttons/tabs.

| Item | Status |
|---|---|
| Homepage hero restructured to a full-width headline row (was sharing a 2-col grid with the widget, capping its size) and pushed to `clamp(3.5rem,9vw,8rem)` (was `clamp(3rem,7vw,6rem)`) | **Shipped** — verified in-browser, genuinely commands the viewport now. |
| Secondary-page H1s (`/product`, `/company`, `/solutions`, `/security`) bumped to `clamp(2.25rem,5vw,3.75rem)` (was `clamp(2rem,4.2vw,3rem)`) | **Shipped** |
| `Button` component: new `arrow` prop (`"arrow"` / `"external"`) — a 3px translate-only nudge on hover/focus, the one motion the brand allows | **Shipped** — applied to 3 genuinely exploratory/navigational links only ("Explore the full system", "Read the docs", "Back to home"); left off primary conversion CTAs (waitlist/talk-to-team) on purpose. Verified via a real `computer.hover` (synthetic JS mouseover doesn't trigger CSS `:hover` — confirmed the distinction while testing). |
| `SegmentedControl` component — an engineered-control tab switcher (mono uppercase labels, filled active segment, hairline track) | **Shipped**, applied to the QualiBOT demo's "Try the other state" toggle (previously ad-hoc pill buttons) — a real 2-state switch, not new fabricated tab panels. |
| Lighthouse re-run after the hero/typography changes | **Shipped** — performance 96 → 90 (LCP 2.5s → 3.4s; FCP unchanged at 2.1s, CLS 0, TBT 0ms) — a real, disclosed trade-off: the much larger hero heading takes longer to reach its final painted state. Accessibility/Best Practices/SEO held at 100/100/100. |
| Atmospheric/textured background (noise, gradient rings) to match the old site's decorative richness | **Deliberately not done** — the real brand kit specifies flat colour fields and hairline borders only; this gap stays closed on purpose, not by oversight. |

## Wave 5 — IDE-style explorer frame, evidence/trace enrichment, real bugs caught

Triggered by "finish what is left" against the technical-UI-language brief's remaining open items.

| Item | Status |
|---|---|
| `ExplorerFrame` component (dark technical-surface chrome bar: title + live status, body, optional footer) | **Shipped** — matches the brief's §19 IDE-inspector mockup structure closely, wrapping the *existing* real Quality Intelligence Graph + Traceability Path (no new fabricated content) on `/product`. |
| QualiBOT response block enriched with a `TRACE` field (`AUDIT → FINDING → CAPA`) | **Shipped** — reuses the same real entity vocabulary already established in the graph, not new concepts. |
| Real Lighthouse-caught bug: `TraceBlock`'s relation labels (`↓ REQUIRES` etc.) reintroduced the exact opacity-dimmed-text contrast anti-pattern already banned earlier this project | **Caught and fixed** — dropped the `opacity: 0.7`, full-contrast text now (3.03:1 → passes). |
| Real Lighthouse-caught bug: `StatusIndicator`'s label color (body-grey) fails contrast on the new dark-navy `ExplorerFrame` header | **Caught and fixed** — added a `light` variant (mint-light text, light-teal dot instead of deep-teal, which would've been nearly invisible on navy — gold was deliberately not used, reserved for hero/CTA only). |
| Real bug (non-score-affecting, `label-content-name-mismatch`, weight 0/hidden group — still a genuine screen-reader defect): the graph's "Risk" node had a redundant `aria-label="Risk (planned)"` not matching its own visible "Risk" + "PLANNED" text nodes | **Caught and fixed** — removed the redundant aria-label entirely across all graph nodes, letting the accessible name derive from visible content (guarantees no future mismatch). |
| Lighthouse re-verification | **Shipped** — `/product`: 98/100/100/100. `/`: 95/100/100/100. |
| `/changelog` + "Recently Shipped" | **Still blocked on your call** — the repo-history check (Wave 3) found real but ops-flavored history, not customer-facing features; building the UI now would mean editorializing that framing, which needs your decision, not a guess. |
| GitHub repo links | **Still blocked** — both `qmswebsite` and `qualitrackerchatbot` remain private; needs your decision (make one/both public, or don't link). |
| Design-token formalization as a separate system beyond CSS utilities (brief §28) | **Not done separately** — judged as already satisfied in substance by the existing `qt-*` CSS custom-property/utility convention and PascalCase component naming; a parallel token-naming layer on top would be process for its own sake, not a real gap. |

## Wave 6 — Quality Intelligence Graph, made genuinely top-tier

Triggered by "the qualitracker interactive model about quality intelligence should be creative (top-tier)" — the graph itself (not just its new ExplorerFrame chrome) was still a flat diagram: straight lines, plain dots, no sense of direction.

| Item | Status |
|---|---|
| Curved (quadratic-bezier) edges with real arrowhead markers, replacing straight `<line>`s | **Shipped** — makes the graph's already-real direction (Standard *requires* Document, never the reverse) visible for the first time; previously every edge looked symmetric even though the relationship never was. |
| Icon-badge nodes (lucide icons matching each real concept: shield/standard, file/document, workflow/process, etc.) replacing plain filled dots | **Shipped** — verified the icon nesting inside the parent SVG canvas actually renders correctly (was the one real technical risk in this change). |
| Active-node halo ring + an animated flow-pulse traveling along that node's real outgoing edges | **Shipped** — respects `useReducedMotion()` (same hook already used elsewhere on the site); verified the pulse genuinely animates (`cx` sampled twice, confirmed moving) and is fully gated off, not just visually paused, when motion is reduced. |
| Verification | Typecheck/lint/11 tests pass. Visually confirmed in-browser (hover halo + directional highlight + updated detail text). Mobile width: no horizontal overflow. Lighthouse: `/product` 95/100/100/100, `/` 94/100/100/100 — a small, real, disclosed cost (the graph chunk grew from added icons) for a substantially more polished visualization. |

## What this plan deliberately does not include

No GSAP, no WebGL/3D, no new animation library, no CMS, no design-token pipeline change — see `12_SKILL_GAP_ANALYSIS.md` for why each was considered and set aside.
