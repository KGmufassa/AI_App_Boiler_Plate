---
Skill: plan-freeze-stage4-core
Description: Sequential freeze skill for Stage 4. Reconciles delivery artifacts, validates readiness, writes a freeze review artifact, and updates manifest/state to Stage 4 frozen.
---

## Purpose

This skill freezes Stage 4 only.

## Inputs

- Stage 4 outputs
- metadata from `Build Plan/Active Plans/json/`
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
- updated `Build Plan/Active Plans/json/manifest.json`
- updated `Build Plan/Active Plans/json/state.json`

## Instructions

- reconcile infrastructure, QA, slice order, operations, and risk assumptions
- validate Stage 4 outputs against:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Operations-And-Support-Template.md` when operations is active
  - `Planning Template/Risk-And-Assumption-Register-Template.md` when risk tracking is active
  - upstream integration and security constraints frozen earlier
- fail on unresolved contradictions
- set state to `stage_4_frozen`
