# Security And Compliance Template

## Purpose

Use this document when the app handles user data, files, payments, account permissions, or regulated information.

It defines the minimum security posture and compliance constraints that planning must respect.

---

## 1. Decision Summary

- Product or app name:
- Decision date:
- Decision owner:
- Sensitivity level: low, medium, high
- Decision status: proposed, approved, frozen

---

## 2. Data And Access Profile

- data types handled:
- personal data handled:
- sensitive data handled:
- file uploads handled:
- account roles:
- permission model:
- audit needs:

---

## 3. Security Requirements

- auth requirements:
- session requirements:
- secrets management expectations:
- encryption expectations:
- logging boundaries:
- rate limiting needs:
- abuse prevention needs:
- backup and recovery expectations:

---

## 4. Compliance Constraints

- geographic constraints:
- retention requirements:
- deletion requirements:
- customer contract requirements:
- industry or legal constraints:
- third-party review requirements:

---

## 5. Threat And Failure Areas

- biggest likely abuse path:
- biggest data exposure risk:
- biggest permission risk:
- biggest vendor risk:
- biggest operational security risk:

---

## 6. Product And Technical Implications

- architecture implications:
- infrastructure implications:
- analytics implications:
- support implications:
- UX implications:
- testing implications:

---

## 7. Freeze Rule

The security and compliance plan is considered frozen when:

- required protections are approved
- role and permission assumptions are defined
- retention and deletion rules are defined
- architecture and slice plans reflect the required controls

If this plan changes later, reopen:

- architecture planning
- API contract planning
- infrastructure planning
- any affected slice implementation plans
