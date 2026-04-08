---
Skill: plan-tasks-core
Description: Execution skill for generating slice task lists from slice implementation plans. Produces paired markdown/json task artifacts and updates manifest/state.
---

## Purpose

This skill generates task lists only.

## Inputs

- slice implementation outputs
- metadata from `meta/json`
- execution template dependencies:
  - `Planning Template/Build-Plan-Template-Index.md`
  - `Planning Template/Dynamic-Build-Plan-Template.md`
  - `Planning Template/Skill-And-Command-Orchestration-Draft.md`

## Template Dependencies

- `Planning Template/Build-Plan-Template-Index.md`
- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/Skill-And-Command-Orchestration-Draft.md`

## Outputs

Markdown:

- `Build Plan/Active Plans/<app_slug>/Task List/markdown/Task-List-Index.md`
- `Build Plan/Active Plans/<app_slug>/Task List/markdown/Slice-<n>-Task-List.md`

JSON:

- paired `.json` files for every markdown artifact above in sibling `json/`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/manifest.json`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/state.json`

## Instructions

- derive one task list per slice
- keep tasks grounded in the exact frozen planning documents and slice outputs
- preserve the execution ordering implied by `Planning Template/Dynamic-Build-Plan-Template.md`
- set state to `task_lists_generated`
