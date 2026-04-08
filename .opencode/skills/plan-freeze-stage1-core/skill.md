---
Skill: plan-freeze-stage1-core
Description: Sequential freeze skill for Stage 1. Reconciles Stage 1 artifacts, validates freeze criteria, writes a freeze review artifact, and updates manifest/state to Stage 1 frozen.
---

## Purpose

This skill freezes Stage 1 only.

## Inputs

- Stage 1 markdown/json outputs
- `Build Plan/Active Plans/<app_slug>/meta/json/manifest.json`
- `Build Plan/Active Plans/<app_slug>/meta/json/state.json`
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

- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/markdown/Stage-1-Freeze-Review.md`

JSON:

- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/json/Stage-1-Freeze-Review.json`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/manifest.json`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/state.json`

## Instructions

- reconcile MVP scope, stack direction, dependency gates, and architecture
- validate Stage 1 outputs against:
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Tech-Stack-Decision-Template.md`
  - `Planning Template/Business-Model-And-Pricing-Template.md` when commercial mode is active
- fail if contradictions remain unresolved
- set manifest/state to `stage_1_frozen`
- set next valid commands to Stage 2 drafting or status

## Constraints

- no drafting of later stages
- no slices, tasks, or tickets
