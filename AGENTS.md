# AGENTS.md

## Cursor Cloud specific instructions

This repo (`react-portfolio`) is a single Next.js 13 (pages router) web app. There are no other services.

- Node 22 is required (see `.nvmrc` and `engines` in `package.json`). Dependencies install with `npm ci`.
- Standard scripts live in `package.json`: `npm run dev` (dev server on port 3000), `npm run build`, `npm start`, `npm run lint`.
- Non-obvious: this is currently a **redirect-only** site. `middleware.js`, `next.config.js`, all `pages/**` and `pages/api/**` handlers permanently redirect every path to `https://www.brian-g.com/`. So hitting `localhost:3000` returns an HTTP 308/301 redirect rather than rendering local content. Verify the app with `curl -I http://localhost:3000/` (expect `308` + `Location: https://www.brian-g.com/`), and in a browser it will navigate to the external site (needs internet access to render the destination).
- The portfolio UI components under `Components/` and the `pages/Contact.js` / `pages/projects.js` routes still exist but are unreachable while the global redirect is in place. To develop them locally you would need to temporarily disable the redirects in `middleware.js` / `next.config.js`.
- `.env` (git-ignored) holds a `password` used by the nodemailer contact API (`pages/api/contact.js`); the contact route also just redirects today, so no mail config is needed to run the app.
- `next build` prints a harmless Tailwind "No utility classes were detected" warning and a caniuse-lite outdated notice; both are safe to ignore.
