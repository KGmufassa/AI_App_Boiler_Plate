# Stage 2 Dynamic Questionnaire Template

## Purpose

Use this questionnaire to resolve only the Stage 2 ambiguity that remains after Stage 1 has been frozen.

This questionnaire exists to:

- minimize redundant questioning
- derive as much as possible from Stage 1 outputs first
- ask only unresolved contract, data, integration, and security questions
- gather enough clarity to complete:
  - `Data-Schema-And-Domain-Model-Plan`
  - `Canonical-State-And-Math-Plan`
  - `API-And-Job-Contract-Plan`
  - `Runtime-Contract-Plan`
  - `User-Personas-And-Jobs-To-Be-Done-Plan` when activated
  - `Integration-And-External-Dependency-Plan` when activated
  - `Security-And-Compliance-Plan` when activated

---

## Questionnaire Policy

Before asking any question:

1. Read Stage 1 outputs, the intake, PRD, manifest, and state.
2. Prefill anything already implied by:
   - feature scope
   - workflows
   - technical direction
   - known integrations
   - sensitive data or auth requirements
3. Ask only when:
   - data shape is still ambiguous
   - contracts are still ambiguous
   - integration boundaries are unclear
   - security posture would otherwise be guessed
   - user-role structure still affects contract design materially

Question rules:

- ask one question at a time
- prefer multiple-choice framing when possible
- ask only the next highest-impact unresolved question
- stop once Stage 2 freeze criteria can be satisfied without guessing

---

## Core Decision Tree

### Cluster 1: Domain Model Complexity

Question:

- What best describes the data model?
  - simple CRUD entities
  - relational business entities
  - workflow/state-machine entities
  - event or job-driven entities
  - mixed

### Cluster 2: Contract Shape

Question:

- What contract style dominates the product?
  - request/response API
  - API plus background jobs
  - heavy async processing
  - internal runtime contracts only
  - mixed

### Cluster 3: Integration Depth

Ask only if integrations are active.

Question:

- How tightly coupled are the external integrations to MVP?
  - optional enhancement
  - required but isolated
  - required and central to workflow
  - many integrations with cross-system dependencies

### Cluster 4: Security And Compliance Posture

Ask only if security or compliance templates are active.

Question:

- What is the required security posture for MVP?
  - basic auth and standard app safeguards
  - elevated permissions and sensitive user data
  - compliance-sensitive workflows
  - high-risk or regulated handling

### Cluster 5: Persona And Role Complexity

Ask only if roles materially affect contracts or states.

Question:

- How many distinct user or operator roles shape the contracts?
  - one primary role
  - a few roles with small differences
  - multiple roles with different workflows and permissions

---

## Dynamic Stop Rules

Stop asking questions when all of these can be completed without guessing:

- domain model shape
- contract style
- integration boundaries
- security posture
- role-driven contract implications

---

## Suggested Output Schema

```json
{
  "stage2_answers": {
    "domain_model_shape": "",
    "contract_style": "",
    "integration_depth": "",
    "security_posture": "",
    "role_complexity": ""
  },
  "derived_inputs": {
    "features": [],
    "roles": [],
    "integrations_active": false,
    "security_active": false
  },
  "unresolved_items": []
}
```

---

## Implementation Notes

This questionnaire should be used by `plan-stage2-core` as a dynamic clarifier, not as a fixed interview script.

It should:

- skip answered or derivable sections
- ask only the next blocking question
- prioritize contract and data clarity before downstream optimization detail
