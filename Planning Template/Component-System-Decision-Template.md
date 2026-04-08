# Component System Decision Template

## Purpose

Use this document to decide how the frontend UI system will actually be built after the general layout and visual direction are known.

This is the bridge between design intent and implementation mechanics.

It should define whether the product uses a third-party component library, a custom system, a hybrid model, and how design tokens and reusable primitives will be handled.

---

## 1. Decision Summary

- Product or app name:
- Decision date:
- Decision owner:
- Depends on approved layout plan:
- Depends on approved visual direction plan:
- Decision status: proposed, approved, frozen

---

## 2. Product And Team Constraints

- MVP speed pressure:
- expected UI complexity:
- number of core surfaces:
- number of forms or data-heavy screens:
- number of highly custom workflows:
- accessibility requirements:
- design team involvement:
- frontend team size:
- existing component assets or libraries:

---

## 3. System Model Options

List the serious options only.

Examples:

- off-the-shelf component library with minimal overrides
- headless primitives plus custom styling
- fully custom component system
- hybrid system with utility styling and selected primitives
- design-system-first monorepo package

For each option, describe:

- option name
- best-fit use case
- strengths
- weaknesses
- where it becomes too rigid or too expensive

---

## 4. Recommended Component Strategy

Freeze the implementation approach:

- strategy type:
- component library choice:
- primitive or headless foundation:
- styling approach:
- token system approach:
- icon system approach:
- form system approach:
- table or data-grid approach:
- overlay and modal approach:
- charting or rich UI dependencies:
- animation approach:

---

## 5. Design Token Rules

Define what must become reusable tokens:

- color tokens:
- typography tokens:
- spacing tokens:
- radius tokens:
- shadow or elevation tokens:
- motion tokens:
- breakpoint tokens:
- z-index or layering tokens:

Also define:

- token source of truth:
- where tokens live in the repo:
- how tokens reach components:

---

## 6. Build Vs Buy Decisions

For each important UI area, decide whether to build or adopt:

- buttons and form controls:
- navigation primitives:
- dialogs, popovers, and drawers:
- data tables:
- charts:
- editor or canvas controls:
- command palette:
- toasts and notifications:
- date or time pickers:
- upload components:

For each item, note:

- build, buy, or hybrid
- reason
- risk

---

## 7. Reuse And Customization Rules

- when standard components are sufficient:
- when custom components are justified:
- allowed customization depth for third-party components:
- consistency rules across product surfaces:
- how product-specific variants should be named:
- how experimental UI should be isolated:

---

## 8. Frontend Architecture Implications

- folder or package structure:
- shared component package needed or not:
- Storybook or isolated component environment:
- testing strategy for components:
- accessibility verification approach:
- performance risks from the chosen system:

---

## 9. Rejected Options

For each rejected system option, note:

- option name
- reason rejected
- what would need to change for it to become viable

---

## 10. Freeze Rule

The component system is considered frozen when:

- the component strategy is approved
- token rules are defined
- build-vs-buy decisions are defined for major UI areas
- the layout plan, visual direction plan, and frontend slice plans align with the chosen system

If the component system changes later, reopen:

- Stage 3 frontend planning
- any affected slice implementation plans
- any affected frontend task lists
