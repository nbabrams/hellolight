# hellolight.org

Static site. No build step — GitHub Pages serves the files as-is.

## Files
- `index.html` — homepage
- `styles.css` — all styles (brand tokens at the top of the file)
- `main.js` — sticky nav, mobile menu, reveal-on-scroll, footer year
- `assets/` — drop images here (see placeholders referenced in `index.html`)
- `CNAME` — custom domain for GitHub Pages

## Deploy to GitHub Pages
1. Create a repo (e.g. `hellolight/hellolight.org`), push these files to `main`.
2. Repo → Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)`.
3. In your DNS (wherever hellolight.org is registered):
   - `A` records for `hellolight.org` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<github-user>.github.io`
4. Back in Settings → Pages, set custom domain to `www.hellolight.org` and tick **Enforce HTTPS** once the cert issues.
5. Keep the Webflow site live until DNS has propagated, then cancel the plan.

## Before launch — TODO
- [x] Donate → `donate.html` (RaiseDonors embed via The Cause)
- [x] Newsletter → mailto connect@hellolight.org
- [x] Team bios + links
- [x] og:image (`assets/og-image.jpg`), favicons
- [x] Brand film embedded from YouTube (youtu.be/FOsRgqL8DLk)
- [ ] Optional: Adobe Fonts kit for Neue Haas Grotesk Display (`--wordmark` picks it up)
- [ ] DNS + custom domain (steps above)
