# Asset preparation

## Hero photography
The supplied pair of original portrait photographs are the source masters. The smiling full-body image is the preferred hero candidate; the neutral-expression image is a secondary editorial image.

Recommended derivatives:
- `hero-desktop.webp`: wide crop with the subject positioned to leave negative space for copy
- `hero-mobile.webp`: portrait crop with the full head and upper body visible
- `portrait-secondary.webp`: portrait crop for the about/editorial section
- `hero-depth-map.webp`: grayscale depth map generated for the parallax treatment

Keep original uploads outside the production bundle. Commit optimized derivatives only. Do not retouch facial identity, reshape features or synthesize unseen angles.

## 3D readiness
The first implementation is a 2.5D layered image treatment. True head rotation requires additional multi-angle source imagery or a separately generated 3D asset; it must not be faked by stretching a single face.

## Media budgets
- Prefer WebP/AVIF for raster assets.
- Aim for a hero image below 350 KB per responsive derivative.
- Use explicit width/height or aspect ratio to prevent layout shift.
- Lazy-load all imagery below the first viewport.
