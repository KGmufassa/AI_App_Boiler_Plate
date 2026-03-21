---
name: frontend-architect
description: |
  Dynamically builds a complete frontend architecture by ingesting user-defined
  reference files. Adapts to any number of inputs and generates a structured,
  production-ready frontend system aligned with PRD, UI/UX, and backend.
---
  Use when:
  - You have multiple reference docs (PRD, design, flows, backend, etc.)
  - You want a full frontend system derived from real inputs
  - You need adaptive architecture (not hardcoded assumptions)

---

reference paths:
 - 
 -
 -

---
outputs:
 - format: markdown
 - destination: /frontend/reference
 - filename: frontend-architecture
---

# Frontend Architect Skill (Dynamic)

You are responsible for generating a complete frontend architecture using dynamically provided reference files.

## Execution Rules (MANDATORY)

- ALWAYS ingest ALL provided reference files from `reference_paths`
- NEVER assume fixed file names or structure
- Dynamically detect document type (PRD, design, flows, backend, etc.)
- Extract only relevant structured information
- If a critical reference is missing → ask ONE clarifying question
- Maintain strict alignment between:
  - Product requirements
  - UI/UX design
  - Backend architecture
- Do NOT skip any step
- Ensure output is scalable and production-ready
- Final output MUST be saved to `/frontend/reference`

## Step 1 — Ingest References (Dynamic)

For each file in `/reference`:

1. Load the file
2. Classify its type:
   - PRD
   - Design spec
   - User flows
   - Feature list
   - Backend architecture
   - Other
3. Extract relevant information based on type:

If PRD:
- Features
- User roles
- Workflows
- Data requirements

If Design Spec:
- Pages
- Components
- Layouts
- Interactions

If User Flows:
- Navigation paths
- Entry/exit points
- State transitions

If Backend Architecture:
- API endpoints
- Data models
- Authentication patterns

If Unknown:
- Infer structure and extract useful signals

## Step 2 — Build Unified Model

Merge extracted data into:

- Feature map
- Page map
- Component map
- Data dependency map
- API dependency map

Resolve overlaps, conflicts, and missing links logically.

## Step 3 — Detect Missing Information

If any of the following are unclear:
- Frontend framework
- State management approach
- Routing strategy
- API/data fetching structure

Ask ONE targeted question at a time before proceeding.

## Step 4 — Define Frontend Stack (Adaptive)

Determine or confirm:

- Framework (Next.js, React, Vue, etc.)
- Styling (Tailwind, CSS Modules, etc.)
- State management (Redux, Zustand, hooks, etc.)
- Routing approach
- Data fetching strategy

If not explicitly defined, infer based on:
- Backend architecture
- Feature complexity
- Real-time requirements

## Step 5 — Generate Page Architecture (Dynamic)

For EACH detected page:

Include:
- Purpose
- Components used
- Data required
- API dependencies
- User interactions

Pages should be derived dynamically from:
- Design specs
- User flows
- Feature mappings

## Step 6 — Generate Component Architecture

Organize components into:

- Global/shared components
- Feature-level components
- Page-specific components
- UI primitives

For each component define:
- Props
- State
- Behavior
- Dependencies

## Step 7 — State Management Plan

Define:

- Global state (auth, global UI, etc.)
- Local state (component-level)
- Server state (API data)
- Cache strategy

Adapt based on:
- Application complexity
- Data frequency
- Real-time needs

## Step 8 — Data Flow Mapping

Define full system flow:

User → UI → State → API → Backend → Response → UI

Include:
- Loading states
- Error handling
- Retry logic
- Optimistic updates (if applicable)

## Step 9 — Routing System

Generate routing structure dynamically:

- Routes
- Nested routes
- Protected routes
- Dynamic routes

Align routing with user flows and page structure.

## Step 10 — Folder Structure (Adaptive)

Generate a scalable structure:

/frontend  
  /src  
    /app or /pages  
    /components  
    /features  
    /hooks  
    /services  
    /store  
    /styles  
    /utils  

Adjust structure if:
- Framework requires variation
- Feature-based architecture is more suitable
- Monorepo patterns are detected

## Final Output (Saved to /frontend)

# FRONTEND ARCHITECTURE

## Reference Files Used
[List all ingested files]

## Stack
- Framework:
- Styling:
- State Management:
- Routing:
- Data Fetching:

## Pages
[List all pages with details]

## Components
[Structured component system]

## State Management
[Global + local + server state plan]

## Data Flow
[End-to-end system flow]

## Routing
[Route definitions and structure]

## Folder Structure
/frontend/src/...

## Notes
- Architecture is dynamically derived from provided inputs
- Ensure scalability and maintainability
- Align strictly with backend APIs

## Behavior Summary

- Fully dynamic (no hardcoded file assumptions)
- Adapts to ANY number of input files
- Builds architecture from real context
- Asks questions only when necessary
- Produces implementation-ready output

# End of Skill
