# Homepage Story

Built for Direction B (`04_CREATIVE_DIRECTIONS.md`). Every chapter below is built only from content already verified against a real source (the brand kit or the live site's working copy) — anywhere the more ambitious old material would be stronger, it's marked `[PENDING VERIFICATION]` rather than used as-is, per the audit's checklist. Nothing here invents a metric, client, or feature.

## Chapter structure

### 00 — Arrival (hero)

Dark Navy background (the kit's own hero treatment, per `Marketing.jsx`). Gold eyebrow: `ISO 15189 · WHO LQMS · SLIPTA`. Headline, verbatim from the brand tagline: **"Quality that works for every lab."** Mint Light subtext describing the two-layer product plainly (QMS + QualiBOT), no hyperbole. Primary CTA: gold "Request a demo" (hero is one of the two places gold buttons are allowed). Secondary: reversed-outline "See pricing."

Signature visual: the **accreditation-readiness widget**, rebuilt from the brand kit's own sketch — document control 96%, quality records 88%, internal audit 71%, CAPA 64%, proficiency testing 90% — with the honest caveat that *these are illustrative sample values, not a real customer's live data*, exactly as the live site's own `AppPreview` already labels itself "PILOT SPACE." Don't let this widget imply real customer data without saying so.

### 01 — The thesis

Short, large-type statement — the live site's existing copy already does this well and needs no rewrite: *"Your quality system already exists. It's just hiding."* Keep verbatim; restyle to Playfair Display + the real palette.

### 02 — The system (two-layer architecture)

Reveal that QualiTracker is two connected layers, not a generic feature list — this is real, sourced content (brand kit §1): the **QMS Module** (versioned SOPs, policies, records, audit logs) and **QualiBOT** (RAG chatbot grounded in the lab's own documents). Presented as two connected panels, not six identical feature cards. This is where Graphify §7 (segmented dual-audience, not five invented personas) applies directly: QMS Module → lab directors/quality managers/accreditors; QualiBOT → frontline technologists (both audiences named in the brand kit itself).

### 03 — Ask the record (QualiBOT, rebuilt as the site's trust motif)

This is the direct build of Graphify §1. Rebuild the live site's existing `ChatbotDemo` on the real `ChatBubble`/`BotAvatar` components, keeping its two-state structure (source found / no source found — already good, already on-brand: "QualiTracker does not make up an answer"), but make the citation + confidence + disclaimer treatment consistent with how the brand kit specifies it: every bot answer shows its citation, a confidence indicator, and the "AI-generated, verify critical decisions with lab supervisor" footer. This motif — sourced or explicitly not — should visually echo into other claim-bearing parts of the page (§05 below), the way Graphify's tag vocabulary recurs everywhere.

### 04 — Standards-aware, not standards theatre

Keep verbatim from the live site (it's good, and it's accurate): ISO 15189, SLIPTA, WHO LQMS, one factual line each. No change needed beyond restyling to the real type/colour system.

### 05 — Proof (blocked pending verification)

This is where the strongest old material lives — and where the most discipline is required. `[PENDING VERIFICATION]` placeholders, not fabricated numbers:
- Cost-of-paper comparison (13–31×, $220/record) — **do not build this section until sourced**
- Admin-time reduction (90%) — **do not build until sourced**
- Advantage matrix (paper vs. Western QMS vs. QualiTracker) — build the *table component* now (it's a legitimate, brand-consistent device per the Graphify analysis §4), populate cells only once verified
- NPHL Tanzania reference — **do not name any client without their explicit sign-off**, verified separately from the general fact-check

Until any of the above clears, this chapter can ship as the Advantage Matrix with only currently-defensible rows (e.g., language support, on-device/low-bandwidth design — both are product-capability claims the team can confirm directly, not third-party stats requiring citation).

### 06 — Pricing preview (blocked)

A short teaser linking to `/pricing`, not the full tier breakdown — don't duplicate blocked content in two places. Ships once `/pricing` itself is unblocked.

### 07 — About preview

Mission/vision/essence three-card block, verbatim from the brand kit (verified, safe to use as-is): "Replace the binder" / "A regional standard" / "Quality Through Digital Precision," plus the five value badges (Scientific Accuracy · African-First Design · Radical Accessibility · Transparency & Accountability · Community Before Capital). Links to `/about` for the full team roster once that's verified.

### 08 — Final CTA

Deep Teal or Dark Navy section (kit precedent), the live site's existing contact-form mechanism (already working — `lib/leads.ts`), restyled to the real component set (`Input`, `Button`). Keep the honeypot field and the "we'll only use this to follow up" reassurance line — good, minimal-friction pattern already in place.

## What this deliberately does *not* include (compared to the original brief)

- No invented "technology constellation" node-graph — nothing in the real product is a network of interchangeable nodes; forcing one on would be exactly the Graphify-clone failure mode the brief warns against.
- No "Under the Hood" architecture explorer on the homepage — real, but deferred to `/product` in v2 once engineering supplies the actual architecture (per `05_INFORMATION_ARCHITECTURE.md`).
- No Research chapter — no source material exists yet.
- No fabricated metrics anywhere, even as placeholders styled to look real. Blocked sections say so explicitly in the working build (e.g., a commented-out section or a `[PENDING]` marker visible only in dev), not a plausible-looking fake number.

## Signature interaction for v1

One, not several, per the brief's own instruction to pick a strongest idea rather than build everything: **the accreditation-readiness widget, made genuinely interactive** — hover a category to see what it tracks and why it's weighted where it is, backed by the same citation/confidence visual language as the QualiBOT demo. This satisfies Graphify §2 (one real interactive artifact, not decoration) without requiring any content that's currently blocked.
