---
Skill: plan-stage2-core
Description: Draft Stage 2 planning skill. Uses frozen Stage 1 context to generate only Stage 2 contract artifacts in paired markdown/json outputs, then updates manifest/state without freezing the stage.
---

## Purpose

This skill drafts Stage 2 only.

It must:

- generate Stage 2 planning artifacts
- update `manifest.json`
- update `state.json`
- prompt for Stage 2 review before any freeze action occurs

It must not:

- freeze Stage 2
- create Stage 3 or Stage 4 artifacts
- create slices, tasks, or tickets

## Inputs

- Stage 1 frozen workspace
- PRD/intake outputs
- manifest/state from `Build Plan/Active Plans/status-report/json/`
- exact Stage 2 template dependencies:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/User-Personas-And-Jobs-To-Be-Done-Template.md`
  - `Planning Template/Integration-And-External-Dependency-Template.md`
  - `Planning Template/Security-And-Compliance-Template.md`
  - `Planning Template/Stage-2-Dynamic-Questionnaire-Template.md`

## Template Dependencies

- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/User-Personas-And-Jobs-To-Be-Done-Template.md`
- `Planning Template/Integration-And-External-Dependency-Template.md`
- `Planning Template/Security-And-Compliance-Template.md`
- `Planning Template/Stage-2-Dynamic-Questionnaire-Template.md`

## Outputs

Markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Data-Schema-And-Domain-Model-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Canonical-State-And-Math-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/API-And-Job-Contract-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Runtime-Contract-Plan.md`

Conditional markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/User-Personas-And-Jobs-To-Be-Done-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Integration-And-External-Dependency-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Security-And-Compliance-Plan.md`

JSON:

- paired `.json` files for every markdown artifact above in sibling `json/`
- updated `Build Plan/Active Plans/status-report/json/manifest.json`
- updated `Build Plan/Active Plans/status-report/json/state.json`

## Instructions

- keep outputs limited to Stage 2 contracts and constraints
- use `Planning Template/Stage-2-Dynamic-Questionnaire-Template.md` as the required dynamic clarification layer before drafting any Stage 2 output that remains ambiguous
- derive as much as possible from Stage 1 outputs, intake, PRD, manifest, and state before asking any question
- ask only unresolved Stage 2 questions, one at a time, following the questionnaire stop rules
- map outputs to these exact templates:
  - `User-Personas-And-Jobs-To-Be-Done-Plan.md` -> `Planning Template/User-Personas-And-Jobs-To-Be-Done-Template.md` when activated
  - `Integration-And-External-Dependency-Plan.md` -> `Planning Template/Integration-And-External-Dependency-Template.md` when activated
  - `Security-And-Compliance-Plan.md` -> `Planning Template/Security-And-Compliance-Template.md` when activated
  - `Data-Schema-And-Domain-Model-Plan.md`, `Canonical-State-And-Math-Plan.md`, `API-And-Job-Contract-Plan.md`, and `Runtime-Contract-Plan.md` -> the Stage 2 sections of `Planning Template/Dynamic-Build-Plan-Template.md`
- activate conditional documents only when present in manifest
- set manifest/state to `stage_2_drafting`
- verify all required markdown/json outputs exist and are non-empty before finishing
- stop before any freeze or locking action
- instruct the user to review the generated Stage 2 outputs
- tell the user that freeze review and locking must not proceed until they confirm the Stage 2 output is correct
- prompt the user to either:
  - confirm Stage 2 is ready for freeze review generation, or
  - request changes to the Stage 2 outputs

When the user confirms Stage 2 is ready:

- the next action is `plan-freeze-stage2-core`

When the user requests changes:

- remain in Stage 2 drafting/review mode
- do not advance to freeze

## Constraints

- no Stage 3 or Stage 4 content
- no freeze here
- no slices, tasks, or tickets
- do not ask to proceed to Stage 3 before Stage 2 freeze confirmation is complete
