# Skill And Command Orchestration Draft

## Purpose

This draft defines a practical operating structure for using commands to initiate multiple planning skills, including parallel execution where it is safe.

The goal is to:

- keep the planning process deterministic
- prevent premature slice and ticket generation
- activate only the templates that apply to the current app idea
- allow bounded parallel work for independent planning tracks

This is a draft for the operating model, not an implementation spec.

---

## Core Principle

Treat:

- templates as the planning data model
- commands as orchestration controls
- skills as bounded document-producing workers
- a manifest/state file as the source of truth for progression

Do not use one large skill that attempts to create the full planning stack in a single pass.

Instead use:

`command -> state check -> activate skills -> collect outputs -> freeze stage -> advance state`

---

## Recommended System Shape

For each app idea, create:

- one planning workspace
- one manifest file
- one state file
- one set of activated planning documents

Recommended workspace shape:

- `Build Plan/Active Plans/<app-slug>/`
- `Build Plan/Active Plans/<app-slug>/meta/json/manifest.json`
- `Build Plan/Active Plans/<app-slug>/meta/json/state.json`
- `Build Plan/Active Plans/<app-slug>/PRDs/`
- `Build Plan/Active Plans/<app-slug>/1-4 Stage Planning/`
- `Build Plan/Active Plans/<app-slug>/Slice Implementaion/`
- `Build Plan/Active Plans/<app-slug>/Task List/`
- `Build Plan/Active Plans/<app-slug>/Implementation Tickets/`

---

## Global Output Convention

All planning artifacts should follow one output convention:

- human-readable artifacts go in a sibling `markdown/` folder
- machine-readable artifacts go in a sibling `json/` folder

Examples:

- `Build Plan/Active Plans/<app-slug>/PRDs/markdown/Product-Requirements-Document.md`
- `Build Plan/Active Plans/<app-slug>/PRDs/json/Product-Requirements-Document.json`
- `Build Plan/Active Plans/<app-slug>/1-4 Stage Planning/Stage-1/markdown/MVP-Scope-Plan.md`
- `Build Plan/Active Plans/<app-slug>/1-4 Stage Planning/Stage-1/json/MVP-Scope-Plan.json`
- `Build Plan/Active Plans/<app-slug>/meta/json/manifest.json`
- `Build Plan/Active Plans/<app-slug>/meta/json/state.json`

This convention should apply to:

- PRDs
- stage planning documents
- slice implementation plans
- task lists
- implementation tickets
- orchestration metadata

Do not mix markdown and JSON files in the same leaf folder.

---

## Manifest Model

The manifest should answer:

- app name
- slug
- planning path: lean, standard, extended
- active templates
- commercial mode: true or false
- current stage
- frozen stages
- reopened stages
- command history
- generated artifacts

Minimal manifest fields:

```json
{
  "app_name": "Example App",
  "slug": "example-app",
  "planning_path": "standard",
  "active_templates": [],
  "commercial_mode": false,
  "current_stage": "intake",
  "frozen_stages": [],
  "reopened_stages": [],
  "generated_artifacts": []
}
```

---

## State Machine

Use explicit states rather than freeform progress.

Recommended states:

- `idea_intake_started`
- `idea_intake_complete`
- `planning_path_selected`
- `core_templates_scaffolded`
- `stage_1_drafting`
- `stage_1_frozen`
- `stage_2_drafting`
- `stage_2_frozen`
- `stage_3_drafting`
- `stage_3_frozen`
- `stage_4_drafting`
- `stage_4_frozen`
- `slice_plans_generated`
- `task_lists_generated`
- `tickets_generated`

Command execution should be blocked if prerequisites are not satisfied.

---

## Skill Families

Use small, bounded skill families.

### 1. Intake skills

Responsibility:

- gather the app idea
- fill the intake template
- identify missing inputs

Suggested skills:

- `plan-intake`
- `plan-classifier`

### 2. Core planning skills

Responsibility:

- produce the required core planning documents
- enforce stage gates

Suggested skills:

- `plan-prd`
- `plan-stage1`
- `plan-stage2`
- `plan-stage3`
- `plan-stage4`

### 3. Conditional planning skills

Responsibility:

- produce optional plans only when activated

Suggested skills:

- `plan-personas`
- `plan-business`
- `plan-security`
- `plan-integrations`
- `plan-analytics`
- `plan-operations`
- `plan-risk`

### 4. Execution planning skills

Responsibility:

- generate slices, task lists, and tickets from frozen plans

Suggested skills:

- `plan-slices`
- `plan-tasks`
- `plan-tickets`

---

## Command Layer

Commands should be the only entry point.

The command decides:

- what state the plan is in
- which skills can run
- which skills can run in parallel
- which stage can be frozen

Recommended commands:

- `plan new <app-name>`
- `plan intake <app-name>`
- `plan classify <app-name>`
- `plan scaffold <app-name>`
- `plan stage1 <app-name>`
- `plan stage2 <app-name>`
- `plan stage3 <app-name>`
- `plan stage4 <app-name>`
- `plan draft all <app-name>`
- `plan generate slices <app-name>`
- `plan generate tasks <app-name>`
- `plan generate tickets <app-name>`
- `plan status <app-name>`
- `plan reopen <app-name> --stage <n>`

---

## Activation Logic

After intake, the classifier command should select:

- planning path: `lean`, `standard`, or `extended`
- active templates
- required stages
- optional skills to enable

Suggested activation rules:

- always activate:
  - PRD
  - Optimized MVP plan
  - Tech stack decision
  - Frontend experience decision
  - Component system decision
  - Stage 1 through Stage 4 core docs
- activate `Business Model And Pricing` only if commercial mode is true
- activate `User Personas And JTBD` if the audience or problem statement is still fuzzy
- activate `Security And Compliance` if the app handles user data, files, payments, permissions, or regulated flows
- activate `Integration And External Dependency` if third-party APIs or vendors are part of MVP
- activate `Analytics And Success Metrics` if launch measurement matters in MVP
- activate `Operations And Support` if the app will be run for real users
- activate `Risk And Assumption Register` for standard and extended paths by default

---

## Parallelism Policy

Parallelism should be allowed only when documents do not depend on each other for foundational assumptions.

### Safe parallel work

After intake and classification:

- `plan-prd`
- `plan-business` if commercial
- `plan-personas` if activated

These can run in parallel because they inform scope, but do not directly overwrite the same contract space if scoped correctly.

During Stage 1 drafting:

- `plan-stage1` for MVP scope and decision log
- `plan-business` if relevant

These may run in parallel if the business model is an input, not an afterthought.

During Stage 2 drafting:

- `plan-stage2`
- `plan-integrations`
- `plan-security`

These can run in parallel if the orchestrator later performs a reconciliation pass before freezing Stage 2.

During Stage 3 drafting:

- `plan-stage3`
- `plan-analytics`

These can run in parallel because instrumentation rules depend on workflows, but can usually be drafted independently and reconciled before freeze.

During Stage 4 drafting:

- `plan-stage4`
- `plan-operations`
- `plan-risk`

These can run in parallel because they shape readiness and risk response rather than the canonical product contracts.

### Work that should stay sequential

Do not parallelize:

- Stage freeze operations
- slice generation before Stage 4 freeze
- task generation before slice generation
- ticket generation before task generation
- reopen resolution when foundational contradictions exist

---

## Recommended Command Flow

### Flow 1: Initialize a new plan

1. `plan new <app-name>`
2. `plan intake <app-name>`
3. `plan classify <app-name>`
4. `plan scaffold <app-name>`

Outputs:

- workspace created
- manifest created
- state set to `planning_path_selected`
- active templates selected

### Flow 2: Draft core planning docs

1. command launches:
   - `plan-prd`
   - `plan-business` if active
   - `plan-personas` if active
2. orchestrator reconciles outputs
3. command transitions to Stage 1 drafting

### Flow 3: Run each stage command

For each stage:

1. launch drafting work
2. gather outputs
3. run a reconciliation pass
4. run gate checks
5. freeze the stage
6. update manifest and state

### Flow 4: Generate execution docs

After Stage 4 freeze:

1. `plan generate slices <app-name>`
2. `plan generate tasks <app-name>`
3. `plan generate tickets <app-name>`

---

## Reconciliation Step

Every parallel phase needs one reconciliation step.

This step should:

- detect contradictions across generated docs
- reopen the affected stage if required
- update the decision log if a new foundational decision was made
- refuse freeze if gate conditions are not met

Without this step, parallel skills will create drift instead of speed.

---

## Freeze Criteria Model

Each freeze command should validate:

- all required docs for the stage exist
- all required docs for the stage are non-empty
- gate conditions are satisfied
- no unresolved contradictions are flagged
- any conditional docs affecting the stage are complete

Example:

`plan stage2 <app-name>` should fail if:

- integration dependencies are active but not documented
- security constraints are active but unresolved
- canonical data contracts still conflict with external dependency assumptions

---

## Suggested Skill Contracts

Each skill should have:

- clearly owned output files
- declared inputs
- declared prerequisites
- no permission to rewrite unrelated planning docs

Example:

- `plan-integrations`
  - inputs:
    - PRD
    - intake
    - active template list
  - outputs:
    - `Integration-And-External-Dependency-Plan.md`
  - cannot modify:
    - MVP scope
    - canonical schema docs

This reduces merge-like conflicts between skills.

---

## Suggested Future Implementation

If you later implement this as actual automation, the cleanest structure is:

- one shell command namespace: `plan`
- one manifest/state interpreter
- one skill runner per planning phase
- one reconciliation skill for each stage

The command is the conductor.

The skills are specialist workers.

The manifest is the authority.

The templates are the schema.

---

## Recommended First Implementation Scope

Do not automate the entire system at once.

Start with:

1. `plan new`
2. `plan classify`
3. `plan scaffold`
4. `plan stage1`
5. `plan status`

That gives you:

- the state machine
- template activation
- one real parallel drafting phase
- one real freeze gate

After that, extend to Stages 2 through 4 and finally execution docs.

---

## Draft Recommendation

The best operating flow is:

`command-driven state machine + bounded stage skills + selective parallel drafting + mandatory reconciliation before freeze`

That gives you speed where the planning tracks are independent, while preserving the rigor of the stage-gate planning model.
