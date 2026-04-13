---
Skill: plan-stage3-core
Description: Draft Stage 3 planning skill. Uses frozen Stage 2 context to generate only Stage 3 workflow and frontend artifacts in paired markdown/json outputs, then updates manifest/state without freezing the stage.
---

## Purpose

This skill drafts Stage 3 only.

It must:

- generate Stage 3 planning artifacts
- update `manifest.json`
- update `state.json`
- prompt for Stage 3 review before any freeze action occurs

It must not:

- freeze Stage 3
- create Stage 4 artifacts
- create slices, tasks, or tickets

## Inputs

- Stage 2 frozen workspace
- metadata from `Build Plan/Active Plans/status-report/json/`
- exact Stage 3 template dependencies:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Frontend-Experience-Decision-Template.md`
  - `Planning Template/Component-System-Decision-Template.md`
  - `Planning Template/Stage-3-Dynamic-Questionnaire-Template.md`
  - `Planning Template/Analytics-And-Success-Metrics-Template.md`

## Template Dependencies

- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/Frontend-Experience-Decision-Template.md`
- `Planning Template/Component-System-Decision-Template.md`
- `Planning Template/Stage-3-Dynamic-Questionnaire-Template.md`
- `Planning Template/Analytics-And-Success-Metrics-Template.md`

## Outputs

Markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Primary-UX-And-Interaction-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Page-Architecture-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Frontend-Experience-Decision-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Component-System-Decision-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Page-Component-Mapping-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/State-And-History-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Fallback-And-Recovery-UX-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Artifact-Or-Output-Lifecycle-Plan.md`

Conditional markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Analytics-And-Success-Metrics-Plan.md`

JSON:

- paired `.json` files for every markdown artifact above in sibling `json/`
- updated `Build Plan/Active Plans/status-report/json/manifest.json`
- updated `Build Plan/Active Plans/status-report/json/state.json`

## Instructions

- keep outputs limited to Stage 3 workflow and frontend concerns
- use `Planning Template/Stage-3-Dynamic-Questionnaire-Template.md` as the required dynamic clarification layer before drafting any Stage 3 output that remains ambiguous
- derive as much as possible from Stage 1 and Stage 2 artifacts before asking any question
- ask only unresolved Stage 3 questions, one at a time, following the questionnaire stop rules
- map outputs to these exact templates:
  - `Frontend-Experience-Decision-Plan.md` -> `Planning Template/Frontend-Experience-Decision-Template.md`
  - `Component-System-Decision-Plan.md` -> `Planning Template/Component-System-Decision-Template.md`
  - `Analytics-And-Success-Metrics-Plan.md` -> `Planning Template/Analytics-And-Success-Metrics-Template.md` when activated
  - `Primary-UX-And-Interaction-Plan.md`, `Page-Architecture-Plan.md`, `Page-Component-Mapping-Plan.md`, `State-And-History-Plan.md`, `Fallback-And-Recovery-UX-Plan.md`, and `Artifact-Or-Output-Lifecycle-Plan.md` -> the Stage 3 sections of `Planning Template/Dynamic-Build-Plan-Template.md`
- `Page-Architecture-Plan.md` must explicitly define:
  - main pages
  - subpages
  - parent and child page relationships
  - route or navigation hierarchy
  - page purpose
  - primary entry and exit paths
- `Page-Component-Mapping-Plan.md` must explicitly define:
  - which components belong to each page and subpage
  - shared vs page-specific components
  - which artifacts govern each component or page area
  - how components relate to states, navigation, and output artifacts
- set state to `stage_3_drafting`
- verify all required markdown/json outputs exist and are non-empty before finishing
- stop before any freeze or locking action
- instruct the user to review the generated Stage 3 outputs
- tell the user that freeze review and locking must not proceed until they confirm the Stage 3 output is correct
- prompt the user to either:
  - confirm Stage 3 is ready for freeze review generation, or
  - request changes to the Stage 3 outputs

When the user confirms Stage 3 is ready:

- the next action is `plan-freeze-stage3-core`

When the user requests changes:

- remain in Stage 3 drafting/review mode
- do not advance to freeze

## Validation Requirements

Before Stage 3 drafting can be considered complete:

- `Page-Architecture-Plan.md` must enumerate the canonical page map
- every required user-facing surface must belong to a main page or subpage
- every page and subpage must have a stated purpose
- `Page-Component-Mapping-Plan.md` must map major components to the pages or subpages where they appear
- shared components must be identified as shared rather than duplicated ambiguously
- page, component, state, and artifact relationships must be internally consistent
