# Graphify Experience Analysis

Based on directly browsing graphify.com (not assumption) — full page text and visual inspection captured this session. Correcting a premise up front: **Graphify is not a dark, particle-heavy, WebGL "infrastructure company" site.** It's a restrained, confident, forest-green (not black) marketing site for a single open-source CLI tool ("the code knowledge graph for AI coding assistants"), with one real interactive artifact (a graph visualisation) and otherwise fairly conventional sections, executed with unusual specificity and discipline. That distinction matters — it means the real lessons are about *rigor and provenance*, not visual maximalism, which is good news given `02_BRAND_SOURCE_OF_TRUTH.md`'s restrained motion system.

For each idea: why it works → the underlying principle → whether to adopt it → how it translates to QualiTracker → how to make it ours, not theirs.

---

### 1. Provenance tagging as a structural, recurring visual device

**What it is.** Every factual claim on the page — GitHub star count, PyPI downloads, a graph edge, an FAQ answer — carries a small tag: `EXTRACTED`, `INFERRED`, or `AMBIGUOUS`. It's not a one-off callout; it's a vocabulary applied consistently across hero stats, the graph legend, and the product's own file format (`graph.json`).

**Why it works.** It turns "trust us" into a visible, falsifiable mechanic. The site doesn't *claim* honesty, it *demonstrates* a system for it, repeatedly, until the visitor internalises the vocabulary.

**Adopt?** Yes — and this is the single strongest match in the whole analysis, because **QualiTracker already has the identical mechanic, unbuilt on the website.** The brand kit mandates that every QualiBOT answer cites its source and shows a confidence level, with a mandatory "AI-generated, verify critical decisions with lab supervisor" footer (`02_BRAND_SOURCE_OF_TRUTH.md`, Voice). That's QualiTracker's own extracted/inferred/ambiguous system. It has simply never been made visible and recurring across the *website*, the way Graphify makes its tagging recurring across its.

**Translation.** Don't invent a new confidence vocabulary — surface the one QualiBOT already uses (cited source · confidence level · verify-with-supervisor disclaimer) as a repeating visual motif: in the chatbot demo, in a "how QualiBOT decides" explainer, possibly in the document-control audit-trail section (every version change *is* an evidenced, timestamped, non-deletable log entry — the same "prove your work" instinct applied to compliance rather than code).

**Make it ours.** Graphify's tags are `EXTRACTED`/`INFERRED`/`AMBIGUOUS` because it's reasoning about code structure. QualiTracker's real equivalent is already named in the source material: a QualiBOT answer is grounded in an actual SOP citation, or it explicitly says "I couldn't find a relevant SOP" (see the live site's own `ChatbotDemo` "missing" state — it already does this instinctively, just needs restyling to the real brand and reframing as *the* signature trust device, not an incidental feature demo).

---

### 2. One real, interactive artifact built from real data — not a decorative diagram

**What it is.** "SEE IT — Your whole codebase, as one graph" renders an actual graph of a real repository (their own, or FastAPI's), with a numbered legend explaining exactly how to read it (node = symbol, size = connectedness/"god node", colour = auto-detected module, line = import/call), plus a working community filter.

**Why it works.** It's the product, running, on real data, annotated so a first-time visitor can read it in seconds. Not an abstract "technology visualization" — a specific, labelled, literal picture of what the tool actually produces.

**Adopt?** Yes, but the honest version, not the generic one. `06_HOMEPAGE_STORY.md` proposes the accreditation-readiness widget already sketched in the brand kit's own `Marketing.jsx` (document control 96%, quality records 88%, internal audit 71%, CAPA 64%, proficiency testing 90%) as this artifact's QualiTracker equivalent — a real visualisation of what the *product* actually tracks, not an invented "node graph of our technology ecosystem" with no referent in the real product.

**Make it ours.** Graphify's artifact is inherently about connectivity (graphs suit code). QualiTracker's product is inherently about *state and trend* (percentage complete, in/out of range, overdue) — a progress/status visualisation, not a network diagram, is the honest translation. Forcing a node-graph onto a compliance product would be exactly the "Graphify's brand, our content" mistake the brief explicitly rejects.

---

### 3. Hyper-specific, linked social proof — never a logo wall

**What it is.** 114,723 GitHub stars, 6.3M+ PyPI downloads, named companies (Rootly AI Labs, Superagent, HKUST KnowComp) each with a real attributed quote (named person, named title, named company), a running public changelog (`v0.9.53 — Aug 30, 2026`), and a full "in the press" section where every single item links to the original external source.

**Why it works.** Every claim is checkable in one click. Nothing is asserted without a name and a link attached.

**Adopt?** Yes, as a standard, not an aspiration — this is squarely why `01_EXISTING_BRAND_AUDIT.md` treats every unverified number (13–31×, R²=0.81, NPHL Tanzania) as blocked until confirmed rather than reused as-is. Graphify's discipline here is the reason this analysis insists on that checklist.

**Translation.** Whatever ships in a "proof" section — pricing, a client name, a research citation — needs the Graphify standard applied: a real name attached, a real link or citable source, nothing presented as generic ("labs across the region trust us") when a specific fact is available.

---

### 4. The comparison table as a primary content device, not an afterthought

**What it is.** A three-way table — Graphify vs. Vector DB/RAG vs. Grep — across five dimensions (structure, provenance, on-device, works-in-any-assistant, licence). Plain, dense, no persuasion copy, just facts arranged for fast comparison.

**Why it works.** It respects a technical reader's time and intelligence — it's an argument made through structure, not adjectives.

**Adopt?** Yes — this maps directly onto the brand kit's own, already-planned "Advantage Matrix" (paper vs. Western enterprise QMS vs. QualiTracker), which the audit already flags as a strong device needing verified numbers. Graphify validates the *pattern*; it doesn't change what QualiTracker should put in it.

---

### 5. The step sequence ("STEP 01 / 02 / 03") for showing how the product works

**What it is.** Install → get the graph → query. Three steps, each with a literal terminal command shown, no narrative padding.

**Why it works.** For a CLI tool, showing the actual commands *is* showing the product — there's no gap between the marketing description and the real interaction.

**Adopt, translated.** QualiTracker isn't a CLI tool, so literal terminal commands would be theatre, not honesty (the brief's own rule 18: "technical demonstrations must be real"). The equivalent honest artifact is the real product flow already named in the brand material: upload/version a document → QualiBOT indexes it → staff ask a question in plain language → answer returns with citation. Same three-beat structure (input → system does its real job → verifiable output), executed in QualiTracker's actual medium (a QMS record and a chat answer, not a shell prompt).

---

### 6. A named "Trust" section that turns a concern into a confident claim

**What it is.** A section literally titled "TRUST — Your code never leaves your machine," breaking a security worry into concrete sub-claims (on-device, no telemetry, Apache 2.0 auditable, self-hostable).

**Why it works.** It doesn't bury the objection in an FAQ footnote — it gives the strongest counter-argument its own prominent, confidently-named section.

**Adopt?** Yes, and QualiTracker has an even more load-bearing version of this available: multi-tenant data isolation (`get_lab_filter` protocol, per the old copy doc — confirm this is still accurate before using it), SADCAS/ISO audit-readiness, and the "this is not a diagnostic tool" AI disclaimer are all real trust concerns for a regulated health-data product. Worth its own section, named as directly as Graphify names theirs, once the underlying claims are verified.

---

### 7. Segmented dual-audience section ("Pick your door": For Developers / For Teams)

**What it is.** Two clearly labelled tracks with different value props for different readers, rather than one undifferentiated feature list.

**Why it works.** It's a lightweight, real version of progressive disclosure — not five elaborate "explorer/decision-maker/technical-leader/engineer/researcher" personas, just two that actually exist for this product.

**Adopt, right-sized.** The brand kit's own audience list (Lab Directors/Quality Managers/Accreditors for the QMS layer; frontline technologists for QualiBOT — see the Framer copy doc's "Two-Layer Platform Architecture" tab switcher, itself a real, already-drafted version of this exact pattern) is the honest QualiTracker equivalent. Two tracks, not five invented depth-levels.

---

### 8. Restrained visual identity: the "wow" is rigor, not spectacle

**What was actually observed, for the record:** dark forest-green (not black) hero, bold geometric sans display type, a node-graph line-art logo mark, pill-shaped full-radius nav and buttons, mono-uppercase eyebrow labels with small coloured status dots, sparse faint mathematical/logic glyph watermarks in the background texture, a functional (not decorative) `>_` terminal glyph on the CTA. No visible WebGL, no particle systems, no 3D. The motion budget appeared to be scroll reveals and hover states — not the elaborate "cinematic chapters" or "camera pulls outward" language from the original brief's imagined version of Graphify.

**Why this matters here.** It confirms the brief's own rule 4 ("do not assume 'technical' means black background + neon green + monospace") from direct observation, not just as a stated preference. The real lesson from Graphify's visual restraint is compatible with — not in tension with — the brand kit's own restrained, hairline-and-flat-colour system. Neither site needs maximal visual noise to read as serious; both get there through specificity and consistency instead.

---

## Summary: what to actually take from Graphify

Not a colour palette, not a node-graph widget, not a dark theme. Four transferable disciplines:
1. Make QualiBOT's existing citation/confidence system the site's visible trust motif (§1).
2. Visualise something the product genuinely tracks, with a legend, not an invented abstract "ecosystem" (§2).
3. Attach a name and a link to every proof point; verify before publishing anything that can't be (§3, and the audit's checklist).
4. Give the real security/compliance story its own confidently-named section once verified (§6).
