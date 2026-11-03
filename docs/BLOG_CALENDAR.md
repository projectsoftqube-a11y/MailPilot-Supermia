# MailPilot blog calendar: November 2026 to May 2027

**Cadence:** one in-depth article every **Tuesday** (26 articles over 6 months), on top of the 6 launch articles published 3 November 2026.

**Why weekly:** for a new domain, a steady rhythm of genuinely useful 1,500–2,500-word articles builds topical authority faster than daily thin posts, and every article can be properly researched and sourced. Tuesday morning (US) is a strong day for B2B readers and gives Google the whole week to crawl.

**How publishing works:** every article is already written and sits in `src/data/blog/scheduled-*.ts` with its date. **Each one goes live at 08:00 IST on its date, automatically.** Vercel Routing Middleware (`middleware.js`) checks the time on every request: articles that aren't due return 404, and the blog list, sitemap and `llms.txt` switch to the latest published date. There's no rebuild, hook, cron job or environment variable; just deploy once. List the schedule any time with `npm run blog:schedule`; preview every scheduled article locally with `BLOG_PREVIEW=1 npm run dev`.

**Adding more articles:** add them to a `scheduled-*.ts` file with their `published` dates (any number, any dates), run `npm run build` to check them, and deploy. Each appears at 08:00 IST on its date.

## Topic strategy
- **Clusters** feed the product pages: writing (AI email writer), follow-ups and sales, relationships and clients, inbox management and the morning briefing, calendar, Gmail and Outlook, and comparisons.
- **Seasonal timing:** holiday out-of-office in early December, year-end client check-ins, catching up after the holidays, New Year inbox reset, Q1 sales outreach.
- **Competitor gap:** Fyxer, Superhuman and Shortwave blogs mostly fight over "X vs Y" and "alternatives" posts. Everyday email-writing and follow-up searches have high volume and thin, template-only results, so most of the calendar targets those. The three comparison posts are spaced out and re-checked before they publish.
- **Keyword volumes** were not measured (Semrush had no API units); the topics come from SERP and competitor research. Validate in Semrush when units are available.

## Schedule

| # | Publish | Slug (`/blog/…/`) | Primary keyword | Intent | Supports | Image id | Batch |
|---|---|---|---|---|---|---|---|
| 1 | 2026-11-10 | how-to-end-an-email | how to end an email | Info / templates | features/ai-email-writer | `end` | 1 |
| 2 | 2026-11-17 | thank-you-email-after-meeting | thank you email after meeting | Info / templates | features/automated-follow-ups, use-cases/sales | `thanks` | 1 |
| 3 | 2026-11-24 | polite-reminder-email | polite reminder email | Info / templates | features/automated-follow-ups | `reminder` | 1 |
| 4 | 2026-12-01 | out-of-office-message-examples | out of office message examples | Info / seasonal | features/ai-email-summary | `ooo` | 1 |
| 5 | 2026-12-08 | client-check-in-email | client check in email | Info / templates | features/relationship-intelligence, use-cases/consultants | `checkin` | 1 |
| 6 | 2026-12-15 | catch-up-on-email-after-vacation | how to catch up on email after vacation | Info / seasonal | features/ai-email-summary | `catchup` | 1 |
| 7 | 2026-12-22 | email-etiquette-rules | email etiquette rules | Info | features/ai-email-writer | `etiquette` | 2 |
| 8 | 2026-12-29 | inbox-zero-method | inbox zero method | Info / New Year | features/ai-email-summary, how-it-works | `inboxzero` | 2 |
| 9 | 2027-01-05 | how-to-write-a-professional-email | how to write a professional email | Info / templates | features/ai-email-writer | `professional` | 2 |
| 10 | 2027-01-12 | cold-email-follow-up | cold email follow up | Info / sales Q1 | use-cases/sales, features/automated-follow-ups | `cold` | 2 |
| 11 | 2027-01-19 | email-response-time | average email response time | Info / benchmark | features/inbox-analytics | `response` | 2 |
| 12 | 2027-01-26 | decline-meeting-politely | how to decline a meeting politely | Info / templates | features/ai-calendar-assistant | `decline` | 3 |
| 13 | 2027-02-02 | fyxer-alternatives | Fyxer alternatives | Comparison | features, integrations/gmail | `fyxer` | 3 |
| 14 | 2027-02-09 | meeting-request-email | meeting request email | Info / templates | features/ai-calendar-assistant | `meeting` | 3 |
| 15 | 2027-02-16 | gmail-filters-and-labels | Gmail filters and labels | Info / how-to | integrations/gmail | `filters` | 3 |
| 16 | 2027-02-23 | how-to-say-no-professionally | how to say no professionally in an email | Info / templates | features/ai-email-writer | `sayno` | 3 |
| 17 | 2027-03-02 | superhuman-alternatives | Superhuman alternatives | Comparison | features, integrations/gmail | `superhuman` | 4 |
| 18 | 2027-03-09 | how-to-keep-in-touch-with-clients | how to keep in touch with clients | Info | features/relationship-intelligence, use-cases/consultants | `keepintouch` | 4 |
| 19 | 2027-03-16 | how-to-recall-an-email | how to recall an email | Info / how-to | integrations/gmail, integrations/outlook | `recall` | 4 |
| 20 | 2027-03-23 | is-it-ok-to-use-ai-to-write-emails | is it ok to use AI to write emails | Info / opinion | features/ai-email-writer, security | `aiethics` | 4 |
| 21 | 2027-03-30 | executive-inbox-management | executive inbox management | Info | use-cases/executives, features/ai-email-summary | `executive` | 4 |
| 22 | 2027-04-06 | respond-to-angry-client-email | how to respond to an angry client email | Info / templates | features/ai-email-writer, use-cases/consultants | `angry` | 5 |
| 23 | 2027-04-13 | manage-multiple-email-accounts | how to manage multiple email accounts | Info / how-to | integrations/gmail, features/ai-email-summary | `multiple` | 5 |
| 24 | 2027-04-20 | follow-up-email-after-demo | follow up email after demo | Info / sales | use-cases/sales, features/automated-follow-ups | `demo` | 5 |
| 25 | 2027-04-27 | gemini-in-gmail-review | Gemini in Gmail | Comparison / review | integrations/gmail, features | `gemini` | 5 |
| 26 | 2027-05-04 | professional-email-subject-lines | professional email subject lines | Info / templates | features/ai-email-writer | `subject` | 5 |

## Before each comparison post goes live
Posts 13, 17 and 25 quote competitor plans and prices checked in November 2026. About a week before each publish date, re-check the vendor pages and update the post if anything changed (edit the post, set `updated` to the new date and push; the post still publishes on its date).

## Images
Each scheduled article has two image slots: `blog-<id>-hero` and `blog-<id>-1`. Prompts: `BLOG_SCHEDULE_IMAGE_PROMPTS.md`. Until an image arrives, the slot shows an existing site photo.
