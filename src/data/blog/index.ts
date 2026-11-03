// Registry of every blog post, published or scheduled. Build-side only: the pre-render, the dev server and the
// scripts read it; the browser bundle never imports this file (it imports ./util.ts).
//
// Scheduling: each post goes live at 08:00 IST on its `published` date. Every post is built in advance;
// middleware.js (Vercel Routing Middleware) checks the time on each request, returns 404 for posts that aren't
// due yet, and serves the blog list, sitemap and llms.txt as of the latest date that has passed.
import { bestAssistants, followUpNoResponse, safeGmail } from "./posts-a.ts";
import { overloadPost, statsPost, voicePost } from "./posts-b.ts";
import { batch1 } from "./scheduled-1.ts";
import { batch2 } from "./scheduled-2.ts";
import { batch3 } from "./scheduled-3.ts";
import { batch4 } from "./scheduled-4.ts";
import { batch5 } from "./scheduled-5.ts";
import { publishInstant, toCard, type BlogPost, type PostCard } from "./util.ts";

export * from "./util.ts";

const newestFirst = (a: BlogPost, b: BlogPost) => (a.published < b.published ? 1 : a.published > b.published ? -1 : a.slug < b.slug ? -1 : 1);

/** Every post, newest first. */
export const allPosts: BlogPost[] = [followUpNoResponse, bestAssistants, safeGmail, voicePost, statsPost, overloadPost, ...batch1, ...batch2, ...batch3, ...batch4, ...batch5].sort(newestFirst);

const bySlug = new Map(allPosts.map((p) => [p.slug, p]));
export const getPost = (slug: string) => bySlug.get(slug);

/** Posts live on a calendar date (any time that day after 08:00 IST counts as that date). */
export const postsLiveOn = (date: string) => allPosts.filter((p) => p.published <= date);

/** Posts live at a moment in time. */
export const postsLiveAt = (ms: number) => allPosts.filter((p) => publishInstant(p.published) <= ms);

/** Distinct publish dates, oldest first: one blog-list "snapshot" is built for each. */
export const publishDates = () => [...new Set(allPosts.map((p) => p.published))].sort();

/**
 * Related posts for an article: only posts published on or before it, so its page never changes as later
 * posts go live and never links to anything still hidden. Uses the post's own picks first, then the newest.
 */
export const relatedFor = (post: BlogPost, count = 3): PostCard[] => {
  const ok = (p?: BlogPost): p is BlogPost => !!p && p.slug !== post.slug && p.published <= post.published;
  const picks = post.related.map(getPost).filter(ok);
  for (const p of allPosts) {
    if (picks.length >= count) break;
    if (ok(p) && !picks.includes(p)) picks.push(p);
  }
  return picks.slice(0, count).map(toCard);
};
