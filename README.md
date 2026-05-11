# NAM CMS 2.0 — static prototypes

Clickable HTML/React prototypes for Case Manager, Neutrals Portal, and Client Portal. Open the **hub** first, then pick a portal.

## View on GitHub Pages

After this repo is connected to GitHub Pages (see below), the site URL will be:

`https://<your-username>.github.io/<repository-name>/`

Start at **`/index.html`** (the hub). These prototypes load JSX via **HTTPS** and `fetch`; use the published URL, not raw `file://` paths.

## Publish from your machine

1. Create a new repository on GitHub (empty, no README required).
2. In this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: NAM prototypes"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

4. Open the **Actions** tab and confirm the **Deploy GitHub Pages** workflow succeeds. The workflow uses `.github/workflows/deploy-pages.yml`.

5. After deployment, visit **`https://<your-username>.github.io/<repository-name>/index.html`**.

### Notes

- **`/.nojekyll`** disables Jekyll so static files are served as-is.
- Shared styles/scripts live in **`nam-design-system/`**; portal HTML references them with **`../nam-design-system/`** so nothing relies on symlinks (compatible with GitHub Pages).
- Local preview: run **`serve-prototypes.command`** (Mac) or `python3 -m http.server 8765 --bind 127.0.0.1` from this directory and open `http://127.0.0.1:8765/index.html`.

## Regenerating `file://` bundles (optional)

If you change `.jsx` sources and want offline `file://` bundles to match, run:

```bash
node scripts/build-all-file-fallbacks.mjs
```

GitHub Pages uses the HTTP + Babel path by default; fallbacks are optional for local disk opens.
