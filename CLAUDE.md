# cestina.top

Czech grammar guide — a static website hosted on GitHub Pages. A SmirkHat project.

## What is this

A single-page site explaining common Czech language mistakes (mně/mě, jí/ji, tip/typ, shlédnout/zhlédnout, výjimka, holt/hold, jsi/si, sloveso být). Originally created by Dast in 2022, with memes from pitrdzej's naucit-mne.me project.

## Tech stack

- Pure HTML + CSS + minimal JS (swap interaction), no build step
- Hosted on GitHub Pages
- Geist Sans & Geist Mono fonts from Vercel (via jsDelivr CDN)
- Dark-first design with light mode via `prefers-color-scheme`
- Design system matches smirkhat.org (amber/orange palette, shadcn/ui-style cards)

## Structure

- `index.html` — the entire site (single page with anchor navigation)
- `mneme.png` — OG image for social embeds
- `mneMe.png`, `jiJi.png`, `tip.png`, `holdHolt.png`, `jsiSi.png`, `bysme.png` — meme images from pitrdzej
- `SmirkHat.png` — SmirkHat logo
- `screenshot.jpg`, `screenshot2.jpg` — Discord screenshot examples

## Development

Open `index.html` in a browser. No server needed. To deploy, push to `main` and enable GitHub Pages in repo settings (serve from root of `main` branch).

## Design decisions

- Matches smirkhat.org design: dark-first (#171717 bg), amber primary (#f59e0b), #222 cards, Geist font
- Uses same CSS variable naming as shadcn/ui (--background, --foreground, --card, --primary, --muted, etc.)
- No frameworks or dependencies — just semantic HTML and modern CSS
- Responsive two-column layout (content + meme) on desktop, stacks on mobile
- Sticky navigation bar with blur backdrop
- Chat-bubble style for Discord message examples
- Interactive `.swap` elements: hover to reveal the mnemonic replacement
- Full Open Graph + Twitter Card meta tags for Discord/social sharing
- Color-coded correct (green) / incorrect (red) highlights
