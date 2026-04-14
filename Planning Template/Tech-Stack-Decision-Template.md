# Tech Stack Decision Template

## Purpose

Use this document to make stack selection explicit and defensible.

It should be completed after the app idea intake and before implementation planning is allowed to proceed.

The goal is to choose a stack based on product and operational demands, not preference alone.

---

## 1. Decision Summary

- Product or app name:
- Decision date:
- Decision owner:
- Recommended stack:
- Decision status: proposed, approved, frozen

---

## 2. Product Demands Driving The Stack

- Primary product type:
- Expected user load:
- Real-time requirements:
- Async or background processing needs:
- AI or ML dependencies:
- Mobile, web, desktop, or hybrid delivery:
- Integration intensity:
- Compliance or privacy constraints:
- Team skill constraints:
- Budget constraints:

---

## 3. Decision Criteria

Score or describe the importance of each:

- speed to MVP
- developer productivity
- runtime performance
- scalability
- maintainability
- hiring or team familiarity
- ecosystem maturity
- deployment simplicity
- cost efficiency
- observability
- testing ergonomics
- vendor lock-in risk

---

## 4. Candidate Stack Options

List the serious candidates only.

For each option, define:

- frontend stack
- backend stack
- database
- queue or background job system
- storage
- auth
- deployment target
- worker or AI execution model
- key strengths
- key weaknesses

---

## 5. Recommended Stack

Freeze the selected stack by layer:

- frontend:
- backend or control plane:
- database:
- cache:
- queue:
- object storage:
- auth:
- payments:
- workers or background jobs:
- infra and deployment:
- observability:
- testing stack:
- monorepo or polyrepo:

---

## 6. Confirmed Tech Stack (Final Snapshot)

This section represents the **approved and implementation-ready stack**.  
Only populate once the decision status is **approved or frozen**.

- frontend (framework + language):
- backend (framework + runtime):
- database (primary):
- cache:
- queue or job system:
- object storage:
- authentication provider:
- payments provider:
- AI / ML services (if applicable):
- hosting / cloud provider:
- deployment model (serverless, containers, pods, etc):
- CI/CD:
- observability stack:
- testing framework(s):
- repo structure:

---

## 7. Why This Stack Wins

Answer directly:

- why this stack fits the product shape
- why it reduces the highest-risk unknowns
- why it is better than the main alternatives
- what tradeoffs are being accepted intentionally

---

## 8. Rejected Alternatives

For each rejected option, note:

- option name
- reason rejected
- what would need to change for it to become preferable

---

## 9. Lock-In And Migration Risks

- critical vendor dependencies:
- hard-to-replace services:
- migration pain points:
- escape hatches:
- contracts that should stay portable:

---

## 10. Environment Implications

- local development requirements:
- staging requirements:
- production requirements:
- secrets and config needs:
- cost drivers:
- failure domains introduced by the stack:

---

## 11. Freeze Rule

The stack is considered frozen when:

- the selected stack is approved
- confirmed tech stack section is fully populated
- rejected alternatives are documented
- local and production implications are known
- the architecture plan and infrastructure plan align with the chosen stack

If the stack changes later, reopen:

- Stage 1 architecture planning
- Stage 4 infrastructure planning
- any slice plans affected by the change
