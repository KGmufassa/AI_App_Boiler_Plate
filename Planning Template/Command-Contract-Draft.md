# Command Contract Draft

## Purpose

This draft defines the command contract for the planning orchestration system.

It maps:

- user-facing commands
- internal skills
- prerequisites
- outputs
- allowed parallelism

This document is intended to sit between the orchestration draft and any future implementation work.

---

## Core Rule

Commands are the user-facing control surface.

Skills are internal workers invoked by commands.

Templates are the output schema.

The manifest and state files are the authority on progression.

---

## Global Output Convention

All planning commands and skills must use a split output layout:

- markdown artifacts in `markdown/`
- machine-readable artifacts in `json/`

Examples:

- `.../PRDs/markdown/Product-Requirements-Document.md`
- `.../PRDs/json/Product-Requirements-Document.json`
- `.../1-4 Stage Planning/Stage-1/markdown/MVP-Scope-Plan.md`
- `.../1-4 Stage Planning/Stage-1/json/MVP-Scope-Plan.json`
- `.../meta/json/manifest.json`
- `.../meta/json/state.json`

Command files should validate this layout.

Skill files should be the sole writers of these paired outputs.

---

## Command Table

| Command | Internal Skills | Parallel | Prerequisites | Outputs |
|---|---|---:|---|---|
| `plan start <app-name>` | `plan-intake`, `plan-classifier`, `plan-prd`, `plan-scaffold` | Limited | none | intake complete, planning path selected, active templates selected, workspace scaffolded, PRD drafted |
| `plan draft all <app-name>` | `plan-stage1`, `plan-stage2`, `plan-stage3`, `plan-stage4`, `plan-reconcile`, `plan-freeze-check` | Mixed | `plan start` complete | all stages completed in sequence, or stopped at first failed gate |
| `plan stage1 <app-name>` | `plan-stage1-core`, `plan-freeze-stage1-core` | Mixed | `plan start` complete | Stage 1 drafted and frozen by default |
| `plan stage2 <app-name>` | `plan-stage2-core`, `plan-freeze-stage2-core` | Mixed | Stage 1 frozen | Stage 2 drafted and frozen by default |
| `plan stage3 <app-name>` | `plan-stage3-core`, `plan-freeze-stage3-core` | Mixed | Stage 2 frozen | Stage 3 drafted and frozen by default |
| `plan stage4 <app-name>` | `plan-stage4-core`, `plan-freeze-stage4-core` | Mixed | Stage 3 frozen | Stage 4 drafted and frozen by default |
| `plan slices <app-name>` | `plan-slices` | No | Stage 1-4 frozen | slice implementation plans |
| `plan tasks <app-name>` | `plan-tasks` | No | slices generated | task lists |
| `plan tickets <app-name>` | `plan-tickets` | No | task lists generated | implementation tickets |
| `plan status <app-name>` | `plan-status` | No | workspace exists | current stage, frozen stages, active templates, blockers, next valid command |
| `plan reopen stage <n> <app-name>` | `plan-reopen`, `plan-decision-log-update` | No | target stage frozen | stage reopened, freeze status updated, decision log updated |

---

## Stage Skill Ownership

| Stage | Primary Skills | Conditional Skills |
|---|---|---|
| Start | `plan-intake`, `plan-classifier`, `plan-prd`, `plan-scaffold` | none |
| Stage 1 | `plan-stage1-core`, `plan-freeze-stage1-core` | business logic may be activated inside Stage 1 drafting |
| Stage 2 | `plan-stage2-core`, `plan-freeze-stage2-core` | personas, integrations, security logic may be activated inside Stage 2 drafting |
| Stage 3 | `plan-stage3-core`, `plan-freeze-stage3-core` | analytics logic may be activated inside Stage 3 drafting |
| Stage 4 | `plan-stage4-core`, `plan-freeze-stage4-core` | operations and risk logic may be activated inside Stage 4 drafting |
| Execution | `plan-slices`, `plan-tasks`, `plan-tickets` | none |

---

## Command Semantics

### `plan start <app-name>`

Responsibility:

- initialize the planning workspace
- gather intake
- classify the plan path
- activate the right templates
- scaffold the workspace
- draft the PRD

Notes:

- this is the only command that may run before any stage exists
- keep it mostly sequential

### `plan draft all <app-name>`

Responsibility:

- run Stage 1 through Stage 4 in sequence
- invoke one combined stage command per stage
- stop immediately if a stage fails validation

Notes:

- this is a supervisor command
- it should reuse the exact stage-specific commands internally
- it must not bypass stage gates

### `plan stage<n> <app-name>`

Responsibility:

- draft only the documents owned by that stage
- reconcile the results
- validate freeze criteria
- freeze the stage by default

Notes:

- bounded parallelism is allowed during the drafting portion
- reconciliation and freeze remain sequential internally
- `--draft-only` is the recommended optional mode when manual review is needed

### `plan slices <app-name>`

Responsibility:

- generate vertical slice implementation plans from the frozen stack

Notes:

- only available after Stage 4 freeze

### `plan tasks <app-name>`

Responsibility:

- generate task lists from slice implementation plans

### `plan tickets <app-name>`

Responsibility:

- generate execution-ready tickets from task lists

### `plan status <app-name>`

Responsibility:

- report planning state and next valid operations

Recommended output:

- current state
- current stage
- frozen stages
- active templates
- blockers
- next valid command

### `plan reopen stage <n> <app-name>`

Responsibility:

- reopen a frozen stage when contradictions or major scope changes appear

Notes:

- reopening a stage should invalidate downstream frozen stages if the contradiction affects them

---

## Parallelism Rules

### Allowed

Parallelism is allowed only inside `draft` commands.

Safe examples:

- Stage 1:
  - Stage 1 drafting work inside `plan stage1`
- Stage 2:
  - Stage 2 drafting work inside `plan stage2`
- Stage 3:
  - Stage 3 drafting work inside `plan stage3`
- Stage 4:
  - Stage 4 drafting work inside `plan stage4`

### Not allowed

Do not parallelize:

- stage reconciliation
- slice generation
- task generation
- ticket generation
- reopen resolution

---

## Validation Rules

Every command should validate:

- the workspace exists
- the manifest exists
- the current state allows the command
- required upstream stages are frozen
- required active templates exist before drafting begins

Example:

`plan stage3` must fail if:

- Stage 2 is not frozen
- the frontend experience template is active but missing
- the manifest is missing activated template data

---

## State Transition Rules

Recommended transitions:

- `plan start`:
  - `idea_intake_started` -> `planning_path_selected`
- `plan stage1`:
  - `planning_path_selected` -> `stage_1_drafting` -> `stage_1_frozen`
- `plan stage2`:
  - `stage_1_frozen` -> `stage_2_drafting` -> `stage_2_frozen`
- `plan stage3`:
  - `stage_2_frozen` -> `stage_3_drafting` -> `stage_3_frozen`
- `plan stage4`:
  - `stage_3_frozen` -> `stage_4_drafting` -> `stage_4_frozen`
- `plan slices`:
  - `stage_4_frozen` -> `slice_plans_generated`
- `plan tasks`:
  - `slice_plans_generated` -> `task_lists_generated`
- `plan tickets`:
  - `task_lists_generated` -> `tickets_generated`

---

## Suggested Future Refinements

Before implementation, the next documents to write should be:

1. manifest schema draft
2. state schema draft
3. template activation matrix
4. stage reconciliation rules
5. freeze validation checklist per stage

---

## Draft Recommendation

The cleanest command system is:

- one command family: `plan`
- bounded combined stage commands as the primitives
- one supervisor command: `plan draft all`
- skills invoked internally by commands
- parallelism allowed only during the drafting phase inside stage commands
- reconciliation and freeze always sequential internally
