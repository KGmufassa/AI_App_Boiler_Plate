---
Command: plan-stage4
Description: Combined Stage 4 command. Drafts Stage 4 artifacts, reconciles them, validates freeze criteria, writes freeze review artifacts, and updates manifest/state. Supports optional draft-only mode.
agent: build
subtask: false
---

## Purpose

This command owns the full Stage 4 lifecycle.

Default behavior:

- draft Stage 4
- reconcile Stage 4
- validate freeze criteria
- freeze Stage 4

Optional behavior:

- `--draft-only` drafts Stage 4 without freezing

## Inputs

- `app_name` or `app_slug`
- Stage 3 frozen workspace
- metadata from `Build Plan/Active Plans/json/`

## Internal Skills

- `plan-stage4-core`
- `plan-freeze-stage4-core`

## Execution Flow

### Step 1 — Validate Workspace

- Stage 3 is frozen

### Step 2 — Draft Stage 4

- invoke `plan-stage4-core`

### Step 3 — Freeze Stage 4

IF `--draft-only` is not set:

- invoke `plan-freeze-stage4-core`

## Required Outputs

Markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Deployment-And-Infrastructure-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Caching-And-Performance-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/QA-And-Release-Readiness-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Vertical-Release-Slice-Plan.md`

Conditional markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Operations-And-Support-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Risk-And-Assumption-Register.md`

JSON:

- paired `.json` artifacts for every markdown file above in sibling `json/`
- updated `Build Plan/Active Plans/json/manifest.json` and `Build Plan/Active Plans/json/state.json`

Freeze review outputs when not in `--draft-only` mode:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Stage-4-Freeze-Review.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-4/json/Stage-4-Freeze-Review.json`
