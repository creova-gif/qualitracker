# Information Architecture

## The single-page vs. multi-page decision

Two real precedents disagree:
- The **live site** is a single page with in-page anchors (`#home`, `#how-it-works`, `#features`, `#pricing`, `#about`, `#contact`).
- The **brand kit's own website UI kit** (`ui_kits/website/`) and the **abandoned Framer plan** both assume a **5-page site**: Home, Features/Product, Pricing (& Compliance), About, Contact — with `SiteNav` built as page-switching, not anchor-scrolling.

**Recommendation: move to the 5-page structure.** Three independent reasons converge on it:
1. It's what the actual, current brand kit was built against (`SiteChrome.jsx`'s `SiteNav` takes a `page` prop and highlights the active *page*, not an anchor).
2. It gives "Under the Hood," Research, and a real Features deep-dive somewhere to live without turning the homepage into an infinite scroll — which directly serves the depth-model instinct in the original brief (simple explanation up top, technical depth available, not forced on every visitor).
3. It matches how a technical/regulatory buyer actually researches a vendor — bookmarking and returning to a specific page (Pricing, Compliance/FAQ) rather than re-scrolling a long single page.

The homepage itself stays a rich, chaptered scroll (`06_HOMEPAGE_STORY.md`) — the multi-page decision is about giving deep content (full feature breakdowns, the compliance FAQ, full team bios) *dedicated* pages rather than cramming everything into one.

## Site map

```
/                    Home — chaptered narrative, see 06_HOMEPAGE_STORY.md
/product             Product — the two-layer architecture (QMS + QualiBOT), feature deep-dive,
                      "Under the Hood" (deferred to v2 per 04_CREATIVE_DIRECTIONS.md)
/pricing              Pricing & Compliance — tiers (pending verified numbers) + compliance FAQ
                      (ISO 15189 / SADCAS / data isolation — pending verified claims)
/about               About — mission/vision/essence, founding team (pending verified roster),
                      the research-backed "why" (pending verified citation)
/contact             Contact & Request a Demo
```

Not proposed for v1 (no source content exists yet — see the audit's "missing entirely" list):
- `/research` — the master prompt's "Research" chapter has no underlying material. Add only once there's something real to publish (papers, technical reports); an empty research library reads worse than no research section at all.
- Dedicated `/engineering` or `/docs` — same reasoning; the real architecture isn't documented anywhere yet.

## Navigation

Primary nav (from the brand kit's own `SiteNav`, kept as-is — it's already correct): **Product · Pricing · About · Contact**, persistent "Request a demo" CTA (teal, `size="sm"`, per the kit).

Footer (from `SiteFooter`, already spec'd in the kit): four columns — **Product** (QMS Module / QualiBOT AI / Accreditation / Pricing), **Company** (About / Careers / Contact / Press), **Resources** (ISO 15189 guide / Case studies / Documentation / Status), plus a legal/copyright bar. Note: "Careers," "Press," "Case studies," "Documentation," and "Status" are all footer links to content that doesn't exist yet — either build minimal stub pages/redirects, or trim the footer to links that resolve to something real. Don't ship dead links.

## Depth model (right-sized, not the original brief's 5-tier version)

`03_GRAPHIFY_EXPERIENCE_ANALYSIS.md` §7 already made the case: two real audiences, not five invented personas.

1. **Decision-maker** (lab director, quality manager, accreditor, NGO/donor partner) — served by Home, Pricing, About. Needs: what it replaces, what it costs, why it's credible.
2. **Frontline user** (bench technologist, QMS officer) — served by Product's QualiBOT section specifically. Needs: what it feels like to use day-to-day.

A third, deferred tier — **technical evaluator** (IT/security reviewer for an institutional buyer) — is exactly what `/product`'s "Under the Hood" section would serve once it exists. Don't build a placeholder for it; build it properly in v2 once there's real architecture to show.

## Per-page content sources (what's ready vs. blocked)

| Page | Content status |
|---|---|
| Home | Ready — see `06_HOMEPAGE_STORY.md`, built from verified-safe content only |
| Product | Ready for the QMS/QualiBOT description (brand kit + live site); blocked for "Under the Hood" (no real architecture source yet) |
| Pricing | **Blocked** — three conflicting price sets exist; needs current numbers before this page can be written |
| About | Partially ready — mission/vision/essence text is verified (brand kit readme); team roster and R²=0.81 citation are blocked pending verification (see audit) |
| Contact | Ready — form fields and mechanism already exist and work on the live site |
