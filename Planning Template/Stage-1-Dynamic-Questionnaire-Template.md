# Stage 1 Dynamic Questionnaire Template

## Purpose

Use this questionnaire to resolve only the Stage 1 ambiguity that remains after `plan-start` artifacts have been created.

This questionnaire exists to:

- minimize redundant questioning
- derive as much as possible from intake, PRD, manifest, and state first
- ask only unresolved Stage 1 questions
- gather enough clarity to complete:
  - `MVP-Scope-Plan`
  - `Tech-Stack-Decision-Plan`
  - `Decision-Log-Plan`
  - `Dependency-Gate-Plan`
  - `Unified-Architecture-Plan`
  - `Business-Model-And-Pricing-Plan` when activated

---

## Questionnaire Policy

Before asking any question:

1. Read the intake, PRD, manifest, and state.
2. Prefill anything already implied by:
   - MVP scope
   - product type
   - known constraints
   - known commercial mode
   - preferred stack or deployment direction
3. Ask only when:
   - scope boundaries are still ambiguous
   - stack direction is unresolved
   - dependency gates cannot be named confidently
   - architecture style would otherwise be guessed
   - business model implications remain unclear for commercial products

Question rules:

- ask one question at a time
- prefer multiple-choice framing when possible
- ask only the next highest-impact unresolved question
- stop once Stage 1 freeze criteria can be satisfied without guessing

---

## Core Decision Tree

### Cluster 1: MVP Boundary

Question:

- Which boundary best matches the true MVP?
  - smallest viable release
  - operational MVP with admin/support basics
  - investor/demo MVP
  - internal-first MVP

### Cluster 2: Stack Direction

Question:

- What should dominate the technical direction for MVP?
  - speed of delivery
  - low operational complexity
  - strong long-term extensibility
  - ecosystem fit with preferred stack

### Cluster 3: Architecture Shape

Question:

- Which architecture shape best fits the product today?
  - simple app with one runtime
  - frontend plus backend
  - API-first service
  - async/job-driven system
  - mixed architecture

### Cluster 4: Dependency Gates

Question:

- Which dependency gate is most likely to block implementation first?
  - external integration
  - infra or deployment setup
  - auth/security foundation
  - data model and contracts
  - business/legal approval

### Cluster 5: Commercial Mode

Ask only if commercial mode is active.

Question:

- Which monetization model is expected for MVP?
  - free initially
  - subscription
  - usage-based
  - transaction-based
  - enterprise or sales-led

---

## Dynamic Stop Rules

Stop asking questions when all of these can be completed without guessing:

- MVP boundary
- stack direction
- major dependency gates
- architecture boundary
- business model implications when relevant

---

## Suggested Output Schema

```json
{
  "stage1_answers": {
    "mvp_boundary": "",
    "stack_priority": "",
    "architecture_shape": "",
    "primary_dependency_gate": "",
    "commercial_model": ""
  },
  "derived_inputs": {
    "app_type": "",
    "constraints": {},
    "preferred_stack": "",
    "commercial_mode": false
  },
  "unresolved_items": []
}
```

---

## Implementation Notes

This questionnaire should be used by `plan-stage1-core` as a dynamic clarifier, not as a fixed interview script.

It should:

- skip answered or derivable sections
- ask only the next blocking question
- prioritize scope and dependency questions before stack preference refinements
