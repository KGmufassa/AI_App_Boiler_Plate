---
name: prd-drafter
description: Generates or updates a structured Product Requirements Document by extracting structured information from the current context window. Use when converting conversations, ideas, or feature discussions into a formal PRD draft. If the target file exists, append and refine instead of overwriting.
compatibility: opencode
metadata:
  domain: product
  workflow: prd-generation
  output: prd-draft
---

# Drafting PRD From Context

## Purpose

This skill transforms existing conversation context into a structured, detailed PRD.

It:

- Extracts product intent from current context
- Structures information into a formal PRD format
- Creates the PRD file if it does not exist
- Updates and expands the PRD if it already exists
- Never deletes prior content unless explicitly instructed

---

# Core Rules

1. Do not invent product details.
2. Only use information present in context.
3. If information is missing, create a clearly marked placeholder section.
4. If updating an existing PRD, preserve previous structure.
5. Add new information into appropriate sections.
6. Maintain consistent formatting across updates.

---

# Workflow

Copy this checklist and track progress:

PRD Draft Progress:
- [ ] Step 1: Extract product signals from context
- [ ] Step 2: Identify MVP scope
- [ ] Step 3: Define core features
- [ ] Step 4: Define user personas (if available)
- [ ] Step 5: Define technical constraints (if mentioned)
- [ ] Step 6: Generate structured PRD
- [ ] Step 7: Write or update file

---

# Step 1 — Extract From Context

Scan current context window and identify:

- Product concept
- Problem statement
- Target user
- Features mentioned
- Constraints
- Integrations
- Technical stack references
- Monetization model (if any)
- Success metrics (if any)

Do not guess missing items.

---

# Step 2 — Determine PRD Target Path

If user specifies a path:
- Use that path.

If not specified:
- Default to `/docs/prd-draft.md`

If file exists:
- Read file
- Merge new information
- Append to relevant sections

If file does not exist:
- Create it

---

# Step 3 — PRD Structure Template

Always use this structure:

# Product Requirements Document

## 1. Executive Summary
Clear high-level description of product.

## 2. Problem Statement
What problem is being solved.

## 3. Goals and Objectives
Primary measurable goals.

## 4. Target Users
Defined personas (if available).

## 5. Core Features
List of features grouped by:
- Must Have
- Should Have
- Nice to Have

## 6. User Flows
High-level journey descriptions.

## 7. Technical Considerations
Stack, integrations, data requirements.

## 8. Non-Functional Requirements
Performance, reliability, scalability.

## 9. Success Metrics
KPIs or measurable indicators.

## 10. Open Questions
Items requiring clarification.

---

# Updating Logic

If updating an existing PRD:

- Do not duplicate sections.
- Insert new content into correct section.
- If new feature introduced, add to feature list.
- If scope changes, update Goals section.
- If conflicts detected, create:
  
  ### Revision Notes
  - Describe change
  - Mark previous assumption

---

# Formatting Rules

- Use consistent markdown hierarchy.
- Use bullet lists for features.
- Use numbered sections only at top level.
- Maintain clean spacing.
- Do not add commentary outside PRD.

---

# Output Behavior

After writing or updating:

Return:

1. File path
2. Whether file was created or updated
3. Sections modified
4. Any missing required sections

---

# Constraints

NEVER:
- Overwrite full file unless explicitly requested
- Remove existing content silently
- Assume business model
- Assume metrics
- Fill missing sections with fabricated detail

ALWAYS:
- Preserve historical draft content
- Expand iteratively
- Keep PRD implementation-ready
