---
name: verification-before-completion
description: Use before marking work complete to verify the implemented change actually works, the intended scope is covered, and no obvious regressions remain.
---

# Verification Before Completion

## Overview

Do not mark work complete immediately after code changes. Verify the result against the intended behavior, the relevant tests, and the original acceptance criteria.

## When to Use

Use this skill:
- after implementing a feature
- after fixing a bug
- after refactoring behavior-affecting code
- before claiming a task, ticket, or fix is complete

## Core Checks

1. Re-run the relevant tests.
2. Verify the original issue or acceptance criteria is satisfied.
3. Check for nearby regressions in touched areas.
4. Confirm output is clean enough to ship or hand off.

## Minimum Verification Standard

- the intended behavior works
- the failing test or reproduction now passes
- related tests still pass
- no known blocker remains hidden or ignored

## Completion Rule

If you cannot explain how the change was verified, the work is not complete.
