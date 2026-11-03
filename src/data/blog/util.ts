// Blog helpers with NO article data. The browser bundle imports only this file (never index.ts), so no
// article text ships in shared JavaScript: each page carries its own data, and middleware.js hides pages
// whose publish time hasn't come yet.
import type { Block, BlogPost } from "./types.ts";

export type { Block, BlogPost, BlogCategory } from "./types.ts";

/** Every post goes live at 08:00 IST on its `published` date. */
export const PUBLISH_TIME = "08:00:00+05:30";
export const publishInstant = (date: string) => Date.parse(`${date}T${PUBLISH_TIME}`);

/** What a list or card needs: no body text. */
export type PostCard = Pick<BlogPost, "slug" | "category" | "title" | "script" | "excerpt" | "published" | "updated" | "hero"> & { minutes: number };

export const postPath = (slug: string) => `/blog/${slug}/`;

const strip = (s: string) => s.replace(/\*\*|\[|\]\([^)]*\)/g, "");
const blockText = (b: Block): string => {
  switch (b.t) {
    case "p":
    case "h2":
    case "h3":
      return b.text;
    case "ul":
    case "ol":
      return b.items.join(" ");
    case "table":
      return [...b.head, ...b.rows.flat()].join(" ");
    case "callout":
      return `${b.title} ${b.text}`;
    case "checklist":
      return `${b.title} ${b.items.join(" ")}`;
    case "template":
      return `${b.subject} ${b.body}`;
    default:
      return "";
  }
};

/** Words in the visible article (answer, takeaways, body, FAQ). */
export const wordCount = (p: BlogPost) =>
  strip([p.answer, ...p.takeaways, ...p.body.map(blockText), ...p.faqs.flatMap((f) => [f.q, f.a])].join(" "))
    .split(/\s+/)
    .filter(Boolean).length;

export const readMinutes = (p: BlogPost) => Math.max(3, Math.round(wordCount(p) / 230));

export const toc = (p: BlogPost) => p.body.filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2").map((b) => ({ id: b.id, text: b.text }));

export const toCard = (p: BlogPost): PostCard => ({
  slug: p.slug,
  category: p.category,
  title: p.title,
  script: p.script,
  excerpt: p.excerpt,
  published: p.published,
  updated: p.updated,
  hero: p.hero,
  minutes: readMinutes(p),
});

/** Data embedded in each blog page's HTML (see scripts/prerender.mjs and src/page.tsx). */
export type BlogIndexData = { cards: PostCard[] };
export type BlogPostData = { post: BlogPost; related: PostCard[] };
export type SiteMapData = { blogCards: PostCard[] };
