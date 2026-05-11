# NAM CMS 2.0 — static prototypes

Clickable HTML/React prototypes for Case Manager, Neutrals Portal, and Client Portal. Open the **hub** first, then pick a portal.

## Repository

**GitHub:** [github.com/johansadie-art/NAM](https://github.com/johansadie-art/NAM)

## View on GitHub Pages

Published site (after Actions deploy succeeds):

**https://johansadie-art.github.io/NAM/index.html**

Start at the hub (`index.html`). These prototypes load JSX via **HTTPS** and `fetch`; use the published URL, not raw `file://` paths.

## Publish / push updates

The local repo is configured with:

`origin` → `https://github.com/johansadie-art/NAM.git`

**First-time:** create the empty **`NAM`** repository under **`johansadie-art`** on GitHub if it does not exist yet.

Then from this folder on your Mac (sign in when prompted, or use SSH):

```bash
cd "/path/to/Prototypes"
git push -u origin main
```

To use **SSH** instead of HTTPS:

```bash
git remote set-url origin git@github.com:johansadie-art/NAM.git
git push -u origin main
```

### Enable Pages

1. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Open the **Actions** tab and confirm **Deploy GitHub Pages** succeeds.
3. Share **https://johansadie-art.github.io/NAM/index.html**.

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
