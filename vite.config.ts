import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { pages } from "./src/data/pages/index.ts";
import { allPosts } from "./src/data/blog/index.ts";

// The site's public address: canonical links, social cards, structured data and the sitemap all use it.
// When the site moves to its own domain, set SITE_URL on the host (e.g. in Vercel's environment variables).
const SITE_URL = (process.env.SITE_URL ?? "https://mail-pilot-nu.vercel.app").replace(/\/+$/, "");

// Dev server only: which posts `npm run dev` shows. BLOG_NOW=YYYY-MM-DD shows the site as of that day;
// BLOG_PREVIEW=1 shows every scheduled post. Production doesn't use this: middleware.js decides by the clock.
const DEV_DATE = process.env.BLOG_PREVIEW ? "9999-12-31" : (process.env.BLOG_NOW ?? new Date().toISOString().slice(0, 10));

const siteUrl = (): Plugin => ({
  name: "site-url",
  transformIndexHtml: (html) => html.replaceAll("%SITE_URL%", SITE_URL),
});

// ---------- Inner pages ----------
// Every page in src/data/pages gets <slug>/index.html (written here if missing) and a generated <head>.
type Meta = { slug: string; title: string; description: string; keywords: string[] };
const metas: Meta[] = [
  ...pages.map((p) => ({ slug: p.slug, ...p.seo })),
  {
    slug: "blog",
    title: "MailPilot AI Blog | Email Productivity, Follow-Ups & AI Email Guides",
    description:
      "Practical guides on email follow-ups, inbox routines, AI email assistants and email security, with sourced statistics and copy-ready templates. From the MailPilot AI team.",
    keywords: ["MailPilot blog", "email productivity blog", "AI email assistant guides", "email follow up tips"],
  },
  // every post gets a page in advance; middleware.js keeps it hidden until 08:00 IST on its date
  ...allPosts.map((p) => ({ slug: `blog/${p.slug}`, ...p.seo })),
  {
    slug: "sitemap",
    title: "Sitemap | MailPilot AI",
    description: "Every page on the MailPilot AI site: features, solutions, integrations, pricing, security, FAQ and legal pages.",
    keywords: ["MailPilot sitemap"],
  },
];

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const stub = (slug: string) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Generated from src/data/pages by vite.config.ts. Edit the page data, not this file. -->
    %PAGE_HEAD%
  </head>
  <body data-page="${slug}">
    <div id="root"></div>
    <script type="module" src="/src/page.tsx"></script>
  </body>
</html>
`;

const head = (m: Meta) => {
  const url = `%SITE_URL%/${m.slug}/`;
  const t = esc(m.title);
  const d = esc(m.description);
  return `<title>${t}</title>
    <meta name="description" content="${d}" />
    <meta name="keywords" content="${esc(m.keywords.join(", "))}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="author" content="SuperMIA" />
    <meta name="theme-color" content="#071E1F" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="${m.slug.startsWith("blog/") ? "article" : "website"}" />
    <meta property="og:site_name" content="MailPilot AI" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${t}" />
    <meta property="og:description" content="${d}" />
    <meta property="og:image" content="%SITE_URL%/images/og-image.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${t}" />
    <meta name="twitter:description" content="${d}" />
    <meta name="twitter:image" content="%SITE_URL%/images/og-image.jpg" />
    <link rel="icon" href="/favicon.ico" sizes="48x48" />
    <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />`;
};

for (const m of metas) {
  const file = `${m.slug}/index.html`;
  const html = stub(m.slug);
  if (!existsSync(file) || readFileSync(file, "utf8") !== html) {
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, html);
  }
}

const pageHead = (): Plugin => ({
  name: "page-head",
  transformIndexHtml: {
    order: "pre",
    handler(html) {
      const slug = html.match(/<body data-page="([^"]+)"/)?.[1];
      const m = slug ? metas.find((x) => x.slug === slug) : undefined;
      return m ? html.replace("%PAGE_HEAD%", head(m)) : html;
    },
  },
});

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), pageHead(), siteUrl()],
  define: { __BUILD_DATE__: JSON.stringify(DEV_DATE) },
  // bundled into the pre-render build: their Node entry points are CommonJS
  ssr: { noExternal: ["gsap", "@gsap/react", "lucide-react"] },
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          input: {
            main: "index.html",
            privacy: "privacy/index.html",
            terms: "terms/index.html",
            ...Object.fromEntries(metas.map((m) => [`page-${m.slug.replace(/\//g, "-")}`, `${m.slug}/index.html`])),
          },
        },
      },
}));
