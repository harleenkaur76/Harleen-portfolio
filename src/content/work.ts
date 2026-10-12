// Case studies. Each entry renders as a row on the homepage and as a full
// page at /work/[slug]. Add a new object to `work` to publish another one.
//
// Text supports `inline code` with backticks. Case files never name the
// client: describe them ("a Nordic airline"). No experiment IDs, no endpoints.

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; code: string; caption?: string }
  | { type: "note"; text: string };

export type Section = { label: string; blocks: Block[] };

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  dek: string;
  client: string;
  role: string;
  stack: string[];
  // One of the honest status labels used across the site.
  status: string;
  cover: "checkout" | "locale" | "cli";
  // Background the cover drawing sits on.
  tone: "wine" | "blush" | "dark";
  coverCaption: { a: string; b: string };
  sections: Section[];
};

export const work: CaseStudy[] = [
  {
    slug: "the-input-react-couldnt-see",
    number: "01",
    title: "The input React couldn’t see",
    dek: "Rebuilding a checkout’s sign-in step as an A/B variant, on top of a React app that had no idea my inputs existed.",
    client: "A luxury fragrance house",
    role: "Sole developer on the variant: build, validation, locale handling and QA",
    stack: ["Vanilla JavaScript", "SCSS", "MutationObserver", "Webpack"],
    status: "Client experiment, built at Optiphoenix",
    cover: "checkout",
    tone: "wine",
    coverCaption: {
      a: "Control: the shopper types, React hears nothing",
      b: "Variant: the same value, now visible to React",
    },
    sections: [
      {
        label: "The problem",
        blocks: [
          {
            type: "p",
            text: "The checkout pushed every shopper through the same generic sign-in step. The hypothesis was that a clear three-way choice (log in, create an account, or continue as a guest) would lose fewer people at the moment they were most ready to buy.",
          },
          {
            type: "p",
            text: "It had to be tested before anyone committed engineering budget to it. That meant building the whole redesign as an experiment: a script injected over the live checkout, without touching the client’s codebase.",
          },
        ],
      },
      {
        label: "The catch",
        blocks: [
          {
            type: "p",
            text: "The checkout is a React app. Elements don’t exist until React mounts them, and React re-renders its form whenever it likes. My variant drew its own inputs over the native ones, and typing in them changed nothing React knew about.",
          },
          {
            type: "p",
            text: "Setting `.value` on the hidden native input did nothing. Dispatching a plain `input` event did nothing either. React keeps its own record of each input’s value in an internal `_valueTracker`, and it ignores a change it believes it has already seen.",
          },
          {
            type: "note",
            text: "With React you go around the DOM API, not through it.",
          },
        ],
      },
      {
        label: "The approach",
        blocks: [
          {
            type: "p",
            text: "Reset the tracker so React notices a difference, write the value with the prototype’s own setter, then dispatch the events React listens for.",
          },
          {
            type: "code",
            caption: "The sync, reduced to its core. Names are generic.",
            code: `const view = nativeEl.ownerDocument.defaultView;

// Let React's tracker fall out of date so it detects a change
if (nativeEl._valueTracker) {
  nativeEl._valueTracker.setValue(nativeEl.value);
}

// Use the prototype setter, not the one React patched onto the node
Object.getOwnPropertyDescriptor(view.HTMLInputElement.prototype, "value")
  .set.call(nativeEl, myInput.value);

// Fire what React's event system is listening for
nativeEl.dispatchEvent(new view.Event("input", { bubbles: true }));
nativeEl.dispatchEvent(new view.Event("change", { bubbles: true }));`,
          },
        ],
      },
      {
        label: "Decisions",
        blocks: [
          {
            type: "list",
            items: [
              "Overlay, don’t replace. The native form stays alive underneath and my inputs feed it, so the site’s own validation, API calls and step logic keep doing their jobs.",
              "Never trigger the native blur. On this checkout, blur advances the step, and advancing early strands the shopper.",
              "Re-sync on re-render. A MutationObserver re-applies values whenever React rebuilds its form mid-flow.",
              "One translation map for every market. Field labels, date-of-birth order, phone prefixes and validation messages all differ by country.",
              "Mirror the site’s own password rule instead of inventing a stricter or looser one.",
              "Prefix every class and variable, and null-check every selector. If an element is missing, the script exits quietly.",
            ],
          },
        ],
      },
      {
        label: "Outcome",
        blocks: [
          {
            type: "p",
            text: "The test result belongs to the client, so there is no uplift figure on this page. What I can stand behind is the build: roughly 1,000 lines of vanilla JavaScript covering login, account creation, guest checkout, validation and locale behaviour, written to run on a production checkout without disturbing the app beneath it.",
          },
        ],
      },
      {
        label: "What I’d do next",
        blocks: [
          {
            type: "p",
            text: "`_valueTracker` is a React internal. It works today and a future release could remove it. I would wrap the sync in one small utility with a feature check and a loud failure, so the day it stops working shows up as a console warning and not as a silently empty field.",
          },
        ],
      },
    ],
  },
  {
    slug: "one-experiment-four-markets",
    number: "02",
    title: "One experiment, four markets",
    dek: "What building multi-locale experiments for an airline and a hotel group taught me about where copy should live.",
    client: "A Nordic airline and a global hotel group",
    role: "Experiment developer: build, locale handling and QA",
    stack: ["Vanilla JavaScript", "SCSS", "MutationObserver"],
    status: "Client experiments, built at Optiphoenix",
    cover: "locale",
    tone: "blush",
    coverCaption: {
      a: "Control: a seat map with no sense of how far along you are",
      b: "Variant: one heading, four languages, counting the legs",
    },
    sections: [
      {
        label: "The problem",
        blocks: [
          {
            type: "p",
            text: "An experiment for an international brand is never one experiment. The airline runs in four markets: Norway, Denmark, Sweden and an international English site. The hotel group’s homepage search had to work in eight languages. A variant that is right in one locale and broken in another spoils the data for all of them.",
          },
        ],
      },
      {
        label: "Three examples",
        blocks: [
          {
            type: "list",
            items: [
              "Seat selection. On mobile, travellers had no sense of how many flight legs they were choosing seats for. I added a heading that reads the number of legs from the page and counts through them as the booking progresses.",
              "Destinations by month. A flat list of destinations became a month slider. The cards beneath it arrive asynchronously, so the slider waits for the data before it renders and stays in step with it afterwards.",
              "Homepage search. A richer search for the hotel group, with every label, placeholder, error message and date format served from a single map keyed on the detected language.",
            ],
          },
        ],
      },
      {
        label: "Decisions",
        blocks: [
          {
            type: "list",
            items: [
              "One translations object, keyed by locale. No sentence is ever typed inside the code that touches the DOM.",
              "Detect the locale two ways behind a single guard. Some markets are separate hostnames; the international site is a path.",
              "Fall back to the primary language. A slightly wrong language is better than an empty heading.",
              "Wait, don’t assume. The booking flow re-renders at every step, so the variant injects only when the right step is active and cleans up when it isn’t.",
            ],
          },
          {
            type: "code",
            caption: "A simplified illustration of the guard, not the production code.",
            code: `// Some markets are hostnames, the international site is a path
const fromHost = { no: "no", se: "se", dk: "dk" }[
  location.hostname.split(".").pop()
];
const fromPath = location.pathname.split("/")[1];

const locale = fromHost || (copy[fromPath] ? fromPath : "en");
const t = copy[locale] || copy.en;`,
          },
          {
            type: "note",
            text: "The bug is rarely in the translation. It’s in the assumption about how you found out which one to show.",
          },
        ],
      },
      {
        label: "Outcome",
        blocks: [
          {
            type: "p",
            text: "These were built as client experiments at Optiphoenix. The results are the clients’ to publish. What carried over for me is the habit: locale handling goes in on day one, because adding it afterwards means touching every line that writes text.",
          },
        ],
      },
      {
        label: "What I’d do next",
        blocks: [
          {
            type: "p",
            text: "Keep the copy out of the script altogether. I would hold it in a file that a translator can edit, and check at build time that every key exists in every locale, so a missing Danish string fails the build and not the booking.",
          },
        ],
      },
    ],
  },
  {
    slug: "the-setup-nobody-wanted-to-do-twice",
    number: "03",
    title: "The setup nobody wanted to do twice",
    dek: "A Node.js and Gulp command-line tool that creates A/B experiments through the Optimizely REST API, so the team stopped doing it by hand.",
    client: "Internal tooling at Optiphoenix",
    role: "Designed and built it, then rolled it out to the team",
    stack: ["Node.js", "Gulp", "Optimizely REST API"],
    status: "Internal tool, in team-wide use",
    cover: "cli",
    tone: "dark",
    coverCaption: {
      a: "Control: the same setup, by hand, every time",
      b: "Variant: one command",
    },
    // TODO(Harleen): this page is deliberately short because the code is
    // internal. Add what the CLI actually scaffolds, how the team adopted it,
    // and anything you are allowed to show (a redacted terminal recording
    // would be ideal).
    sections: [
      {
        label: "The problem",
        blocks: [
          {
            type: "p",
            text: "Every experiment began the same way: a round of manual setup before a single line of the actual variant was written. It was slow, it was repetitive, and repetitive work done by hand is where small mistakes get in.",
          },
        ],
      },
      {
        label: "What I built",
        blocks: [
          {
            type: "p",
            text: "A command-line tool in Node.js and Gulp that talks to the Optimizely REST API and creates the experiment for you. The developer starts from a working experiment and goes straight to the interesting part.",
          },
          {
            type: "note",
            text: "The best internal tools remove a step nobody enjoyed in the first place.",
          },
        ],
      },
      {
        label: "Outcome",
        blocks: [
          {
            type: "p",
            text: "By my own records, experiment setup time dropped by about 80%, which came to more than 12 engineering hours a week across the team, and the tool was adopted team-wide. Those are my figures from working there, not an audited measurement. The code belongs to Optiphoenix, so there is no repository to link.",
          },
        ],
      },
      {
        label: "What I’d do next",
        blocks: [
          {
            type: "p",
            text: "It speaks one platform’s API. The team also works in Convert, VWO, Kameleoon, Adobe Target and AB Tasty, so the next step is an adapter layer: one command, whichever platform the client happens to use.",
          },
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return work.find((item) => item.slug === slug);
}
