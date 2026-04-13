---
Command: plan-stage3
Description: Combined Stage 3 command. Drafts Stage 3 artifacts, reconciles them, validates freeze criteria, writes freeze review artifacts, and updates manifest/state. Supports optional draft-only mode.
agent: build
subtask: false
---

## Purpose

This command owns the full Stage 3 lifecycle.

Default behavior:

- draft Stage 3
- reconcile Stage 3
- generate Stage 3 freeze review
- require user confirmation
- freeze Stage 3 only after confirmation

Optional behavior:

- `--draft-only` drafts Stage 3 without freezing

## Inputs

- `app_name` or `app_slug`
- Stage 2 frozen workspace
- metadata from `Build Plan/Active Plans/json/`

## Internal Skills

- `plan-stage3-core`
- `plan-freeze-stage3-core`

## Execution Flow

### Step 1 — Validate Workspace

- Stage 2 is frozen

### Step 2 — Draft Stage 3

- invoke `plan-stage3-core`

### Step 3 — Review Gate

After drafting:

- prompt the user to review the generated Stage 3 outputs
- do not proceed to freeze review locking until the user confirms the Stage 3 output is correct

### Step 4 — Freeze Stage 3

IF `--draft-only` is not set:

- invoke `plan-freeze-stage3-core`

The freeze skill must:

- generate the Stage 3 freeze review artifact
- prompt the user to confirm the freeze review is correct
- freeze and lock Stage 3 only after confirmation
- then prompt whether to move to `plan-stage4`

## Required Outputs

Markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Primary-UX-And-Interaction-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Page-Architecture-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Frontend-Experience-Decision-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Component-System-Decision-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Page-Component-Mapping-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/State-And-History-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Fallback-And-Recovery-UX-Plan.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Artifact-Or-Output-Lifecycle-Plan.md`

Conditional markdown:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Analytics-And-Success-Metrics-Plan.md`

JSON:

- paired `.json` artifacts for every markdown file above in sibling `json/`
- updated `Build Plan/Active Plans/status-report/json/manifest.json` and `Build Plan/Active Plans/status-report/json/state.json`

Freeze review outputs when not in `--draft-only` mode:

- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Stage-3-Freeze-Review.md`
- `Build Plan/Active Plans/1-4 Stage Planning/Stage-3/json/Stage-3-Freeze-Review.json`

## Stage 3 Coverage Rules

Stage 3 must explicitly account for:

- the canonical list of main pages
- the canonical list of subpages
- page hierarchy and navigation relationships
- page-level component placement
- shared component ownership
- how components, states, and artifacts relate to each other
