---
Skill: plan-draft-all-core
Description: Supervisor skill for the full planning flow. Reuses the combined stage command contracts in order, writes a consolidated supervisor report, and stops on first failure.
---

## Purpose

This skill supervises the full Stage 1 through Stage 4 pipeline.

It must not bypass stage-specific command logic.

## Inputs

- initialized planning workspace
- metadata from `Build Plan/Active Plans/json/`
- supervisor references:
  - `Planning Template/Build-Plan-Template-Index.md`
  - `Planning Template/Command-Contract-Draft.md`
  - `Planning Template/Skill-And-Command-Orchestration-Draft.md`

## Template Dependencies

- `Planning Template/Build-Plan-Template-Index.md`
- `Planning Template/Command-Contract-Draft.md`
- `Planning Template/Skill-And-Command-Orchestration-Draft.md`
- stage-owned templates are resolved by `plan-stage1`, `plan-stage2`, `plan-stage3`, and `plan-stage4`

## Outputs

Markdown:

- `Build Plan/Active Plans/markdown/plan-draft-all-report.md`

JSON:

- `Build Plan/Active Plans/json/plan-draft-all-report.json`
- updated `Build Plan/Active Plans/status-report/json/manifest.json`
- updated `Build Plan/Active Plans/status-report/json/state.json`

## Instructions

- run `plan-stage1`
- run `plan-stage2`
- run `plan-stage3`
- run `plan-stage4`
- stop on first failure
- write a consolidated summary of completed and blocked stages
- do not invent stage dependencies outside the exact template sets owned by each stage skill
