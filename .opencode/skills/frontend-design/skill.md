---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with a clear aesthetic direction and high design quality. This skill generates real, working UI code while enforcing strong design systems, avoiding generic AI aesthetics, and maintaining engineering best practices.
---

## Purpose

This skill generates **visually striking, production-ready frontend interfaces** with:

- a clearly defined aesthetic direction
- consistent design systems (tokens, typography, spacing)
- high-quality code structure
- intentional, non-generic design decisions

It is both:
- a **UI generator**
- a **design system builder**

---

## When to Use

Invoke when:

- building UI components, pages, or full interfaces
- improving or redesigning an existing frontend
- creating landing pages, dashboards, or visual artifacts
- enhancing UX, layout, or visual hierarchy
- applying a consistent design system
- adding animations or visual polish

---

## Execution Pipeline

### 1. Context Intake
- identify purpose, audience, and use case
- detect platform (web, dashboard, landing page, etc.)
- extract constraints (framework, performance, accessibility)
- check for provided tech stack

---

### 2. Aesthetic Direction Selection

Choose ONE clear direction:

Define:
- visual style (e.g. brutalist, luxury, editorial, futuristic, organic)
- tone (minimal, maximal, playful, industrial, etc.)
- visual density (sparse vs dense)
- motion philosophy (subtle vs expressive)

CRITICAL:
Commit fully to the direction. No blending of conflicting styles.

---

### 3. Design System Definition

Define and use:

#### Color System
- primary
- secondary
- background
- accent
- text
- CSS variables required

#### Typography
- display font
- body font
- scale (h1 → caption)
- hierarchy must be clear

#### Spacing
- consistent spacing scale (4, 8, 16, 24, etc.)
- avoid arbitrary values

#### Visual System
- border radius rules
- shadow system (if used)
- layering rules

---

### 4. Layout & Composition Planning

Before coding:

- define layout structure
- establish hierarchy
- decide grid vs freeform
- introduce asymmetry or rhythm where appropriate

---

### 5. Implementation

Generate:

- production-ready code
- modular structure
- reusable components
- responsive layout

Follow:
- separation of concerns
- accessibility standards
- clean structure

---

### 6. Refinement Pass

Improve:

- spacing consistency
- alignment precision
- visual rhythm
- interaction polish

Remove:
- unnecessary elements
- inconsistent styling
- visual clutter

---

### 7. Output

Return:

1. Design Intent Summary
2. Full Implementation Code
3. Optional Notes (if needed)

---

## Design Intent Summary (Required)

Before code, output:

- aesthetic direction
- typography pairing
- color philosophy
- layout concept
- key differentiator

Keep concise.

---

## Design Token Rules (Enforced)

All outputs MUST:

- use CSS variables for colors
- use a consistent spacing scale
- define typography hierarchy
- avoid hardcoded repeated values

---

## Anti-Generic Design Rules (Critical)

Reject outputs that include:

- generic layouts (hero + 3 cards default patterns)
- overused gradients or predictable palettes
- default/system fonts
- repetitive AI-like styling

Each design MUST include at least ONE:

- unconventional layout
- distinctive typography pairing
- unique motion behavior
- unexpected spatial composition

---

## Code Quality Requirements

- modular, reusable components
- no excessive inline styles
- semantic HTML
- accessible structure (ARIA where needed)
- responsive by default
- clear separation of logic and UI

---

## Tech Stack Awareness

If stack is provided, adapt accordingly:

### React
- functional components only
- hooks for logic
- component modularity

### Tailwind
- utility-first styling
- avoid bloated class chains
- maintain readability

### Vanilla CSS / HTML
- use CSS variables
- structured class naming

### Next.js
- optimize for SSR
- proper routing structure

DO NOT default to generic HTML if a stack is specified.

---

## Output Modes

### 1. Full Build Mode
- complete UI implementation

### 2. Enhancement Mode
- improve existing UI

### 3. Design System Mode
- tokens, typography, visual rules only

### 4. Rapid Prototype Mode
- simplified but visually strong

---

## Complexity Scaling

Match requested complexity:

- low → simple, clean UI
- medium → structured with interactions
- high → advanced layouts, animations, polish

Do NOT overbuild unnecessarily.

---

## Motion Guidelines

- prioritize high-impact moments
- use staggered animations for entry
- prefer CSS-based animations when possible
- avoid excessive micro-interactions

---

## Iteration Hooks

Outputs must support:

- refinement by design-review skills
- validation by best-practices skills
- reuse in component systems

Code must be easy to modify.

---

## Anti-Patterns (Strict)

- generic UI layouts
- inconsistent spacing
- overuse of effects without purpose
- tightly coupled components
- unreadable styling logic

---

## Final Rule

Every output must feel:

- intentional
- distinctive
- production-ready
- visually memorable

No two outputs should feel the same.
