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
- Depends on approved page architecture:
- Depends on approved clickable component inventory:
- Depends on approved subpage derivation:
- Depends on approved page structure and component placement:
- Decision status: proposed, approved, frozen

---

## 2. Product And Team Constraints

- MVP speed pressure:
- expected UI complexity:
- number of core surfaces:
- number of main pages:
- number of subpages:
- number of forms or data-heavy screens:
- number of shared components:
- number of page-specific components:
- number of clickable component types:
- number of state-heavy surfaces:
- number of navigation layers:
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

## 7. Component Coverage By Surface

Map the component system to the approved page architecture.

For each main page and subpage, record:

- page or subpage name:
- required shared components:
- required page-specific components:
- required clickable components:
- required stateful components:
- required navigation components:
- required data display components:
- required form or input components:
- required feedback components:
- implementation source: library, primitive, custom, or hybrid
- notes on responsive variants:
- notes on accessibility-sensitive behavior:

This section must make clear:

- which components are reused across surfaces
- which components exist only on one page or subpage
- which interactive components need route awareness
- which components need multiple state variants

---

## 8. Clickable Component Support Requirements

Use the approved clickable component inventory from the frontend experience plan.

For each major clickable component class, define:

- component class:
- surfaces where it appears:
- interaction type:
- required behavior:
- state variants required:
- accessibility requirements:
- build, buy, or hybrid decision:
- reason:
- risk:

Minimum expected coverage:

- primary navigation items
- secondary navigation items
- buttons
- icon buttons
- tabs
- card actions
- table row actions
- menus
- modal or drawer triggers
- toggles
- links

This section must confirm that the chosen component system can support the interaction model defined in Stage 3.

---

## 9. Reuse And Customization Rules

- when standard components are sufficient:
- when custom components are justified:
- allowed customization depth for third-party components:
- consistency rules across product surfaces:
- how product-specific variants should be named:
- how experimental UI should be isolated:
- how shared components are identified across pages:
- when a subpage may introduce a page-local component:
- when a clickable component must remain system-standard:
- when state variants require a dedicated abstraction:
- how route-aware components should be handled:

---

## 10. Frontend Architecture Implications

- folder or package structure:
- shared component package needed or not:
- Storybook or isolated component environment:
- testing strategy for components:
- accessibility verification approach:
- performance risks from the chosen system:
- page shell primitives:
- route-aware navigation primitives:
- shared interaction wrappers:
- page-level layout primitives:
- state presentation primitives:
- artifact or output display primitives:
- component ownership boundaries:
- page-to-component dependency risks:

---

## 11. Rejected Options

For each rejected system option, note:

- option name
- reason rejected
- what would need to change for it to become viable
- which page or component coverage gap caused rejection:
- whether the option failed due to clickable complexity, subpage depth, or state requirements:

---

## 12. Freeze Rule

The component system is considered frozen when:

- the component strategy is approved
- token rules are defined
- build-vs-buy decisions are defined for major UI areas
- component coverage is defined for all major pages and subpages
- shared vs page-specific components are identified
- clickable component support is defined for major interaction classes
- the chosen system supports the required state variants
- the layout plan, visual direction plan, page architecture, clickable component inventory, and component placement plan align with the chosen system
- no major page or subpage depends on an undefined component strategy

If the component system changes later, reopen:

- Stage 3 frontend planning
- any affected slice implementation plans
- any affected frontend task lists
