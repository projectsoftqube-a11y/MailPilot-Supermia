// Dev server only (npm run dev): builds blog page data on the fly, since there is no pre-render.
// Shows posts live as of today; BLOG_NOW=YYYY-MM-DD or BLOG_PREVIEW=1 (via __BUILD_DATE__) change that.
// Never part of the production bundle: src/page.tsx only imports it behind import.meta.env.DEV.
import { getPost, postsLiveOn, relatedFor, toCard } from "./data/blog";

declare const __BUILD_DATE__: string | undefined;
const asOf = typeof __BUILD_DATE__ === "string" ? __BUILD_DATE__ : new Date().toISOString().slice(0, 10);

export function devPageData(slug: string) {
  const cards = postsLiveOn(asOf).map(toCard);
  if (slug === "sitemap") return { blogCards: cards };
  if (slug === "blog") return { cards };
  const post = getPost(slug.slice("blog/".length));
  return post ? { post, related: relatedFor(post) } : null;
}
