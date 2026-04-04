# Alberto Filgueiras PhD - Professional Website

## Problem Statement
Build a professional website for Alberto Filgueiras, a sports psychologist offering consulting, mental coaching, cognitive training, and a structured emotional fortitude program.

## Core Requirements
- **Theme**: Black and green, modern, sporty, highly visual
- **Sports imagery**: Soccer, track & field, beach volleyball (no American football) + user uploaded photos
- **Instagram**: @albertofilgueiras.phd
- **WhatsApp**: +610415661366 (all booking CTAs link here with standardized message)
- **Language**: Portuguese (Brazilian)

## Pages
1. **Home** - Hero "Alberto Filgueiras PhD", stats (20+ years, 75+ pubs, 500+ athletes, 4 country flags), feature cards, 4-photo carousel with credentials, CTA to WhatsApp
2. **Sobre (About)** - "Alberto Filgueiras, PhD FHEA", bio, education (7 entries incl. Licença C AFC), 8 institutions with real logos, achievements (20 anos), YouTube videos (3), research areas (Transculturais)
3. **Serviços (Services)** - 3 service types, benefits, FAQ, WhatsApp CTA
4. **Programa Fortaleza Emocional** - NEW: 16-session program, science-backed, young soccer images, package pricing, WhatsApp CTA with specific message
5. **Contato (Contact)** - Contact form, WhatsApp CTA, phone, Instagram (no email)
6. **Login** - Dark themed login form (mocked)

## Architecture
- Frontend: React + Tailwind CSS + Shadcn UI
- Backend: FastAPI + MongoDB (not yet implemented)
- Data: All mocked in mock.js

## What's Been Implemented

### Session 1 (Feb 2026)
- [x] Full frontend prototype with all pages
- [x] Black/green sporty theme across ALL pages
- [x] Photo carousel, YouTube embeds, institution badges
- [x] WhatsApp linking, email removed, 20 years update
- [x] Testing: 22/22 passed (iteration 1)

### Session 2 (Feb 2026)
- [x] Standardized WhatsApp message on ALL links across all pages
- [x] Removed vertical photo from carousel (now 4 images)
- [x] Updated Brazil team caption to "Seleção Brasileira de Voleibol de Praia"
- [x] About title: "Alberto Filgueiras, PhD FHEA"
- [x] Education: Added "Licença C de Treinador de Futebol: Football Australia/AFC"
- [x] Real logos for all 8 institutions (uploaded + external URLs)
- [x] "Cross-Culturais" → "Transculturais"
- [x] Renamed "Consultoria" tab to "Serviços" (route: /servicos)
- [x] NEW: "Programa Fortaleza Emocional" page with 16 modules, science content, young soccer images
- [x] Testing: 16/16 passed (iteration 2)

## P1 - Upcoming
- Backend implementation (FastAPI + MongoDB)
- Contact form API endpoint
- Authentication (Login/Register)

## P2 - Future
- Full authentication flow with JWT
- Admin dashboard
- SEO optimization
