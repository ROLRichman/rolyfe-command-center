# Roadmap

## Phase 1 — Unified gateway
- [x] Responsive mobile-first directory
- [x] Search and category filters
- [x] Live-site and source-repository links
- [x] Explicit disclosure that integrations are not yet configured
- [ ] Verify all external destinations and GitHub Pages deployment

## Phase 2 — Service registry
- [ ] Define a typed registry for platform URL, owner, health endpoint, last checked time, and integration state
- [ ] Show unknown/unconfigured separately from healthy/degraded
- [ ] Add safe timeouts and failure states

## Phase 3 — AI event routing
- [ ] Define signed webhook schema and event IDs
- [ ] Validate source signatures and reject replayed events
- [ ] Store minimal task status and response metadata
- [ ] Add per-source access control and audit history

## Phase 4 — Notifications
- [ ] Configure transactional email provider using server-side secrets
- [ ] Add delivery status, retries and idempotency
- [ ] Add optional SMS only after provider, recipient verification, consent and cost are confirmed
- [ ] Provide notification preferences and test-delivery flow

## Phase 5 — Shared services
- [ ] Review existing Supabase project, RLS, functions and security advisors
- [ ] Design minimal tables only after the event model is agreed
- [ ] Add automated accessibility, link and JavaScript smoke tests
- [ ] Verify deployment from the merged commit
