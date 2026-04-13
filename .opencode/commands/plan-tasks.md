---
Command: plan-tasks
Description: Execution command for generating task lists from slice implementation plans. Writes paired markdown/json task artifacts and updates manifest/state.
agent: build
subtask: false
---

## Purpose

This command generates task lists after slices exist.

## Inputs

- `app_name` or `app_slug`
- slice implementation outputs
- metadata from `Build Plan/Active Plans/json/`

## Execution Flow

### Step 1 — Validate Preconditions

- slice plans are generated

### Step 2 — Invoke Skill

Skill:

- `plan-tasks-core`

## Required Outputs

Markdown:

- `Build Plan/Active Plans/Task List/markdown/Task-List-Index.md`
- `Build Plan/Active Plans/Task List/markdown/Slice-<n>-Task-List.md`

JSON:

- `Build Plan/Active Plans/Task List/json/Task-List-Index.json`
- `Build Plan/Active Plans/Task List/json/Slice-<n>-Task-List.json`
- updated `Build Plan/Active Plans/status-report/json/manifest.json`
- updated `Build Plan/Active Plans/status-report/json/state.json`
