---
Skill: plan-stage3-core
Description: Draft Stage 3 planning skill. Uses frozen Stage 2 context to generate only Stage 3 workflow and frontend artifacts in paired markdown/json outputs, then updates manifest/state without freezing the stage.
---

## Purpose

This skill drafts Stage 3 only.

## Inputs

- Stage 2 frozen workspace
- metadata from `meta/json`
- exact Stage 3 template dependencies:
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

- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-3/markdown/Primary-UX-And-Interaction-Plan.md`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-3/markdown/Frontend-Experience-Decision-Plan.md`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-3/markdown/Component-System-Decision-Plan.md`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-3/markdown/State-And-History-Plan.md`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-3/markdown/Fallback-And-Recovery-UX-Plan.md`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-3/markdown/Artifact-Or-Output-Lifecycle-Plan.md`

Conditional markdown:

- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-3/markdown/Analytics-And-Success-Metrics-Plan.md`

JSON:

- paired `.json` files for every markdown artifact above in sibling `json/`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/manifest.json`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/state.json`

## Instructions

- keep outputs limited to Stage 3 workflow and frontend concerns
- map outputs to these exact templates:
  - `Frontend-Experience-Decision-Plan.md` -> `Planning Template/Frontend-Experience-Decision-Template.md`
  - `Component-System-Decision-Plan.md` -> `Planning Template/Component-System-Decision-Template.md`
  - `Analytics-And-Success-Metrics-Plan.md` -> `Planning Template/Analytics-And-Success-Metrics-Template.md` when activated
  - `Primary-UX-And-Interaction-Plan.md`, `State-And-History-Plan.md`, `Fallback-And-Recovery-UX-Plan.md`, and `Artifact-Or-Output-Lifecycle-Plan.md` -> the Stage 3 sections of `Planning Template/Dynamic-Build-Plan-Template.md`
- set state to `stage_3_drafting`
