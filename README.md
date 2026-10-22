# 🪔 Diwali Invites

Two animated, single-page Diwali invitations. Pure HTML, CSS and JS, with no build step and no dependencies (fonts load from Google Fonts).

| Style | Folder |
|-------|--------|
| Desi (traditional, mandala + toran) | `desi/` |
| Gen Z (neon, stickers, WhatsApp RSVP) | `genz/` |

## Structure

```
.
├── index.html          # picker page
├── desi/   (index.html, style.css, script.js)
├── genz/   (index.html, style.css, script.js)
├── .github/workflows/pages.yml
└── .nojekyll
```

## Customize

Open `script.js` in either folder and edit the `INVITE` object at the top (names, date, venue, RSVP number, WhatsApp number in `genz`).

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this repo to GitHub (branch `main`).
2. Go to **Settings → Pages → Source** and choose **GitHub Actions**.
3. The workflow in `.github/workflows/pages.yml` publishes on every push.

Your invites will be live at `https://<username>.github.io/<repo>/desi/` and `/genz/`.
