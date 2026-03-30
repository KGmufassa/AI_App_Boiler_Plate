---
Name: modular-skill-generator.md
Description: 
Agent: build
Subtask: true
---


# COMMAND: modular-skill-generator

## PURPOSE
Transform documentation into a high-proficiency skill focused on execution, decisions, and failure handling.

---

## INPUT
- skill_name: string
- source_path: optional
- source_type: auto | local | context7 | hybrid
- mode: high-signal
- min_relevance_score: 0.65
- max_chunks_per_category: 40

---

## OUTPUT
- /skills/{skill_name}
  - skill.md
  - /references
    - fundamentals.md
    - patterns.md
    - anti-patterns.md
    - workflows.md
    - decision-frameworks.md
    - constraints.md
    - failure-modes.md
  - metadata.json

---

## STEPS

### 1. RESOLVE SOURCE
IF source_type == auto:
  IF source_path exists → mode = local
  ELSE → mode = context7

IF source_type == hybrid:
  → use both local + context7

---

### 2. INGEST (TARGETED)
Retrieve only content that answers:
- how to use the system
- how to build with it
- what decisions matter
- what fails
- what limits exist

---

### 3. NORMALIZE
- Deduplicate content
- Merge overlapping sections
- Preserve source references

---

### 4. RELEVANCE SCORING
score =
  actionability
+ example/code presence
+ decision relevance
+ frequency

FILTER:
- KEEP score >= min_relevance_score
- LIMIT to max_chunks_per_category

---

### 5. CLASSIFICATION
Label each chunk as:
- fundamental
- pattern
- anti-pattern
- workflow
- decision-framework
- constraint
- failure-mode

---

### 6. SYNTHESIS
Transform:
- tutorials → workflows
- examples → patterns
- comparisons → decisions
- errors → failure-modes
- limits → constraints

Merge redundant entries.
Remove low-actionability content.

---

### 7. GENERATE FILES

#### 7A. skill.md
Build using:
- patterns
- workflows
- decision-frameworks
- constraints
- failure-modes

#### 7B. references/
Populate category files using structured templates.

---

### 8. VALIDATION
Ensure coverage exists for:
- patterns
- workflows
- decision-frameworks
- failure-modes
- constraints

If missing → re-query or re-process.

---

### 9. METADATA
Generate:
- coverage_score
- pattern_density
- decision_clarity_score
