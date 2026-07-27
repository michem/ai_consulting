# AI Consulting Knowledge Base — Working Agreement

This repo is a Next.js knowledge-base website. Articles live in `content/*.md` with frontmatter (`title`, `description`, `category`, `order`). Every article renders as a readable page AND as a slideshow (slides split at `##` headings). Build with `npm install && npm run build`; version history per page is generated from git at build time, so commit messages are user-visible changelog entries.

## Core philosophy — the anchor for ALL content

Everything must tie back to `content/team-first-ai.md` (Team-First AI, after Bill Campbell and Andy Grove): AI is a team-performance decision, structured by six questions — (1) what is the business trying to do, (2) what team is on it, (3) how successful is that team today, (4) how could AI raise that team's output (leverage, task-relevant maturity), (5) do we have the right team for AI, (6) who keeps score. Content that doesn't serve one of these questions doesn't belong here.

## Editorial rules

- **Audience:** business leaders and their teams; a fractional AI architect uses these pages with clients of any size (small ≤50 FTE, mid 50–500, enterprise 500+). Always calibrate advice by organization size where relevant.
- **Tone:** direct, practical, opinionated-but-grounded. No hype, no filler, no "in today's fast-paced world".
- **Structure:** `##` sections must work as standalone slides — one idea per section, roughly 5–15 lines each. Use tables for comparisons, bold sparingly for the load-bearing sentence.
- **Sources:** when integrating external research, cite it inline with a link and prefer primary/credible sources (papers, vendor docs, reputable industry research). Date-sensitive claims should say when they were true.
- **Cross-linking:** link related articles with root-relative paths (`/articles/<slug>`); every article ends with a short "Where to go next" pointer.
- **Language:** English. Currency examples in EUR.

## Loop protocol (automated improvement agents)

Automated sessions (content-researcher, presenter, editor-in-chief) MUST:

1. **Never push to `main`.** Work on a branch named `loop/<role>-<yyyymmdd>` and open a PR to `main` — or, if an open `loop/<role>-*` PR already exists, check out that branch and improve it instead of opening another. Keep at most one open PR per role.
2. **Keep PRs small and mergeable** — one theme per PR, clear title prefixed `loop:`, body listing what changed, why it serves the core philosophy, and which sources were used.
3. **Quality bar over quantity.** Making no change is a valid outcome; say so and stop. Never pad articles to appear productive. Prefer improving existing pages over adding new ones; propose a new article only when a topic clearly serves the six questions and doesn't fit an existing page.
4. **Verify before pushing:** `npm install && npm run build` must pass; if you touched slide structure, sanity-check that `##` sections are slide-sized.
5. **Respect the material:** don't delete or rewrite whole articles; evolve them. Don't change pricing, service offerings, or personal/company branding (`lib/site.ts`) unless explicitly asked by the repo owner.
6. **Leave a trail:** commit messages are shown to readers on the site's per-page version history — write them as changelog entries.
