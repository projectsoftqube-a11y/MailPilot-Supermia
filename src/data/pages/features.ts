import type { PageDef } from "./types.ts";

const UPDATED = "2026-11-03";

export const featuresHub: PageDef = {
  slug: "features",
  group: "company",
  nav: { label: "All features", blurb: "Everything MailPilot does, on one page", icon: "layers" },
  seo: {
    title: "MailPilot AI Features | AI Email Assistant for Gmail & Outlook",
    description:
      "Every MailPilot AI feature: replies drafted in your voice, automated follow-ups, relationship intelligence, inbox analytics, a daily AI briefing and calendar-aware drafting.",
    keywords: ["AI email assistant features", "AI inbox management", "email automation software", "AI email assistant"],
  },
  hero: {
    eyebrow: "Features",
    title: "One email agent. Six jobs",
    script: "done for you.",
    lead: "MailPilot AI reads every email, drafts the reply the way you'd write it, chases the follow-ups and watches your relationships. You review. You send. Here is everything it does.",
    photo: { name: "pg-features-hero", fallback: "hero-desk", alt: "A calm, sunlit desk with a sealed letter, a notebook and a laptop", position: "50% 50%" },
    visual: "overview",
  },
  sections: [
    {
      type: "answer",
      q: "What does an AI email assistant like MailPilot actually do?",
      a: "MailPilot AI is an email agent for Gmail and Outlook. It drafts replies in your writing style, schedules follow-ups when people go quiet, scores every work relationship from your email history, and summarises your inbox each morning. Nothing is sent until you approve it.",
      facts: [
        { k: "Works with", v: "Gmail, Google Workspace, Outlook, Office 365" },
        { k: "Setup", v: "About 15 minutes, once" },
        { k: "Control", v: "Every draft waits for your review" },
        { k: "Price", v: "200 credits / month, free to start" },
      ],
    },
    {
      type: "cards",
      eyebrow: "The toolkit",
      title: "Everything your inbox needs,",
      script: "nothing it doesn't.",
      lead: "Each feature has its own page with the detail. Start with the one that hurts most.",
      items: [
        { icon: "pen", title: "AI email writer", text: "Replies drafted in your voice, from your Persona: your greetings, sign-offs and rhythm." },
        { icon: "repeat", title: "Automated follow-ups", text: "No reply inside your window? A personalised follow-up is drafted from the original thread." },
        { icon: "users", title: "Relationship intelligence", text: "A profile and score for every contact, built from your inbox. No CRM to update." },
        { icon: "chart", title: "Inbox analytics", text: "Response time, reply rate, unanswered threads and who is waiting on you." },
        { icon: "sun", title: "AI morning briefing", text: "Urgent emails, deadlines, payments, tasks and meetings, summarised each morning." },
        { icon: "calendar", title: "Calendar-aware replies", text: "Meeting requests checked against your calendar, with conflicts flagged before you reply." },
      ],
    },
    {
      type: "split",
      eyebrow: "How it fits together",
      title: "The features share one brain:",
      script: "your inbox.",
      body: [
        "Most tools bolt AI onto one task. MailPilot reads the whole thread, the people in it and your calendar, so each job knows what the others know.",
        "The follow-up uses your Persona. The relationship score knows which threads went unanswered. The morning briefing knows which meetings have an agenda waiting in Gmail.",
      ],
      points: ["One setup, every feature on", "Your history becomes your context", "You approve anything that leaves"],
      photo: { name: "pg-features-desk", fallback: "seal-hand", alt: "A hand pressing a bronze wax seal onto a cream envelope" },
      visual: "instructions",
    },
    {
      type: "compare",
      eyebrow: "Why not the built-in AI?",
      title: "Built-in writing help vs",
      script: "an email agent.",
      lead: "Gmail and Outlook can help you write one email. MailPilot looks after the whole inbox, before you open it.",
      cols: ["Built-in AI writing help", "MailPilot AI"],
      rows: [
        { label: "Drafts before you open the thread", cells: ["No, you ask each time", "Yes, as email arrives"] },
        { label: "Writes in your personal style", cells: ["Generic tone options", "Your Persona, every time"] },
        { label: "Follows up when nobody replies", cells: ["Reminders at best", "Drafts the follow-up for you"] },
        { label: "Tracks relationship health", cells: ["No", "Score for every contact"] },
        { label: "Daily inbox briefing", cells: ["No", "Urgent, deadlines, tasks, meetings"] },
        { label: "Who sends", cells: ["You", "You, from your own address"] },
      ],
    },
  ],
  faqs: [
    {
      q: "Is MailPilot an email client?",
      a: "No. MailPilot works with the inbox you already use. It connects to Gmail or Outlook, prepares drafts and follow-ups, and sends from your own address once you approve. You keep your inbox, your folders and your habits.",
    },
    {
      q: "Which feature should I start with?",
      a: "Start with your Persona and reply drafting. It takes about 15 minutes to set up and pays off on the first email. Follow-ups, relationship tracking and the morning briefing then run on the same setup.",
    },
    {
      q: "Can I turn individual features off?",
      a: "Yes. You can pause automation for any contact or thread, switch auto-drafting off per contact, and keep follow-ups in Draft mode so nothing sends without you.",
    },
  ],
  related: ["features/ai-email-writer", "features/automated-follow-ups", "how-it-works", "pricing"],
  updated: UPDATED,
};

export const emailWriter: PageDef = {
  slug: "features/ai-email-writer",
  group: "feature",
  parent: "features",
  nav: { label: "AI email writer", blurb: "Replies drafted in your voice", icon: "pen" },
  seo: {
    title: "AI Email Writer That Writes in Your Voice | MailPilot AI",
    description:
      "MailPilot AI is an AI email writer and reply generator that learns your tone, greetings and sign-offs, then drafts every reply in Gmail or Outlook for you to approve.",
    keywords: ["AI email writer", "AI email reply generator", "AI that writes emails in my style", "AI email response generator"],
  },
  hero: {
    eyebrow: "AI email writer",
    title: "Replies that sound like",
    script: "you wrote them.",
    lead: "Set up your Persona once: formality, greetings, sign-offs, sentence rhythm and the phrases you always reach for. MailPilot drafts every reply against it, so reviewing is a glance, not a rewrite.",
    photo: { name: "pg-writer-hero", fallback: "persona-writer", alt: "A woman reading a handwritten letter in an armchair by a window" },
    visual: "voice",
  },
  sections: [
    {
      type: "answer",
      q: "What is an AI email writer?",
      a: "An AI email writer drafts emails and replies for you from the incoming message and its thread. MailPilot AI goes further: it writes against your Persona, a profile of how you write, so each draft answers every question in the email in your own tone, ready for you to approve.",
      facts: [
        { k: "Persona setup", v: "10 to 15 minutes, once" },
        { k: "Draft ready", v: "In under 10 seconds" },
        { k: "Learns from", v: "Your description or sample emails" },
        { k: "Sends", v: "Only when you approve" },
      ],
    },
    {
      type: "split",
      eyebrow: "Your Persona",
      title: "Teach it how you write.",
      script: "Once.",
      body: [
        "Describe your style in plain words, or paste a few emails you're proud of. MailPilot captures your formality, how you open and close, how long your sentences run, and the phrases that are unmistakably yours.",
        "Prefer a starting point? Pick Professional, Friendly or Direct, then adjust. You can fine-tune the tone any time, and set a different approach for specific contacts.",
      ],
      points: ["Formality and warmth", "Greetings and sign-offs", "Sentence length and rhythm", "Your recurring phrases"],
      photo: { name: "pg-writer-samples", fallback: "notes-instructions", alt: "A person reviewing printed sample emails with a pen at a desk" },
      visual: "instructions",
      flip: true,
    },
    {
      type: "cards",
      eyebrow: "What makes a good draft",
      title: "It answers the email,",
      script: "not just the subject line.",
      items: [
        { icon: "target", title: "Every question answered", text: "MailPilot reads the whole thread and picks out each question, deadline and owner, so nothing is skipped." },
        { icon: "note", title: "Your rules, per thread", text: "Leave an instruction like \"keep it under 80 words\" or \"always copy Jon\" and the draft follows it." },
        { icon: "users", title: "Tuned per contact", text: "Set how MailPilot writes to a specific person, from formal to first-name, and pick plain or rich formatting." },
        { icon: "calendar", title: "Calendar-aware", text: "If an email proposes a time that clashes, MailPilot asks how to handle it before it drafts." },
      ],
    },
    {
      type: "steps",
      eyebrow: "From inbox to sent",
      title: "Four moments,",
      script: "one click from you.",
      items: [
        { title: "An email lands", eta: "0 s", text: "MailPilot reads the message and the thread behind it: questions, deadlines and who owns what." },
        { title: "Your Persona kicks in", eta: "Seconds", text: "The reply is written in your tone, with your greeting and sign-off, following any instructions you've left." },
        { title: "The draft waits for you", eta: "< 10 s", text: "It sits in your review queue and your Gmail drafts. You get a notification that it's ready." },
        { title: "You review and send", eta: "Your call", text: "Send as is, edit first or discard. It always goes from your own address." },
      ],
    },
    {
      type: "compare",
      eyebrow: "Compared",
      title: "Generic AI writer vs",
      script: "MailPilot.",
      cols: ["Generic AI email generator", "MailPilot AI"],
      rows: [
        { label: "Where it works", cells: ["Copy and paste into a website", "Inside your Gmail or Outlook"] },
        { label: "Knows the thread", cells: ["Only what you paste", "Full conversation history"] },
        { label: "Sounds like you", cells: ["Generic tone presets", "Your Persona"] },
        { label: "Drafts before you ask", cells: ["No", "Yes, as email arrives"] },
        { label: "Follow-ups", cells: ["No", "Drafted automatically"] },
      ],
    },
  ],
  faqs: [
    {
      q: "How does MailPilot learn my writing style?",
      a: "Through a one-time Persona setup. You describe your style or paste sample emails, and MailPilot captures your formality, greetings, sign-offs, sentence length, tone and recurring phrases. Every draft is written against that Persona, and you can refine it any time.",
    },
    {
      q: "Will people know an AI wrote my email?",
      a: "The draft is written in your style and you review it before it sends, from your own address. Most edits are small. You stay the author: MailPilot just gets you to a good first draft in seconds.",
    },
    {
      q: "Is the AI email reply generator free?",
      a: "New SuperMIA accounts get free starter credits with no credit card, so you can try reply drafting at no cost. After that, MailPilot uses 200 credits a month.",
    },
    {
      q: "Does it send emails automatically?",
      a: "Not replies. Reply drafts always wait for your approval. You can choose to let follow-ups send on their own (Semi-automatic mode), with per-contact limits.",
    },
  ],
  related: ["features/automated-follow-ups", "features/relationship-intelligence", "integrations/gmail", "how-it-works"],
  updated: UPDATED,
};

export const followUps: PageDef = {
  slug: "features/automated-follow-ups",
  group: "feature",
  parent: "features",
  nav: { label: "Automated follow-ups", blurb: "No reply? It drafts the nudge", icon: "repeat" },
  seo: {
    title: "Automated Follow-Up Emails That Sound Like You | MailPilot AI",
    description:
      "Automate follow-up emails in Gmail and Outlook. When nobody replies, MailPilot AI drafts a personalised follow-up from the original thread. Approve it, or let it send.",
    keywords: ["automated follow up emails", "email follow up automation", "automatic follow up emails Gmail", "auto follow up Gmail"],
  },
  hero: {
    eyebrow: "Automated follow-ups",
    title: "Follow-ups that never",
    script: "slip through.",
    lead: "No reply inside your window? MailPilot drafts a follow-up from the original thread and your Persona. Approve each one, or let them go out on their own, with limits per contact so it never feels pushy.",
    photo: { name: "pg-followups-hero", fallback: "sales-call", alt: "A woman checking her phone as she walks down a sunlit city street" },
    visual: "followups",
  },
  sections: [
    {
      type: "answer",
      q: "How do automated follow-up emails work in MailPilot?",
      a: "You set a reply window. If the other person hasn't answered when it closes, MailPilot AI drafts a short, personal follow-up based on the original email and your writing style. In Draft mode you approve each one; in Semi-automatic mode follow-ups send on their own, within per-contact frequency limits.",
      facts: [
        { k: "Trigger", v: "No reply inside your window" },
        { k: "Written from", v: "The original thread + your Persona" },
        { k: "Modes", v: "Draft or Semi-automatic" },
        { k: "Guardrail", v: "Per-contact frequency limits" },
      ],
    },
    {
      type: "statement",
      text: "The deal didn't die. It waited for a follow-up",
      script: "that never came.",
      photo: { name: "pg-followups-phone", fallback: "day-before", alt: "A desk at dusk with an unopened letter beside a phone" },
    },
    {
      type: "cards",
      eyebrow: "Why it works",
      title: "Follow-ups people",
      script: "actually answer.",
      lead: "The best follow-ups are short, personal and sent in the same thread. MailPilot does that by default.",
      items: [
        { icon: "mail", title: "Same thread, same context", text: "Each follow-up replies in the original conversation, so the reader sees what you're following up on." },
        { icon: "pen", title: "Written, not templated", text: "Drafted from what was actually said, in your voice. No \"just bumping this to the top of your inbox\"." },
        { icon: "clock", title: "Sent at the right time", text: "Your window, your working hours. Follow-ups wait until the moment makes sense." },
        { icon: "pause", title: "Stops when they reply", text: "The moment a reply lands, the follow-up is dropped. Pause any contact or thread whenever you like." },
      ],
    },
    {
      type: "compare",
      eyebrow: "Draft or Semi-automatic",
      title: "You choose how much",
      script: "it does alone.",
      cols: ["Draft mode", "Semi-automatic mode"],
      rows: [
        { label: "Reply drafts", cells: ["Wait for your approval", "Wait for your approval"] },
        { label: "Follow-ups", cells: ["Wait for your approval", "Send on their own"] },
        { label: "Frequency limits", cells: ["Per contact", "Per contact"] },
        { label: "Pause a contact or thread", cells: ["Any time", "Any time"] },
        { label: "Best for", cells: ["Senior relationships, new users", "Busy pipelines, steady outreach"] },
      ],
    },
    {
      type: "steps",
      eyebrow: "A follow-up, start to finish",
      title: "Set the window.",
      script: "Forget the reminder.",
      items: [
        { title: "You send an email", text: "A proposal, a question, an intro. MailPilot notes that a reply is expected." },
        { title: "The window closes", text: "No answer inside the time you set. MailPilot reads the thread again." },
        { title: "A follow-up is drafted", text: "Short, specific and in your voice, with one clear next step." },
        { title: "Approve, or it sends", text: "Depending on your mode. Either way, it goes from your own address." },
      ],
    },
  ],
  faqs: [
    {
      q: "How many follow-up emails should I send?",
      a: "Industry guidance usually lands on two to four follow-ups spaced over a couple of weeks, each short and adding something new. MailPilot lets you set per-contact limits so a sequence never turns into pestering.",
    },
    {
      q: "Can follow-ups send without me?",
      a: "Only if you choose Semi-automatic mode. In Draft mode every follow-up waits for your approval. Reply drafts always wait for you in either mode.",
    },
    {
      q: "What happens if they reply in the meantime?",
      a: "The pending follow-up is dropped. MailPilot only follows up on conversations that are still waiting on the other person.",
    },
    {
      q: "Does it work for sales outreach?",
      a: "Yes. Sales teams use it to make sure every proposal and demo gets a timely, personal nudge. It is built for real one-to-one conversations, not bulk cold email blasts.",
    },
  ],
  related: ["use-cases/sales", "features/ai-email-writer", "features/relationship-intelligence", "pricing"],
  updated: UPDATED,
};

export const relationships: PageDef = {
  slug: "features/relationship-intelligence",
  group: "feature",
  parent: "features",
  nav: { label: "Relationship intelligence", blurb: "Know who's going cold", icon: "users" },
  seo: {
    title: "Email Relationship Tracking Without a CRM | MailPilot AI",
    description:
      "MailPilot AI builds a profile and relationship score for every contact from your inbox: history, frequency, last interaction and pending follow-ups. No CRM data entry.",
    keywords: ["email relationship tracking", "relationship intelligence", "CRM alternative for email", "contact relationship score"],
  },
  hero: {
    eyebrow: "Relationship intelligence",
    title: "Know who's going cold",
    script: "before they do.",
    lead: "A profile for every contact, built straight from your inbox: history, frequency, last interaction and a relationship score. No CRM to update, nothing to type in.",
    photo: { name: "pg-relationships-hero", fallback: "client-coffee", alt: "Two people laughing over coffee at a café table" },
    visual: "relationships",
  },
  sections: [
    {
      type: "answer",
      q: "What is email relationship intelligence?",
      a: "Relationship intelligence turns your email history into a living picture of every contact. MailPilot AI tracks how often you talk, when you last spoke, who is waiting on whom and what was discussed, then scores each relationship on recency, frequency and response rate so you can see who is cooling off.",
      facts: [
        { k: "Built from", v: "Your existing email history" },
        { k: "Score uses", v: "Recency, frequency, response rate" },
        { k: "Data entry", v: "None" },
        { k: "Shows", v: "History, summary, next action" },
      ],
    },
    {
      type: "split",
      eyebrow: "Every contact, remembered",
      title: "A memory for",
      script: "every relationship.",
      body: [
        "Open any contact and see the whole story: a timeline of emails, drafts and actions, plus an AI summary of the latest thread with the core issue, what was discussed and the next action.",
        "From there you can tell MailPilot how to treat that person, switch auto-drafting on or off for them, and choose how replies to them are formatted.",
      ],
      points: ["Conversation timeline", "AI thread summary", "Per-contact instructions", "Per-contact automation switch"],
      photo: { name: "pg-relationships-lunch", fallback: "crew-consult", alt: "A consultant smiling while on a call in a bright home studio" },
      flip: true,
    },
    {
      type: "cards",
      eyebrow: "What you see",
      title: "The signals that",
      script: "matter.",
      items: [
        { icon: "clock", title: "Last interaction", text: "Days since you last heard from them, and since you last wrote." },
        { icon: "repeat", title: "Frequency", text: "How often you normally talk, so a quiet spell stands out." },
        { icon: "bell", title: "Pending follow-ups", text: "Threads waiting on them, and threads waiting on you." },
        { icon: "sparkles", title: "Suggested next step", text: "A drafted follow-up or a reason to reach out, ready when you are." },
      ],
    },
    {
      type: "compare",
      eyebrow: "CRM vs MailPilot",
      title: "All of the insight,",
      script: "none of the typing.",
      cols: ["Traditional CRM", "MailPilot AI"],
      rows: [
        { label: "Data entry", cells: ["Manual logging", "Automatic, from your inbox"] },
        { label: "Up to date", cells: ["When someone remembers", "Always"] },
        { label: "Relationship health", cells: ["Rarely tracked", "Scored for every contact"] },
        { label: "Acts on it", cells: ["You do", "Drafts the follow-up for you"] },
        { label: "Setup", cells: ["Weeks", "Connect your inbox in minutes"] },
      ],
      note: "MailPilot isn't a replacement for a full sales CRM. It's the relationship layer your inbox never had.",
    },
  ],
  faqs: [
    {
      q: "How is the relationship score calculated?",
      a: "It's based on recency (how long since you last spoke), frequency (how often you normally talk) and response rate (how reliably you both reply). A falling score flags a contact that is cooling.",
    },
    {
      q: "Do I need to import contacts?",
      a: "No. MailPilot builds every profile from your existing email history when you connect your inbox. There is nothing to import or type in.",
    },
    {
      q: "Can I add instructions for a specific person?",
      a: "Yes. Each contact can have its own instructions, such as \"keep it formal\" or \"mention the renewal date\". They override your default Persona for that person.",
    },
  ],
  related: ["use-cases/consultants", "features/automated-follow-ups", "features/inbox-analytics", "features/ai-email-writer"],
  updated: UPDATED,
};

export const inboxAnalytics: PageDef = {
  slug: "features/inbox-analytics",
  group: "feature",
  parent: "features",
  nav: { label: "Inbox analytics", blurb: "Response times and reply rates", icon: "chart" },
  seo: {
    title: "Email Analytics & Response Time Tracking | MailPilot AI",
    description:
      "See your email response time, reply rate, unanswered threads and relationship trends in one view. MailPilot AI's Inbox Performance Overview for Gmail and Outlook.",
    keywords: ["email analytics", "email response time tracking", "inbox analytics", "email productivity dashboard"],
  },
  hero: {
    eyebrow: "Inbox analytics",
    title: "Your whole inbox,",
    script: "at a glance.",
    lead: "The Inbox Performance Overview shows how fast you reply, who's waiting on you, which threads are still open and how your relationships are trending. One view, no spreadsheets.",
    photo: { name: "pg-analytics-hero", fallback: "exec-review", alt: "A woman reviewing a tablet by an office window at dusk" },
    visual: "overview",
  },
  sections: [
    {
      type: "answer",
      q: "What does MailPilot's Inbox Performance Overview show?",
      a: "It shows sent and received volume, your average response time, reply rate, unanswered emails and how long they've waited, your top contacts, relationship scores and activity trends. The dashboard adds drafts prepared today, emails sent and time saved, for one inbox or all of them together.",
      facts: [
        { k: "Speed", v: "Average response time" },
        { k: "Health", v: "Reply rate and relationship scores" },
        { k: "Backlog", v: "Unanswered emails and wait time" },
        { k: "Scope", v: "One inbox or all inboxes" },
      ],
    },
    {
      type: "cards",
      eyebrow: "The numbers",
      title: "Measure what",
      script: "moves the work.",
      items: [
        { icon: "clock", title: "Response time", text: "How long people wait for you, on average, so you can see when you're slipping." },
        { icon: "send", title: "Sent and received", text: "Volume in and out, to spot the weeks email took over." },
        { icon: "inbox", title: "Unanswered", text: "Every email still waiting on you, with how long it's been." },
        { icon: "users", title: "Top contacts", text: "Who you talk to most, and how each relationship is trending." },
        { icon: "sparkles", title: "Drafts and sends", text: "What MailPilot drafted today and what went out." },
        { icon: "chart", title: "Time saved", text: "An estimate of the writing time MailPilot took off your plate." },
      ],
    },
    {
      type: "split",
      eyebrow: "Why it matters",
      title: "You can't fix a habit",
      script: "you can't see.",
      body: [
        "Most people have no idea how long their replies take, or how many threads quietly die in their inbox. The overview makes it visible, without any setup.",
        "Managers of their own time use it weekly: check the backlog, check the cooling contacts, let MailPilot draft the catch-up, then get back to real work.",
      ],
      points: ["No tracking pixels or setup", "Built from your mailbox", "Across every connected inbox"],
      photo: { name: "pg-analytics-review", fallback: "day-after", alt: "A tidy desk in morning light with a notebook and a cup of coffee" },
    },
  ],
  faqs: [
    {
      q: "Do I need to install tracking to see these numbers?",
      a: "No. The overview is calculated from your connected mailbox. There are no tracking pixels and nothing to install.",
    },
    {
      q: "Can I see all my inboxes together?",
      a: "Yes. If you connect more than one inbox you can view them together in an \"All Inboxes\" view, or switch to any single inbox.",
    },
    {
      q: "What counts as an unanswered email?",
      a: "A conversation where the last message came from someone else and you haven't replied. The overview shows how long each one has been waiting.",
    },
  ],
  related: ["features/relationship-intelligence", "features/ai-email-summary", "use-cases/executives", "features"],
  updated: UPDATED,
};

export const emailSummary: PageDef = {
  slug: "features/ai-email-summary",
  group: "feature",
  parent: "features",
  nav: { label: "AI morning briefing", blurb: "Your inbox, summarised daily", icon: "sun" },
  seo: {
    title: "AI Email Summary & Daily Inbox Briefing | MailPilot AI",
    description:
      "MailPilot AI's morning briefing summarises your inbox into urgent emails, deadlines and payments, action items and today's meetings, across every connected inbox.",
    keywords: ["AI email summary", "daily email briefing", "inbox summary AI", "summarize my emails"],
  },
  hero: {
    eyebrow: "AI morning briefing",
    title: "Your inbox, read for you",
    script: "before coffee.",
    lead: "Each morning MailPilot reads what came in and sorts it into what's urgent, what's due, what you need to do and who you're meeting today. The rest waits quietly at the bottom.",
    photo: { name: "pg-briefing-hero", fallback: "day-after", alt: "Morning light over a desk with a cup of coffee and a folded newspaper-style briefing" },
    chip: { icon: "sun", label: "Morning briefing", value: "3 urgent · 2 due today" },
  },
  sections: [
    {
      type: "answer",
      q: "What is an AI email summary?",
      a: "An AI email summary condenses your inbox into the few things that need you. MailPilot AI's morning briefing groups emails into urgent alerts, deadlines and payments, action items and general updates, and lists today's meetings, for any date range and across all your connected inboxes.",
      facts: [
        { k: "Urgent", v: "Emails that need you now" },
        { k: "Deadlines", v: "Due dates, invoices, payments" },
        { k: "Action items", v: "Tasks you can tick off" },
        { k: "Agenda", v: "Today's meetings, with context" },
      ],
    },
    {
      type: "split",
      eyebrow: "Five piles, sorted for you",
      title: "Start the day with",
      script: "the shortlist.",
      body: [
        "Urgent alerts come first: the client who needs an answer, the issue that can't wait. Then deadlines and payments, the action items buried in long threads, and today's meetings.",
        "Newsletters, notifications and FYIs collect under general updates, so they're there when you want them and out of the way when you don't.",
      ],
      points: ["Urgent alerts", "Deadlines and payments", "Action items you can mark done", "Today's agenda", "General updates, kept aside"],
      photo: { name: "pg-briefing-coffee", fallback: "exec-review", alt: "A professional reading a short printed list over morning coffee" },
      flip: true,
    },
    {
      type: "cards",
      eyebrow: "Built for real mornings",
      title: "Less scrolling,",
      script: "more deciding.",
      items: [
        { icon: "inbox", title: "Every inbox at once", text: "Connect several inboxes and get one briefing, with each item tagged by the inbox it came from." },
        { icon: "calendar", title: "Any date range", text: "Back from a trip? Brief the last three days, or the whole week, in one view." },
        { icon: "check", title: "Tick things off", text: "Mark action items done as you go, so the list reflects what's actually left." },
        { icon: "mail", title: "Open the source", text: "Every item links back to the original email when you need the full story." },
      ],
    },
  ],
  faqs: [
    {
      q: "Can AI summarise my Gmail inbox?",
      a: "Yes. Once you connect Gmail, MailPilot AI reads new mail and produces a briefing that groups it into urgent items, deadlines and payments, action items, meetings and general updates.",
    },
    {
      q: "Does the briefing cover more than one inbox?",
      a: "Yes. With several inboxes connected, the briefing combines them and tags each item with the inbox it came from.",
    },
    {
      q: "Can I brief a past date range?",
      a: "Yes. Pick any range, for example the days you were away, and the briefing covers just that period.",
    },
  ],
  related: ["features/ai-calendar-assistant", "use-cases/executives", "features/inbox-analytics", "features/ai-email-writer"],
  updated: UPDATED,
};

export const calendarAssistant: PageDef = {
  slug: "features/ai-calendar-assistant",
  group: "feature",
  parent: "features",
  nav: { label: "Calendar-aware replies", blurb: "Conflicts caught before you reply", icon: "calendar" },
  seo: {
    title: "AI Scheduling Assistant for Gmail & Google Calendar | MailPilot AI",
    description:
      "MailPilot AI checks meeting requests against your Google Calendar, flags conflicts before it drafts, and pulls the email context behind every meeting on your schedule.",
    keywords: ["AI scheduling assistant", "AI calendar assistant for Gmail", "meeting conflict detection", "AI meeting prep"],
  },
  hero: {
    eyebrow: "Calendar-aware replies",
    title: "It checks your calendar",
    script: "before it says yes.",
    lead: "When an email proposes a time that clashes with your calendar, MailPilot stops and asks how you'd like to handle it. And for every meeting on your schedule, it finds the email thread and agenda behind it.",
    photo: { name: "pg-calendar-hero", fallback: "notes-instructions", alt: "A paper planner open on a desk beside a laptop and a pen" },
    chip: { icon: "calendar", label: "Conflict detected", value: "Thu 2:00 pm overlaps" },
  },
  sections: [
    {
      type: "answer",
      q: "How does MailPilot handle meeting requests?",
      a: "MailPilot AI reads your Google Calendar alongside your email. If someone proposes a time you're already booked, it pauses the draft and asks you to choose: decline and suggest other times, cancel the clash and accept, or give your own instruction. It also finds the email context and agenda for each meeting.",
      facts: [
        { k: "Reads", v: "Google Calendar events and free/busy" },
        { k: "On a clash", v: "Asks before drafting" },
        { k: "Meeting prep", v: "Finds the thread and agenda" },
        { k: "Settings", v: "Working hours and buffer time" },
      ],
    },
    {
      type: "steps",
      eyebrow: "When times collide",
      title: "Three choices,",
      script: "zero double-bookings.",
      items: [
        { title: "Decline and propose", text: "MailPilot drafts a polite decline that offers a few times that actually work for you." },
        { title: "Cancel the clash and accept", text: "If the new meeting matters more, it drafts an acceptance at the original time." },
        { title: "Tell it what to do", text: "Type your own instruction, such as \"suggest next week, mornings only\", and it drafts to that." },
      ],
    },
    {
      type: "split",
      eyebrow: "Meeting context",
      title: "Walk into every meeting",
      script: "already briefed.",
      body: [
        "Open any event and MailPilot searches your Gmail for the conversation behind it: the agenda someone sent, the last thread with the attendees and the background you'll want in mind.",
        "Your calendar view highlights overlapping events, so you can see the clashes in your week at a glance and fix them before they become apologies.",
      ],
      points: ["Agenda pulled from email", "Background from past threads", "Overlaps highlighted", "One click to open in Google Calendar"],
      photo: { name: "pg-calendar-meeting", fallback: "exec-review", alt: "Two colleagues starting a meeting at a sunlit table with notes" },
    },
  ],
  faqs: [
    {
      q: "Does MailPilot book meetings for me?",
      a: "It drafts the scheduling reply, such as an acceptance or a decline with alternative times, and you approve it. It reads your calendar to avoid clashes; it doesn't change your calendar on its own.",
    },
    {
      q: "Which calendars are supported?",
      a: "Google Calendar today, connected through the same Google sign-in as your Gmail. MailPilot asks for read-only access to events and free/busy times.",
    },
    {
      q: "Can I set my working hours?",
      a: "Yes. Set your working hours and a buffer between meetings in Settings, and MailPilot takes them into account.",
    },
  ],
  related: ["features/ai-email-summary", "use-cases/executives", "integrations/gmail", "features/ai-email-writer"],
  updated: UPDATED,
};
