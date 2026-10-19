# Validation — October 19, 2026

Validated in the cloud workspace using Node.js 24.19.0, npm 11.9.0, and installed Chromium.

- Frozen installation: `npm ci --cache /tmp/doris-npm-cache --no-audit --no-fund` passed.
- `npm run lint` passed.
- `npm run build` passed, including strict TypeScript validation. Production JS approximately 80.1 KB gzip; CSS approximately 5.2 KB gzip, excluding image assets.
- `CHROMIUM_PATH=/usr/bin/chromium npm test`: 3 tests passed. Covers five featured cards, seven project detail routes, category/search combinations, empty state and reset, direct navigation/reload, theme persistence, mobile menu, 320/390/768/1440 px layouts, actual project image loading, and unknown routes.
- axe automated WCAG A/AA checks found no violations on the home, project index, and LLM case-study routes in both themes. Initial illustration contrast issues were corrected and the full suite rerun. Automated checks do not replace a complete human accessibility audit.
- Additional Chromium checks verified keyboard skip-link focus, reduced-motion rendering, and loading of both actual project images.
- Development startup and a functional HTTP request verified Vite's client and React module entry.
- Desktop and mobile screenshots were inspected. No runtime browser exceptions were observed in navigation testing.

Not verified: public deployment, GitHub-hosted Actions execution, LinkedIn profile content (automated requests return 403), new-task cloud restoration, original project experiment reproducibility, or Lighthouse scores. Repository links derive from successfully inspected public repositories. External Tableau availability is not guaranteed. Resume download is intentionally absent until a real file is supplied.

No commits, pushes, GitHub settings changes, profile-repository writes, or public deployments were performed.

## Academic-style revision

Updated the visual direction using the owner-provided Jinheng Zhang portfolio PDF as a design reference: centered navy name banner, serif headings, circular social links, biography and education before compact numbered project rows. No biography, portrait, affiliation details, publications, awards, or achievements were copied from the reference. Project explorer and case studies remain functional. ESLint, TypeScript/production build, and all 3 Playwright tests passed after this revision, including both-theme automated accessibility checks. Reviewed desktop and mobile screenshots saved outside the checkout as portfolio-academic-desktop.png and portfolio-academic-mobile.png. Main CSS is now approximately 6.3 KB gzip. Doris's portrait remains pending a readable image-file attachment; the reference portrait is not used.
