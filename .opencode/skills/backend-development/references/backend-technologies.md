# Backend Technologies

Core technologies, frameworks, databases, and message queues for modern backend development (2025).

## Programming Languages

### Node.js/TypeScript

**Best For:**
- Full-stack JavaScript teams
- Real-time applications
- Rapid prototyping
- Event-driven architectures

**Popular Frameworks:**
- **NestJS**
- **Express**
- **Fastify**
- **tRPC**

### Python

**Best For:**
- Data-heavy applications
- ML/AI integration
- Scientific computing
- Scripting and automation

**Popular Frameworks:**
- **FastAPI**
- **Django**
- **Flask**

### Go

**Best For:**
- High-concurrency systems
- Microservices
- CLI and DevOps tooling
- Simple deployment

### Rust

**Best For:**
- Performance-critical systems
- Memory-safe system programming
- High-reliability requirements
- Low-level control

## Databases

### PostgreSQL

**Strengths:**
- ACID compliance
- JSONB support
- Advanced indexing
- Full-text search

### MongoDB

**Strengths:**
- Flexible schemas
- Sharding
- Aggregation pipeline

### Redis

**Capabilities:**
- In-memory key-value store
- Pub/sub
- Sorted sets
- Streams

## ORMs & Database Tools

### Modern ORMs (2025)

- **Drizzle ORM**
- **Prisma**
- **TypeORM**
- **SQLAlchemy**

## Message Queues & Event Streaming

### RabbitMQ

Best for task queues and request/reply patterns.

### Apache Kafka

Best for event streaming and high-throughput systems.

## Framework Comparisons

### Node.js Frameworks

| Framework | Performance | Learning Curve | Use Case |
|-----------|------------|----------------|----------|
| Express | Moderate | Easy | Simple APIs |
| NestJS | Moderate | Steep | Enterprise apps |
| Fastify | High | Moderate | Performance-critical |
| tRPC | High | Moderate | Full-stack TypeScript |

### Python Frameworks

| Framework | Performance | Features | Use Case |
|-----------|------------|----------|----------|
| FastAPI | High | Modern, async | New APIs |
| Django | Moderate | Batteries-included | Full-featured apps |
| Flask | Moderate | Minimal | Simple services |

## Technology Selection Flowchart

```text
Start → Need real-time features?
       → Yes → Node.js + Socket.io
       → No → Need ML/AI integration?
              → Yes → Python + FastAPI
              → No → Need maximum performance?
                     → Yes → Rust + Axum
                     → No → Need high concurrency?
                            → Yes → Go + Gin
                            → No → Node.js + NestJS
```

## Common Pitfalls

1. Choosing NoSQL for relational data
2. Not using connection pooling
3. Ignoring indexes
4. Over-engineering with microservices
5. Not caching

## Resources

- **NestJS:** https://nestjs.com
- **FastAPI:** https://fastapi.tiangolo.com
- **PostgreSQL:** https://www.postgresql.org/docs/
- **MongoDB:** https://www.mongodb.com/docs/
- **Redis:** https://redis.io/docs/
- **Kafka:** https://kafka.apache.org/documentation/
