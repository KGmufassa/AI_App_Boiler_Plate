---
Skill: plan-stage4-core
Description: Draft Stage 4 planning skill. Uses frozen Stage 3 context to generate only Stage 4 delivery artifacts in paired markdown/json outputs, then updates manifest/state without freezing the stage.
---

## Purpose

This skill drafts Stage 4 only.

## Inputs

- Stage 3 frozen workspace
- metadata from `Build Plan/Active Plans/json/`
- exact Stage 4 template dependencies:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Operations-And-Support-Template.md`
  - `Planning Template/Risk-And-Assumption-Register-Template.md`

## Template Dependencies

- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/Operations-And-Support-Template.md`
- `Planning Template/Risk-And-Assumption-Register-Template.md`

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
- updated `Build Plan/Active Plans/json/manifest.json`
- updated `Build Plan/Active Plans/json/state.json`

## Instructions

- keep outputs limited to Stage 4 delivery, operations, and readiness concerns
- map outputs to these exact templates:
  - `Operations-And-Support-Plan.md` -> `Planning Template/Operations-And-Support-Template.md` when activated
  - `Risk-And-Assumption-Register.md` -> `Planning Template/Risk-And-Assumption-Register-Template.md` when activated
  - `Deployment-And-Infrastructure-Plan.md`, `Caching-And-Performance-Plan.md`, `QA-And-Release-Readiness-Plan.md`, and `Vertical-Release-Slice-Plan.md` -> the Stage 4 sections of `Planning Template/Dynamic-Build-Plan-Template.md`
- set state to `stage_4_drafting`
