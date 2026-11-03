// Scheduled posts, batch 4. See docs/BLOG_CALENDAR.md for the dates. Each post publishes itself on its date.
import type { BlogPost } from "./types.ts";

export const superhumanAlternatives: BlogPost = {
  slug: "superhuman-alternatives",
  category: "Comparisons",
  title: "The best Superhuman alternatives in 2027,",
  script: "with or without a new email app",
  seo: {
    title: "Superhuman Alternatives in 2027: 7 Options Compared Honestly",
    description:
      "Superhuman alternatives compared: AI agents that work inside Gmail and Outlook, other email apps and built-in AI. Features and prices checked November 2026.",
    keywords: ["Superhuman alternatives", "Superhuman alternative for Gmail", "Superhuman vs Shortwave", "AI email assistant inside Gmail", "cheaper than Superhuman"],
  },
  keyword: "Superhuman alternatives",
  excerpt: "Seven options for people who want Superhuman's speed or AI without switching email apps or paying for a whole new suite.",
  published: "2027-03-02",
  updated: "2027-03-02",
  author: "MailPilot Editorial Team",
  hero: { name: "blog-superhuman-hero", fallback: "pg-features-hero", alt: "A professional working quickly at a laptop on a bright, uncluttered desk" },
  answer:
    "The best Superhuman alternatives depend on what you liked about it. For speed, Gmail's own shortcuts, Spark or Shortwave get you close. For AI drafting without switching apps, agents such as MailPilot AI and Fyxer work inside Gmail and Outlook. Gemini in Gmail and Microsoft 365 Copilot add writing help to the inbox you already have.",
  takeaways: [
    "Decide first whether you want speed, AI drafting, or both. That choice narrows the list fast.",
    "Superhuman Mail and Shortwave are separate email apps; Fyxer and MailPilot AI work inside Gmail or Outlook.",
    "Superhuman itself now offers an Email Assistant that works inside Gmail or Outlook, so check it too.",
    "Shortwave doesn't support Microsoft 365 or Exchange accounts; Spark works with most providers.",
    "Gmail's built-in shortcuts and follow-up nudges are free and cover much of the speed gap.",
  ],
  body: [
    {
      t: "callout",
      tone: "note",
      title: "Disclosure",
      text: "We make MailPilot AI, so we've kept this comparison to facts you can check on each vendor's own pages. Prices and plans were checked in November 2026 and change often. Confirm before you buy.",
    },
    {
      t: "table",
      caption: "At a glance",
      head: ["Tool", "Type", "Works with", "Switch apps?", "Price (checked Nov 2026)*"],
      rows: [
        ["MailPilot AI", "Email agent", "Gmail, Outlook", "No", "Free starter credits, then 200 credits / mo"],
        ["Superhuman Email Assistant", "Assistant inside your inbox", "Gmail, Outlook", "No", "Paid Superhuman plans; regional pricing"],
        ["Fyxer", "Assistant inside your inbox", "Gmail, Outlook", "No", "Free plan; Pro $37 / user / mo billed annually"],
        ["Shortwave", "Email app", "Gmail and Google Workspace", "Yes", "From $30 / seat / mo; 14-day trial"],
        ["Spark", "Email app", "Gmail, Outlook, iCloud, Yahoo, IMAP", "Yes", "Free plan; Plus $10 / mo, Pro $20 / mo"],
        ["Gemini in Gmail", "Built-in writing help", "Gmail", "No", "Included in Google Workspace Starter and up"],
        ["Microsoft 365 Copilot", "Built-in writing help", "Outlook", "No", "Business add-on $21 / user / mo, annual"],
      ],
      note: "*From each vendor's pricing page. Superhuman and Google showed local-currency prices in our region, so we describe their plans without quoting a figure.",
    },
    { t: "h2", id: "why-switch", text: "Why do people look for an alternative to Superhuman?" },
    {
      t: "p",
      text: "Superhuman Mail is a fast, keyboard-first email app, and plenty of people love it. The reasons people look elsewhere are usually practical, not about quality.",
    },
    {
      t: "ul",
      items: [
        "**They don't want to change apps.** Superhuman Mail is its own app. Some people, and many IT teams, would rather keep Gmail or Outlook.",
        "**They want AI that works without being asked.** Shortcuts make you faster, but you still read and write every email yourself.",
        "**Cost across a team.** Superhuman's plans are priced per member, so the bill grows with headcount. It's also now a wider suite (its homepage lists Mail, Grammarly, Docs and Go), which some buyers find more than they need.",
      ],
    },
    {
      t: "p",
      text: "If you're comparing the whole category rather than replacing one tool, start with our [roundup of the best AI email assistants](/blog/best-ai-email-assistants/). This guide is narrower: it's for people who already know what they liked about Superhuman and want to keep that without the trade-offs.",
    },
    { t: "h2", id: "speed-or-ai", text: "Do you want speed, AI drafting, or both?" },
    {
      t: "table",
      head: ["What you liked about Superhuman", "What to look at"],
      rows: [
        ["Keyboard speed and a clean inbox", "Gmail shortcuts and nudges (free), Spark, Shortwave"],
        ["Replies drafted in your voice", "MailPilot AI, Fyxer, Superhuman's Email Assistant"],
        ["Reminders when nobody replies", "MailPilot AI (drafts the follow-up), Superhuman, Shortwave"],
        ["Writing help only when you ask", "Gemini in Gmail, Microsoft 365 Copilot, Spark +AI"],
      ],
    },
    { t: "h2", id: "speed-in-gmail", text: "Can you get Superhuman-style speed inside Gmail?" },
    {
      t: "p",
      text: "Much of it, yes, and for free. Gmail has keyboard shortcuts, but they're off by default. Turn them on in **Settings > See all settings > General > Keyboard shortcuts on**, then save. After that, **c** composes, **r** replies, **e** archives and **/** jumps to search.",
    },
    {
      t: "p",
      text: "Gmail also has **nudges**. In the same General tab, the option \"Suggest emails to follow up on\" brings sent emails that may need a follow-up back to the top of your inbox. Add a few filters and labels so newsletters and receipts skip the inbox (our [guide to Gmail filters and labels](/blog/gmail-filters-and-labels/) walks through it) and you've rebuilt a lot of the calm, fast feel.",
    },
    {
      t: "p",
      text: "What Gmail won't do on its own is write the replies. That's where the tools below come in.",
    },
    { t: "h2", id: "mailpilot", text: "1. MailPilot AI: drafts and follow-ups inside Gmail and Outlook" },
    {
      t: "p",
      text: "MailPilot AI is an email agent by SuperMIA. It connects to [Gmail](/integrations/gmail/) or Outlook, learns your writing style from a one-time Persona setup, and drafts replies before you open the thread. Every reply draft waits for your approval, and email always goes from your own address.",
    },
    {
      t: "ul",
      items: [
        "**Best for:** people who want Superhuman's AI benefits but prefer to stay in Gmail or Outlook.",
        "**Stands out:** [automated follow-ups](/features/email-follow-up-automation/) drafted from the original thread, a [relationship score](/features/relationship-intelligence/) for every contact, and a [morning briefing](/features/ai-email-summary/) of urgent items, deadlines and meetings.",
        "**Trade-off:** it doesn't replace your email app or add keyboard shortcuts. You keep Gmail's or Outlook's interface.",
        "**Price:** 200 credits a month through the SuperMIA Agent Marketplace, with free starter credits and no credit card ([pricing](/pricing/)).",
      ],
    },
    { t: "h2", id: "superhuman-assistant", text: "2. Superhuman's Email Assistant: Superhuman AI without the app switch" },
    {
      t: "p",
      text: "Worth knowing before you leave: Superhuman now sells an Email Assistant that, in its own words, \"works inside Gmail or Outlook to sort incoming messages, draft replies in your voice\". Its plans page lists Email Assistant on the Pro plan and more personalized AI writing on Business.",
    },
    {
      t: "ul",
      items: [
        "**Best for:** people who like Superhuman's AI and want to keep using it from Gmail or Outlook.",
        "**Price:** Free, Pro, Business and Enterprise plans, priced per member. Prices shown vary by region, so check the plans page.",
      ],
    },
    { t: "h2", id: "fyxer", text: "3. Fyxer: drafts plus automatic inbox sorting" },
    {
      t: "p",
      text: "Fyxer also works inside Gmail and Outlook. Its Pro plan drafts replies in your tone and sorts and labels incoming email; the free plan covers meeting notes but doesn't draft replies or sort your inbox. We compare it in more depth in our [Fyxer alternatives guide](/blog/fyxer-alternatives/).",
    },
    {
      t: "ul",
      items: [
        "**Best for:** people who want their inbox filed into categories as well as drafted.",
        "**Price:** Pro is $37 per user per month billed annually or $49 monthly; Team is $64 annually or $99 monthly.",
      ],
    },
    { t: "h2", id: "shortwave", text: "4. Shortwave: an AI-first email app for Gmail" },
    {
      t: "p",
      text: "If you're happy to use a separate app but want strong AI search, Shortwave is the closest like-for-like swap. Its plans include AI search across your mail history, summaries, autocomplete and automatic follow-up reminders. It's built for Gmail and Google Workspace; its help docs say Microsoft 365 and Exchange accounts aren't supported.",
    },
    { t: "ul", items: ["**Best for:** Gmail users who want to ask questions of their inbox.", "**Price:** Business $30, Premier $45 and Max $120 per seat per month, with a 14-day free trial."] },
    { t: "h2", id: "spark", text: "5. Spark: a lower-cost email app for any provider" },
    {
      t: "p",
      text: "Spark is a cross-platform email app that works with Gmail, Outlook and Office 365, iCloud, Yahoo and standard IMAP accounts. Its AI Assistant drafts, rephrases and summarizes, and the Pro plan adds Auto-Drafts.",
    },
    { t: "ul", items: ["**Best for:** people with several kinds of email account who want one app.", "**Price:** free plan; Plus $10 a month or $99 a year; Pro $20 a month or $199 a year."] },
    {
      t: "figure",
      photo: { name: "pg-gmail-workspace", fallback: "pg-gmail-workspace", alt: "A small team working and laughing around a shared workspace table" },
      caption: "Keeping your current inbox and adding an assistant is often less disruptive than moving the whole team to a new app.",
    },
    { t: "h2", id: "gemini", text: "6. Gemini in Gmail: built-in help on Google Workspace" },
    {
      t: "p",
      text: "Gemini in Gmail helps you find, summarize and write emails. Google's pricing page lists it on Workspace Starter, Standard and Enterprise plans (not Base), so many teams already pay for it. It helps when you ask rather than drafting replies in the background.",
    },
    { t: "ul", items: ["**Best for:** Workspace teams that want occasional writing help at no extra cost.", "**Price:** included with eligible Google Workspace plans; prices vary by region."] },
    { t: "h2", id: "copilot", text: "7. Microsoft 365 Copilot: built-in help for Outlook" },
    {
      t: "p",
      text: "Copilot in Outlook drafts a message from a prompt and offers \"coaching\" on emails you've written yourself. For small and mid-sized businesses, the Copilot Business add-on is listed at $21 per user per month on an annual plan ($25.20 billed monthly). A first-year promotional price of $18 ran until December 31, 2026. It requires an eligible Microsoft 365 Business plan.",
    },
    { t: "ul", items: ["**Best for:** organizations already standardized on Microsoft 365.", "**Price:** paid add-on per user, on top of Microsoft 365."] },
    { t: "h2", id: "how-to-choose", text: "How do you choose the right one?" },
    {
      t: "checklist",
      title: "Five questions to answer before you trial anything",
      items: [
        "Do you, or your IT team, need to stay in Gmail or Outlook?",
        "Do you want drafts waiting before you open a thread, or help only when you click?",
        "Which accounts must it support: Gmail, Microsoft 365, Outlook.com, iCloud?",
        "Who approves what gets sent, and can you keep that control per contact?",
        "What does it cost for the number of people who will really use it?",
      ],
    },
    {
      t: "p",
      text: "Then run a one-week trial on your real inbox. A demo email tells you very little about how a tool handles your clients, your tone and your follow-ups.",
    },
    { t: "h2", id: "mistakes", text: "Common mistakes when switching email tools" },
    {
      t: "ul",
      items: [
        "**Swapping one app for another when you wanted less email work.** A faster inbox is still an inbox you have to clear yourself.",
        "**Skipping the security check.** Any tool that reads Gmail should have passed Google's CASA assessment. Here's [what to check before connecting AI to Gmail](/blog/is-it-safe-to-connect-ai-to-gmail/).",
        "**Assuming Outlook support.** Read the provider list. Some tools support Microsoft 365 but not Outlook.com, or not Exchange at all.",
        "**Pricing one seat, buying ten.** Per-seat plans add up; ask about team pricing before rolling out.",
        "**Letting AI send without rules.** Decide which emails can go out on their own and which always need your eye.",
      ],
    },
    { t: "h2", id: "where-mailpilot-fits", text: "Where does MailPilot AI fit?" },
    {
      t: "p",
      text: "MailPilot AI suits people whose work runs on replies: salespeople, founders and consultants. It drafts every reply in your voice, drafts follow-ups when a thread goes quiet, and keeps a profile of each relationship built from your email history, all inside the inbox you already use. You choose Draft mode, where nothing sends without approval, or Semi-automatic mode, where follow-ups send on their own within per-contact limits while reply drafts still wait for you.",
    },
    {
      t: "p",
      text: "It's not the right pick if what you mainly want is keyboard speed or a new interface; Spark, Shortwave or Superhuman Mail fit that better. See [every MailPilot feature](/features/) or [how setup works](/how-it-works/): connecting an inbox takes 2 to 3 minutes and the Persona 10 to 15.",
    },
    {
      t: "cta",
      title: "Keep your inbox. Add an agent.",
      text: "MailPilot drafts replies and follow-ups in your voice inside Gmail, and nothing sends without your say. Free starter credits, no credit card.",
      href: "/integrations/gmail/",
      label: "See MailPilot for Gmail",
    },
  ],
  faqs: [
    {
      q: "Is there a free alternative to Superhuman?",
      a: "Yes. Gmail's built-in keyboard shortcuts and follow-up nudges are free, Spark and Fyxer have free plans with limited features, and MailPilot AI gives new accounts free starter credits with no credit card. Gemini in Gmail is included at no extra cost in eligible Google Workspace plans.",
    },
    {
      q: "Does Superhuman work with Outlook?",
      a: "Yes. Superhuman Mail supports Microsoft 365 accounts as well as Gmail, and Superhuman's Email Assistant works inside Gmail or Outlook. If you use a personal Outlook.com address or an on-premises Exchange server, check Superhuman's help center for current account support before you buy.",
    },
    {
      q: "Can I get Superhuman features in Gmail?",
      a: "Partly. Turn on Gmail's keyboard shortcuts and follow-up nudges for speed, and use filters to keep low-value mail out of the inbox. For replies drafted in your voice, add an assistant that works inside Gmail, such as MailPilot AI, Fyxer or Superhuman's own Email Assistant.",
    },
    {
      q: "Is Shortwave a good replacement for Superhuman?",
      a: "It can be, if you use Gmail. Shortwave is a separate email app with AI search, summaries and follow-up reminders, priced from $30 per seat per month. Its docs say Microsoft 365 and Exchange accounts aren't supported, so Outlook users should look elsewhere.",
    },
    {
      q: "Which AI email assistant works inside my existing inbox?",
      a: "MailPilot AI, Fyxer and Superhuman's Email Assistant all work inside Gmail and Outlook, so you don't switch apps. Gemini in Gmail and Microsoft 365 Copilot are also built into the inbox, but they help when you ask rather than drafting replies in the background.",
    },
  ],
  sources: [
    { label: "Superhuman plans (checked November 2026)", url: "https://superhuman.com/plans" },
    { label: "Superhuman Mail product page (Email Assistant, Split Inbox, reminders)", url: "https://superhuman.com/mail" },
    { label: "Superhuman homepage (Mail, Grammarly, Docs, Go)", url: "https://superhuman.com/" },
    { label: "Superhuman blog: Superhuman Mail is now available for Outlook", url: "https://blog.superhuman.com/superhuman-for-outlook/" },
    { label: "Fyxer pricing (checked November 2026)", url: "https://www.fyxer.com/pricing" },
    { label: "Shortwave pricing (checked November 2026)", url: "https://www.shortwave.com/pricing/" },
    { label: "Shortwave docs: Microsoft, Outlook, Exchange and other sign-in support", url: "https://www.shortwave.com/docs/how-tos/microsoft-outlook-exchange-other-sign-in-support/" },
    { label: "Spark pricing (checked November 2026)", url: "https://sparkmailapp.com/pricing" },
    { label: "Spark +AI Assistant", url: "https://sparkmailapp.com/features/ai-assistant" },
    { label: "Google Workspace pricing (checked November 2026)", url: "https://workspace.google.com/pricing" },
    { label: "Microsoft Copilot Business pricing (checked November 2026)", url: "https://www.microsoft.com/en-us/copilot/pricing/business" },
    { label: "Microsoft Support: Draft an email message with Copilot in Outlook", url: "https://support.microsoft.com/en-us/office/draft-an-email-message-with-copilot-in-outlook-3eb1d053-89b8-491c-8a6e-746015238d9b" },
    { label: "Gmail Help: Keyboard shortcuts for Gmail", url: "https://support.google.com/mail/answer/6594" },
    { label: "Gmail Help: Reply to messages (nudges)", url: "https://support.google.com/mail/answer/6585" },
  ],
  supports: ["features", "integrations/gmail"],
  related: ["best-ai-email-assistants", "fyxer-alternatives", "is-it-safe-to-connect-ai-to-gmail"],
};

export const keepInTouchClients: BlogPost = {
  slug: "how-to-keep-in-touch-with-clients",
  category: "Guides",
  title: "How to keep in touch with clients",
  script: "without becoming a pest",
  seo: {
    title: "How to Keep in Touch With Clients: A Simple System + 6 Templates",
    description:
      "How to keep in touch with clients without being pushy: how often to reach out, what to say when there's no news, a simple tracking system and 6 email templates.",
    keywords: ["how to keep in touch with clients", "stay in touch with clients", "keep in touch email to client", "how often to contact clients", "reconnect with past clients"],
  },
  keyword: "how to keep in touch with clients",
  excerpt: "A contact rhythm for every kind of client, ideas for what to say when there's no news, and six emails you can send this week.",
  published: "2027-03-09",
  updated: "2027-03-09",
  author: "MailPilot Editorial Team",
  hero: { name: "pg-consult-hero", fallback: "pg-consult-hero", alt: "A consultant holding a mug in a calm, sunlit home office" },
  answer:
    "Here's how to keep in touch with clients: give each client a contact rhythm based on how active and important they are, then make every touch useful. Share a relevant idea, a short results update, a question about their goals or a note on news in their world. Track when you last spoke, and never let an invoice be your only contact.",
  takeaways: [
    "Set a rhythm per client: weekly while active, monthly for key accounts, quarterly for past clients.",
    "Every touch should give the client something: an idea, a result, a useful link or a good question.",
    "Match their channel. If a client always emails, don't keep calling.",
    "Keep a simple record of last contact and next touch, and review it once a week.",
    "Quiet clients are a signal. Reach out before the silence becomes a lost account.",
  ],
  body: [
    {
      t: "table",
      caption: "A simple contact rhythm",
      head: ["Client type", "How often", "Good reasons to reach out"],
      rows: [
        ["Active project", "Weekly, or at each milestone", "Progress, decisions needed, early warnings"],
        ["Key account between projects", "Monthly", "An idea for them, a result from past work"],
        ["Past client", "Every quarter", "News in their industry, a quick goal check"],
        ["Dormant client (6+ months quiet)", "Twice a year", "A friendly reconnect with one specific question"],
      ],
      note: "Starting points only. Adjust to each client's pace and how they like to work.",
    },
    { t: "h2", id: "why-quiet", text: "Why do client relationships go quiet?" },
    {
      t: "p",
      text: "Rarely because anyone decided to end them. A project wraps up, both sides get busy, and three months pass without a single email. Then a competitor calls at the right moment.",
    },
    {
      t: "p",
      text: "The fix isn't more contact. It's planned contact. When you decide in advance who you'll reach out to and when, you stop relying on memory, which is the first thing to go in a busy week.",
    },
    { t: "h2", id: "how-often", text: "How often should you contact clients?" },
    {
      t: "p",
      text: "Use the table above as a starting point, then adjust. Two things matter most: how active the work is, and how much the relationship is worth to you. A client in the middle of a project needs to hear from you every week, even if the update is short. A past client may only need four thoughtful emails a year.",
    },
    {
      t: "p",
      text: "Watch each client's own pace too. Someone who always replies within an hour and has gone silent for a week is telling you something. Someone who takes a week every time is simply busy.",
    },
    {
      t: "callout",
      tone: "tip",
      title: "Put names on the calendar, not intentions",
      text: "\"Stay in touch with clients\" never happens. \"Email Priya about her Q3 launch on the 14th\" does. Add specific names and dates to your calendar or task list.",
    },
    { t: "h2", id: "what-to-say", text: "What should you say when there's no news?" },
    { t: "p", text: "A keep-in-touch email needs a reason. \"Just checking in\" makes the client do the work of finding one. Use one of these instead." },
    {
      t: "ul",
      items: [
        "**An idea for them.** \"I saw this and thought of your expansion plans.\"",
        "**A result from your past work.** \"The site we rebuilt in spring is now getting twice the sign-ups.\" (Only if it's true and you've measured it.)",
        "**A question about their goals.** \"What's the priority for your team this quarter?\"",
        "**News in their world.** A new regulation, a competitor's move or an industry report they may have missed.",
        "**A congratulations.** A promotion, funding round, award or launch.",
        "**An introduction.** Someone in your network they would value meeting.",
        "**A useful resource.** A template, checklist or short guide you made.",
        "**A thank-you.** For a referral, a testimonial or simply a good year working together.",
      ],
    },
    { t: "h2", id: "channel", text: "Which channel should you use?" },
    {
      t: "p",
      text: "Follow the client's lead. If they email, email back. If they prefer a quick call, call. Email works well for most keep-in-touch messages because the client can answer when it suits them, and it leaves a written record for both of you.",
    },
    {
      t: "p",
      text: "Save calls and in-person meetings for bigger moments: annual reviews, renewals, problems and new opportunities. Comment on a client's LinkedIn post when you have something real to add, not as a substitute for a direct message. And for a structured quarterly check, our [client check-in email guide](/blog/client-check-in-email/) has templates for that conversation.",
    },
    { t: "h2", id: "templates", text: "Templates: 6 keep-in-touch emails you can copy" },
    { t: "p", text: "Swap the brackets for real details. Specific beats polished every time." },
    {
      t: "template",
      label: "1. Sharing an idea",
      when: "Key accounts, monthly",
      subject: "An idea for [their project or goal]",
      body: "Hi [Name],\n\nI came across [article / example / tool] and thought of what you said about [goal]: [link].\n\nThe part that stood out for you is probably [one-line takeaway]. Happy to talk through how it could work for [company] if useful.\n\nBest,\n[Your name]",
    },
    {
      t: "template",
      label: "2. A results update after a project",
      when: "1 to 3 months after delivery",
      subject: "How [project] is doing",
      body: "Hi [Name],\n\nI was looking at [project] this week and wanted to share where it's landed: [specific, measured result].\n\nIs there anything you'd like us to adjust while it's fresh?\n\nThanks again for the work together,\n[Your name]",
    },
    {
      t: "template",
      label: "3. A quarterly goals check",
      when: "Past clients, every quarter",
      subject: "Your priorities for [quarter]",
      body: "Hi [Name],\n\nA quick one as the quarter starts: what's the main thing your team is focused on?\n\nI'm asking because we've been helping [similar companies] with [relevant problem], and I'd like to send anything useful your way.\n\n[Your name]",
    },
    {
      t: "template",
      label: "4. Reconnecting after a long silence",
      when: "Dormant clients, twice a year",
      subject: "It's been a while",
      body: "Hi [Name],\n\nIt's been a few months since we worked on [project], and I realized I hadn't asked how things turned out.\n\nHow is [the thing we built / the team / the launch] going? No agenda, I'd just like to hear.\n\nAll the best,\n[Your name]",
    },
    {
      t: "template",
      label: "5. Congratulations",
      when: "When you see good news",
      subject: "Congratulations on [news]",
      body: "Hi [Name],\n\nJust saw the news about [promotion / launch / funding]. Congratulations, that's a big step, and well deserved after [something specific you know about].\n\nIf there's anything I can do to help with what comes next, let me know.\n\n[Your name]",
    },
    {
      t: "template",
      label: "6. Thanking a client for a referral",
      when: "Within a day of the referral",
      subject: "Thank you for the introduction",
      body: "Hi [Name],\n\nThank you for introducing me to [referral]. We've set up a first call for [day], and I'll make sure they're well looked after.\n\nReferrals like this mean a lot to a business our size. I owe you one.\n\n[Your name]",
    },
    {
      t: "figure",
      photo: { name: "pg-pricing-hero", fallback: "pg-pricing-hero", alt: "A cream envelope with a bronze stamp and wax seal on a teal desk" },
      caption: "The best keep-in-touch emails show you've been thinking about the client's goals, not your next invoice.",
    },
    { t: "h2", id: "tracking", text: "How do you keep track of every client?" },
    {
      t: "p",
      text: "You need three facts per client: when you last had a real conversation, what was left open, and when the next touch is due. A spreadsheet works if you update it. A CRM works if your whole team uses it. The method matters less than the weekly habit.",
    },
    {
      t: "checklist",
      title: "A 20-minute weekly client review",
      items: [
        "Sort your client list by last contact date, oldest first",
        "Flag anyone past their rhythm from the table above",
        "Check for open promises: a proposal, a quote, a document you said you'd send",
        "Pick one useful reason to contact each flagged client",
        "Schedule or send those emails before you close the list",
      ],
    },
    {
      t: "p",
      text: "If you met someone recently, a prompt thank-you note sets the tone for everything after it; see our [thank-you email after a meeting](/blog/thank-you-email-after-meeting/) templates.",
    },
    { t: "h2", id: "mistakes", text: "Common mistakes" },
    {
      t: "ul",
      items: [
        "**Only getting in touch to sell.** If every email has a pitch in it, clients learn to skip your name.",
        "**\"Just checking in\" with nothing to offer.** Give a reason, or wait until you have one.",
        "**Mass newsletters as the only contact.** They're fine as an extra, but they aren't a relationship.",
        "**Waiting until renewal time.** The first email in six months shouldn't be the one asking for money.",
        "**Forgetting what was left open.** Nothing cools a relationship faster than a promise you didn't keep.",
        "**Chasing a reply too hard.** One gentle nudge is fine. For when and how, see [following up after no response](/blog/follow-up-email-after-no-response/).",
      ],
    },
    { t: "h2", id: "mailpilot", text: "How MailPilot AI helps you stay in touch" },
    {
      t: "p",
      text: "The hard part of staying in touch is noticing who has gone quiet. [MailPilot AI's relationship intelligence](/features/relationship-intelligence/) builds a profile for every contact from your email history and gives each relationship a score from recency, frequency and response rate, so the clients slipping away are easy to spot. There's no CRM to fill in.",
    },
    {
      t: "p",
      text: "Open a contact and you'll see their history and an AI summary of your latest thread: the core issue, what was discussed and the next action. Add notes for each contact, such as \"formal tone\" or \"always copy Jon\", and drafts follow them. When a client doesn't reply, MailPilot can draft a [follow-up](/features/email-follow-up-automation/) in your voice. Reply drafts always wait for your approval.",
    },
    {
      t: "p",
      text: "Consultants and agencies use it to keep every client relationship warm without a spreadsheet ([see how it works for consultants](/solutions/consultants/)). New accounts start with free credits ([pricing](/pricing/)).",
    },
    {
      t: "cta",
      title: "See which clients are going quiet",
      text: "MailPilot scores every relationship from your email history and drafts the follow-up in your voice. Free starter credits, no credit card.",
      href: "/features/relationship-intelligence/",
      label: "See relationship intelligence",
    },
  ],
  faqs: [
    {
      q: "How do you keep in touch with clients without being annoying?",
      a: "Give every message a reason the client will value, such as an idea, a result or a relevant piece of news, and keep it short. Match their preferred channel, avoid pitching in every email, and space contact to their pace rather than a fixed daily or weekly blast.",
    },
    {
      q: "How often should you check in with clients?",
      a: "Weekly or at each milestone during active work, monthly for key accounts between projects, and quarterly for past clients. Dormant clients can hear from you twice a year. Adjust to how quickly each client usually replies and how much the relationship matters to your business.",
    },
    {
      q: "How do you stay in touch with past clients?",
      a: "Send a short, useful email every quarter: a results update on work you did together, a relevant article, a question about their goals or congratulations on their news. Keep a list of past clients with last-contact dates so nobody drifts for a year without hearing from you.",
    },
    {
      q: "What do you say to a client you haven't spoken to in a while?",
      a: "Acknowledge the gap simply and ask one genuine question about their work, such as how a project you delivered is performing. Skip the apology and the sales pitch. A short, curious note with no agenda is the easiest kind of email to answer.",
    },
    {
      q: "What is a client touchpoint?",
      a: "A touchpoint is any moment a client hears from you: an email, a call, a meeting, a card or a comment on their post. Planned touchpoints, spaced on a regular rhythm and each with a clear reason, are what keep a relationship warm between projects.",
    },
  ],
  sources: [],
  supports: ["features/relationship-intelligence", "solutions/consultants"],
  related: ["client-check-in-email", "follow-up-email-after-no-response", "thank-you-email-after-meeting"],
};

export const recallEmail: BlogPost = {
  slug: "how-to-recall-an-email",
  category: "Guides",
  title: "How to recall an email",
  script: "in Gmail and Outlook",
  seo: {
    title: "How to Recall an Email in Gmail and Outlook (Steps and Limits)",
    description:
      "How to recall an email in Gmail and Outlook: Undo Send steps, Outlook's Recall Message, why recalls fail, send delays and what to write when it's too late.",
    keywords: ["how to recall an email", "unsend email Gmail", "recall email Outlook", "undo send Outlook", "recall a sent email"],
  },
  keyword: "how to recall an email",
  excerpt: "Gmail's Undo Send, Outlook's Recall Message, why recalls fail, and what to do when a message has already landed.",
  published: "2027-03-16",
  updated: "2027-03-16",
  author: "MailPilot Editorial Team",
  hero: { name: "blog-recall-hero", fallback: "pg-outlook-office", alt: "A professional pausing at a desk in an office corridor, hand raised to their mouth" },
  answer:
    "Here's how to recall an email: in Outlook, open the message from Sent Items and choose Recall Message. It works only when you and the recipient have Microsoft 365 work or school accounts in the same organization and the message is still unopened. Gmail can't pull back a delivered message; click Undo within your Undo Send window of up to 30 seconds.",
  takeaways: [
    "Gmail has no true recall. Undo Send holds your email for 5 to 30 seconds so you can cancel it.",
    "Outlook recall only works inside one Microsoft 365 organization, on messages nobody has opened.",
    "Personal Outlook.com and Gmail accounts can't use Outlook's recall at all.",
    "A send delay is the best insurance: set Gmail to 30 seconds and use Outlook's Undo send or delay rules.",
    "If it's too late, send a short, calm correction. Most mistakes are smaller than they feel.",
  ],
  body: [
    {
      t: "table",
      caption: "Can you pull it back?",
      head: ["Your setup", "Recall a delivered email?", "What you can do"],
      rows: [
        ["Gmail (personal or Workspace)", "No", "Undo Send: 5, 10, 20 or 30 seconds"],
        ["Outlook, Microsoft 365, same organization, unopened", "Yes", "Recall Message, or recall and replace"],
        ["Outlook, recipient outside your organization", "No", "Send a correction"],
        ["Outlook.com, Hotmail, Live", "No", "Undo send delay in Settings"],
        ["New Outlook for Windows", "Recall if Microsoft 365", "Undo send for up to 10 seconds"],
        ["Outlook for Mac", "No true recall", "Undo Send delay, up to 120 seconds"],
      ],
      note: "From Google and Microsoft help pages, checked November 2026. Menu names change, so check the current help article if a step doesn't match your screen.",
    },
    { t: "h2", id: "can-you-recall", text: "Can you really recall a sent email?" },
    {
      t: "p",
      text: "Usually not. Once an email reaches another company's mail server, it's out of your hands. What most people call recalling is really one of two things.",
    },
    {
      t: "ul",
      items: [
        "**A send delay.** Gmail's Undo Send and Outlook's Undo send hold the message for a few seconds before it leaves. Cancel in time and it never goes.",
        "**A true recall.** Outlook can delete unopened copies from recipients' mailboxes, but only when everyone is on Microsoft 365 in the same organization.",
      ],
    },
    { t: "p", text: "Knowing which one you have tells you how fast you need to act, and whether it's worth trying at all." },
    { t: "h2", id: "gmail", text: "How do you unsend an email in Gmail?" },
    {
      t: "ol",
      items: [
        "**On a computer:** right after you send, a \"Message sent\" notice appears at the bottom left. Click **Undo**.",
        "**In the Gmail app (Android or iPhone):** right after sending, you'll see \"Sent\" with an **Undo** option. Tap it.",
        "**The draft reopens.** Fix it, then send again or delete it.",
      ],
    },
    { t: "p", text: "The window is short, so set it to the maximum now, before you need it:" },
    {
      t: "ol",
      items: [
        "Open Gmail on a computer and click **Settings > See all settings**.",
        "Next to **Undo Send**, choose a cancellation period: 5, 10, 20 or 30 seconds.",
        "Click **Save changes** at the bottom of the page.",
      ],
    },
    {
      t: "callout",
      tone: "warn",
      title: "Once the window closes, it's gone",
      text: "Gmail has no way to pull a message back from someone else's inbox after the Undo Send period ends. Your only option then is a follow-up correction.",
    },
    { t: "h2", id: "outlook", text: "How do you recall a message in Outlook?" },
    {
      t: "p",
      text: "Recall needs a Microsoft 365 work or school account for both you and the recipient, in the same organization. Microsoft says personal accounts, including Outlook.com, Hotmail and Gmail, can't use it.",
    },
    { t: "h3", text: "New Outlook for Windows" },
    {
      t: "ol",
      items: [
        "Select **Sent Items**, then double-click the message to open it in its own window.",
        "On the ribbon, select **Recall Message**, then **OK**.",
        "Watch your inbox for a **Message Recall Report**. Its link shows whether the recall succeeded, is pending or failed.",
      ],
    },
    { t: "h3", text: "Classic Outlook for Windows" },
    {
      t: "ol",
      items: [
        "Go to **Sent Items** and double-click the message. Viewing it in the reading pane isn't enough.",
        "Classic ribbon: **Message** tab > **More Move Actions** > **Recall This Message**. Simplified ribbon: **More commands (...)** > **Actions** > **Recall This Message**.",
        "Choose **Delete unread copies of this message**, or **Delete unread copies and replace with a new message**, then **OK**.",
        "If you chose to replace it, write the corrected message and send it.",
      ],
    },
    {
      t: "p",
      text: "Microsoft says the recall report usually arrives within 30 seconds. If a recipient's mailbox is temporarily unavailable, Outlook keeps retrying for up to 24 hours before marking the recall as failed.",
    },
    { t: "h2", id: "why-failed", text: "Why did my Outlook recall fail?" },
    {
      t: "ul",
      items: [
        "**The recipient already opened it.** Recall only removes unopened copies.",
        "**They're outside your organization.** Recall works only within the same Microsoft 365 organization.",
        "**You use a personal account.** Outlook.com, Hotmail, Live and MSN addresses can't recall messages.",
        "**The message is protected.** Microsoft says messages protected by Azure Information Protection can't be recalled.",
        "**The command is missing.** No Recall option usually means you're not on an Exchange or Microsoft 365 account, or your organization has turned it off.",
      ],
    },
    { t: "h2", id: "send-delay", text: "How do you set up a send delay so this doesn't happen again?" },
    {
      t: "ul",
      items: [
        "**Gmail:** set Undo Send to 30 seconds (steps above).",
        "**New Outlook and Outlook.com:** go to **Settings > Mail > Compose and reply > Undo send**. Microsoft's new Outlook guidance says the undo option shows for up to 10 seconds.",
        "**Outlook for Mac:** **Outlook > Settings > Composing**, then set the delay. Options run from 5 seconds up to 120 seconds.",
        "**Classic Outlook for Windows:** create a rule for messages you send that defers delivery by a set number of minutes, up to 120. You can also hold a single message until a set time from its message options, under Delivery options.",
      ],
    },
    {
      t: "p",
      text: "A delay of even a minute catches most \"wrong attachment\" and \"wrong Sam\" moments, because that's exactly when you notice them.",
    },
    { t: "h2", id: "too-late", text: "What should you do if it's too late to recall?" },
    {
      t: "p",
      text: "Send a short correction, quickly and calmly. Don't over-apologize, and don't draw more attention to the mistake than it deserves. Our [email etiquette rules](/blog/email-etiquette-rules/) cover the tone; these templates cover the most common slips.",
    },
    {
      t: "template",
      label: "1. Wrong or missing attachment",
      when: "Reply in the same thread",
      subject: "Re: [Original subject]",
      body: "Hi [Name],\n\nApologies, I attached the wrong file. Here's the correct [document name].\n\nPlease disregard the earlier attachment.\n\nThanks,\n[Your name]",
    },
    {
      t: "template",
      label: "2. Wrong date, price or number",
      when: "As soon as you notice",
      subject: "Correction: [Original subject]",
      body: "Hi [Name],\n\nA quick correction to my last email: the [date / price / figure] should be [correct value], not [wrong value].\n\nEverything else stands. Sorry for any confusion.\n\n[Your name]",
    },
    {
      t: "template",
      label: "3. Sent to the wrong person",
      when: "To the unintended recipient",
      subject: "Re: [Original subject]",
      body: "Hi [Name],\n\nI sent you the email below by mistake; it was meant for someone else. Could you please delete it without forwarding it?\n\nThank you, and sorry for the clutter.\n\n[Your name]",
    },
    {
      t: "template",
      label: "4. Sent before it was finished",
      when: "Reply in the same thread",
      subject: "Re: [Original subject]",
      body: "Hi [Name],\n\nThat one went out before I'd finished, sorry. Here's the complete version:\n\n[Full message]\n\n[Your name]",
    },
    {
      t: "figure",
      photo: { name: "pg-how-hero", fallback: "pg-how-hero", alt: "A hand pressing a brass seal into bronze wax on a cream envelope" },
      caption: "Most send mistakes are noticed within seconds. A send delay turns those seconds into a chance to fix them.",
    },
    {
      t: "callout",
      tone: "note",
      title: "If confidential data went to the wrong person",
      text: "A correction email isn't enough when personal, financial or client data is involved. Tell your manager or IT or security team straight away; your organization may have reporting duties.",
    },
    { t: "h2", id: "mistakes", text: "Common mistakes" },
    {
      t: "ul",
      items: [
        "**Relying on recall for external email.** It won't reach clients or anyone outside your Microsoft 365 organization.",
        "**Leaving Undo Send at the default.** Set it to the longest option today.",
        "**Sending a long, anxious apology.** A two-line correction is calmer and draws less attention.",
        "**Recalling and replacing without checking the report.** If the recall failed, the recipient now has two versions; follow up to say which one counts.",
        "**Writing important emails in a rush.** A quick re-read of names, numbers and attachments prevents most of these. Our guide to [writing a professional email](/blog/how-to-write-a-professional-email/) includes a pre-send check.",
      ],
    },
    { t: "h2", id: "mailpilot", text: "How MailPilot AI helps you catch mistakes before they send" },
    {
      t: "p",
      text: "MailPilot AI can't recall an email; nothing can, once a message has been opened in someone else's inbox. What it does is put a review step in front of your replies. MailPilot drafts every reply in your voice, and reply drafts always wait for your approval. You see the original email next to the draft, edit the subject and body, and only then press send.",
    },
    {
      t: "p",
      text: "That habit of reviewing a ready draft, rather than dashing off a reply between meetings, is the best protection against a message you'd want back. If you use Semi-automatic mode, follow-ups can send on their own within per-contact limits, so keep sensitive contacts on approval only. MailPilot works with [Gmail](/integrations/gmail/) and [Outlook](/integrations/outlook/), and email always goes from your own address. See [how drafts are written in your voice](/features/ai-email-writer/) and [what MailPilot can access](/security/).",
    },
    {
      t: "cta",
      title: "Review every reply before it goes",
      text: "MailPilot drafts replies in your voice inside Gmail and waits for your approval. Free starter credits, no credit card.",
      href: "/integrations/gmail/",
      label: "See MailPilot for Gmail",
    },
  ],
  faqs: [
    {
      q: "Can you unsend an email in Gmail after 30 seconds?",
      a: "No. Thirty seconds is the longest Undo Send period Gmail offers, and once it ends the message is delivered. After that, the only option is a short follow-up correction. Set the period to 30 seconds in Settings so you have the most time to catch mistakes.",
    },
    {
      q: "Can you recall an email sent from Outlook to a Gmail address?",
      a: "No. Outlook's recall works only when you and the recipient both have Microsoft 365 work or school accounts in the same organization. A message sent to Gmail, or to any outside company, can't be recalled. Send a brief correction in the same thread instead.",
    },
    {
      q: "How long do you have to recall an email in Outlook?",
      a: "There's no fixed time limit, but recall only removes copies that haven't been opened, so act immediately. If a recipient's mailbox is temporarily unavailable, Outlook keeps retrying for up to 24 hours. Check the Message Recall Report to see whether it worked.",
    },
    {
      q: "Why don't I see a recall option in Outlook?",
      a: "You're probably using a personal account such as Outlook.com or Hotmail, or an account that isn't on Exchange or Microsoft 365. Your organization may also have turned the feature off. Personal accounts can use the Undo send delay in Settings instead.",
    },
    {
      q: "Can I unsend an email on my phone?",
      a: "Yes, in the Gmail app on Android or iPhone. Right after you send, a Sent notice appears with an Undo option; tap it straight away, because it only shows briefly. If you miss it, send a short correction in the same thread.",
    },
  ],
  sources: [
    { label: "Gmail Help: Undo sending your email", url: "https://support.google.com/mail/answer/2819488" },
    { label: "Microsoft Support: Recall or replace an email message that you sent", url: "https://support.microsoft.com/en-us/office/recall-or-replace-an-email-message-that-you-sent-35027f88-d655-4554-b4f8-6c0729a723a0" },
    { label: "Microsoft Support: How to recall an email in Outlook: requirements, limitations and steps", url: "https://support.microsoft.com/en-us/outlook/mail/how-to-recall-an-email-in-outlook-requirements-limitations-steps" },
    { label: "Microsoft Support: New Outlook tips for executive admins and delegates (Undo send)", url: "https://support.microsoft.com/en-us/outlook/sharing/new-outlook-tips-for-executive-admins-and-delegates" },
    { label: "Microsoft Support: Undo Send in Outlook for Mac", url: "https://support.microsoft.com/en-us/outlook/undo-send-in-outlook-for-mac" },
    { label: "Microsoft Support: Delay or schedule sending email messages in Outlook", url: "https://support.microsoft.com/en-us/office/delay-or-schedule-sending-email-messages-in-outlook-026af69f-c287-490a-a72f-6c65793744ba" },
  ],
  supports: ["integrations/gmail", "integrations/outlook"],
  related: ["email-etiquette-rules", "how-to-write-a-professional-email", "follow-up-email-after-no-response"],
};

export const aiEmailEthics: BlogPost = {
  slug: "is-it-ok-to-use-ai-to-write-emails",
  category: "Productivity",
  title: "Is it OK to use AI to write emails?",
  script: "An honest answer",
  seo: {
    title: "Is It OK to Use AI to Write Emails? Ethics, Etiquette and Limits",
    description:
      "Is it OK to use AI to write emails? When it's fine, when to write it yourself, whether to disclose it, and how to handle accuracy and privacy. A balanced guide.",
    keywords: ["is it ok to use AI to write emails", "using AI to write emails ethics", "should I disclose AI written email", "AI email etiquette", "is it unprofessional to use AI for emails"],
  },
  keyword: "is it ok to use AI to write emails",
  excerpt: "When AI help is fine, when to write it yourself, whether to disclose it, and the accuracy and privacy checks that matter.",
  published: "2027-03-23",
  updated: "2027-03-23",
  author: "MailPilot Editorial Team",
  hero: { name: "blog-aiethics-hero", fallback: "pg-writer-hero", alt: "A person thoughtfully reading over a letter at a wooden desk by a window" },
  answer:
    "Is it OK to use AI to write emails? Yes, in most work situations, as long as you read, edit and own every message before it goes out. AI is well suited to routine replies, structure and tone. Write personal, sensitive or high-stakes messages yourself, check every fact, keep confidential data out of unapproved tools and follow your employer's AI policy.",
  takeaways: [
    "AI help is fine for routine email when you review every draft and stand behind it.",
    "The more personal the message, the less AI should do. Praise, condolences and apologies need your words.",
    "Research suggests heavy AI use can make senders seem less sincere, especially in relationship messages.",
    "Disclose AI use when your employer requires it or when the reader would reasonably expect your own words.",
    "Check facts, names and promises, and only connect AI tools that meet your company's privacy rules.",
  ],
  body: [
    {
      t: "table",
      caption: "When AI help fits, and when it doesn't",
      head: ["Type of email", "Let AI help?", "Why"],
      rows: [
        ["Scheduling and logistics", "Yes, draft freely", "Low stakes, easy to check"],
        ["Status updates and summaries", "Yes, then check the facts", "AI is good at structure; you know the details"],
        ["Replies in a second language", "Yes, for clarity", "Helps you say what you mean"],
        ["Client complaints", "Outline only", "Tone and judgment matter more than speed"],
        ["Praise, thanks, condolences", "Light editing at most", "Readers expect your own words"],
        ["HR, legal, performance or layoffs", "Write it yourself and get it reviewed", "High stakes, high sensitivity"],
      ],
    },
    { t: "h2", id: "dishonest", text: "Is using AI to write emails dishonest?" },
    {
      t: "p",
      text: "Not by itself. Executives have had assistants draft their letters for generations, and nobody calls that lying. What matters is that the message says what you mean, the facts are right, and you take responsibility for it once it's sent.",
    },
    {
      t: "p",
      text: "It becomes dishonest when the reader is misled about something they care about. Claiming you wrote a heartfelt note yourself when you didn't, or using AI to pass off knowledge or effort you don't have, crosses the line. So does letting an AI make commitments on your behalf that you haven't read.",
    },
    { t: "h2", id: "do-people-mind", text: "Do people mind receiving AI-written emails?" },
    {
      t: "p",
      text: "Some do, depending on how much AI is involved and what the email is for. A 2025 study by researchers at the University of Florida and the University of Southern California asked about 1,100 professionals to judge emails from supervisors with different levels of AI help.",
    },
    {
      t: "ul",
      items: [
        "**Sincerity dropped with heavy AI use.** 83% saw supervisors as sincere when AI help was low, against 40% to 52% when it was high.",
        "**Professionalism held up better.** 95% rated low-AI messages professional, falling to 69% to 73% with heavy AI use.",
        "**Relationship messages suffered most.** The researchers suggest that congratulations, praise, motivation and personal feedback are best written with minimal AI.",
      ],
    },
    {
      t: "p",
      text: "Two caveats. The study looked at messages from managers, where trust and power play a bigger role than in a quick note to a colleague. Still, the direction is clear: light AI help is widely accepted, while heavy AI use in personal messages carries a real cost.",
    },
    { t: "h2", id: "disclose", text: "Should you tell people you used AI?" },
    {
      t: "p",
      text: "For routine emails that you've read and edited, most people don't add a note, in the same way nobody discloses spellcheck. Disclosure makes sense when:",
    },
    {
      t: "ul",
      items: [
        "your employer, client or industry has a policy that requires it;",
        "the content is substantially AI-generated and the reader would reasonably expect your own words, such as personal feedback;",
        "an AI tool is replying or following up on your behalf without you reviewing each message;",
        "someone asks you directly. Answer honestly.",
      ],
    },
    {
      t: "template",
      label: "A simple disclosure line",
      when: "Add to the end when it matters",
      subject: "(Your normal subject line)",
      body: "[Your message]\n\nI used an AI tool to help draft this and have reviewed it myself. Happy to talk it through by phone if anything's unclear.\n\n[Your name]",
    },
    { t: "h2", id: "accuracy", text: "What are the accuracy risks?" },
    {
      t: "p",
      text: "AI writes fluently, which makes mistakes easy to miss. It can get a date wrong, invent a detail that wasn't in the thread, misread who asked for what, or promise something you never agreed to. The sender owns every word, whoever drafted it.",
    },
    {
      t: "p",
      text: "Watch the tone as well as the facts. AI drafts often soften bad news until the point gets lost, or sound more enthusiastic than you feel. If a reply would surprise the reader coming from you, rewrite it.",
    },
    {
      t: "checklist",
      title: "Read every AI draft for these five things",
      items: [
        "Names, titles and company names are spelled correctly",
        "Dates, times, prices and figures match the thread",
        "Every question in the original email is answered",
        "No commitment you haven't agreed to (deadlines, discounts, deliverables)",
        "It sounds like you, without generic filler phrases",
      ],
    },
    { t: "h2", id: "privacy", text: "What about privacy and confidential information?" },
    {
      t: "p",
      text: "Before you paste a client thread into a chatbot, check two things: your employer's AI policy and the tool's privacy terms. Look for whether what you share can be used to train the provider's models, who can see it and how long it's kept. If your company provides an approved AI tool, use that instead of a personal account.",
    },
    {
      t: "p",
      text: "For tools that connect directly to your inbox, Google treats permission to read Gmail as a restricted scope, so those apps must pass verification and an independent CASA security assessment. Our guide explains [what to check before connecting AI to Gmail](/blog/is-it-safe-to-connect-ai-to-gmail/).",
    },
    { t: "h2", id: "when-not", text: "When should you not use AI to write an email?" },
    {
      t: "ul",
      items: [
        "**Condolences, apologies for serious mistakes and personal thanks.** The point of these is that you wrote them.",
        "**Performance feedback, layoffs and disciplinary matters.** They need care, context and often HR or legal review.",
        "**Anything containing data you're not allowed to share** with the tool, such as health records or unreleased financials.",
        "**When you don't understand the topic.** If you can't check the draft, you can't vouch for it.",
        "**Delicate negotiations.** Every word is a signal, and you need to choose them.",
      ],
    },
    {
      t: "figure",
      photo: { name: "pg-security-hero", fallback: "pg-security-hero", alt: "A bronze wax seal with a lock emblem on a cream envelope" },
      caption: "Treat client emails like client files: share them only with tools your organization has approved.",
    },
    {
      t: "template",
      label: "Team guidelines for AI-assisted email",
      when: "Share with your team",
      subject: "How we use AI for email",
      body: "1. AI can draft routine replies, summaries and scheduling emails.\n2. A person reads and edits every AI draft before it's sent.\n3. We write praise, condolences, feedback and HR or legal emails ourselves.\n4. We only use AI tools approved by [IT / security].\n5. We never paste [client data / health data / financials] into unapproved tools.\n6. If anyone asks whether AI helped, we answer honestly.\n\nQuestions: [contact]",
    },
    { t: "h2", id: "mistakes", text: "Common mistakes" },
    {
      t: "ul",
      items: [
        "**Sending without reading.** It's the single fastest way to lose trust.",
        "**Letting AI write the personal emails and doing the boring ones yourself.** Flip it.",
        "**Generic voice.** \"I hope this email finds you well\" is the giveaway. Our guide to [making AI write in your voice](/blog/ai-write-emails-in-your-voice/) shows how to fix it.",
        "**Pasting confidential threads into free tools** without checking how they handle data.",
        "**Hiding AI use when asked.** A direct question deserves a direct answer.",
        "**Never writing anything yourself.** Keep your own writing skills in use for the messages that matter most.",
      ],
    },
    { t: "h2", id: "mailpilot", text: "How MailPilot AI keeps you in charge" },
    {
      t: "p",
      text: "We built MailPilot AI around the rules above. [The AI email writer](/features/ai-email-writer/) drafts replies in your own voice from a Persona you set up once, and every reply draft waits for your approval. You read it next to the original email, edit it and decide whether it goes. Per-contact instructions let you set the tone for each person, and you can pause any contact or thread.",
    },
    {
      t: "p",
      text: "On privacy, MailPilot is CASA certified, encrypts data with AES-256 and follows Google's Limited Use rules: your Gmail data is never used for ads or to train general AI models. OAuth tokens are deleted within 24 hours of revoking access. The detail is on our [security page](/security/), and [how it works](/how-it-works/) covers setup. For the personal emails on the list above, MailPilot gives you a starting draft at most; the words that matter should still be yours.",
    },
    {
      t: "p",
      text: "If you're still choosing a tool, our [comparison of AI email assistants](/blog/best-ai-email-assistants/) sets out what each one does with your data.",
    },
    {
      t: "cta",
      title: "AI drafts. You decide.",
      text: "MailPilot drafts replies in your voice and nothing sends without your approval. Free starter credits, no credit card.",
      href: "/features/ai-email-writer/",
      label: "See the AI email writer",
    },
  ],
  faqs: [
    {
      q: "Is it unprofessional to use AI to write emails?",
      a: "No, not for routine work email that you review and edit. It can look unprofessional when drafts go out unread, sound generic or contain mistakes. Research also suggests heavy AI use makes managers seem less sincere, so keep personal and relationship messages mostly in your own words.",
    },
    {
      q: "Can people tell if an email was written by AI?",
      a: "Sometimes. Generic openings, overly polished phrasing and answers that miss the point are common giveaways. A draft that follows your own voice, answers every question and includes details only you would know reads like you. Reviewing and editing each draft matters more than hiding anything.",
    },
    {
      q: "Do I have to disclose that I used AI to write an email?",
      a: "Usually not for routine emails you've reviewed, unless your employer, client or industry requires it. Disclose when the content is substantially AI-generated and the reader would expect your own words, when AI sends on your behalf unreviewed, or whenever someone asks directly.",
    },
    {
      q: "Is it safe to paste work emails into ChatGPT?",
      a: "Only if your employer allows it and you've checked the tool's privacy settings and terms. Look at whether conversations can be used for model training, who can access them and how long they're kept. Never paste data your company classifies as confidential into an unapproved tool.",
    },
    {
      q: "What emails should you never write with AI?",
      a: "Condolences, serious apologies, personal thanks, performance feedback, layoffs and disciplinary messages are best written yourself. So is any email containing data you can't share with the tool, or on a topic you don't understand well enough to check the draft line by line.",
    },
  ],
  sources: [
    { label: "University of Florida News, \"Is writing with AI at work undermining your credibility?\" (August 2025), on Cardon and Coman, International Journal of Business Communication", url: "https://news.ufl.edu/2025/08/writing-ai-work/" },
    { label: "Google for Developers: Restricted scope verification", url: "https://developers.google.com/identity/protocols/oauth2/production-readiness/restricted-scope-verification" },
  ],
  supports: ["features/ai-email-writer", "security"],
  related: ["ai-write-emails-in-your-voice", "is-it-safe-to-connect-ai-to-gmail", "best-ai-email-assistants"],
};

export const executiveInbox: BlogPost = {
  slug: "executive-inbox-management",
  category: "Productivity",
  title: "Executive inbox management:",
  script: "a playbook for EAs, executives and AI",
  seo: {
    title: "Executive Inbox Management: The EA and AI Delegation Playbook",
    description:
      "Executive inbox management made simple: who handles what, safe delegate access, a daily triage routine, an EA agreement template and where AI fits.",
    keywords: ["executive inbox management", "manage executive email", "executive assistant email management", "email delegation", "AI for executive assistants"],
  },
  keyword: "executive inbox management",
  excerpt: "Split the work between assistant, AI and executive, set up access the safe way, and run a daily routine that keeps the inbox under control.",
  published: "2027-03-30",
  updated: "2027-03-30",
  author: "MailPilot Editorial Team",
  hero: { name: "pg-exec-hero", fallback: "pg-exec-hero", alt: "A woman executive reading a document in a corner office at dusk" },
  answer:
    "Executive inbox management is a shared system in which an assistant, software or both sort an executive's email so only the decisions that need the executive reach them. It rests on delegated access rather than a shared password, written rules for what the assistant handles or escalates, a daily triage routine and drafts the executive approves before anything sensitive goes out.",
  takeaways: [
    "Split email three ways: what the EA handles, what AI prepares and what only the executive decides.",
    "Use Gmail or Outlook delegation, never a shared password.",
    "Write a one-page inbox agreement covering escalation, tone, VIPs and confidentiality.",
    "Run a morning sweep, a midday check and an end-of-day close, plus a weekly review together.",
    "Let AI draft and summarize, but keep external and sensitive replies on approval.",
  ],
  body: [
    {
      t: "table",
      caption: "Who handles what",
      head: ["Email type", "EA", "AI", "Executive"],
      rows: [
        ["Meeting requests", "Schedules within agreed rules", "Flags calendar conflicts", "Only for VIPs or exceptions"],
        ["Sales pitches and unsolicited outreach", "Declines or files", "Can sort and draft polite declines", "Never"],
        ["Status updates and FYIs", "Files, summarizes key points", "Summarizes threads", "Reads the summary"],
        ["Approvals and decisions", "Prepares context and a recommendation", "Drafts a reply for review", "Decides"],
        ["Board, investor, legal, HR", "Flags immediately", "Keep out of automation", "Handles personally"],
        ["Personal email", "Only if agreed", "Keep out of automation", "Handles personally"],
      ],
    },
    { t: "h2", id: "what-it-involves", text: "What does managing an executive's inbox involve?" },
    {
      t: "p",
      text: "It's a filtering job. Microsoft's 2025 Work Trend Index found the average worker receives **117 emails a day**, most skimmed in under a minute, and that 40% of people online at 6 am are reviewing email for the day's priorities. When the reader is an executive, every slow reply also holds up the people waiting on a decision.",
    },
    {
      t: "p",
      text: "The aim isn't an empty inbox. It's that the executive spends their email time only on what needs their judgment, and nothing important waits because it was buried. For the wider picture, see our [email statistics roundup](/blog/email-statistics-time-spent/).",
    },
    { t: "h2", id: "access", text: "How do you set up delegate access safely?" },
    {
      t: "p",
      text: "Never share a password. Both Gmail and Outlook have proper delegation, which keeps a record of who did what and can be removed in one step.",
    },
    { t: "h3", text: "Gmail delegation" },
    {
      t: "ul",
      items: [
        "A delegate can read, send and delete email in the executive's account, but can't chat as them or change their password.",
        "Set it up on a computer: **Settings > See all settings > Accounts** (or Accounts and Import) **> Grant access to your account > Add another account**.",
        "On work or school accounts, your admin must turn delegation on, and delegates must be in your organization. Personal Gmail allows up to 10 delegates.",
        "When a delegate sends, their own email address appears on the message, so recipients can see who sent it.",
        "The delegate has a week to accept the invitation, and access can take up to 24 hours to start, so set it up before the first busy day.",
      ],
    },
    { t: "h3", text: "Outlook delegation" },
    {
      t: "ul",
      items: [
        "Delegate access needs a Microsoft 365 work or school account or Exchange Online.",
        "Permission levels: **Reviewer** (read), **Author** (read and create) and **Editor** (also change and delete the executive's items).",
        "Delegates can respond to email and meeting requests on the executive's behalf. \"Send as\" permission can only be set by your admin.",
      ],
    },
    {
      t: "p",
      text: "Agree with IT whether the assistant sends \"on behalf of\" the executive or as them, and keep it consistent so recipients know who they're dealing with. Our [Gmail filters and labels guide](/blog/gmail-filters-and-labels/) helps set up the folders below.",
    },
    { t: "h2", id: "agreement", text: "What should an EA and executive agree on?" },
    {
      t: "p",
      text: "Most delegation problems come from rules that were never written down. Spend 30 minutes on a one-page agreement and review it monthly for the first quarter.",
    },
    {
      t: "template",
      label: "One-page inbox agreement",
      when: "Fill in together, review monthly",
      subject: "Inbox agreement: [Executive] and [Assistant]",
      body: "1. [Assistant] handles without asking: [scheduling, vendor replies, declines, receipts].\n2. Escalate the same day: [board, investors, top clients, legal, press].\n3. Escalate immediately by text or call: [anything urgent from the list above].\n4. VIPs who always reach [Executive] directly: [names].\n5. Tone when writing as or for [Executive]: [e.g. warm, brief, first names, sign-off \"Best, A\"].\n6. Reply time: [same day, even with a holding note].\n7. Never open or move: [personal folders, HR, medical].\n8. AI tools allowed: [names], drafts only, no auto-send on external email.\n9. Weekly review: [day, time, 15 minutes].",
    },
    { t: "h2", id: "triage", text: "How should you triage an executive's inbox every day?" },
    {
      t: "p",
      text: "Give every email one of four homes: **Needs you** (decisions only the executive can make), **Waiting** (sent, expecting a reply), **To read** (useful, not urgent) and archive. Fewer folders means faster sorting.",
    },
    {
      t: "ol",
      items: [
        "**Morning sweep (before the executive starts).** Clear overnight mail, flag the few items that need them today, and send a short briefing note.",
        "**Midday check.** Catch anything urgent, confirm meeting changes and chase replies due today.",
        "**End-of-day close.** Empty the inbox into the four homes, send holding notes for anything waiting on the executive, and set tomorrow's first item.",
        "**Weekly review (15 minutes together).** Go through Waiting, check that VIPs heard back, and adjust the agreement.",
      ],
    },
    {
      t: "template",
      label: "Morning briefing note from the EA",
      when: "Daily, before the first meeting",
      subject: "Today: 3 decisions, 2 heads-ups",
      body: "Good morning [Name],\n\nNeeds you today:\n1. [Decision], context in [thread]. My suggestion: [recommendation].\n2. [Approval] by [time].\n3. Reply to [VIP] about [topic]. Draft is ready for you.\n\nHeads-up:\n• [Meeting] moved to [time].\n• [Person] is waiting on [item] since [day].\n\nEverything else is handled or filed.\n[Assistant]",
    },
    {
      t: "template",
      label: "Holding reply sent by the EA",
      when: "When the executive needs time",
      subject: "Re: [Original subject]",
      body: "Hi [Name],\n\nThanks for this. [Executive] has seen it and will come back to you by [day]. If anything changes before then, I'm your best contact.\n\nBest,\n[Assistant], on behalf of [Executive]",
    },
    { t: "h2", id: "ai", text: "Where does AI fit alongside an executive assistant?" },
    {
      t: "p",
      text: "AI is good at the first pass: summarizing long threads, sorting the day's mail, drafting routine replies and spotting threads that have gone quiet. An EA brings judgment: knowing who matters, reading politics, protecting the calendar and handling people. The executive decides.",
    },
    {
      t: "p",
      text: "Set a few ground rules. Keep AI on draft-only for external replies. Keep board, legal, HR and personal email out of automation. And check the tool's security before connecting the executive's account. Our piece on [whether it's OK to use AI to write emails](/blog/is-it-ok-to-use-ai-to-write-emails/) covers the ethics and disclosure side.",
    },
    {
      t: "figure",
      photo: { name: "crew-exec", fallback: "crew-exec", alt: "An executive in an ivory blazer in a corner office at dusk" },
      caption: "A five-minute morning briefing beats an hour of inbox scrolling.",
    },
    { t: "h2", id: "cover", text: "What happens when the assistant is away or leaves?" },
    {
      t: "p",
      text: "Plan for it before it happens. Name a backup person for holidays and sick days, give them the same written agreement, and add them as a delegate in advance rather than on the morning they're needed.",
    },
    {
      t: "p",
      text: "When an assistant moves on, remove their delegate access the same day and review any inbox rules or filters they created. Then walk the new assistant through the agreement, the VIP list and a week of past briefing notes. If the inbox has piled up in between, our guide to [catching up on email after time away](/blog/catch-up-on-email-after-vacation/) gives you a fast reset.",
    },
    { t: "h2", id: "mistakes", text: "Common mistakes" },
    {
      t: "ul",
      items: [
        "**Sharing a password instead of delegating.** It breaks security policy and leaves no record of who sent what.",
        "**No written escalation rules.** The EA guesses, and either over-escalates or misses something big.",
        "**Too many folders.** If sorting takes thought, it doesn't get done.",
        "**The executive working the inbox in parallel.** Two people replying to the same thread causes confusion; agree who owns what.",
        "**Letting AI auto-send external email.** Drafts are cheap to review; a wrong reply to an investor isn't.",
        "**Never reviewing the system.** Priorities change. A 15-minute weekly check keeps the rules current.",
      ],
    },
    { t: "h2", id: "mailpilot", text: "How MailPilot AI supports executives and their assistants" },
    {
      t: "p",
      text: "MailPilot AI does the first pass for you. Its [morning briefing](/features/ai-email-summary/) sorts the inbox into urgent alerts, today's agenda, deadlines and payments, action items and general updates, across every connected inbox, with each item tagged by inbox. Replies are drafted in the executive's own voice and wait for approval. If an email proposes a time that clashes with the calendar, MailPilot pauses and asks how to handle it ([calendar assistant](/features/ai-calendar-assistant/)).",
    },
    {
      t: "p",
      text: "It also keeps a profile and score for every relationship, so important contacts who've gone quiet stand out ([relationship intelligence](/features/relationship-intelligence/)). It doesn't replace an assistant's judgment; it gives the executive, and whoever helps them, a cleaner starting point each morning. See [how MailPilot works for executives](/solutions/executives/), more on [the briefing](/features/ai-email-summary/), and [our security page](/security/).",
    },
    {
      t: "cta",
      title: "Start each day with a briefing, not a backlog",
      text: "MailPilot sorts what's urgent, drafts replies in your voice and flags calendar clashes. Free starter credits, no credit card.",
      href: "/solutions/executives/",
      label: "See MailPilot for executives",
    },
  ],
  faqs: [
    {
      q: "What does an executive assistant do with email?",
      a: "An executive assistant sorts the executive's inbox, answers routine messages, schedules meetings, declines or files low-value mail and flags the few decisions that need the executive. Many also send a daily briefing, chase overdue replies and draft responses for the executive to approve.",
    },
    {
      q: "Should an executive assistant have access to the executive's email?",
      a: "Yes, through proper delegation rather than a shared password. Gmail and Outlook both let an executive grant delegate access that can be removed at any time. Pair it with a written agreement covering what the assistant may send, what to escalate and which folders stay private.",
    },
    {
      q: "How do you organize an executive's inbox?",
      a: "Keep it simple: a folder for decisions that need the executive, one for threads waiting on a reply, one for reading, and archive for everything else. Add filters for newsletters and receipts, and a VIP list so the most important senders are never missed.",
    },
    {
      q: "Can AI replace an executive assistant for email?",
      a: "Not fully. AI can summarize threads, sort mail and draft routine replies, which saves real time. It can't weigh relationships, office politics or judgment calls the way a good assistant does. The strongest setup uses AI for the first pass and a person for decisions.",
    },
    {
      q: "How often should an EA check the executive's inbox?",
      a: "At set times rather than constantly: a morning sweep before the executive starts, a midday check and an end-of-day close. Add alerts for VIP senders so urgent messages are seen at once, and a 15-minute weekly review with the executive.",
    },
  ],
  sources: [
    { label: "Microsoft WorkLab, \"Breaking down the infinite workday\" (Work Trend Index, June 2025)", url: "https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday" },
    { label: "Gmail Help: Set up mail delegation", url: "https://support.google.com/mail/answer/138350" },
    { label: "Microsoft Support: Allow someone else to manage your mail and calendar", url: "https://support.microsoft.com/en-us/office/allow-someone-else-to-manage-your-mail-and-calendar-41c40c04-3bd1-4d22-963a-28eafec25926" },
  ],
  supports: ["solutions/executives", "features/ai-email-summary"],
  related: ["how-to-manage-email-overload", "inbox-zero-method", "email-statistics-time-spent"],
};

export const batch4: BlogPost[] = [superhumanAlternatives, keepInTouchClients, recallEmail, aiEmailEthics, executiveInbox];
