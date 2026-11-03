// Server entry for pre-rendering (see scripts/prerender.mjs). Each page is rendered to static HTML at
// build time, so search engines and link previews get the real content without running JavaScript.
import { renderToString } from "react-dom/server";
import App from "./App";
import { Legal } from "./components/Legal";
import { Page } from "./components/page/Page";
import { SiteMap } from "./components/page/SiteMap";
import { BlogIndex, BlogPostPage } from "./components/blog/Blog";
import type { LegalDoc } from "./data/legal";
import type { BlogPost, PostCard } from "./data/blog/util";

export { faqs, features, links, office } from "./data/content";
export { company, legal } from "./data/legal";
export { pages } from "./data/pages";
export { allPosts, publishDates, postsLiveOn, relatedFor, toCard, wordCount, readMinutes, PUBLISH_TIME } from "./data/blog";

export const renderHome = () => renderToString(<App />);
export const renderLegal = (doc: LegalDoc) => renderToString(<Legal doc={doc} />);
export const renderPage = (slug: string) => renderToString(<Page slug={slug} />);
export const renderSiteMap = (blogCards: PostCard[]) => renderToString(<SiteMap blogCards={blogCards} />);
export const renderBlogIndex = (cards: PostCard[]) => renderToString(<BlogIndex cards={cards} />);
export const renderPost = (post: BlogPost, related: PostCard[]) => renderToString(<BlogPostPage post={post} related={related} />);
