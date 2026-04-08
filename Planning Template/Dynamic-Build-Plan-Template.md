# Dynamic Build Plan Template

## Purpose

This document is a reusable master template for turning any app idea into a full implementation planning system.

Use the placeholders in brackets and replace them with idea-specific decisions.

---

# 1. Planning Stack

Build the planning stack in this order.

## PRDs

Create:

- `Product-Requirements-Document.md`
- `Optimized-MVP-Plan.md`
- `Tech-Stack-Decision-Plan.md`
- `Frontend-Experience-Decision-Plan.md`
- `Component-System-Decision-Plan.md`
- `User-Personas-And-Jobs-To-Be-Done-Plan.md`
- `Risk-And-Assumption-Register.md`
- `Analytics-And-Success-Metrics-Plan.md`
- `Security-And-Compliance-Plan.md`
- `Integration-And-External-Dependency-Plan.md`
- `Operations-And-Support-Plan.md`
- `Business-Model-And-Pricing-Plan.md`

The PRD should define:

- who the product serves
- the core user problem
- user journeys
- MVP scope
- non-goals
- release boundary
- success criteria

The optimized MVP plan should define:

- planning classification
- app type
- architecture pressure points
- likely domain risks
- planning emphasis by layer
- parallel planning tracks
- hard dependency gates
- the recommended build sequence

The tech stack decision plan should define:

- candidate stacks
- evaluation criteria
- recommended stack by layer
- rejected alternatives
- lock-in and migration risks

The frontend experience decision plan should define:

- candidate layout models
- candidate visual directions
- recommended app shell and navigation structure
- responsive behavior rules
- typography, color, spacing, and motion character
- accessibility and theme rules
- rejected experience options
- workflow-to-experience alignment

The component system decision plan should define:

- component architecture options
- token and styling strategy
- build-vs-buy decisions for major UI areas
- reuse and customization rules
- implementation implications for the frontend codebase

The personas and jobs-to-be-done plan should define:

- primary personas
- primary jobs to be done
- prioritized user problems
- MVP implications of the chosen problem framing

The risk and assumption register should define:

- major unvalidated assumptions
- major delivery and product risks
- mitigation and validation plans
- planning implications for slice order

The analytics and success metrics plan should define:

- product success questions
- key metrics
- MVP event instrumentation requirements
- funnel or journey measurement points

The security and compliance plan should define:

- auth and permission requirements
- data sensitivity and retention rules
- minimum required protections
- compliance constraints that affect planning

The integration and external dependency plan should define:

- MVP dependencies
- dependency risks
- fallback behavior
- isolation and mocking strategy

The operations and support plan should define:

- ownership model
- support and incident expectations
- monitoring and admin needs
- recovery tooling implications

The business model and pricing plan should define:

- commercial model
- pricing options
- selected pricing boundaries
- billing and entitlement implications

---

## Stage 1: Strategy Foundation

Create:

- `MVP-Scope-Plan.md`
- `Tech-Stack-Decision-Plan.md`
- `Business-Model-And-Pricing-Plan.md`
- `Decision-Log-Plan.md`
- `Dependency-Gate-Plan.md`
- `Unified-Architecture-Plan.md`

Freeze in this stage:

- MVP inclusion and exclusion rules
- selected stack and rationale
- business model and pricing direction if relevant
- high-cost or irreversible product decisions
- downstream dependency gates
- system boundary and service ownership

Questions Stage 1 must answer:

- what is the release boundary
- what stack best fits the product and team constraints
- what business model constrains the product and system design
- what is the source of truth
- what belongs in the control plane, client, worker, or external integration
- what assumptions are expensive to change later

---

## Stage 2: Core Contracts

Create:

- `User-Personas-And-Jobs-To-Be-Done-Plan.md`
- `Data-Schema-And-Domain-Model-Plan.md`
- `Canonical-State-And-Math-Plan.md`
- `API-And-Job-Contract-Plan.md`
- `Runtime-Contract-Plan.md`
- `Integration-And-External-Dependency-Plan.md`
- `Security-And-Compliance-Plan.md`

Freeze in this stage:

- primary user and problem framing
- core entities
- persisted state model
- API contracts
- async job contracts
- external dependency boundaries
- security and compliance constraints
- coordinate, timing, pricing, permission, or workflow math
- artifact or output contract shapes

Questions Stage 2 must answer:

- what is the canonical runtime model
- what payloads move between systems
- what data is persisted versus derived
- what integrations and compliance constraints shape the contracts
- what must remain semantically equivalent across environments

Note:

If the app has no geometry or coordinate system, replace math rules with the canonical deterministic rules that matter most for the product, such as permission inheritance, billing calculations, workflow transitions, or ranking logic.

---

## Stage 3: Workflow Behavior

Create:

- `Primary-UX-And-Interaction-Plan.md`
- `Frontend-Experience-Decision-Plan.md`
- `Component-System-Decision-Plan.md`
- `State-And-History-Plan.md`
- `Fallback-And-Recovery-UX-Plan.md`
- `Artifact-Or-Output-Lifecycle-Plan.md`
- `Analytics-And-Success-Metrics-Plan.md`

Freeze in this stage:

- frontend experience direction
- component system strategy
- user workflow behavior
- state mutation rules
- success measurement and MVP instrumentation rules
- undo, redo, retry, autosave, resume, or approval behavior
- failure visibility and recovery expectations
- publish, export, sync, or output lifecycle rules

Questions Stage 3 must answer:

- what frontend experience best supports the product workflows and tone
- what component system best balances speed, consistency, and customization
- what the user can do end to end
- what signals prove the product is working
- how async work surfaces in the product
- what failure looks like
- how the system restores trust after failure

---

## Stage 4: Platform And Delivery

Create:

- `Deployment-And-Infrastructure-Plan.md`
- `Caching-And-Performance-Plan.md`
- `QA-And-Release-Readiness-Plan.md`
- `Vertical-Release-Slice-Plan.md`
- `Operations-And-Support-Plan.md`
- `Risk-And-Assumption-Register.md`

Freeze in this stage:

- deployment shape
- environments
- observability expectations
- caching rules
- performance budgets
- operations and support model
- QA gates
- slice-based release order

Questions Stage 4 must answer:

- how the system runs locally and in production
- what must be cached
- what ongoing operational support the product requires
- what quality bar blocks release
- what the first valuable vertical slice is

---

# 2. Dependency Gates

Every app plan should define at least these gates.

## Gate 1: Scope Freeze

Do not start implementation planning until:

- MVP scope is approved
- tech stack is approved
- business model is approved if relevant
- non-goals are approved
- release boundary is approved

## Gate 2: Contract Freeze

Do not plan integrated build work until:

- primary persona and problem framing are approved
- architecture is approved
- domain model is approved
- API contracts are approved
- security and compliance constraints are approved
- deterministic system rules are approved

## Gate 3: Frontend Experience Freeze

Do not plan substantial frontend implementation until:

- frontend experience is approved
- component system strategy is approved
- primary workflow behavior is approved
- MVP analytics requirements are approved
- responsive rules are approved
- recovery and failure surfaces are defined

## Gate 4: End-To-End Mock Ready

Do not require real integrations until:

- critical external dependencies are approved
- mock data or mock services exist for the main journey
- UI and backend can run the primary flow end to end
- async states and failures can be exercised without real external dependencies

## Gate 5: Base Pipeline Stable

Do not add advanced features until:

- core create/read/update flow works
- primary async or background flows work
- output or delivery path works
- top risks have mitigation paths
- failure and retry behavior is visible

---

# 3. Vertical Slice Model

Define slices as user-meaningful capability steps, not technical layers.

Each slice should deliver one real outcome that can be demonstrated.

Recommended slice template:

1. shell and mocked end-to-end flow
2. first real data or integration path
3. first committed state transition
4. first editable or reviewable output
5. first production-like behavior under real conditions
6. refinement and controls
7. export, publish, or downstream delivery
8. reliability and recovery
9. optional advanced enhancements

Adapt the sequence based on the product.

Examples:

- a SaaS CRUD app may replace `editable output` with `shared workspace state`
- a developer tool may replace `publish` with `CLI/package delivery`
- a marketplace may add trust and moderation slices earlier

---

# 4. Slice Implementation Plan Template

Create one document per slice using this shape.

## Title

`Slice-[N]-[Outcome]-Implementation-Plan.md`

## Required Sections

- Purpose
- Slice Goal
- Scope Boundary
- Frozen Dependencies
- Slice Outcome
- Required Deliverables
- Minimal Data Requirements
- API Surface Needed
- Backend Task Breakdown
- Frontend Task Breakdown
- Worker Or Background Task Breakdown
- Infrastructure Needs
- QA Checks
- Exit Criteria

For each section, answer only what is necessary for that slice to be executable.

---

# 5. Slice Task List Template

Create one task list per slice.

## Title

`Slice-[N]-Task-List.md`

## Required Sections

- Goal
- Workspace And Shared
- Frontend
- Control Plane Or Backend
- Worker Or Background Systems
- Infrastructure
- QA And Verification
- Exit Checklist

Task rule:

Each task should be concrete enough to implement without reopening foundational planning.

---

# 6. Implementation Ticket Template

Create one ticket set per slice.

## Title

`Slice-[N]-Tickets.md`

## Required Fields Per Ticket

- ticket id
- title
- owner area
- dependencies
- deliverable

Recommended ticket id format:

- `S1-001`
- `S1-002`
- `S2-001`

Ticket rule:

Each ticket should represent one execution unit with a visible output.

---

# 7. Master Index Template

Create a master planning index that records:

- planning status
- frozen stages
- canonical product model
- canonical system model
- implementation rule
- recommended slice order
- links to all planning documents

The master index should be the single entry point into the plan.

---

# 8. Dynamic Planning Prompts

When planning a new app idea, force these questions early:

- what is the smallest real workflow the user must complete
- what has to be true before real integrations are worth building
- what assumptions are expensive to change later
- what contract drift would create rework across frontend, backend, and infra
- what is the first vertical slice that proves the product is real
- what parts should stay mocked until the control flow is stable

---

# 9. Output Rules

A valid plan generated from this template must:

- preserve a clear MVP boundary
- define explicit freeze points
- separate foundational planning from execution planning
- use vertical slices instead of layer-first implementation
- make QA and failure handling first-class
- convert slices into tasks and tasks into tickets

If any of those are missing, the plan is incomplete.
