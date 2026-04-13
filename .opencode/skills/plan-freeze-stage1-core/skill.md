---
Skill: plan-freeze-stage1-core
Description: Sequential freeze skill for Stage 1. Reconciles Stage 1 artifacts, validates freeze criteria, writes a freeze review artifact, and updates manifest/state to Stage 1 frozen.
---

## Purpose

This skill freezes Stage 1 only, but only after explicit user confirmation of the generated freeze review.

## Inputs

- Stage 1 markdown/json outputs
- `Build Plan/Active Plans/status-report/json/manifest.json`
- `Build Plan/Active Plans/status-report/json/state.json`
- Stage 1 template dependencies:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Tech-Stack-Decision-Template.md`
  - `Planning Template/Business-Model-And-Pricing-Template.md`

## Template Dependencies

- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/Tech-Stack-Decision-Template.md`
- `Planning Template/Business-Model-And-Pricing-Template.md`

## Outputs

Markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-1/markdown/Stage-1-Freeze-Review.md`

JSON:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-1/json/Stage-1-Freeze-Review.json`
- updated `Build Plan/Active Plans/status-report/json/manifest.json`
- updated `Build Plan/Active Plans/status-report/json/state.json`

## Instructions

- reconcile MVP scope, stack direction, dependency gates, and architecture
- validate Stage 1 outputs against:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Tech-Stack-Decision-Template.md`
  - `Planning Template/Business-Model-And-Pricing-Template.md` when commercial mode is active
- write `Stage-1-Freeze-Review.md` and `Stage-1-Freeze-Review.json` before locking
- stop and prompt the user to review the Stage 1 freeze review output
- require explicit user confirmation that the freeze review and Stage 1 outputs are correct before freezing
- fail if contradictions remain unresolved

Only after user confirmation:

- set manifest/state to `stage_1_frozen`
- set next valid commands to Stage 2 drafting or status
- prompt the user whether to proceed to the next Stage command:
  - `plan-stage2`
  - or stop after Stage 1 freeze

If the user does not confirm:

- do not set Stage 1 to frozen
- do not lock the stage
- return control for revisions

## Constraints

- no drafting of later stages
- no slices, tasks, or tickets
- no freezing without explicit user confirmation after freeze review generation
