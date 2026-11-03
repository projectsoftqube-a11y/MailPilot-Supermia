import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays, Check, Plus, ShieldCheck } from "lucide-react";
import { links, platforms } from "../../data/content";
import { getPage, pagePath, type Faq, type PageDef, type PhotoRef, type Section } from "../../data/pages";
import { gsap, prefersReducedMotion, useGSAP, useHeadlineSplits, useReveals, useSmoothScroll } from "../../lib/motion";
import { FeatureVisualCard } from "../FeatureVisuals";
import { FinalCta } from "../FinalCta";
import { Footer } from "../Footer";
import { Nav } from "../Nav";
import { BtnArrow, Photo, PlatformIcon, Scribble } from "../ui";
import { Icon } from "./icons";
import "../Faq.css";
import "./Page.css";

const monthYear = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });

/** Section headline: plain words, then the handwritten accent with its scribble underline. */
export function Title({ title, script, as: Tag = "h2", className = "h2" }: { title: string; script?: string; as?: "h1" | "h2"; className?: string }) {
  return (
    <Tag className={className} data-split>
      {title}
      {script ? (
        <>
          {" "}
          <span className="scribble-wrap">
            <span className="script">{script}</span>
            <Scribble />
          </span>
        </>
      ) : null}
    </Tag>
  );
}

export function Shot({ photo, className = "", eager }: { photo: PhotoRef; className?: string; eager?: boolean }) {
  return (
    <Photo name={photo.name} fallbackName={photo.fallback} alt={photo.alt} position={photo.position} eager={eager} className={`pg-shot ${className}`}>
      <img className="pg-shot__mark" src="/mailpilot-mark-light.png" alt="" width={391} height={313} />
    </Photo>
  );
}

function Hero({ page }: { page: PageDef }) {
  const h = page.hero;
  return (
    <section className="pg-hero panel-wrap">
      <div className="panel panel--dark grain pg-hero__panel">
        <svg className="pg-hero__postmark" viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <path id="pg-ring" d="M100 100 m-70 0 a70 70 0 1 1 140 0 a70 70 0 1 1 -140 0" />
          </defs>
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="54" />
          <text>
            <textPath href="#pg-ring">MAILPILOT · AI EMAIL AGENT · SUPERMIA · FIRST CLASS ·</textPath>
          </text>
        </svg>
        <div className="shell pg-hero__grid">
          <div className="pg-hero__copy">
            <p className="eyebrow pg-in">{h.eyebrow}</p>
            <Title as="h1" className="pg-hero__title" title={h.title} script={h.script} />
            <p className="pg-hero__lead pg-in">{h.lead}</p>
            <div className="pg-hero__ctas pg-in">
              <a className="btn btn--bronze btn--arrow" href={links.signup}>
                Start free
                <BtnArrow />
              </a>
              <a className="btn btn--ghost" href={links.demo}>
                <CalendarDays size={17} /> Book a demo
              </a>
            </div>
            <ul className="pg-hero__trust pg-in" aria-label="At a glance">
              <li className="pg-hero__icons" aria-label="Works with Gmail and Outlook">
                {platforms.map((p) => (
                  <PlatformIcon key={p.name} name={p.name} size={15} />
                ))}
              </li>
              <li>
                <ShieldCheck size={15} /> CASA certified
              </li>
              <li>Free starter credits</li>
              <li>Updated {monthYear(page.updated)}</li>
            </ul>
          </div>

          <div className="pg-hero__media">
            <div className="pg-hero__frame">
              <Shot photo={h.photo} eager />
            </div>
            {h.visual ? (
              <div className="pg-hero__visual pg-float">
                <FeatureVisualCard kind={h.visual} />
              </div>
            ) : h.chip ? (
              <div className="pg-chip pg-float">
                <span className="pg-chip__icon">
                  <Icon name={h.chip.icon} size={18} />
                </span>
                <span>
                  <em>{h.chip.label}</em>
                  <strong>{h.chip.value}</strong>
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function Answer({ s }: { s: Extract<Section, { type: "answer" }> }) {
  return (
    <section className="section pg-answer" id={s.id}>
      <div className="shell">
        <div className="pg-answer__card" data-reveal>
          <div className="pg-answer__main">
            <p className="pg-answer__label">
              <span className="script">in short</span>
            </p>
            <h2 className="pg-answer__q">{s.q}</h2>
            <p className="pg-answer__a">{s.a}</p>
          </div>
          <dl className="pg-answer__facts">
            {s.facts.map((f) => (
              <div key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Head({ s, center }: { s: { eyebrow: string; title: string; script?: string; lead?: string }; center?: boolean }) {
  return (
    <div className={`section-head ${center ? "section-head--center" : "section-head--split"}`}>
      {center ? (
        <>
          <p className="eyebrow">{s.eyebrow}</p>
          <Title title={s.title} script={s.script} />
          {s.lead ? (
            <p className="lead" data-reveal>
              {s.lead}
            </p>
          ) : null}
        </>
      ) : (
        <>
          <div>
            <p className="eyebrow">{s.eyebrow}</p>
            <Title title={s.title} script={s.script} />
          </div>
          {s.lead ? (
            <p className="lead" data-reveal>
              {s.lead}
            </p>
          ) : null}
        </>
      )}
    </div>
  );
}

function Split({ s }: { s: Extract<Section, { type: "split" }> }) {
  return (
    <section className={`section pg-split ${s.flip ? "pg-split--flip" : ""}`} id={s.id}>
      <div className="shell pg-split__grid">
        <div className="pg-split__media" data-reveal>
          <Shot photo={s.photo} className="pg-parallax" />
          {s.visual ? (
            <div className="pg-split__visual pg-float">
              <FeatureVisualCard kind={s.visual} />
            </div>
          ) : null}
        </div>
        <div className="pg-split__copy">
          <p className="eyebrow">{s.eyebrow}</p>
          <Title title={s.title} script={s.script} />
          {s.body.map((p) => (
            <p className="lead" key={p.slice(0, 24)} data-reveal>
              {p}
            </p>
          ))}
          {s.points ? (
            <ul className="pg-points" data-reveal="stagger">
              {s.points.map((p) => (
                <li key={p}>
                  <span className="pg-points__tick">
                    <Check size={13} strokeWidth={2.6} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function Cards({ s }: { s: Extract<Section, { type: "cards" }> }) {
  const body = (
    <div className="shell">
      <Head s={s} />
      <ul className={`pg-cards__grid ${s.items.length === 4 ? "pg-cards__grid--4" : ""}`} data-reveal="stagger">
        {s.items.map((c) => (
          <li className="pg-card" key={c.title}>
            <span className="pg-card__icon">
              <Icon name={c.icon} />
            </span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  if (!s.dark) {
    return (
      <section className="section pg-cards" id={s.id}>
        {body}
      </section>
    );
  }
  return (
    <section className="pg-cards pg-cards--dark panel-wrap" id={s.id}>
      <div className="panel panel--dark grain section">{body}</div>
    </section>
  );
}

function Steps({ s }: { s: Extract<Section, { type: "steps" }> }) {
  return (
    <section className="section pg-steps" id={s.id}>
      <div className="shell">
        <Head s={s} center />
        <ol className={`pg-steps__list pg-steps__list--${s.items.length}`} data-reveal="stagger">
          {s.items.map((st, i) => (
            <li className="pg-step" key={st.title}>
              <span className="pg-step__num">{String(i + 1).padStart(2, "0")}</span>
              {st.eta ? <span className="chip chip--bronze pg-step__eta">{st.eta}</span> : null}
              <h3>{st.title}</h3>
              <p>{st.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Compare({ s }: { s: Extract<Section, { type: "compare" }> }) {
  const highlight = s.cols.length === 2 && /mailpilot|semi/i.test(s.cols[1]);
  return (
    <section className="section pg-compare" id={s.id}>
      <div className="shell">
        <Head s={s} />
        <div className="pg-compare__card" data-reveal>
          <table className={`pg-table ${highlight ? "pg-table--hl" : ""} pg-table--${s.cols.length}`}>
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">Compared</span>
                </th>
                {s.cols.map((c) => (
                  <th scope="col" key={c}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  {r.cells.map((c, i) => (
                    <td key={i} data-col={s.cols[i]}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {s.note ? <p className="pg-compare__note">{s.note}</p> : null}
        </div>
      </div>
    </section>
  );
}

function Stats({ s }: { s: Extract<Section, { type: "stats" }> }) {
  return (
    <section className="pg-stats panel-wrap" id={s.id}>
      <div className="panel panel--dark grain section">
        <div className="shell">
          <Head s={s} center />
          <ul className="pg-stats__grid" data-reveal="stagger">
            {s.items.map((it) => (
              <li key={it.label}>
                <strong>{it.value}</strong>
                <p>{it.label}</p>
                <cite>{it.source}</cite>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Statement({ s }: { s: Extract<Section, { type: "statement" }> }) {
  return (
    <section className="pg-statement panel-wrap" id={s.id}>
      <div className="panel pg-statement__panel">
        <Shot photo={s.photo} className="pg-statement__bg pg-parallax" />
        <div className="shell pg-statement__inner">
          <Title title={s.text} script={s.script} className="h2 pg-statement__text" />
        </div>
      </div>
    </section>
  );
}

/** `cta` = show the intro line and buttons beside the list (off for the later groups on the FAQ page). */
export function Faqs({ eyebrow, title, script, lead, items, id, cta = true }: { eyebrow: string; title: string; script?: string; lead?: string; items: Faq[]; id: string; cta?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq section pg-faq" id={id}>
      <div className="shell faq__grid">
        <div className="faq__side">
          <p className="eyebrow">{eyebrow}</p>
          <Title title={title} script={script} />
          {cta ? (
            <>
              <p className="lead">{lead ?? "Straight answers to what people ask most about this."}</p>
              <a className="btn btn--arrow" href={links.signup}>
                Start free
                <span className="btn__arrow" aria-hidden="true">
                  <ArrowRight size={17} />
                </span>
              </a>
              <a className="faq__demo" href={links.demo}>
                Still curious? Book a demo →
              </a>
            </>
          ) : null}
        </div>
        <ol className="faq__list" data-reveal="stagger">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <li className={`faq__item ${isOpen ? "is-open" : ""}`} key={f.q}>
                <h3>
                  <button aria-expanded={isOpen} aria-controls={`${id}-a-${i}`} id={`${id}-q-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                    <span className="faq__num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="faq__q">{f.q}</span>
                    <span className="faq__icon">
                      <Plus size={18} />
                    </span>
                  </button>
                </h3>
                <div className="faq__a" id={`${id}-a-${i}`} role="region" aria-labelledby={`${id}-q-${i}`}>
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Related({ slugs }: { slugs: string[] }) {
  const items = slugs.map(getPage).filter((p): p is PageDef => !!p);
  if (!items.length) return null;
  return (
    <section className="section pg-related">
      <div className="shell">
        <div className="section-head section-head--split">
          <div>
            <p className="eyebrow">Keep reading</p>
            <Title title="Where to" script="next." />
          </div>
          <p className="lead" data-reveal>
            Related features and guides, picked for what you're reading now.
          </p>
        </div>
        <ul className="pg-related__grid" data-reveal="stagger">
          {items.map((p) => (
            <li key={p.slug}>
              <a className="pg-related__card" href={pagePath(p.slug)}>
                <span className="pg-card__icon">
                  <Icon name={p.nav.icon} />
                </span>
                <strong>{p.nav.label}</strong>
                <span>{p.nav.blurb}</span>
                <ArrowUpRight className="pg-related__arrow" size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionView({ s, i, firstFaqs }: { s: Section; i: number; firstFaqs: boolean }) {
  switch (s.type) {
    case "answer":
      return <Answer s={s} />;
    case "split":
      return <Split s={s} />;
    case "cards":
      return <Cards s={s} />;
    case "steps":
      return <Steps s={s} />;
    case "compare":
      return <Compare s={s} />;
    case "stats":
      return <Stats s={s} />;
    case "statement":
      return <Statement s={s} />;
    case "faqs":
      return <Faqs id={s.id ?? `faqs-${i}`} eyebrow={s.eyebrow} title={s.title} script={s.script} lead={s.lead} items={s.items} cta={firstFaqs} />;
  }
}

export function Page({ slug }: { slug: string }) {
  const page = getPage(slug);
  const root = useRef<HTMLDivElement>(null);
  useSmoothScroll();
  useReveals();
  useHeadlineSplits(root);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const q = gsap.utils.selector(root);
      // hero entrance: the photo unfolds from the top like a letter, the copy rises in
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(q(".pg-hero__frame"), { clipPath: "inset(0 0 100% 0 round 28px)", duration: 1.5 }, 0.1)
        .from(q(".pg-hero__frame img"), { scale: 1.25, duration: 2 }, 0.1)
        .from(q(".pg-in"), { y: 26, autoAlpha: 0, duration: 1.1, stagger: 0.08 }, 0.25)
        .from(q(".pg-hero__visual, .pg-chip"), { y: 60, autoAlpha: 0, rotate: -3, duration: 1.3 }, 0.7)
        .from(q(".pg-hero__postmark"), { scale: 0.6, autoAlpha: 0, rotate: -60, duration: 1.6 }, 0.4);
      // photos drift gently against the scroll
      q(".pg-parallax img").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -7, scale: 1.14 },
          { yPercent: 7, scale: 1.14, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true } },
        );
      });
      // the step rail draws across as the steps come in
      q(".pg-steps__list").forEach((list) => {
        gsap.from(list, { "--rail": 0, duration: 1.6, ease: "power2.inOut", scrollTrigger: { trigger: list, start: "top 80%", once: true } });
      });
    },
    { scope: root },
  );

  if (!page) return null;

  // Plain sections alternate paper / warm paper so each one reads as its own band. Dark panels sit on their
  // own and restart the rhythm; FAQ blocks are always warm, so the band before the page FAQ stays plain.
  const isPanel = (s: Section) => s.type === "stats" || s.type === "statement" || (s.type === "cards" && !!s.dark);
  let warm = true;
  const tints = page.sections.map((s) => {
    if (isPanel(s)) {
      warm = true;
      return false;
    }
    if (s.type === "faqs") {
      warm = true;
      return true;
    }
    warm = !warm;
    return warm;
  });
  const last = page.sections.length - 1;
  if (page.faqs.length && tints[last] && page.sections[last].type !== "faqs") tints[last] = false;

  return (
    <div ref={root}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav current={page.slug} />
      <main id="main">
        <Hero page={page} />
        {page.sections.map((s, i) => (
          <div className={`pg-band ${tints[i] && s.type !== "faqs" ? "pg-band--warm" : ""}`} key={i}>
            <SectionView s={s} i={i} firstFaqs={i === page.sections.findIndex((x) => x.type === "faqs")} />
          </div>
        ))}
        {page.faqs.length ? <Faqs id="faq" eyebrow="Questions" title="Before you" script="sign off." items={page.faqs} /> : null}
        <Related slugs={page.related} />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
