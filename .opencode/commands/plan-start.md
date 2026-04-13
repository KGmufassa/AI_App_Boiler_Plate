---
Command: plan-start
Description: Draft command for initializing an app planning workspace. Collects app idea inputs once, activates the planning path, and invokes a single core planning skill to produce intake, PRD, manifest, and state artifacts using the repository planning templates as the source of truth.
agent: build
subtask: false
---

## Purpose

This is the first command in the planning orchestration system.

It is intentionally narrow for review:

- gather app idea inputs once
- derive a planning path
- activate required templates
- create the initial planning workspace
- draft the intake and PRD artifacts

This command does not draft Stage 1 through Stage 4.

It prepares the planning workspace for later stage commands.

---

## Template References

This command must use these planning templates as references:

- `Planning Template/App-Idea-Intake-Template.md`
- `Planning Template/Dynamic-Build-Plan-Template.md`
- `Planning Template/Tech-Stack-Decision-Template.md`
- `Planning Template/Stage-1-Dynamic-Questionnaire-Template.md`
- `Planning Template/Stage-2-Dynamic-Questionnaire-Template.md`
- `Planning Template/Stage-3-Dynamic-Questionnaire-Template.md`
- `Planning Template/Stage-4-Dynamic-Questionnaire-Template.md`
- `Planning Template/Frontend-Experience-Decision-Template.md`
- `Planning Template/Component-System-Decision-Template.md`

Optional template activation should be derived from:

- `Planning Template/Business-Model-And-Pricing-Template.md`
- `Planning Template/User-Personas-And-Jobs-To-Be-Done-Template.md`
- `Planning Template/Risk-And-Assumption-Register-Template.md`
- `Planning Template/Analytics-And-Success-Metrics-Template.md`
- `Planning Template/Security-And-Compliance-Template.md`
- `Planning Template/Integration-And-External-Dependency-Template.md`
- `Planning Template/Operations-And-Support-Template.md`

Do not invent a separate planning model when those templates already define the structure.

---

## Interactive Input Phase

Prompt once for the app idea.

Required input groups:

### 1. Identity

- app name
- one-sentence concept
- target user
- core problem solved

### 2. Product Shape

- primary workflow
- core features
- required inputs
- required outputs
- app type: web, mobile, desktop, backend, hybrid

### 3. MVP And Constraints

- must-have MVP capabilities
- explicit non-goals
- preferred stack if any
- budget or team constraints
- deployment constraints

### 4. Operational Flags

- commercial or not
- external integrations expected or not
- user data, files, or payments handled or not
- launch measurement important or not
- real user operations/support needed or not

### 5. Stage Seed Inputs

- delivery priority: fastest MVP, balanced, robust foundation
- primary device priority if known: desktop-first, mobile-first, responsive parity, unknown
- expected settings complexity: none, simple, category-based, advanced, unknown
- data density expectation: light, balanced, dense, unknown
- release rigor expectation: lightweight, standard, production-leaning, high-rigor, unknown

---

## Normalized Command Inputs

```json
{
  "app_name": "<app_name>",
  "concept": "<concept>",
  "target_user": "<target_user>",
  "problem": "<problem>",
  "primary_workflow": "<primary_workflow>",
  "core_features": [],
  "required_inputs": [],
  "required_outputs": [],
  "app_type": "<app_type>",
  "mvp_must_haves": [],
  "non_goals": [],
  "preferred_stack": "<preferred_stack>",
  "constraints": {
    "budget": "",
    "team": "",
    "deployment": ""
  },
  "stage_seed_inputs": {
    "stage_1": {
      "delivery_priority": ""
    },
    "stage_2": {
      "integration_depth_hint": "",
      "security_posture_hint": ""
    },
    "stage_3": {
      "device_priority": "",
      "settings_complexity": "",
      "data_density_expectation": ""
    },
    "stage_4": {
      "release_rigor": "",
      "operations_expectation": ""
    }
  },
  "flags": {
    "commercial": false,
    "needs_integrations": false,
    "handles_sensitive_data": false,
    "needs_analytics": false,
    "needs_operations": false
  }
}
```

---

## Execution Flow

### Step 1 — Normalize Inputs

- validate required inputs exist
- generate `app_slug`
- infer planning path: `lean`, `standard`, or `extended`
- derive stage seed inputs for Stage 1 through Stage 4 using the stage questionnaire templates as future planning references

### Step 2 — Invoke Skill

Skill:
- `plan-start-core`

Inputs:

```json
{
  "app_name": "<app_name>",
  "app_slug": "<app_slug>",
  "normalized_inputs": {},
  "planning_path": "<planning_path>"
}
```

### Step 3 — Validate Outputs

Verify all required outputs exist.

If any required output is missing:

- mark command as failed
- stop execution

---

## Required Outputs

Markdown:

- `Build Plan/Active Plans/PRDs/markdown/App-Idea-Intake.md`
- `Build Plan/Active Plans/PRDs/markdown/Product-Requirements-Document.md`

JSON:

- `Build Plan/Active Plans/PRDs/json/App-Idea-Intake.json`
- `Build Plan/Active Plans/PRDs/json/Product-Requirements-Document.json`
- `Build Plan/Active Plans/status-report/json/manifest.json`
- `Build Plan/Active Plans/status-report/json/state.json`

---

## Command Behavior

- prompts the user once
- activates only the templates justified by the inputs
- keeps the initial output set small
- does not draft stage documents
- does not freeze anything
- does not generate slices, tasks, or tickets

---

## Validation Rules

After execution:

- verify intake markdown exists
- verify PRD markdown exists
- verify intake JSON exists
- verify PRD JSON exists
- verify manifest JSON exists
- verify state JSON exists

If any file is missing:

- fail the command
- do not mark planning as started

---

## Constraints

- do not create Stage 1 through Stage 4 documents here
- do not activate optional templates without evidence from the inputs
- do not skip manifest/state creation
- do not bypass the repository planning templates
- do not ask multiple rounds of redundant questions if inputs are already sufficient

---

## Failure Handling

- missing required input -> stop and ask only for missing fields
- skill output missing -> fail validation and stop
- manifest/state malformed -> fail validation and stop

---

## Notes

- this is a draft command for review before full orchestration implementation
- later commands should build on the manifest and state generated here
- this command is intentionally low-noise and limited to initialization
