// Inner-page content model. Pure data (no React, no CSS): vite.config.ts imports the registry to write each
// page's <head>, and scripts/prerender.mjs reads it for structured data and the sitemap.
import type { FeatureVisual } from "../content.ts";

export type IconKey =
  | "pen"
  | "repeat"
  | "users"
  | "chart"
  | "sun"
  | "calendar"
  | "shield"
  | "lock"
  | "mail"
  | "send"
  | "clock"
  | "bell"
  | "sparkles"
  | "target"
  | "briefcase"
  | "eye"
  | "pause"
  | "note"
  | "inbox"
  | "trash"
  | "check"
  | "layers"
  | "coins"
  | "help";

/** A photo slot. `name` is the file to generate (see IMAGE_PROMPTS.md); `fallback` is an existing photo. */
export type PhotoRef = { name: string; fallback: string; alt: string; position?: string };

type Head = { eyebrow: string; title: string; script?: string; lead?: string };

export type Section =
  | { type: "answer"; id?: string; q: string; a: string; facts: { k: string; v: string }[] }
  | (Head & { type: "split"; id?: string; body: string[]; points?: string[]; photo: PhotoRef; visual?: FeatureVisual; flip?: boolean; caption?: string })
  | (Head & { type: "cards"; id?: string; items: { icon: IconKey; title: string; text: string }[]; dark?: boolean })
  | (Head & { type: "steps"; id?: string; items: { title: string; eta?: string; text: string }[] })
  | (Head & { type: "compare"; id?: string; cols: string[]; rows: { label: string; cells: string[] }[]; note?: string })
  | (Head & { type: "stats"; id?: string; items: { value: string; label: string; source: string }[] })
  | { type: "statement"; id?: string; text: string; script: string; photo: PhotoRef }
  | (Head & { type: "faqs"; id?: string; items: Faq[] });

export type Faq = { q: string; a: string };

export type PageGroup = "feature" | "solution" | "integration" | "company";

export type PageDef = {
  /** URL path without slashes at the ends, e.g. "features/ai-email-writer" */
  slug: string;
  group: PageGroup;
  /** How the page appears in menus and related-link cards */
  nav: { label: string; blurb: string; icon: IconKey };
  seo: { title: string; description: string; keywords: string[] };
  /** Breadcrumb parent ("features" for feature pages); omitted for top-level pages */
  parent?: string;
  hero: {
    eyebrow: string;
    title: string;
    script: string;
    lead: string;
    photo: PhotoRef;
    /** A live product card floated over the hero photo (reuses the home page's feature visuals) */
    visual?: FeatureVisual;
    /** Small labelled chip floated over the photo when there's no visual */
    chip?: { icon: IconKey; label: string; value: string };
  };
  sections: Section[];
  faqs: Faq[];
  related: string[];
  updated: string;
};
