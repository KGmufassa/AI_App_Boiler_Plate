==============================================
# AGENT-TASK-BUILDER RULE ENGINE (ADVANCED v1.0)
WITH MULTI-SKILL COMPOSITION + ORCHESTRATION
==============================================

## PURPOSE

**This rule engine governs:**
- Task understanding and decomposition
- Capability extraction
- Role assignment
- Skill selection (single + multi-skill)
- Execution strategy (inline vs subagent)
- Execution mode (controlled vs flexible)
- Skill orchestration (ordered + dependency-aware)

**This version supports:**
✔ Multi-skill workflows
✔ Skill bundling
✔ Ordered execution
✔ Dependency-aware pipelines

----------------------------------------------------
# SECTION 1: INPUT NORMALIZATION
----------------------------------------------------

INPUT FORMAT:
```
{
  "tasks": [],
  "skills": [],
  "preferences": {
    "speed_vs_accuracy": "fast | balanced | high_accuracy",
    "parallelism": true,
    "execution_mode": "auto | controlled | flexible"
  }
}
```
**RULES:**

1. Convert all tasks into atomic statements where possible
2. Assign unique task_id
3. Normalize language (verbs + nouns)
4. If ambiguous → mark requires_analysis

----------------------------------------------------
# SECTION 2: TASK DECOMPOSITION
----------------------------------------------------

**GOAL:**
- Break tasks into executable units
---

**RULES:**
1. Split tasks with multiple verbs
2. Expand implicit steps
3. Preserve logical grouping for composite workflows

OUTPUT:
```
{
  "task_id": "",
  "subtasks": []
}
```
----------------------------------------------------
# SECTION 3: CAPABILITY EXTRACTION ENGINE
----------------------------------------------------

**GOAL:**
- Convert tasks into capability vectors
---

**RULES:**
1. Extract verbs → actions
2. Extract nouns → domains/tools
3. Normalize to capability tags

**EXAMPLE:**
"Implement feature using git worktree with TDD"
```
OUTPUT:
{
  "capabilities": [
    "feature-development",
    "git-worktree",
    "environment-isolation",
    "test-driven-development"
  ]
}
```
----------------------------------------------------
# SECTION 4: TASK CLASSIFICATION
----------------------------------------------------

**Each task must be scored across:**

- TYPE
- COMPLEXITY (1–10)
- COUPLING (1–10)
- PARALLEL_SCORE (1–10)
- RISK (1–10)

**TYPE RULES:**
|analysis | implementation | validation | orchestration|
|---------|----------------|------------|--------------|

**COMPLEXITY:**
- 1–3 LOW
- 4–6 MEDIUM
- 7–10 HIGH

**COUPLING:**
- 1–3 LOOSE
- 4–6 MODERATE
- 7–10 TIGHT

**PARALLEL_SCORE:**
- 1–3 NO
- 4–6 CONDITIONAL
- 7–10 YES

**RISK:**
- Based on ambiguity + system impact

----------------------------------------------------
# SECTION 5: COMPOSITE TASK DETECTION
----------------------------------------------------

**GOAL:**
- Detect when a task requires multiple coordinated skills
---

**RULES:**

Mark as COMPOSITE_TASK if:
- multiple capabilities detected
- workflow constraints present (e.g., TDD, CI)
- environment setup required
- more than 2 distinct domains involved

OUTPUT:
```
{
  "task_id": "",
  "is_composite": true
}
```
----------------------------------------------------
# SECTION 6: ROLE ASSIGNMENT ENGINE
----------------------------------------------------

**GOAL:**
- Break composite tasks into execution roles
---

**STANDARD ROLES:**

- environment_setup
- workspace_management
- dependency_management
- feature_implementation
- testing_strategy
- validation
- deployment
- orchestration

**RULES:**
- Map capabilities → roles

EXAMPLE:
"`feature` + `git-worktree` + `TDD`"

OUTPUT:
```
{
  "roles": [
    "environment_setup",
    "workspace_management",
    "feature_implementation",
    "testing_strategy"
  ]
}
```
----------------------------------------------------
# SECTION 7: SKILL REGISTRY REQUIREMENTS
----------------------------------------------------

**Each skill MUST include:**
```
{
  "name": "",
  "capabilities": [],
  "domain": "",
  "complexity_range": [min, max],
  "role_support": [],
  "dependencies": [],
  "priority": 1-10
}
```
----------------------------------------------------
# SECTION 8: ADVANCED SKILL MATCHING ENGINE
----------------------------------------------------

**GOAL:**
- Select best skill(s) using scoring
---

**SCORING FUNCTION:**

*score =*
-  (capability_match * 0.4) +
-  (role_match * 0.2) +
-  (domain_match * 0.15) +
-  (complexity_fit * 0.15) +
-  (priority * 0.1)

**RULES:**
- Select top scoring skill per role
- Allow multiple skills per task
- If score < threshold → fallback inline

----------------------------------------------------
SECTION 9: SKILL COMPOSITION ENGINE
----------------------------------------------------

**GOAL:**
- Build skill bundles for composite tasks
---

OUTPUT FORMAT:
```
{
  "task_id": "",
  "skill_bundle": [
    "skill_1",
    "skill_2",
    "skill_3"
  ]
}
```

**RULES:**
1. Each role must map to ≥1 skill
2. Remove duplicate capabilities
3. Ensure compatibility between skills
4. Validate dependency chains

----------------------------------------------------
# SECTION 10: SKILL DEPENDENCY ENGINE
----------------------------------------------------

**GOAL:**
- Determine execution order

---

**RULES:**
1. Respect explicit skill dependencies
2. Apply default ordering:

*environment_setup*
→ workspace_management
→ dependency_management
→ testing_strategy (initialize)
→ feature_implementation
→ validation

---

OUTPUT:
```
{
  "execution_order": []
}
```
----------------------------------------------------
# SECTION 11: EXECUTION STRATEGY ENGINE
----------------------------------------------------

**INLINE IF:**
- complexity ≤ 3
- coupling ≥ 7

**SUBAGENT IF:**
- complexity ≥ 7
- composite task
- parallel_score ≥ 7

**MULTI-SUBAGENT IF:**
- decomposable into independent pipelines

----------------------------------------------------
# SECTION 12: EXECUTION MODE ENGINE
----------------------------------------------------

**CONTROLLED MODE:**
- multi-skill workflows
- deterministic pipelines
- production builds

→ MUST use `run-subtask-skill.md`

**FLEXIBLE MODE:**
- research
- exploration

→ native subagent invocation

----------------------------------------------------
# SECTION 13: AGENT SELECTION ENGINE
----------------------------------------------------

- analysis → Plan  
- implementation → Build  
- exploration → Explore  
- complex workflows → General  

----------------------------------------------------
SECTION 14: EXECUTION GRAPH GENERATION
----------------------------------------------------

OUTPUT:
```
{
  "task_id": "",
  "execution": "inline | subagent",
  "mode": "controlled | flexible",
  "skill_bundle": [],
  "execution_order": [],
  "dependencies": []
}
```
----------------------------------------------------
# SECTION 15: PARALLEL EXECUTION ENGINE
----------------------------------------------------

**RULES:**
- parallel_score ≥ 7 → parallel
- isolate subagents
- ensure no dependency conflict

----------------------------------------------------
# SECTION 16: CONTEXT MANAGEMENT
----------------------------------------------------

**RULES:**
- Inline → shared context
- Controlled subagent → isolated
- Flexible → partial shared

**PREVENT:**
- context overflow
- irrelevant data passing

----------------------------------------------------
# SECTION 17: ERROR HANDLING ENGINE
----------------------------------------------------

**RULES:**
1. Retry once
2. Fallback to alternate skill
3. Escalate to orchestration agent

----------------------------------------------------
# SECTION 18: FAILSAFE LOGIC
----------------------------------------------------

- If uncertain → controlled subagent
- If no skill → inline fallback
- If composite unclear → decompose further

----------------------------------------------------
# SECTION 19: PERFORMANCE OPTIMIZATION
----------------------------------------------------

- maximize parallel execution
- minimize context size
- reuse successful skill bundles

----------------------------------------------------
# SECTION 20: CORE DECISION LOOP
----------------------------------------------------

*FOR EACH TASK:*

1. normalize input
2. decompose task
3. extract capabilities
4. classify task
5. detect composite
6. assign roles
7. match skills (per role)
8. compose skill bundle
9. resolve dependencies
10. determine execution strategy
11. determine execution mode
12. assign agent
13. build execution graph

----------------------------------------------------
# SECTION 21: FINAL OUTPUT STRUCTURE
----------------------------------------------------
```
{
  "agent_config": {},
  "execution_plan": [],
  "subagents": [],
  "task_routing": {},
  "diagnostics": {
    "scores": {},
    "decisions": []
  }
}
```
====================================================
# END OF RULE ENGINE
====================================================
