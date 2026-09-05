# Motion System

The real brand kit's motion ceiling (`02_BRAND_SOURCE_OF_TRUTH.md`): calm and clinical, 120–280ms, `cubic-bezier(0.2,0,0.2,1)`, **colour/opacity/position only — no bounce, no scale, no parallax**. Everything below stays inside that ceiling; it's an *evolution* of an under-used system, not a new one, and it uses `framer-motion`, which is already an installed, unused dependency (see `12_SKILL_GAP_ANALYSIS.md`).

## What's wrong today (concrete, not hypothetical)

`src/index.css`'s `.qt-reveal` plays once, on mount, via a plain CSS `@keyframes` with `animation: qt-reveal .7s ... both`. Because it's mount-triggered rather than scroll-triggered, a real visitor scrolling down the homepage never sees anything below the hero animate in — it already played (or didn't, if it wasn't in the viewport at load) before they get there. The one bespoke animation the brand kit itself specifies — QualiBOT's pulsing thinking-ring (`.qt-thinking` in `index.css`) — is defined but not applied to any component yet.

## Tokens (formalizing what's already in `index.css`, now paired with Framer Motion equivalents)

| Token | Value | Framer Motion equivalent |
|---|---|---|
| `duration-fast` | 120ms | `transition={{ duration: 0.12 }}` |
| `duration-base` | 180ms | `transition={{ duration: 0.18 }}` |
| `duration-slow` | 280ms | `transition={{ duration: 0.28 }}` |
| `ease-standard` | `cubic-bezier(0.2,0,0.2,1)` | `transition={{ ease: [0.2, 0, 0.2, 1] }}` |
| Reveal | `opacity: 0→1, translateY: 14px→0` | `initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:'-80px'}}` |
| Stagger (card grids) | 0.08–0.12s per item | Framer `staggerChildren` on the parent, `duration-base` per child |
| Hover | colour/background shift only | CSS `transition` stays (no Framer needed — it's already correct and cheaper) |
| Thinking pulse | 1.6s pulsing ring | Stays CSS (`@keyframes`, already correct) — apply `.qt-thinking` wherever `BotAvatar`/loading state appears |

## Rules (unchanged from the brand kit, restated so they survive the Framer Motion migration)

1. **Reveal, don't decorate.** Motion always reveals real content (a card, a diagram step, a metric) — never an abstract shape with no informational job.
2. **No scale, no bounce, no parallax**, even though Framer Motion makes all three trivially available. The constraint is deliberate brand discipline, not a tooling limitation.
3. **`once: true` on every scroll trigger.** Content reveals the first time it's scrolled to and then stays — re-triggering on scroll-up-then-down-again reads as gimmicky, not premium.
4. **Respect `prefers-reduced-motion` everywhere**, via Framer's `useReducedMotion()` hook for the new scroll reveals (the existing CSS media query in `index.css` continues to cover the CSS-only interactions like hover and the thinking pulse).
5. **Interactive diagrams keep their existing hover-driven state changes** (the RAG flow diagram, the accreditation-readiness widget) — those are correct as-is; this system is about *scroll* reveal, not about changing how the diagrams already work.

## What actually shipped this pass (see `17_WEBSITE_IMPLEMENTATION_PLAN.md` for what's deferred)

The homepage's scroll reveals were converted from mount-time CSS to real `whileInView` Framer Motion reveals — verified in-browser scrolling the actual page, not just reading the diff. Deferred to the plan: staggered reveals on the "Reality" and "Capabilities" card grids, and wiring `.qt-thinking` onto `BotAvatar`/the Ask QualiTracker demo's send-state.
