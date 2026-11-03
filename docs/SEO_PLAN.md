# MailPilot AI: SEO, AEO and GEO plan

## Market snapshot (November 2026)
- **Two camps compete for "AI email assistant":** built-in assistants (Gemini in Gmail, Microsoft 365 Copilot in Outlook) and standalone agents that work across both. In the standalone camp, Fyxer, Superhuman and Shortwave come up most often; Jace, Spark, Lindy and Inbox Zero also rank.
- **Most rankings are vendor-written listicles** ("best AI email assistants 2026"). Answer engines (Google AI Overviews, ChatGPT, Perplexity) cite pages with direct answers, clear facts, comparison tables and FAQ schema.
- **MailPilot's angle:** an *agent* that works before you ask (drafts waiting, follow-ups scheduled), plus things most rivals don't lead with: relationship scores, a morning briefing and calendar-conflict handling. It's priced in SuperMIA credits with a free start.

## Keyword data: a caveat
Semrush was connected but had **no API units**, so the volumes below were not measured. The keywords are chosen from SERP research and search intent. When Semrush units are available, validate volume and difficulty for each primary keyword and adjust titles if a close variant is clearly larger.

## Sitemap and keyword map
One primary keyword per page. No two pages share a primary keyword.

| URL | Primary keyword | Secondary keywords | Intent | Schema |
|---|---|---|---|---|
| `/` | MailPilot AI / AI email assistant | Mail Pilot, AI email assistant for Gmail and Outlook | Brand, commercial | SoftwareApplication, FAQPage, Organization |
| `/features/` | AI email assistant features | AI inbox management, email automation software | Commercial | WebPage, FAQPage, Breadcrumb |
| `/features/ai-email-writer/` | AI email writer | AI email reply generator, AI that writes emails in my style, AI email response generator | Commercial | WebPage (+ Q&A), FAQPage |
| `/features/email-follow-up-automation/` | automated follow up emails | email follow up automation, follow up email after no response, auto follow up Gmail | Commercial | WebPage, FAQPage |
| `/features/relationship-intelligence/` | email relationship tracking | relationship intelligence, CRM alternative for email | Commercial | WebPage, FAQPage |
| `/features/inbox-performance-overview/` | email analytics | email response time tracking, inbox analytics | Commercial | WebPage, FAQPage |
| `/features/ai-email-summary/` | AI email summary | daily email briefing, summarize my emails, inbox summary AI | Commercial | WebPage, FAQPage |
| `/features/ai-calendar-assistant/` | AI scheduling assistant | AI calendar assistant for Gmail, meeting conflict detection | Commercial | WebPage, FAQPage |
| `/solutions/sales/` | AI email assistant for sales | sales email follow up automation, email assistant for SDRs | Commercial | WebPage, FAQPage |
| `/solutions/executives/` | AI email assistant for executives | AI executive assistant email, email assistant for CEOs | Commercial | WebPage, FAQPage |
| `/solutions/consultants/` | AI email assistant for consultants | email management for freelancers, client follow up emails | Commercial | WebPage, FAQPage |
| `/integrations/gmail/` | AI email assistant for Gmail | Gmail AI assistant, AI for Gmail | Commercial | WebPage, FAQPage |
| `/integrations/outlook/` | AI email assistant for Outlook | Outlook AI assistant, Office 365 email automation | Commercial | WebPage, FAQPage |
| `/how-it-works/` | how AI email assistant works | set up AI email assistant, email agent | Informational | WebPage, HowTo, FAQPage |
| `/pricing/` | MailPilot pricing | MailPilot AI cost, free AI email assistant | Transactional | WebPage, FAQPage |
| `/security/` | is AI email assistant safe | Gmail data privacy AI, CASA certified email app | Informational / trust | WebPage, FAQPage |
| `/faq/` | MailPilot FAQ | AI email assistant questions | Informational | FAQPage |
| `/sitemap/` | (navigation) | | Navigation | WebPage |
| `/privacy/`, `/terms/` | (legal) | | Trust | WebPage |

## Blog (published November 2026)
Informational and comparison searches the product pages don't target. Each post links up to the product page it supports.

| URL | Primary keyword | Supports | Type |
|---|---|---|---|
| `/blog/follow-up-email-after-no-response/` | follow up email after no response | Automated follow-ups, Sales | Guide + 7 templates |
| `/blog/best-ai-email-assistants/` | best AI email assistant | Features, Gmail | Comparison (6 tools, sourced prices) |
| `/blog/is-it-safe-to-connect-ai-to-gmail/` | is it safe to connect AI to Gmail | Security, Gmail | Explainer (Google docs cited) |
| `/blog/ai-write-emails-in-your-voice/` | how to make AI write emails like you | AI email writer, How it works | Guide + voice brief template |
| `/blog/email-statistics-time-spent/` | how much time do people spend on email | Executives, Inbox analytics | Statistics roundup (Microsoft, Adobe, McKinsey, Radicati, peer-reviewed study) |
| `/blog/how-to-manage-email-overload/` | how to manage email overload | Morning briefing, Executives | Routine guide |

**Next posts (P1 first):** MailPilot vs Fyxer; MailPilot vs Superhuman; "How to follow up after a meeting" (templates); "Email response time: what's a good average?"; "How to write a professional email reply" (templates); "Gmail filters and labels: the setup that actually works".

## How each page is built for AEO and GEO
1. **Answer first.** Every page opens (right under the hero) with an "in short" card: a question H2 and a 40 to 60 word answer, plus four quick facts. It is marked up as the page's `mainEntity` Question and as `speakable`.
2. **Entity clarity.** "MailPilot AI, the email agent by SuperMIA" appears on every page; Organization (SuperMIA / Botfinity Inc.) and SoftwareApplication nodes share `@id`s across the site, so engines link every page to one product.
3. **Extractable structure.** Question-style headings, short paragraphs, checklists, real HTML comparison tables, and an FAQ on every page (FAQPage schema).
4. **Sourced facts only.** Statistics name their source (Adobe 2019, McKinsey 2012, the SuperMIA product page).
5. **Freshness.** Each page shows "Updated <month year>" and sends `dateModified`; the sitemap carries `lastmod`.
6. **Internal links.** Header menus, footer columns, a "Where to next" block on every page and the HTML sitemap give every page several internal links.

## Technical SEO (all automatic on `npm run build`)
- Static pre-rendered HTML for every page (content visible without JavaScript).
- Unique title, description, keywords, canonical, Open Graph and Twitter tags per page (from `src/data/pages`).
- `sitemap.xml` with `lastmod`, `changefreq`, `priority` and **image entries** for each page's photos.
- `robots.txt` allows all crawlers and names the AI crawlers explicitly (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot and others).
- `llms.txt` (llmstxt.org) summarises the product and lists every page for AI engines.
- An HTML sitemap at `/sitemap/`, linked from the footer.

## Launch checklist
1. Move to the final domain: set `SITE_URL` on the host and redeploy.
2. Submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
3. Test 3 pages in Google's Rich Results Test (FAQPage, HowTo, Breadcrumb).
4. **Confirm Outlook support** with the product team before promoting `/integrations/outlook/` (the current app connects Google only).
5. Generate the 30 images in `IMAGE_PROMPTS.md`.
6. Validate keyword volumes in Semrush once API units are available.

## Phase 2 (recommended next pages)
- **Comparison pages** (high-intent, heavily cited by AI engines): "MailPilot vs Fyxer", "MailPilot vs Superhuman", "MailPilot vs Shortwave", "MailPilot vs Gemini in Gmail", "MailPilot vs Microsoft Copilot". Competitor facts must be checked on their live pricing and feature pages and dated.
- **Guide hub (`/guides/`)**: "Best AI email assistants in 2026", "How to write a follow-up email after no response (with examples)", "How many follow-up emails should you send?", "Is it safe to connect AI to Gmail? CASA explained", "Inbox zero with AI: a practical routine".
- **More use cases:** recruiters, real estate investors, customer success, agencies.
- **Proof:** once there are real customers, add case studies and review schema. Never invent testimonials.
