# Stage 4 Dynamic Questionnaire Template

## Purpose

Use this questionnaire to resolve only the Stage 4 ambiguity that remains after Stage 3 has been frozen.

This questionnaire exists to:

- minimize redundant questioning
- derive as much as possible from Stage 1 through Stage 3 artifacts first
- ask only unresolved delivery, QA, release, operations, and risk-response questions
- gather enough clarity to complete:
  - `Deployment-And-Infrastructure-Plan`
  - `Caching-And-Performance-Plan`
  - `QA-And-Release-Readiness-Plan`
  - `Vertical-Release-Slice-Plan`
  - `Operations-And-Support-Plan` when activated
  - `Risk-And-Assumption-Register` when activated

---

## Questionnaire Policy

Before asking any question:

1. Read the prior stage outputs, intake, PRD, manifest, and state.
2. Prefill anything already implied by:
   - app type
   - deployment constraints
   - operations flags
   - performance sensitivity
   - support expectations
   - risk posture
3. Ask only when:
   - release shape is still ambiguous
   - deployment model would otherwise be guessed
   - QA depth is unclear
   - support/operations expectations are unclear
   - risk response timing is unclear

Question rules:

- ask one question at a time
- prefer multiple-choice framing when possible
- ask only the next highest-impact unresolved question
- stop once Stage 4 freeze criteria can be satisfied without guessing

---

## Core Decision Tree

### Cluster 1: Deployment Model

Question:

- What deployment model best fits MVP?
  - simplest managed deployment
  - containerized app deployment
  - serverless or event-driven deployment
  - mixed runtime deployment

### Cluster 2: Release Readiness Depth

Question:

- What level of release rigor is required for MVP?
  - lightweight internal release
  - startup-style public MVP
  - structured production release
  - high-reliability release

### Cluster 3: QA Coverage

Question:

- What QA depth is required before release?
  - core happy paths only
  - happy path plus critical error paths
  - role-based and edge-case coverage
  - strict regression and readiness gates

### Cluster 4: Operations And Support

Ask only if operations/support is active.

Question:

- What support model is needed at launch?
  - minimal reactive support
  - documented support with manual operations
  - structured operational ownership
  - always-on or high-touch support expectations

### Cluster 5: Performance And Reliability Sensitivity

Question:

- Which posture best fits the product?
  - basic acceptable performance
  - responsive UX is important
  - performance is product-critical
  - reliability and recovery are product-critical

### Cluster 6: Risk Response Timing

Ask only if risk tracking is active.

Question:

- How should the highest delivery risks be handled?
  - accept and monitor
  - mitigate before release
  - reorder slices to reduce risk first
  - reduce scope to protect release

---

## Dynamic Stop Rules

Stop asking questions when all of these can be completed without guessing:

- deployment model
- release readiness depth
- QA depth
- operations/support model when relevant
- performance and reliability posture
- risk response timing when relevant

---

## Suggested Output Schema

```json
{
  "stage4_answers": {
    "deployment_model": "",
    "release_rigor": "",
    "qa_depth": "",
    "support_model": "",
    "performance_posture": "",
    "risk_response_timing": ""
  },
  "derived_inputs": {
    "deployment_constraints": "",
    "operations_active": false,
    "risk_tracking_active": false
  },
  "unresolved_items": []
}
```

---

## Implementation Notes

This questionnaire should be used by `plan-stage4-core` as a dynamic clarifier, not as a fixed interview script.

It should:

- skip answered or derivable sections
- ask only the next blocking question
- prioritize release and deployment clarity before optimization detail
