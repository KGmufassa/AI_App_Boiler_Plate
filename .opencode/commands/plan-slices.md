---
Command: plan-slices
Description: Execution command for generating slice implementation plans from the fully frozen planning stack. Writes paired markdown/json slice artifacts and updates manifest/state.
agent: build
subtask: false
---

## Purpose

This command generates slice implementation plans after Stage 4 is frozen.

## Inputs

- `app_name` or `app_slug`
- frozen Stage 1 through Stage 4 outputs
- metadata from `Build Plan/Active Plans/json/`

## Execution Flow

### Step 1 — Validate Preconditions

- Stage 4 is frozen

### Step 2 — Invoke Skill

Skill:

- `plan-slices-core`

## Required Outputs

Markdown:

- `Build Plan/Active Plans/Slice Implementaion/markdown/Slice-Implementation-Index.md`
- `Build Plan/Active Plans/Slice Implementaion/markdown/Slice-<n>-<Outcome>-Implementation-Plan.md`

JSON:

- `Build Plan/Active Plans/Slice Implementaion/json/Slice-Implementation-Index.json`
- `Build Plan/Active Plans/Slice Implementaion/json/Slice-<n>-<Outcome>-Implementation-Plan.json`
- updated `Build Plan/Active Plans/status-report/json/manifest.json`
- updated `Build Plan/Active Plans/status-report/json/state.json`
