---
Command: plan-reopen-stage
Description: Recovery command for reopening a previously frozen stage when contradictions or scope changes are discovered. Writes a reopen report and updates manifest/state.
agent: build
subtask: false
---

## Purpose

This command reopens a frozen stage.

## Inputs

- `app_name` or `app_slug`
- `stage_number`
- metadata from `Build Plan/Active Plans/json/`

## Execution Flow

### Step 1 — Validate Preconditions

- target stage is frozen

### Step 2 — Invoke Skill

Skill:

- `plan-reopen-stage-core`

## Required Outputs

Markdown:

- `Build Plan/Active Plans/markdown/reopen-stage-<n>-report.md`

JSON:

- `Build Plan/Active Plans/json/reopen-stage-<n>-report.json`
- updated `Build Plan/Active Plans/json/manifest.json`
- updated `Build Plan/Active Plans/json/state.json`
