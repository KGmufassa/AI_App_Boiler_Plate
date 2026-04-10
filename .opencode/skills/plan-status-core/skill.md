---
Skill: plan-status-core
Description: Inspection skill for reading manifest/state and producing a paired markdown/json status report for the planning workspace.
---

## Purpose

This skill reports current planning status only.

## Inputs

- `Build Plan/Active Plans/json/manifest.json`
- `Build Plan/Active Plans/json/state.json`
- status references:
  - `Planning Template/Build-Plan-Template-Index.md`
  - `Planning Template/Command-Contract-Draft.md`
  - `Planning Template/Skill-And-Command-Orchestration-Draft.md`

## Template Dependencies

- `Planning Template/Build-Plan-Template-Index.md`
- `Planning Template/Command-Contract-Draft.md`
- `Planning Template/Skill-And-Command-Orchestration-Draft.md`

## Outputs

Markdown:

- `Build Plan/Active Plans/markdown/status-report.md`

JSON:

- `Build Plan/Active Plans/json/status-report.json`

## Instructions

- report current stage
- report frozen stages
- report active templates
- report blockers
- report next valid commands
