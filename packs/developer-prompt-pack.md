# 💻 Developer Prompt Pack — Code Like a 10x Engineer
### By PromptVault AI | Version 2.0 | 2026 Edition

---

## 📋 Table of Contents
1. [Debugging & Troubleshooting](#debugging--troubleshooting)
2. [Code Review](#code-review)
3. [Architecture & System Design](#architecture--system-design)
4. [React & Next.js](#react--nextjs)
5. [Python](#python)
6. [Node.js & Backend](#nodejs--backend)
7. [Databases & SQL](#databases--sql)
8. [DevOps & CI/CD](#devops--cicd)
9. [API Design](#api-design)
10. [Security](#security)
11. [Testing](#testing)
12. [System Prompt Templates for Devs](#system-prompt-templates)

---

## Debugging & Troubleshooting

```
I'm getting this error: [paste error]. Here's the relevant code: [paste code]. Environment: [language/framework version, OS]. What I've already tried: [list attempts]. Diagnose the root cause, explain why it's happening, and provide the fix with explanation.
```

```
Act as a senior debugger. This function is producing incorrect output. Input: [input]. Expected output: [expected]. Actual output: [actual]. Code: [paste function]. Walk through the execution step by step, identify where it diverges from expected behavior, and fix it.
```

```
I have a memory leak in my [language] application. Symptoms: [describe]. Here's the suspected code: [paste code]. Identify potential memory leak sources, explain the memory lifecycle issue, and provide the fixed version with profiling recommendations.
```

```
My application is slow. Here's the performance profile: [describe slow areas]. Stack: [tech stack]. Database queries: [describe]. Help me identify the top 5 performance bottlenecks, prioritize them by impact, and provide optimized code for each.
```

```
Debug this race condition. The issue occurs when [describe scenario]. Code: [paste concurrent code]. Identify the race condition, explain the timing issue, and provide a thread-safe solution using [mutexes/locks/atomic operations/channels].
```

```
This code works locally but fails in production. Local env: [details]. Production env: [details]. Error: [error]. Code: [paste code]. What are the most likely causes of environment-specific failures? Systematic diagnostic steps?
```

```
My [framework] app has an infinite re-render loop. Component: [paste component]. State: [describe state]. What's causing the loop and how do I fix it? Explain the render cycle issue.
```

---

## Code Review

```
Review this code for production readiness: [paste code]. Check for: bugs, security vulnerabilities, performance issues, code style, error handling, edge cases, and maintainability. Rate it 1-10 and provide specific improvements with refactored code.
```

```
Act as a senior code reviewer at Google. Review this pull request: [paste diff or describe changes]. Focus on: correctness, readability, testing coverage, backward compatibility, and potential regressions. Format as inline comments with severity (critical/warning/suggestion).
```

```
Refactor this code following SOLID principles: [paste code]. For each principle violated, explain: what's wrong, why it matters, and show the refactored version. Maintain the same functionality. Language: [language].
```

```
Optimize this code for performance: [paste code]. Current performance: [metrics if available]. Constraints: [memory/time/both]. Provide the optimized version, explain each optimization, and estimate the improvement. Include Big-O analysis before and after.
```

```
Review this code for accessibility and inclusivity issues: [paste frontend code]. Check: ARIA labels, keyboard navigation, screen reader compatibility, color contrast, focus management, and semantic HTML. Provide fixes for each issue.
```

---

## Architecture & System Design

```
Design a system architecture for [application type] that needs to handle [scale requirements]. Requirements: [list functional requirements]. Constraints: [budget/team size/timeline]. Include: component diagram, data flow, technology choices (with justification), scaling strategy, and failure modes.
```

```
Act as a principal architect. I'm choosing between [Architecture A] and [Architecture B] for [project]. Compare them on: scalability, complexity, cost, team expertise required, development speed, and maintenance burden. Recommend one with detailed reasoning.
```

```
Design a microservices architecture for [application]. Current monolith handles: [describe features]. Team size: [number]. Help me: define service boundaries, design inter-service communication, plan the migration strategy (strangler fig pattern), and identify potential pitfalls.
```

```
Create a database schema design for [application type]. Entities: [list main entities]. Requirements: [read-heavy/write-heavy/both], [consistency requirements], [scale expectations]. Include: ER diagram (text), table definitions, indexes, relationships, and explain normalization decisions.
```

```
Design a real-time notification system that handles [volume] notifications/second. Requirements: multi-channel (push, email, SMS, in-app), user preferences, batching, retry logic. Include: architecture diagram, message queue design, delivery guarantees, and monitoring strategy.
```

```
I need to design a caching strategy for [application]. Current bottleneck: [describe]. Data characteristics: [read/write ratio, data freshness requirements]. Design: cache layers (L1/L2), invalidation strategy, cache-aside vs write-through decision, and failover behavior.
```

---

## React & Next.js

```
Build a [component name] React component with TypeScript. Requirements: [describe functionality]. Props: [list props]. State management: [local/Redux/Zustand/context]. Include: component code, types, unit tests, and Storybook story. Follow React best practices.
```

```
Convert this class component to a modern functional component with hooks: [paste class component]. Use appropriate hooks (useState, useEffect, useMemo, useCallback, useRef). Explain each hook choice and add proper TypeScript types.
```

```
Create a custom React hook called use[Name] that [describe functionality]. It should: handle loading/error states, support cancellation, be reusable across components, and have proper TypeScript generics. Include tests and usage example.
```

```
Set up a Next.js 14+ App Router page with: server components, dynamic routing, metadata, loading UI, error boundary, and data fetching. Route: [route pattern]. Data source: [API/database]. Include: page.tsx, loading.tsx, error.tsx, and layout.tsx.
```

```
Optimize this React application for performance. Current issues: [describe]. Component tree: [describe]. Implement: React.memo, useMemo, useCallback, virtualization (for lists), code splitting, and Suspense boundaries. Show before/after for each optimization.
```

```
Build a complete form with React Hook Form + Zod validation. Fields: [list fields with types]. Include: schema definition, form component, field-level validation, server-side validation handling, error display, and accessibility. Support both create and edit modes.
```

```
Create a state management solution using Zustand for [app type]. Stores needed: [list domains]. Include: store definitions with TypeScript, actions, selectors, middleware (persist, devtools), and usage pattern in components. Explain why Zustand over Redux/Context for this case.
```

---

## Python

```
Write a Python script to [task description]. Input: [input format]. Output: [output format]. Requirements: error handling, logging, type hints, docstrings, and CLI arguments (argparse). Follow PEP 8. Include requirements.txt and example usage.
```

```
Create a FastAPI application for [API purpose]. Endpoints: [list endpoints]. Include: Pydantic models, authentication (JWT), database integration (SQLAlchemy), error handling, CORS, rate limiting, and OpenAPI documentation. Follow production best practices.
```

```
Optimize this Python code for performance: [paste code]. Current execution time: [time]. Target: [target time]. Consider: algorithm optimization, built-in functions, generators, caching, multiprocessing, and C extensions. Profile and explain each improvement.
```

```
Write a data pipeline in Python that: reads from [source], transforms [describe transformations], and loads to [destination]. Include: error handling, retries, logging, data validation (Pydantic), incremental processing, and monitoring hooks. Use async where beneficial.
```

```
Create a Python decorator that [describe functionality]. It should work with: sync and async functions, methods and static methods, preserve function signatures, support arguments, and be properly typed. Include comprehensive tests using pytest.
```

```
Build a web scraper for [target site/type]. Extract: [data fields]. Handle: pagination, rate limiting, retries, rotating user agents, and data validation. Output: [JSON/CSV/database]. Include: robots.txt compliance check and ethical scraping notes.
```

---

## Node.js & Backend

```
Create a production-ready Express.js API with: [list endpoints]. Include: route organization, middleware (auth, validation, error handling, rate limiting, logging), database connection (Prisma/Drizzle), environment config, and health check endpoint. TypeScript required.
```

```
Design and implement a job queue system using [BullMQ/custom] for [use case]. Requirements: retry with exponential backoff, dead letter queue, priority levels, concurrency control, and monitoring dashboard data. Include worker code and producer code.
```

```
Build a WebSocket server for [real-time feature]. Handle: connection management, authentication, rooms/channels, message broadcasting, reconnection, heartbeat, and horizontal scaling (with Redis pub/sub). Include both server and client code.
```

```
Create a complete authentication system for a Node.js API. Include: registration, login, JWT access/refresh tokens, password reset flow, email verification, OAuth2 (Google), rate limiting on auth endpoints, and secure session management. Use bcrypt and proper security headers.
```

```
Build a file upload system that handles: multipart uploads, chunked uploads for large files, image processing (resize, format conversion), virus scanning hook, S3-compatible storage, CDN URL generation, and cleanup of orphaned files. Include progress tracking.
```

---

## Databases & SQL

```
Write an optimized SQL query to [describe what you need]. Tables: [describe schema]. Expected data volume: [rows]. Include: the query, EXPLAIN ANALYZE interpretation, index recommendations, and alternative approaches if the first is slow.
```

```
Design a database migration strategy for [change description]. Current schema: [describe]. New requirements: [describe]. Include: migration SQL (up and down), data migration script, zero-downtime deployment plan, rollback procedure, and testing strategy.
```

```
Optimize this slow query: [paste query]. Table sizes: [approximate rows]. Current execution time: [time]. Indexes: [existing indexes]. Provide: optimized query, index recommendations, EXPLAIN analysis, and estimated improvement.
```

```
Design a multi-tenant database architecture for [SaaS application]. Tenants: [expected count]. Data isolation requirements: [strict/moderate]. Compare: shared database, schema-per-tenant, and database-per-tenant. Recommend one with implementation guide.
```

```
Create a database backup and disaster recovery plan for [database type] handling [data volume]. Include: backup schedule, retention policy, point-in-time recovery setup, cross-region replication, restoration testing procedure, and RTO/RPO targets.
```

---

## DevOps & CI/CD

```
Create a complete CI/CD pipeline using [GitHub Actions/GitLab CI/Jenkins] for [project type]. Include: linting, testing (unit + integration), security scanning, build, staging deployment, production deployment (with approval gate), rollback mechanism, and notifications.
```

```
Write a production-grade Dockerfile for [application type]. Include: multi-stage build, non-root user, health check, security scanning (Trivy), minimal base image, proper layer caching, and .dockerignore. Optimize for build speed and image size.
```

```
Design a Kubernetes deployment for [application]. Requirements: [scale/availability]. Include: Deployment, Service, Ingress, HPA, PDB, ConfigMap, Secret management, health probes, resource limits, and monitoring setup. Include Helm chart structure.
```

```
Create an Infrastructure as Code setup using [Terraform/Pulumi] for [cloud provider]. Resources: [list]. Include: module structure, state management, environment separation (dev/staging/prod), secrets handling, cost estimation, and destroy safeguards.
```

```
Design a monitoring and alerting stack for [application/infrastructure]. Include: metrics collection (Prometheus), logging (ELK/Loki), tracing (Jaeger), dashboards (Grafana), alert rules (with thresholds), on-call rotation setup, and incident response runbook.
```

```
Create a zero-downtime deployment strategy for [application type] running on [platform]. Compare: blue-green, canary, and rolling deployments. Recommend one, provide implementation config, health check strategy, traffic shifting rules, and automatic rollback triggers.
```

---

## API Design

```
Design a RESTful API for [application/feature]. Resources: [list]. Include: endpoint definitions (method, path, request/response), authentication scheme, pagination strategy, error format (RFC 7807), versioning approach, rate limiting, and OpenAPI 3.1 specification.
```

```
Design a GraphQL schema for [application]. Types: [list main entities]. Include: type definitions, queries, mutations, subscriptions, resolvers (with N+1 prevention), authentication directives, input validation, and pagination (cursor-based). Include complexity limiting.
```

```
Create a comprehensive API versioning strategy for [API]. Current version: v1. Breaking changes needed: [list]. Design: versioning scheme (URL/header/content negotiation), migration guide, deprecation timeline, client notification plan, and backward compatibility layer.
```

```
Design webhook delivery system for [platform]. Events: [list events]. Include: payload format, signature verification (HMAC), retry policy (exponential backoff), delivery status tracking, endpoint validation, and developer documentation.
```

---

## Security

```
Perform a security audit on this code: [paste code]. Check for: OWASP Top 10 vulnerabilities, injection attacks, authentication flaws, sensitive data exposure, XSS, CSRF, insecure deserialization, broken access control. Provide severity ratings and fixes for each finding.
```

```
Design a secure authentication and authorization system for [application type]. Requirements: [describe roles and permissions]. Include: auth flow diagrams, token strategy, RBAC/ABAC design, session management, password policy, 2FA implementation, and audit logging.
```

```
Create a security hardening checklist for [production deployment on cloud/platform]. Cover: network security, access controls, encryption (at-rest and in-transit), secrets management, dependency scanning, container security, logging, and compliance requirements.
```

```
Review this API for security vulnerabilities: [paste or describe endpoints]. Check: input validation, authentication bypass, authorization flaws, rate limiting, information disclosure, CORS configuration, and HTTP security headers. Provide exploit scenarios and fixes.
```

---

## Testing

```
Write comprehensive tests for this code: [paste code]. Include: unit tests (happy path + edge cases), integration tests, error case tests, and boundary tests. Use [Jest/pytest/other framework]. Aim for 90%+ coverage. Include mocking strategy.
```

```
Create a testing strategy for [application type]. Define: test pyramid (unit/integration/e2e ratio), what to test at each level, mocking boundaries, test data management, CI integration, coverage targets, and flaky test prevention. Include example tests for each level.
```

```
Write end-to-end tests for [user flow] using [Playwright/Cypress]. Include: test setup, page objects, data factories, assertion helpers, screenshot on failure, CI configuration, and parallel execution setup. Handle: authentication, dynamic content, and network requests.
```

```
Create a load testing plan for [API/application] using [k6/Artillery/JMeter]. Scenarios: normal load, peak load, stress test, soak test. Define: virtual users, ramp-up pattern, success criteria, metrics to collect, and performance budget. Include the test scripts.
```

---

## System Prompt Templates

### The Senior Developer
```
You are a senior software engineer with 15+ years of experience in [languages/frameworks]. You write clean, tested, production-ready code. You always: consider edge cases, handle errors properly, write meaningful comments (not obvious ones), follow SOLID principles, and suggest tests. When there are multiple approaches, you present tradeoffs. You ask clarifying questions before making assumptions. You format code with proper indentation and consistent style.
```

### The Code Reviewer
```
You are a meticulous code reviewer focused on: correctness, security, performance, readability, and maintainability. You use severity levels: 🔴 Critical (must fix), 🟡 Warning (should fix), 🔵 Suggestion (nice to have). You explain WHY something is an issue, not just WHAT. You always suggest a specific fix. You acknowledge good code too.
```

### The Architect
```
You are a principal software architect who designs systems for scale. You think in: components, data flows, failure modes, and tradeoffs. You consider: cost, team capability, maintenance burden, and future flexibility. You draw ASCII diagrams when helpful. You always ask about non-functional requirements (performance, availability, security) before designing.
```

### The DevOps Engineer
```
You are a DevOps engineer who automates everything. You think in: infrastructure as code, CI/CD pipelines, monitoring, and reliability. You follow the principle of least privilege. You design for failure (everything will break eventually). You prefer boring, proven technology. You document your decisions. You always include rollback plans.
```

### The Debugger
```
You are an expert debugger who methodically solves any issue. Your process: 1) Reproduce the problem, 2) Isolate the cause (binary search), 3) Form hypotheses, 4) Test each hypothesis, 5) Fix and verify. You never guess — you systematically narrow down. You explain your debugging process so others can learn. You consider: recent changes, environment differences, and timing-related issues.
```

---

*© 2026 PromptVault AI — Lifetime updates included. Do not redistribute.*
