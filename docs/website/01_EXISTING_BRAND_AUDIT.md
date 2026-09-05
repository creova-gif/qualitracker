# Existing Website Audit

Audited: the live site at `artifacts/qualitracker-website` (React 18 + Vite + Tailwind v4 + Radix/shadcn primitives, single route via `wouter`), plus the abandoned Framer plan and its copy doc as a secondary content source.

## The headline finding

**The live site is not built to the QualiTracker brand.** Side by side:

| | Live site (`landing-page.tsx`, `index.css`) | Real brand (`qualitracker-io` Claude Design) |
|---|---|---|
| Primary color | `#17483f` deep green | `#025561` Deep Teal |
| Background | `#f7f4ed` warm cream | `#FFFFFF` Clinical White |
| Accent | `#e7774d` / `#b85d3c` terracotta | `#C9A84C` Quality Gold (hero + pricing CTAs only) |
| Secondary surface | `#d6d9b2` olive | `#E6F4F1` Mint Light / `#F4F6F7` Lab Grey |
| Display font | Bricolage Grotesque | Playfair Display |
| UI font | Plus Jakarta Sans | Poppins (headings) / Inter (body, UI) |
| Mono | DM Mono | Roboto Mono (technical surfaces only) |
| Radius | 23px cards, full-pill buttons | 8px marketing cards, 4px buttons, full only for badges/dots |
| Texture | SVG noise overlay, dashed rules | None — flat colour fields, hairline borders only |
| Elevation | Large offset shadows (`18px 22px 0 rgba(...)`) | Hairline borders; real shadows only for floating elements (toast/modal) |

None of this is a small styling drift — it's a fully different, if well-executed, visual system. It was built (correctly, on its own terms) before the real brand kit was extracted into `qualitracker-io`. **This is the single highest-priority fix**, independent of which creative direction is chosen: the live site needs to be rebuilt against the real tokens in `07_DESIGN_SYSTEM.md`.

## What the live site gets right (worth preserving as *pattern*, not pixels)

- **Working infrastructure.** Real lead-capture (`lib/leads.ts`, wired to a backend), a newsletter signup, form validation, a honeypot field, loading/error states. This is production plumbing — keep the mechanism, restyle the surface.
- **Numbered section rhythm** (`01 / The reality`, `02 / The system`, …) — a real content-hierarchy device the real brand also uses (the eyebrow + 4px gold rule pattern). Compatible in spirit; needs restyling to the real eyebrow spec.
- **The "ask your quality records" chatbot demo** (`ChatbotDemo` component) — a two-state (found source / no source found) simulated QualiBOT conversation. This is structurally *exactly* the citation-and-confidence pattern the real brand mandates for QualiBOT (`components/chat/ChatBubble.prompt.md`: every answer cites its source; the "no invented answers" framing already present in the copy). Keep this idea; rebuild the component on `ChatBubble`/`BotAvatar`.
- **The `AppPreview` mock dashboard** — same instinct as the real brand's `Marketing.jsx` "Accreditation readiness" widget (see below): show the product, don't just describe it. Different specific execution; same instinct, worth consolidating into one signature artifact rather than two similar-but-different ones.
- **Reduced-motion handling** already present in `index.css` (`prefers-reduced-motion` zeroes animation/transition duration). Keep this discipline.

## Content inventory (Keep / Improve / Rewrite / Redesign / Consolidate / Move / Remove / Missing)

| Item | Disposition | Notes |
|---|---|---|
| Hero headline "Quality that works for every lab" | **Keep** | Matches the brand's own tagline exactly (`readme.md`: *Tagline — "Quality that works for every lab"*). Don't touch. |
| Standards row (ISO 15189 / SLIPTA / WHO LQMS) | **Keep** | Matches brand doc exactly. |
| "Your quality system already exists. It's just hiding." section | **Keep**, restyle | Strong, specific copy; not generic SaaS voice. Fits the brand voice spec ("Clinical · Confident · Grounded"). |
| Chatbot demo | **Redesign** | Keep the interaction concept, rebuild on real `ChatBubble`/`BotAvatar` components and copy conventions (mandatory citation + confidence + AI-disclaimer footer, per brand kit §3). |
| App/dashboard preview | **Consolidate** | Merge with the brand kit's own "Accreditation readiness" widget concept (`ui_kits/website/Marketing.jsx`) into one signature product-preview artifact — see `06_HOMEPAGE_STORY.md`. |
| Pricing (Pilot "talk to us" / Core $120/mo / Partner "talk to us") | **Verify before reuse** | Conflicts with *two* other sources: the brand kit's own draft (`Starter TZS 0` / `Laboratory $49/mo` / `Network custom`) and the Framer copy doc (`Pilot Cohort $0` / `Standard $500–1,500/yr` / `NGO Custom`). Three different numbers across three sources — **do not publish any pricing until the user confirms current, real pricing.** |
| About / "Built by someone who has lived the paper workflow" | **Rewrite** | Generic single-founder framing. The Framer copy doc has a full 8-person named team with roles (CEO, CTO, CPO, CMO, COO, Chief Community Officer, CSO, CFO) — richer and more credible, if current. Flagged for verification below. |
| Standards-aware section (ISO 15189 / SLIPTA / WHO LQMS one-liners) | **Keep**, restyle | Good, factual, non-hyperbolic — matches brand voice. |
| Footer nav/newsletter | **Keep**, restyle | Working mechanism; wrong visual system (green→navy, wrong type). |
| Founding team roster | **Missing** (on live site), **available** (in Framer copy doc) | Real names and bios exist in `qualitracker-web/reference/qualitracker-website-copy-v2.md` but were never built. High-value "About" content if still accurate — verify before use. |
| Research-backed correlation (R²=0.81, accreditation density vs. health spend) | **Missing** (on live site), **available**, **needs citation check** | A specific, falsifiable claim attributed to "the *American Journal of Clinical Pathology*." Strong differentiator *if verifiably real* — this is exactly the kind of claim §18 of the brief prohibits fabricating. Get the actual citation before it goes anywhere near the site. |
| "13–31× the cost of paper" / "$220 to recreate a lost record" / "90% admin time reduction" | **Missing**, **available**, **needs sourcing** | Same treatment — confirm source and currency before reuse. |
| NC-0001 tamper-evident CAPA numbering, SADCAS F134(b) references | **Missing**, **available** | Specific, technical, credible-sounding product detail — good raw material for an "Under the Hood" section, but only if the underlying product feature is real and current. |
| National Public Health Laboratory (NPHL) Tanzania as reference client | **Missing**, **needs explicit permission** | Naming a specific institution as a client/deployment requires their sign-off, not just internal confirmation — treat as a legal/relationship question, not just a copy question. |
| Legal entity name | **Inconsistent** | Brand kit readme says *Qualitracker Limited*; Framer copy doc footer says *"© 2026 Wilberforce Technologies Limited"*. Needs a single correct answer before any footer copyright line ships. |
| Advantage matrix (Paper vs. Western QMS vs. QualiTracker) | **Rewrite candidate** | Strong device (the brand kit's own `DataTable` component and `ComparisonRows` CMS idea both anticipate this pattern) — rebuild with verified, current numbers rather than reusing the 2026 draft numbers as-is. |
| Swahili-language QualiBOT example | **Confirmed real** | Verified directly in `qualitrackerchatbot`'s `rag_pipeline.py` system prompt: explicit language-detection instruction ("If the question is in Swahili, answer in Swahili"). Safe to claim on the site now — previously only asserted by the old copy doc, now confirmed in the actual deployed code. |

## Verification checklist (blocks any of this content going live)

Everything below is copy the old Framer material asserts as fact. None of it should reach the rebuilt site until you've confirmed it — this list is the concrete output of "mine it for content, verify before publishing":

- [ ] Current pricing tiers, names, and amounts (three conflicting drafts exist — none may be current)
- [ ] Current founding team roster and titles (8 people named; confirm still accurate)
- [ ] NPHL Tanzania as a named reference client — and whether they've agreed to be named publicly
- [ ] The R²=0.81 accreditation/health-spend correlation and its actual source citation
- [ ] The 13–31× paper cost and $220 record-recreation figures and their source
- [ ] The "90% admin time reduction" figure and its source (measured pilot data, or aspirational?)
- [x] Whether Swahili-language QualiBOT support has shipped or is still planned — **confirmed real**, verified in the actual chatbot repo's code
- [ ] The correct legal entity name for the footer/copyright line
- [ ] Whether the NC-0001 CAPA numbering and SADCAS F134(b) alignment are current product features

## Missing entirely (neither source covers this)

- A real, current product screenshot or recording (both `AppPreview` on the live site and the brand kit's widget are illustrative mockups, not real UI)
- Any research/documentation surface (the master prompt's "Research" chapter has no source material yet — likely out of scope for v1 unless the user has unpublished material)
- An engineering/architecture explanation of the actual system (two-layer QMS + QualiBOT architecture is named in the brand readme but never diagrammed anywhere)
