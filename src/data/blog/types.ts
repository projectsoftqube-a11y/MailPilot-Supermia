// Blog content model. Pure data (no React, no CSS), so vite.config.ts and the pre-render can read it.
// Inline text supports **bold** and [links](/path/ or https://...). External links open in a new tab.
import type { PhotoRef } from "../pages/types.ts";

export type BlogCategory = "Guides" | "Comparisons" | "Security" | "Research" | "Productivity";

export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; id: string; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "table"; caption?: string; head: string[]; rows: string[][]; note?: string }
  | { t: "callout"; tone: "tip" | "warn" | "note"; title: string; text: string }
  | { t: "checklist"; title: string; items: string[] }
  | { t: "template"; label: string; subject: string; body: string; when?: string }
  | { t: "figure"; photo: PhotoRef; caption: string }
  | { t: "bars"; title: string; unit?: string; items: { label: string; value: number; display: string }[]; source: string }
  | { t: "stats"; items: { value: string; label: string; source: string }[] }
  | { t: "cta"; title: string; text: string; href: string; label: string };

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  title: string;
  /** Hand-lettered end of the H1, as on every other page */
  script?: string;
  seo: { title: string; description: string; keywords: string[] };
  /** Primary keyword: used once in the H1 area, in the first 120 words and once more at most */
  keyword: string;
  excerpt: string;
  published: string;
  updated: string;
  author: string;
  hero: PhotoRef;
  /** 40 to 70 word snippet answer, shown before the first H2 */
  answer: string;
  /** Exactly five */
  takeaways: string[];
  body: Block[];
  faqs: { q: string; a: string }[];
  sources: { label: string; url: string }[];
  /** Product pages this post supports (linked from the sidebar card) */
  supports: string[];
  related: string[];
};
