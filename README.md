# Michanix AI Consulting — Knowledge Base & Website

Consulting material for AI adoption, published as a website where every page is readable as a knowledge article **and** presentable as a slideshow.

## Content

All material lives in [`content/`](./content) as Markdown files with frontmatter (`title`, `description`, `category`, `order`).

**Foundations**
- `history-of-ai.md` — A brief history of AI and why the last five years changed everything
- `getting-started-with-ai.md` — Getting started with AI: a guide for companies of any size
- `ai-architect-perspective.md` — The (fractional) AI architect's perspective and operating model

**Assess & Position**
- `ai-maturity-assessment.md` — The AI maturity audit: benchmark and position organizations by size
- `ai-in-business-functions.md` — AI use cases mapped across every business function

**Claude Code Enterprise Toolkit**
- `service-offerings.md`, `readiness-assessment.md`, `implementation-guide.md`, `training-deck.md`, `best-practices.md`, `faq-troubleshooting.md`

## The website

Next.js (App Router), statically generated. Each article page renders the Markdown as a knowledge article and has a **"Present as slideshow"** button that turns the page into a full-screen presentation — slides are split at `##` headings. Navigate with arrow keys / space, exit with Esc.

```bash
npm install
npm run dev    # local development at http://localhost:3000
npm run build  # production build (also regenerates version history)
```

## Version history

The site is version-controlled by design: edit a Markdown file, commit, push — the deployment rebuilds and every article page shows its own revision timeline (date, message, link to the commit on GitHub). `scripts/generate-history.mjs` produces `lib/history.json` from `git log --follow` at build time; a committed snapshot serves as fallback when the build environment has no git history.

## Editing workflow

1. Edit or add a Markdown file in `content/` (include frontmatter; use `##` headings to define slide boundaries)
2. Commit with a meaningful message — it becomes the page's visible change-log entry
3. Push; Vercel redeploys automatically when the repository is connected

## Deployment

Deployed on Vercel. Framework preset: **Next.js**, root directory: repository root, no environment variables required.
