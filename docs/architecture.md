# Architecture

## Current application
The application is React 18 with Create React App. The current page is a single-page portfolio. Existing content and styles are kept working while the next visual iteration is developed.

## Planned component boundaries
- `components/layout`: header, navigation, footer and page shell
- `components/hero`: hero copy, portrait stage, depth layers and interaction controls
- `components/sections`: about, selected work, expertise, journey and contact
- `data`: editable profile, links, experience and project summaries
- `hooks`: pointer, reduced-motion and device-orientation behavior
- `styles`: design tokens, typography and responsive primitives

## Motion architecture
1. CSS transforms for simple hover and scroll states.
2. Framer Motion for React entrance/exit and section reveal transitions.
3. GSAP only for complex, coordinated timelines.
4. Three.js / React Three Fiber only where real depth rendering is justified.

Avoid running multiple animation systems on the same element.

## Accessibility and performance
- Respect `prefers-reduced-motion`.
- Keep the hero usable without pointer, gyro or WebGL.
- Do not request camera permissions for the default experience.
- Lazy-load non-critical media and 3D resources.
- Provide a static portrait fallback for unsupported devices.
