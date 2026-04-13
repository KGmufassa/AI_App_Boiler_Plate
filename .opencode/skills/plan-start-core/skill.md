---
Skill: plan-start-core
Description: Draft initialization skill for the planning system. Uses the repository planning templates as the source of truth to create the initial planning workspace, intake markdown, PRD markdown, manifest.json, and state.json for a single app idea. Supports both command-driven execution and interactive fallback.
---

## Purpose

This skill is the internal worker behind `plan-start`.

It is responsible only for:

- creating the initial planning workspace
- drafting the intake document
- drafting the PRD
- creating `manifest.json`
- creating `state.json`

It must not:

- draft Stage 1 through Stage 4 documents
- generate slice plans
- generate task lists
- generate tickets

---

## Inputs

### Primary

- `app_name` (string, optional)
- `app_slug` (string, optional)
- `normalized_inputs` (object, optional)
- `planning_path` (string, optional)

### Reference Templates

- `Planning Template/Build-Plan-Template-Index.md`
- `Planning Template/App-Idea-Intake-Template.md`
- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/Tech-Stack-Decision-Template.md`
- `Planning Template/Stage-1-Dynamic-Questionnaire-Template.md`
- `Planning Template/Stage-2-Dynamic-Questionnaire-Template.md`
- `Planning Template/Stage-3-Dynamic-Questionnaire-Template.md`
- `Planning Template/Stage-4-Dynamic-Questionnaire-Template.md`
- `Planning Template/Frontend-Experience-Decision-Template.md`
- `Planning Template/Component-System-Decision-Template.md`
- `Planning Template/Business-Model-And-Pricing-Template.md`
- `Planning Template/User-Personas-And-Jobs-To-Be-Done-Template.md`
- `Planning Template/Security-And-Compliance-Template.md`
- `Planning Template/Integration-And-External-Dependency-Template.md`
- `Planning Template/Analytics-And-Success-Metrics-Template.md`
- `Planning Template/Operations-And-Support-Template.md`
- `Planning Template/Risk-And-Assumption-Register-Template.md`

## Template Dependencies

- `Planning Template/Build-Plan-Template-Index.md`
- `Planning Template/App-Idea-Intake-Template.md`
- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/Tech-Stack-Decision-Template.md`
- `Planning Template/Stage-1-Dynamic-Questionnaire-Template.md`
- `Planning Template/Stage-2-Dynamic-Questionnaire-Template.md`
- `Planning Template/Stage-3-Dynamic-Questionnaire-Template.md`
- `Planning Template/Stage-4-Dynamic-Questionnaire-Template.md`
- `Planning Template/Frontend-Experience-Decision-Template.md`
- `Planning Template/Component-System-Decision-Template.md`
- `Planning Template/Business-Model-And-Pricing-Template.md`
- `Planning Template/User-Personas-And-Jobs-To-Be-Done-Template.md`
- `Planning Template/Security-And-Compliance-Template.md`
- `Planning Template/Integration-And-External-Dependency-Template.md`
- `Planning Template/Analytics-And-Success-Metrics-Template.md`
- `Planning Template/Operations-And-Support-Template.md`
- `Planning Template/Risk-And-Assumption-Register-Template.md`

---

## Input Handling Logic

IF `normalized_inputs` exists:

- use it as the primary source
- do not re-prompt unless a required field is missing

ELSE:

- prompt for the minimum required app idea fields

IF `app_slug` missing:

- derive from `app_name`

IF `planning_path` missing:

- infer from app complexity:
  - `lean`
  - `standard`
  - `extended`

---

## Outputs

### Markdown

- `Build Plan/Active Plans/PRDs/markdown/App-Idea-Intake.md`
- `Build Plan/Active Plans/PRDs/markdown/Product-Requirements-Document.md`

### JSON

- `Build Plan/Active Plans/PRDs/json/App-Idea-Intake.json`
- `Build Plan/Active Plans/PRDs/json/Product-Requirements-Document.json`
- `Build Plan/Active Plans/status-report/json/manifest.json`
- `Build Plan/Active Plans/status-report/json/state.json`

---

## Output Schemas

### `manifest.json`

```json
{
  "app_name": "",
  "slug": "",
  "planning_path": "lean",
  "active_templates": [],
  "stage_seed_inputs": {
    "stage_1": {},
    "stage_2": {},
    "stage_3": {},
    "stage_4": {}
  },
  "commercial_mode": false,
  "current_stage": "planning_path_selected",
  "frozen_stages": [],
  "reopened_stages": [],
  "generated_artifacts": [
    "PRDs/markdown/App-Idea-Intake.md",
    "PRDs/markdown/Product-Requirements-Document.md",
    "PRDs/json/App-Idea-Intake.json",
    "PRDs/json/Product-Requirements-Document.json",
    "status-report/json/manifest.json",
    "status-report/json/state.json"
  ]
}
```

### `state.json`

```json
{
  "state": "planning_path_selected",
  "next_valid_commands": [
    "plan stage1 <app-name>",
    "plan draft all <app-name>",
    "plan status <app-name>"
  ],
  "blockers": [],
  "last_completed_command": "plan start <app-name>"
}
```

---

## Instructions

### Step 1 — Load Template References

Use the repository planning templates as structural references.

Do not create a custom planning format outside them.

Load at minimum:

- `Planning Template/Build-Plan-Template-Index.md`
- `Planning Template/App-Idea-Intake-Template.md`
- `Planning Template/Dynamic-Build-Plan-Template.md`

Use the remaining exact templates only to decide which downstream planning documents and stage questionnaire dependencies must be activated in the manifest.

### Step 2 — Normalize The App Idea

From the input, derive:

- app name
- app slug
- target user
- core problem
- app type
- primary workflow
- MVP must-haves
- non-goals
- constraint summary
- planning path
- lightweight stage seed inputs for Stage 1 through Stage 4 using the stage questionnaire templates as future-stage references

### Step 3 — Activate Templates

Always activate:

- `App-Idea-Intake-Template`
- `Dynamic-Build-Plan-Template`
- `Tech-Stack-Decision-Template`
- `Stage-1-Dynamic-Questionnaire-Template`
- `Stage-2-Dynamic-Questionnaire-Template`
- `Stage-3-Dynamic-Questionnaire-Template`
- `Stage-4-Dynamic-Questionnaire-Template`
- `Frontend-Experience-Decision-Template`
- `Component-System-Decision-Template`

Conditionally activate:

- `Business-Model-And-Pricing-Template` if commercial
- `User-Personas-And-Jobs-To-Be-Done-Template` if user/problem framing is still fuzzy
- `Security-And-Compliance-Template` if sensitive data, files, payments, or permissions are involved
- `Integration-And-External-Dependency-Template` if external APIs or vendors are part of MVP
- `Analytics-And-Success-Metrics-Template` if product measurement matters in MVP
- `Operations-And-Support-Template` if the app will be operated for real users
- `Risk-And-Assumption-Register-Template` for `standard` and `extended` paths by default

### Step 4 — Create Intake Markdown

Create a concise planning intake document aligned to:

- `App-Idea-Intake-Template.md`

Use headings that map cleanly to the template.

Also create a machine-readable JSON version of the intake using the same normalized content.

### Step 5 — Create PRD Markdown

Create a first-pass PRD aligned to:

- the PRD expectations in `Dynamic-Build-Plan-Template.md`

Keep it concise and operational.

Include:

- who the product serves
- the core user problem
- primary workflow
- MVP scope
- non-goals
- release boundary
- success criteria

Also create a machine-readable JSON version of the PRD using the same structured content.

### Step 6 — Create Manifest

Write a manifest that records:

- identity
- planning path
- active templates
- stage seed inputs
- current stage
- generated artifacts

### Step 7 — Create State

Write state that records:

- current state
- next valid commands
- blockers
- last completed command

### Step 8 — Output Validation

Before finishing, verify:

- markdown outputs are coherent and non-empty
- JSON outputs are valid and non-empty
- active templates match the input evidence

---

## Style Rules

- keep the output low-noise
- do not overproduce extra files
- do not embed long speculative sections
- keep PRD concise but structurally complete

---

## Constraints

- do not create later-stage planning docs
- do not activate every optional template by default
- do not skip manifest or state generation
- do not drift from repository planning templates
- do not write outputs outside `Build Plan/Active Plans/`
- keep markdown and JSON outputs paired in sibling `markdown/` and `json/` folders

---

## Review Intent

This skill is a draft for review before broader implementation.

It is deliberately small so the initialization behavior can be validated before the stage drafting commands and skills are added.
