# Plan Command, Skill, And Template File Tree

This draft shows the planning workflow as a file-tree relationship between commands, internal skills, planning templates, generated documents, and shared state files.

```text
Planning Workflow
├── User Input
│   └── app idea, app constraints, stage seed inputs
│
├── Commands
│   ├── plan-start
│   │   ├── invokes skill
│   │   │   └── plan-start-core
│   │   ├── reads templates
│   │   │   ├── Planning Template/Build-Plan-Template-Index.md
│   │   │   ├── Planning Template/App-Idea-Intake-Template.md
│   │   │   ├── Planning Template/Dynamic-Build-Plan-Template.md
│   │   │   ├── Planning Template/Tech-Stack-Decision-Template.md
│   │   │   ├── Planning Template/Stage-1-Dynamic-Questionnaire-Template.md
│   │   │   ├── Planning Template/Stage-2-Dynamic-Questionnaire-Template.md
│   │   │   ├── Planning Template/Stage-3-Dynamic-Questionnaire-Template.md
│   │   │   ├── Planning Template/Stage-4-Dynamic-Questionnaire-Template.md
│   │   │   ├── Planning Template/Frontend-Experience-Decision-Template.md
│   │   │   └── Planning Template/Component-System-Decision-Template.md
│   │   ├── conditionally activates templates
│   │   │   ├── Planning Template/Business-Model-And-Pricing-Template.md
│   │   │   ├── Planning Template/User-Personas-And-Jobs-To-Be-Done-Template.md
│   │   │   ├── Planning Template/Security-And-Compliance-Template.md
│   │   │   ├── Planning Template/Integration-And-External-Dependency-Template.md
│   │   │   ├── Planning Template/Analytics-And-Success-Metrics-Template.md
│   │   │   ├── Planning Template/Operations-And-Support-Template.md
│   │   │   └── Planning Template/Risk-And-Assumption-Register-Template.md
│   │   └── writes documents
│   │       ├── Build Plan/Active Plans/PRDs/markdown/App-Idea-Intake.md
│   │       ├── Build Plan/Active Plans/PRDs/json/App-Idea-Intake.json
│   │       ├── Build Plan/Active Plans/PRDs/markdown/Product-Requirements-Document.md
│   │       ├── Build Plan/Active Plans/PRDs/json/Product-Requirements-Document.json
│   │       ├── Build Plan/Active Plans/status-report/json/manifest.json
│   │       └── Build Plan/Active Plans/status-report/json/state.json
│   │
│   ├── plan-stage1
│   │   ├── requires
│   │   │   ├── plan-start complete
│   │   │   ├── Product-Requirements-Document.md/json
│   │   │   ├── manifest.json
│   │   │   └── state.json
│   │   ├── invokes skills
│   │   │   ├── plan-stage1-core
│   │   │   └── plan-freeze-stage1-core
│   │   ├── reads templates
│   │   │   ├── Planning Template/Dynamic-Build-Plan-Template.md
│   │   │   ├── Planning Template/Tech-Stack-Decision-Template.md
│   │   │   ├── Planning Template/Stage-1-Dynamic-Questionnaire-Template.md
│   │   │   └── Planning Template/Business-Model-And-Pricing-Template.md
│   │   └── writes documents
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-1/markdown/MVP-Scope-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-1/markdown/Tech-Stack-Decision-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-1/markdown/Decision-Log-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-1/markdown/Dependency-Gate-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-1/markdown/Unified-Architecture-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-1/markdown/Business-Model-And-Pricing-Plan.md
│   │       ├── paired JSON files in Build Plan/Active Plans/1-4 Stage Planning/Stage-1/json/
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-1/markdown/Stage-1-Freeze-Review.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-1/json/Stage-1-Freeze-Review.json
│   │       ├── manifest.json
│   │       └── state.json
│   │
│   ├── plan-stage2
│   │   ├── requires
│   │   │   ├── Stage 1 frozen
│   │   │   ├── manifest.json
│   │   │   └── state.json
│   │   ├── invokes skills
│   │   │   ├── plan-stage2-core
│   │   │   └── plan-freeze-stage2-core
│   │   ├── reads templates
│   │   │   ├── Planning Template/Dynamic-Build-Plan-Template.md
│   │   │   ├── Planning Template/Stage-2-Dynamic-Questionnaire-Template.md
│   │   │   ├── Planning Template/User-Personas-And-Jobs-To-Be-Done-Template.md
│   │   │   ├── Planning Template/Integration-And-External-Dependency-Template.md
│   │   │   └── Planning Template/Security-And-Compliance-Template.md
│   │   └── writes documents
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Data-Schema-And-Domain-Model-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Canonical-State-And-Math-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/API-And-Job-Contract-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Runtime-Contract-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/User-Personas-And-Jobs-To-Be-Done-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Integration-And-External-Dependency-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Security-And-Compliance-Plan.md
│   │       ├── paired JSON files in Build Plan/Active Plans/1-4 Stage Planning/Stage-2/json/
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-2/markdown/Stage-2-Freeze-Review.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-2/json/Stage-2-Freeze-Review.json
│   │       ├── manifest.json
│   │       └── state.json
│   │
│   ├── plan-stage3
│   │   ├── requires
│   │   │   ├── Stage 2 frozen
│   │   │   ├── manifest.json
│   │   │   └── state.json
│   │   ├── invokes skills
│   │   │   ├── plan-stage3-core
│   │   │   └── plan-freeze-stage3-core
│   │   ├── reads templates
│   │   │   ├── Planning Template/Dynamic-Build-Plan-Template.md
│   │   │   ├── Planning Template/Stage-3-Dynamic-Questionnaire-Template.md
│   │   │   ├── Planning Template/Frontend-Experience-Decision-Template.md
│   │   │   ├── Planning Template/Component-System-Decision-Template.md
│   │   │   └── Planning Template/Analytics-And-Success-Metrics-Template.md
│   │   └── writes documents
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Primary-UX-And-Interaction-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Page-Architecture-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Frontend-Experience-Decision-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Component-System-Decision-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Page-Component-Mapping-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/State-And-History-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Fallback-And-Recovery-UX-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Artifact-Or-Output-Lifecycle-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Analytics-And-Success-Metrics-Plan.md
│   │       ├── paired JSON files in Build Plan/Active Plans/1-4 Stage Planning/Stage-3/json/
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-3/markdown/Stage-3-Freeze-Review.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-3/json/Stage-3-Freeze-Review.json
│   │       ├── manifest.json
│   │       └── state.json
│   │
│   ├── plan-stage4
│   │   ├── requires
│   │   │   ├── Stage 3 frozen
│   │   │   ├── manifest.json
│   │   │   └── state.json
│   │   ├── invokes skills
│   │   │   ├── plan-stage4-core
│   │   │   └── plan-freeze-stage4-core
│   │   ├── reads templates
│   │   │   ├── Planning Template/Dynamic-Build-Plan-Template.md
│   │   │   ├── Planning Template/Stage-4-Dynamic-Questionnaire-Template.md
│   │   │   ├── Planning Template/Operations-And-Support-Template.md
│   │   │   └── Planning Template/Risk-And-Assumption-Register-Template.md
│   │   └── writes documents
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Deployment-And-Infrastructure-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Caching-And-Performance-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/QA-And-Release-Readiness-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Vertical-Release-Slice-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Operations-And-Support-Plan.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Risk-And-Assumption-Register.md
│   │       ├── paired JSON files in Build Plan/Active Plans/1-4 Stage Planning/Stage-4/json/
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-4/markdown/Stage-4-Freeze-Review.md
│   │       ├── Build Plan/Active Plans/1-4 Stage Planning/Stage-4/json/Stage-4-Freeze-Review.json
│   │       ├── manifest.json
│   │       └── state.json
│   │
│   ├── plan-draft-all
│   │   ├── invokes skill
│   │   │   └── plan-draft-all-core
│   │   ├── delegates to commands
│   │   │   ├── plan-stage1
│   │   │   ├── plan-stage2
│   │   │   ├── plan-stage3
│   │   │   └── plan-stage4
│   │   └── writes documents
│   │       ├── Build Plan/Active Plans/markdown/plan-draft-all-report.md
│   │       ├── Build Plan/Active Plans/json/plan-draft-all-report.json
│   │       ├── manifest.json
│   │       └── state.json
│   │
│   ├── plan-slices
│   │   ├── requires
│   │   │   └── Stage 4 frozen
│   │   ├── invokes skill
│   │   │   └── plan-slices-core
│   │   ├── reads documents
│   │   │   ├── frozen Stage 1 artifacts
│   │   │   ├── frozen Stage 2 artifacts
│   │   │   ├── frozen Stage 3 artifacts
│   │   │   └── frozen Stage 4 artifacts
│   │   └── writes documents
│   │       ├── Build Plan/Active Plans/Slice Implementation/markdown/Slice-Implementation-Index.md
│   │       ├── Build Plan/Active Plans/Slice Implementation/markdown/Slice-<n>-<Outcome>-Implementation-Plan.md
│   │       ├── Build Plan/Active Plans/Slice Implementation/json/Slice-Implementation-Index.json
│   │       ├── Build Plan/Active Plans/Slice Implementation/json/Slice-<n>-<Outcome>-Implementation-Plan.json
│   │       ├── manifest.json
│   │       └── state.json
│   │
│   ├── plan-tasks
│   │   ├── requires
│   │   │   └── slice plans generated
│   │   ├── invokes skill
│   │   │   └── plan-tasks-core
│   │   ├── reads documents
│   │   │   └── Slice Implementation markdown/json outputs
│   │   └── writes documents
│   │       ├── Build Plan/Active Plans/Task List/markdown/Task-List-Index.md
│   │       ├── Build Plan/Active Plans/Task List/markdown/Slice-<n>-Task-List.md
│   │       ├── Build Plan/Active Plans/Task List/json/Task-List-Index.json
│   │       ├── Build Plan/Active Plans/Task List/json/Slice-<n>-Task-List.json
│   │       ├── manifest.json
│   │       └── state.json
│   │
│   ├── plan-tickets
│   │   ├── requires
│   │   │   └── task lists generated
│   │   ├── invokes skill
│   │   │   └── plan-tickets-core
│   │   ├── reads documents
│   │   │   └── Task List markdown/json outputs
│   │   └── writes documents
│   │       ├── Build Plan/Active Plans/Implementation Tickets/markdown/Implementation-Tickets-Index.md
│   │       ├── Build Plan/Active Plans/Implementation Tickets/markdown/Slice-<n>-Tickets.md
│   │       ├── Build Plan/Active Plans/Implementation Tickets/json/Implementation-Tickets-Index.json
│   │       ├── Build Plan/Active Plans/Implementation Tickets/json/Slice-<n>-Tickets.json
│   │       ├── manifest.json
│   │       └── state.json
│   │
│   ├── plan-status
│   │   ├── invokes skill
│   │   │   └── plan-status-core
│   │   ├── reads documents
│   │   │   ├── Build Plan/Active Plans/status-report/json/manifest.json
│   │   │   └── Build Plan/Active Plans/status-report/json/state.json
│   │   └── writes documents
│   │       ├── Build Plan/Active Plans/status-report/markdown/status-report.md
│   │       └── Build Plan/Active Plans/status-report/json/status-report.json
│   │
│   └── plan-reopen-stage
│       ├── requires
│       │   └── target stage frozen
│       ├── invokes skill
│       │   └── plan-reopen-stage-core
│       ├── updates documents
│       │   ├── manifest.json
│       │   └── state.json
│       └── writes documents
│           ├── Build Plan/Active Plans/markdown/reopen-stage-<n>-report.md
│           └── Build Plan/Active Plans/json/reopen-stage-<n>-report.json
│
└── Shared Progression Authority
    ├── Build Plan/Active Plans/status-report/json/manifest.json
    └── Build Plan/Active Plans/status-report/json/state.json
```

## Notes

- The tree represents command ownership, not physical repository layout.
- Markdown and JSON outputs are paired unless a command explicitly produces status-only metadata.
- Optional templates only produce downstream documents when activated by `plan-start-core`.
- Freeze skills lock the stage only after the user review gate.
