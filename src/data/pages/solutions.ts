import type { PageDef } from "./types.ts";

const UPDATED = "2026-11-03";

export const sales: PageDef = {
  slug: "solutions/sales",
  group: "solution",
  nav: { label: "For sales teams", blurb: "SDRs, AEs, account managers", icon: "target" },
  seo: {
    title: "AI Email Assistant for Sales Teams | MailPilot AI",
    description:
      "MailPilot AI helps SDRs, AEs and account managers reply faster and never miss a follow-up. Drafts in your voice, follow-ups on schedule, cooling deals flagged early.",
    keywords: ["AI email assistant for sales", "sales email follow up automation", "AI sales email writer", "email assistant for SDRs"],
  },
  hero: {
    eyebrow: "For sales teams",
    title: "Your pipeline lives in your inbox.",
    script: "Keep it warm.",
    lead: "One slow reply and a warm prospect goes cold. MailPilot drafts every reply in your voice, fires follow-ups on schedule and flags the deals that are going quiet, so you spend your hours on calls and demos.",
    photo: { name: "pg-sales-hero", fallback: "crew-sales", alt: "A smiling sales professional on a busy, sunlit sales floor", position: "50% 22%" },
    visual: "followups",
  },
  sections: [
    {
      type: "answer",
      q: "How does an AI email assistant help sales reps?",
      a: "It removes the two biggest leaks in a sales inbox: slow replies and forgotten follow-ups. MailPilot AI drafts replies to prospects in each rep's own voice within seconds, follows up automatically when a prospect goes quiet, and scores every relationship so cooling deals surface before they're lost.",
      facts: [
        { k: "For", v: "SDRs, AEs, AMs, BDs" },
        { k: "Replies", v: "Drafted in seconds, in your voice" },
        { k: "Follow-ups", v: "On schedule, per-contact limits" },
        { k: "Pipeline", v: "Cooling deals flagged early" },
      ],
    },
    {
      type: "cards",
      eyebrow: "What changes",
      title: "More selling,",
      script: "less typing.",
      items: [
        { icon: "clock", title: "Reply while it's warm", text: "A draft is ready before you open the thread, so prospects hear back in minutes, not hours." },
        { icon: "repeat", title: "Every follow-up, on time", text: "Proposals and demos get a personal nudge when they go quiet. No sticky notes, no reminders." },
        { icon: "users", title: "See deals cooling", text: "Relationship scores flag the prospect who stopped replying, with a reason to reach out." },
        { icon: "pen", title: "Still sounds like you", text: "Your Persona keeps every email in your voice, so prospects talk to you, not a template." },
      ],
    },
    {
      type: "split",
      eyebrow: "A rep's day",
      title: "Win back the hours",
      script: "email steals.",
      body: [
        "Start the morning with a briefing of urgent replies and today's calls. Approve the drafts waiting in your queue. Let follow-ups go out on schedule while you're on the phone.",
        "By the afternoon, the inbox is handled and the pipeline is warmer than when you started, because nothing was left waiting.",
      ],
      points: ["Morning briefing of urgent replies", "Draft queue you clear in minutes", "Follow-ups that run in the background"],
      photo: { name: "pg-sales-pipeline", fallback: "sales-call", alt: "A salesperson walking between meetings, glancing at their phone" },
      visual: "voice",
      flip: true,
    },
    {
      type: "stats",
      eyebrow: "The cost of a busy inbox",
      title: "Email is the job",
      script: "behind the job.",
      items: [
        { value: "~3.4 h", label: "a day on work email, as reported by US workers", source: "Adobe Email Usage Study, 2019 (via CIO Dive)" },
        { value: "28%", label: "of the knowledge-worker week goes to reading and answering email", source: "McKinsey Global Institute, 2012" },
        { value: "< 10 s", label: "for MailPilot to have a reply draft ready", source: "SuperMIA MailPilot product page" },
      ],
    },
  ],
  faqs: [
    {
      q: "Can I use MailPilot for mass outreach?",
      a: "No. MailPilot is built for real one-to-one conversations: replying to prospects and following up on proposals, demos and open threads. It isn't a sequencing or mass-outreach tool.",
    },
    {
      q: "Will follow-ups feel automated to prospects?",
      a: "Each follow-up is written from the original thread in your voice and sent in the same conversation, from your own address. Per-contact limits stop it from ever feeling pushy.",
    },
    {
      q: "Do you offer team pricing?",
      a: "Yes. MailPilot uses 200 credits per month per user, and team and volume pricing is available on request. Book a demo to talk it through.",
    },
  ],
  related: ["features/email-follow-up-automation", "features/relationship-intelligence", "features/ai-email-writer", "pricing"],
  updated: UPDATED,
};

export const executives: PageDef = {
  slug: "solutions/executives",
  group: "solution",
  nav: { label: "For executives & founders", blurb: "CEOs, founders, partners", icon: "briefcase" },
  seo: {
    title: "AI Email Assistant for Executives & Founders | MailPilot AI",
    description:
      "An AI executive email assistant: replies drafted before you open the thread, a morning briefing of what matters and follow-ups handled. Built for CEOs and founders.",
    keywords: ["AI email assistant for executives", "AI executive assistant email", "email assistant for CEOs", "founder inbox management"],
  },
  hero: {
    eyebrow: "For executives & founders",
    title: "Your time is the company's",
    script: "most expensive.",
    lead: "The inbox quietly eats about three hours of it a day. MailPilot drafts replies before you open the thread, briefs you each morning on what needs you, and handles the follow-ups, so only what truly matters reaches your desk.",
    photo: { name: "pg-exec-hero", fallback: "crew-exec", alt: "An executive in a corner office at dusk, reviewing a document", position: "50% 22%" },
    chip: { icon: "sun", label: "Today", value: "2 need you · 14 handled" },
  },
  sections: [
    {
      type: "answer",
      q: "Can an AI assistant manage an executive's inbox?",
      a: "Yes, with you in charge. MailPilot AI acts like an executive assistant for email: it reads everything, drafts replies in your voice, sends a morning briefing of urgent items, deadlines and meetings, and runs follow-ups. Nothing goes out under your name until you approve it.",
      facts: [
        { k: "Briefing", v: "Urgent, deadlines, tasks, meetings" },
        { k: "Drafts", v: "Ready before you open the thread" },
        { k: "Calendar", v: "Clashes caught before you reply" },
        { k: "Control", v: "Nothing sends without you" },
      ],
    },
    {
      type: "split",
      eyebrow: "The ten-minute inbox",
      title: "Read the shortlist,",
      script: "approve, done.",
      body: [
        "Your morning briefing shows the two or three emails that genuinely need you, the deadlines and payments due, and the meetings ahead with their context pulled from email.",
        "Everything else already has a draft waiting. Approve, tweak a line, or hand it back with an instruction. Ten minutes, and the day is yours.",
      ],
      points: ["Morning briefing across every inbox", "Drafts waiting for a glance", "Meeting context before every call"],
      photo: { name: "pg-exec-travel", fallback: "exec-review", alt: "A founder reviewing notes in an airport lounge before a flight" },
    },
    {
      type: "cards",
      eyebrow: "Built for leaders",
      title: "Delegate the inbox,",
      script: "not the judgement.",
      items: [
        { icon: "inbox", title: "Every inbox, one view", text: "Company, board, personal: connect them all and see one briefing with each item tagged." },
        { icon: "calendar", title: "Protects your calendar", text: "Clashing meeting requests pause for your decision, with alternatives drafted." },
        { icon: "users", title: "Relationships kept warm", text: "Investors, partners and key customers flagged before they go cold." },
        { icon: "shield", title: "Private by design", text: "CASA certified, AES-256 encrypted, and never used for ads or AI training." },
      ],
    },
    {
      type: "statement",
      text: "Only what truly needs you",
      script: "rises to the top.",
      photo: { name: "letter-sealed", fallback: "letter-sealed", alt: "A cream envelope sealed with a bronze wax seal on a dark desk" },
    },
  ],
  faqs: [
    {
      q: "Can my assistant and MailPilot work together?",
      a: "Yes. MailPilot prepares the drafts and the briefing; a human assistant can review them too. Many leaders use MailPilot to cut the volume their assistant has to handle.",
    },
    {
      q: "Can I connect more than one inbox?",
      a: "Yes. Connect several inboxes and switch between them, or use the All Inboxes view for one combined briefing.",
    },
    {
      q: "Is my email data safe?",
      a: "MailPilot is CASA certified, encrypts data with AES-256 and follows Google's Limited Use rules. Your email is never used for advertising or to train general AI models.",
    },
  ],
  related: ["features/ai-email-summary", "features/ai-calendar-assistant", "security", "how-it-works"],
  updated: UPDATED,
};

export const consultants: PageDef = {
  slug: "solutions/consultants",
  group: "solution",
  nav: { label: "For consultants & agencies", blurb: "Freelancers and client services", icon: "users" },
  seo: {
    title: "AI Email Assistant for Consultants & Freelancers | MailPilot AI",
    description:
      "Keep every client relationship warm. MailPilot AI drafts polished client replies in your voice, follows up on proposals and scores every client relationship automatically.",
    keywords: ["AI email assistant for consultants", "email management for freelancers", "client follow up emails", "AI assistant for agencies"],
  },
  hero: {
    eyebrow: "For consultants & agencies",
    title: "Client relationships",
    script: "are the business.",
    lead: "Neglect a high-value client by accident and the next project goes elsewhere. MailPilot tracks and scores every client relationship, drafts polished replies in your voice and makes sure no proposal goes unanswered.",
    photo: { name: "pg-consult-hero", fallback: "crew-consult", alt: "A consultant holding a coffee mug in a sunlit home studio", position: "50% 22%" },
    visual: "relationships",
  },
  sections: [
    {
      type: "answer",
      q: "How can consultants manage client email with AI?",
      a: "MailPilot AI gives consultants and agencies a client-relationship layer inside their inbox. It drafts professional replies in your voice, follows up on proposals that go quiet, and scores every client relationship from your email history, so no client is neglected while you're heads-down on delivery.",
      facts: [
        { k: "For", v: "Consultants, freelancers, agencies" },
        { k: "Clients", v: "Every relationship tracked and scored" },
        { k: "Proposals", v: "Followed up automatically" },
        { k: "Tone", v: "Polished, and still yours" },
      ],
    },
    {
      type: "cards",
      eyebrow: "What you get",
      title: "Deliver the work.",
      script: "We'll mind the inbox.",
      items: [
        { icon: "users", title: "Every client, scored", text: "See which clients you haven't spoken to in a while, before they notice." },
        { icon: "repeat", title: "Proposals followed up", text: "A sent proposal with no reply gets a timely, personal nudge from you." },
        { icon: "pen", title: "Polished client drafts", text: "Clear, professional replies in your voice, ready while you're on a client call." },
        { icon: "note", title: "Client-specific rules", text: "\"Copy the project lead\", \"always formal\": set it once per client." },
      ],
    },
    {
      type: "split",
      eyebrow: "Heads-down weeks",
      title: "Busy delivering?",
      script: "Still responsive.",
      body: [
        "The weeks you're deepest in a project are the weeks other clients drift. MailPilot keeps replies flowing and flags anyone who's gone quiet, so your pipeline survives your busiest month.",
        "When you surface, the AI thread summary tells you where each conversation stands: the core issue, what was discussed and the next action.",
      ],
      points: ["AI summary of every thread", "Cooling clients flagged", "Replies drafted while you deliver"],
      photo: { name: "pg-consult-client", fallback: "client-coffee", alt: "A consultant presenting notes to a client across a café table" },
      flip: true,
    },
  ],
  faqs: [
    {
      q: "Is MailPilot worth it for a solo consultant?",
      a: "If client email takes more than 90 minutes of your day or follow-ups slip when you're busy, yes. You can start with free credits and no credit card to see the difference.",
    },
    {
      q: "Can I give different clients different tones?",
      a: "Yes. Each contact can have its own instructions and reply format, on top of your default Persona.",
    },
    {
      q: "Does it work for agencies with several team members?",
      a: "Each person connects their own inbox and Persona. Team and volume pricing is available on request.",
    },
  ],
  related: ["features/relationship-intelligence", "features/email-follow-up-automation", "features/ai-email-writer", "pricing"],
  updated: UPDATED,
};

export const gmail: PageDef = {
  slug: "integrations/gmail",
  group: "integration",
  nav: { label: "MailPilot for Gmail", blurb: "Gmail and Google Workspace", icon: "mail" },
  seo: {
    title: "AI Email Assistant for Gmail & Google Workspace | MailPilot AI",
    description:
      "Add an AI email assistant to Gmail. MailPilot AI drafts replies in your voice, runs follow-ups and briefs you daily, for personal Gmail and Google Workspace. CASA certified.",
    keywords: ["AI email assistant for Gmail", "Gmail AI assistant", "AI for Gmail", "Gmail auto reply AI"],
  },
  hero: {
    eyebrow: "Gmail & Google Workspace",
    title: "The AI email assistant",
    script: "Gmail deserves.",
    lead: "Connect Gmail in a couple of minutes. MailPilot reads your history to learn your relationships, drafts replies into your Gmail drafts and sends from your own address once you approve. Google Calendar comes along for scheduling.",
    photo: { name: "pg-gmail-hero", fallback: "hero-desk", alt: "A bright home office desk with a laptop and an open notebook" },
    chip: { icon: "shield", label: "Google sign-in", value: "CASA certified" },
  },
  sections: [
    {
      type: "answer",
      q: "How do I add an AI assistant to Gmail?",
      a: "Sign in to MailPilot AI, choose \"Sign in with Google\" and approve access. MailPilot then reads new mail, drafts replies in your voice into your Gmail drafts, and follows up when people don't reply. It works with personal Gmail and Google Workspace accounts and never sends without your approval.",
      facts: [
        { k: "Accounts", v: "Gmail and Google Workspace" },
        { k: "Connect", v: "2 to 3 minutes, Google sign-in" },
        { k: "Calendar", v: "Google Calendar, read-only" },
        { k: "Security", v: "CASA certified, Limited Use" },
      ],
    },
    {
      type: "steps",
      eyebrow: "Connect Gmail",
      title: "Three steps,",
      script: "then it works.",
      items: [
        { title: "Sign in with Google", eta: "1 min", text: "Approve read access to your mail, permission to create drafts, and read-only calendar access." },
        { title: "Set up your Persona", eta: "10–15 min", text: "Display name, sign-off and how you like to write, or pick a preset to start." },
        { title: "Launch the agent", eta: "1 click", text: "MailPilot starts reading new mail and preparing drafts for your review." },
      ],
    },
    {
      type: "split",
      eyebrow: "Permissions, plainly",
      title: "What MailPilot asks Gmail for,",
      script: "and why.",
      body: [
        "Reading your mail lets MailPilot understand each thread and build your relationship history. Compose access lets it place drafts in your Gmail and send the ones you approve. Calendar access is read-only, to spot meeting clashes.",
        "Your Gmail data is used only for the automation you ask for. It is never used for advertising or to train general AI models, and your access tokens are deleted within 24 hours if you disconnect.",
      ],
      points: ["Read mail: to understand threads", "Compose: drafts and approved sends", "Calendar: read-only, for clashes"],
      photo: { name: "pg-gmail-workspace", fallback: "notes-instructions", alt: "A shared workspace table with laptops and notebooks in soft daylight" },
    },
    {
      type: "compare",
      eyebrow: "Gemini in Gmail vs MailPilot",
      title: "Writing help vs",
      script: "an agent that acts.",
      cols: ["Gmail's built-in AI", "MailPilot AI"],
      rows: [
        { label: "Drafts without being asked", cells: ["No", "Yes, as email arrives"] },
        { label: "Learns your personal style", cells: ["Limited", "Your Persona"] },
        { label: "Automated follow-ups", cells: ["Nudges only", "Drafted for you"] },
        { label: "Relationship scores", cells: ["No", "Yes"] },
        { label: "Daily inbox briefing", cells: ["No", "Yes"] },
      ],
      note: "You can use both: MailPilot works alongside Gmail's own features.",
    },
  ],
  faqs: [
    {
      q: "Does MailPilot work with Google Workspace?",
      a: "Yes. MailPilot supports both personal Gmail and Google Workspace accounts, connected with Google sign-in.",
    },
    {
      q: "Is a Chrome extension required?",
      a: "No. MailPilot connects to your Gmail account directly, so there's nothing to install in your browser. You review drafts in the MailPilot app or in your Gmail drafts.",
    },
    {
      q: "Can I disconnect Gmail later?",
      a: "Yes, any time from Settings. When you revoke access, your Gmail tokens are deleted within 24 hours.",
    },
  ],
  related: ["integrations/outlook", "security", "features/ai-email-writer", "how-it-works"],
  updated: UPDATED,
};

export const outlook: PageDef = {
  slug: "integrations/outlook",
  group: "integration",
  nav: { label: "MailPilot for Outlook", blurb: "Outlook and Office 365", icon: "mail" },
  seo: {
    title: "AI Email Assistant for Outlook & Office 365 | MailPilot AI",
    description:
      "MailPilot AI brings reply drafting in your voice, automated follow-ups and relationship tracking to Outlook, Office 365 and Outlook.com, with two-way sync.",
    keywords: ["AI email assistant for Outlook", "Outlook AI assistant", "AI for Outlook email", "Office 365 email automation"],
  },
  hero: {
    eyebrow: "Outlook & Office 365",
    title: "Outlook, with an agent",
    script: "on your side.",
    lead: "MailPilot works with Outlook, Office 365 and Outlook.com, with two-way sync. Replies drafted in your voice, follow-ups that run themselves and every relationship tracked, all sent from your own address.",
    photo: { name: "pg-outlook-hero", fallback: "exec-review", alt: "A professional working at a laptop in a modern glass office" },
    chip: { icon: "repeat", label: "Two-way sync", value: "Office 365 · Outlook.com" },
  },
  sections: [
    {
      type: "answer",
      q: "Is there an AI email assistant for Outlook?",
      a: "Yes. MailPilot AI supports Outlook, Office 365 and Outlook.com with two-way sync. It drafts replies in your writing style, follows up when people go quiet and scores your relationships, and every email still sends from your own Outlook address after you approve it.",
      facts: [
        { k: "Accounts", v: "Office 365 and Outlook.com" },
        { k: "Sync", v: "Two-way" },
        { k: "Sends from", v: "Your own address" },
        { k: "Control", v: "Draft or Semi-automatic mode" },
      ],
    },
    {
      type: "cards",
      eyebrow: "In Outlook",
      title: "Everything MailPilot does,",
      script: "in Outlook too.",
      items: [
        { icon: "pen", title: "Replies in your voice", text: "Your Persona applies to every Outlook draft." },
        { icon: "repeat", title: "Follow-ups", text: "Quiet threads get a personal nudge, approved by you or sent within limits." },
        { icon: "users", title: "Relationship scores", text: "Built from your Outlook history, with nothing to import." },
        { icon: "chart", title: "Inbox analytics", text: "Response times, reply rates and open threads at a glance." },
      ],
    },
    {
      type: "split",
      eyebrow: "Copilot and MailPilot",
      title: "Writing help is good.",
      script: "An agent is better.",
      body: [
        "Microsoft 365 Copilot helps when you ask it to. MailPilot works before you ask: the draft is waiting when you open the thread, and the follow-up is scheduled before you'd have remembered.",
        "Not sure your environment is supported? Book a demo and we'll confirm it with you before you start.",
      ],
      points: ["Drafts waiting, not on request", "Follow-ups that run themselves, within your limits", "Confirmed for your setup in a demo"],
      photo: { name: "pg-outlook-office", fallback: "seal-hand", alt: "A corporate office corridor in late afternoon light" },
      flip: true,
    },
  ],
  faqs: [
    {
      q: "Does MailPilot work with Outlook.com personal accounts?",
      a: "MailPilot supports Office 365 and Outlook.com. Book a demo to confirm support for your specific environment.",
    },
    {
      q: "Do I need to install an Outlook add-in?",
      a: "MailPilot connects to your mailbox directly with two-way sync, and emails send from your own address.",
    },
    {
      q: "Can I use MailPilot with both Gmail and Outlook?",
      a: "MailPilot supports several connected inboxes, with an All Inboxes view for one combined briefing.",
    },
  ],
  related: ["integrations/gmail", "security", "features/email-follow-up-automation", "pricing"],
  updated: UPDATED,
};
