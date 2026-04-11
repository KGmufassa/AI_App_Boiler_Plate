# Command Activation Graph Draft

This draft shows the activation order for the planning and execution commands.

## Primary Flow

```mermaid
flowchart TD
    A[plan-start] --> B{Execution path}

    B -->|supervised full run| C[plan-draft-all]
    B -->|manual staged run| D[plan-stage1]

    D --> E[plan-stage2]
    E --> F[plan-stage3]
    F --> G[plan-stage4]

    C --> H[plan-slices]
    G --> H

    H --> I[plan-tasks]
    I --> J[plan-tickets]

    K[skill-registry-builder] --> L[agent-task-builder]
    J --> L

    L --> M[execute-agent-builds]
```

## Inspection Path

```mermaid
flowchart TD
    A[plan-start] --> B[plan-status]
    C[plan-stage1] --> B
    D[plan-stage2] --> B
    E[plan-stage3] --> B
    F[plan-stage4] --> B
    G[plan-slices] --> B
    H[plan-tasks] --> B
    I[plan-tickets] --> B
    J[agent-task-builder] --> B
```

## Reopen Path

```mermaid
flowchart TD
    A[plan-stage1] --> R[plan-reopen-stage]
    B[plan-stage2] --> R
    C[plan-stage3] --> R
    D[plan-stage4] --> R
    R --> E[rerun target stage]
    E --> F[rerun downstream commands as needed]
```

## Notes

- `plan-start` is the entry point.
- `plan-draft-all` is an alternate supervisor path for Stages 1 through 4.
- `plan-slices` starts only after Stage 4 is complete.
- `plan-tickets` feeds `agent-task-builder`.
- `skill-registry-builder` is a prerequisite input provider for `agent-task-builder`.
- `execute-agent-builds` runs only after agent build artifacts exist.
