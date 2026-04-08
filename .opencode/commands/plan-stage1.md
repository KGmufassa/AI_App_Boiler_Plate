---
Command: plan-stage1
Description: Combined Stage 1 command. Drafts Stage 1 artifacts, reconciles them, validates freeze criteria, writes freeze review artifacts, and updates manifest/state. Supports optional draft-only mode for review workflows.
agent: build
subtask: false
---

## Purpose

This command owns the full Stage 1 lifecycle.

Default behavior:

- draft Stage 1
- reconcile Stage 1
- validate freeze criteria
- freeze Stage 1

Optional behavior:

- `--draft-only` drafts Stage 1 without freezing

## Inputs

- `app_name` or `app_slug`
- initialized planning workspace from `plan-start`
- metadata from `Build Plan/Active Plans/<app_slug>/meta/json/`

## Internal Skills

- `plan-stage1-core`
- `plan-freeze-stage1-core`

## Execution Flow

### Step 1 — Validate Workspace

Verify:

- planning workspace exists
- PRD outputs exist
- manifest and state exist
- current state allows Stage 1 execution

### Step 2 — Draft Stage 1

Invoke:

- `plan-stage1-core`

### Step 3 — Freeze Stage 1

IF `--draft-only` is not set:

- invoke `plan-freeze-stage1-core`

## Required Outputs

Markdown:

- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/markdown/MVP-Scope-Plan.md`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/markdown/Tech-Stack-Decision-Plan.md`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/markdown/Decision-Log-Plan.md`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/markdown/Dependency-Gate-Plan.md`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/markdown/Unified-Architecture-Plan.md`

Conditional markdown:

- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/markdown/Business-Model-And-Pricing-Plan.md` if commercial mode is active

JSON:

- paired `.json` artifacts for every markdown file above in sibling `json/`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/manifest.json`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/state.json`

Freeze review outputs when not in `--draft-only` mode:

- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/markdown/Stage-1-Freeze-Review.md`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/json/Stage-1-Freeze-Review.json`

## Constraints

- do not write Stage 2 through Stage 4 artifacts
- do not generate slices, tasks, or tickets
- keep draft/freeze logic separate internally even though the command is combined
