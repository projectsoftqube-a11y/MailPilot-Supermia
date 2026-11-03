// Scheduled posts, batch 2. See docs/BLOG_CALENDAR.md for the dates. Each post publishes itself on its date.
import type { BlogPost } from "./types.ts";

const WORKLAB = {
  label: "Microsoft WorkLab, \"Breaking down the infinite workday\" (Work Trend Index, June 2025)",
  url: "https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday",
};

export const etiquettePost: BlogPost = {
  slug: "email-etiquette-rules",
  category: "Guides",
  title: "Email etiquette rules",
  script: "for everyday work email",
  seo: {
    title: "Email Etiquette Rules: 20 Dos and Don'ts for Work Email",
    description:
      "Email etiquette rules for work: practical dos and don'ts for subject lines, reply-all, tone, reply times and sign-offs, plus templates for awkward moments.",
    keywords: ["email etiquette rules", "professional email etiquette", "work email etiquette", "email etiquette dos and don'ts"],
  },
  keyword: "email etiquette rules",
  excerpt: "The habits that make work email quick to read and hard to misread, plus five templates for the awkward moments.",
  published: "2026-12-22",
  updated: "2026-12-22",
  author: "MailPilot Editorial Team",
  hero: { name: "pg-faq-hero", fallback: "pg-faq-hero", alt: "A stack of letters tied with twine beside a fountain pen and a magnifying glass" },
  answer:
    "Email etiquette rules are the shared habits that make work email quick to read and hard to misread. The core ones: write a specific subject line, put your point in the first two lines, use reply-all only when everyone needs the answer, keep your tone neutral, check names and attachments, and reply within one business day, even if only to say when you'll answer.",
  takeaways: [
    "Lead with the point: the subject line and first two lines should tell the reader what you need.",
    "Use reply-all only when every person on the thread needs your answer.",
    "Write as if your email will be forwarded, because it often is.",
    "Reply within one business day, even if it's only to say when you'll answer properly.",
    "When a thread gets tense or long, move it to a call and send a short written recap.",
  ],
  body: [
    {
      t: "table",
      caption: "The rules at a glance",
      head: ["Moment", "Do", "Avoid"],
      rows: [
        ["Subject line", "Say what the email is and what you need", "\"Quick question\" or a blank subject"],
        ["Opening", "Greet by name, then make your point", "Two lines of small talk before the ask"],
        ["Length", "Keep it to one phone screen", "Several topics in one email"],
        ["Recipients", "Put people who must act in To", "Copying everyone \"just in case\""],
        ["Reply-all", "Use it when the whole group needs the answer", "\"Thanks!\" to 40 people"],
        ["Tone", "Be plain, polite and specific", "All caps, sarcasm, \"per my last email\""],
        ["Attachments", "Name the file and say what's in it", "\"See attached\" with nothing attached"],
        ["Replying", "Answer within one business day", "Silence until you have the full answer"],
        ["Sign-off", "Match the other person's formality", "Long quotes or legal text in every reply"],
        ["Sensitive topics", "Call first, then confirm in writing", "Arguing over email"],
      ],
      note: "Norms vary by company, industry and country. When in doubt, mirror how the other person writes.",
    },
    { t: "h2", id: "what-is-email-etiquette", text: "What is email etiquette, and does it still matter?" },
    {
      t: "p",
      text: "Email etiquette is the set of habits that make your messages easy to read, easy to act on and hard to take the wrong way. It isn't about stiff formality. It's about respecting the reader's time.",
    },
    {
      t: "p",
      text: "That matters more as inboxes fill up. Microsoft's 2025 Work Trend Index found the average worker receives **117 emails a day** and skims most of them in under a minute. If your point isn't clear in those few seconds, it waits. Our [email statistics roundup](/blog/email-statistics-time-spent/) has more on how crowded inboxes have become.",
    },
    { t: "h2", id: "before-you-send", text: "What are the basic rules before you hit send?" },
    { t: "p", text: "Most etiquette problems start before the first word. Run through these six rules for any email that matters." },
    {
      t: "ol",
      items: [
        "**Check that email is the right channel.** Use it for clear requests, updates and anything that needs a record. Bad news, conflict and long back-and-forth discussions go better on a call.",
        "**Write a subject line that does a job.** \"Approval needed by Thursday: Q1 budget\" tells the reader what it is and when it's due. \"Following up\" tells them nothing.",
        "**Put the point in the first two lines.** Say what you need, then give the background. Readers on a phone may never scroll.",
        "**Keep one topic per email.** Two unrelated requests in one message usually means one gets missed. Send two short emails instead.",
        "**Name attachments and mention them.** Say what the file is and what you need the reader to do with it. Then check that it's attached.",
        "**Proofread the parts people notice.** Names, dates, numbers, prices and the reader's company name. A typo in someone's name stings more than a typo anywhere else.",
      ],
    },
    {
      t: "callout",
      tone: "tip",
      title: "Fill in the To field last",
      text: "Add recipients only after the email is written and checked. It stops a half-finished draft from going out by accident.",
    },
    { t: "h2", id: "cc-bcc-reply-all", text: "When should you use To, CC, BCC and reply-all?" },
    { t: "p", text: "Recipient fields send signals. Put someone in the wrong one and you either waste their time or leave them out of something they needed." },
    {
      t: "table",
      head: ["Field", "Use it for", "Watch out for"],
      rows: [
        ["To", "People who need to read and act", "So many names that nobody feels responsible"],
        ["CC", "People who should know but don't need to act", "Copying a manager to apply pressure"],
        ["BCC", "Group emails where people don't know each other", "Secretly copying someone on a private conversation"],
        ["Reply-all", "Answers the whole group needs", "Thank-yous, side comments and \"me too\""],
      ],
    },
    {
      t: "p",
      text: "A simple test before reply-all: would every person on the thread be glad they got your message? If the answer is no for even a few, reply only to the sender.",
    },
    {
      t: "p",
      text: "When someone introduces you, move the introducer to BCC in your first reply. They see that you followed up without getting the rest of the thread. Say you've done it, so nobody wonders where they went.",
    },
    { t: "h2", id: "tone", text: "How do you keep your tone polite but clear?" },
    {
      t: "p",
      text: "Email strips out your voice and face, so neutral sentences can read as cold and short ones can read as annoyed. A few habits help.",
    },
    {
      t: "ul",
      items: [
        "**Skip all caps.** It reads as shouting. Use bold for one key date or number if you must.",
        "**Go easy on exclamation marks and emoji.** One friendly exclamation mark is fine with people you know. Mirror the other person before using emoji at work.",
        "**Leave out sarcasm and in-jokes.** They rarely survive being forwarded to someone who wasn't there.",
        "**Drop passive-aggressive phrases.** \"Per my last email\" and \"As previously stated\" add heat and no information. Restate the point instead.",
        "**Write as if it will be forwarded.** Assume your boss, the client and a lawyer may all read it one day.",
        "**Wait before replying when you're upset.** Draft it, save it and reread it later. Most angry drafts get softer or never get sent.",
      ],
    },
    {
      t: "p",
      text: "If you write a lot of email, it helps to know your own defaults: how formal you are, how you greet people, what you never say. That's the idea behind the writing Persona in [MailPilot's AI email writer](/features/ai-email-writer/), which drafts in your style so you start from something that already sounds like you.",
    },
    { t: "h2", id: "reply-time", text: "How fast should you reply to a work email?" },
    {
      t: "p",
      text: "Within one business day is a widely shared expectation for work email, and faster for clients and anything urgent. You don't need the full answer to reply. A two-line holding reply that says when you'll get back to them is good manners in itself.",
    },
    {
      t: "p",
      text: "If you'll be away, set an out-of-office message with your return date and a backup contact; our [out-of-office message examples](/blog/out-of-office-message-examples/) cover holidays and longer leave. And if you'd rather know how fast you really reply than guess, [inbox analytics](/features/inbox-performance-overview/) can show your average response time and which emails are still waiting.",
    },
    { t: "h2", id: "templates", text: "Templates for awkward etiquette moments" },
    { t: "p", text: "These cover the moments where good manners are hardest to get right. Swap the brackets for your details." },
    {
      t: "template",
      label: "1. Holding reply when you need more time",
      when: "Same day",
      subject: "Re: [Original subject]",
      body: "Hi [Name],\n\nGot this, thanks. I need to check [detail] with [person or team] before I can answer properly.\n\nYou'll have a full reply by [day].\n\n[Your name]",
    },
    {
      t: "template",
      label: "2. Replying late",
      when: "When a reply slipped",
      subject: "Re: [Original subject]",
      body: "Hi [Name],\n\nApologies for the slow reply. To answer your question: [answer].\n\n[One line on the next step, if there is one.]\n\nBest,\n[Your name]",
    },
    {
      t: "template",
      label: "3. Correcting a mistake you sent",
      when: "As soon as you spot it",
      subject: "Correction: [Original subject]",
      body: "Hi all,\n\nA quick correction to my email from earlier: the [date / figure / link] should be [correct version], not [wrong version].\n\nEverything else stands. Sorry for the confusion.\n\n[Your name]",
    },
    {
      t: "template",
      label: "4. Moving an introducer to BCC",
      when: "Your first reply to an intro",
      subject: "Re: Intro: [Name] <> [Your name]",
      body: "Thanks, [Introducer] (moving you to BCC to spare your inbox).\n\nHi [Name], great to meet you. Would [day and time] or [day and time] work for a short call?\n\n[Your name]",
    },
    {
      t: "template",
      label: "5. Taking a tense thread to a call",
      when: "When the thread is going in circles",
      subject: "Re: [Original subject]",
      body: "Hi [Name],\n\nI think we'll sort this out faster by talking it through. Do you have 15 minutes on [day] at [time] or [time]?\n\nI'll send a short recap of what we agree afterwards.\n\nThanks,\n[Your name]",
    },
    {
      t: "figure",
      photo: { name: "persona-writer", fallback: "persona-writer", alt: "A woman reading a printed letter in an armchair by the window" },
      caption: "Reread the names, dates and attachments. They're the details people notice first.",
    },
    { t: "h2", id: "greetings-sign-offs", text: "How should you open and close a work email?" },
    {
      t: "p",
      text: "Use the person's name and match their level of formality. \"Hi Priya\" works for most modern business email. \"Dear Dr. Shah\" suits a first email to someone senior, in a formal field or for an official request. Once they reply with a first name and a casual tone, you can relax to match.",
    },
    {
      t: "p",
      text: "Close with a short sign-off and your name: \"Best\", \"Thanks\" or \"Kind regards\" all work. Keep the signature to your name, role, company and one way to reach you. For more options and when to use each, see [how to end an email](/blog/how-to-end-an-email/).",
    },
    { t: "h2", id: "mistakes", text: "Common email etiquette mistakes" },
    {
      t: "ul",
      items: [
        "**Vague subject lines.** \"Hi\" or \"Question\" gets opened last, if at all.",
        "**Burying the ask.** If your request is in paragraph four, many readers won't reach it.",
        "**Reply-all storms.** Answering a whole list to say thanks or \"please remove me\" makes it worse for everyone.",
        "**Forgetting the attachment.** Mention it in the text, then attach it before you finish writing.",
        "**Chasing too soon.** A reminder two hours after sending feels pushy. For timing that works, see our guide to [polite reminder emails](/blog/polite-reminder-email/).",
        "**Using email for conflict.** Long, heated threads rarely end well. Pick up the phone, then confirm in writing.",
      ],
    },
    { t: "h2", id: "mailpilot", text: "How can MailPilot AI help you keep good habits?" },
    {
      t: "p",
      text: "Good etiquette is mostly consistency: a clear point, the right tone, a timely reply and a follow-up that doesn't get forgotten. That's hard to keep up on a busy day. MailPilot AI, the email agent by SuperMIA, takes some of that load.",
    },
    {
      t: "p",
      text: "It drafts replies in [your own voice](/features/ai-email-writer/), using a Persona you set up once, and every reply waits for your approval before it goes. You can give standing instructions per contact, such as \"keep it under 80 words\" or \"always copy Jon\". When someone doesn't reply, it can draft the [follow-up](/features/email-follow-up-automation/) from the original thread so nothing slips. Our guide on [making AI write emails like you](/blog/ai-write-emails-in-your-voice/) explains the idea, and [how it works](/how-it-works/) walks through setup. New accounts start with free credits ([pricing](/pricing/)).",
    },
    {
      t: "cta",
      title: "Start every reply from a draft that sounds like you",
      text: "MailPilot drafts replies in your voice and waits for your approval. Free starter credits, no credit card.",
      href: "/features/ai-email-writer/",
      label: "See the AI email writer",
    },
  ],
  faqs: [
    {
      q: "What are the most important rules of email etiquette?",
      a: "The most important are a clear subject line, the main point in the first two lines, careful use of reply-all, a polite and neutral tone, and a reply within one business day. Proofreading names, dates and attachments before you send prevents most of the embarrassing mistakes people make.",
    },
    {
      q: "How quickly should you respond to a work email?",
      a: "Within one business day is a common expectation, and sooner for clients or urgent requests. If you need more time to answer properly, send a short holding reply that says when the full answer will arrive. That stops the sender from guessing, waiting or chasing you.",
    },
    {
      q: "Is it rude not to reply to an email?",
      a: "It can be, if the email was written to you personally and asked a question. A short reply, even \"Thanks, got it\" or \"Not for us, but thank you\", closes the loop. Mass emails, newsletters and threads where you were only copied don't usually need a reply.",
    },
    {
      q: "Is it OK to use emojis in work emails?",
      a: "Sometimes. With colleagues you know well, a single emoji is usually fine if your workplace uses them. Avoid them in first emails, with clients you haven't met, and in anything formal or sensitive. When in doubt, mirror the other person's style and leave them out.",
    },
    {
      q: "When should you use BCC in an email?",
      a: "Use BCC when you email a group of people who don't know each other, so their addresses stay private, or to move an introducer off a thread. Avoid using it to secretly copy someone on a conversation; if the other person finds out, it damages trust.",
    },
  ],
  sources: [WORKLAB],
  supports: ["features/ai-email-writer"],
  related: ["ai-write-emails-in-your-voice", "follow-up-email-after-no-response", "how-to-manage-email-overload"],
};

export const inboxZeroPost: BlogPost = {
  slug: "inbox-zero-method",
  category: "Productivity",
  title: "The inbox zero method:",
  script: "a realistic New Year reset",
  seo: {
    title: "Inbox Zero Method: A Realistic New Year Inbox Reset Guide",
    description:
      "The inbox zero method explained: what Merlin Mann meant, the five actions for every email, a one-hour New Year reset and how to stay near zero all year.",
    keywords: ["inbox zero method", "inbox zero", "how to get to inbox zero", "email bankruptcy", "New Year inbox reset"],
  },
  keyword: "inbox zero method",
  excerpt: "What Inbox Zero really means, the five decisions for every email, and a one-hour reset to start the year with a clear inbox.",
  published: "2026-12-29",
  updated: "2026-12-29",
  author: "MailPilot Editorial Team",
  hero: { name: "hero-desk", fallback: "hero-desk", alt: "A calm, sunlit desk with a sealed letter, a notebook and a laptop" },
  answer:
    "The inbox zero method is a way of processing email so your inbox stops holding undecided messages. Productivity writer Merlin Mann introduced it in 2006. For each email you choose one action: delete, delegate, respond, defer or do. The aim isn't an empty inbox every minute. It's knowing that every email has a decision attached and nothing important is hiding.",
  takeaways: [
    "Inbox Zero is about decisions, not a message count: every email gets an action.",
    "Use five actions: delete, delegate, respond, defer or do.",
    "If a reply takes two minutes or less, send it now. Bigger work goes on a list with a date.",
    "Start the year with an archive reset instead of wading through months of old mail.",
    "Process email in set blocks, two to four times a day, rather than all day long.",
  ],
  body: [
    {
      t: "checklist",
      title: "The one-hour New Year inbox reset",
      items: [
        "Archive everything older than 30 days in one go (it stays searchable)",
        "Unsubscribe from five newsletters you haven't opened in a month",
        "Flag anything older that you know still needs you",
        "Process what's left with the five actions below",
        "Turn off new-email notifications on your phone and laptop",
        "Put two or three email blocks a day on your calendar",
      ],
    },
    { t: "h2", id: "what-is-inbox-zero", text: "What is Inbox Zero, really?" },
    {
      t: "p",
      text: "Inbox Zero is an email method from Merlin Mann, who wrote a series about it on his productivity blog 43 Folders in 2006 and gave a Google Tech Talk on it in 2007. The core idea is simple: your inbox is where email arrives, not where it lives.",
    },
    {
      t: "p",
      text: "Over time, the name came to mean a literally empty inbox, and that's where many people give up. Mann himself has said the term is often misunderstood and that he doesn't keep his own inbox empty. The \"zero\" is about having nothing undecided, not about winning a race against new mail.",
    },
    {
      t: "callout",
      tone: "note",
      title: "Why the new year is a good time to start",
      text: "The days around New Year are often quieter in the inbox, and a fresh system is easier to keep when it starts with a clean slate. If you're also coming back from time off, our guide to [catching up on email after vacation](/blog/catch-up-on-email-after-vacation/) covers the first day back.",
    },
    { t: "h2", id: "five-actions", text: "What are the five actions in the inbox zero method?" },
    {
      t: "p",
      text: "Mann's framework gives every email one of five outcomes. MIT Sloan Management Review's summary lists them as delete, delegate, respond, defer or do. Pick one, act on it, and move to the next message.",
    },
    {
      t: "table",
      head: ["Action", "When to use it", "What it looks like"],
      rows: [
        ["Delete or archive", "No action needed, now or later", "Newsletters you've skimmed, FYIs, finished threads"],
        ["Delegate", "Someone else should handle it", "Forward with a one-line ask and a date"],
        ["Respond", "A reply takes about two minutes or less", "Answer now, then archive"],
        ["Defer", "It needs more time or input", "Move it to a task list with a date"],
        ["Do", "It's a task that happens to arrive by email", "Do it now if it's quick, or block time for it"],
      ],
    },
    {
      t: "p",
      text: "The point is speed. You aren't solving every email when you read it. You're deciding what it is, which takes seconds once it becomes a habit.",
    },
    { t: "h2", id: "from-thousands", text: "How do you get to inbox zero from thousands of emails?" },
    {
      t: "p",
      text: "Don't try to process a backlog of thousands one by one. You'll run out of energy by lunch and quit by February. Do a reset instead.",
    },
    {
      t: "ol",
      items: [
        "**Pick a cut-off date.** Thirty days back works for most people. Anything older has been dealt with, gone stale or will come back if it matters.",
        "**Archive everything before that date.** In Gmail, search for older_than:30d, select all the results and archive them. Archived mail stays searchable, so nothing is lost.",
        "**Scan the last 30 days by sender.** Look for clients, your manager and anyone waiting on you first. Flag those.",
        "**Apply the five actions to what remains.** Work from top to bottom. Most emails take seconds once you stop rereading them.",
        "**Send any overdue replies.** A short \"Sorry for the slow reply\" beats silence. Our [polite reminder email guide](/blog/polite-reminder-email/) covers the other side of this.",
        "**Write down deferred work.** Put deferred emails on a task list with a date, not in your head.",
      ],
    },
    {
      t: "callout",
      tone: "tip",
      title: "Email bankruptcy, the polite way",
      text: "If people may be waiting on you somewhere in the backlog, send a short note to key contacts saying you've reset your inbox and asking them to resend anything still open. Use it rarely. Done often, it shifts your work onto everyone else.",
    },
    {
      t: "template",
      label: "Inbox reset note to key contacts",
      when: "After archiving a large backlog",
      subject: "Starting the year with a clear inbox",
      body: "Hi [Name],\n\nI've cleared out my inbox for the new year, and I want to make sure nothing of yours fell through the cracks.\n\nIf you're waiting on anything from me, could you reply to this email with a quick line? I'll get back to you by [day].\n\nThanks, and happy new year,\n[Your name]",
    },
    {
      t: "template",
      label: "Defer reply: buying time without going silent",
      when: "When an email needs more than two minutes",
      subject: "Re: [Original subject]",
      body: "Hi [Name],\n\nThanks for this. It needs a proper look, so I've set time aside on [day].\n\nYou'll hear back from me by [day and time].\n\n[Your name]",
    },
    { t: "h2", id: "stay-near-zero", text: "How do you stay near zero all year?" },
    { t: "p", text: "Getting to zero once is the easy part. Staying close takes a few small habits." },
    {
      t: "ul",
      items: [
        "**Process in blocks.** Check email two to four times a day at set times instead of reacting to every alert. Microsoft's 2025 research found workers are interrupted about every two minutes in core hours by a meeting, email or notification.",
        "**Turn off new-mail alerts.** Keep alerts for the few people who really need to reach you fast, and use calls or chat for anything urgent.",
        "**Unsubscribe as you go.** Every newsletter you don't read is a decision you'll make again next week.",
        "**Use filters for predictable mail.** Receipts, notifications and reports can skip the inbox and land in a label.",
        "**Keep the list, not the inbox, as your to-do.** Your inbox shows what arrived. Your task list shows what matters.",
        "**Do a weekly review.** Ten minutes on Friday to clear stragglers and check deferred items.",
      ],
    },
    {
      t: "figure",
      photo: { name: "pg-briefing-coffee", fallback: "pg-briefing-coffee", alt: "A man reading a short printed list over coffee in a café" },
      caption: "Zero isn't an empty inbox. It's knowing what needs you today.",
    },
    { t: "h2", id: "is-it-realistic", text: "Is Inbox Zero realistic for busy people?" },
    {
      t: "p",
      text: "For many people, a strictly empty inbox every day isn't realistic, and chasing it can become its own source of stress. A softer version works better: process to zero once or twice a day, and accept that new mail will arrive five minutes later.",
    },
    {
      t: "p",
      text: "It also depends on your role. Someone in sales or client work may need to answer quickly through the day, while a manager might batch email into two sessions. If your volume has simply outgrown any system, our guide to [managing email overload](/blog/how-to-manage-email-overload/) looks at the bigger fixes, and our [email etiquette guide](/blog/email-etiquette-rules/) covers how to set reply expectations with others.",
    },
    { t: "h2", id: "mistakes", text: "Common Inbox Zero mistakes" },
    {
      t: "ul",
      items: [
        "**Treating zero as the goal.** An empty inbox you check every five minutes isn't a win. Fewer, faster decisions are.",
        "**Using the inbox as a to-do list.** Deferred emails need a date and a place, or they sink.",
        "**Processing one email at a time, all day.** Constant checking breaks focus. Batch it.",
        "**Archiving without checking key senders.** Before a reset, scan for clients and your manager so nothing important vanishes.",
        "**Building a complex folder system.** Archive plus search beats 40 folders you never open.",
        "**Forgetting your own follow-ups.** Emails you sent that never got a reply are invisible in an empty inbox. Track them separately; see [how to follow up after no response](/blog/follow-up-email-after-no-response/).",
      ],
    },
    { t: "h2", id: "mailpilot", text: "How MailPilot AI makes Inbox Zero easier" },
    {
      t: "p",
      text: "The slowest part of the method is deciding what each email is. MailPilot AI's [morning briefing](/features/ai-email-summary/) does a first pass for you. It sorts your inbox into urgent alerts, today's meetings, deadlines and payments, action items you can mark done, and general updates. You see what needs a decision before you open a single thread.",
    },
    {
      t: "p",
      text: "The respond step gets faster too. Reply drafts are written in your voice and wait for your approval, and follow-ups can be drafted when people don't answer, so emails you sent don't drop out of view once your inbox is clear. Setup takes about 15 minutes; [how it works](/how-it-works/) shows each step. It connects to your existing inbox ([Gmail integration](/integrations/gmail/)), and new accounts start with free credits ([pricing](/pricing/)).",
    },
    {
      t: "cta",
      title: "Start each day knowing what needs you",
      text: "MailPilot's morning briefing sorts urgent items, deadlines, action items and meetings before you open your inbox.",
      href: "/features/ai-email-summary/",
      label: "See the morning briefing",
    },
  ],
  faqs: [
    {
      q: "What is Inbox Zero?",
      a: "Inbox Zero is an email method introduced by productivity writer Merlin Mann in 2006. Each email gets one decision, such as delete, delegate, respond, defer or do, so your inbox holds only mail you haven't looked at yet. The goal is fewer undecided emails, not a permanently empty inbox.",
    },
    {
      q: "Who came up with Inbox Zero?",
      a: "Merlin Mann, a productivity writer who ran the blog 43 Folders. He wrote a series of posts about it in 2006 and gave a Google Tech Talk on it in 2007. He has since said the idea is often misunderstood as keeping an empty inbox at all times.",
    },
    {
      q: "Is Inbox Zero worth it?",
      a: "For most people a relaxed version is worth it. Processing to zero once or twice a day cuts the stress of an overflowing inbox and makes important mail harder to miss. A strictly empty inbox at every moment usually isn't worth chasing, because constant checking costs focus.",
    },
    {
      q: "How do I get to inbox zero quickly?",
      a: "Archive everything older than about 30 days in one step, since archived mail stays searchable. Then scan recent mail for key senders, apply the five actions to what's left, and put deferred work on a task list with dates. Most people can finish this reset in one focused session.",
    },
    {
      q: "What does email bankruptcy mean?",
      a: "Email bankruptcy means archiving a backlog you can't realistically process, then asking key contacts to resend anything that still needs you. It gives an out-of-control inbox a fresh start. Use it rarely, and send a short note so nobody is left waiting on an answer that never comes.",
    },
  ],
  sources: [
    { label: "Wikipedia: Merlin Mann (Inbox Zero, 43 Folders)", url: "https://en.wikipedia.org/wiki/Merlin_Mann" },
    { label: "MIT Sloan Management Review, \"Inbox Zero: Is it Worth the Effort?\" (2012)", url: "https://sloanreview.mit.edu/?p=17874" },
    WORKLAB,
    { label: "Gmail Help: Search operators you can use with Gmail", url: "https://support.google.com/mail/answer/7190" },
  ],
  supports: ["features/ai-email-summary", "how-it-works"],
  related: ["how-to-manage-email-overload", "email-statistics-time-spent", "email-etiquette-rules"],
};

export const professionalPost: BlogPost = {
  slug: "how-to-write-a-professional-email",
  category: "Guides",
  title: "How to write a professional email",
  script: "(with 6 templates)",
  seo: {
    title: "How to Write a Professional Email: Structure + 6 Templates",
    description:
      "How to write a professional email step by step: subject line, greeting, a clear first line, the ask, sign-off and tone, plus 6 copy-ready templates for work.",
    keywords: ["how to write a professional email", "professional email format", "professional email examples", "formal email structure"],
  },
  keyword: "how to write a professional email",
  excerpt: "The six parts of a professional email, the word swaps that fix your tone, and six templates you can send today.",
  published: "2027-01-05",
  updated: "2027-01-05",
  author: "MailPilot Editorial Team",
  hero: { name: "pg-outlook-hero", fallback: "pg-outlook-hero", alt: "A professional working on a laptop in a glass office at golden hour" },
  answer:
    "Here is how to write a professional email: write a specific subject line, greet the reader by name, state your purpose in the first sentence, add only the context they need, ask for one clear next step with a date, and close with a simple sign-off. Keep it short enough to read on a phone, and check names, dates and numbers before you send.",
  takeaways: [
    "Decide what you want the reader to do before you write a word.",
    "Put your purpose in the first sentence, not the third paragraph.",
    "One email, one topic, one clear ask with a date.",
    "Professional means clear and polite, not stiff: plain words beat formal filler.",
    "Proofread names, numbers, dates and attachments, the details readers notice.",
  ],
  body: [
    {
      t: "table",
      caption: "The six parts of a professional email",
      head: ["Part", "What it does", "Example"],
      rows: [
        ["Subject line", "Tells the reader what it is and what's needed", "\"Contract review needed by Friday\""],
        ["Greeting", "Sets the tone and level of formality", "\"Hi Daniel,\" or \"Dear Ms. Ortiz,\""],
        ["Opening line", "States your purpose straight away", "\"I'm writing to ask for your sign-off on the Q1 plan.\""],
        ["Body", "Gives only the context needed to act", "Two or three short paragraphs or a short list"],
        ["The ask", "One clear next step with a date", "\"Could you reply with any changes by Thursday?\""],
        ["Sign-off", "Closes politely and says who you are", "\"Best regards, Maya Chen, Account Manager\""],
      ],
    },
    { t: "h2", id: "before-you-write", text: "What should you decide before you start writing?" },
    {
      t: "p",
      text: "Most unclear emails are unclear because the writer hadn't decided what they wanted. Before you type, answer three questions.",
    },
    {
      t: "ul",
      items: [
        "**Who is reading?** A client, your manager, a stranger or a whole team. That sets the formality.",
        "**What do I want them to do?** Approve, reply, attend or simply know. If the answer is \"nothing\", you may not need to send it.",
        "**What do they need to know to do it?** Usually less than you think.",
      ],
    },
    { t: "p", text: "Write the answer to the second question as one sentence. That sentence often becomes your opening line." },
    { t: "h2", id: "step-by-step", text: "How do you write a professional email, step by step?" },
    { t: "h3", text: "1. Write a subject line that says what you need" },
    {
      t: "p",
      text: "Make it specific and short, so it isn't cut off on a phone. Include the action or deadline if there is one: \"Invoice 2041: payment date?\" beats \"Question\".",
    },
    { t: "h3", text: "2. Choose the right greeting" },
    {
      t: "p",
      text: "\"Hi [Name],\" suits most work email in the US. Use \"Dear [Title] [Last name],\" for a first email to someone senior, in a formal industry or for an official request. \"Hello [Name],\" sits in the middle. Avoid \"Hey\" with people you don't know, and skip \"To whom it may concern\" if you can find a name.",
    },
    { t: "h3", text: "3. State your purpose in the first sentence" },
    {
      t: "p",
      text: "Skip \"I hope this email finds you well\" and get to the reason you're writing. \"I'm writing to confirm the March 4 kickoff and share the agenda\" tells the reader whether to read on now or later.",
    },
    { t: "h3", text: "4. Keep the body short and easy to scan" },
    {
      t: "p",
      text: "Two or three short paragraphs, one idea each. Use a short list for options, steps or several questions. Microsoft's 2025 Work Trend Index found most emails are skimmed in under a minute, so if yours needs more than one phone screen, consider a document link or a call.",
    },
    { t: "h3", text: "5. Make one clear ask" },
    {
      t: "p",
      text: "End the body with the single thing you need and when. \"Could you confirm by Thursday so we can book the venue?\" works better than \"Let me know your thoughts.\" A yes or no question, or a choice between two options, is the easiest to answer.",
    },
    { t: "h3", text: "6. Close and sign off" },
    {
      t: "p",
      text: "Use a short sign-off like \"Best regards\", \"Thanks\" or \"Kind regards\", then your name. A clean signature carries your role, company and one contact method. Our guide to [ending an email](/blog/how-to-end-an-email/) covers which sign-off suits which situation.",
    },
    { t: "h3", text: "7. Proofread before you send" },
    {
      t: "p",
      text: "Read it once as the recipient would. Check the spelling of their name, then dates, numbers, links and attachments. Then check the To and CC fields. It takes a minute and prevents most correction emails.",
    },
    { t: "h2", id: "tone", text: "What makes an email sound professional?" },
    { t: "p", text: "Professional doesn't mean formal. It means clear, polite and easy to act on. A few word swaps make a big difference." },
    {
      t: "table",
      head: ["Instead of", "Try"],
      rows: [
        ["I hope this email finds you well.", "Start with your purpose."],
        ["I just wanted to reach out to see if...", "Could you...?"],
        ["Please do not hesitate to contact me.", "Happy to answer any questions."],
        ["Per my last email...", "As a quick reminder, ..."],
        ["ASAP", "By Thursday at noon"],
        ["Sorry to bother you...", "Thanks for your help with this."],
      ],
    },
    {
      t: "p",
      text: "Keep sentences short and words plain. Avoid jargon the reader may not share, and use exclamation marks sparingly. For the wider set of manners, such as reply-all, CC and reply times, see our [email etiquette guide](/blog/email-etiquette-rules/).",
    },
    { t: "h2", id: "templates", text: "6 professional email templates you can copy" },
    { t: "p", text: "Swap the brackets for your details and cut anything that doesn't apply." },
    {
      t: "template",
      label: "1. Making a request",
      when: "When you need something by a date",
      subject: "Request: [what you need] by [date]",
      body: "Hi [Name],\n\nI'm writing to ask for [specific thing] for [project or reason].\n\n[One or two lines of context: why it matters or what it moves forward.]\n\nCould you send it by [day and date]? If that's tight, let me know what's realistic.\n\nThank you,\n[Your name]\n[Role, Company]",
    },
    {
      t: "template",
      label: "2. Introducing yourself",
      when: "First contact with someone new",
      subject: "Introduction from [Your name], [Company]",
      body: "Dear [Name],\n\nI'm [Your name], [role] at [Company]. [Mutual contact or reason] suggested I get in touch about [topic].\n\n[One line on why it's relevant to them.]\n\nWould you be open to a 20-minute call next week? I'm free [two time options].\n\nKind regards,\n[Your name]",
    },
    {
      t: "template",
      label: "3. Project update",
      when: "Weekly or at a milestone",
      subject: "[Project] update: [status in a few words]",
      body: "Hi [Name],\n\nA quick update on [project]:\n• Done: [item]\n• In progress: [item], due [date]\n• Needs your input: [decision], by [date]\n\nEverything else is on track for [milestone]. Happy to talk through any of it.\n\nBest,\n[Your name]",
    },
    {
      t: "template",
      label: "4. Sending a document for review",
      when: "With an attachment or link",
      subject: "[Document name] for your review",
      body: "Hi [Name],\n\nAttached is [document], [one line on what it covers].\n\nThe key section for you is [page or section]. Could you share any changes by [date]?\n\nThanks,\n[Your name]",
    },
    {
      t: "template",
      label: "5. Apologizing for a mistake",
      when: "As soon as you notice",
      subject: "Correction: [topic]",
      body: "Hi [Name],\n\nI made an error in [what]: [brief description]. The correct [figure / date / file] is [correct version].\n\nI've [what you've done to fix it], and I'll [what changes next time].\n\nSorry for the trouble, and thanks for your patience.\n\n[Your name]",
    },
    {
      t: "template",
      label: "6. Recap after a meeting",
      when: "Same day as the meeting",
      subject: "Next steps from today's [meeting name]",
      body: "Hi [Name],\n\nThanks for your time today. To recap what we agreed:\n• [Decision or action], owner [name], by [date]\n• [Decision or action], owner [name], by [date]\n\nI'll [your next step] by [date]. Let me know if I've missed anything.\n\nBest regards,\n[Your name]",
    },
    {
      t: "p",
      text: "For warmer post-meeting notes, see our guide to the [thank-you email after a meeting](/blog/thank-you-email-after-meeting/).",
    },
    {
      t: "figure",
      photo: { name: "pg-how-setup", fallback: "pg-how-setup", alt: "A woman working on her laptop at a light desk with a notebook beside her" },
      caption: "Decide what you want the reader to do before you write the first line.",
    },
    { t: "h2", id: "how-formal", text: "How formal should a professional email be?" },
    {
      t: "p",
      text: "Match the reader and the situation. A first email to a client, a job application or anything legal or financial deserves a formal greeting, full sentences and no emoji. A quick note to a teammate can be a few lines with a first name.",
    },
    {
      t: "p",
      text: "When you're unsure, start slightly more formal and mirror the other person's reply. If they write back \"Thanks, sounds good. Sam\", you can relax your tone to match.",
    },
    { t: "h2", id: "mistakes", text: "Common mistakes in professional emails" },
    {
      t: "ul",
      items: [
        "**Burying the purpose.** If the reader has to hunt for why you wrote, they'll put it off.",
        "**Writing a wall of text.** Long paragraphs on a phone screen get skimmed or skipped.",
        "**Asking several unrelated things.** Each extra request lowers the odds that any one gets answered.",
        "**Vague deadlines.** \"Soon\" and \"ASAP\" mean different things to different people. Give a day.",
        "**Over-apologizing.** One \"sorry\" for a real mistake is right. Three in a routine email sounds unsure.",
        "**Sending without rereading.** Wrong names, missing attachments and reply-all slips are caught by one careful read.",
      ],
    },
    { t: "h2", id: "mailpilot", text: "How MailPilot AI helps you write professional emails faster" },
    {
      t: "p",
      text: "Knowing the structure is one thing; writing 40 emails a day with it is another. MailPilot AI, the email agent by SuperMIA, drafts replies for you in [your own voice](/features/ai-email-writer/). You set up a Persona once, in about 10 to 15 minutes, by describing how you write or pasting a few sample emails. It captures your formality, greetings, sign-offs, sentence length and recurring phrases.",
    },
    {
      t: "p",
      text: "Each draft uses the full thread as context and waits for your approval, so you edit and send instead of starting from a blank page. You can add instructions for a specific contact, such as \"formal, always address her as Dr. Ortiz\". If you'd like to try the idea with any AI tool first, our guide to [making AI write emails like you](/blog/ai-write-emails-in-your-voice/) includes a voice brief you can copy. See [how it works](/how-it-works/) and [pricing](/pricing/), which starts with free credits.",
    },
    {
      t: "cta",
      title: "Professional drafts, in your voice",
      text: "MailPilot drafts every reply from your Persona and the full thread, ready for your review. Free starter credits, no credit card.",
      href: "/features/ai-email-writer/",
      label: "See the AI email writer",
    },
  ],
  faqs: [
    {
      q: "What is the structure of a professional email?",
      a: "A professional email has a specific subject line, a greeting with the person's name, an opening line that states your purpose, a short body with only the needed context, one clear request with a date, and a sign-off with your name and role. The whole message should be easy to read on a phone.",
    },
    {
      q: "How do you start a professional email?",
      a: "Start with a greeting that matches the reader, such as \"Hi Daniel,\" or \"Dear Ms. Ortiz,\", then state your purpose in the first sentence. Skip filler like \"I hope this email finds you well\". The reader should know why you're writing before they reach the end of the first line.",
    },
    {
      q: "How long should a professional email be?",
      a: "As short as it can be while still giving the reader what they need to act. For most work emails that means a few short paragraphs that fit on one phone screen. If you need much more, put a short summary in the email and the detail in a document, an attachment or a call.",
    },
    {
      q: "How do you end a professional email?",
      a: "End with your clear request, then a short sign-off such as \"Best regards\", \"Kind regards\" or \"Thanks\", followed by your name. Add a simple signature with your role, company and one contact method. Avoid long quotes, extra disclaimers or stacking several sign-off lines on top of each other.",
    },
    {
      q: "Is \"Hi\" professional in an email?",
      a: "Yes. \"Hi [Name],\" is the standard greeting for most work email in the US and in many other places. For a first email to someone senior, in a formal industry or for an official request, \"Dear [Name],\" is safer. Avoid \"Hey\" with people you don't already know well.",
    },
  ],
  sources: [WORKLAB],
  supports: ["features/ai-email-writer"],
  related: ["email-etiquette-rules", "ai-write-emails-in-your-voice", "follow-up-email-after-no-response"],
};

export const coldFollowUpPost: BlogPost = {
  slug: "sales-follow-up-email",
  category: "Guides",
  title: "How to write a sales follow-up email",
  script: "for every stage of a deal",
  seo: {
    title: "Sales Follow-Up Email: 8 Templates for Every Stage of a Deal",
    description:
      "How to write a sales follow up email after a discovery call, a proposal or a quiet week, with 8 templates for stalled deals and new stakeholders.",
    keywords: ["sales follow up email", "sales follow up email template", "follow up email after sales call", "how to follow up with a prospect"],
  },
  keyword: "sales follow-up email",
  excerpt: "What to send after a discovery call, after a proposal, when a prospect goes quiet and when a new stakeholder joins, with eight templates to copy.",
  published: "2027-01-12",
  updated: "2027-01-12",
  author: "MailPilot Editorial Team",
  hero: { name: "pg-sales-hero", fallback: "pg-sales-hero", alt: "A smiling sales professional with headphones in a bright, busy office" },
  answer:
    "A good sales follow-up email moves a live deal one step forward. Send it the same day after a call, two to three business days after a proposal, and in the original thread when a prospect goes quiet. Recap what the buyer said in their own words, add one new thing, and end with a single next step that has a date.",
  takeaways: [
    "Agree the next step on the call, then confirm it in writing the same day.",
    "Use the buyer's own words for their problem, not your feature list.",
    "Every follow-up needs one new reason to reply: an answer, a resource or an easier question.",
    "When a deal stalls, ask a simple question about timing or ownership instead of nudging.",
    "Reach a champion's boss only with your champion's knowledge, and close the loop politely when a deal stops moving.",
  ],
  body: [
    {
      t: "table",
      caption: "Follow-ups across a live deal",
      head: ["Moment in the deal", "When to send", "What the email does"],
      rows: [
        ["After a discovery call", "Same day", "Recaps their problem and confirms the next meeting"],
        ["After a proposal or pricing", "2 to 3 business days later", "Answers likely questions and asks for one decision"],
        ["Prospect goes quiet", "About a week after their last reply", "Asks one easy question in the same thread"],
        ["Deal has stalled", "After 2 to 4 weeks of silence", "Brings a new reason to talk, or asks if priorities changed"],
        ["New stakeholder joins", "As soon as you hear", "Introduces you and gives them the short version"],
        ["Close the loop", "After 3 or 4 unanswered follow-ups", "Lets them off the hook and leaves the door open"],
      ],
      note: "Starting points, not rules. If the buyer gave you a date, follow up on that date instead.",
    },
    { t: "h2", id: "why-follow-up", text: "Why do live deals need follow-up emails?" },
    {
      t: "p",
      text: "Because buying decisions take longer than one conversation, and the interest you heard on the call now competes with everything else in the buyer's inbox. Microsoft's 2025 Work Trend Index found the average worker receives **117 emails a day** and skims most of them in under a minute.",
    },
    {
      t: "p",
      text: "Deals stall for ordinary reasons: a budget review, a busy month, a colleague who hasn't weighed in yet. Each follow-up builds on a conversation that already happened, so it should read like the next line of that conversation, not a fresh pitch.",
    },
    {
      t: "p",
      text: "This guide covers follow-ups inside an active, one-to-one deal. For unanswered emails of any kind, see our general guide to the [follow-up email after no response](/blog/follow-up-email-after-no-response/).",
    },
    { t: "h2", id: "what-makes-a-good-follow-up", text: "What makes a good follow-up in a live deal?" },
    {
      t: "ol",
      items: [
        "**Reply in the existing thread.** The buyer sees the history underneath without searching, and so does anyone they forward it to.",
        "**Use their words.** If they said \"our reps spend Fridays updating spreadsheets\", repeat that, not your product's name for the problem.",
        "**Add one new thing.** An answer to a question, a short example, a revised number or a simpler choice. Never just \"bumping this\".",
        "**Ask for one step with a date.** \"Can we book 30 minutes with your finance lead next Tuesday?\" beats \"Let me know your thoughts\".",
        "**Keep it short.** Aim for under about 120 words, readable on a phone. Put the detail in a document and the decision in the email. Our guide on [how to write a professional email](/blog/how-to-write-a-professional-email/) covers the basics.",
      ],
    },
    {
      t: "callout",
      tone: "tip",
      title: "Write the next step down before you hang up",
      text: "The easiest follow-up to send is one that confirms something you both already agreed. End every call by asking \"What should happen next, and when?\" and note the answer while it's fresh.",
    },
    { t: "h2", id: "after-a-sales-call", text: "How soon should you follow up after a sales call?" },
    {
      t: "p",
      text: "Send it the same day, while the details are fresh for both of you. A recap that arrives a week later reads like you forgot.",
    },
    {
      t: "p",
      text: "After a discovery call, the email has one job: prove you listened. Summarize the problem in two or three lines, confirm what each side agreed to do, and lock in the next meeting. If they asked for something, attach it or say exactly when it's coming. Our guide to the [thank-you email after a meeting](/blog/thank-you-email-after-meeting/) covers the recap format in more detail.",
    },
    {
      t: "template",
      label: "1. After a discovery call",
      when: "Same day",
      subject: "Thanks for today: next steps on [project]",
      body: "Hi [Name],\n\nThanks for the time today. Here's what I heard:\n• [Problem, in their words]\n• [What a good result looks like by (date)]\n\nNext steps: I'll send [resource] by [day], and you'll check [question] with [colleague].\n\nDoes [day, time] still work for our next call? I'll send the invite.\n\nBest,\n[Your name]",
    },
    { t: "h2", id: "after-a-proposal", text: "How do you follow up after sending a proposal or pricing?" },
    {
      t: "p",
      text: "Give the buyer two to three business days to read it, then follow up with something that makes the decision easier. A proposal usually raises questions they haven't asked yet: what's included, how the price was built, what happens if they start later.",
    },
    {
      t: "p",
      text: "Name the one decision that moves things forward, and offer a short call to walk through the numbers. If they need to discuss it internally, follow up the day after that meeting, not before.",
    },
    {
      t: "template",
      label: "2. After sending a proposal or pricing",
      when: "2 to 3 business days later",
      subject: "Re: Proposal for [project]",
      body: "Hi [Name],\n\nFollowing up on the proposal. The one choice that sets the timeline is [option A or option B].\n\nPeople often ask about [common question], so here's the short answer: [one line].\n\nWould 20 minutes on [day] help to walk through the numbers with [colleague]?\n\nBest,\n[Your name]",
    },
    {
      t: "template",
      label: "3. When they asked for time to think",
      when: "The day after their internal meeting",
      subject: "Re: Proposal for [project]",
      body: "Hi [Name],\n\nYou mentioned the team was reviewing the proposal on [day]. How did it land?\n\nIf questions came up that I can answer in writing, send them over. If it's easier to talk, I'm free [day] or [day].\n\nThanks,\n[Your name]",
    },
    { t: "h2", id: "prospect-goes-quiet", text: "What should you do when a prospect goes quiet?" },
    {
      t: "p",
      text: "Assume they're busy, not gone. Wait about a week after their last reply, then send one short message in the same thread with a question they can answer in seconds.",
    },
    {
      t: "p",
      text: "If two of those get no answer, the deal has probably stalled rather than slipped. Stop asking for the meeting and ask about the situation instead: did priorities change, did the timing move, is someone new involved? When you only need to nudge a date, our [polite reminder email](/blog/polite-reminder-email/) examples strike the right tone.",
    },
    {
      t: "template",
      label: "4. When a prospect goes quiet",
      when: "About a week after their last reply",
      subject: "Re: [Original subject]",
      body: "Hi [Name],\n\nQuick one: is [project] still on track for [month], or has the timing moved?\n\nEither answer is fine. It just helps me know when to send [next item].\n\n[Your name]",
    },
    {
      t: "template",
      label: "5. Re-engaging a stalled deal",
      when: "After two to four weeks of silence",
      subject: "Re: [Original subject]",
      body: "Hi [Name],\n\nWhen we last spoke, [problem, in their words] was the main thing holding the team back.\n\nSince then we've [a real, relevant update, such as a new option]. It might change the picture.\n\nIs this still a priority, or should I check back next quarter?\n\nBest,\n[Your name]",
    },
    { t: "h2", id: "new-stakeholder", text: "How do you follow up with your champion's boss or a new stakeholder?" },
    {
      t: "p",
      text: "Most deals involve more than one person, and the one you talk to most, your champion, rarely signs alone. Sooner or later you need to reach their manager or a budget holder.",
    },
    {
      t: "p",
      text: "Go through your champion first. Ask whether they'd like you to send a short summary their boss can read, or whether they'd rather forward one themselves. Writing over someone's head without warning costs trust you'll need later. When you do write, keep it shorter than anything you've sent so far: the problem, the proposal, the cost and the decision you need.",
    },
    {
      t: "p",
      text: "If your champion leaves or a new person takes over, introduce yourself quickly. They inherit the deal without your history, so give them the short version.",
    },
    {
      t: "template",
      label: "6. To your champion's boss",
      when: "After your champion agrees",
      subject: "[Project]: short summary for your review",
      body: "Hi [Name],\n\n[Champion] suggested I send you a short summary.\n\nThe problem: [one line, in their team's words].\nThe proposal: [one line].\nCost and timing: [figure], starting [month].\n\nThe decision we need is [decision] by [date]. I'm happy to answer anything by email or in a 15-minute call.\n\nBest regards,\n[Your name]",
    },
    {
      t: "template",
      label: "7. Introducing yourself to a new stakeholder",
      when: "As soon as you hear they've joined",
      subject: "[Project] with [your company]: where things stand",
      body: "Hi [Name],\n\nI've been working with [previous contact] on [project], and I understand you're now involved.\n\nShort version: [problem], [what we proposed] and [where it stands today].\n\nWould 20 minutes next week help me hear your priorities? I'd rather shape the plan around them than assume.\n\nBest,\n[Your name]",
    },
    { t: "h2", id: "when-to-stop", text: "When should you stop following up on a deal?" },
    {
      t: "p",
      text: "After three or four unanswered follow-ups, spaced further apart each time, send a polite close-the-loop email and stop. Stop sooner if the buyer says no, tells you they chose someone else or asks you not to follow up.",
    },
    {
      t: "p",
      text: "A respectful exit often gets a reply because it takes the pressure off, and a buyer who says \"not this year\" may come back next year. If you keep in touch afterwards, make it about them, as in a [client check-in email](/blog/client-check-in-email/), not a pitch in disguise.",
    },
    {
      t: "template",
      label: "8. Closing the loop",
      when: "After 3 or 4 unanswered follow-ups",
      subject: "Re: [Original subject]",
      body: "Hi [Name],\n\nI haven't heard back, so I'll assume [project] isn't a priority right now and stop following up.\n\nIf that changes, reply to this thread and I'll pick it up from where we left off. Thanks again for the time you gave this.\n\nAll the best,\n[Your name]",
    },
    {
      t: "figure",
      photo: { name: "sales-call", fallback: "sales-call", alt: "A woman checking her phone as she walks down a sunlit city street" },
      caption: "Most deals go quiet because the buyer is busy, not because they've said no.",
    },
    { t: "h2", id: "mistakes", text: "Common mistakes when following up on a deal" },
    {
      t: "ul",
      items: [
        "**\"Just checking in\" with nothing new.** It asks the buyer to remember why you wrote and gives them no reason to answer.",
        "**Ending without a date.** \"Let me know your thoughts\" hands the next step to someone with less time than you.",
        "**Going over your champion's head.** Writing to their boss without warning can lose you your strongest ally in the deal.",
        "**Fake urgency.** Invented deadlines and \"prices go up Friday\" damage trust the moment the buyer checks.",
        "**Following up after they replied.** A reminder that ignores their answer looks careless.",
        "**Never stopping.** Five or six unanswered emails can turn a maybe into a firm no.",
      ],
    },
    { t: "h2", id: "mailpilot", text: "Where MailPilot AI fits, and where it doesn't" },
    {
      t: "p",
      text: "To be clear about what we make: MailPilot AI is not a sequencing tool, and it isn't built for sending outreach to lists. It works on real one-to-one threads, the deals you're already in conversation about.",
    },
    {
      t: "p",
      text: "Inside those threads, it handles the part that slips in a busy week. If a prospect doesn't reply inside your window, MailPilot drafts a personal [follow-up](/features/email-follow-up-automation/) from the real thread, in your own voice, using the Persona you set up once. You approve each one or let follow-ups send on their own, with per-contact frequency limits, and you can pause any contact or thread. When the prospect replies, pending follow-ups stop.",
    },
    {
      t: "p",
      text: "It drafts your replies when buyers do write back ([AI email writer](/features/ai-email-writer/)), and you can add per-contact instructions, such as \"keep it under 80 words\". A profile for each contact shows the history and pending follow-ups, with no CRM data entry ([relationship intelligence](/features/relationship-intelligence/)). See how sales teams use it on our [sales page](/solutions/sales/). Setup takes about 15 minutes ([how it works](/how-it-works/)), and new accounts start with free credits ([pricing](/pricing/)).",
    },
    {
      t: "cta",
      title: "Keep every live deal moving",
      text: "MailPilot drafts personal follow-ups from your real threads, in your voice, and stops when the prospect replies. Free starter credits.",
      href: "/solutions/sales/",
      label: "See MailPilot for sales",
    },
  ],
  faqs: [
    {
      q: "How soon should you send a follow-up email after a sales call?",
      a: "Send it the same day, or the next morning at the latest. Recap the buyer's problem in their own words, confirm what each side agreed to do, and propose one dated next step. A prompt recap shows you listened and gives the buyer something easy to forward to colleagues who missed the call.",
    },
    {
      q: "How many times should you follow up with a prospect?",
      a: "Three or four unanswered follow-ups is a sensible limit in an active deal. Space them further apart each time, give every one a new reason to reply, and finish with a polite close-the-loop email. Stop straight away if the prospect says no, chooses someone else or asks you to stop.",
    },
    {
      q: "What do you say when a prospect goes silent after a proposal?",
      a: "Ask one easy question in the same thread, such as whether the project is still on track for its original date. Add something useful, like a short answer to a common question about the proposal. If that gets no reply, ask whether priorities have changed instead of pushing for a meeting.",
    },
    {
      q: "Should you email your champion's boss directly?",
      a: "Only with your champion's knowledge. Ask whether they'd like you to send their manager a short summary or forward one themselves. Writing over their head without warning can cost you your strongest ally. Keep the email brief: the problem, the proposal, the cost and the decision you need by a date.",
    },
    {
      q: "How do you follow up on a deal without being pushy?",
      a: "Make every email about the buyer's problem, add something new each time and space your messages out. Ask for one small, dated step instead of a big commitment. Avoid guilt, invented deadlines and daily emails, and accept a no gracefully. A respectful close-the-loop email often earns a reply.",
    },
  ],
  sources: [WORKLAB],
  supports: ["solutions/sales", "features/email-follow-up-automation"],
  related: ["follow-up-email-after-no-response", "follow-up-email-after-demo", "thank-you-email-after-meeting"],
};

export const responseTimePost: BlogPost = {
  slug: "email-response-time",
  category: "Research",
  title: "What is the average email response time?",
  script: "and what's normal for you",
  seo: {
    title: "Average Email Response Time: What's Normal and How to Measure It",
    description:
      "What is the average email response time? What two large studies found, why the numbers vary, what to expect at work and how to measure and improve your own.",
    keywords: ["average email response time", "email response time", "how fast should you reply to an email", "email reply time study"],
  },
  keyword: "average email response time",
  excerpt: "What the research found, why the answer depends on who you ask, and how to measure and set your own response time.",
  published: "2027-01-19",
  updated: "2027-01-19",
  author: "MailPilot Editorial Team",
  hero: { name: "pg-analytics-hero", fallback: "pg-analytics-hero", alt: "A woman reviewing a tablet by an office window at dusk, city lights behind" },
  answer:
    "There's no single average email response time, but research gives a range. A 2015 study of 16 billion Yahoo Mail emails found half of replies came within 47 minutes and over 90% within a day. A 2021 EmailAnalytics study of 565 professional accounts found an average of 3 hours 38 minutes in work hours. For work email, one business day is a common expectation.",
  takeaways: [
    "In a 16-billion-email study, half of replies came within 47 minutes and the most likely reply time was two minutes.",
    "A 2021 study of professional accounts found an average of 3 hours 38 minutes in work hours, or 10 hours 40 minutes in real time.",
    "Reply speed varies with age, device, time of day and attachments, so one average hides a lot.",
    "Replying within one business day is a widely shared expectation for work email; clients often expect faster.",
    "Measure your own response time first, then set a target and tell people what to expect.",
  ],
  body: [
    {
      t: "table",
      caption: "What the research says",
      head: ["Study", "Who was measured", "Key finding"],
      rows: [
        ["Kooti et al., 2015 (USC and Yahoo Labs)", "2 million Yahoo Mail users, 16 billion emails", "Median reply 47 minutes; most likely reply time 2 minutes; over 90% of replies within a day"],
        ["EmailAnalytics, 2021", "565 professional accounts, February 2021", "Average 3 h 38 min in work hours; 10 h 40 min in real time"],
        ["Microsoft Work Trend Index, 2025", "Microsoft 365 users", "117 emails received a day, most skimmed in under a minute"],
      ],
      note: "Different samples, years and methods, so the numbers aren't directly comparable. The 2015 study measured only emails that got a reply.",
    },
    { t: "h2", id: "what-is-normal", text: "What is a normal email response time?" },
    {
      t: "p",
      text: "It depends on who you are and who's writing. The largest study of reply behavior we found, by researchers at the University of Southern California and Yahoo Labs, analyzed 16 billion emails from more than 2 million Yahoo Mail users. Replies were fast: more than 90% came within a day, half came within 47 minutes, and the single most likely reply time was just two minutes.",
    },
    {
      t: "p",
      text: "There's a catch. That study looked only at emails that got a reply, between pairs of people who wrote to each other regularly. Emails that were never answered aren't in the figures, and the sample came from a consumer email service rather than work inboxes.",
    },
    {
      t: "p",
      text: "Work email looks slower. EmailAnalytics, which sells response-time tracking, studied 565 professional accounts belonging to its customers across February 2021. The average response time was 3 hours 38 minutes counting only work hours, and 10 hours 40 minutes in real elapsed time. It's vendor data from a single month, but it's a useful reference point for professional inboxes.",
    },
    { t: "h2", id: "what-affects-reply-speed", text: "What affects how fast people reply?" },
    { t: "p", text: "The 2015 study found large, consistent differences depending on who was replying and how." },
    {
      t: "bars",
      title: "Median reply time by age group",
      unit: "minutes",
      items: [
        { label: "Teens", value: 13, display: "13 min" },
        { label: "Young adults (20 to 35)", value: 16, display: "16 min" },
        { label: "Adults (36 to 50)", value: 24, display: "24 min" },
        { label: "51 and older", value: 47, display: "47 min" },
      ],
      source: "Kooti et al., \"Evolution of Conversations in the Age of Email Overload\", 2015",
    },
    {
      t: "ul",
      items: [
        "**Device.** Replies sent from phones had a median time of 28 minutes, against 57 minutes from tablets and 62 from desktops. Phone replies were much shorter too.",
        "**Attachments.** Emails with attachments got slower replies: a median of 56 minutes, compared with 32 minutes without one.",
        "**Time and day.** Emails received at night or on weekends got slower replies.",
        "**Length.** Longer replies took longer to write, and longer incoming emails took longer to answer.",
        "**Email load.** People who received more email replied to a smaller share of it, with shorter replies, but not more slowly.",
        "**End of a conversation.** The last reply in a thread was much slower than the ones before it.",
      ],
    },
    {
      t: "p",
      text: "The practical point: a single average hides a lot. A long email with an attachment, sent on a Friday evening, will wait longer than a quick question on a Tuesday morning, and that's normal.",
    },
    { t: "h2", id: "how-quickly-to-respond", text: "How quickly should you respond to a work email?" },
    {
      t: "p",
      text: "There's no official standard, but replying within one business day is a widely shared expectation for work email. Faster is better for clients, prospects and anything time-sensitive, and some teams set their own targets, such as same-day replies to customers.",
    },
    {
      t: "table",
      head: ["Who's writing", "Suggested target", "If you can't answer fully"],
      rows: [
        ["Client or customer", "Same business day", "Send a holding reply with a date"],
        ["Prospect or warm lead", "Within a few work hours", "Acknowledge and offer a call"],
        ["Your manager or team", "Same day for direct questions", "Say when you'll have the answer"],
        ["Vendor or partner", "Within one business day", "Confirm receipt and the next step"],
        ["Newsletters and sales pitches", "No reply needed", "Unsubscribe if it isn't useful"],
      ],
      note: "These are suggested targets, not research findings. Agree on them with your team and clients.",
    },
    {
      t: "p",
      text: "Not every email deserves the same speed. Answering everything in two minutes means checking email all day, and Microsoft's 2025 research found workers are already interrupted about every two minutes in core hours. Aim for fast replies where speed matters, not instant replies everywhere.",
    },
    { t: "h2", id: "measure-your-own", text: "How do you measure your own email response time?" },
    { t: "p", text: "Before setting a target, find out where you are now. There are three ways to do it." },
    {
      t: "ol",
      items: [
        "**Sample it by hand.** Pick 20 emails you replied to last week. For each one, note when it arrived and when you replied, then find the middle value. It's rough, but it shows your real pattern.",
        "**Check what's waiting.** Look for emails from real people that you haven't answered, and note how old the oldest ones are. Unanswered emails matter more than any average.",
        "**Use an analytics tool.** [Inbox analytics](/features/inbox-performance-overview/) calculate your average response time, reply rate and unanswered emails for you, so you can see trends week to week instead of guessing.",
      ],
    },
    {
      t: "callout",
      tone: "tip",
      title: "Look at the median, not just the average",
      text: "One email you answered three weeks late can drag your average up by hours. In the 2015 study, the mean reply time was 1,157 minutes (about 19 hours) while the median was 47 minutes. The median shows your typical speed; the oldest unanswered emails show your risk.",
    },
    { t: "h2", id: "reply-faster", text: "How can you reply faster without living in your inbox?" },
    {
      t: "ul",
      items: [
        "**Batch email at set times.** Two to four sessions a day keeps replies within hours without constant checking. Our [Inbox Zero guide](/blog/inbox-zero-method/) shows how to get through each session quickly.",
        "**Send holding replies.** A two-line \"Got it, full answer by Thursday\" stops the clock for the other person.",
        "**Triage by sender.** Answer clients and people waiting on decisions first. Newsletters can wait, or go.",
        "**Keep replies short.** In the 2015 study, longer replies took longer to send. Most emails need three sentences, not three paragraphs; see [how to write a professional email](/blog/how-to-write-a-professional-email/).",
        "**Reuse answers.** Save replies to the questions you get every week.",
        "**Set expectations.** A line in your signature or auto-reply tells people what's normal for you.",
      ],
    },
    {
      t: "template",
      label: "Response-time note for your auto-reply or signature",
      when: "When you batch email",
      subject: "Re: [Original subject]",
      body: "Thanks for your email. I check email at 9 am and 3 pm on weekdays and reply within one business day.\n\nIf it's urgent, please call me on [number].\n\n[Your name]",
    },
    {
      t: "template",
      label: "Holding reply",
      when: "When the full answer will take time",
      subject: "Re: [Original subject]",
      body: "Hi [Name],\n\nThanks, got this. I need to [check X / pull the numbers] first, so you'll have a full answer by [day and time].\n\n[Your name]",
    },
    {
      t: "figure",
      photo: { name: "day-before", fallback: "day-before", alt: "A professional still at their desk in the evening, working through email" },
      caption: "In the 2015 study the most likely reply time was two minutes, yet half of all replies took longer than 47.",
    },
    { t: "h2", id: "mistakes", text: "Common mistakes with email response time" },
    {
      t: "ul",
      items: [
        "**Chasing instant replies.** Answering everything within minutes means checking email all day, which costs focus on the work that matters.",
        "**Using one target for every email.** A client question and a newsletter don't deserve the same speed.",
        "**Waiting for the full answer before replying.** A quick holding reply beats days of silence.",
        "**Judging others by your own pace.** People on phones, older colleagues and people in other time zones reply on different rhythms. Learn each contact's normal pace before you chase, and when you do, our guide to [polite reminder emails](/blog/polite-reminder-email/) helps.",
        "**Measuring only the average.** A few very late replies skew it. Track the median and your oldest unanswered emails too.",
        "**Never telling anyone your rhythm.** If you batch email, say so, and people stop expecting instant answers.",
      ],
    },
    { t: "h2", id: "mailpilot", text: "How MailPilot AI shows your response time" },
    {
      t: "p",
      text: "MailPilot AI's [Inbox Performance Overview](/features/inbox-performance-overview/) shows your average response time, reply rate, unanswered emails and how long they've waited, alongside sent and received volume, top contacts and trends. You can view one inbox or all of them together, so you work from your real numbers.",
    },
    {
      t: "p",
      text: "It also helps you move those numbers. Reply drafts are prepared in your voice and wait for your approval ([AI email writer](/features/ai-email-writer/)), the [morning briefing](/features/ai-email-summary/) puts urgent alerts and action items at the top, and follow-ups can be drafted when someone else goes quiet. New accounts start with free credits; see [pricing](/pricing/).",
    },
    {
      t: "cta",
      title: "See your real response time",
      text: "MailPilot's inbox analytics show your average response time, reply rate and unanswered emails in one view. Free starter credits.",
      href: "/features/inbox-performance-overview/",
      label: "See inbox analytics",
    },
  ],
  faqs: [
    {
      q: "What is a good email response time?",
      a: "For work email, replying within one business day is a widely shared expectation, and same-day is better for clients and prospects. Research on personal email found half of replies arrive within 47 minutes. A good target depends on your role, so agree one with your team and tell people what to expect.",
    },
    {
      q: "How long is too long to respond to an email?",
      a: "As a rule of thumb, more than two business days without any reply starts to feel slow for work email, and clients may notice sooner. If you need time to answer properly, send a short holding reply with a date. That keeps the wait short even when the full answer takes longer.",
    },
    {
      q: "Should you respond to emails right away?",
      a: "Not always. Quick replies help when an email is urgent or from a client, but answering everything instantly means checking email all day. Many people batch email two to four times a day and reply within hours, which is fast enough for most work and protects time for focused tasks.",
    },
    {
      q: "How do I calculate my email response time?",
      a: "Take a sample of emails you replied to, note when each arrived and when you replied, and find the median gap. Count only work hours if you want a fair picture. Inbox analytics tools, such as MailPilot AI's Inbox Performance Overview, calculate your average response time automatically.",
    },
    {
      q: "Do people reply faster on their phones?",
      a: "Yes, according to a 2015 study of 16 billion emails. Replies sent from phones had a median reply time of 28 minutes, compared with 57 minutes from tablets and 62 minutes from desktop computers. Phone replies were also much shorter, with a median of 20 words against 60 from desktops.",
    },
  ],
  sources: [
    { label: "Kooti, Aiello, Grbovic, Lerman and Mantrach, \"Evolution of Conversations in the Age of Email Overload\" (WWW 2015, arXiv)", url: "https://arxiv.org/abs/1504.00704" },
    { label: "EmailAnalytics via PR Newswire, \"Average Email Response Time for Professionals Is About 3.5 Hours\" (March 2021)", url: "https://www.prnewswire.com/news-releases/average-email-response-time-for-professionals-is-about-3-5-hours-new-study-by-emailanalytics-finds-301241703.html" },
    WORKLAB,
  ],
  supports: ["features/inbox-performance-overview"],
  related: ["email-statistics-time-spent", "inbox-zero-method", "follow-up-email-after-no-response"],
};

export const batch2: BlogPost[] = [etiquettePost, inboxZeroPost, professionalPost, coldFollowUpPost, responseTimePost];
