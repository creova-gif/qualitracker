# Graphify Comparison — Post-Implementation Audit

Fresh browse of `graphify.com` (current, live) against the current built state of `qualitracker-website` after Waves 1–6 (brand rebuild, homepage expansion, technical UI language, hero/button/tab work, the Quality Intelligence Graph upgrade, and the centering fix). Supersedes `03_GRAPHIFY_EXPERIENCE_ANALYSIS.md` and `11_REFERENCE_ANALYSIS_GRAPHIFY_ADDENDUM.md` as the current read — those were written before most of the implementation existed.

Scored honestly, per standing instruction: a 7/10 is written as a 7/10, with what's missing named plainly.

## The one distinction that matters most

Graphify's credibility apparatus and QualiTracker's are not the same *kind* of thing, and no amount of design work closes that gap — only time and real usage can:

| | Graphify | QualiTracker |
|---|---|---|
| Usage proof | 115,039 real GitHub stars, live-updating ("4,961 to go → 120,000"), 6.3M+ PyPI downloads | None exist yet — pre-launch |
| Testimonials | Real named people at real companies (Rootly AI Labs, MemVerge), each linked to public proof | None — would be fabrication to invent one |
| Press coverage | 26 real linked articles/videos across named publications, all earned, unprompted | None — pre-launch, no press yet |
| Release history | Real dated semantic versions (`v0.9.54`, Sep 5 2026) shown as "Recently Shipped" | Checked (Wave 3): 2 real tags + 8 real commits exist, but they're ops-flavored, not customer-facing features — publishing them as "Recently Shipped" would be editorializing, not reporting |
| Benchmark claim | A real, citable SWE-bench-style number | None exists to cite |

This is a maturity gap, not a creativity gap. Every one of these devices is *exactly* what QualiTracker's own no-fabrication rule would block if attempted early. The honest move — already made across this project — is to omit them, not counterfeit them.

## Where the comparison is actually apples-to-apples

### 1. Typography and hero
**Graphify:** Centered hero (not left-aligned, correcting an earlier assumption in `03_...md`), large bold sans headline with one color-highlighted word ("reason **over**"), a `GRAPH MEMORY · GROUNDED ANSWERS` eyebrow with colored status dots, a persistent top announcement bar (`New · v0.9.54 is out →`).
**QualiTracker:** Left-aligned hero, now `clamp(3.5rem,9vw,8rem)` (Wave 4 — was `clamp(3rem,7vw,6rem)`), genuinely commands the viewport at desktop width. No announcement bar (nothing shippable to announce yet — see release-history finding above).
**Score: 8/10.** The type scale now competes. The gap left is structural (announcement bar, a highlighted-word device in the headline) more than scale.

### 2. Background treatment
**Graphify:** A deliberately subtle textured background — faint mathematical symbols (∂, √, ±) scattered on a dark forest-green field, plus a real cream/off-white section further down.
**QualiTracker:** Flat colour fields only, hairline borders, zero texture — this is a direct requirement from the real brand kit (`07_DESIGN_SYSTEM.md`), not an oversight.
**Score: intentionally not competing.** Matching this would mean breaking brand for a surface effect. Left as-is on purpose (documented in Wave 4).

### 3. Technical/monospace language
**Graphify:** Tags its *own marketing claims* with `[EXTRACTED]` / `[INFERRED]` — the same confidence vocabulary its product uses internally, applied to the stats row, the adopter logos, the testimonial. This is the single most sophisticated device on their site: the marketing page dogfoods the product's own epistemics.
**QualiTracker:** Built an equivalent vocabulary (Waves 3–5: `RETRIEVAL / ABOVE THRESHOLD`, `TRACE / AUDIT → FINDING → CAPA`, `STATUS / IN DEVELOPMENT`) and applied it to the QualiBOT demo, the traceability path, and the Quality Intelligence Graph's `ExplorerFrame`.
**Score: 8/10.** The mechanism is equally real and equally rigorous. What Graphify has that we don't: applying the tag to *marketing stats themselves* (their GitHub star count literally says how it knows). We have no equivalent stats to tag yet — not a design gap, a content gap (see above).

### 4. Interactive visualization
**Graphify:** A real, live, clickable graph of an actual open-source repo (FastAPI) — genuine data, community-detection coloring, a "god node" legend, click-to-inspect.
**QualiTracker:** The Quality Intelligence Graph (Wave 6) — curved directional edges with real arrowheads, icon-badge nodes, an active-node halo, and an animated flow-pulse along real outgoing edges — but it visualizes the *product's own conceptual schema*, not live customer data (correctly so: this is B2B lab software, the live version of this graph is private customer data behind a login, not something to expose on a marketing site).
**Score: 7/10.** Meaningfully upgraded this wave and no longer a static diagram, but Graphify's version demonstrates the tool on *real, external, verifiable data* — ours necessarily can't, and this is close to a ceiling on the honest side of the line, not a gap to keep closing by adding more animation.

### 5. Comparison table device
**Graphify:** "Graph vs. Vector DB/RAG vs. Grep," five real rows, no fabricated categories.
**QualiTracker:** No equivalent exists yet. A real, honest one is buildable — e.g. "QualiTracker vs. shared drive vs. generic enterprise QMS" across Traceability / Standards-alignment / AI grounding / Cost-to-start — using only claims already established elsewhere on the site.
**Score: 0/10 — genuine, closeable gap.** Not started. Recommend for the next wave.

### 6. Buttons, tabs, micro-interactions
**Graphify:** Compact pill "Get started," bordered secondary actions, a live floating "Ask Graphify" chat launcher (a *real* deployed assistant on the marketing site itself, not a scripted demo).
**QualiTracker:** Button `arrow` prop (Wave 4) applied to 3 genuinely exploratory links; `SegmentedControl` replacing ad-hoc pill toggles.
**Score: 7/10.** Button-level polish is comparable. The floating live-chat widget is a real capability gap, not a styling one — QualiBOT isn't deployed on the marketing site itself (would need real infrastructure, not a design pass).

### 7. Accuracy / accessibility / performance (verifiable, not aesthetic)
**QualiTracker (Lighthouse, production build, just re-run):** Home 95/100/100/100, `/product` 95/100/100/100 (performance/accessibility/best-practices/SEO). Graphify wasn't independently re-audited here (it's not our build to Lighthouse-test meaningfully against our own performance rules), but nothing on it suggested equivalent rigor was applied *and disclosed* — QualiTracker's own audits are all in this docs folder, dated, with every regression named rather than hidden (e.g. Wave 2's 92→87, Wave 4's 96→90).
**Score: this is a real point of pride, not a gap.**

## Score summary

| Dimension | Score | Gap type |
|---|---|---|
| Hero typography | 8/10 | Mostly closed |
| Background/texture | N/A | Deliberately not pursued (brand constraint) |
| Technical/confidence language | 8/10 | Mechanism equal; content (real stats) doesn't exist yet |
| Interactive visualization | 7/10 | Near ceiling given real-data constraint |
| Comparison table | 0/10 | **Open, closeable — recommended next** |
| Buttons/tabs | 7/10 | Live-chat widget is infra, not design |
| Usage proof / testimonials / press / releases | N/A | Maturity gap — closes with time, not effort |
| A11y / performance rigor | Ahead, disclosed | Not a gap |

## Recommended next, if continuing

1. **A real comparison table** (QualiTracker vs. shared-drive vs. generic QMS) — the one concretely open, zero-fabrication-risk gap left on this list.
2. **A lightweight announcement-bar pattern**, held in reserve until there's a real "shipped" thing to announce (ties to the still-blocked changelog decision from Wave 3/5).
3. Everything else on this list is either already competitive or correctly not being chased because chasing it would mean fabricating.

## Wave 7 — pushed toward "10/10," honestly

User asked to push every score to 10/10. Flagged plainly before starting: usage stats, testimonials, press, and real release history are capped by evidence, not effort — closing those with anything but real time/usage would be exactly the fabrication this project has refused throughout. Pushed everything else as far as it honestly goes:

| Item | Status |
|---|---|
| Comparison table (item 1 above) | **Shipped** — `ComparisonTable` component, 5 rows, added to the homepage right after "The reality" section. Modeled on Graphify's own "Graph vs Vector DB vs Grep" structure: generic approaches (shared drive/paper, generic QMS software), never a named competitor. Every QualiTracker cell restates a fact already established elsewhere on the site; every generic-QMS cell is hedged ("varies by vendor") rather than asserting anything unverified about a competitor category. |
| Hero color-highlighted word | **Shipped** — "works" in Quality Gold within the hero headline, matching Graphify's device ("reason **over**"). On-brand: gold in the hero is one of the two contexts the brand kit allows it. |
| Verification | Typecheck/lint/11 tests pass. Visually confirmed in-browser; mobile width has no page-level overflow (the table scrolls within its own container). Lighthouse: 90/100/100/100 (was 95/100/100/100) — LCP 2.5s → 3.4s from the added section, TBT still 0ms and CLS still 0, so it's the same "more real content, later paint" trade-off seen since Wave 2, not new jank. |
| Announcement bar (item 2 above) | **Still deliberately not built** — same real-release-history blocker as the changelog. |
| Usage stats / testimonials / press / real semantic release history | **Not pursued, on purpose** — no honest way to reach 10/10 here without fabricating; flagged to the user directly rather than silently scored as done. |
| Textured background, live chat widget | **Not pursued** — brand constraint and infrastructure gap respectively, not something the next design pass closes. |

## Wave 8 — background texture added, live chat widget declined

User asked directly to add the two remaining items. Answered plainly first: won't fabricate stats/testimonials/press/release history even on a direct ask — that principle holds regardless of who asks. Then confirmed per-item: texture yes (explicit override of the brand kit's flat-colour rule), live chat no (real backend work, not now).

| Item | Status |
|---|---|
| `.qt-texture-grid` — a subtle dot-grid pattern on dark-navy hero sections (all 8 across the site: homepage hero + final CTA, and the page-hero banner on every other page) | **Shipped** — a deliberate, explicit exception to `07_DESIGN_SYSTEM.md`'s flat-colour rule, done at the user's request. Not a copy of Graphify's own texture (scattered math symbols) — a dot-grid, tying to QualiTracker's own graph-based visual identity instead of borrowing theirs. |
| Real performance regression caught and fixed: first attempt (`radial-gradient` computed per-pixel) cost ~1s of FCP (2.1s → 3.1s, performance 90 → 85) | **Caught and fixed** — same "measure before declaring done" discipline as every prior wave. Rebuilt as a tiny tiled SVG data-URI instead of a computed gradient function; performance fully recovered to 95/100/100/100, FCP back to 2.1s, LCP improved to 2.6s. |
| Live QualiBOT chat widget on the marketing site | **Declined by the user** — real backend/infra work (a live endpoint, auth, hosting), correctly scoped as out of reach for a styling pass. Current scripted, clearly-labeled illustrative demo stays as-is. |
| Verification | Typecheck/lint/11 tests pass. Visually confirmed on home and `/product`. |
