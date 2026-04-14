---
name: backend-development
description: Use when designing, implementing, reviewing, debugging, securing, scaling, testing, or operating backend systems. Routes API design, architecture, authentication, performance, security, technology selection, testing, DevOps, and debugging to focused reference files.
---

# Backend Development

Production-ready backend development with modern technologies, best practices, and proven patterns.

## When to Use

- Designing RESTful, GraphQL, or gRPC APIs
- Building authentication and authorization systems
- Optimizing database queries and schemas
- Implementing caching and performance optimization
- Applying OWASP Top 10 security mitigation
- Designing scalable microservices
- Defining testing strategies
- Building CI/CD pipelines and deployment workflows
- Monitoring and debugging production systems

## Technology Selection Guide

**Languages:** Node.js/TypeScript (full-stack), Python (data/ML), Go (concurrency), Rust (performance)  
**Frameworks:** NestJS, FastAPI, Django, Express, Gin  
**Databases:** PostgreSQL (ACID), MongoDB (flexible schema), Redis (caching)  
**APIs:** REST (simple), GraphQL (flexible), gRPC (performance)

See `references/backend-technologies.md` for detailed comparisons.

## Reference Navigation

**Core Technologies:**
- `references/backend-technologies.md` - Languages, frameworks, databases, message queues, ORMs
- `references/backend-api-design.md` - API design entry point and routing
- `references/backend-api-rest.md` - REST routes, payloads, pagination, versioning
- `references/backend-api-graphql.md` - GraphQL schema and resolver patterns
- `references/backend-api-grpc.md` - gRPC contracts and internal service patterns

**Security And Authentication:**
- `references/backend-security.md` - OWASP Top 10 2025, security best practices, input validation
- `references/backend-authentication.md` - OAuth 2.1, JWT, RBAC, MFA, session management

**Performance And Architecture:**
- `references/backend-performance.md` - Caching, query optimization, load balancing, scaling
- `references/backend-architecture.md` - architecture entry point and routing
- `references/backend-architecture-services.md` - monolith, microservices, gateway, discovery, saga
- `references/backend-architecture-events.md` - event sourcing, brokers, CQRS
- `references/backend-architecture-scaling.md` - horizontal scaling, sharding, caching layers

**Quality And Operations:**
- `references/backend-testing.md` - Testing strategies, frameworks, tools, CI/CD testing
- `references/backend-code-quality.md` - maintainability entry point and routing
- `references/backend-code-principles.md` - SOLID and dependency direction
- `references/backend-code-patterns.md` - repository, factory, decorator, observer
- `references/backend-code-practices.md` - clean code, error handling, refactoring
- `references/backend-devops.md` - Docker, Kubernetes, deployment strategies, monitoring
- `references/backend-debugging.md` - Debugging strategies, profiling, logging, production debugging
- `references/backend-mindset.md` - Problem-solving, architectural thinking, collaboration

## Key Best Practices

**Security:** Argon2id passwords, parameterized queries, OAuth 2.1 + PKCE, rate limiting, security headers

**Performance:** Redis caching, database indexing, CDN, connection pooling

**Testing:** 70-20-10 pyramid, contract testing for microservices, migration testing

**DevOps:** Blue-green and canary deployments, feature flags, observability, tracing

## Quick Decision Matrix

| Need | Choose |
|------|--------|
| Fast development | Node.js + NestJS |
| Data/ML integration | Python + FastAPI |
| High concurrency | Go + Gin |
| Max performance | Rust + Axum |
| ACID transactions | PostgreSQL |
| Flexible schema | MongoDB |
| Caching | Redis |
| Internal services | gRPC |
| Public APIs | GraphQL or REST |
| Real-time events | Kafka |

## Implementation Checklist

**API:** Choose style -> Design schema -> Validate input -> Add auth -> Rate limiting -> Documentation -> Error handling

**Database:** Choose DB -> Design schema -> Create indexes -> Connection pooling -> Migration strategy -> Backup/restore -> Test performance

**Security:** OWASP Top 10 -> Parameterized queries -> OAuth 2.1 + JWT -> Security headers -> Rate limiting -> Input validation -> Argon2id passwords

**Testing:** Unit 70% -> Integration 20% -> E2E 10% -> Load tests -> Migration tests -> Contract tests

**Deployment:** Docker -> CI/CD -> Blue-green/canary -> Feature flags -> Monitoring -> Logging -> Health checks

## Routing Rules

- API contract design -> `references/backend-api-design.md`
- architecture and service boundaries -> `references/backend-architecture.md`
- auth and authorization -> `references/backend-authentication.md`
- maintainability and refactoring -> `references/backend-code-quality.md`
- debugging and profiling -> `references/backend-debugging.md`
- deployment and observability -> `references/backend-devops.md`
- engineering tradeoffs and mindset -> `references/backend-mindset.md`
- performance and scaling -> `references/backend-performance.md`
- security hardening -> `references/backend-security.md`
- stack selection -> `references/backend-technologies.md`
- test strategy and verification -> `references/backend-testing.md`

## Reference Selection Rules

Read only the minimum references needed for the task.

- If the task is about endpoint shape, payloads, versioning, pagination, or API docs, start with `references/backend-api-rest.md`.
- If the task is about GraphQL schemas or resolvers, start with `references/backend-api-graphql.md`.
- If the task is about gRPC or internal service contracts, start with `references/backend-api-grpc.md`.
- If the task is about service boundaries, gateway, discovery, or sagas, start with `references/backend-architecture-services.md`.
- If the task is about event sourcing, brokers, or CQRS, start with `references/backend-architecture-events.md`.
- If the task is about scaling topology or sharding, start with `references/backend-architecture-scaling.md`.
- If the task is about login, sessions, RBAC, MFA, JWT, OAuth, or API keys, start with `references/backend-authentication.md`.
- If the task is about vulnerabilities, validation, rate limiting, headers, or secret handling, start with `references/backend-security.md`.
- If the task is about slow queries, caching, load balancing, pooling, or throughput, start with `references/backend-performance.md`.
- If the task is about deployment, CI/CD, Docker, Kubernetes, monitoring, or health checks, start with `references/backend-devops.md`.
- If the task is about failing behavior, traces, logs, profiling, or incident triage, start with `references/backend-debugging.md`.
- If the task is about SOLID or dependency boundaries, start with `references/backend-code-principles.md`.
- If the task is about design patterns, start with `references/backend-code-patterns.md`.
- If the task is about code organization, error handling, or refactoring, start with `references/backend-code-practices.md`.
- If the task is about language, framework, database, queue, or ORM choice, start with `references/backend-technologies.md`.
- If the task is about test coverage, unit/integration/E2E, load testing, or contract testing, start with `references/backend-testing.md`.
- If the task is about tradeoffs, decomposition, resilience mindset, or review posture, use `references/backend-mindset.md` as a secondary reference, not the first one, unless the user is explicitly asking for architectural reasoning.

## Combined Routing Rules

For overlapping work, use these pairings in order:

- API + auth -> read the relevant API reference then `references/backend-authentication.md`
- API + security -> read the relevant API reference then `references/backend-security.md`
- architecture + performance -> read the relevant architecture reference then `references/backend-performance.md`
- architecture + operations -> read the relevant architecture reference then `references/backend-devops.md`
- auth + security -> read `references/backend-authentication.md` then `references/backend-security.md`
- debugging + performance -> read `references/backend-debugging.md` then `references/backend-performance.md`
- debugging + production operations -> read `references/backend-debugging.md` then `references/backend-devops.md`
- implementation + testing -> read the relevant code-quality reference then `references/backend-testing.md`
- stack choice + architecture -> read `references/backend-technologies.md` then the relevant architecture reference

## Common Workflows

### Design A New Backend API

1. Read the relevant API reference:
   - `references/backend-api-rest.md`
   - `references/backend-api-graphql.md`
   - `references/backend-api-grpc.md`
2. If auth is involved, read `references/backend-authentication.md`.
3. If abuse or validation risk exists, read `references/backend-security.md`.
4. Produce:
   - API style recommendation
   - route or schema shape
   - error model
   - auth model
   - validation and rate-limit notes

### Choose A Backend Stack

1. Read `references/backend-technologies.md`.
2. Read the relevant architecture reference if service shape or scale is unclear.
3. Use `references/backend-mindset.md` only for tradeoff framing.
4. Produce:
   - recommended language/framework
   - database choice
   - queue/cache choice if needed
   - tradeoffs and constraints

### Debug A Backend Failure

1. Read `references/backend-debugging.md`.
2. If the issue is latency or throughput, read `references/backend-performance.md`.
3. If the issue is auth or access related, read `references/backend-authentication.md` and `references/backend-security.md`.
4. Produce:
   - likely failure class
   - what to inspect first
   - instrumentation or repro steps
   - safe fix direction

### Harden A Backend For Production

1. Read `references/backend-security.md`.
2. Read `references/backend-authentication.md` if identity is involved.
3. Read `references/backend-devops.md` for deployment, observability, and secrets handling.
4. Produce:
   - highest-risk gaps
   - required controls
   - rollout and monitoring notes

### Improve Backend Maintainability

1. Read the relevant code-quality reference.
2. Read `references/backend-testing.md`.
3. Use `references/backend-mindset.md` if broader tradeoffs matter.
4. Produce:
   - structure or refactor recommendations
   - testing gaps
   - maintainability risks

## Output Expectations

When using this skill:

- give concrete backend recommendations, not generic theory
- cite the reference file or files used
- prefer production-safe defaults
- state tradeoffs when multiple options are valid
- do not load unrelated reference files
- keep advice aligned with the user’s stack and problem scope

## Resources

- OWASP Top 10: https://owasp.org/www-project-top-ten/
- OAuth 2.1: https://oauth.net/2.1/
- OpenTelemetry: https://opentelemetry.io/
