# Creative Directions

Three substantially different directions, all built from the same locked brand tokens (`02_BRAND_SOURCE_OF_TRUTH.md`) and the same Graphify lessons (`03_GRAPHIFY_EXPERIENCE_ANALYSIS.md`). They differ in how far each pushes past the brand kit's stated motion ceiling ("calm and clinical... no bounce, no scale, no parallax") — named honestly per direction rather than quietly ignored.

---

## Direction A — Brand × Technical Editorial

**Concept.** The brand kit's own instincts, taken to their natural conclusion: Playfair Display headlines at real editorial scale, generous whitespace, the eyebrow-title-gold-rule pattern as the site's dominant rhythm, hairline cards throughout. Motion stays almost exactly at the kit's stated ceiling — scroll-triggered opacity/y reveals (the kit doesn't forbid these, only bounce/scale/parallax), colour-shift hover, nothing more.

**Homepage feel.** Reads like a well-typeset clinical report or an accreditation dossier that happens to be a website. Long-form sections, real page breaks, numbers presented as figures with captions (in the Playfair/Poppins/Inter hierarchy already defined).

**Signature interaction.** The accreditation-readiness bar-chart widget (already sketched in the brand kit's `Marketing.jsx`) as a static-but-real hero visual; QualiBOT demo as an inline conversation transcript, not an animated sequence.

**Where it sits vs. Graphify.** Closest to Graphify's actual restraint (§8 in the analysis) but least ambitious about interactivity — a legitimate, low-risk direction, but the one least likely to produce a "visitors stop scrolling" moment.

**Motion-ceiling honesty.** Stays inside the kit's stated limits almost entirely. The safest direction; also the one that does the least *elevating*.

---

## Direction B — Brand × Interactive Systems

**Concept.** Same locked palette and type, but the site's core content — the two-layer QMS/QualiBOT architecture, the document lifecycle, the accreditation-readiness state — is rendered as genuinely interactive, real-data-driven components rather than static cards. This is where Graphify's §1 (provenance tagging) and §2 (one real interactive artifact) get built, not just referenced.

**Homepage feel.** A homepage built around 2–3 real, explorable widgets: the accreditation-readiness bars (hover a category, see what it tracks), an "ask your quality records" QualiBOT demo that's a real (if canned) multi-turn exchange with visible citation + confidence tags, and a document-lifecycle timeline (draft → review → approved → superseded) that animates on scroll — using only colour/opacity/position transitions already inside the kit's motion budget, just applied to more surfaces than the kit itself specified.

**Signature interaction.** QualiBOT's citation/confidence system, made into the site's recurring visual motif (per Graphify §1) — every claim-bearing section on the site (a metric, a comparison row, a QualiBOT answer) gets the same small "sourced" treatment, consistently.

**Where it sits vs. Graphify.** The most direct translation of what actually makes Graphify's site work: not spectacle, but a repeated, legible trust mechanic plus one real interactive artifact.

**Motion-ceiling honesty.** Extends the kit's motion vocabulary — scroll-driven reveals and state transitions on more components than the kit explicitly specifies — but stays inside "colour/opacity/position, no bounce, no scale, no parallax." This is *evolving* the brand's motion system, which `02_BRAND_SOURCE_OF_TRUTH.md` explicitly allows, not violating it.

---

## Direction C — Brand × Experimental Technology Lab

**Concept.** Pushes furthest: a from-scratch "Under the Hood" architecture explorer (client → API → orchestration → QualiBOT/RAG → document store, hover/click to reveal each layer), a research-style presentation for the document-control/CAPA/audit-trail mechanics (styled like a technical paper, using Roboto Mono for the technical annotations the kit reserves for exactly this purpose), and a more cinematic homepage scroll sequence loosely inspired by the "chapters" structure in the original brief.

**Homepage feel.** The most ambitious, closest to the original brief's imagined scope. Risk: without discipline, this is exactly where "our brand became a Graphify clone" creeps in — the architecture-diagram impulse in particular is generic-AI-company shaped unless it's rendered in the real palette/type and grounded in QualiTracker's *actual* stack (which needs to be gathered from engineering, not invented).

**Signature interaction.** An interactive request-lifecycle diagram: a lab record moves through the real system (upload → version → QualiBOT index → citation-backed answer → audit log entry), animated on scroll, each stage annotated in Roboto Mono the way the kit reserves that font for "developer/technical identity" surfaces.

**Where it sits vs. Graphify.** Furthest from Graphify's own restraint (§8) despite being the direction most explicitly "inspired by" it — worth naming that tension directly rather than pretending it isn't there.

**Motion-ceiling honesty.** This direction most needs a hard rule going in: even at its most ambitious, no bounce/scale/parallax, no dark-cyberpunk substitution for the real palette, no invented "technology ecosystem" diagram without a real referent in the actual product architecture. Every animated diagram must map to something the engineering team can confirm is real.

---

## Evaluation

| | A — Editorial | B — Interactive Systems | C — Experimental Lab |
|---|---|---|---|
| Brand fidelity | Highest | High | Medium — highest risk of drift without discipline |
| Graphify-lesson fidelity (§1–§6) | Low — mostly restraint (§8) only | High — direct build of §1 and §2 | Medium — ambitious but further from what Graphify *actually* is |
| "Stop and interact" moment | Weak | Strong (real widgets, real trust motif) | Strongest, but highest execution risk |
| Content readiness | Ready now (existing verified content) | Ready now, plus the accreditation widget already sketched in the brand kit | Needs real architecture input from engineering before it can be built honestly |
| Effort/risk | Low | Medium | High |

## Recommendation

**Direction B, with Direction A's editorial discipline as its baseline and one Direction C element reserved for a v2 milestone.**

Reasoning: Direction B is the one that actually does what the brief's formula asks — *our brand* (locked, direction A's discipline) *plus* Graphify-level storytelling (direction B's real interactive artifacts and recurring trust motif) — without requiring unverified architecture claims (direction C's risk) or leaving the site under-ambitious (direction A alone). It's also the only direction where every component in v1 is either already specified in the real brand kit (`Marketing.jsx`'s accreditation widget, `ChatBubble`'s citation pattern) or already exists in some form on the live site (the chatbot demo) — meaning v1 is a *rebuild to spec*, not a from-scratch invention.

Defer to v2, once engineering confirms the real architecture: Direction C's "Under the Hood" system diagram. It's the single strongest idea in the whole brainstorm, but it's the one component here that cannot be honestly built from what currently exists in `docs/website/`.
