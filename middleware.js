// Vercel Routing Middleware: publishes blog posts by the clock, with no rebuilds, hooks or cron jobs.
//
// Every post is built in advance and each goes live at 08:00 IST on its `published` date. On each request this:
//   • returns 404 for a post whose publish time hasn't come yet (it doesn't exist for visitors or Google);
//   • serves /blog/, /sitemap/, /sitemap.xml and /llms.txt as of the latest publish date that has passed, from the
//     dated snapshots the pre-render writes to /_snap/<date>/;
//   • hides snapshots of dates that haven't come yet.
// The schedule comes from /_schedule.json (publish dates + hashed slugs), cached for a few minutes.
export const config = {
  matcher: ["/blog", "/blog/:path*", "/sitemap", "/sitemap/", "/sitemap.xml", "/llms.txt", "/_snap/:path*"],
};

const CACHE_MS = 5 * 60 * 1000;
let schedule = null;
let fetchedAt = 0;

async function getSchedule(origin) {
  if (schedule && Date.now() - fetchedAt < CACHE_MS) return schedule;
  const res = await fetch(new URL("/_schedule.json", origin));
  if (!res.ok) throw new Error(`schedule ${res.status}`);
  schedule = await res.json();
  fetchedAt = Date.now();
  return schedule;
}

async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// same responses Vercel's helpers produce: rewrite serves another path under the same URL
const rewrite = (url) => new Response(null, { headers: { "x-middleware-rewrite": url.toString() } });
const notFound = (url) => rewrite(new URL("/__not-published__", url)); // no such file: Vercel serves 404.html

const SNAPSHOT_FILES = {
  "/blog": "blog/index.html",
  "/blog/": "blog/index.html",
  "/sitemap": "sitemap/index.html",
  "/sitemap/": "sitemap/index.html",
  "/sitemap.xml": "sitemap.xml",
  "/llms.txt": "llms.txt",
};

export default async function middleware(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  let s;
  try {
    s = await getSchedule(url.origin);
  } catch {
    return; // schedule unavailable: fall back to the static files from the last build
  }
  const isDue = (date) => Date.parse(`${date}T${s.publishTime}`) <= Date.now();

  // dated snapshots: only past dates may be served
  const snap = path.match(/^\/_snap\/(\d{4}-\d{2}-\d{2})\//);
  if (snap) return isDue(snap[1]) ? undefined : notFound(url);

  // an article: hidden until its publish time
  const post = path.match(/^\/blog\/([^/]+)\/?$/);
  if (post) {
    const date = s.posts[await sha256(decodeURIComponent(post[1]))];
    return date && !isDue(date) ? notFound(url) : undefined;
  }

  // blog list, sitemap page, sitemap.xml, llms.txt: the latest snapshot whose date has passed
  const file = SNAPSHOT_FILES[path];
  const current = s.dates.filter(isDue).at(-1);
  if (file && current) return rewrite(new URL(`/_snap/${current}/${file}`, url));
}
