---
Command: plan-status
Description: Inspection command for reporting the current planning state, active templates, frozen stages, blockers, and next valid command. Writes paired markdown/json status artifacts.
agent: build
subtask: false
---

## Purpose

This command reports current planning status.

## Inputs

- `app_name` or `app_slug`
- `Build Plan/Active Plans/json/manifest.json`
- `Build Plan/Active Plans/json/state.json`

## Execution Flow

### Step 1 — Invoke Skill

Skill:

- `plan-status-core`

## Required Outputs

Markdown:

- `Build Plan/Active Plans/markdown/status-report.md`

JSON:

- `Build Plan/Active Plans/json/status-report.json`
