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
- generate Stage 1 freeze review
- require user confirmation
- freeze Stage 1 only after confirmation

Optional behavior:

- `--draft-only` drafts Stage 1 without freezing

## Inputs

- `app_name` or `app_slug`
- initialized planning workspace from `plan-start`
- metadata from `Build Plan/Active Plans/json/`

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

### Step 3 — Review Gate

After drafting:

- prompt the user to review the generated Stage 1 outputs
- do not proceed to freeze review locking until the user confirms the Stage 1 output is correct

### Step 4 — Freeze Stage 1

IF `--draft-only` is not set:

- invoke `plan-freeze-stage1-core`

The freeze skill must:

- generate the Stage 1 freeze review artifact
- prompt the user to confirm the freeze review is correct
- freeze and lock Stage 1 only after confirmation
- then prompt whether to move to `plan-stage2`

## Required Outputs

Markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-1/markdown/MVP-Scope-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-1/markdown/Tech-Stack-Decision-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-1/markdown/Decision-Log-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-1/markdown/Dependency-Gate-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-1/markdown/Unified-Architecture-Plan.md`

Conditional markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-1/markdown/Business-Model-And-Pricing-Plan.md` if commercial mode is active

JSON:

- paired `.json` artifacts for every markdown file above in sibling `json/`
- updated `Build Plan/Active Plans/status-report/json/manifest.json`
- updated `Build Plan/Active Plans/status-report/json/state.json`

Freeze review outputs when not in `--draft-only` mode:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-1/markdown/Stage-1-Freeze-Review.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-1/json/Stage-1-Freeze-Review.json`

## Constraints

- do not write Stage 2 through Stage 4 artifacts
- do not generate slices, tasks, or tickets
- keep draft/freeze logic separate internally even though the command is combined
- do not lock Stage 1 without explicit user confirmation
