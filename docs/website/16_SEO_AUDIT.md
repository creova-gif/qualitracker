# SEO & AI-Discoverability Audit

## Fixed this session (real, verified)

- **Per-route `<title>`/description**: `index.html` shipped one static title/description for every route — meant only ever mattered for the old single-page site. Added `useDocumentMeta` (no new dependency), verified via `document.title` changing correctly on navigation to `/product` in a live browser check.
- **Sitemap**: `public/sitemap.xml` listed only `/`. Updated to all 8 routes with reasonable `priority`/`changefreq` values.
- **Favicon**: was a generic orange rounded-square (`#FF3C00`), unrelated to the brand. Replaced with the real QT mark on Deep Teal.
- **Duplicate font request** removed (see `15_PERFORMANCE_AUDIT.md`) — a page-weight issue, not strictly SEO, but affects load speed which factors into ranking.

## Open — architectural limit, not a quick fix

**This is a client-rendered SPA with no SSR/prerendering.** `useDocumentMeta` updates `document.title` and the meta tags *after* React mounts and runs an effect — a crawler or bot that doesn't execute JavaScript sees only `index.html`'s static (homepage-oriented) title/description/OG tags, for every single route. Modern Googlebot generally does execute JS and would likely see the per-route titles correctly; social-media unfurlers (Slack, Twitter/X, iMessage link previews) and many simpler crawlers typically do not, so a `/waitlist` link shared on social media would currently show the *homepage's* OG title/description, not a waitlist-specific one.

The real fix is prerendering or SSR (e.g. `vite-plugin-ssr`, or moving to a framework with built-in SSR) — a genuinely bigger change than anything else in this audit, correctly out of scope for a quick pass. Flagged, not silently worked around.

## Open — needs a decision, not code

**Canonical domain mismatch.** `index.html`'s `<link rel="canonical">` and `og:url` point to `https://qualitracker.org/`. The real brand system's own `readme.md` (`qualitracker-io` Claude Design project) lists the product's web address as `qualitracker.co`. These are two different domains — worth resolving which one is actually owned/live before launch, since shipping the wrong canonical URL actively hurts SEO rather than doing nothing. Not something to guess and silently pick.

## Open — not yet done, moderate effort

- **Structured data (schema.org)** — no JSON-LD anywhere (e.g. `Organization`, `SoftwareApplication`, or `FAQPage` markup). Worth adding once the Pricing/Security pages have real, stable content — premature to markup content that's still `coming-soon`.
- **robots.txt/sitemap correctness** — `robots.txt` itself is fine (`Allow: /`, points at the sitemap); no `Disallow` rules needed since nothing on the site is private.

## Not applicable yet

Blog/insights content, case studies, and any keyword-targeted landing pages don't exist and shouldn't be invented just to have SEO surface area — per `05_INFORMATION_ARCHITECTURE.md`'s own "don't create pages merely to make the website larger" principle, restated here for the SEO context specifically.
