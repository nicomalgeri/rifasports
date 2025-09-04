# Rifa Sports — Static Export

This repository contains a static export of the Rifa Sports website prepared for GitHub Pages deployment.

## Structure
- `index.html` – main page
- `assets/css/style.css` – custom overrides (core Webflow CSS is loaded from the CDN)
- `assets/js/` – place `webflow.js` and other JS here (if present in your export)
- `assets/images/` – all images
- `assets/fonts/` – custom fonts used by the site

> Note: If any animations/interactions are missing, add your exported `webflow.js` to `assets/js/` and include it at the end of `index.html`.

## How to use
1. Copy all images from your Webflow export into `assets/images/`.
2. Copy any font files from your export into `assets/fonts/` and ensure the CSS src paths match.
3. If your export included `webflow.js` (and possibly jQuery), drop it into `assets/js/` and uncomment the `<script>` tag near the end of `index.html`.

## Deploy to GitHub Pages
```bash
# From the repo root
git init
git add .
git commit -m "Initial commit — Rifa Sports static export"
git branch -M main
git remote add origin YOUR_GITHUB_REMOTE_URL
git push -u origin main

# Enable GitHub Pages: Settings → Pages → Source: GitHub Actions or main branch / root
```
