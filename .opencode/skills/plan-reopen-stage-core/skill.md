---
Skill: plan-reopen-stage-core
Description: Recovery skill for reopening a previously frozen stage. Updates manifest/state and produces a paired markdown/json reopen report.
---

## Purpose

This skill reopens one stage only.

## Inputs

- target stage number
- metadata from `meta/json`
- state-machine references:
  - `Planning Template/Build-Plan-Template-Index.md`
  - `Planning Template/Command-Contract-Draft.md`
  - `Planning Template/Skill-And-Command-Orchestration-Draft.md`

## Template Dependencies

- `Planning Template/Build-Plan-Template-Index.md`
- `Planning Template/Command-Contract-Draft.md`
- `Planning Template/Skill-And-Command-Orchestration-Draft.md`

## Outputs

Markdown:

- `Build Plan/Active Plans/<app_slug>/meta/markdown/reopen-stage-<n>-report.md`

JSON:

- `Build Plan/Active Plans/<app_slug>/meta/json/reopen-stage-<n>-report.json`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/manifest.json`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/state.json`

## Instructions

- mark the target stage reopened
- invalidate downstream frozen stages if affected
- record the reason and resulting next valid commands
- preserve the exact stage/template ownership defined in `Planning Template/Command-Contract-Draft.md`
