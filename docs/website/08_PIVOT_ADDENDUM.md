# Pivot Addendum — supersedes parts of 00–07

**Status: implemented and verified in-browser.** See "What's built" at the bottom of this file for the concrete state — routes, backend schema changes, and what's still a stub.

A follow-up brief from the founder (Justin Mafie, CTechO) resolved several open items from the original docs and changed scope. This file records what changed and why, rather than silently rewriting history in 00–07.

## Resolved (previously blocked pending verification)

- **Legal entity**: **Qualitracker Limited**, confirmed. Drop the "Wilberforce Technologies Limited" reference entirely.
- **Founding team** (name + role only — no bios, no invented credentials/employers/universities/quotes, per explicit instruction):
  - Damian Job Kahamba (DJK) — CEO
  - Justin Mafie (JM) — CTechO
  - Ibrahim Mauki (IM) — CMarketingO
  - Robert Baluhya (RB) — CProductO
  - Henry Mlay (HM) — COperationsO
  - Leah Nanyaro (LN) — CCO / Finance
  - Nickson Gabriel (NG) — CStrategyO
- **Pricing**: not resolved with numbers — **removed as a concept entirely.** No tiers, no "starting at," no ROI claims. Replaced by two CTAs: **Join the Waitlist** (primary, everywhere) and **Talk to the Team** (institutional/regulatory/partner inquiries).
- **Clients/social proof (incl. NPHL Tanzania)**: resolved as **remove entirely** — no logos, no "trusted by," no testimonials, no usage numbers, until real customers exist and have agreed to be named.
- **The 13–31×/90%/R²=0.81 figures**: not sourced — **dropped**, not used as placeholders either. Credibility comes from product/technology/documentation quality instead, per the new brief.
- **Swahili QualiBOT, NC-0001/SADCAS specifics**: not confirmed — **not claimed** until confirmed. Any feature description ships only for what's genuinely built, labeled by status (see below).

## New: product status vocabulary (use everywhere)

`In Development` · `Coming Soon` · `Early Access` · `Preview` · `Planned`. Every feature/section claim gets one of these where it isn't simply live today. This is the mechanism that keeps an honest, still-being-built product from reading as unfinished — Graphify's own "backed by Combinator" / real version changelog plays the same role: precise about stage, not vague about it.

## New: the accreditation-vision distinction (compliance-sensitive — get this right everywhere)

Two claims that must never blur into one:
1. **Current product**: quality-management software and supporting technology (QMS + QualiBOT). This is what's real today.
2. **Long-term vision**: exploring the institutional path toward contributing to laboratory accreditation-readiness infrastructure in East Africa/Sub-Saharan Africa — **contingent on obtaining actual authorization QualiTracker does not hold today.** Never state or imply current accreditation authority, certification, or regulatory status. "Standards-aware" (helps a lab prepare for ISO 15189/SLIPTA/WHO LQMS) is a defensible claim; "accredited" or "certifies" is not.

## New: information architecture (replaces `05_INFORMATION_ARCHITECTURE.md`'s site map)

```
/                 Home — problem/product/differentiation/audience, then show the product
/product          Platform, Quality Management, AI & RAG, Analytics, Integrations
/solutions        Medical Laboratories · Testing Laboratories · Research Laboratories · Multi-Site
                  (stub for v1 — real content once positioning per segment exists)
/docs             Full documentation platform — see below. Shell + real Getting Started content
                  now; the rest scaffolded and status-labeled, not fabricated.
/company          About, Team (real roster above), Vision (incl. the accreditation distinction)
/security         Stub — data isolation/handling claims only once verified; no compliance
                  certifications claimed
/waitlist         Primary conversion flow
/talk-to-team     Institutional/partner/regulatory conversion flow
```

Dropped entirely from the earlier IA: `/pricing`. `/contact` is renamed/split into `/waitlist` and `/talk-to-team` — different intents, different forms, per the brief.

## New: Docs platform scope for this pass

The full brief asks for a docs platform on par with a serious dev-tool product: sidebar, search, breadcrumbs, TOC, code blocks with copy, versioning-ready, plus complete MCP and API reference documentation. That is realistically its own multi-session build, not something to fake in one pass. **What ships now**: the real navigational shell (sidebar structure matching the brief's IA — Getting Started / QMS / AI & RAG / Integrations / MCP / API Reference / Security / Compliance / Changelog / Support) and one real page (Introduction/Getting Started), with every other section rendering an honest "Coming soon" state rather than placeholder-that-looks-real content. Filling in MCP docs, API reference, etc. is follow-up work, sequenced after this foundation, once there's real material (an actual MCP server, an actual API) to document.

## New: product visualization scope for this pass

The brief lists ~20 possible product surfaces (dashboard, SOPs, CAPA, non-conformances, audits, equipment, calibration, personnel, training, risk, etc.). Building 20 polished mockups in one pass would produce shallow work across all of them. **What ships now**: 2–3 well-executed visualizations that carry the most narrative weight — the accreditation-readiness widget (already spec'd in the real brand kit) and the "Ask Qualitracker" AI/RAG demo (question → permission layer → authorized knowledge → retrieval → evidence → traceable response, per the brief's own diagram) — both clearly labeled as illustrative/demo data, never implying real customer activity. The rest of the product-surface list is real backlog for `/product`, sequenced after these two ship well.

## Backend change required to support the new lead flows

`Join the Waitlist` and `Talk to the Team` need lead-capture kinds the current API doesn't have. Minimal extension (not a redesign): widen the `kind` enum (`newsletter`, `demo_request` → add `waitlist`, `talk_to_team`) and add two optional text columns (`organizationType`, `message`) to carry the extra context the brief's form fields ask for, rather than one column per field. Source changes are safe/reversible; **the actual database migration (`db push`) is not run automatically** — see the implementation notes for why.

## What's built (this pass)

**Design system**: `src/index.css` fully replaced with the real brand tokens (Deep Teal/Dark Navy/Quality Gold/Clinical White, Playfair Display/Poppins/Inter, hairline cards, colour-shift-only motion). The real QT symbol mark (from the Claude Design asset source, not redrawn) is in `src/assets/qt-symbol.tsx`.

**Routes** (`App.tsx`): `/` (home), `/product`, `/solutions`, `/docs`, `/company`, `/security`, `/waitlist`, `/talk-to-team` — all built, typechecked, and verified rendering correctly in-browser (desktop and mobile, incl. the mobile nav toggle). No `/pricing` route exists.

**Real content shipped**: hero, thesis, two-layer system explainer, the Ask QualiTracker RAG demo (citation + confidence + disclaimer, both states), the RAG flow diagram, the accreditation-readiness widget (interactive, labeled illustrative), the accreditation-vision distinction section (used on both Home and Company), the full verified team roster on `/company`, the quality-knowledge-graph diagram on `/product`, working Waitlist and Talk-to-Team forms (client-side validation, honeypot, error states — verified against a live dev server, including the expected failure state when the backend isn't running).

**Scaffolded, not fully written** (status-labeled `coming-soon`/`in-development`/`planned`, not fabricated): the `/docs` sidebar covers the brief's full IA (QMS module docs, AI & RAG, Integrations, MCP, API Reference, Security, Compliance, Changelog, Support) with only "Introduction" carrying real content; `/solutions`'s four segments; `/product`'s capability list beyond QMS Module/QualiBOT; `/security`'s actual claims.

**Backend**: `lib/api-spec/openapi.yaml` and `lib/db/src/schema/leads.ts` updated and regenerated (`orval` codegen ran clean, full workspace `pnpm run typecheck` passes). **Not done, and needs you or a session with DB access**: running `pnpm --filter @workspace/db run push` against the real `DATABASE_URL` to actually add the `organization_type`/`message` columns — I did not attempt this without confirming the target database, since it's a live-infrastructure action outside safe/reversible territory for me to just run.
