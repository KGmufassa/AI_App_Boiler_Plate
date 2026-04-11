# Example Implementation Agent

## Agent Identity

- agent_name: `implementation-agent-slice-1-core-ui`
- agent_type: `implementation-agent`
- mode: `subagent`

## Assigned Skills

- `ui-ux-design-draft`
- `defined-best-practices`
- `Test-driven-development`

## Assigned Ticket IDs

- `slice-1-ticket-01`
- `slice-1-ticket-02`
- `slice-1-ticket-03`

## Execution Mode

- execution_strategy: `subagent`
- execution_mode: `controlled`

## Responsibilities

- implement the UI work for the assigned ticket set
- preserve ticket dependency order
- satisfy each ticket's acceptance criteria before marking it complete
- avoid editing areas outside the assigned files unless required by a dependency

## Dependency Constraints

- do not start `slice-1-ticket-02` until `slice-1-ticket-01` is complete
- do not start `slice-1-ticket-03` until shared UI contracts are stable
- escalate unresolved dependency conflicts back to `primary-agent`

## Expected Outputs

- updated source files for assigned tickets
- tests for changed behavior where required
- completion notes tied to each ticket id

## Validation Responsibilities

- confirm acceptance criteria for every assigned ticket
- confirm no blocked dependency remains unresolved
- confirm required tests pass for touched areas
- report failures with the blocking ticket id and reason

## Operating Notes

- use only the assigned skill bundle unless the execution plan explicitly expands it
- do not reassign tickets
- do not change agent ownership
- follow `Build Plan/Active Plans/Agent Builds/json/execution-plan.json` as the execution source of truth
