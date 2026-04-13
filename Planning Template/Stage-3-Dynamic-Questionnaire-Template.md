# Stage 3 Dynamic Questionnaire Template

## Purpose

Use this questionnaire to resolve only the frontend planning ambiguity that remains after Stage 1 and Stage 2 artifacts have been read.

This questionnaire exists to:

- minimize redundant questioning
- derive as much as possible from earlier planning artifacts first
- ask only unresolved UI/UX and frontend experience questions
- gather enough clarity to complete:
  - `Primary-UX-And-Interaction-Plan`
  - `Page-Architecture-Plan`
  - `Frontend-Experience-Decision-Plan`
  - `Component-System-Decision-Plan`
  - `Page-Component-Mapping-Plan`
  - `State-And-History-Plan`
  - `Fallback-And-Recovery-UX-Plan`
  - `Artifact-Or-Output-Lifecycle-Plan`

---

## Questionnaire Policy

Before asking any question:

1. Read the available Stage 1 and Stage 2 outputs first.
2. Prefill anything already implied by:
   - PRD and intake artifacts
   - workflow definition
   - domain model
   - API and runtime contracts
   - existing route or page candidates already locked in planning
3. Ask only when:
   - multiple valid UI/UX interpretations remain
   - visual direction is still unclear
   - page hierarchy cannot be derived safely
   - interaction behavior would otherwise be guessed
   - state or recovery behavior would otherwise be guessed

Question rules:

- ask one question at a time
- prefer multiple-choice framing when possible
- ask only the next highest-impact unresolved question
- stop asking once Stage 3 freeze criteria can be satisfied without guessing

---

## Derived-First Inputs

These should be derived before questioning:

- app name
- primary platform if already implied
- known user roles
- core workflows
- likely main feature surfaces
- likely need for dashboard, settings, auth, detail, review, output, and admin surfaces
- likely route hierarchy implied by features
- likely state-heavy surfaces

Do not ask about these unless the source artifacts conflict or leave major ambiguity.

---

## Core Decision Tree

### Cluster 1: Platform And Device Priority

Ask only if device emphasis is unresolved.

Question:

- What is the primary experience target for Stage 3?
  - desktop-first
  - mobile-first
  - tablet-first
  - responsive parity across desktop and mobile

Why this matters:

- affects shell model
- affects page composition
- affects navigation depth
- affects responsive behavior rules

---

### Cluster 2: App Shell And Navigation Model

Ask only if multiple layout models are still plausible.

Question:

- Which shell best fits the primary workflow?
  - top navigation with content area
  - sidebar workspace
  - tabbed product shell
  - wizard or step flow
  - split-pane workspace
  - hybrid shell

Follow-up only if `hybrid shell` is chosen:

- What is the division of responsibility between the shell layers?

Why this matters:

- determines page hierarchy
- determines clickable navigation classes
- determines subpage patterns

---

### Cluster 3: Canonical Main Pages

Ask only if page inventory cannot be derived confidently from the PRD and workflows.

Question:

- Which of these main pages are required for MVP?
  - landing page
  - onboarding or setup
  - home
  - dashboard
  - primary workspace
  - detail page
  - settings
  - review or approval
  - output or export
  - admin or internal

Follow-up only if the answer leaves ambiguity:

- Which page is the main daily-use surface?

Why this matters:

- locks the canonical page inventory
- prevents duplicate top-level surfaces

---

### Cluster 4: Subpage And Drill-Down Behavior

Ask only if the feature set implies nested views but the depth is unclear.

Question:

- How should deeper product surfaces usually open?
  - dedicated subpages
  - detail pages
  - modals or drawers
  - tabs within a parent page
  - mixed depending on context

Follow-up only if `mixed depending on context`:

- Which actions should open full subpages versus overlays?

Why this matters:

- defines subpage derivation rules
- affects route hierarchy and state persistence

---

### Cluster 5: Clickable Component Strategy

Ask only if interaction density or component style is unclear.

Question:

- What is the dominant interaction style for core actions?
  - obvious buttons and visible controls
  - compact toolbar and menu-driven controls
  - card-driven interactions
  - table or list row interactions
  - mixed depending on page type

Why this matters:

- determines clickable component inventory
- affects page structure and visual density

---

### Cluster 6: Settings And Configuration Depth

Ask only if settings or configuration is present in the PRD but its structure is unclear.

Question:

- How should configuration be organized?
  - one settings page
  - settings with category subpages
  - contextual settings inside relevant pages
  - hybrid global settings plus contextual settings

Why this matters:

- creates predictable settings subpages
- affects component and route structure

---

### Cluster 7: State And Recovery Visibility

Ask only if error, loading, review, or long-running output behavior is unresolved.

Question:

- How visible should loading, background work, and recovery states be?
  - lightweight inline feedback
  - strong persistent status areas
  - notification-driven
  - mixed by workflow severity

Why this matters:

- affects state planning
- affects fallback and recovery UX
- affects shell and status region needs

---

### Cluster 8: Visual Direction

Ask only if product tone is still ambiguous.

Question:

- Which visual direction is the closest fit for the product?
  - clean utilitarian SaaS
  - premium minimal
  - technical operator console
  - editorial and content-forward
  - playful consumer
  - creative tool workspace

Follow-up:

- What should the product feel like in 3-5 words?

Why this matters:

- drives visual system decisions
- affects density, emphasis, and surface differentiation

---

### Cluster 9: Density And Data Presentation

Ask only if the product includes dense data or operational views.

Question:

- How dense should high-information screens be?
  - spacious and simplified
  - balanced
  - dense and operational

Why this matters:

- affects tables, cards, page structure, and accessibility accommodations

---

### Cluster 10: Accessibility And Motion Expectations

Ask only if accessibility posture is not already explicit.

Question:

- What accessibility and motion baseline should Stage 3 assume?
  - standard accessible baseline
  - strong accessibility baseline with reduced-motion preference
  - high-accessibility or dense-workflow accommodations required

Why this matters:

- affects interaction rules
- affects visual system decisions
- affects component system decisions downstream

---

## Dynamic Stop Rules

Stop asking questions when all of these can be completed without guessing:

- main pages
- subpages
- clickable component inventory
- page structure and component placement
- responsive behavior rules
- visual direction
- interface rules
- accessibility rules

If a later question would only refine style but not change Stage 3 structure or freeze-critical behavior, stop and draft the plan.

---

## Suggested Output Schema

Use the questionnaire to populate an internal object like:

```json
{
  "stage3_answers": {
    "device_priority": "",
    "shell_model": "",
    "main_pages": [],
    "subpage_model": "",
    "interaction_style": "",
    "settings_structure": "",
    "state_visibility": "",
    "visual_direction": "",
    "design_keywords": [],
    "density_level": "",
    "accessibility_baseline": ""
  },
  "derived_inputs": {
    "features": [],
    "roles": [],
    "workflows": [],
    "existing_page_candidates": []
  },
  "unresolved_items": []
}
```

---

## Recommended Run Order

1. Derive everything possible from Stage 1 and Stage 2.
2. Ask Cluster 1 only if device priority is unresolved.
3. Ask Cluster 2 before asking page or component-detail questions.
4. Ask Clusters 3 through 7 to lock structure.
5. Ask Clusters 8 through 10 to lock visual and accessibility direction.
6. Stop and draft Stage 3 once freeze-critical ambiguity is gone.

---

## Implementation Notes

This questionnaire should be used by `plan-stage3-core` as a dynamic clarifier, not as a fixed interview script.

It should:

- skip answered or derivable sections
- ask only the next blocking question
- prioritize architecture questions before style questions
- prefer shorter answer sets over open-ended discovery when possible
