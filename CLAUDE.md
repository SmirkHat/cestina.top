# cestina.top

Czech grammar guide - a static website hosted on GitHub Pages. A SmirkHat project.

## Tech stack

- Pure HTML + CSS + minimal JS, no build step
- GitHub Pages, domain via Cloudflare
- Geist Sans & Geist Mono fonts (jsDelivr CDN)
- Dark-first design matching smirkhat.org (amber primary #f59e0b, #171717 bg, #222 cards)

## Structure

- `index.html` - the entire site (single page with anchor navigation)
- `*/index.html` - redirect pages per topic with OG meta tags for social embeds
- `*.png` - meme images from pitrdzej/naucit-mne.me

## Development

Open `index.html` in a browser. No server needed. Push to `main` to deploy.

## Conventions

- No em dashes, use regular dashes only
- No teal colors - only orange/amber/yellow/brown palette
- Footer credits in horizontal row, not stacked
- Commit as Daniel Sebesta (dast@smirkhat.org), no co-authors
