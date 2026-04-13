---
Skill: plan-freeze-stage3-core
Description: Sequential freeze skill for Stage 3. Reconciles workflow and frontend artifacts, validates readiness, writes a freeze review artifact, and updates manifest/state to Stage 3 frozen.
---

## Purpose

This skill freezes Stage 3 only, but only after explicit user confirmation of the generated freeze review.

## Inputs

- Stage 3 outputs
- metadata from `Build Plan/Active Plans/status-report/json/`
- Stage 3 template dependencies:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Frontend-Experience-Decision-Template.md`
  - `Planning Template/Component-System-Decision-Template.md`
  - `Planning Template/Analytics-And-Success-Metrics-Template.md`

## Template Dependencies

- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/Frontend-Experience-Decision-Template.md`
- `Planning Template/Component-System-Decision-Template.md`
- `Planning Template/Analytics-And-Success-Metrics-Template.md`

## Outputs

Markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Stage-3-Freeze-Review.md`

JSON:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/json/Stage-3-Freeze-Review.json`
- updated `Build Plan/Active Plans/status-report/json/manifest.json`
- updated `Build Plan/Active Plans/status-report/json/state.json`

## Instructions

- reconcile workflow behavior, page architecture, frontend experience, component strategy, component mapping, and analytics assumptions
- validate Stage 3 outputs against:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Frontend-Experience-Decision-Template.md`
  - `Planning Template/Component-System-Decision-Template.md`
  - `Planning Template/Analytics-And-Success-Metrics-Template.md` when analytics is active
- fail if:
  - main pages or subpages are missing
  - page hierarchy is ambiguous
  - component ownership per page is incomplete
  - component-to-artifact relationships are inconsistent
- write `Stage-3-Freeze-Review.md` and `Stage-3-Freeze-Review.json` before locking
- stop and prompt the user to review the Stage 3 freeze review output
- require explicit user confirmation that the freeze review and Stage 3 outputs are correct before freezing
- fail on unresolved contradictions

Only after user confirmation:

- set state to `stage_3_frozen`
- set next valid commands to Stage 4 drafting or status
- prompt the user whether to proceed to the next Stage command:
  - `plan-stage4`
  - or stop after Stage 3 freeze

If the user does not confirm:

- do not set Stage 3 to frozen
- do not lock the stage
- return control for revisions
