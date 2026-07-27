---
title: "Getting Started with AI: A Guide for Companies"
description: "A pragmatic entry path into AI for organizations of any size — first use cases, buy vs. build, governance basics, and a 90-day plan."
category: "Foundations"
order: 2
---

# Getting Started with AI: A Guide for Companies

Most organizations don't fail at AI because they picked the wrong model. They fail because they started in the wrong place: a moonshot project, a tool nobody asked for, or a pilot with no path to production. This guide lays out a pragmatic entry path that works for a 15-person firm and a 5,000-person enterprise alike — the difference is scale, not sequence.

## Start with Problems, Not Technology

The right first question is not *"What can AI do?"* but *"Where do we lose the most time, money, or quality on repeatable knowledge work?"*

Good early candidates share four traits:

- **Frequent** — happens daily or weekly, so gains compound
- **Language- or document-heavy** — reading, writing, extracting, summarizing, classifying
- **Tolerant of review** — a human can check the output faster than producing it from scratch
- **Bounded** — clear inputs, clear definition of "done"

Classic examples: answering repetitive customer emails, summarizing meetings and calls, drafting proposals from templates, extracting data from invoices or contracts, first-pass CV screening, internal knowledge search.

## The Three Horizons of AI Adoption

Think of adoption in three horizons. Every organization should be active in Horizon 1 within weeks; Horizons 2 and 3 follow as maturity grows.

| Horizon | What it looks like | Typical effort | Typical payback |
|---|---|---|---|
| **1. Assist** | Individuals use AI assistants (chat, coding, writing) inside existing workflows | Days–weeks; licenses + training | 10–30% personal productivity on covered tasks |
| **2. Integrate** | AI is wired into your systems and data: RAG knowledge bases, automated document processing, AI in the CRM/ERP | Weeks–months; needs engineering & data work | Process-level gains: cycle time, cost per case |
| **3. Transform** | Workflows are redesigned around AI agents; new products and services become possible | Quarters; needs leadership commitment | Structural: new capacity, new offerings |

The most common mistake is starting at Horizon 3 ("let's build our own model / an AI product") before Horizon 1 fluency exists in the organization.

## Buy, Configure, or Build?

For each use case, choose the lowest rung on the ladder that meets the need:

1. **Buy** — an off-the-shelf AI feature in software you already own (CRM, office suite, helpdesk). Zero engineering. Do this by default.
2. **Configure** — a general assistant plus your context: custom instructions, projects/workspaces, uploaded documents, no-code automations. Hours to days of effort.
3. **Integrate** — API-based workflows connecting a frontier model to your systems (RAG, document pipelines, agents with tool access). Weeks of engineering; this is where differentiated value usually lives.
4. **Build** — training or fine-tuning your own models. Rarely justified below very large scale or truly proprietary data advantages. Treat claims that you "need your own model" with skepticism.

**Rule of thumb:** competitive advantage comes from *your data, your workflows, and your adoption speed* — almost never from owning the model.

## The Minimum Viable Foundations

You do not need a data lake and a chief AI officer to start. You do need four things:

- **An approved tool.** Give people a sanctioned, enterprise-grade AI assistant (with data-privacy guarantees: no training on your data) so they stop pasting company information into free consumer tools. Shadow AI usage is already happening in your organization — channel it, don't ban it.
- **A one-page usage policy.** What data may go into which tools; what must be human-reviewed before leaving the building; who to ask when unsure. One page. Longer policies go unread.
- **A named owner.** One accountable person (or small squad) who curates use cases, tracks results, and owns the tool relationship — even at 20% of someone's time in a small company.
- **A measurement habit.** Before piloting anything, write down the baseline (time per task, cost per case, backlog size). Without a baseline, every pilot "feels promising" and nothing gets funded.

## A 90-Day Starting Plan

**Days 1–15: Orient.**
- Run the [AI Maturity Audit](/articles/ai-maturity-assessment) to establish your baseline.
- Inventory current AI usage — official and shadow.
- Publish the one-page policy; procure an enterprise AI assistant.

**Days 16–45: Enable.**
- Train all knowledge workers (2–3 hours: capabilities, limits, prompting, data rules).
- Collect use-case ideas from the floor; score them on value × feasibility.
- Launch 2–3 Horizon-1 quick wins with named owners and baselines.

**Days 46–90: Prove and decide.**
- Measure the quick wins against baselines; kill what doesn't work, scale what does.
- Select one Horizon-2 integration candidate (typically: internal knowledge assistant or document processing) and scope it properly.
- Report results to leadership; decide the next quarter's portfolio and budget.

## Common Pitfalls

- **The eternal pilot.** Pilots without success criteria and a production path die quietly. [MIT's *GenAI Divide* study (August 2025)](https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf) found that ~95% of enterprise GenAI pilots produced no measurable P&L impact — and that the failure was driven by approach, not model quality: the successful 5% embedded AI deeply into specific workflows instead of running generic tools alongside them. Define success criteria and the production path on day one.
- **Tool sprawl.** Five overlapping AI subscriptions and no policy. Consolidate early.
- **Ignoring the middle layer.** Executives are enthusiastic, juniors experiment, but team leads — who control workflows — are skipped in training. They make or break adoption.
- **Automating a broken process.** AI amplifies the process it's put into. Fix or simplify the workflow first, then apply AI.
- **Underestimating review.** AI output needs human verification proportional to stakes. Budget for it; design the checking step into the workflow.
- **One-and-done training.** Capability changes quarterly. Fluency is a program, not an event.

## What Good Looks Like After Six Months

- Majority of knowledge workers use the sanctioned assistant weekly, with measured time savings on specific tasks.
- Two or three quick wins are in production with before/after numbers leadership can quote.
- One integration project (knowledge base or document pipeline) is live or in build.
- A use-case backlog exists, scored and prioritized; someone owns it.
- You know your maturity score, and you know which dimension you're deliberately improving next quarter.

> **Where to go next:** ground every initiative in the six questions of [Team-First AI](/articles/team-first-ai), then see [The AI Architect's Perspective](/articles/ai-architect-perspective) on how to structure ownership and architecture decisions, and [AI Across Business Functions](/articles/ai-in-business-functions) for a function-by-function use-case map.
