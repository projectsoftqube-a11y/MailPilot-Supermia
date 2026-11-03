// Registry of every inner page. Add a page here and it gets an HTML entry, a pre-rendered body,
// structured data and a sitemap entry on the next build (see vite.config.ts and scripts/prerender.mjs).
import { calendarAssistant, emailSummary, emailWriter, featuresHub, followUps, inboxAnalytics, relationships } from "./features.ts";
import { consultants, executives, gmail, outlook, sales } from "./solutions.ts";
import { faqPage, howItWorks, pricing, security } from "./company.ts";
import type { PageDef } from "./types.ts";

export type { PageDef, Section, PhotoRef, IconKey, Faq } from "./types.ts";

export const pages: PageDef[] = [
  featuresHub,
  emailWriter,
  followUps,
  relationships,
  inboxAnalytics,
  emailSummary,
  calendarAssistant,
  sales,
  executives,
  consultants,
  gmail,
  outlook,
  howItWorks,
  pricing,
  security,
  faqPage,
];

const bySlug = new Map(pages.map((p) => [p.slug, p]));
export const getPage = (slug: string) => bySlug.get(slug);
export const pagePath = (slug: string) => `/${slug}/`;

const pick = (slugs: string[]) => slugs.map((s) => bySlug.get(s)!).filter(Boolean);

/** Header menus and footer columns: one source, so both always agree. */
export const menus = {
  features: pick([
    "features/ai-email-writer",
    "features/automated-follow-ups",
    "features/relationship-intelligence",
    "features/inbox-analytics",
    "features/ai-email-summary",
    "features/ai-calendar-assistant",
  ]),
  solutions: pick(["use-cases/sales", "use-cases/executives", "use-cases/consultants"]),
  integrations: pick(["integrations/gmail", "integrations/outlook"]),
  company: pick(["how-it-works", "pricing", "security", "faq"]),
};
