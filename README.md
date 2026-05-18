# Ro'ya University Website

A complete, modern React landing page for **Ro'ya University for Science & Technology**.

## Design Language

- **Theme**: Pharaonic Egyptian heritage meets modern academic prestige
- **Colors**: Deep forest green (#1A4A2E), antique gold (#B8962E), parchment cream (#F5EDD6), rich black
- **Typography**: Playfair Display (headings) · Cormorant Garamond (body) · Josefin Sans (UI)
- **Motifs**: Temple columns, hexagonal emblems, geometric grid patterns, gold-ray backgrounds, papyrus textures

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Project Structure

```
roya-university-website/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   ├── programs.js         — 6 faculty programs
    │   └── boardMembers.js     — 9 real board members from PDF
    ├── components/
    │   ├── Navbar.jsx          — Fixed nav, scroll-aware, mobile menu
    │   ├── Hero.jsx            — Pharaonic hero with stats bar
    │   ├── About.jsx           — About + interactive video card/modal
    │   ├── Programs.jsx        — Programs section wrapper
    │   ├── ProgramCard.jsx     — Animated faculty card
    │   ├── Collaboration.jsx   — USM MOU partnership banner
    │   ├── FutureEducation.jsx — Stats + timeline section
    │   ├── BoardMembers.jsx    — Board section wrapper
    │   ├── BoardCard.jsx       — Board member card (regular + featured)
    │   └── Footer.jsx          — Full footer with links & contact
    └── styles/
        ├── global.css          — Design system, CSS variables, utilities
        ├── App.css
        ├── Navbar.css
        ├── Hero.css
        ├── About.css
        ├── Programs.css
        ├── ProgramCard.css
        ├── Collaboration.css
        ├── FutureEducation.css
        ├── BoardMembers.css
        ├── BoardCard.css
        └── Footer.css
```

## Sections

| Section | Description |
|---|---|
| **Navbar** | Fixed, scroll-aware, mobile hamburger menu |
| **Hero** | Full-screen dark hero, Pharaonic column silhouettes, gold rays, animated title, stats bar |
| **About** | Split layout — intro text with university pillars + clickable video card with modal |
| **Programs** | Dark green section, 6 faculty cards with hover animations |
| **Collaboration** | USM × Ro'ya MOU partnership banner with benefits grid |
| **Future Education** | Dark section with 4 insight cards + timeline of milestones |
| **Board of Trustees** | 9 members from the PDF — featured chairman card + 8 standard cards |
| **Footer** | Full footer with brand, links, programs, contact info |

## Customization

- **Video**: In `About.jsx`, replace the placeholder `<div>` inside `.video-embed` with an `<iframe>` pointing to your YouTube/Vimeo embed URL
- **USM Logo**: In `Collaboration.jsx`, replace `.usm-logo-placeholder` with an `<img src="..." />` tag
- **Contact info**: Update `Footer.jsx` with real address, email, and phone
- **Colors**: All colors are CSS variables in `global.css` — easy to tweak

## Board Members

All 9 board members are sourced directly from the provided PDF:
- Prof. Ahmed Mohamed Hamad (Chair)
- Prof. Wael Mohamed El-Hagawy
- Prof. Makram Sobhy Rizkallah
- Eng. Hossam El-Din Hassan
- Major General Eng. Kamal El-Din Hassan Helmy
- Prof. Hanan Abdel Hamid Ibrahim
- Prof. Alaa Mohamed Ali El-Sayed
- Mr. Hassan Abdel Azim Hassan
- Dr. Mohamed Taher Hashem
