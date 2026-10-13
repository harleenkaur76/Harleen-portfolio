// Homepage copy that isn't a case study: the about narrative, the working
// principles, the freelance offer and the experiments list.

export const about = {
  statement:
    "Just one company so far, but I have shipped enough experiments across enough platforms to feel like I worked at five.",
  aside: "Most of that time I’ve been a guest in other people’s codebases.",
  paragraphs: [
    "I joined Optiphoenix as an intern in December 2021, while finishing a B.Tech in Information Technology at Indraprastha University, and stayed. Nearly five years on I’m a Senior Frontend Developer there, building A/B experiments for client brands including Microsoft, Accor and Norwegian.",
    "The job is stranger than it sounds. Every brief starts on a live website I have never seen, built on a framework I didn’t pick, with a release cycle I’m not part of. My code is injected on top and has to behave as though it had always been there. You learn to read before you write.",
    "Along the way I built the command-line tool the team uses to set up experiments, a React component library matched to our Figma files, and I’ve mentored three junior developers.",
    "Where I’m heading is product engineering, and AI-assisted developer tools in particular. I want to own the whole thing for once: the problem, the interface, and what happens after it ships.",
  ],
  facts: [
    { label: "Now", value: "Senior Frontend Developer, Optiphoenix" },
    { label: "Since", value: "December 2021, starting as an intern" },
    { label: "Studied", value: "B.Tech, Information Technology, Indraprastha University" },
    {
      label: "Platforms",
      value: "Optimizely, VWO, Adobe Target, Convert, AB Tasty, Kameleoon",
    },
    { label: "Runs on", value: "Coffee. Obsessively." },
    { label: "Browser", value: "A little ambition, a lot of tabs open" },
    {
      label: "Daily tools",
      value: "JavaScript, TypeScript, React, Next.js, Node.js, SCSS",
    },
  ],
  // Self-reported figures from the resume. The footnote on the page says so.
  figures: [
    { value: "100+", label: "experiments built" },
    { value: "30+", label: "client engagements" },
    { value: "6", label: "testing platforms" },
  ],
};

export const principles = [
  {
    title: "Read the site before touching it",
    body: "A new brief starts in DevTools, not in the editor. I map the DOM I’ll have to hook into and look for the risks early: is it React or Vue, is there shadow DOM, a content security policy, anything that renders late?",
    source: "Every brief",
  },
  {
    title: "When you can’t stop a behaviour, match its timing",
    body: "On a product listing page, choosing a filter on mobile threw the shopper back to the top. The scroll lived inside the site’s own component and couldn’t be prevented. So I recorded the position on tap and restored it as the filter panel finished closing. It reads as the page staying still.",
    source: "An Italian appliance maker",
  },
  {
    title: "The browser remembers more than you think",
    body: "I added submenu items to a navigation, and the menu began reopening when shoppers pressed back. The browser’s back-forward cache was restoring my DOM state, while the site’s own state lived in React and reset itself. A `pageshow` listener that clears my state fixed it.",
    source: "A luxury fragrance house",
  },
  {
    title: "Leave no fingerprints",
    body: "Every class and variable carries a unique prefix. Every selector is null-checked. Nothing global is overridden for longer than it has to be. If an element isn’t there, the script exits and the visitor sees the normal site.",
    source: "Every experiment",
  },
  {
    title: "Measure only what a person did",
    body: "A goal that fires twice makes a test look better than it is. I flag programmatic triggers so tracking fires on real actions only, and I write event selectors narrow enough that two experiments on one page can’t count each other’s clicks.",
    source: "Concurrent experiments",
  },
  {
    title: "Explain it without the jargon",
    body: "When something can’t be done cleanly, the client gets three things: what the visitor experiences, why the site does it, and what I’m trying next. No `setTimeout`, no observers. Just enough to make a decision.",
    source: "Client updates",
  },
];

export const services = {
  intro:
    "I take on a small amount of freelance work for founders and small teams whose site is busy but not converting the way it should.",
  items: [
    {
      title: "A careful read of the page",
      body: "I walk the journey the way a visitor would, on a phone and on a laptop, and come back with a short, ordered list of what’s getting in the way.",
    },
    {
      title: "The fix, built",
      body: "I implement the changes in your codebase, in React or plain JavaScript, with attention to load time and accessibility.",
    },
    {
      title: "A proper test",
      body: "If you’d rather know than guess, I build the change as a variant in your testing platform so you can measure it first.",
    },
  ],
  caveat:
    "I can’t promise you a number, and I’d be wary of anyone who does. I can promise a clear account of the problems and working code that addresses them.",
};

export type Experiment = {
  name: string;
  // Live product | Completed project | Working prototype | Learning project | Concept in development
  status: string;
  body: string;
  stack: string;
  href?: string;
};

export const experiments: Experiment[] = [
  {
    name: "Hydrofix",
    status: "Concept in development",
    body: "Hydration errors in the Next.js App Router are easy to silence and hard to actually fix. The idea is an AI-assisted workflow that has to prove its diagnosis: reproduce the mismatch, propose a change, then verify the error is gone before calling it done.",
    stack: "Next.js, AI tooling",
  },
  {
    name: "Revenue Leak Radar",
    status: "Concept in development",
    body: "The page review I do by hand, turned into a tool: analyse a website, find where the journey loses people, and return a prioritised list of specific things to change.",
    stack: "To be decided",
  },
  {
    name: "AI code editor",
    status: "Prototype in progress",
    body: "A browser-based editor with auth, code execution and AI assistance as separate services behind a gateway. The backend structure exists; the interface is still early.",
    stack: "React, Node.js, Express, MongoDB, Redis, LangGraph, Docker",
  },
  {
    name: "Caviar",
    status: "Learning project",
    body: "A food-ordering interface I built to practise React properly: lazy-loaded routes, shimmer placeholders and state that doesn’t fall over when the network does.",
    stack: "React, Tailwind CSS",
    href: "https://github.com/harleenkaur76/Caviar",
  },
];

// Her own words. Used in the hero ring and the marquee band.
export const personal = {
  ring: "Building · Learning · Networking · Winging it · ",
  marquee: [
    "A little ambition, a lot of tabs open",
    "Building, learning, networking & winging it",
    "Obsessed with coffee and with building new things",
  ],
};
