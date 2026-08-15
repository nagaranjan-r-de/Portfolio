# Portfolio

Vite + React implementation of the portfolio UI (light/dark theme, responsive
two-column desktop layout, projects carousel, certificates reveal-more,
skills chips, education, footer).

## Setup

```bash
npm install
npm run dev
```

## Structure

- `src/data/portfolioData.js` — all content (name, projects, certificates,
  skills, education, resume/social links). Edit this file to update the site.
- `public/` — put `profile.jpg`, `resume.pdf`, project images, and certificate
  files here (see `public/README-ASSETS.md`).
- `src/components/` — one component per section, matching the structure
  requested.
- Theme is stored in `localStorage` under `portfolio-theme` and toggled via
  `ThemeToggle.jsx`.

## Build

```bash
npm run build
npm run preview
```
