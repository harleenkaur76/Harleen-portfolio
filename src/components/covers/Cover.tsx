import type { CaseStudy } from "@/content/work";

// Art-directed covers: small schematic drawings of each experiment, with a
// Control state and a Variant state that follow the A/B switch in the header.
// Drawn as inline SVG so they cost nothing to load and stay sharp anywhere.

const ink = "var(--ink)";
const soft = "var(--ink-soft)";
const rule = "var(--rule)";
const ox = "var(--oxblood)";
const paper = "var(--paper)";
const mono = { fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: 1.2 };
const serif = { fontFamily: "var(--font-instrument), Georgia, serif" };

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 640 440" role="img" aria-hidden="true" focusable="false">
      <rect x="60" y="48" width="520" height="344" rx="6" fill={paper} stroke={ink} />
      <line x1="60" y1="78" x2="580" y2="78" stroke={ink} />
      <circle cx="78" cy="63" r="3.5" fill="none" stroke={ink} />
      <circle cx="92" cy="63" r="3.5" fill="none" stroke={ink} />
      <circle cx="106" cy="63" r="3.5" fill="none" stroke={ink} />
      {children}
    </svg>
  );
}

function Checkout() {
  return (
    <Frame>
      <g className="only-a">
        <text x="230" y="150" fill={ink} style={{ ...serif, fontSize: 26 }}>
          Checkout
        </text>
        <rect x="230" y="176" width="180" height="34" fill="none" stroke={soft} />
        <line x1="242" y1="193" x2="318" y2="193" stroke={rule} strokeWidth="3" />
        <rect x="230" y="224" width="180" height="34" fill={soft} />
        <line x1="230" y1="290" x2="410" y2="290" stroke={rule} />
        <line x1="230" y1="306" x2="350" y2="306" stroke={rule} />
      </g>
      <g className="only-b">
        {["Log in", "Create", "Guest"].map((label, index) => {
          const x = 92 + index * 156;
          const active = index === 2;
          return (
            <g key={label}>
              <rect
                x={x}
                y="118"
                width="140"
                height="232"
                fill={active ? "var(--paper-deep)" : "none"}
                stroke={active ? ox : ink}
                strokeWidth={active ? 1.5 : 1}
              />
              <text x={x + 16} y="154" fill={active ? ox : ink} style={{ ...serif, fontSize: 23 }}>
                {label}
              </text>
              {index < 2 && (
                <>
                  <rect x={x + 16} y="176" width="108" height="24" fill="none" stroke={soft} />
                  <rect x={x + 16} y="210" width="108" height="24" fill="none" stroke={soft} />
                </>
              )}
              {index === 1 && (
                <rect x={x + 16} y="244" width="108" height="24" fill="none" stroke={soft} />
              )}
              <rect x={x + 16} y="306" width="108" height="26" fill={active ? ox : ink} />
            </g>
          );
        })}
      </g>
    </Frame>
  );
}

function SeatMap() {
  const rows = [0, 1, 2, 3, 4];
  const cols = [0, 1, 2, 4, 5, 6];
  return (
    <g>
      {rows.map((row) =>
        cols.map((col) => (
          <rect
            key={`${row}-${col}`}
            x={212 + col * 31}
            y={212 + row * 31}
            width="22"
            height="22"
            rx="3"
            fill={row === 2 && col === 1 ? ink : "none"}
            stroke={ink}
          />
        )),
      )}
    </g>
  );
}

function Locale() {
  const headings = [
    ["NO", "Setevalg strekning (1/2)"],
    ["SE", "Platsreservation sträcka (1/2)"],
    ["DK", "Pladsreservation strækning (1/2)"],
    ["EN", "Seat reservation leg (1/2)"],
  ];
  return (
    <Frame>
      <g className="only-a">
        <line x1="212" y1="150" x2="330" y2="150" stroke={rule} strokeWidth="4" />
        <g transform="translate(0 -24)">
          <SeatMap />
        </g>
      </g>
      <g className="only-b">
        {headings.map(([code, text], index) => (
          <g key={code}>
            <text x="92" y={112 + index * 23} fill={soft} style={mono}>
              {code}
            </text>
            <text
              x="124"
              y={113 + index * 23}
              fill={index === 3 ? ox : ink}
              style={{ ...serif, fontSize: 19, fontStyle: index === 3 ? "italic" : "normal" }}
            >
              {text}
            </text>
          </g>
        ))}
        <SeatMap />
      </g>
    </Frame>
  );
}

function Cli() {
  return (
    <Frame>
      <g className="only-a">
        {[0, 1, 2, 3, 4, 5, 6].map((row) => (
          <g key={row}>
            <rect x="100" y={104 + row * 38} width="16" height="16" fill="none" stroke={ink} />
            <line
              x1="132"
              y1={112 + row * 38}
              x2={300 + ((row * 67) % 190)}
              y2={112 + row * 38}
              stroke={rule}
              strokeWidth="4"
            />
          </g>
        ))}
        <text x="540" y="364" textAnchor="end" fill={soft} style={mono}>
          BY HAND, AGAIN
        </text>
      </g>
      <g className="only-b">
        <text x="100" y="236" fill={ox} style={{ ...mono, fontSize: 30, letterSpacing: 0 }}>
          $
        </text>
        <rect x="130" y="212" width="16" height="30" fill={ink} />
        <line x1="100" y1="262" x2="540" y2="262" stroke={ink} />
        <text x="100" y="290" fill={soft} style={mono}>
          ONE COMMAND
        </text>
      </g>
    </Frame>
  );
}

const covers = { checkout: Checkout, locale: Locale, cli: Cli };

export default function Cover({ study }: { study: CaseStudy }) {
  const Drawing = covers[study.cover];
  return (
    <figure>
      <div className="cover">
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
