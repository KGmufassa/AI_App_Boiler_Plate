---
Skill: plan-freeze-stage4-core
Description: Sequential freeze skill for Stage 4. Reconciles delivery artifacts, validates readiness, writes a freeze review artifact, and updates manifest/state to Stage 4 frozen.
---

## Purpose

This skill freezes Stage 4 only, but only after explicit user confirmation of the generated freeze review.

## Inputs

- Stage 4 outputs
- metadata from `Build Plan/Active Plans/status-report/json/`
- Stage 4 template dependencies:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Operations-And-Support-Template.md`
  - `Planning Template/Risk-And-Assumption-Register-Template.md`
  - `Planning Template/Integration-And-External-Dependency-Template.md`
  - `Planning Template/Security-And-Compliance-Template.md`

## Template Dependencies

- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/Operations-And-Support-Template.md`
- `Planning Template/Risk-And-Assumption-Register-Template.md`
- `Planning Template/Integration-And-External-Dependency-Template.md`
- `Planning Template/Security-And-Compliance-Template.md`

## Outputs

Markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Stage-4-Freeze-Review.md`

JSON:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/json/Stage-4-Freeze-Review.json`
- updated `Build Plan/Active Plans/status-report/json/manifest.json`
- updated `Build Plan/Active Plans/status-report/json/state.json`

## Instructions

- reconcile infrastructure, QA, slice order, operations, and risk assumptions
- validate Stage 4 outputs against:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Operations-And-Support-Template.md` when operations is active
  - `Planning Template/Risk-And-Assumption-Register-Template.md` when risk tracking is active
  - upstream integration and security constraints frozen earlier
- write `Stage-4-Freeze-Review.md` and `Stage-4-Freeze-Review.json` before locking
- stop and prompt the user to review the Stage 4 freeze review output
- require explicit user confirmation that the freeze review and Stage 4 outputs are correct before freezing
- fail on unresolved contradictions

Only after user confirmation:

- set state to `stage_4_frozen`
- set next valid commands to slice planning or status
- prompt the user whether to proceed to the next workflow command:
  - `plan-slices`
  - or stop after Stage 4 freeze

If the user does not confirm:

- do not set Stage 4 to frozen
- do not lock the stage
- return control for revisions
