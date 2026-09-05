# Brand Source of Truth

Extracted directly from the `qualitracker-io` Claude Design system (`claude.ai/design/p/d0356225-4765-462a-9902-0f998d35a197`), which itself was generated from the QualiTracker Figma Brand Identity Kit 2026. Where that system's own `readme.md` flags something as a gap, it's reproduced as a gap here — nothing below is invented.

## Company context (for reference, not decoration)

Qualitracker Limited · product QualiTracker · tagline *"Quality that works for every lab"* · HealthTech / Laboratory QMS SaaS · Tanzania, East Africa · standards: ISO 15189, WHO LQMS, SLIPTA/SLMTA · brand essence: **"Quality Through Digital Precision."**

Two-layer product: **QMS Module** (versioned document/record repository) + **QualiBOT** (RAG chatbot grounded in the lab's own documents, source-cited).

## LOCKED brand elements

These define the identity. Do not vary them by creative direction.

**Colour**
- `#025561` Deep Teal — primary: headers, CTAs, links, the mark
- `#1A3A4A` Dark Navy — body text, dark backgrounds, footers
- `#C9A84C` Quality Gold — premium accent **only**: hero CTA, pricing CTA, section rules, certification marks. Never a general button colour, never a text colour on white at body sizes (fails contrast — use `#9D833B` when gold must be text).
- `#FFFFFF` Clinical White — default background; layouts start white and stay white
- Secondary: `#E6F4F1` Mint Light, `#F4F6F7` Lab Grey, `#666666` Body Grey, `#1C2833` Near Black, `#E0E0E0` Border Grey
- Status (closed set, never decorative): success `#28A745`, warning `#FFC107`, error `#DC3545`, info = Deep Teal, loading `#019288`
- Data viz series order, fixed: Deep Teal → Quality Gold → Light Teal `#5FBFC1` → red for out-of-range. Gridlines `#E8E8E8`, never heavier.
- No gradients anywhere in the source kit.

**Typography**
- Playfair Display Bold — editorial headlines only (covers, heroes, campaign banners), 56–72pt
- Poppins Bold/SemiBold — section headers, product names, UI headers, metric values
- Inter — everything read at length: lead, body, caption, labels, buttons, table data
- Roboto Mono — developer/technical surfaces only, not a general UI font
- The signature move: **eyebrow** — Inter Bold 10px, 0.1em tracking, uppercase, Deep Teal — sitting above a Poppins title, with a short 4px gold rule underneath. This three-part stack opens nearly every section in the brand.

**Surfaces, borders, elevation**
- The brand works in **hairlines, not shadows.** Cards: white, 8px radius, 1px `#E8E8E8` inset border. Real drop shadows appear *only* where something floats above the page (toast, dropdown, modal).
- Accent strips carry meaning, not decoration: 6px teal strip on a login card, 3px teal top border on a stat card, 4px left strip on a toast (coloured by state), 4px gold rule under a section title.
- Corner radii follow the surface, not one global value: 4px controls, 6px product metric tiles/charts, 8px marketing cards/toasts/dropdowns, 12px modals/chat bubbles/login card, 14px large brand-pillar cards, full for badges/dots.

**Motion**
- Calm and clinical. 120–180ms, `cubic-bezier(0.2,0,0.2,1)`, colour/background only. **No bounce, no scale-on-hover, no parallax.**
- Hover is a colour shift: primary → `#013D46`, secondary → teal-tinted fill, gold → `#B89640`, ghost → Lab Grey fill. Press does not shrink or move anything.
- The *only* animation the source kit itself specifies: QualiBOT's thinking state, a pulsing 2px `#5FBFC1` ring.
- This is the tightest constraint against the master prompt's ask for expansive, "living" motion — see `04_CREATIVE_DIRECTIONS.md` for how each direction handles that tension honestly rather than ignoring it.

**Logo**
- One real component family: `Logo Mark / Qualitracker`. Dual-tone lockup on white; reversed lockup on Dark Navy/Deep Teal; deep-teal single-colour for print. Never stretched, recoloured outside the palette, rotated, or given a shadow/effect. Minimum sizes: lockup 120px wide (25mm print), symbol 24×24px, favicon 16×16px, social avatar 40×40px.

**Voice**
- Style: Clinical · Confident · Grounded · Modern · Warm. Behaviour: Empowering · Inclusive · Expert · Trustworthy · Direct.
- Sentence case everywhere; `ALL CAPS` only for eyebrows/labels, always 0.1em tracking. Never emoji. `·` as the separator in eyebrows/footers.
- Numbers are always concrete and sourced ("98.2% pass rate"), never a vague superlative.
- Every AI (QualiBOT) output: cites its source, shows a confidence level, and carries *"AI-generated, verify critical decisions with lab supervisor"* plus *"This is not a diagnostic tool."* Non-negotiable, and the closest thing this brand has to Graphify's provenance-tagging — see `03_GRAPHIFY_EXPERIENCE_ANALYSIS.md`.

## EVOLVABLE elements

Room to elevate without breaking the identity:

- **Motion vocabulary beyond hover states.** The source kit only specifies static UI states (it's a Figma brand kit, not a web-interaction spec) plus one thinking-ring animation. Scroll reveals, staggered grids, and connective motion between diagram nodes are all *additions* the kit doesn't forbid — they just need to stay inside the calm/clinical, colour-and-opacity-only, no-bounce constraint already set.
- **Diagram and data-visualisation *forms*.** The kit fixes the *palette* (teal/gold/light-teal/red, `#E8E8E8` gridlines) and names two signature graphics (Levy–Jennings charts, accreditation-readiness bars) but doesn't forbid new diagram types — an architecture diagram or a relationship map is a legitimate extension of "information design is part of the identity here" (readme §4), as long as it uses the fixed series palette.
- **Section/page density and rhythm.** Eyebrow → Poppins title → gold rule is fixed; how much content sits under it, how many sections a page has, and the page grid rhythm are open.
- **Dark-mode application.** Dark mode is fully tokenised (surfaces flip to Dark Navy/Near Black, action colour lightens to `#5FBFC1`) but the kit doesn't specify *which* website sections should use it — that's a page-design decision, made in `06_HOMEPAGE_STORY.md`.

## MISSING elements (the kit's own gaps — do not invent to fill these)

- **No icon library.** The Figma source defines zero icons beyond the QT symbol itself. The system's own recommendation, if a full icon set is needed: Lucide, 1.5–2px stroke, 16–20px, `currentColor` — closest match to the kit's thin/geometric/unfilled character. Ask the brand owner for a real set before defaulting to this.
- **No photography, no illustration.** The visual language is flat colour, type, and data graphics only. Any imagery need (team photos, lab photos) has no brand precedent yet — treat as a genuinely open design decision, not a filled-in gap.
- **No text styles in `fig-typography.css`** (the file is empty in the source — the Figma file defines no formal type-style objects, only the prose sizes captured in `tokens/typography.css`).
- **Corporate document system** (letterhead, certificates, invoices, email signature, LinkedIn banner) is specified in the original brand kit but not built into any code system yet — out of scope for the website work, flagged in case it's wanted later.
- **Fonts are CDN-loaded** (Google Fonts), no self-hosted binaries supplied. Fine for the live site; flag if offline/self-hosted delivery ever matters for low-bandwidth users (genuinely relevant given the target market — see the audit).

## The core tension this system creates (name it now, resolve it per-direction)

The brand is explicitly **restrained**: hairlines not shadows, colour-shift hover not scale, one specified animation total, no gradients, no illustration, no photography. The master prompt asks for "living," Graphify-calibre interactivity. These are not automatically compatible. `04_CREATIVE_DIRECTIONS.md` treats this directly rather than quietly picking a side — each of the three directions states explicitly how far it pushes past the kit's stated motion ceiling, and why that's still "evolving" rather than "replacing" the brand.
