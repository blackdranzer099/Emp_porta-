# Sai Kiran Pamula — Personal Portfolio

Cinematic, editorial personal website focused on integration engineering, SnapLogic, SnapCode, custom Snap Pack development, data engineering and automation.

## Stack
- React 18 + Create React App
- Framer Motion for interface transitions
- Three.js + React Three Fiber + Drei for the optional 2.5D/3D hero layer
- GSAP for coordinated timeline interactions where needed
- Lucide React for icons
- CSS custom properties for the visual system

## Local development
```bash
npm ci
npm start
```

Production build: `npm run build`

## Structure
- `src/components/layout` — header, navigation and footer
- `src/components/hero` — portrait stage and hero interactions
- `src/components/sections` — page sections
- `src/data` — editable portfolio content
- `src/hooks` — pointer, orientation and reduced-motion hooks
- `src/assets/images` — optimized photography
- `src/assets/models` — optional 3D assets
- `src/styles` — design tokens and global styles
- `docs` — architecture, asset and deployment notes
- `tests` — browser and accessibility test plan

## Hero principles
Start with a lightweight 2.5D depth/parallax treatment using the supplied portrait. Preserve the real photograph and facial proportions. No webcam access or face tracking is enabled by default. Provide a static fallback and respect reduced-motion preferences.

## Workflow
Development is isolated on `premium-portfolio-2026`. Keep `main` untouched until visual, responsive and accessibility review is complete.
