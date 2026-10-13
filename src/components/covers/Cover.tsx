import type { CaseStudy } from "@/content/work";

// Art-directed covers. Each case file gets a typographic poster, not a
// screenshot: the client work can't be shown, so the cover shows the idea.
// Every poster has a Control state and a Variant state that follow the A/B
// switch. Inline SVG, so they cost nothing to load and stay sharp anywhere.

const ink = "var(--ink)";
const soft = "var(--ink-soft)";
const rule = "var(--rule)";
const ox = "var(--oxblood)";
const mono = { fontFamily: "var(--mono)", fontSize: 12, letterSpacing: 1.6 };
const serif = { fontFamily: "var(--display)" };

function Poster({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 640 500" role="img" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

// 01: the same email address, typed once, seen (or not) by React.
function Checkout() {
  return (
    <Poster>
      <text
        x="-10"
        y="492"
        fill={rule}
        style={{ fontFamily: "var(--mono)", fontSize: 104, letterSpacing: -4 }}
      >
        _valueTracker
      </text>

      <text x="44" y="66" fill={soft} style={mono}>
        WHAT THE SHOPPER TYPED
      </text>
      <rect x="44" y="84" width="552" height="92" fill="none" stroke={ink} strokeWidth="1.5" />
      <text x="68" y="146" fill={ink} style={{ ...serif, fontSize: 41, fontStyle: "italic" }}>
        hello@example.com
      </text>
      <rect x="462" y="104" width="2" height="52" fill={ox} />

      <text x="44" y="232" fill={soft} style={mono}>
        WHAT REACT SAW
      </text>
      <g className="only-a">
        <rect
          x="44"
          y="250"
          width="552"
          height="92"
          fill="none"
          stroke={soft}
          strokeDasharray="6 7"
        />
        <text x="68" y="304" fill={soft} style={{ ...mono, fontSize: 15 }}>
          NOTHING AT ALL
        </text>
      </g>
      <g className="only-b">
        <rect x="44" y="250" width="552" height="92" fill="none" stroke={ox} strokeWidth="1.5" />
        <text x="68" y="312" fill={ox} style={{ ...serif, fontSize: 41, fontStyle: "italic" }}>
          hello@example.com
        </text>
      </g>
    </Poster>
  );
}

// 02: one heading, four markets, and the counter that made it useful.
function Locale() {
  const headings = [
    ["NO", "Setevalg strekning"],
    ["SE", "Platsreservation sträcka"],
    ["DK", "Pladsreservation strækning"],
    ["EN", "Seat reservation leg"],
  ];
  return (
    <Poster>
      <text
        x="660"
        y="486"
        textAnchor="end"
        fill={rule}
        style={{ ...serif, fontSize: 250, fontStyle: "italic", letterSpacing: -8 }}
      >
        1/2
      </text>
      {headings.map(([code, text], index) => {
        const y = 106 + index * 82;
        const last = index === headings.length - 1;
        return (
          <g key={code}>
            <text x="44" y={y - 6} fill={soft} style={mono}>
              {code}
            </text>
            <line
              x1="44"
              y1={y + 22}
              x2="596"
              y2={y + 22}
              stroke={ink}
              strokeWidth={last ? 1.5 : 0.75}
            />
            <g className="only-a">
              <rect x="96" y={y - 26} width={300 - index * 34} height="14" fill={rule} />
            </g>
            <g className="only-b">
              <text
                x="96"
                y={y}
                fill={last ? ox : ink}
                style={{ ...serif, fontSize: 36, fontStyle: last ? "italic" : "normal" }}
              >
                {text}
              </text>
            </g>
          </g>
        );
      })}
    </Poster>
  );
}

// 03: the setup, by hand, every time. Or one prompt.
function Cli() {
  return (
    <Poster>
      <g className="only-a">
        {[0, 1, 2, 3, 4, 5, 6].map((row) => (
          <g key={row}>
            <rect x="48" y={62 + row * 54} width="22" height="22" fill="none" stroke={ink} />
            <line
              x1="92"
              y1={73 + row * 54}
              x2={330 + ((row * 83) % 250)}
              y2={73 + row * 54}
              stroke={rule}
              strokeWidth="6"
            />
          </g>
        ))}
        <text x="592" y="462" textAnchor="end" fill={soft} style={mono}>
          BY HAND, AGAIN
        </text>
      </g>
      <g className="only-b">
        <text x="30" y="330" fill={ox} style={{ fontFamily: "var(--mono)", fontSize: 330 }}>
          $
        </text>
        <rect x="250" y="96" width="92" height="236" fill={ink} />
        <line x1="44" y1="392" x2="596" y2="392" stroke={ink} />
        <text x="44" y="430" fill={soft} style={mono}>
          ONE COMMAND
        </text>
        <text x="596" y="430" textAnchor="end" fill={soft} style={mono}>
          NODE · GULP · REST
        </text>
      </g>
    </Poster>
  );
}

const covers = { checkout: Checkout, locale: Locale, cli: Cli };

export default function Cover({ study, reveal = false }: { study: CaseStudy; reveal?: boolean }) {
  const Drawing = covers[study.cover];
  return (
    <figure>
      <div className={`cover tone-${study.tone} ${reveal ? "cover-reveal" : ""}`}>
        <Drawing />
      </div>
      <figcaption className="label mt-3 flex gap-3">
        <span className="shrink-0 text-oxblood">Fig. {study.number}</span>
        <span className="only-a">{study.coverCaption.a}</span>
        <span className="only-b">{study.coverCaption.b}</span>
      </figcaption>
    </figure>
  );
}
