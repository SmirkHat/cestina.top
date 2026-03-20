# cestina.top

Czech grammar guide — a static website hosted on GitHub Pages.

## What is this

A single-page site explaining common Czech language mistakes (mně/mě, tip/typ, shlédnout/zhlédnout, výjimka, holt/hold, jsi/si, sloveso být). Originally created by Dast in 2022, modernized into a static site.

## Tech stack

- Pure HTML + CSS, no build step, no JavaScript
- Hosted on GitHub Pages
- Fonts loaded from Google Fonts (Inter, Fira Code)
- Supports light/dark mode via `prefers-color-scheme`

## Structure

- `index.html` — the entire site (single page with anchor navigation)
- `mneme.png`, `screenshot.jpg`, `screenshot2.jpg` — images used on the page

## Development

Open `index.html` in a browser. No server needed. To deploy, push to `main` and enable GitHub Pages in repo settings (serve from root of `main` branch).

## Design decisions

- No frameworks or dependencies — just semantic HTML and modern CSS
- Responsive design using clamp/media queries
- Sticky navigation bar with blur backdrop
- Chat-bubble style for Discord message examples
- Color-coded correct (green) / incorrect (red) highlights
- Card-based layout for grammar rules
