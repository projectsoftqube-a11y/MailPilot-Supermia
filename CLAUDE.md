# MailPilot AI marketing site: project brief

Read this before changing anything. It records what the product is, who it is for, the rules for this site and how the multi-page system works.

## Ground rules (from the site owner)

1. **Do not change the home page design.** Not one section, style, animation or layout on `/` (`src/App.tsx` and the section components it renders: Hero, DayStrip, Demo, Folders, Steps, Audience, Control, Brochure, Faq, FinalCta). Copy or link values in `src/data/content.ts` may change; the design may not.
2. **Header and footer are shared.** `src/components/Nav.tsx` and `src/components/Footer.tsx` appear on every page, so they are the only parts of the home page that may change.
3. **Every login and signup button goes to `https://app.mailpilot.supermia.ai/`.** Both values live in `links.signup` and `links.login` in `src/data/content.ts`. Never hard-code another URL.
4. Inner pages must match the home page: same tokens, type, motion (headline splits, reveals, markers, scribbles), same `.shell` container width and the same 3:2 image frame in every image section.
5. No invented numbers, testimonials, customer logos or competitor claims. Every statistic needs a named source (see "Facts we can use").
6. Inner-page heroes stay **compact** (owner feedback): modest headline size, tight padding, small floating card. **No visible breadcrumbs** on any page (breadcrumb JSON-LD stays, invisibly).
7. After the hero, plain sections **alternate backgrounds** (paper / warm paper band, `pg-band--warm`). Dark inset panels sit on their own; two warm bands never touch.

## The product

**MailPilot AI** is an AI email agent sold on the **SuperMIA** platform (supermia.ai), owned by **Botfinity Inc.**, 2451 W Grapevine Mills Cir #547, Grapevine, TX 76051 (hello@supermia.ai, +1 512 733 3085). Softqube Technologies designs and builds the site.

It connects to the user's inbox, then:
- drafts every reply in the user's own voice (their "Persona"),
- runs follow-ups when someone doesn't reply,
- tracks the health of every work relationship,
- and never sends anything without the user's say. Email always goes from the user's own address.

**The problem:** professionals spend about 3.1 hours a day on work email (Adobe Email Usage Study, 2019). Slow replies lose deals, forgotten follow-ups let contacts go cold, and key clients get neglected by accident.

### Who it's for
| Audience | Roles | Pain | What they get |
|---|---|---|---|
| Sales | SDRs, AEs, account managers, BDs | Pipeline lives in the inbox; one slow reply loses a warm lead | Follow-ups on schedule, drafts in their voice, more time for calls |
| Executives & founders | CEOs, founders, partners, directors | Inbox eats ~3 hours of the most expensive time in the company | Replies drafted before they open the thread; only what needs them rises |
| Consultants & freelancers | Consultants, agencies, client services | Client relationships are the business | Every client tracked and scored; polished drafts; proposals that don't slip |
| Anyone | People spending 90+ minutes a day on email | Inconsistent follow-up | Sharper, faster email |

### Official product facts (supermia.ai/ai-mailpilot and the brochure)
- **Persona:** one-time setup, 10 to 15 minutes. Describe your style or paste sample emails. Captures formality, greetings, sign-offs, sentence length, tone and recurring phrases.
- **Connect inbox:** 2 to 3 minutes. Gmail (Google Workspace and personal) and Outlook (Office 365 and Outlook.com), two-way sync.
- **Drafts ready in under 10 seconds** (official page claim).
- **Relationship intelligence:** a profile per contact built from email history (frequency, last interaction, pending follow-ups, notes) and a relationship score from recency, frequency and response rate. No CRM data entry.
- **Automated follow-ups:** if no reply arrives inside your window, a follow-up is drafted from the original thread and your Persona. Approve each one or let them send, with per-contact frequency limits.
- **Inbox Performance Overview:** sent and received volume, average response time, reply rate, unanswered emails and wait time, top contacts, relationship scores, trends.
- **Instructions:** per email or per contact ("keep it under 80 words", "always copy Jon").
- **Modes:** Draft mode (nothing sends without approval) and Semi-automatic mode (follow-ups send on their own; reply drafts still wait). Pause any contact or thread.
- **Pricing:** 200 credits per month through the SuperMIA Agent Marketplace. Free starter credits, no credit card. Team and volume pricing on request.
- **Security:** CASA certified (Google's Cloud Application Security Assessment for Gmail apps), AES-256 encryption, Google API Limited Use compliant, Gmail data never used for ads or to train general AI models, OAuth tokens deleted within 24 hours of revoking access, account data deleted within 30 days, user-scoped data isolation.

### What the app actually does (verified in the portal code, `D:\All Portal\MailPilot-Frontend`)
The web app is at `https://app.mailpilot.supermia.ai/` (React, Redux; backend `mailpilot-backend.supermia.ai`, auth via SuperMIA `prodapi.supermia.ai`).
- **Setup flow:** sign in → connect Google (Gmail read, compose; Calendar events read-only and free/busy) → Persona (display name, sign-off phrase, style instructions with Professional / Friendly / Direct presets) → "Confirm & Launch Agent".
- **Dashboard:** drafts today, sent today, time saved, active personas, response rate; recent activity; performance insights.
- **AI Morning Briefing:** for any date range, sorts the inbox into Urgent alerts, Today's agenda (meetings), Deadlines and payments, Action items (can be marked done) and General updates. Works across all connected inboxes, tagging each item with its inbox.
- **Draft review:** received email next to the AI draft; edit subject and body; Send now. **Calendar conflict handling:** if an email proposes a time that clashes, MailPilot pauses and asks: decline and propose other times, cancel the conflict and accept, or a custom instruction.
- **Personas & Relationships:** every contact with a history timeline, an AI thread summary (core issue, discussed, next action), an "Auto-draft all emails" switch, a reply format (plain text, rich, marketing template) and per-contact instructions.
- **Calendar:** Google Calendar events with filters (today, this week, overlaps), conflict warnings, and "meeting context": it searches Gmail for the thread and agenda behind each meeting.
- **Settings:** display name, sign-off, global default persona, working hours, buffer time, master automation switch, multiple connected inboxes ("All Inboxes" view), delete account.
- **Push notifications** in the browser when drafts are ready.

### Known gaps between marketing and the app (confirm with the product team before promoting harder)
- **Outlook:** promised officially, but the current app only connects Google. The `/integrations/outlook/` page must be confirmed before launch.
- **Relationship score** and **follow-up sequence settings:** promised, but no screen for them in the app yet (the backend may do it).
- **Draft / Semi-automatic modes:** the app shows a per-contact "Auto-draft" switch and a global automation switch instead.
- The app's dashboard shows a fixed "8.2x faster" figure. Never repeat it as a measured result.

## Facts we can use, with sources
| Fact | Source |
|---|---|
| ~3.1 hours a day on work email | Adobe Email Usage Study, 2019 |
| 28% of the knowledge-worker week goes to email | McKinsey Global Institute, "The social economy", 2012 |
| 200 credits / month, free starter credits | SuperMIA MailPilot page |
| Persona setup 10–15 min; inbox connect 2–3 min; drafts < 10 s | SuperMIA MailPilot page |

## How the site is built

- React 19 + TypeScript + Vite, multi-page. GSAP (ScrollTrigger, SplitText, DrawSVG) + Lenis. Plain CSS with tokens in `src/styles/tokens.css`.
- `npm run build` type-checks, builds, then pre-renders every page to static HTML with JSON-LD (`scripts/prerender.mjs`), and writes `sitemap.xml` and `robots.txt`.
- `SITE_URL` (env var, default in `vite.config.ts`) drives canonicals, social cards, schema and the sitemap.

### Inner pages (SEO / AEO / GEO pages)
- **All page content lives in `src/data/pages/`** (`features.ts`, `solutions.ts`, `company.ts`; registry in `index.ts`; types in `types.ts`). Data files are pure TS (no React, no CSS) because `vite.config.ts` imports them.
- **To add a page:** add an entry to one of those files and register it in `index.ts`. On the next `npm run dev` / `npm run build`, `vite.config.ts` writes the page's `index.html` stub automatically and fills its `<head>` (title, description, canonical, Open Graph). Prerender adds the body, breadcrumbs, FAQPage and WebPage schema, and the sitemap entry.
- **Renderer:** `src/page.tsx` (client entry) → `src/components/page/Page.tsx` (hero + sections + FAQ + related links + the home page's FinalCta). Section types: `answer`, `split`, `cards`, `steps`, `compare`, `stats`, `statement`, `faqs`.
- **Images:** every photo slot uses `<Photo name="..." fallbackName="...">`. Drop a file named after the slot into `src/assets/photos/` and it appears; until then the fallback (an existing home photo) shows. All new images are **3:2 (1536×1024 or larger)**. Prompts and slot names: `IMAGE_PROMPTS.md`.
- **SEO plan and keyword map:** `docs/SEO_PLAN.md`.

### Page writing rules (SEO, AEO, GEO)
- One primary keyword per page, in the title, H1, first answer paragraph, one H2 and the meta description. Never target the same primary keyword on two pages.
- Each page opens with an `answer` section: a question H2 and a 40 to 60 word direct answer an AI engine can quote, plus a short facts list.
- Use question-style H2s where natural, short paragraphs, lists and tables. Name the entity often: "MailPilot AI, the email agent by SuperMIA".
- Every page links to 3+ related pages and ends with the FAQ and CTA.
- Plain, human voice. No hype words ("revolutionary", "game-changing", "seamless", "unlock", "supercharge"). Sentence-case labels.

### Blog
- **Posts live in `src/data/blog/`** (`posts-a.ts`, `posts-b.ts`, registry in `index.ts`, types in `types.ts`). Rendered by `src/components/blog/Blog.tsx` (`/blog/` index with topic filter; article pages with a quick answer, five key takeaways, sticky contents list, product sidebar, FAQ, sources and related posts).
- **Body blocks:** `p`, `h2`, `h3`, `ul`, `ol`, `table`, `callout`, `checklist`, `template` (copyable email), `figure`, `bars` (animated chart), `stats`, `cta`. Inline text supports `**bold**` and `[links](/path/)`; external links open in a new tab.
- **Rules for every post:** one primary keyword no product page targets; a 40–70 word answer before the first H2; exactly five takeaways; an early table or checklist; a "common mistakes" section; FAQ from real questions; 6+ internal links with at least 2 to the product page it supports; every statistic linked to its original source in `sources`.
- Schema per post: BlogPosting (with citations, speakable, wordCount) + BreadcrumbList + FAQPage. The index gets Blog + ItemList. All posts go into `sitemap.xml` and `llms.txt` automatically.
- Image slots: `BLOG_IMAGE_PROMPTS.md` (18 images, 3:2).

### Generated files
- The inner-page `index.html` files (`/features/`, `/use-cases/`, `/integrations/`, `/how-it-works/`, `/pricing/`, `/security/`, `/faq/`, `/sitemap/`, `/blog/`) are written by `vite.config.ts` on every dev/build and are gitignored. Never edit them; edit the data in `src/data/`.
- The 30 inner-page photos are in `src/assets/photos/pg-*.jpg` (converted from the owner's PNGs, 1600px max, JPG q82).
- Header: Features ▾, Solutions ▾, How it works, Pricing, Blog, FAQ (Security moved to the footer and the Solutions menu card, at the owner's request).

### Scheduled publishing (6-month calendar)
- Calendar: `docs/BLOG_CALENDAR.md` (26 weekly posts, every Tuesday from 2026-11-10 to 2027-05-04). Posts live in `src/data/blog/scheduled-1.ts` … `scheduled-5.ts`. To add posts, add them with a `published` date (any number, any dates) and deploy once.
- **Every post goes live at 08:00 IST on its `published` date, by the clock, with no rebuild, hook, cron or env variable.** Every post is built in advance. `middleware.js` (Vercel Routing Middleware) runs on each request to `/blog/*`, `/sitemap/`, `/sitemap.xml`, `/llms.txt` and `/_snap/*`:
  - an article whose publish time hasn't come returns 404 (branded `public/404.html`);
  - `/blog/`, `/sitemap/`, `/sitemap.xml` and `/llms.txt` are served from `dist/_snap/<date>/`, the snapshot for the latest publish date that has passed;
  - snapshots of future dates return 404.
- The schedule comes from `dist/_schedule.json` (publish dates + SHA-256 hashes of slugs, so upcoming topics aren't readable). Publish time is `PUBLISH_TIME` in `src/data/blog/util.ts`.
- **No article text in shared JavaScript:** the browser imports only `src/data/blog/util.ts`; each blog page carries its own data in `<script id="page-data">` (written by the pre-render). A future article's text exists only inside its own page, which the middleware blocks. Related posts on an article only include posts published on or before it, so article pages never change and never link to hidden posts.
- Local: `npm run preview` has no middleware, so it shows the snapshot that was current at build time (future article URLs open locally). `npm run dev` shows posts live today; `BLOG_NOW=2027-02-01 npm run dev` or `BLOG_PREVIEW=1 npm run dev` change that. `npm run blog:schedule` lists the schedule.
- `npm run check:blog` (also the first step of `npm run build`) enforces the post rules: answer box length, 5 takeaways, early table/checklist, mistakes section, CTA, FAQ count, 1,100+ words, 6+ internal links with 2+ to the supported page, sources for statistics, banned phrases, unique photos per post, and **no link to a post that publishes later**.
- Comparison posts (Fyxer alternatives 2027-02-02, Superhuman alternatives 2027-03-02, Gemini in Gmail 2027-04-27) quote vendor facts checked in November 2026: re-check about a week before each date.
- Images: 43 of the 52 scheduled-post slots reuse existing site photos (each photo used by one article only); the other 9 were generated and placed. New posts need new image slots or an unused photo; the checker blocks two posts sharing a photo.
