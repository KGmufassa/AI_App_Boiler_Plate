---
Skill: plan-slices-core
Description: Execution skill for generating slice implementation plans from the exact frozen planning documents referenced by the planning templates. Produces paired markdown/json slice artifacts and updates manifest/state.
---

## Purpose

This skill generates slice implementation plans only.

## Inputs

- frozen Stage 1 through Stage 4 outputs
- metadata from `meta/json`
- roadmap template dependencies:
  - `Planning Template/Build-Plan-Template-Index.md`
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Risk-And-Assumption-Register-Template.md`
  - `Planning Template/Analytics-And-Success-Metrics-Template.md`
  - `Planning Template/Operations-And-Support-Template.md`

## Template Dependencies

- `Planning Template/Build-Plan-Template-Index.md`
- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/Risk-And-Assumption-Register-Template.md`
- `Planning Template/Analytics-And-Success-Metrics-Template.md`
- `Planning Template/Operations-And-Support-Template.md`

## Outputs

Markdown:

- `Build Plan/Active Plans/<app_slug>/Slice Implementaion/markdown/Slice-Implementation-Index.md`
- `Build Plan/Active Plans/<app_slug>/Slice Implementaion/markdown/Slice-<n>-<Outcome>-Implementation-Plan.md`

JSON:

- paired `.json` files for every markdown artifact above in sibling `json/`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/manifest.json`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/state.json`

## Instructions

- derive slice order from the exact frozen planning documents selected by the active template set
- derive slice order explicitly from the constraints frozen in:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Risk-And-Assumption-Register-Template.md`
  - `Planning Template/Analytics-And-Success-Metrics-Template.md` when instrumentation affects slice order
  - `Planning Template/Operations-And-Support-Template.md` when operational readiness affects slice order
- create one index and one paired markdown/json artifact per slice
- set state to `slice_plans_generated`
