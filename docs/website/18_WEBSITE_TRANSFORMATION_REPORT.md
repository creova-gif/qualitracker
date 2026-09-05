# Website Transformation Report

## Before

A single-page site with a fully coherent but **off-brand** visual system (deep green/cream/terracotta, Bricolage Grotesque/DM Mono) that predated the real brand kit's extraction into code. Pricing shown with three mutually-conflicting price sets across three different source documents. No client-facing team, vision, or Docs surface. Favicon unrelated to the brand. One static SEO title for the whole site. Motion limited to a single mount-time CSS fade. No lead-capture path for institutional/waitlist interest beyond a generic contact form.

## Changes

- Rebuilt the entire design system on the real, verified brand tokens (Deep Teal/Dark Navy/Quality Gold/Clinical White, Playfair Display/Poppins/Inter/Roboto Mono, hairline cards, colour-shift-only motion).
- Expanded from 1 page to 8 real routes: Home, Product, Solutions, Docs, Company, Security, Waitlist, Talk to the Team.
- Removed pricing entirely, replaced with an honest early-access model (Join the Waitlist / Talk to the Team), matching how the actual product's launch stage.
- Replaced invented/unverified content (client references, cost-savings figures, an unconfirmed team roster) with either verified real content (the actual 7-person founding team) or an explicit, status-labeled "not yet written" state — never a fabricated placeholder that reads as real.
- Added the accreditation-vision distinction as its own recurring section, so "software today" and "institutional ambition for tomorrow" never blur into an implied claim of authority the company doesn't hold.
- Built two original, product-grounded interactive pieces (the Ask QualiTracker citation/confidence demo, the RAG flow diagram) rather than generic feature cards.
- Fixed a real, computed accessibility bug (gold-on-light text contrast), a broken favicon, an incomplete sitemap, a duplicate font request, and a site-wide-static SEO title.
- Converted the homepage's motion from a one-time mount animation to real scroll-triggered reveals, using a dependency (`framer-motion`) that was already installed and unused.

## Why

Every change traces to a specific, evidenced problem — not a taste preference. The brand rebuild fixed a real drift between the live site and the actual brand system. The pricing removal and content-verification discipline exist because three different sources disagreed and none could be confirmed current — shipping any of them risked publishing something false. The accessibility/SEO/performance fixes were all things this audit actually measured (contrast ratios computed, bundle sizes from a real build, a real duplicate network request), not assumed.

## Technical impact

- Bundle: 378 KB JS / 117 KB gzip, 97 KB CSS / 17 KB gzip (single bundle, 8 routes — see `15_PERFORMANCE_AUDIT.md` for the code-splitting recommendation this implies).
- No new dependencies added for anything shipped this pass — `framer-motion`, `lucide-react` were already installed; the schema/backend extension reused the existing lead-capture model rather than introducing a new one.
- Full workspace `pnpm run typecheck` passes clean after every change in this session.

## Remaining work (see `17_WEBSITE_IMPLEMENTATION_PLAN.md` for the full, prioritized list)

Most consequential open items: the canonical domain decision (`.org` vs `.co`), running the actual database migration for the new lead-capture kinds, route-based code splitting, and adding lint/test tooling that doesn't exist anywhere in the repo today. Deliberately still unwritten: full Docs content (MCP/API reference/Security/Compliance), the four Solutions segment pages, and the "Under the Hood" architecture explorer — all correctly scoped out until there's real material to document rather than something to fabricate.
