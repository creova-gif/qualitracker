# Design System — web-ready, mapped to the live stack

The `qualitracker-io` Claude Design system already defines every token needed (`tokens/*.css` — read directly from the source this session). This doc does two things the source system doesn't: (1) collapses it to the values the website actually needs, and (2) maps it onto the real stack in `artifacts/qualitracker-website` (Vite + Tailwind v4 + Radix/shadcn primitives), replacing the current off-brand `index.css`.

## 1. Colour — replaces `artifacts/qualitracker-website/src/index.css` `:root`/`.dark` blocks entirely

```css
:root {
  --qt-deep-teal: #025561;
  --qt-teal-hover: #013D46;
  --qt-dark-navy: #1A3A4A;
  --qt-quality-gold: #C9A84C;
  --qt-gold-hover: #B89640;
  --qt-gold-text: #9D833B;       /* use when gold must be text on white — the plain gold fails contrast */
  --qt-clinical-white: #FFFFFF;
  --qt-mint-light: #E6F4F1;
  --qt-lab-grey: #F4F6F7;
  --qt-body-grey: #666666;
  --qt-near-black: #1C2833;
  --qt-border-grey: #E0E0E0;
  --qt-light-teal: #5FBFC1;      /* dark-mode action colour, active-state accents */

  --qt-success: #28A745;
  --qt-warning: #FFC107;
  --qt-error: #DC3545;

  /* shadcn/Radix semantic mapping — same variable names the current components already read */
  --background: var(--qt-clinical-white);
  --foreground: var(--qt-near-black);
  --border: var(--qt-border-grey);
  --primary: var(--qt-deep-teal);
  --primary-foreground: var(--qt-clinical-white);
  --secondary: var(--qt-mint-light);
  --secondary-foreground: var(--qt-deep-teal);
  --muted: var(--qt-lab-grey);
  --muted-foreground: var(--qt-body-grey);
  --accent: var(--qt-quality-gold);       /* use sparingly — see §5 rules */
  --accent-foreground: var(--qt-dark-navy);
  --destructive: var(--qt-error);
  --ring: var(--qt-deep-teal);
}

.dark {
  --background: var(--qt-dark-navy);
  --foreground: #FFFFFF;
  --border: #666666;
  --primary: var(--qt-light-teal);
  --primary-foreground: var(--qt-dark-navy);
  --muted: #1C2833;
  --muted-foreground: #A3A3A3;
  --accent: #DCC68B;
}
```

Data-viz series, fixed order — wire directly into any chart component (the live site has none yet; needed for the accreditation widget and any future Levy–Jennings/comparison chart):

```css
--viz-1: #025561;  /* primary series */
--viz-2: #C9A84C;  /* secondary */
--viz-3: #5FBFC1;  /* tertiary */
--viz-4: #DC3545;  /* alert / out-of-range */
--viz-grid: #E8E8E8;
```

## 2. Typography

```css
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;700&display=swap");

:root {
  --font-display: "Playfair Display", Georgia, serif;   /* hero/section headlines ONLY */
  --font-brand: Poppins, -apple-system, sans-serif;      /* section headers, card titles, metric values */
  --font-body: Inter, -apple-system, sans-serif;         /* everything else: body, UI, labels, buttons */
  --font-mono: "Roboto Mono", ui-monospace, monospace;   /* technical/developer surfaces only */
}
```

Replaces the live site's `font-display`/`font-mono-ui` utility classes (currently Bricolage Grotesque / DM Mono) one-to-one — same class names, new families, so component code barely changes.

**The eyebrow pattern** (the brand's single most distinctive, most-reused type move — build it as a shared component immediately, not inline per-section as the live site currently does):

```css
.qt-eyebrow {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--qt-deep-teal);
}
.qt-eyebrow-rule {
  width: 100px;
  height: 4px;
  background: var(--qt-quality-gold);
  margin: 12px 0 28px;
}
```

## 3. Spacing, radius, elevation

```css
:root {
  --space-xs: 4px;  --space-sm: 8px;  --space-md: 16px;  --space-lg: 24px;
  --space-xl: 32px; --space-2xl: 48px; --space-3xl: 64px; --space-4xl: 80px;

  --radius-control: 4px;   /* buttons, inputs */
  --radius-metric: 6px;    /* product metric tiles, chart panels */
  --radius-card: 8px;      /* marketing cards, toasts, dropdowns */
  --radius-modal: 12px;    /* modals, chat bubbles, login card */
  --radius-pillar: 14px;   /* large brand-pillar cards */
  --radius-full: 9999px;   /* badges, dots only — NOT general card radius */

  --page-max-width: 1280px;
  --page-margin: 80px;     /* step down responsively — see §6 */
}
```

Card treatment — **replaces the live site's large offset-shadow cards entirely**: `background: var(--qt-clinical-white); border-radius: var(--radius-card); box-shadow: inset 0 0 0 1px #E8E8E8;` — hairline, not shadow. Real `box-shadow` (not inset) reserved for things that float above the page: `--shadow-overlay: 0 12px 32px rgba(28,40,51,.18)` for modals/dropdowns only.

## 4. Motion

```css
:root {
  --ease-standard: cubic-bezier(0.2, 0, 0.2, 1);
  --duration-fast: 120ms;
  --duration-base: 180ms;
  --duration-slow: 280ms;
}
```

Rules, non-negotiable per `02_BRAND_SOURCE_OF_TRUTH.md`:
- Hover = colour/background shift only. Primary → `--qt-teal-hover`; gold → `--qt-gold-hover`; ghost → `--qt-lab-grey` fill. **No `transform: scale()` on hover, no `translateY` lift** — this is the single biggest change from the live site's current `.qt-button:hover { transform: translateY(-2px) }`.
- Press: no shrink, no movement.
- Disabled: 40% opacity, no pointer cursor.
- Scroll reveals (evolvable, per Direction B): `opacity 0→1` + `transform: translateY(14px)→0` only — same shape the live site's `qt-reveal` keyframe already uses, keep the mechanism, it's already compliant.
- `prefers-reduced-motion: reduce` collapses all of the above to instant — the live site already does this correctly (`index.css`); carry it over unchanged.
- The one bespoke animation the brand kit itself specifies: QualiBOT's thinking state, a pulsing 2px `--qt-light-teal` ring. Build this once, reuse everywhere `BotAvatar state="thinking"` appears.

## 5. Component rules (from the source system's component `.prompt.md` files — the exact constraints, not paraphrased)

- **Button**: 44px height, 4px radius, Inter SemiBold 14px. Variants: `primary` (teal fill), `secondary` (teal outline), `gold` (gold fill, Dark Navy text), `ghost`. **Gold is permitted in exactly two places: the hero CTA and pricing CTAs. Never a general button colour** — this is a hard brand rule, not a style preference, and the live site currently violates it (terracotta/orange used as a general accent throughout).
- **Card**: white, 8px radius, 1px `#E8E8E8` hairline, 20–24px padding. Variants: default, `stat` (teal top border), `dark` (Dark Navy bg + gold eyebrow).
- **Input**: 44px (36px compact), border `#D0D0D0` → 2px teal on focus, 2px `#DC3545` on error.
- **Badge**: 20px pill, Inter Bold 10px, teal/gold/red/grey variants.
- **ChatBubble**: bot = Mint Light, left-aligned; user = Deep Teal, right-aligned; 12px radius; bot messages carry citation + confidence, non-negotiable.
- **BotAvatar**: circular, QT symbol centred, Deep Teal bg/white icon; sizes fixed at 80/56/40/28px; `thinking` state = light-teal pulse ring, `error` state = red ring.

Full inventory (19 components) already exists as working React source in the Claude Design project (`components/*/*.jsx`) — pull these in directly via `DesignSync` rather than re-implementing from scratch; they're already built to spec.

## 6. Responsive

The source brand kit doesn't define web breakpoints (it's a Figma brand-asset kit, artboard-based, not a responsive spec) — this is an **evolvable** decision, not a locked one. Recommendation: standard Tailwind v4 defaults already available in the live stack (`sm` 640 / `md` 768 / `lg` 1024 / `xl` 1280), rather than importing the abandoned Framer plan's bespoke 810px/1200px stops, since the live site is Tailwind-native and matching its own framework's defaults reduces one more source of drift. Step `--page-margin` down at `md`: 80px desktop → 24px mobile, matching the pattern already present in the live site's section padding.

## 7. Icons

The brand kit defines none beyond the QT symbol itself (`02_BRAND_SOURCE_OF_TRUTH.md`, Missing). The live site currently uses `lucide-react`, already installed — this happens to be the exact library the brand kit's own readme recommends as the closest substitute ("thin, geometric, unfilled character") if no real set is supplied. No change needed here; flag to the brand owner that a real icon set, if one exists, would still be preferred.

## 8. What changes vs. what stays, concretely

| File | Action |
|---|---|
| `src/index.css` | Full token replacement per §1–§4 above |
| `src/components/ui/*` (shadcn primitives) | Keep the Radix behaviour; restyle via the token swap — most should "just work" once CSS variables change, since shadcn consumes the same variable names already |
| `src/pages/landing-page.tsx` | Rebuild per `06_HOMEPAGE_STORY.md`, not a find-replace — structure changes (chapters, not the current 7-section layout), not just colours |
| `src/lib/leads.ts` | No change — working, brand-agnostic |
| New: `src/components/brand/` | Pull `Logo`, `BotAvatar` from the Claude Design source directly |
| New: `src/components/chat/ChatBubble.tsx` | Pull from source, replace the live site's inline `ChatbotDemo` markup |
