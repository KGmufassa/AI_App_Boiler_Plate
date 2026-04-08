---
Command: plan-draft-all
Description: Supervisor command that runs Stage 1 through Stage 4 combined stage commands in order, stopping on the first failed validation. Reuses the stage-specific command contracts and writes a consolidated supervisor report.
agent: build
subtask: false
---

## Purpose

This command supervises the full stage pipeline.

It must reuse the stage-specific command logic and must not bypass stage gates.

## Inputs

- `app_name` or `app_slug`
- initialized planning workspace under `Build Plan/Active Plans/<app_slug>/`

## Execution Flow

### Step 1 — Validate Start State

- `plan start` outputs exist

### Step 2 — Invoke Skill

Skill:

- `plan-draft-all-core`

### Step 3 — Stop On Failure

If any stage fails:

- stop immediately
- write partial supervisor summary

## Required Outputs

Markdown:

- `Build Plan/Active Plans/<app_slug>/meta/markdown/plan-draft-all-report.md`

JSON:

- `Build Plan/Active Plans/<app_slug>/meta/json/plan-draft-all-report.json`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/manifest.json`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/state.json`

## Constraints

- do not create slices, tasks, or tickets
- do not skip stage freeze checkpoints
