---
Skill: plan-freeze-stage3-core
Description: Sequential freeze skill for Stage 3. Reconciles workflow and frontend artifacts, validates readiness, writes a freeze review artifact, and updates manifest/state to Stage 3 frozen.
---

## Purpose

This skill freezes Stage 3 only.

## Inputs

- Stage 3 outputs
- metadata from `meta/json`
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

- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-3/markdown/Stage-3-Freeze-Review.md`

JSON:

- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-3/json/Stage-3-Freeze-Review.json`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/manifest.json`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/state.json`

## Instructions

- reconcile workflow behavior, frontend experience, component strategy, and analytics assumptions
- validate Stage 3 outputs against:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Frontend-Experience-Decision-Template.md`
  - `Planning Template/Component-System-Decision-Template.md`
  - `Planning Template/Analytics-And-Success-Metrics-Template.md` when analytics is active
- fail on unresolved contradictions
- set state to `stage_3_frozen`
