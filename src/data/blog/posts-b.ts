import type { BlogPost } from "./types.ts";

export const voicePost: BlogPost = {
  slug: "ai-write-emails-in-your-voice",
  category: "Guides",
  title: "How to make AI write emails",
  script: "that sound like you",
  seo: {
    title: "How to Make AI Write Emails Like You (Voice Guide + Free Template)",
    description:
      "How to make AI write emails like you: the six parts of your writing voice, a copy-ready voice brief for ChatGPT or Claude, and how to test and improve it.",
    keywords: ["how to make AI write emails like you", "AI write in my style", "train AI on my writing style", "AI email voice"],
  },
  keyword: "make AI write emails like you",
  excerpt: "Why AI emails sound generic, the six things that make your writing yours, and a voice brief you can paste into any AI tool.",
  published: "2026-11-03",
  updated: "2026-11-03",
  author: "MailPilot Editorial Team",
  hero: { name: "blog-voice-hero", fallback: "persona-writer", alt: "A person reading a handwritten letter in an armchair by a window" },
  answer:
    "To make AI write emails like you, give it a written description of your voice plus three to five real emails you've sent, then correct its drafts until they need only small edits. Describe your formality, greetings, sign-offs, sentence length, favourite phrases and words you never use. Save that brief and reuse it, or set it up once in an email agent.",
  takeaways: [
    "AI sounds generic because it only knows the average email, not yours.",
    "Your voice comes down to six things: formality, openings, sign-offs, rhythm, phrases and no-go words.",
    "Real sample emails teach more than adjectives like \"friendly\" or \"professional\".",
    "Test on five real emails and fix the brief, not just the draft.",
    "An email agent applies your voice to every reply automatically, so you set it up once.",
  ],
  body: [
    {
      t: "table",
      caption: "The six parts of your email voice",
      head: ["Element", "What to capture", "Example"],
      rows: [
        ["Formality", "How formal you are by default", "\"First names, no 'Dear'\""],
        ["Openings", "How you start", "\"Hi Maya,\" then straight to the point"],
        ["Sign-offs", "How you close", "\"Best, Alex\" or just \"A\""],
        ["Rhythm", "Sentence and email length", "\"Short sentences. Under 120 words.\""],
        ["Signature phrases", "Things you often say", "\"Happy to help\", \"Quick one:\""],
        ["No-go words", "Words you'd never write", "\"Kindly\", \"Per my last email\", exclamation marks"],
      ],
    },
    { t: "h2", id: "why-generic", text: "Why do AI emails sound so generic?" },
    {
      t: "p",
      text: "Because the AI is writing the most likely email, not your email. Without guidance, it falls back on safe, polished phrases that sound like everyone and no one: \"I hope this email finds you well\", \"Please don't hesitate to reach out.\" People who know you notice straight away.",
    },
    {
      t: "p",
      text: "The fix isn't a cleverer one-line prompt. It's giving the AI the same information a new assistant would need to write on your behalf: how you sound, with examples.",
    },
    { t: "h2", id: "describe-voice", text: "How do you describe your writing voice?" },
    {
      t: "p",
      text: "Open your sent folder and read ten emails you were happy with. Note what they have in common across the six elements in the table above. Be specific: \"warm\" is vague, while \"uses first names, thanks people early, never uses exclamation marks\" is something an AI can follow.",
    },
    {
      t: "callout",
      tone: "tip",
      title: "Pick samples on purpose",
      text: "Choose emails to different kinds of people: a client, a colleague, someone senior and a quick yes/no reply. Variety teaches the AI how your voice flexes, not just one mood.",
    },
    { t: "h2", id: "voice-brief", text: "A voice brief you can copy" },
    { t: "p", text: "Fill this in once and paste it at the start of any AI chat when you want help with an email." },
    {
      t: "template",
      label: "Email voice brief",
      when: "Paste before your request",
      subject: "Write emails as me, using this voice",
      body: "Who I am: [role] at [company]. I usually write to [clients / my team / investors].\n\nFormality: [e.g. first names, friendly but direct].\nOpenings: [e.g. \"Hi [Name],\" then the point in the first line].\nSign-off: [e.g. \"Best, Alex\"].\nLength and rhythm: [e.g. under 120 words, short sentences, one idea per paragraph].\nPhrases I use: [e.g. \"Quick one:\", \"Happy to help\"].\nNever use: [e.g. \"I hope this finds you well\", \"kindly\", exclamation marks].\n\nThree emails I've written:\n1. [paste]\n2. [paste]\n3. [paste]\n\nNow draft a reply to the email below. Answer every question in it.",
    },
    {
      t: "figure",
      photo: { name: "blog-voice-1", fallback: "notes-instructions", alt: "Printed sample emails marked up with a pen on a wooden desk" },
      caption: "Your sent folder is the best training material you have.",
    },
    { t: "h2", id: "test", text: "How do you test and improve the results?" },
    {
      t: "ol",
      items: [
        "**Run five real emails through it**, including one tricky or sensitive one.",
        "**Mark every edit you make.** Words you swap and lines you delete point to gaps in the brief.",
        "**Update the brief, not just the draft.** If you keep deleting \"I hope you're well\", add it to the never-use list.",
        "**Repeat until edits are small.** Most people get there in two or three rounds.",
        "**Add per-person notes** for contacts who need a different tone, such as a formal client.",
      ],
    },
    { t: "h2", id: "mistakes", text: "Common mistakes" },
    {
      t: "ul",
      items: [
        "**Describing yourself with adjectives only.** \"Professional and friendly\" gives the AI almost nothing to work with.",
        "**Using samples you wouldn't send again.** The AI copies everything, including bad habits.",
        "**Letting it answer only half the email.** Ask it to answer every question; check that it did.",
        "**Pasting sensitive email into tools you haven't vetted.** Check how a tool stores data first; see our guide on [connecting AI to Gmail safely](/blog/is-it-safe-to-connect-ai-to-gmail/).",
        "**Sending without reading.** Even a good draft needs your eye on names, dates and promises.",
      ],
    },
    { t: "h2", id: "agent", text: "When is an email agent better than copy-and-paste prompting?" },
    {
      t: "p",
      text: "Prompting works for the odd email. It gets tiring when you write dozens a day: copying threads in, pasting the brief, copying the draft back. An email agent keeps your voice on file and drafts in your inbox as email arrives. Follow-ups are where this pays off most, because they're the emails people forget to write at all; our guide to [writing a follow-up after no response](/blog/follow-up-email-after-no-response/) shows the shape that works.",
    },
    {
      t: "p",
      text: "[MailPilot AI's email writer](/features/ai-email-writer/) works this way. You set up a Persona once in about 10 to 15 minutes, by describing your style or pasting sample emails. Every reply is then drafted against it, with the full thread as context, and waits for your approval. You can add instructions for a specific contact or thread, and the same Persona writes your [follow-ups](/features/email-follow-up-automation/). See [how setup works](/how-it-works/). New accounts get free starter credits, so you can test your Persona on real email before deciding ([pricing](/pricing/)). MailPilot also remembers how you write to each person, alongside their [relationship history](/features/relationship-intelligence/).",
    },
    {
      t: "figure",
      photo: { name: "blog-voice-2", fallback: "persona-writer", alt: "A person reviewing a drafted reply with a cup of tea in soft morning light" },
      caption: "The goal is a draft you can approve at a glance, not one you rewrite.",
    },
    {
      t: "cta",
      title: "Set up your voice once",
      text: "MailPilot drafts every reply in your Persona, ready for your review. Free starter credits, no credit card.",
      href: "/features/ai-email-writer/",
      label: "See the AI email writer",
    },
  ],
  faqs: [
    {
      q: "How long does it take to set up an AI writing voice?",
      a: "About 10 to 15 minutes for most people. Pick three to five sent emails you like, describe your formality, greetings, sign-offs and phrases, then test the result on a few real emails. In MailPilot AI this is the one-time Persona setup, and you can refine it whenever you like.",
    },
    {
      q: "Can ChatGPT write emails in my style?",
      a: "Yes, if you give it enough to work from. Describe your formality, openings, sign-offs, sentence length and phrases you use or avoid, and paste three to five real emails. Then correct its drafts and update your description until the edits are small.",
    },
    {
      q: "How many sample emails does AI need to learn my style?",
      a: "Three to five varied examples are enough for most people to get a recognisable voice, especially alongside a written description. More helps if your writing changes a lot between audiences.",
    },
    {
      q: "Will people know an AI wrote my email?",
      a: "They're less likely to if the draft follows your voice brief and you review it before sending. Generic AI phrases are the giveaway, so add them to your never-use list.",
    },
    {
      q: "What's the difference between an AI email writer and an email agent?",
      a: "An AI email writer helps when you ask it to write something. An email agent such as MailPilot AI works in your inbox in the background, drafting replies and follow-ups in your voice as email arrives, then waiting for your approval.",
    },
  ],
  sources: [],
  supports: ["features/ai-email-writer", "how-it-works"],
  related: ["follow-up-email-after-no-response", "best-ai-email-assistants", "how-to-manage-email-overload"],
};

export const statsPost: BlogPost = {
  slug: "email-statistics-time-spent",
  category: "Research",
  title: "How much time do people spend on email?",
  script: "2026 statistics",
  seo: {
    title: "How Much Time Do People Spend on Email? 2026 Statistics & Sources",
    description:
      "How much time people spend on email, with sources: 117 emails a day, interruptions every 2 minutes and about 3 hours of work email daily. 2026 statistics.",
    keywords: ["how much time do people spend on email", "email statistics 2026", "time spent on email per day", "email overload statistics"],
  },
  keyword: "how much time do people spend on email",
  excerpt: "The best-sourced numbers on email volume, time and interruptions, and what they mean for how you work.",
  published: "2026-11-03",
  updated: "2026-11-03",
  author: "MailPilot Editorial Team",
  hero: { name: "blog-stats-hero", fallback: "day-before", alt: "A professional at their desk in the evening, still working through email" },
  answer:
    "Most office workers spend around three hours a day on work email. Adobe's 2019 survey of US workers put it at almost three and a half hours. Microsoft's 2025 data shows the average worker receives 117 emails a day and is interrupted by a meeting, email or notification about every two minutes. Worldwide, about 376 billion emails are sent and received daily.",
  takeaways: [
    "The average worker receives 117 emails a day and skims most in under a minute (Microsoft, 2025).",
    "US workers reported almost 3.5 hours a day on work email (Adobe, 2019).",
    "Email takes about 28% of the knowledge-worker week (McKinsey Global Institute, 2012).",
    "About 40% of people online at 6 am are already reviewing email (Microsoft, 2025).",
    "Checking email less often lowered daily stress in a controlled study (Kushlev & Dunn, 2015).",
  ],
  body: [
    {
      t: "stats",
      items: [
        { value: "117", label: "emails received by the average worker each day", source: "Microsoft Work Trend Index, 2025" },
        { value: "2 min", label: "between interruptions from meetings, email or notifications", source: "Microsoft Work Trend Index, 2025" },
        { value: "~3.4 h", label: "a day on work email reported by US workers", source: "Adobe Email Usage Study, 2019" },
        { value: "376 bn", label: "emails sent and received worldwide every day in 2025", source: "The Radicati Group" },
      ],
    },
    { t: "h2", id: "how-much-time", text: "How many hours a day do people spend on email?" },
    {
      t: "p",
      text: "Roughly three hours on work email for a typical office worker. Adobe's 2019 Email Usage Study, a survey of 1,002 US adults, found people spent almost three and a half hours a day on work email, plus about two more on personal email. Other write-ups of Adobe's surveys report figures between 3.1 and 3.4 hours depending on the year.",
    },
    {
      t: "p",
      text: "An older but often-quoted benchmark from the McKinsey Global Institute put email at about **28% of the knowledge-worker week**. The exact number varies by study, but every source lands in the same place: email is a second job hiding inside the first one.",
    },
    { t: "h2", id: "how-many-emails", text: "How many emails does the average person get a day?" },
    {
      t: "p",
      text: "The average worker receives **117 emails a day**, according to Microsoft's 2025 Work Trend Index, which is based on anonymised Microsoft 365 signals. Most of those emails are skimmed in under a minute. Microsoft also found that mass emails to 20 or more people rose 7% in a year, while one-to-one threads fell 5%.",
    },
    { t: "h2", id: "interruptions", text: "How often does email interrupt the workday?" },
    {
      t: "p",
      text: "About every two minutes. Microsoft's telemetry shows employees using Microsoft 365 are interrupted by a meeting, email or notification roughly every two minutes during core hours. For the most-pinged fifth of users, that adds up to around 275 interruptions a day.",
    },
    {
      t: "bars",
      title: "Email doesn't stay inside working hours",
      unit: "%",
      items: [
        { label: "People online at 6 am who start by reviewing email", value: 40, display: "40%" },
        { label: "Active workers back in their inbox by 10 pm", value: 29, display: "29%" },
        { label: "Weekend workers checking email before noon", value: 20, display: "~20%" },
        { label: "Rise in meetings after 8 pm, year on year", value: 16, display: "+16%" },
      ],
      source: "Microsoft Work Trend Index special report, \"Breaking down the infinite workday\", June 2025",
    },
    { t: "h2", id: "after-hours", text: "Do people check email outside working hours?" },
    {
      t: "p",
      text: "Yes, and often. Microsoft found that 40% of people online at 6 am are reviewing email for the day's priorities, 29% of active workers are back in their inboxes by 10 pm, and the average employee sends or receives more than 50 messages outside core business hours. Microsoft calls it the \"infinite workday\".",
    },
    {
      t: "figure",
      photo: { name: "blog-stats-1", fallback: "day-after", alt: "Early morning light over a desk with a coffee cup and a phone" },
      caption: "For many people, the inbox is the first thing they see at 6 am and the last thing at 10 pm.",
    },
    { t: "h2", id: "global", text: "How many emails are sent worldwide each day?" },
    {
      t: "p",
      text: "About **376.4 billion a day in 2025**, rising to more than 424 billion by 2028, according to The Radicati Group. Radicati also estimates about 4.6 billion email users worldwide in 2025, counting both business and consumer accounts.",
    },
    {
      t: "table",
      caption: "Worldwide email traffic forecast",
      head: ["Year", "Emails sent and received per day", "Email users"],
      rows: [
        ["2024", "361.6 billion", "Not reported"],
        ["2025", "376.4 billion", "4.59 billion"],
        ["2026", "392.5 billion", "Not reported"],
        ["2028", "424.2 billion", "4.97 billion"],
      ],
      note: "Source: The Radicati Group, Email Statistics Report 2024–2028, executive summary.",
    },
    { t: "h2", id: "stress", text: "Does checking email less often help?" },
    {
      t: "p",
      text: "Yes. In a two-week study of 124 adults published in Computers in Human Behavior, Kushlev and Dunn asked people to check email only three times a day for one week and as often as they liked for the other. Participants reported **significantly lower daily stress** in the limited week, and checking more often didn't make them feel more productive.",
    },
    {
      t: "figure",
      photo: { name: "blog-stats-2", fallback: "exec-review", alt: "A professional reading a short summary by a window instead of scrolling an inbox" },
      caption: "Fewer, planned inbox sessions beat constant checking.",
    },
    { t: "h2", id: "mistakes", text: "Common mistakes when reading email statistics" },
    {
      t: "ul",
      items: [
        "**Quoting numbers without the year.** Survey figures shift; always cite the source and date.",
        "**Mixing work and personal email.** Adobe's totals combine both; separate them when you compare.",
        "**Treating vendor blog numbers as research.** Trace each figure back to the original study.",
        "**Assuming one country fits all.** Adobe's survey covered US adults; Microsoft's data covers Microsoft 365 users.",
      ],
    },
    { t: "h2", id: "what-to-do", text: "What can you do with these numbers?" },
    {
      t: "p",
      text: "Measure your own. Most of that time goes on a few repeat jobs: writing replies, chasing people who haven't answered and working out what matters. An assistant that [drafts replies in your voice](/features/ai-email-writer/) and handles the [follow-ups](/blog/follow-up-email-after-no-response/) attacks the biggest of them. Then look at your own numbers: your response times, unanswered threads and the hours you spend in the inbox tell you more than any average. MailPilot's [inbox analytics](/features/inbox-performance-overview/) show this for your own mailbox, and its [morning briefing](/features/ai-email-summary/) turns the day's email into a short list. For leaders, see [how executives use MailPilot](/solutions/executives/), or read our [routine for managing email overload](/blog/how-to-manage-email-overload/). You can try it free with starter credits ([pricing](/pricing/)).",
    },
    {
      t: "cta",
      title: "See your own email numbers",
      text: "MailPilot shows your response time, reply rate and unanswered threads, then drafts the replies. Start free.",
      href: "/features/inbox-performance-overview/",
      label: "See inbox analytics",
    },
  ],
  faqs: [
    {
      q: "How can I reduce the time I spend on email?",
      a: "Check email in a few planned sessions instead of all day, filter newsletters and notifications out of your inbox, reuse templates for common replies, and let an AI assistant draft replies and follow-ups for you to approve. Measuring your own response times first shows where the time really goes.",
    },
    {
      q: "How much time does the average person spend on email per day?",
      a: "Around three hours on work email for a typical US office worker. Adobe's 2019 survey found almost three and a half hours a day on work email, plus roughly two hours on personal email.",
    },
    {
      q: "How many emails does the average office worker receive per day?",
      a: "117 on average, according to Microsoft's 2025 Work Trend Index, based on anonymised Microsoft 365 data. Most are skimmed in under a minute.",
    },
    {
      q: "What percentage of the workweek is spent on email?",
      a: "About 28%, according to a McKinsey Global Institute analysis of knowledge workers. It's an older figure (2012), but more recent surveys still put work email at around three hours a day.",
    },
    {
      q: "How many emails are sent per day worldwide?",
      a: "About 376.4 billion emails were sent and received each day in 2025, according to The Radicati Group, which forecasts more than 424 billion a day by 2028.",
    },
    {
      q: "Does checking email less reduce stress?",
      a: "Yes. In a controlled study of 124 adults, limiting email checks to three times a day led to significantly lower daily stress than unlimited checking, with no loss in how productive people felt.",
    },
  ],
  sources: [
    { label: "Microsoft WorkLab, \"Breaking down the infinite workday\" (Work Trend Index, June 2025)", url: "https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday" },
    { label: "CIO Dive, \"Email drains 5 hours of workers' time every day, Adobe finds\" (September 2019)", url: "https://www.ciodive.com/news/email-drains-5-hours-of-workers-time-every-day-adobe-finds/562874/" },
    { label: "McKinsey Global Institute, \"The social economy\" (2012)", url: "https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy" },
    { label: "The Radicati Group, Email Statistics Report 2024–2028, executive summary", url: "https://radicati.com/wp/wp-content/uploads/2024/10/Email-Statistics-Report-2024-2028-Executive-Summary.pdf" },
    { label: "Kushlev & Dunn, \"Checking email less frequently reduces stress\", Computers in Human Behavior (2015)", url: "https://www.interruptions.net/literature/Kushlev-ComputHumBehav15.pdf" },
  ],
  supports: ["solutions/executives", "features/inbox-performance-overview"],
  related: ["how-to-manage-email-overload", "follow-up-email-after-no-response", "best-ai-email-assistants"],
};

export const overloadPost: BlogPost = {
  slug: "how-to-manage-email-overload",
  category: "Productivity",
  title: "How to manage email overload:",
  script: "a 15-minute daily routine",
  seo: {
    title: "How to Manage Email Overload: A 15-Minute Daily Routine That Works",
    description:
      "How to manage email overload with a simple daily routine: three planned inbox sessions, the 4D triage method, Gmail filters, templates and AI drafting.",
    keywords: ["how to manage email overload", "email overload", "how to manage your inbox", "email management tips"],
  },
  keyword: "manage email overload",
  excerpt: "Three planned inbox sessions, one triage rule and a few automations: a routine that gets email back to a manageable size.",
  published: "2026-11-03",
  updated: "2026-11-03",
  author: "MailPilot Editorial Team",
  hero: { name: "blog-overload-hero", fallback: "day-after", alt: "A tidy desk in morning light with a notebook and a cup of coffee" },
  answer:
    "To manage email overload, stop checking constantly and work through your inbox in three planned sessions a day. Triage each email once: delete it, delegate it, do it if it takes under two minutes, or defer it to a set time. Filter newsletters and notifications automatically, reuse templates for common replies, and let AI draft the rest for you to approve.",
  takeaways: [
    "Check email in three planned sessions instead of all day; it lowers stress.",
    "Touch each email once with the 4D rule: delete, delegate, do or defer.",
    "Filters keep newsletters and notifications out of your main inbox.",
    "Templates and AI drafts remove most of the typing.",
    "A short weekly review stops threads and follow-ups slipping.",
  ],
  body: [
    {
      t: "table",
      caption: "The routine at a glance",
      head: ["When", "Time", "What you do"],
      rows: [
        ["Morning", "5 min", "Read your briefing, clear anything urgent, plan the day"],
        ["Midday", "5 min", "Triage new email with the 4D rule, approve drafts"],
        ["Late afternoon", "5 min", "Send replies, set follow-ups, close the inbox"],
        ["Friday", "15 min", "Weekly review: open threads, cooling contacts, unsubscribes"],
      ],
      note: "Times assume drafts are prepared for you. Without help, expect longer sessions at first.",
    },
    { t: "h2", id: "signs", text: "What are the signs of email overload?" },
    {
      t: "ul",
      items: [
        "You check email first thing in the morning and last thing at night.",
        "Important emails get answered days late, or not at all.",
        "You keep emails unread as reminders, so the unread count never falls.",
        "You lose track of who you owe a reply to, and who owes you one.",
        "Deep work keeps getting broken up by \"just a quick check\".",
      ],
    },
    {
      t: "p",
      text: "If three or more sound familiar, you're not alone. Microsoft's 2025 research found the average worker receives 117 emails a day and is interrupted roughly every two minutes. Our [email statistics roundup](/blog/email-statistics-time-spent/) has the full picture, and it's often worse for leaders: see [how executives use MailPilot](/solutions/executives/) to cut the volume.",
    },
    { t: "h2", id: "batch", text: "Why check email in batches instead of all day?" },
    {
      t: "p",
      text: "Because constant checking costs more than it gives. In a study of 124 adults, Kushlev and Dunn found that people limited to checking email three times a day reported significantly lower daily stress than when they checked freely, and they didn't feel any less productive.",
    },
    {
      t: "p",
      text: "Pick three set times, such as 9:00, 13:00 and 16:30, and close the inbox in between. Turn off desktop and phone notifications for email, and keep alerts only for people who genuinely can't wait.",
    },
    { t: "h2", id: "4d", text: "How does the 4D triage method work?" },
    { t: "p", text: "Decide what to do with each email the first time you open it. There are only four options:" },
    {
      t: "ol",
      items: [
        "**Delete (or archive).** No action needed. Get it out of sight.",
        "**Delegate.** Someone else should handle it. Forward it with a one-line note.",
        "**Do.** If it takes under two minutes, reply now.",
        "**Defer.** Bigger tasks go to your calendar or task list with a time, not back into the inbox.",
      ],
    },
    {
      t: "callout",
      tone: "tip",
      title: "The rule that makes it work",
      text: "Never leave an email unread as a reminder. If it needs action later, it belongs on your calendar or task list.",
    },
    {
      t: "figure",
      photo: { name: "blog-overload-1", fallback: "notes-instructions", alt: "A person sorting paper letters into neat piles on a desk" },
      caption: "Decide once: delete, delegate, do or defer.",
    },
    { t: "h2", id: "filters", text: "Which emails should you filter automatically?" },
    {
      t: "p",
      text: "Anything you read in bulk or not at all: newsletters, receipts, app notifications and mailing lists. In Gmail, create filters that skip the inbox and apply a label, so you read them on your schedule. Google's help centre explains how to create rules to filter your email.",
    },
    {
      t: "checklist",
      title: "Filter these out of your main inbox",
      items: ["Newsletters and marketing emails", "Receipts and invoices you only need for records", "App and tool notifications", "Mailing lists and group CCs", "Calendar acceptances"],
    },
    { t: "h2", id: "templates", text: "How do templates and AI drafts save time?" },
    {
      t: "p",
      text: "Most inboxes are full of the same few replies: scheduling, saying yes, saying no, sending a document. Save those as templates (Gmail calls them templates; Outlook calls them My Templates or Quick Parts). For everything else, an AI email assistant can draft the reply so your job becomes reviewing, not typing. The trick is a draft that already [sounds like you](/features/ai-email-writer/), so approving takes seconds.",
    },
    {
      t: "p",
      text: "[MailPilot AI](/features/) drafts replies in your own voice as email arrives, so each inbox session is mostly approving. Its [morning briefing](/features/ai-email-summary/) sorts new mail into urgent items, deadlines and payments, action items and meetings, which is the first five minutes of this routine done for you.",
    },
    {
      t: "figure",
      photo: { name: "blog-overload-2", fallback: "exec-review", alt: "A professional reviewing a short list of priorities with a coffee" },
      caption: "Start the day with a shortlist, not a scroll.",
    },
    { t: "h2", id: "weekly-review", text: "What should a weekly email review include?" },
    {
      t: "ul",
      items: [
        "**Open threads:** anything still waiting on you, and anything waiting on others.",
        "**Follow-ups due:** proposals and requests that haven't had a reply. Our guide covers [how to write a follow-up after no response](/blog/follow-up-email-after-no-response/), or let [automated follow-ups](/features/email-follow-up-automation/) draft them for you.",
        "**Cooling contacts:** important people you haven't spoken to in a while.",
        "**Unsubscribes:** five minutes removing newsletters you never read.",
      ],
    },
    { t: "h2", id: "mistakes", text: "Common mistakes" },
    {
      t: "ul",
      items: [
        "**Aiming for inbox zero every hour.** The goal is control, not an empty inbox at all times.",
        "**Answering everything instantly.** It trains people to expect instant replies.",
        "**Using the inbox as a to-do list.** Tasks get lost under new mail.",
        "**Filtering too aggressively.** Check your filtered labels weekly so nothing important hides there.",
        "**Skipping the weekly review.** That's where dropped follow-ups get caught.",
      ],
    },
    {
      t: "cta",
      title: "Get your mornings back",
      text: "MailPilot briefs you on what matters and drafts the replies, so each inbox session takes minutes. Free starter credits.",
      href: "/features/ai-email-summary/",
      label: "See the morning briefing",
    },
  ],
  faqs: [
    {
      q: "What is the fastest way to clear a full inbox?",
      a: "Archive everything older than two weeks that nobody has chased, unsubscribe from newsletters you never read, then triage the rest with the 4D rule: delete, delegate, do or defer. Anything genuinely important will resurface, and an AI morning briefing can pull urgent items to the top for you.",
    },
    {
      q: "How do you deal with email overload?",
      a: "Check email in a few planned sessions instead of all day, triage each message once with the 4D rule (delete, delegate, do, defer), filter newsletters and notifications, use templates for common replies, and let an AI assistant draft the rest for you to approve.",
    },
    {
      q: "How many times a day should you check email?",
      a: "Around three planned sessions works for most people. In a study of 124 adults, checking email three times a day led to significantly lower daily stress than unlimited checking, without making people feel less productive.",
    },
    {
      q: "What is the 4D method for email?",
      a: "It's a triage rule: for each email, either delete it, delegate it to someone better placed, do it straight away if it takes under two minutes, or defer it to a specific time on your calendar or task list.",
    },
    {
      q: "Can AI help manage email overload?",
      a: "Yes. AI assistants can summarise your inbox, sort urgent items from noise and draft replies. MailPilot AI, for example, sends a morning briefing and drafts replies and follow-ups in your voice for you to approve.",
    },
  ],
  sources: [
    { label: "Kushlev & Dunn, \"Checking email less frequently reduces stress\", Computers in Human Behavior (2015)", url: "https://www.interruptions.net/literature/Kushlev-ComputHumBehav15.pdf" },
    { label: "Microsoft WorkLab, \"Breaking down the infinite workday\" (Work Trend Index, June 2025)", url: "https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday" },
    { label: "Gmail Help: Create rules to filter your emails", url: "https://support.google.com/mail/answer/6579" },
  ],
  supports: ["features/ai-email-summary", "solutions/executives"],
  related: ["email-statistics-time-spent", "follow-up-email-after-no-response", "ai-write-emails-in-your-voice"],
};
