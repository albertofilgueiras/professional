# Alberto Filgueiras PhD - Professional Website

## Problem Statement
Build a professional website for Alberto Filgueiras, a sports psychologist offering consulting, mental coaching, cognitive training, and a structured brain performance program.

## Core Requirements
- **Theme**: Black and green, modern, sporty, highly visual
- **WhatsApp**: +610415661366 (standardized messages per context)
- **Instagram**: @albertofilgueiras.phd
- **LinkedIn**: www.linkedin.com/in/alberto-filgueiras-5565561b0
- **Language**: Portuguese (Brazilian)

## Pages (Current)
1. **Home** — Single-page with ALL content: Hero ("Alberto Filgueiras / PhD em Neurociência Cognitiva"), 10% discount popup for Cérebro em Alta Performance, stats, bio, auto-scrolling logo carousel (14 institutions), feature cards ("Inteligência Emocional"), education, photo carousel (5 images), credentials, achievements, YouTube videos (3), research areas, CTA
2. **Serviços** — 3 service types with individual WhatsApp CTAs, benefits, FAQ
3. **Programa Cérebro em Alta Performance** — 16-session program, science-backed, package pricing, WhatsApp CTA
4. **Contato** — Contact form, WhatsApp, phone, Instagram, LinkedIn (no email, no location)
5. **Login** — Dark themed login form (mocked)

## Architecture
- Frontend: React + Tailwind CSS + Shadcn UI
- Backend: FastAPI + MongoDB (not yet implemented)
- Data: All mocked in mock.js

## Implemented (Feb 2026)

### Session 1
- [x] Full frontend prototype, black/green theme, routing
- [x] Testing: 22/22 passed

### Session 2
- [x] Standardized WhatsApp messages, real institution logos, renamed tabs
- [x] New page: Programa Fortaleza Emocional
- [x] Testing: 16/16 passed

### Session 3
- [x] Hero: "PhD em Neurociência Cognitiva" + specialist text
- [x] 10% discount popup for Programa Cérebro em Alta Performance
- [x] Merged ALL About content into Home, deleted About page/route
- [x] Auto-scrolling logo carousel (14 institutions)
- [x] Education before Trajetória Profissional, removed duplicate Pós-Doc
- [x] Renamed "Fortaleza Emocional" → "Cérebro em Alta Performance" everywhere
- [x] Services: individual WhatsApp per service type
- [x] Contact: LinkedIn replaces location
- [x] New photos added to carousel, Dunbar photo replaced
- [x] Testing: 20/20 passed

## P1 - Upcoming
- Backend implementation (FastAPI + MongoDB for contact form, auth)
- Connect frontend to real API endpoints

## P2 - Future
- Full JWT authentication flow
- Admin dashboard
- SEO optimization
