# Frontend Experience Decision Template

## Purpose

Use this document to decide the structural and visual direction of the product interface before detailed frontend implementation planning begins.

This document combines:

- general UI layout decisions
- visual design direction decisions

It should freeze how the product is organized, how key workflows are surfaced, and what overall interface character the product should express.

---

## 1. Decision Summary

- Product or app name:
- Decision date:
- Decision owner:
- Primary platform: web, mobile, desktop, tablet, hybrid
- Decision status: proposed, approved, frozen

---

## 2. Product Flows Driving The Experience

- Primary user journey:
- Highest-frequency workflow:
- Most complex workflow:
- Must-be-visible information at all times:
- Must-be-available actions at all times:
- Context that should stay persistent across screens:

---

## 3. Layout Model Options

List the serious layout candidates only.

Examples:

- dashboard with top nav and content area
- left navigation with detail panel
- three-panel workspace
- canvas-first editor with inspector
- wizard or step flow
- feed or document-first layout
- mobile tab layout
- split-pane operational console

For each candidate, describe:

- layout name
- best-fit workflow
- strengths
- weaknesses
- where it breaks down

---

## 4. Recommended General Layout

Freeze the high-level structure:

- app shell type:
- primary navigation model:
- secondary navigation model:
- main content region:
- sidebar or inspector needs:
- persistent header or toolbar needs:
- status, notifications, or job area:
- modal, drawer, or inline editing preference:
- mobile layout model:
- tablet layout model:
- desktop layout model:

---

## 5. Canonical Page Inventory

Determine the complete page map required by the product features and workflows.

This section must identify:

- all main pages
- all subpages
- parent and child page relationships
- route hierarchy
- page purpose
- primary entry points
- primary exit paths
- user roles allowed to access each page if relevant

For each page or subpage, record:

- page name:
- page type: main page, subpage, detail page, settings page, modal route, drawer route, wizard step, or utility surface
- parent page:
- purpose:
- primary feature supported:
- entry points:
- exit paths:
- persistent context required:

Minimum expected coverage:

- landing or entry page if needed
- onboarding or setup pages if needed
- home or dashboard page if needed
- primary workspace pages
- detail pages
- settings pages and settings subpages
- review, approval, or publish pages if needed
- output or export pages if needed
- error or recovery pages if needed
- admin or internal pages if needed

---

## 6. Clickable Component Inventory

Determine all clickable or directly interactive components derived from the product features.

Every major feature must map to one or more clickable components.

For each page and subpage, list:

- component name:
- component type: nav item, button, icon button, tab, card action, table row, menu item, toggle, link, modal trigger, drawer trigger, or other
- feature supported:
- page location:
- trigger action:
- destination:
- resulting state change:
- backend dependency if applicable:
- visibility rules:

No clickable component should remain without a destination, state change, or explicit no-navigation explanation.

---

## 7. Subpage Derivation

Determine which subpages are created from user interaction with clickable components.

Subpages must be derived from real feature needs and interaction patterns, not invented arbitrarily.

For each derived subpage, record:

- subpage name:
- parent page:
- trigger component:
- why the subpage exists:
- navigation type: nested page, detail page, modal, drawer, tabbed surface, or wizard step
- primary purpose:
- return path:
- state preserved from parent:

Subpages should be derived from patterns such as:

- detail and drill-down views
- create or edit flows
- settings categories
- approval or review flows
- advanced configuration surfaces
- contextual object management

---

## 8. Page Structure And Component Placement

Determine how components are structured on each main page and subpage.

For each page and subpage, define:

- header contents:
- primary navigation:
- secondary navigation:
- main content zones:
- sidebar, inspector, or supporting panel:
- primary action area:
- secondary action area:
- status, feedback, or job area:
- persistent components:
- page-specific components:
- required states on the page:

The structure must make clear:

- where the primary user action happens
- where supporting actions live
- where navigation belongs
- how dense information is grouped
- how shared components differ from page-local components

---

## 9. Responsive Behavior Rules

- what collapses on smaller screens:
- what remains pinned on larger screens:
- which actions move into menus or drawers:
- minimum viable mobile workflow:
- screens that are desktop-only:
- screens that need separate mobile composition:

---

## 10. Visual Direction Options

List the serious direction candidates only.

Examples:

- clean utilitarian SaaS
- editorial and content-forward
- premium minimal
- playful consumer
- cinematic and immersive
- technical operator console
- creative tool workspace

For each candidate, describe:

- direction name
- best-fit use case
- strengths
- weaknesses
- where it becomes a mismatch

---

## 11. Recommended Visual Direction

Freeze the overall style:

- direction name:
- design keywords:
- desired product impression:
- trust level needed:
- energy level:
- clarity vs expressiveness balance:
- density level:
- polish level needed for MVP:

---

## 12. Core Visual System Decisions

Define the starting point for:

- typography character:
- type hierarchy:
- spacing rhythm:
- border radius character:
- elevation or depth style:
- icon style:
- illustration or photography style:
- color system character:
- contrast strategy:
- motion style:
- light, dark, or both:
- default theme:

---

## 13. Interface Rules

- how primary actions should stand out:
- how destructive actions should appear:
- how empty states should feel:
- how loading states should feel:
- how error states should feel:
- how data-dense screens should be handled:
- how marketing surfaces should differ from product surfaces:

---

## 14. Accessibility Rules

- accessibility baseline:
- minimum contrast expectations:
- reduced motion expectations:
- visual accommodations needed for dense workflows:

---

## 15. Frontend Planning Implications

- required route structure:
- shared layout components:
- shared clickable components:
- reusable page shell requirements:
- state that must survive navigation:
- components that need responsive variants:
- screens needing higher design investment:
- accessibility risks introduced by the experience model:
- page-to-component dependencies:
- component-to-subpage dependencies:
- artifact relationships affecting the interface:

---

## 16. Rejected Options

Record rejected layout and visual direction options:

- option name:
- option type: layout or visual direction
- reason rejected:
- what would need to change for it to become viable:

---

## 17. Freeze Rule

The frontend experience is considered frozen when:

- the general UI structure is approved
- the canonical page inventory is complete
- main pages and subpages are complete
- clickable component inventory is complete
- subpage derivation is complete
- page structure and component placement are complete
- the primary navigation model is approved
- responsive behavior is defined
- visual direction is approved
- accessibility expectations are defined
- the workflow plan and slice plans align with the chosen experience
- every major feature maps to at least one page
- every clickable component maps to a destination or state change
- every subpage has a valid parent or standalone route logic

If the frontend experience changes later, reopen:

- Stage 3 workflow planning
- any affected slice implementation plans
- any affected frontend task lists
