---
name: dynamic-drafting-prd
description: Generates or updates a dynamic PRD based on context and routes the output to the appropriate folder such as /frontend or /backend. Use when converting evolving discussions into structured implementation-ready PRDs.
compatibility: opencode
metadata:
  domain: product
  workflow: dynamic-prd-routing
  output: prd-draft
---

# Drafting Dynamic PRD

## Purpose

This skill converts current context into a structured PRD and dynamically routes it to the correct system folder based on:

- Product layer (frontend, backend, infra, full-stack)
- Explicit user path instruction
- Contextual signals

It creates the file if it does not exist.
It updates and expands it if it already exists.
It never overwrites unless explicitly instructed.

---

# Core Rules

1. Never fabricate missing product information.
2. Detect PRD type before writing.
3. If folder not specified, ask one clarifying question.
4. Preserve existing content when updating.
5. Append intelligently, not blindly.

---

# Step 1 — Determine PRD Type

Analyze context and classify:

- Frontend PRD → UI, UX, layout, navigation, components
- Backend PRD → database, API, services, architecture
- Full System PRD → both layers
- Infrastructure PRD → deployment, hosting, scaling

If unclear:
Ask:
"Is this PRD intended for frontend, backend, or full system?"

Do not proceed without clarity.

---

# Step 2 — Determine File Path

Routing logic:

If user explicitly states:
- /frontend → use that
- /backend → use that
- custom path → use that

If no path given:

Frontend PRD → `/frontend/prd-draft.md`  
Backend PRD → `/backend/prd-draft.md`  
Full system PRD → `/docs/prd-draft.md`  

If folder does not exist:
Create it.

---

# Step 3 — Adaptive PRD Template

Template adjusts based on PRD type.

---

## If Frontend PRD

# Product Requirements Document — Frontend

## 1. Visual Objectives
## 2. Page Architecture
## 3. Component Inventory
## 4. Interaction Design
## 5. Navigation Model
## 6. State Management (UI)
## 7. Accessibility Standards
## 8. Design Constraints
## 9. Open Questions

---

## If Backend PRD

# Product Requirements Document — Backend

## 1. System Overview
## 2. Service Architecture
## 3. Database Design
## 4. API Specifications
## 5. Data Flow
## 6. Security Requirements
## 7. Performance Requirements
## 8. Scalability Plan
## 9. Open Questions

---

## If Full System PRD

Use combined structure:

Frontend Section
Backend Section
Integration Layer
Deployment Considerations

---

# Step 4 — Updating Logic

If file exists:

- Read file
- Detect existing sections
- Insert new information in correct section
- Avoid duplication
- Add:

### Revision Log
- Date
- What changed
- Why

If section does not exist:
Create it.

Never delete historical content.

---

# Step 5 — Missing Information Handling

If required section is missing data:

Insert placeholder:

> [REQUIRES CLARIFICATION]

Do not invent content.

---

# Step 6 — Output Confirmation

After writing:

Return:

1. PRD Type detected
2. File path used
3. Created or Updated
4. Sections modified
5. Missing required sections

---

# Safety Constraints

NEVER:
- Merge frontend/backend logic incorrectly
- Write to incorrect layer folder
- Assume deployment environment
- Overwrite full document silently

ALWAYS:
- Maintain deterministic structure
- Keep PRD implementation-ready
- Preserve evolution across iterations
