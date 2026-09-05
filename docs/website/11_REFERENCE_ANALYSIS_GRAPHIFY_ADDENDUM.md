# Graphify Reference Analysis — Addendum

The deep, principle-by-principle analysis already exists at [03_GRAPHIFY_EXPERIENCE_ANALYSIS.md](03_GRAPHIFY_EXPERIENCE_ANALYSIS.md), written from directly browsing graphify.com. This addendum adds two things that document doesn't have: confirmed tech-stack data (from the user-supplied Wappalyzer export) and the `/enterprise` sub-page (observed via screenshots shared in this session).

## Confirmed stack (Wappalyzer export, `wappalyzer_graphify-com.csv`)

React, Next.js, Tailwind CSS, **Framer Motion**, Lucide (icons), Turbopack, hosted on Vercel/AWS, PostHog + Vercel Analytics, no CMS/backend-framework signal beyond Next.js itself.

Why this matters concretely: it confirms, from data rather than visual impression, that Graphify's technical sophistication comes from **execution discipline on a conventional stack**, not exotic tooling. There is no WebGL/Three.js/GSAP signal at all. QualiTracker's actual stack (React + Vite instead of Next.js, Tailwind, Framer Motion **already installed**, Lucide already in use) is closer to Graphify's real stack than the original brief assumed — the gap isn't "we're missing exotic tools," it's "we have the right tool (Framer Motion) sitting unused." See [12_SKILL_GAP_ANALYSIS.md](12_SKILL_GAP_ANALYSIS.md) and [13_MOTION_SYSTEM.md](13_MOTION_SYSTEM.md).

This also settles the analytics question from `03`'s own analysis, which noted Graphify's stats (stars, downloads) without noting how they're tracked: PostHog (product analytics) + Vercel Analytics (web vitals/traffic), both privacy-conscious, low-integration-cost choices — a reasonable model for QualiTracker once analytics is worth adding (currently: none installed, see `10_WEBSITE_AUDIT.md`).

## `/enterprise` (observed directly this session)

A deliberately minimal early-access page — "EARLY ACCESS · Be first in line," a short waitlist form (work email, role, team size, an optional "what would you point it at" free-text field), and a secondary "Request a scoping call" link. No pricing, no feature grid, no case studies — Graphify's own enterprise tier is positioned as *not yet generally available* and says so plainly, rather than dressing up a pre-launch state as fully shipped.

This is a direct, useful precedent for QualiTracker's own `/waitlist` page (built this session): both are honest early-access flows for a product still being built toward launch. The design decisions already made for QualiTracker's waitlist (progressive-ish optional fields, no fake urgency, plain confirmation state) independently converge on the same pattern Graphify uses for its own not-yet-shipped enterprise tier — worth noting as validation rather than a new gap.

## Nothing here changes the recommendation in `04_CREATIVE_DIRECTIONS.md`

Direction B ("Brand × Interactive Systems") still stands. The stack confirmation reinforces that the honest gap to close is motion/interaction depth using tools already in the project, not a stack change or a new dependency.
