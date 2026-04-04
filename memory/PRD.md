# Alberto Filgueiras PhD - Professional Website

## Problem Statement
Professional website for Alberto Filgueiras, sports psychologist offering consulting, mental coaching, cognitive training, a brain performance program, published books, and recorded lectures. Lead generation via WhatsApp.

## Pages (Current - 7 pages)
1. **Home** — Hero (Evandro-nobg.png), popup 10% off, stats, logo carousel (#DBDBDB backgrounds), features, credentials, education, experience carousel (Flamengo, Vôlei de Praia, Dunbar Rovers, Cairns Taipans) + 13 institutions, achievements, YouTube videos, research areas, CTA, bio, books
2. **Serviços** — 3 service types with WhatsApp CTAs, benefits, FAQ, books
3. **Programa Cérebro em Alta Performance** — 16-session program, science-backed, bonus book section (free Amazon book)
4. **Livros** — 4 books with full descriptions and Amazon links
5. **Aulas Gravadas** — 12 YouTube lectures from UERJ (2020-2022) (route: /curso-psicologia-processos-basicos)
6. **Contato** — Contact form, WhatsApp, Instagram, LinkedIn
7. **Login** — Dark themed (mocked)

## Architecture
- Frontend: React + Tailwind CSS + Shadcn UI
- Backend: FastAPI + MongoDB (not yet implemented)

## Implementation History

### Session 1 - Initial build (22/22 tests)
### Session 2 - Content refinements (16/16 tests)
### Session 3 - Major restructuring (20/20 tests)
### Session 4 - Final structure (16/16 categories, 100%)
### Session 5 - Visual tweaks (12/12 tests, 100%) - Feb 2026
- Hero image replaced with Evandro-nobg.png (transparent)
- Logo carousel and institution grid: #DBDBDB gray backgrounds
- Dunbar Rovers FC photo added to experience carousel
- Nav renamed: "Curso Psicologia e Processos Básicos" -> "Aulas Gravadas"
- Bonus book section added to Programa Cérebro page (Amazon link + GRATIS badge)
- Orphaned files deleted: About.jsx, Courses.jsx, CourseDetail.jsx, CourseCard.jsx

## P1 - Upcoming
- Backend (FastAPI + MongoDB) for contact form, auth

## P2 - Future
- JWT auth, admin dashboard, SEO
