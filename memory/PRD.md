# Alberto Filgueiras PhD - Professional Website

## Problem Statement
Build a professional website for Alberto Filgueiras, a sports psychologist offering consulting, mental coaching, cognitive training, and online services.

## User Personas
- Potential clients (athletes, clubs, parents of athletes)
- Sports professionals looking for consulting
- Academic/research community

## Core Requirements
- **Theme**: Black and green, modern, sporty, highly visual
- **Sports imagery**: Soccer, track & field, beach volleyball (no American football)
- **Instagram**: @albertofilgueiras.phd
- **WhatsApp**: +610415661366 (all booking CTAs link here)
- **Language**: Portuguese (Brazilian)

## Pages
1. **Home** - Hero with "Alberto Filgueiras PhD", stats (20+ years, 75+ publications, 500+ athletes, 4 country flags), feature cards (Controle Mental, Foco Total, Equilíbrio, Crescimento), photo carousel with credentials, CTA to WhatsApp
2. **Sobre (About)** - Bio, education (6 entries incl. 2 Pós-Doutorados), 8 professional institutions (no dates), achievements (20 anos), YouTube videos (3 embeds), research areas
3. **Consultoria (Services)** - 3 service types, benefits, FAQ, WhatsApp CTA
4. **Contato (Contact)** - Contact form, WhatsApp CTA, phone, Instagram, location (no email)
5. **Login** - Dark themed login form (mocked)

## Architecture
- Frontend: React + Tailwind CSS + Shadcn UI
- Backend: FastAPI + MongoDB (not yet implemented)
- Data: All mocked in mock.js

## What's Been Implemented (Feb 2026)
- [x] Full frontend prototype with all 5 pages
- [x] Black/green sporty theme across ALL pages
- [x] Photo carousel with 5 real uploaded images of Alberto
- [x] YouTube video embeds (3 videos) on About page
- [x] Institution badges (8 professional experiences)
- [x] Country flags (BR, CA, UK, AU) instead of number
- [x] All course-related content REMOVED
- [x] WhatsApp linking on all CTAs
- [x] Email removed from contact/footer
- [x] 20 years experience (updated from 15)
- [x] Responsive navigation (Home, Sobre, Consultoria, Contato, Login)
- [x] Testing: 100% pass rate (22/22 tests)

## P0 - Completed
- Theme overhaul (black/green) on all pages
- Content updates per user specifications

## P1 - Upcoming
- Backend implementation (FastAPI + MongoDB)
  - Contact form API endpoint
  - Authentication (Login/Register)
- API contracts definition

## P2 - Future
- Full authentication flow with JWT
- Admin dashboard for managing contacts
- Course platform (if reintroduced)
- SEO optimization
