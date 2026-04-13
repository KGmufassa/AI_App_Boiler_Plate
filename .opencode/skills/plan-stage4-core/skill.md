---
Skill: plan-stage4-core
Description: Draft Stage 4 planning skill. Uses frozen Stage 3 context to generate only Stage 4 delivery artifacts in paired markdown/json outputs, then updates manifest/state without freezing the stage.
---

## Purpose

This skill drafts Stage 4 only.

It must:

- generate Stage 4 planning artifacts
- update `manifest.json`
- update `state.json`
- prompt for Stage 4 review before any freeze action occurs

It must not:

- freeze Stage 4
- create slices, tasks, or tickets

## Inputs

- Stage 3 frozen workspace
- metadata from `Build Plan/Active Plans/status-report/json/`
- exact Stage 4 template dependencies:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Operations-And-Support-Template.md`
  - `Planning Template/Risk-And-Assumption-Register-Template.md`
  - `Planning Template/Stage-4-Dynamic-Questionnaire-Template.md`

## Template Dependencies

- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/Operations-And-Support-Template.md`
- `Planning Template/Risk-And-Assumption-Register-Template.md`
- `Planning Template/Stage-4-Dynamic-Questionnaire-Template.md`

## Outputs

Markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Deployment-And-Infrastructure-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Caching-And-Performance-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/QA-And-Release-Readiness-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Vertical-Release-Slice-Plan.md`

Conditional markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Operations-And-Support-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Risk-And-Assumption-Register.md`

JSON:

- paired `.json` files for every markdown artifact above in sibling `json/`
- updated `Build Plan/Active Plans/status-report/json/manifest.json`
- updated `Build Plan/Active Plans/status-report/json/state.json`

## Instructions

- keep outputs limited to Stage 4 delivery, operations, and readiness concerns
- use `Planning Template/Stage-4-Dynamic-Questionnaire-Template.md` as the required dynamic clarification layer before drafting any Stage 4 output that remains ambiguous
- derive as much as possible from prior stage outputs, manifest, and state before asking any question
- ask only unresolved Stage 4 questions, one at a time, following the questionnaire stop rules
- map outputs to these exact templates:
  - `Operations-And-Support-Plan.md` -> `Planning Template/Operations-And-Support-Template.md` when activated
  - `Risk-And-Assumption-Register.md` -> `Planning Template/Risk-And-Assumption-Register-Template.md` when activated
  - `Deployment-And-Infrastructure-Plan.md`, `Caching-And-Performance-Plan.md`, `QA-And-Release-Readiness-Plan.md`, and `Vertical-Release-Slice-Plan.md` -> the Stage 4 sections of `Planning Template/Dynamic-Build-Plan-Template.md`
- set state to `stage_4_drafting`
- verify all required markdown/json outputs exist and are non-empty before finishing
- stop before any freeze or locking action
- instruct the user to review the generated Stage 4 outputs
- tell the user that freeze review and locking must not proceed until they confirm the Stage 4 output is correct
- prompt the user to either:
  - confirm Stage 4 is ready for freeze review generation, or
  - request changes to the Stage 4 outputs

When the user confirms Stage 4 is ready:

- the next action is `plan-freeze-stage4-core`

When the user requests changes:

- remain in Stage 4 drafting/review mode
- do not advance to freeze
