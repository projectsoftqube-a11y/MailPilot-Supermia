// Client entry for every inner page. Each page's index.html sets <body data-page="features/ai-email-writer">.
// Blog and sitemap pages read their data from <script id="page-data"> (written by scripts/prerender.mjs), so
// no article text is bundled into shared JavaScript. In dev there's no pre-render, so it's built on the fly.
import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource-variable/inter";
import "@fontsource/caveat/600.css";
import "@fontsource/caveat/700.css";
import "./styles/tokens.css";
import "./styles/base.css";
import { Page } from "./components/page/Page";
import { SiteMap } from "./components/page/SiteMap";
import { BlogIndex, BlogPostPage } from "./components/blog/Blog";
import type { BlogIndexData, BlogPostData, SiteMapData } from "./data/blog/util";

const slug = document.body.dataset.page ?? "";
const needsData = slug === "sitemap" || slug === "blog" || slug.startsWith("blog/");

async function pageData(): Promise<unknown> {
  const el = document.getElementById("page-data");
  if (el?.textContent) return JSON.parse(el.textContent);
  if (import.meta.env.DEV) return (await import("./dev-blog-data")).devPageData(slug);
  return null;
}

async function view(): Promise<ReactNode> {
  if (!needsData) return <Page slug={slug} />;
  const data = await pageData();
  if (!data) return null;
  if (slug === "sitemap") return <SiteMap blogCards={(data as SiteMapData).blogCards} />;
  if (slug === "blog") return <BlogIndex cards={(data as BlogIndexData).cards} />;
  const d = data as BlogPostData;
  return <BlogPostPage post={d.post} related={d.related} />;
}

view().then((v) => createRoot(document.getElementById("root")!).render(<StrictMode>{v}</StrictMode>));
