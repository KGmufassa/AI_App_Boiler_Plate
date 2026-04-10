---
Skill: plan-freeze-stage2-core
Description: Sequential freeze skill for Stage 2. Reconciles contract artifacts, validates readiness, writes a freeze review artifact, and updates manifest/state to Stage 2 frozen.
---

## Purpose

This skill freezes Stage 2 only.

## Inputs

- Stage 2 outputs
- metadata from `Build Plan/Active Plans/json/`
- Stage 2 template dependencies:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/User-Personas-And-Jobs-To-Be-Done-Template.md`
  - `Planning Template/Integration-And-External-Dependency-Template.md`
  - `Planning Template/Security-And-Compliance-Template.md`

## Template Dependencies

- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/User-Personas-And-Jobs-To-Be-Done-Template.md`
- `Planning Template/Integration-And-External-Dependency-Template.md`
- `Planning Template/Security-And-Compliance-Template.md`

## Outputs

Markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Stage-2-Freeze-Review.md`

JSON:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/json/Stage-2-Freeze-Review.json`
- updated `Build Plan/Active Plans/json/manifest.json`
- updated `Build Plan/Active Plans/json/state.json`

## Instructions

- reconcile data model, contract, integration, and security assumptions
- validate Stage 2 outputs against:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/User-Personas-And-Jobs-To-Be-Done-Template.md` when personas/JTBD is active
  - `Planning Template/Integration-And-External-Dependency-Template.md` when integrations are active
  - `Planning Template/Security-And-Compliance-Template.md` when security/compliance is active
- fail on unresolved contradictions
- set state to `stage_2_frozen`
