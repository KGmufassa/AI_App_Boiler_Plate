---
name: agent-skills
description: Scan `.opencode/skills` for all skills whose folder names do not start with `plan`, then generate a markdown index with backlinks to each skill file under `system/references/markdown`.
---

# Agent Skills

## Purpose

This skill creates a markdown inventory of all repo skills that do not start with `plan`.

It scans:

- `.opencode/skills`

It writes:

- `system/references/markdown/agent-skills.md`

## Workflow

1. Scan `.opencode/skills` for skill folders.
2. Exclude any folder whose name starts with `plan`.
3. Resolve the skill file in each remaining folder.
4. Generate a markdown report with one backlink per skill.

## Output Rules

- write only to `system/references/markdown/agent-skills.md`
- include a title and generation note
- include one bullet per skill
- each bullet must link back to the skill file
- sort skills alphabetically by folder name

## Implementation

Use:

- `scripts/generate_agent_skills_index.sh`

## Constraints

- do not include `plan-*` skills
- do not invent skill entries
- prefer `SKILL.md`, then `skill.md`, then a single markdown file in the skill folder if needed
