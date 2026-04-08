# Integration And External Dependency Template

## Purpose

Use this document when the app depends on third-party APIs, external vendors, SaaS tooling, AI providers, webhooks, or infrastructure services outside the core codebase.

---

## 1. Decision Summary

- Product or app name:
- Decision date:
- Decision owner:
- Decision status: proposed, approved, frozen

---

## 2. Dependency Inventory

For each dependency, define:

- dependency name:
- purpose:
- owner or vendor:
- required for MVP: yes or no
- replaceable: yes or no
- cost profile:

---

## 3. Critical Dependency Risks

- outage risk:
- rate-limit risk:
- cost escalation risk:
- lock-in risk:
- data residency risk:
- auth or credential risk:

---

## 4. Fallback And Failure Rules

- what happens if the dependency is down:
- what happens if latency spikes:
- what happens if limits are exceeded:
- what happens if quality degrades:
- user-visible fallback behavior:
- operator-visible fallback behavior:

---

## 5. Planning Implications

- contracts that must isolate the dependency:
- what should be mocked first:
- what should be delayed until mock-first flow is stable:
- what must be cached:
- what requires monitoring:

---

## 6. Rejected Dependencies

For each rejected option, note:

- dependency:
- reason rejected:
- what would make it viable later:

---

## 7. Freeze Rule

The integration plan is considered frozen when:

- MVP dependencies are approved
- fallback behavior is defined
- cost and lock-in risks are understood
- architecture and slice plans isolate critical dependencies appropriately

If dependencies change later, reopen:

- tech stack planning
- architecture planning
- runtime contract planning
- any affected slice implementation plans
