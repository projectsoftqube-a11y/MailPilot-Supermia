import type { BlogPost } from "./types.ts";

export const followUpNoResponse: BlogPost = {
  slug: "follow-up-email-after-no-response",
  category: "Guides",
  title: "How to write a follow-up email after no response",
  script: "(with 7 templates)",
  seo: {
    title: "Follow-Up Email After No Response: 7 Templates That Get Replies",
    description:
      "How to write a follow-up email after no response: when to send it, what to say, how many to send, and 7 copy-ready templates for proposals, meetings and clients.",
    keywords: ["follow up email after no response", "follow up email template", "how to follow up on an email", "polite follow up email"],
  },
  keyword: "follow-up email after no response",
  excerpt: "When to send it, what to put in it, how many is too many, and seven templates you can copy today.",
  published: "2026-11-03",
  updated: "2026-11-03",
  author: "MailPilot Editorial Team",
  hero: { name: "blog-followup-hero", fallback: "sales-call", alt: "A professional glancing at their phone while walking down a sunlit street" },
  answer:
    "A good follow-up email after no response is short, sent in the same thread, and gives the reader one easy next step. Wait two to three business days for time-sensitive emails and about a week for everything else. Add something new each time, such as a deadline, a useful link or a simpler question, and stop after three or four attempts.",
  takeaways: [
    "Reply in the original thread so the reader sees the context without searching.",
    "Wait 2 to 3 business days for urgent emails and about a week for the rest.",
    "Every follow-up should add something: a deadline, a resource or an easier ask.",
    "Keep it under 100 words, with one clear question the reader can answer in seconds.",
    "Stop after three or four attempts and close the loop politely.",
  ],
  body: [
    {
      t: "table",
      caption: "Quick timing guide",
      head: ["Situation", "First follow-up", "Then"],
      rows: [
        ["Proposal or quote sent", "3 business days", "1 week, then a close-the-loop email"],
        ["Meeting request", "2 business days", "Offer two specific times"],
        ["Client waiting on a decision", "2 business days", "Restate the deadline"],
        ["Introduction or networking", "1 week", "One more after 2 weeks, then stop"],
        ["Invoice or payment", "On the due date", "Every 7 days, more formally"],
      ],
      note: "These are starting points. Match them to how fast the other person usually replies.",
    },
    { t: "h2", id: "why-no-reply", text: "Why didn't they reply?" },
    {
      t: "p",
      text: "Most unanswered emails aren't rejections. The reader opened it on their phone, meant to answer later, and it sank under newer mail. Microsoft's 2025 Work Trend Index found the average worker receives **117 emails a day** and skims most of them in under a minute. Your email didn't fail. It got buried. Our [email statistics roundup](/blog/email-statistics-time-spent/) has more on how crowded inboxes have become.",
    },
    {
      t: "p",
      text: "That changes how you should follow up. You aren't chasing someone who said no. You're making it easy for a busy person to finish something they already meant to do.",
    },
    { t: "h2", id: "when-to-follow-up", text: "How long should you wait before following up?" },
    {
      t: "p",
      text: "Wait two to three business days for anything time-sensitive and about a week for everything else. Sooner feels pushy; much later and the context is gone. If you gave a deadline in your first email, follow up a day or two before it, not after.",
    },
    {
      t: "p",
      text: "Watch the person's normal pace, too. A client who usually answers within hours and has gone quiet for three days is a different signal from a prospect who always takes a week.",
    },
    { t: "h2", id: "how-to-write", text: "How do you write a follow-up email that gets a reply?" },
    { t: "p", text: "Use the same five-part shape every time. It keeps the email short and the ask obvious." },
    {
      t: "ol",
      items: [
        "**Reply in the same thread.** The original message sits right underneath, so you don't need to repeat it.",
        "**Open with the reason, not an apology.** Skip \"sorry to bother you\" and \"just checking in\". Start with what you need.",
        "**Add one new thing.** A deadline, a short summary, a useful link or an answer to a question they might have.",
        "**Ask one easy question.** Yes or no, or a choice between two options, is easiest to answer from a phone.",
        "**Make it skimmable.** Under 100 words, short lines and no attachments they need to open first.",
      ],
    },
    {
      t: "callout",
      tone: "tip",
      title: "The subject line",
      text: "In the same thread, keep the original subject so it groups correctly. If you start a new email, make the subject the action: \"Decision needed by Friday: Q3 proposal\".",
    },
    { t: "h2", id: "templates", text: "7 follow-up email templates you can copy" },
    { t: "p", text: "Swap the brackets for your details. Each one is written to be sent as a reply in the original thread." },
    {
      t: "template",
      label: "1. After sending a proposal",
      when: "3 business days later",
      subject: "Re: Proposal for [project]",
      body: "Hi [Name],\n\nWanted to make sure the proposal reached you before your planning meeting. The one decision that unlocks the timeline is [option A or B].\n\nWould a 15-minute call on Thursday help, or is email easier?\n\nBest,\n[Your name]",
    },
    {
      t: "template",
      label: "2. Meeting request with no answer",
      when: "2 business days later",
      subject: "Re: Quick call about [topic]",
      body: "Hi [Name],\n\nTo make this easy, here are two times that work on my side:\n• Tuesday 10:00 am\n• Wednesday 3:30 pm\n\nReply with 1 or 2 and I'll send the invite.\n\nThanks,\n[Your name]",
    },
    {
      t: "template",
      label: "3. Client decision you're waiting on",
      when: "2 business days later",
      subject: "Re: [Deliverable] approval",
      body: "Hi [Name],\n\nWe're ready to start [next stage] as soon as you approve [deliverable]. To keep the [date] launch, we'd need a yes or any changes by [day].\n\nIs that still realistic on your side?\n\n[Your name]",
    },
    {
      t: "template",
      label: "4. Adding value instead of nudging",
      when: "1 week later",
      subject: "Re: [Original subject]",
      body: "Hi [Name],\n\nCame across this [article / example] on [topic] and thought of our conversation: [link].\n\nHappy to pick things up whenever the timing suits. Does [next month] look better?\n\n[Your name]",
    },
    {
      t: "template",
      label: "5. After a networking intro",
      when: "1 week later",
      subject: "Re: Intro: [Name] <> [Your name]",
      body: "Hi [Name],\n\nFollowing up on [Introducer]'s intro. I'd value 20 minutes to hear how you're approaching [topic], and I can share what's worked for us with [result or project].\n\nWould sometime next week work?\n\n[Your name]",
    },
    {
      t: "template",
      label: "6. Overdue invoice",
      when: "On the due date, then weekly",
      subject: "Invoice [number] due [date]",
      body: "Hi [Name],\n\nA quick reminder that invoice [number] for [amount] was due on [date]. I've attached it again for convenience.\n\nCould you let me know when payment is scheduled?\n\nThank you,\n[Your name]",
    },
    {
      t: "template",
      label: "7. Closing the loop",
      when: "After 3 or 4 attempts",
      subject: "Re: [Original subject]",
      body: "Hi [Name],\n\nI haven't heard back, so I'll assume the timing isn't right and close this out for now.\n\nIf things change, just reply here and we'll pick up where we left off.\n\nAll the best,\n[Your name]",
    },
    {
      t: "figure",
      photo: { name: "blog-followup-1", fallback: "notes-instructions", alt: "A person writing a short note at a tidy desk beside a laptop" },
      caption: "Short beats clever. The best follow-ups take under a minute to read and answer.",
    },
    { t: "h2", id: "how-many", text: "How many follow-up emails should you send?" },
    {
      t: "p",
      text: "Three or four is a sensible ceiling for most business emails. Space them further apart each time, for example three days, then a week, then two weeks, and make the last one a polite close-the-loop message like template 7. It often gets a reply precisely because it takes the pressure off.",
    },
    {
      t: "p",
      text: "The exception is anything you're owed, such as an invoice or a signed contract. Keep following up on those, and get more formal as you go. For important relationships, watch the bigger pattern too: MailPilot's [relationship scores](/features/relationship-intelligence/) flag contacts who have gone quiet across all your threads, not just one.",
    },
    {
      t: "figure",
      photo: { name: "blog-followup-2", fallback: "day-before", alt: "A desk at dusk with an unopened letter and a phone, waiting for a reply" },
      caption: "Three or four follow-ups, spaced further apart each time, then close the loop.",
    },
    { t: "h2", id: "mistakes", text: "Common follow-up mistakes" },
    {
      t: "ul",
      items: [
        "**\"Just checking in\" with nothing new.** It asks the reader to do the work of remembering why you wrote.",
        "**Starting a fresh thread.** The context disappears and your email looks unrelated.",
        "**Guilt-tripping.** \"As per my last three emails\" makes people less likely to reply, not more.",
        "**Several questions at once.** Each extra question is another reason to put it off.",
        "**Following up after they've replied.** Always check the thread first. Automated reminders should stop the moment a reply arrives.",
        "**Never stopping.** After four unanswered emails, the kindest and most effective move is to close the loop.",
      ],
    },
    { t: "h2", id: "automate", text: "How to automate follow-ups without sounding automated" },
    {
      t: "p",
      text: "Remembering every thread is the hard part, not the writing. Basic reminder tools tell you when to follow up; an email agent can also draft the follow-up for you. [MailPilot AI](/features/email-follow-up-automation/) watches the emails you send, and if no reply arrives inside your window, it drafts a short follow-up from the original thread in [your own writing style](/features/ai-email-writer/).",
    },
    {
      t: "p",
      text: "You stay in control: approve each one in Draft mode, or let follow-ups send on their own in Semi-automatic mode, with per-contact limits. Pending follow-ups are dropped the moment the other person replies. Sales teams use it to keep every proposal warm; see [how it works for sales](/solutions/sales/). Setup takes about 15 minutes ([how it works](/how-it-works/)), and new accounts start with free credits ([pricing](/pricing/)).",
    },
    {
      t: "cta",
      title: "Never forget a follow-up again",
      text: "MailPilot drafts follow-ups from the original thread, in your voice, when nobody replies. Free starter credits, no credit card.",
      href: "/features/email-follow-up-automation/",
      label: "See automated follow-ups",
    },
  ],
  faqs: [
    {
      q: "How do you politely follow up on an email with no response?",
      a: "Reply in the same thread, open with what you need rather than an apology, add one new piece of information and ask one easy question. Keep it under 100 words. \"Just checking in\" with nothing new is the least effective option.",
    },
    {
      q: "Is it rude to send a follow-up email?",
      a: "No. Most people appreciate a short reminder because unanswered emails are usually forgotten, not ignored. It becomes rude only when follow-ups are frequent, guilt-tripping or keep coming after the person has replied or declined.",
    },
    {
      q: "How long should I wait to follow up on an email?",
      a: "Two to three business days for anything time-sensitive, and about a week for everything else. If you gave a deadline, follow up a day or two before it. Adjust to how quickly the person normally replies.",
    },
    {
      q: "What should the subject line of a follow-up email be?",
      a: "Keep the original subject and reply in the same thread so the conversation stays together. If you must start a new email, make the subject the action and the date, such as \"Decision needed by Friday: Q3 proposal\".",
    },
    {
      q: "Can follow-up emails be automated?",
      a: "Yes. Reminder tools tell you when a thread has gone quiet, and email agents such as MailPilot AI can also draft the follow-up in your voice. Look for automation that stops as soon as the other person replies.",
    },
  ],
  sources: [{ label: "Microsoft WorkLab, \"Breaking down the infinite workday\" (Work Trend Index, June 2025)", url: "https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday" }],
  supports: ["features/email-follow-up-automation", "solutions/sales"],
  related: ["how-to-manage-email-overload", "ai-write-emails-in-your-voice", "best-ai-email-assistants"],
};

export const bestAssistants: BlogPost = {
  slug: "best-ai-email-assistants",
  category: "Comparisons",
  title: "The best AI email assistants in 2026,",
  script: "compared honestly",
  seo: {
    title: "Best AI Email Assistants in 2026: 6 Tools Compared (Gmail & Outlook)",
    description:
      "The best AI email assistants in 2026 compared: MailPilot AI, Fyxer, Superhuman, Shortwave, Gemini and Microsoft Copilot. Features, pricing and who each suits.",
    keywords: ["best AI email assistant", "AI email assistant comparison", "Fyxer alternatives", "Superhuman alternatives", "AI email tools 2026"],
  },
  keyword: "best AI email assistant",
  excerpt: "Six tools, one table: what each AI email assistant actually does, what it costs, and who it suits best.",
  published: "2026-11-03",
  updated: "2026-11-03",
  author: "MailPilot Editorial Team",
  hero: { name: "blog-best-hero", fallback: "hero-desk", alt: "A calm desk with a laptop, notebook and a sealed letter in warm light" },
  answer:
    "The best AI email assistant depends on where you work and how much you want it to do. Gemini in Gmail and Microsoft Copilot help you write when you ask. Superhuman and Shortwave replace your email app. Fyxer and MailPilot AI work inside your existing inbox and draft replies before you ask; MailPilot also runs follow-ups and tracks relationships.",
  takeaways: [
    "Built-in assistants (Gemini, Copilot) help on request; agents draft before you open the email.",
    "Superhuman and Shortwave are new email apps; Fyxer and MailPilot work inside Gmail or Outlook.",
    "Shortwave is Gmail-only; most others support both Gmail and Outlook.",
    "Prices range from included-in-your-plan to about $49 per user per month billed monthly.",
    "Pick on one question first: do you want writing help, a new inbox, or an agent that acts?",
  ],
  body: [
    {
      t: "callout",
      tone: "note",
      title: "Disclosure",
      text: "We make MailPilot AI, so we've kept this comparison to facts you can check on each vendor's own pages. Prices were checked in November 2026 and change often.",
    },
    {
      t: "table",
      caption: "At a glance",
      head: ["Tool", "Type", "Works with", "Drafts before you ask", "Starting price*"],
      rows: [
        ["MailPilot AI", "Email agent", "Gmail, Outlook", "Yes, in your voice", "Free starter credits, then 200 credits / mo"],
        ["Fyxer", "Assistant inside your inbox", "Gmail, Outlook", "Yes (Pro and up)", "Free plan; Pro $37 / user / mo annual"],
        ["Superhuman", "Email app", "Gmail, Outlook", "On paid plans", "Free plan; paid Pro and Business tiers"],
        ["Shortwave", "Email app", "Gmail only", "AI assistant on request", "Paid plans from $30 / seat / mo"],
        ["Gemini in Gmail", "Built-in writing help", "Gmail", "No, on request", "Included in Google Workspace business plans"],
        ["Microsoft 365 Copilot", "Built-in writing help", "Outlook", "No, on request", "Paid add-on to Microsoft 365"],
      ],
      note: "*Checked November 2026 on each vendor's pricing page. Confirm before you buy.",
    },
    { t: "h2", id: "three-types", text: "What are the three types of AI email assistant?" },
    {
      t: "p",
      text: "AI email tools fall into three groups, and choosing the group matters more than choosing the brand.",
    },
    {
      t: "ul",
      items: [
        "**Built-in writing help.** Gemini in Gmail and Copilot in Outlook draft, rewrite and summarise when you click the button. Nothing happens until you ask.",
        "**New email apps.** Superhuman and Shortwave replace the app you read email in, with AI features built around speed and search.",
        "**Email agents.** Fyxer and MailPilot AI connect to the inbox you already use and work in the background, so drafts are waiting when you open a thread.",
      ],
    },
    { t: "h2", id: "how-we-compared", text: "How we compared them" },
    {
      t: "p",
      text: "We looked at five things that decide whether an assistant saves time in practice: whether it drafts without being asked, how well it matches your writing style, whether it handles follow-ups, which inboxes it supports, and what it costs per person.",
    },
    { t: "h2", id: "mailpilot", text: "1. MailPilot AI: best for follow-ups and relationships" },
    {
      t: "p",
      text: "MailPilot AI is an email agent by SuperMIA for Gmail and Outlook. You set up a writing Persona once, and it drafts every reply in your voice, drafts follow-ups when people don't reply, scores each work relationship from your email history, and sends a [morning briefing](/features/ai-email-summary/) of urgent items, deadlines and meetings.",
    },
    {
      t: "ul",
      items: [
        "**Best for:** salespeople, founders and consultants whose work depends on replies and follow-ups.",
        "**Stands out:** [automated follow-ups](/features/email-follow-up-automation/), [relationship scores](/features/relationship-intelligence/) and calendar-aware replies that catch meeting clashes.",
        "**Control:** nothing sends without approval in Draft mode; Semi-automatic mode lets follow-ups send on their own.",
        "**Price:** 200 credits a month through the SuperMIA Agent Marketplace, with free starter credits and no credit card ([pricing](/pricing/)).",
      ],
    },
    { t: "h2", id: "fyxer", text: "2. Fyxer: best for inbox sorting plus drafts" },
    {
      t: "p",
      text: "Fyxer works inside Gmail and Outlook. Its paid plans draft replies in your tone and label incoming email automatically, and it can record meetings and keep a follow-up list. The free plan doesn't draft replies or sort your inbox.",
    },
    {
      t: "ul",
      items: [
        "**Best for:** people who want their inbox sorted into folders as well as drafted.",
        "**Price:** Pro is $37 per user per month billed annually or $49 monthly; Team is $64 annually or $99 monthly.",
      ],
    },
    { t: "h2", id: "superhuman", text: "3. Superhuman: best for speed in a new email app" },
    {
      t: "p",
      text: "Superhuman is a separate email app for Gmail and Outlook built around keyboard shortcuts and speed. Its paid plans add AI writing that adapts to your voice, and its higher tier adds more personalised AI. You'll be switching apps, which some people love and others don't.",
    },
    {
      t: "ul",
      items: ["**Best for:** heavy email users happy to learn a new, keyboard-first app.", "**Price:** free plan, plus paid Pro and Business plans; check its plans page for your region."],
    },
    { t: "h2", id: "shortwave", text: "4. Shortwave: best AI search for Gmail users" },
    {
      t: "p",
      text: "Shortwave is an email app for Gmail with an AI assistant you can ask to find, summarise and write emails. Its plans include personalised AI writing and automatic follow-up reminders. It doesn't support Outlook.",
    },
    { t: "ul", items: ["**Best for:** Gmail users who want to search and summarise their inbox by asking questions.", "**Price:** paid plans from $30 per seat per month (Business)."] },
    {
      t: "figure",
      photo: { name: "blog-best-1", fallback: "exec-review", alt: "A professional comparing options on a tablet by an office window" },
      caption: "Decide on the type of tool first: writing help, a new inbox, or an agent that works in the background.",
    },
    { t: "h2", id: "gemini", text: "5. Gemini in Gmail: best if you're already on Google Workspace" },
    {
      t: "p",
      text: "Gemini is built into Gmail. \"Help me write\" drafts and rewrites emails, and it can summarise long threads and suggest replies. It's included in Google Workspace business plans, so there's nothing extra to buy, but it works when you ask and doesn't run follow-ups or learn a detailed personal style. If you're on Gmail and want drafts waiting before you ask, see [how MailPilot works with Gmail](/integrations/gmail/).",
    },
    { t: "ul", items: ["**Best for:** occasional writing help at no extra cost.", "**Price:** included with Google Workspace business plans."] },
    { t: "h2", id: "copilot", text: "6. Microsoft 365 Copilot: best for Microsoft 365 organisations" },
    {
      t: "p",
      text: "Copilot in Outlook drafts emails, summarises threads and offers coaching on tone. It's a paid add-on on top of a Microsoft 365 licence, so it suits organisations that also want Copilot in Word, Excel and Teams.",
    },
    { t: "ul", items: ["**Best for:** companies standardised on Microsoft 365.", "**Price:** paid add-on per user to an eligible Microsoft 365 plan."] },
    { t: "h2", id: "how-to-choose", text: "How do you choose the right AI email assistant?" },
    {
      t: "table",
      head: ["If you want…", "Look at"],
      rows: [
        ["Free writing help in Gmail", "Gemini in Gmail"],
        ["Writing help across Microsoft 365", "Microsoft 365 Copilot"],
        ["A faster new email app", "Superhuman (Gmail or Outlook), Shortwave (Gmail)"],
        ["Drafts plus automatic inbox sorting", "Fyxer"],
        ["Drafts, follow-ups and relationship tracking in your existing inbox", "MailPilot AI"],
      ],
    },
    {
      t: "figure",
      photo: { name: "blog-best-2", fallback: "crew-consult", alt: "A professional testing a new tool on their own inbox at a bright desk" },
      caption: "Test any assistant on your own inbox for a week, not on a demo email.",
    },
    { t: "h2", id: "mistakes", text: "Mistakes to avoid when choosing" },
    {
      t: "ul",
      items: [
        "**Buying an app when you wanted an agent.** A new inbox is still an inbox you have to work through.",
        "**Ignoring security.** Any tool that reads Gmail should have passed Google's CASA assessment. Our guide explains [what to check before connecting AI to Gmail](/blog/is-it-safe-to-connect-ai-to-gmail/).",
        "**Judging on the demo email.** Test with your own inbox for a week, including follow-ups, not one sample reply.",
        "**Forgetting the team.** Per-seat prices add up; ask about team and volume pricing.",
      ],
    },
    {
      t: "cta",
      title: "Try an email agent on your own inbox",
      text: "MailPilot drafts replies in your voice, runs follow-ups and briefs you every morning. Start with free credits.",
      href: "/features/",
      label: "Explore MailPilot features",
    },
  ],
  faqs: [
    {
      q: "What is the best AI email assistant?",
      a: "It depends on what you need. Gemini in Gmail and Microsoft Copilot are good built-in writing help. Superhuman and Shortwave are AI-powered email apps. Fyxer and MailPilot AI are agents that draft before you ask; MailPilot adds automated follow-ups and relationship tracking.",
    },
    {
      q: "Is there a free AI email assistant?",
      a: "Yes. Gemini in Gmail comes with Google Workspace business plans, Fyxer and Superhuman have free plans with limited features, and MailPilot AI gives new accounts free starter credits with no credit card.",
    },
    {
      q: "Which AI email assistant works with Outlook?",
      a: "MailPilot AI, Fyxer, Superhuman and Microsoft 365 Copilot all work with Outlook. Shortwave and Gemini in Gmail are for Gmail only.",
    },
    {
      q: "Can an AI email assistant write in my style?",
      a: "Several can. MailPilot AI uses a Persona you set up once from a description or sample emails; Fyxer and Superhuman also learn your tone on paid plans. Built-in tools offer more generic tone options.",
    },
    {
      q: "Is it safe to let an AI read my email?",
      a: "It can be, if the app is verified. Apps that read Gmail must pass Google's OAuth verification and an annual CASA security assessment, and follow Google's Limited Use rules. Check those before connecting any tool.",
    },
  ],
  sources: [
    { label: "Fyxer pricing (checked November 2026)", url: "https://www.fyxer.com/pricing" },
    { label: "Superhuman plans (checked November 2026)", url: "https://superhuman.com/plans" },
    { label: "Shortwave pricing (checked November 2026)", url: "https://www.shortwave.com/pricing/" },
    { label: "Google Workspace pricing", url: "https://workspace.google.com/pricing" },
    { label: "Microsoft 365 Copilot", url: "https://www.microsoft.com/en-us/microsoft-365/copilot" },
  ],
  supports: ["features", "integrations/gmail"],
  related: ["is-it-safe-to-connect-ai-to-gmail", "ai-write-emails-in-your-voice", "follow-up-email-after-no-response"],
};

export const safeGmail: BlogPost = {
  slug: "is-it-safe-to-connect-ai-to-gmail",
  category: "Security",
  title: "Is it safe to connect AI to Gmail?",
  script: "What to check first",
  seo: {
    title: "Is It Safe to Connect AI to Gmail? OAuth, CASA & Permissions Explained",
    description:
      "Is it safe to connect AI to Gmail? How Google OAuth permissions, CASA security assessments and Limited Use rules work, plus 8 questions to ask any AI email app.",
    keywords: ["is it safe to connect AI to Gmail", "Gmail third party app access", "CASA security assessment", "Gmail OAuth permissions"],
  },
  keyword: "safe to connect AI to Gmail",
  excerpt: "How Google's permissions, CASA assessments and Limited Use rules protect you, and the eight questions to ask before you click Allow.",
  published: "2026-11-03",
  updated: "2026-11-03",
  author: "MailPilot Editorial Team",
  hero: { name: "blog-safe-hero", fallback: "letter-sealed", alt: "An envelope closed with an intact bronze wax seal" },
  answer:
    "It can be safe to connect AI to Gmail if the app has passed Google's verification. Apps that read or create Gmail messages use restricted permissions, so Google requires them to pass OAuth verification and an independent CASA security assessment every 12 months, and to limit how they use your data. Check the permissions requested, the privacy policy and how to revoke access.",
  takeaways: [
    "Gmail read and compose permissions are \"restricted\", Google's highest-risk category.",
    "Apps using them must pass an independent CASA security assessment at least every 12 months.",
    "Google's Limited Use rules forbid using your Gmail data for ads.",
    "Grant only the permissions the features you want really need.",
    "You can see and revoke every connected app in your Google Account at any time.",
  ],
  body: [
    {
      t: "checklist",
      title: "Before you click Allow: the 30-second check",
      items: [
        "The app name and developer on Google's consent screen match the company you expect",
        "The permissions match the features you want (reading mail, creating drafts, calendar)",
        "The privacy policy says your email isn't used for ads or to train general AI models",
        "The company states it has passed Google's CASA security assessment",
        "You know how to disconnect it and what happens to your data afterwards",
      ],
    },
    { t: "h2", id: "how-access-works", text: "How does an AI app get access to your Gmail?" },
    {
      t: "p",
      text: "Through Google OAuth, not your password. When you click \"Sign in with Google\", Google shows a consent screen listing exactly what the app wants to do, such as read your email or create drafts. If you agree, Google gives the app a token for those permissions only. You never share your password, and you can withdraw the token at any time.",
    },
    {
      t: "p",
      text: "Each permission is called a **scope**. Google sorts scopes by risk. Reading, composing or modifying Gmail messages are **restricted scopes**, the category Google says provides \"wide access to Google user data\".",
    },
    { t: "h2", id: "restricted-scopes", text: "What does Google require from apps with restricted access?" },
    {
      t: "p",
      text: "Much more than a normal app. According to Google's developer documentation, apps that request restricted scopes must:",
    },
    {
      t: "ul",
      items: [
        "pass Google's OAuth verification and show they're a permitted type of application;",
        "complete a security assessment by an independent, Google-approved assessor if they access data through their own servers, using the **Cloud Application Security Assessment (CASA)** framework from the App Defense Alliance;",
        "repeat that assessment **at least every 12 months**;",
        "follow Google's **Limited Use** requirements and use your data only in ways their privacy policy discloses.",
      ],
    },
    {
      t: "callout",
      tone: "note",
      title: "What CASA actually checks",
      text: "CASA is based on the OWASP Application Security Verification Standard, a widely used checklist covering things like authentication, data storage, encryption and access control. It isn't a guarantee nothing will ever go wrong, but an app that has passed it has had its security independently reviewed.",
    },
    { t: "h2", id: "limited-use", text: "What are Google's Limited Use rules?" },
    {
      t: "p",
      text: "Google's API Services User Data Policy limits what apps can do with data from restricted scopes. In short, an app may use your Gmail data only to provide or improve the features you can see. It may not use it for advertising, may not sell it, and may not let humans read it except in narrow cases such as with your permission, for security, or to comply with the law.",
    },
    {
      t: "figure",
      photo: { name: "blog-safe-1", fallback: "seal-hand", alt: "A hand checking a sealed envelope before opening it" },
      caption: "Google's consent screen lists every permission an app requests. Read it before you click Allow.",
    },
    { t: "h2", id: "questions", text: "8 questions to ask any AI email app" },
    {
      t: "ol",
      items: [
        "**Has it passed CASA?** Any app reading Gmail through its own servers should have.",
        "**Which scopes does it request, and why?** Reading mail and creating drafts make sense for an email assistant; full account management usually doesn't.",
        "**Is your email used to train AI models?** Look for a clear \"no\" for general models.",
        "**Is your data used for advertising?** Under Limited Use it shouldn't be.",
        "**How is data stored?** Look for encryption at rest, such as AES-256.",
        "**Does it send without asking?** Check whether it drafts for approval or sends automatically, and whether you can choose. MailPilot, for example, has [Draft and Semi-automatic modes](/how-it-works/).",
        "**What happens when you disconnect?** How quickly are tokens and data deleted?",
        "**Who is the company?** A real company name, address and privacy contact are good signs.",
      ],
    },
    { t: "h2", id: "red-flags", text: "Common mistakes and red flags" },
    {
      t: "ul",
      items: [
        "**Clicking through the consent screen.** It's the one place Google tells you exactly what you're granting.",
        "**Granting more than the features need.** A tool that only summarises shouldn't need to delete mail.",
        "**Choosing on features alone.** Compare security as carefully as drafting quality; our [AI email assistant comparison](/blog/best-ai-email-assistants/) covers both.",
        "**Tools that ask for your password.** Legitimate Gmail apps use Google sign-in, never your password.",
        "**No privacy policy, or one that doesn't mention Google data.** Verified apps must have one.",
        "**Forgetting old connections.** Apps you stopped using months ago may still have access.",
      ],
    },
    { t: "h2", id: "revoke", text: "How do you check or remove apps connected to Gmail?" },
    {
      t: "p",
      text: "Open your Google Account (myaccount.google.com), go to **Security** and find the list of third-party apps and services connected to your account. You'll see each app with access and what it can see. Select an app to remove its access. Google's help centre has the current steps, as the menu names change from time to time.",
    },
    {
      t: "figure",
      photo: { name: "blog-safe-2", fallback: "notes-instructions", alt: "A person reviewing account settings on a laptop at a quiet desk" },
      caption: "Review your connected apps every few months and remove the ones you no longer use.",
    },
    { t: "h2", id: "mailpilot", text: "How MailPilot handles your Gmail data" },
    {
      t: "p",
      text: "MailPilot AI asks Google for permission to read your mail and create drafts ([see the Gmail setup](/integrations/gmail/)), plus read-only access to your calendar events to avoid double-booking you. It is CASA certified, encrypts data with AES-256 and follows Google's Limited Use rules: your Gmail data is never used for ads or to train general AI models. Tokens are deleted within 24 hours of revoking access, and replies drafted in [your own voice](/features/ai-email-writer/) always wait for your approval. The full detail is on our [security page](/security/) and in our [privacy policy](/privacy/).",
    },
    {
      t: "cta",
      title: "See exactly what MailPilot accesses",
      text: "Every permission, why we need it, and how long we keep your data, in plain words.",
      href: "/security/",
      label: "Read our security page",
    },
  ],
  faqs: [
    {
      q: "Can AI apps read all my Gmail emails?",
      a: "Only if you grant a permission that allows it. Email assistants usually request read access so they can understand threads. Google classes that as a restricted scope, so the app must pass verification and a CASA security assessment and follow Limited Use rules.",
    },
    {
      q: "What is a CASA security assessment?",
      a: "CASA (Cloud Application Security Assessment) is an independent security review, based on the OWASP ASVS standard, that Google requires for apps accessing restricted data such as Gmail through their own servers. It must be repeated at least every 12 months.",
    },
    {
      q: "Can an AI email app send emails without my permission?",
      a: "Only if it has a send or compose permission and its settings allow it. Many assistants, including MailPilot AI in Draft mode, prepare drafts and wait for your approval. Check the app's settings before connecting.",
    },
    {
      q: "How do I remove an app's access to my Gmail?",
      a: "Open your Google Account, go to Security, and find the list of third-party apps and services connected to your account. Select the app and remove its access. After that, the app can no longer use its token to reach your data.",
    },
    {
      q: "Do AI email assistants use my emails to train their models?",
      a: "It depends on the company, so read the privacy policy. Google's Limited Use rules restrict how Gmail data can be used, and many assistants, MailPilot AI included, state that Gmail data is never used to train general AI models.",
    },
  ],
  sources: [
    { label: "Google for Developers: Restricted scope verification", url: "https://developers.google.com/identity/protocols/oauth2/production-readiness/restricted-scope-verification" },
    { label: "Google API Services User Data Policy (Limited Use)", url: "https://developers.google.com/terms/api-services-user-data-policy" },
    { label: "Google for Developers: App verification and CASA (Letter of Validation, OWASP ASVS)", url: "https://developers.google.com/health/app-verification" },
    { label: "Google Account Help: Share some access to your Google Account data with apps from other developers", url: "https://support.google.com/accounts/answer/3466521" },
  ],
  supports: ["security", "integrations/gmail"],
  related: ["best-ai-email-assistants", "ai-write-emails-in-your-voice", "email-statistics-time-spent"],
};
