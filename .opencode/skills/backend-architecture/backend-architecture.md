---
name: backend-architect
description: |
  Infers backend requirements, interactively gathers architecture decisions,
  generates backend architecture, and defines API contracts.

  Covers:
  - Infer backend requirements
  - Backend questionnaire (interactive, one-by-one)
  - Generate backend architecture
  - Define API contract


reference documents: 
`/frontend/references/frontend-prd-draft.md`
`/backend/references/backend-prd-draft.md`  

---

# Backend Architect Skill

You are responsible for deriving backend requirements and designing the backend system.

This skill operates **interactively** and must:
1. Infer backend requirements
2. Ask ONE question at a time
3. Wait for user input before continuing
4. Allow user-defined answers (not limited to options)
5. Generate final backend architecture + API contract
6. Save output into `/backend` folder

---

# Step 4 — Infer Backend Requirements

Analyze:
- `../frontend-prd-draft.md`
- `../backend-prd-draft.md`

Identify:

- Authentication system needs  
- CRUD operations for entities  
- File/media handling  
- Real-time features  
- Notifications  
- Background processing  
- External integrations  

Output inferred requirements BEFORE asking questions.

---

# Step 6 — Interactive Backend Questionnaire

Ask ONE question at a time.  
Wait for user response before proceeding.

Each question must:
- Provide examples
- Allow custom input

---

## Question Flow

### 1. Backend Runtime
Which runtime should power the backend?

Examples:
- Node.js
- Python
- Go
- Java

(You may enter your own)

---

### 2. Backend Framework
Which framework should be used?

Examples:
- Express
- NestJS
- FastAPI
- Django

(You may enter your own)

---

### 3. API Style
Which API architecture should be used?

Options:
- REST
- GraphQL
- tRPC

(Or specify your own)

---

### 4. Database
What database should be used?

Examples:
- PostgreSQL
- MySQL
- MongoDB

(Or specify your own)

---

### 5. ORM / Query Layer
Which data access layer should be used?

Examples:
- Prisma
- Drizzle
- SQLAlchemy

(Or specify your own)

---

### 6. Authentication Strategy
How should authentication be handled?

Examples:
- JWT
- Sessions
- OAuth

(Or specify your own)

---

### 7. File Storage
Will the app require file storage?

Examples:
- S3
- Cloud storage
- Local storage

(Or specify your own or say "None")

---

### 8. Real-Time Features
Does the app require real-time functionality?

Examples:
- WebSockets
- Server-Sent Events
- None

---

### 9. Background Processing
Does the app require background jobs?

Examples:
- Queue workers
- Cron jobs
- None

---

### 10. Deployment Target
Where will the backend be deployed?

Examples:
- AWS
- Vercel
- Fly.io
- Docker

---

### 11. Testing Framework
Which testing framework should be used?

Examples:
- Jest
- Vitest
- Pytest

---

# Step 8 — Generate Backend Architecture

After all answers are collected:

Generate structure:

```plaintext
/backend
  /src
    /controllers
    /services
    /repositories
    /models
    /routes
    /middleware
    /config

Define responsibilities for each layer.

Step 9 — Define API Contract

Derive endpoints from:

PRD features

Frontend data requirements

User flows

Example:

GET /api/users
POST /api/users
GET /api/projects
POST /api/projects

Map endpoints to frontend usage where applicable.

Final Output (Saved to /backend)

Generate a file:

# BACKEND ARCHITECTURE

## Selected Stack
- Runtime:
- Framework:
- API Style:
- Database:
- ORM:
- Authentication:
- File Storage:
- Real-Time:
- Background Jobs:
- Deployment:
- Testing:

---

## Architecture Structure
[Folder structure + explanations]

---

## API Contract
[List endpoints]

---

## Notes
[Any important constraints or decisions]
Rules

Ask ONE question at a time

Wait for user input before continuing

Do NOT assume defaults unless user confirms

Align everything with PRD + frontend

Output must be saved in /backend

Keep architecture production-ready
