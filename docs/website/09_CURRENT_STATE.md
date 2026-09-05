# Current State (repository discovery, no code changes below this point until noted)

Snapshot of `~/dev/qualitracker` as it stands after the v1 rebuild (see [08_PIVOT_ADDENDUM.md](08_PIVOT_ADDENDUM.md)) and before this audit's own follow-up fixes (listed at the end, since a few were trivial/safe enough to apply while inspecting).

## Repository shape

pnpm workspace monorepo: `lib/` (api-spec, api-zod, api-client-react, db), `artifacts/` (api-server, qualitracker-website, mockup-sandbox), `scripts/`. No root `README.md` — `replit.md` is the nearest equivalent and is still a mostly-unfilled template. No `CLAUDE.md`, `.claude/`, `.agents/`, or `.skills/` directory in this repository (those live at the user's home-directory level, not per-repo).

## Frontend stack (`artifacts/qualitracker-website`)

- **Framework**: React 18 + Vite (not Next.js) + TypeScript 5.9, `wouter` for routing.
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`), CSS custom properties for the brand token layer (`src/index.css`).
- **Component layer**: shadcn/Radix primitives in `src/components/ui/*` (installed but mostly unused now — see the skill/tooling audit) plus a hand-rolled brand component set in `src/components/{site,brand,product}/*` built directly against the real brand tokens.
- **Icons**: `lucide-react`.
- **Motion**: `framer-motion` is an installed dependency but **not yet used anywhere in the code** — all current motion is plain CSS (`@keyframes`, `transition`). This is a real, actionable gap — see [13_MOTION_SYSTEM.md](13_MOTION_SYSTEM.md).
- **Data/forms**: `@tanstack/react-query` (installed, provider wired in `App.tsx`, not yet used by any page — the two lead forms call `fetch` directly via `src/lib/leads.ts`), `react-hook-form` + `@hookform/resolvers` (installed, unused — forms are plain controlled/uncontrolled inputs with manual validation).
- **Analytics**: none installed or wired anywhere.
- **Testing**: no test files, no test runner configured, `data-testid` attributes are present throughout (suggests testing was planned but never set up).

## Routes (8, all built and verified rendering)

`/`, `/product`, `/solutions`, `/docs`, `/company`, `/security`, `/waitlist`, `/talk-to-team` — see `src/App.tsx`. No `/pricing`.

## Backend (`artifacts/api-server`, `lib/db`, `lib/api-spec`)

Express 5 + Drizzle ORM + Postgres. One real endpoint, `/api/leads`, backed by a single `leads` table. Schema was extended this session (`waitlist`/`talk_to_team` kinds, `organizationType`/`message` columns) at the source level; the actual `db push` migration has **not** been run against a live database — see the addendum for why.

## SEO/meta surface

`index.html` has a single static `<title>`/description/OG/Twitter block (was written for the old single-page site). `public/robots.txt` and `public/sitemap.xml` exist. `public/favicon.svg` was a generic orange rounded-square placeholder, unrelated to the real brand mark.

## Design/planning documentation already in `docs/website/`

`00`–`08` (master plan, brand audit, brand source of truth, Graphify analysis, creative directions, information architecture, homepage story, design system, pivot addendum) already exist and are implemented, not merely proposed. This audit pass (`09`+) does not replace them — it audits what got built against them, and adds the skill/tooling, motion, accessibility, performance, and SEO analysis those docs didn't cover in depth.

## Fixed while inspecting (trivial, safe, directly evidenced — not deferred)

- `qt-eyebrow`/gold-as-text contrast: two 9px labels in the Ask QualiTracker demo used `--qt-gold-text` (#9D833B), which computes to ~3.66:1 against a light background — fails WCAG AA for small text (needs 4.5:1). Changed to `--qt-body-grey`; the gold was kept only on the icon (graphical elements need 3:1, which it clears).
- `favicon.svg` replaced with the real QT mark (was an unrelated orange square).
- `sitemap.xml` updated to list all 8 routes (was listing only `/`).
- Per-route `<title>`/description via a small `useDocumentMeta` hook (no new dependency) — the SPA previously shipped one static title for every route.

Full detail on why these specific ones and what's still open: [14_ACCESSIBILITY_AUDIT.md](14_ACCESSIBILITY_AUDIT.md) and [16_SEO_AUDIT.md](16_SEO_AUDIT.md).
