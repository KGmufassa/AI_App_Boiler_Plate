---
Skill: plan-stage1-core
Description: Draft Stage 1 planning skill for the orchestration system. Uses the initialized planning workspace and exact Planning Template dependencies to generate only Stage 1 planning artifacts in paired markdown/json outputs, then updates manifest and state without freezing the stage.
---

## Purpose

This skill is the internal worker behind `plan-draft-stage1`.

It is responsible only for:

- generating Stage 1 planning artifacts
- updating `manifest.json`
- updating `state.json`

It must not:

- freeze Stage 1
- create Stage 2 through Stage 4 artifacts
- create slices, tasks, or tickets

---

## Inputs

### Primary

- `app_slug` (string, optional)
- `workspace_root` (string, optional)
- `manifest_path` (string, optional)
- `state_path` (string, optional)

### Required Workspace Inputs

- `Build Plan/Active Plans/<app_slug>/PRDs/markdown/App-Idea-Intake.md`
- `Build Plan/Active Plans/<app_slug>/PRDs/json/App-Idea-Intake.json`
- `Build Plan/Active Plans/<app_slug>/PRDs/markdown/Product-Requirements-Document.md`
- `Build Plan/Active Plans/<app_slug>/PRDs/json/Product-Requirements-Document.json`
- `Build Plan/Active Plans/<app_slug>/meta/json/manifest.json`
- `Build Plan/Active Plans/<app_slug>/meta/json/state.json`

### Reference Templates

- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/Tech-Stack-Decision-Template.md`
- `Planning Template/Business-Model-And-Pricing-Template.md`

## Template Dependencies

- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/Tech-Stack-Decision-Template.md`
- `Planning Template/Business-Model-And-Pricing-Template.md`

---

## Outputs

### Markdown

- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/markdown/MVP-Scope-Plan.md`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/markdown/Tech-Stack-Decision-Plan.md`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/markdown/Decision-Log-Plan.md`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/markdown/Dependency-Gate-Plan.md`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/markdown/Unified-Architecture-Plan.md`

Conditional markdown:

- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/markdown/Business-Model-And-Pricing-Plan.md` if commercial mode is active

### JSON

- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/json/MVP-Scope-Plan.json`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/json/Tech-Stack-Decision-Plan.json`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/json/Decision-Log-Plan.json`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/json/Dependency-Gate-Plan.json`
- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/json/Unified-Architecture-Plan.json`

Conditional JSON:

- `Build Plan/Active Plans/<app_slug>/1-4 Stage Planning/Stage-1/json/Business-Model-And-Pricing-Plan.json` if commercial mode is active

### Metadata

- updated `Build Plan/Active Plans/<app_slug>/meta/json/manifest.json`
- updated `Build Plan/Active Plans/<app_slug>/meta/json/state.json`

---

## Instructions

### Step 1 — Load Workspace State

Load:

- intake markdown and JSON
- PRD markdown and JSON
- manifest
- state

Use the workspace state as the primary source of truth.

### Step 2 — Validate Stage 1 Eligibility

Proceed only if:

- current state is `planning_path_selected` or equivalent Stage 1-ready state
- required PRD artifacts exist

### Step 3 — Draft Stage 1 Artifacts

Generate:

- MVP scope plan
- tech stack decision plan
- decision log plan
- dependency gate plan
- unified architecture plan

If commercial mode is active in the manifest, also generate:

- business model and pricing plan

Map outputs to these exact templates:

- `MVP-Scope-Plan.md`, `Decision-Log-Plan.md`, `Dependency-Gate-Plan.md`, and `Unified-Architecture-Plan.md` -> the Stage 1 sections of `Planning Template/Dynamic-Build-Plan-Template.md`
- `Tech-Stack-Decision-Plan.md` -> `Planning Template/Tech-Stack-Decision-Template.md`
- `Business-Model-And-Pricing-Plan.md` -> `Planning Template/Business-Model-And-Pricing-Template.md` when commercial mode is active

### Step 4 — Keep Stage Boundaries Tight

All generated content must align with Stage 1 concerns only:

- release boundary
- stack direction
- business model if relevant
- high-cost decisions
- dependency gates
- system boundary and ownership

Do not introduce later-stage contract details unless required as references.

### Step 5 — Create Paired JSON Outputs

For every Stage 1 markdown file, create a paired machine-readable JSON artifact with the same logical content.

### Step 6 — Update Metadata

Update manifest:

- set `current_stage` to `stage_1_drafting`
- append generated Stage 1 artifacts

Update state:

- set `state` to `stage_1_drafting`
- set `next_valid_commands` to include:
  - `plan stage1 <app-name>`
  - `plan status <app-name>`

### Step 7 — Output Validation

Before finishing, verify:

- all required markdown artifacts exist and are non-empty
- all required JSON artifacts exist and are non-empty
- manifest and state are valid JSON
- output files remain inside Stage 1 and `meta/json`

---

## Style Rules

- keep outputs concise and operational
- align structure to the planning templates
- do not generate speculative implementation detail beyond Stage 1
- keep decision log entries concrete

---

## Constraints

- do not create Stage 2 through Stage 4 artifacts
- do not freeze Stage 1
- do not generate slices, tasks, or tickets
- do not drift from the planning templates
- always pair markdown and JSON outputs in sibling folders

---

## Review Intent

This skill is a draft for review before the broader stage drafting and freeze system is implemented.

It exists to validate:

- Stage 1 output shape
- global output folder convention
- manifest/state update behavior
- bounded stage drafting
