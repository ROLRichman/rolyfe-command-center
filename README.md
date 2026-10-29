# RO’Lyfe Command Hub™

The unified gateway for the RO’Lyfe intelligence ecosystem.

## Purpose

Bring existing RO’Lyfe platforms together through one mobile-first dashboard while preserving each platform's independent repository and deployment. This hub is a directory and integration foundation; it does not claim that an API, AI provider, database, or notification channel is connected until that connection is configured and tested.

## Current platform links

- Trading Intelligence Classroom
- Tactical Intelligence Center
- Property Research Intelligence
- Auction Capital Machine
- Funding & Capital
- Family Wealth Academy
- Video Hub
- AI Business Intelligence
- Robotics Intelligence
- Live Sports Center
- Contract Documents Hub
- Relocation Intelligence
- eGaming & Strategy

## Run locally

This first phase is a static HTML/CSS/JavaScript site. Open `index.html` in a browser or serve the repository root with any static HTTP server. No build step or API key is required for the directory UI.

## Integration roadmap

1. Establish a reliable central directory and verify every destination.
2. Add a service registry that distinguishes configured, healthy, degraded, and unconfigured services.
3. Design a secure event intake for task completions and provider callbacks.
4. Add email notifications through a server-side provider; add SMS only after explicit provider and cost setup.
5. Add shared data/auth only where needed, with row-level security and server-side secrets.
6. Add automated checks and verify GitHub Pages deployment.

## Notification architecture

An AI provider's response does not automatically reach this dashboard. A service must expose a webhook/callback, provide an authenticated inbox/API, or be polled on a schedule. A backend event receiver should validate the source, store a minimal event record, and dispatch a notification through a configured email or SMS provider. Never place provider secrets in browser code. Do not log full sensitive prompts or personal data by default.

## Security and truthfulness

- Public repository pages must not contain private API keys, service-role keys, access tokens, or personal contact details.
- Public Supabase keys are only suitable for browser use when RLS and database permissions are correctly configured.
- Use explicit authentication and authorization for private events and actions.
- Treat provider HTTP success as transport success, not proof that correct data rendered in the UI.
- Never label a service "live" until its response and user-visible behavior are tested.

## Shared Property Research Dock

This project loads the reusable RO’Lyfe Property Research Dock from the canonical property research site. It links to the same address-targeted research sources for listing/comps, tax sales/auctions, parcel and official property/tax research, flood maps, capital routes, and closing documents. The dock opens provider pages and web searches; it does not scrape or import verified listing, title, lien, tax, or comp data.

Shared workflow standard: https://github.com/ROLRichman/rolyfe-property-research-intelligence/blob/main/PROPERTY_RESEARCH_STANDARD.md
Shared component: https://github.com/ROLRichman/rolyfe-property-research-intelligence/blob/main/shared/property-research-dock.js
