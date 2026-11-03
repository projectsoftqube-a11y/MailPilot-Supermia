import { faqs as homeFaqs } from "../content.ts";
import type { PageDef } from "./types.ts";

const UPDATED = "2026-11-03";

export const howItWorks: PageDef = {
  slug: "how-it-works",
  group: "company",
  nav: { label: "How it works", blurb: "Persona, connect, review, send", icon: "sparkles" },
  seo: {
    title: "How MailPilot AI Works | Set Up an AI Email Assistant in 15 Minutes",
    description:
      "How MailPilot AI works: set up your Persona, connect Gmail or Outlook, let it draft replies and follow-ups, then review and send. Draft and Semi-automatic modes explained.",
    keywords: ["how AI email assistant works", "set up AI email assistant", "AI email automation", "email agent"],
  },
  hero: {
    eyebrow: "How it works",
    title: "Fifteen minutes of setup.",
    script: "Hours back every week.",
    lead: "Tell MailPilot how you write, connect your inbox, and it starts drafting replies, running follow-ups and tracking relationships in the background. You stay the one who presses send.",
    photo: { name: "pg-how-hero", fallback: "seal-hand", alt: "A hand pressing a bronze wax seal onto a cream envelope" },
    visual: "voice",
  },
  sections: [
    {
      type: "answer",
      q: "How does MailPilot AI work?",
      a: "MailPilot AI works in four steps. You set up a Persona describing how you write (10 to 15 minutes), connect Gmail or Outlook (2 to 3 minutes), and MailPilot then drafts replies, schedules follow-ups and tracks relationships automatically. You review each draft and send it from your own address.",
      facts: [
        { k: "Step 1", v: "Set up your Persona" },
        { k: "Step 2", v: "Connect your inbox" },
        { k: "Step 3", v: "MailPilot manages" },
        { k: "Step 4", v: "You review and send" },
      ],
    },
    {
      type: "steps",
      eyebrow: "Four steps",
      title: "From sign-up to",
      script: "first draft.",
      items: [
        { title: "Set up your Persona", eta: "10–15 min · once", text: "Describe how you write or paste a few sample emails. MailPilot learns your formality, greetings, sign-offs and the phrases you always reach for." },
        { title: "Connect your inbox", eta: "2–3 min", text: "Link Gmail or Outlook. MailPilot reads your existing history to build relationship data, with no spreadsheets and no manual CRM entry." },
        { title: "MailPilot manages", eta: "Automatic", text: "It drafts replies as email arrives, schedules personalised follow-ups and flags contacts that are cooling, all in the background." },
        { title: "Review and send", eta: "Your review time", text: "Approve drafts and follow-ups in one click, or edit first. Every email goes from your own address." },
      ],
    },
    {
      type: "split",
      eyebrow: "Behind the scenes",
      title: "What happens when",
      script: "an email lands.",
      body: [
        "MailPilot reads the message and its thread: the questions asked, deadlines, who owns what. It checks your calendar if a time is proposed, and applies any instructions you've left for that thread or contact.",
        "Then it writes the reply against your Persona, places it in your review queue and Gmail drafts, and notifies you it's ready. If nobody replies to something you sent, it drafts the follow-up too.",
      ],
      points: ["Reads the whole thread", "Checks your calendar", "Follows your instructions", "Notifies you when a draft is ready"],
      photo: { name: "pg-how-setup", fallback: "persona-writer", alt: "A person at a desk setting up a new tool on a laptop, notebook beside them" },
      visual: "instructions",
      flip: true,
    },
    {
      type: "compare",
      eyebrow: "Two modes",
      title: "Decide how much",
      script: "it does alone.",
      cols: ["Draft mode", "Semi-automatic mode"],
      rows: [
        { label: "Reply drafts", cells: ["Wait for your approval", "Wait for your approval"] },
        { label: "Follow-ups", cells: ["Wait for your approval", "Send on their own, within limits"] },
        { label: "Instructions per email or contact", cells: ["Yes", "Yes"] },
        { label: "Pause a contact or thread", cells: ["Any time", "Any time"] },
      ],
      note: "Most people start in Draft mode, then move follow-ups to Semi-automatic once they trust the drafts.",
    },
  ],
  faqs: [
    {
      q: "How long does setup take?",
      a: "About 15 minutes in total: 10 to 15 minutes for your Persona, once, and 2 to 3 minutes to connect your inbox.",
    },
    {
      q: "Do I have to change how I use email?",
      a: "No. You keep your inbox. MailPilot works alongside it, and drafts appear in your review queue and your email drafts.",
    },
    {
      q: "Can I change my Persona later?",
      a: "Yes. Fine-tune your tone, sign-off or default instructions any time in Settings, and set specific instructions for individual contacts.",
    },
  ],
  related: ["features", "features/ai-email-writer", "security", "pricing"],
  updated: UPDATED,
};

export const pricing: PageDef = {
  slug: "pricing",
  group: "company",
  nav: { label: "Pricing", blurb: "200 credits a month, free to start", icon: "coins" },
  seo: {
    title: "MailPilot AI Pricing | Free Starter Credits, No Credit Card",
    description:
      "MailPilot AI pricing: 200 credits per month through the SuperMIA Agent Marketplace. New accounts get free starter credits with no credit card. Team pricing on request.",
    keywords: ["MailPilot pricing", "MailPilot AI cost", "AI email assistant pricing", "free AI email assistant"],
  },
  hero: {
    eyebrow: "Pricing",
    title: "Start free.",
    script: "Stay simple.",
    lead: "MailPilot runs on SuperMIA credits: 200 a month. New accounts get free starter credits, so you can try it on your real inbox without a credit card.",
    photo: { name: "pg-pricing-hero", fallback: "letter-sealed", alt: "A cream envelope with a bronze postage stamp on a dark teal desk" },
    chip: { icon: "coins", label: "MailPilot", value: "200 credits / month" },
  },
  sections: [
    {
      type: "answer",
      q: "How much does MailPilot AI cost?",
      a: "MailPilot AI uses 200 credits per month through the SuperMIA Agent Marketplace. Every new SuperMIA account receives free starter credits, so you can start without a credit card. Team and volume pricing is available on request.",
      facts: [
        { k: "Monthly", v: "200 credits" },
        { k: "To start", v: "Free starter credits" },
        { k: "Card needed", v: "No" },
        { k: "Teams", v: "Volume pricing on request" },
      ],
    },
    {
      type: "cards",
      eyebrow: "What's included",
      title: "Every feature,",
      script: "one plan.",
      lead: "No feature tiers. Your credits cover everything MailPilot does.",
      items: [
        { icon: "pen", title: "Replies in your voice", text: "Persona setup and reply drafting for every incoming email." },
        { icon: "repeat", title: "Automated follow-ups", text: "Draft or Semi-automatic mode, with per-contact limits." },
        { icon: "users", title: "Relationship intelligence", text: "Profiles and scores for every contact." },
        { icon: "chart", title: "Inbox analytics", text: "Response times, reply rates and the unanswered backlog." },
        { icon: "sun", title: "Morning briefing", text: "Urgent items, deadlines, tasks and meetings, daily." },
        { icon: "calendar", title: "Calendar-aware drafting", text: "Clashes caught before you reply, meeting context on tap." },
      ],
    },
    {
      type: "steps",
      eyebrow: "Getting started",
      title: "Free credits to",
      script: "first sent reply.",
      items: [
        { title: "Create your account", text: "Sign up and your free starter credits are added. No credit card." },
        { title: "Set up and connect", text: "About 15 minutes for your Persona and inbox." },
        { title: "Use it on real email", text: "See the drafts, follow-ups and briefing on your own inbox." },
        { title: "Continue at 200 credits / month", text: "Subscriptions bill monthly and renew until you cancel." },
      ],
    },
  ],
  faqs: [
    {
      q: "Is MailPilot free?",
      a: "You can start free. New SuperMIA accounts get free starter credits with no credit card. After that, MailPilot uses 200 credits per month.",
    },
    {
      q: "What is a SuperMIA credit?",
      a: "Credits are the currency of the SuperMIA Agent Marketplace, where MailPilot is one of the AI agents. MailPilot uses 200 of them per month.",
    },
    {
      q: "Can I cancel any time?",
      a: "Subscriptions bill monthly and renew automatically until you cancel. Fees are non-refundable, as set out in the Terms.",
    },
    {
      q: "Do you offer team or volume pricing?",
      a: "Yes. Contact SuperMIA or book a demo for team and volume pricing.",
    },
  ],
  related: ["how-it-works", "features", "solutions/sales", "security"],
  updated: UPDATED,
};

export const security: PageDef = {
  slug: "security",
  group: "company",
  nav: { label: "Security & privacy", blurb: "CASA certified, AES-256", icon: "shield" },
  seo: {
    title: "Is MailPilot AI Safe? Security, Privacy & Gmail Data | MailPilot AI",
    description:
      "How MailPilot AI protects your email: CASA certified, AES-256 encryption, Google API Limited Use, no ads or AI training on Gmail data, tokens deleted within 24 hours.",
    keywords: ["is AI email assistant safe", "MailPilot security", "Gmail data privacy AI", "CASA certified email app"],
  },
  hero: {
    eyebrow: "Security & privacy",
    title: "The keys to your inbox,",
    script: "kept safe.",
    lead: "Handing an AI your email is a big decision. Here is exactly what MailPilot accesses, how it's protected, and what we will never do with it.",
    photo: { name: "pg-security-hero", fallback: "letter-sealed", alt: "A heavy bronze wax seal pressed on a cream envelope, close up" },
    chip: { icon: "shield", label: "Independently assessed", value: "CASA certified" },
  },
  sections: [
    {
      type: "answer",
      q: "Is MailPilot AI safe to connect to my email?",
      a: "MailPilot AI has passed CASA, the independent security assessment Google requires for apps that access Gmail. Data is encrypted with AES-256, use of Google data follows Google's Limited Use rules, and your email is never used for advertising or to train general AI models. Nothing sends without your approval.",
      facts: [
        { k: "Assessment", v: "CASA certified" },
        { k: "Encryption", v: "AES-256" },
        { k: "Google data", v: "Limited Use compliant" },
        { k: "Ads / AI training", v: "Never" },
      ],
    },
    {
      type: "cards",
      eyebrow: "Our commitments",
      title: "What we promise,",
      script: "in plain words.",
      items: [
        { icon: "shield", title: "Independently assessed", text: "CASA (Cloud Application Security Assessment) is the review Google requires for Gmail apps." },
        { icon: "lock", title: "Encrypted at rest", text: "Your data is protected with AES-256 encryption, with technical and organisational safeguards." },
        { icon: "eye", title: "Never for ads", text: "Gmail data is used only for the automation you ask for. Never for advertising." },
        { icon: "sparkles", title: "Never trains general AI", text: "Your email is not used to train generalised AI models." },
        { icon: "layers", title: "Isolated per user", text: "User-scoped data isolation keeps each account's data separate." },
        { icon: "trash", title: "Gone when you leave", text: "Tokens deleted within 24 hours of revoking access; account data within 30 days." },
      ],
      dark: true,
    },
    {
      type: "split",
      eyebrow: "Access, explained",
      title: "Exactly what we",
      script: "ask for.",
      body: [
        "To read and reply to email, MailPilot asks Google for permission to read your mail and to create drafts. To avoid double-booking you, it asks for read-only access to your calendar events and free/busy times. It also reads your basic profile to set up your account.",
        "It does not change your calendar, and it doesn't send anything you haven't approved, unless you turn on Semi-automatic mode for follow-ups.",
      ],
      points: ["Read mail", "Create drafts and send approved email", "Calendar events: read-only", "Basic profile and email address"],
      photo: { name: "pg-security-vault", fallback: "seal-hand", alt: "A locked bronze letterbox set into a stone wall" },
      flip: true,
    },
    {
      type: "compare",
      eyebrow: "Your data, your rules",
      title: "How long we keep",
      script: "what.",
      cols: ["Retention"],
      rows: [
        { label: "Gmail OAuth tokens", cells: ["Deleted within 24 hours of revoking access"] },
        { label: "Account data", cells: ["Deleted within 30 days of account deletion"] },
        { label: "Customer data after termination", cells: ["Generally kept up to 90 days"] },
      ],
      note: "Summaries of the official SuperMIA Privacy Policy and Terms, which are binding. See the full Privacy Policy for details.",
    },
  ],
  faqs: [
    {
      q: "Does MailPilot read all my emails?",
      a: "MailPilot reads your mail so it can understand threads, draft replies and build relationship history. That data is used only for the automation you ask for, never for advertising or to train general AI models.",
    },
    {
      q: "Can MailPilot send emails without my permission?",
      a: "Reply drafts always wait for your approval. Follow-ups only send on their own if you choose Semi-automatic mode, and you can pause any contact or thread.",
    },
    {
      q: "How do I delete my data?",
      a: "Disconnect your inbox or delete your account from Settings. Tokens are deleted within 24 hours of revoking access, and account data within 30 days of deletion.",
    },
    {
      q: "Who is behind MailPilot?",
      a: "MailPilot is an agent on the SuperMIA platform, operated by Botfinity Inc., 2451 W Grapevine Mills Cir #547, Grapevine, Texas.",
    },
  ],
  related: ["integrations/gmail", "how-it-works", "faq", "pricing"],
  updated: UPDATED,
};

export const faqPage: PageDef = {
  slug: "faq",
  group: "company",
  nav: { label: "FAQ", blurb: "Every question, answered", icon: "help" },
  seo: {
    title: "MailPilot AI FAQ | AI Email Assistant Questions Answered",
    description:
      "Answers to common questions about MailPilot AI: how it learns your style, follow-ups, Gmail and Outlook support, security, pricing and how much control you keep.",
    keywords: ["MailPilot FAQ", "AI email assistant questions", "how does AI email assistant work", "MailPilot AI review"],
  },
  hero: {
    eyebrow: "FAQ",
    title: "Questions, answered",
    script: "honestly.",
    lead: "Everything people ask before they hand an AI the keys to their inbox, in one place. Can't find yours? Book a demo and ask us directly.",
    photo: { name: "pg-faq-hero", fallback: "persona-writer", alt: "A stack of handwritten letters tied with twine beside a fountain pen" },
    chip: { icon: "help", label: "Still curious?", value: "Book a demo" },
  },
  sections: [
    {
      type: "answer",
      q: "What is MailPilot AI?",
      a: "MailPilot AI is an AI email assistant by SuperMIA for Gmail and Outlook. It drafts replies in your voice, runs follow-ups when people don't reply, tracks the health of your work relationships and briefs you on your inbox each morning. You review everything, and email sends from your own address.",
      facts: [
        { k: "Made by", v: "SuperMIA (Botfinity Inc.)" },
        { k: "Works with", v: "Gmail and Outlook" },
        { k: "Price", v: "200 credits / month, free to start" },
        { k: "Control", v: "Nothing sends without you" },
      ],
    },
    { type: "faqs", eyebrow: "The basics", title: "Getting", script: "started.", items: homeFaqs.slice(0, 3) },
    { type: "faqs", eyebrow: "Features", title: "What it", script: "does.", items: homeFaqs.slice(3, 5) },
    {
      type: "faqs",
      eyebrow: "Control & platforms",
      title: "You stay",
      script: "in charge.",
      items: [
        ...homeFaqs.slice(5, 7),
        {
          q: "Can I connect more than one inbox?",
          a: "Yes. Connect several inboxes, switch between them, or use the All Inboxes view for one combined dashboard and briefing.",
        },
      ],
    },
    {
      type: "faqs",
      eyebrow: "Security & pricing",
      title: "Safe, and",
      script: "simple.",
      items: [
        homeFaqs[7],
        {
          q: "Is MailPilot safe to connect to Gmail?",
          a: "MailPilot is CASA certified, encrypts data with AES-256 and follows Google's Limited Use rules. Your Gmail data is never used for ads or to train general AI models.",
        },
        {
          q: "What happens to my data if I leave?",
          a: "Gmail tokens are deleted within 24 hours of revoking access, and account data within 30 days of account deletion.",
        },
      ],
    },
  ],
  faqs: [],
  related: ["how-it-works", "security", "pricing", "features"],
  updated: UPDATED,
};
