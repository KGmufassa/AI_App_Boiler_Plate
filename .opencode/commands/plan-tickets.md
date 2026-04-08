---
Command: plan-tickets
Description: Execution command for generating implementation tickets from slice task lists. Writes paired markdown/json ticket artifacts and updates manifest/state.
agent: build
subtask: false
---

## Purpose

This command generates implementation tickets after task lists exist.

## Inputs

- `app_name` or `app_slug`
- task list outputs
- metadata from `meta/json`

## Execution Flow

### Step 1 — Validate Preconditions

- task lists are generated

### Step 2 — Invoke Skill

Skill:

- `plan-tickets-core`

## Required Outputs

Markdown:

- `Build Plan/Active Plans/<app_slug>/Implementation Tickets/markdown/Implementation-Tickets-Index.md`
- `Build Plan/Active Plans/<app_slug>/Implementation Tickets/markdown/Slice-<n>-Tickets.md`

JSON:

- `Build Plan/Active Plans/<app_slug>/Implementation Tickets/json/Implementation-Tickets-Index.json`
- `Build Plan/Active Plans/<app_slug>/Implementation Tickets/json/Slice-<n>-Tickets.json`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/manifest.json`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/state.json`
