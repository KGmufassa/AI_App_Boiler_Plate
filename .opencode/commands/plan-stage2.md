---
Command: plan-stage2
Description: Combined Stage 2 command. Drafts Stage 2 artifacts, reconciles them, validates freeze criteria, writes freeze review artifacts, and updates manifest/state. Supports optional draft-only mode.
agent: build
subtask: false
---

## Purpose

This command owns the full Stage 2 lifecycle.

Default behavior:

- draft Stage 2
- reconcile Stage 2
- generate Stage 2 freeze review
- require user confirmation
- freeze Stage 2 only after confirmation

Optional behavior:

- `--draft-only` drafts Stage 2 without freezing

## Inputs

- `app_name` or `app_slug`
- Stage 1 frozen workspace
- metadata from `Build Plan/Active Plans/json/`

## Internal Skills

- `plan-stage2-core`
- `plan-freeze-stage2-core`

## Execution Flow

### Step 1 — Validate Workspace

- Stage 1 is frozen

### Step 2 — Draft Stage 2

- invoke `plan-stage2-core`

### Step 3 — Review Gate

After drafting:

- prompt the user to review the generated Stage 2 outputs
- do not proceed to freeze review locking until the user confirms the Stage 2 output is correct

### Step 4 — Freeze Stage 2

IF `--draft-only` is not set:

- invoke `plan-freeze-stage2-core`

The freeze skill must:

- generate the Stage 2 freeze review artifact
- prompt the user to confirm the freeze review is correct
- freeze and lock Stage 2 only after confirmation
- then prompt whether to move to `plan-stage3`

## Constraints

- do not write Stage 3 or Stage 4 artifacts
- do not generate slices, tasks, or tickets
- do not lock Stage 2 without explicit user confirmation
## Required Outputs

Markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Data-Schema-And-Domain-Model-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Canonical-State-And-Math-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/API-And-Job-Contract-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Runtime-Contract-Plan.md`

Conditional markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/User-Personas-And-Jobs-To-Be-Done-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Integration-And-External-Dependency-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Security-And-Compliance-Plan.md`

JSON:

- paired `.json` artifacts for every markdown file above in sibling `json/`
- updated `Build Plan/Active Plans/status-report/json/manifest.json` and `Build Plan/Active Plans/status-report/json/state.json`

Freeze review outputs when not in `--draft-only` mode:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Stage-2-Freeze-Review.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-2/json/Stage-2-Freeze-Review.json`
