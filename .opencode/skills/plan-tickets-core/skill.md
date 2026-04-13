---
Skill: plan-tickets-core
Description: Execution skill for generating implementation tickets from slice task lists. Produces paired markdown/json ticket artifacts and updates manifest/state.
---

## Purpose

This skill generates implementation tickets only.

## Inputs

- task list outputs
- metadata from `Build Plan/Active Plans/json/`
- execution template dependencies:
  - `Planning Template/Build-Plan-Template-Index.md`
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Command-Contract-Draft.md`

## Template Dependencies

- `Planning Template/Build-Plan-Template-Index.md`
- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/Command-Contract-Draft.md`

## Outputs

Markdown:

- `Build Plan/Active Plans/Implementation Tickets/markdown/Implementation-Tickets-Index.md`
- `Build Plan/Active Plans/Implementation Tickets/markdown/Slice-<n>-Tickets.md`

JSON:

- paired `.json` files for every markdown artifact above in sibling `json/`
- updated `Build Plan/Active Plans/status-report/json/manifest.json`
- updated `Build Plan/Active Plans/status-report/json/state.json`

## Instructions

- derive execution-ready tickets from task lists
- preserve slice grouping
- preserve dependency and stage ownership implied by `Planning Template/Dynamic-Build-Plan-Template.md` and `Planning Template/Command-Contract-Draft.md`
- set state to `tickets_generated`
