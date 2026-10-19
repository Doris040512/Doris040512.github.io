# Doris Wang — Portfolio

A static React + TypeScript portfolio for https://Doris040512.github.io, built with Vite, Tailwind CSS, and Lucide icons. It includes a searchable project index, seven evidence-based case studies, five featured projects, responsive navigation, and persistent light/dark themes.

## Development

Use Node.js 24 and npm. From this repository:

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run preview

# Browser and accessibility checks (after building)
npx playwright install chromium
npm test
# In this cloud machine, use the installed Chromium instead:
CHROMIUM_PATH=/usr/bin/chromium npm test
```

`dist/` contains the production website. No API key, backend, or runtime GitHub request is required. Use the existing checkout; cloud tasks are isolated and do not require a worktree.

## Content

Edit `src/data/content.ts` for projects, education, profile links, and skills. Layout lives in `src/App.tsx`; design tokens and responsive styles in `src/styles.css`. Project detail routes use `/#/projects/<id>` so refreshes work on GitHub Pages. Hash routes share the root HTML metadata; the sitemap intentionally lists only the canonical root. Dedicated search-engine metadata for each case study would require prerendered pages.

The influenza preview uses an actual project plot and the feedback preview shows the actual manual workspace; other illustrations are labeled conceptual and do not represent product screenshots. Source-reported metrics have not been independently reproduced. Education is based on owner-supplied background; dates and exact program titles remain to be confirmed. Employment details are omitted until a resume or accessible profile is supplied. Resume and email links are omitted until real materials are provided. LinkedIn is owner-supplied; automated access returned 403.

See `docs/CONTENT-REVIEW.md` for outstanding editorial checks. `docs/PROFILE-README.md` is a separate draft for the special Doris040512/Doris040512 repository. It has not been copied there. Its portfolio link becomes live only after deployment.

## Authorized deployment only

No deployment is triggered on push. The workflow is manual and defaults to validation without publishing. After reviewing content and explicitly authorizing publication:

1. Approve and push this repository's changes to `main`.
2. In repository Settings → Pages, choose **GitHub Actions**.
3. Run **Validate and deploy portfolio**, selecting `deploy` only when publication is approved.
4. Verify the published URL and representative project routes.

After separately authorizing automatic deployments, add `push: { branches: [main] }` under `on` and change the deploy condition to allow authorized main-branch push events. Do not enable this before authorization. The deployment job alone receives Pages write and OIDC permissions. No credentials belong in source.

Social metadata uses the included PNG preview; the editable SVG source is retained. No Lighthouse scores are claimed.
