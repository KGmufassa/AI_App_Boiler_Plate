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

## 5. Page And Surface Inventory

List the core surfaces the layout must support:

- landing or entry surface:
- onboarding or setup surface:
- primary workspace:
- detail or settings surface:
- review or approval surface:
- output, export, or publish surface:
- error or recovery surface:
- admin or internal surface if needed:

---

## 6. Responsive Behavior Rules

- what collapses on smaller screens:
- what remains pinned on larger screens:
- which actions move into menus or drawers:
- minimum viable mobile workflow:
- screens that are desktop-only:
- screens that need separate mobile composition:

---

## 7. Visual Direction Options

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

## 8. Recommended Visual Direction

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

## 9. Core Visual System Decisions

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

## 10. Interface Rules

- how primary actions should stand out:
- how destructive actions should appear:
- how empty states should feel:
- how loading states should feel:
- how error states should feel:
- how data-dense screens should be handled:
- how marketing surfaces should differ from product surfaces:

---

## 11. Accessibility Rules

- accessibility baseline:
- minimum contrast expectations:
- reduced motion expectations:
- visual accommodations needed for dense workflows:

---

## 12. Rejected Options

Record rejected layout and visual direction options:

- option name:
- option type: layout or visual direction
- reason rejected:
- what would need to change for it to become viable:

---

## 13. Frontend Planning Implications

- required route structure:
- shared layout components:
- reusable page shell requirements:
- state that must survive navigation:
- components that need responsive variants:
- screens needing higher design investment:
- accessibility risks introduced by the experience model:

---

## 14. Freeze Rule

The frontend experience is considered frozen when:

- the general UI structure is approved
- the primary navigation model is approved
- responsive behavior is defined
- visual direction is approved
- accessibility expectations are defined
- the workflow plan and slice plans align with the chosen experience

If the frontend experience changes later, reopen:

- Stage 3 workflow planning
- any affected slice implementation plans
- any affected frontend task lists
