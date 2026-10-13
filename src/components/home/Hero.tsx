import Link from "next/link";
import { personal } from "@/content/home";
import { site } from "@/content/site";
import SplitReveal from "./SplitReveal";

// A slowly turning ring of her own words.
function Ring() {
  return (
    <div className="relative size-36 shrink-0 md:size-48" aria-hidden="true">
      <svg viewBox="0 0 220 220" className="spin absolute inset-0 size-full">
        <defs>
          <path id="ring" d="M110,110 m-96,0 a96,96 0 1,1 192,0 a96,96 0 1,1 -192,0" />
        </defs>
        <text
          fill="var(--ink)"
          style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: 2 }}
        >
          <textPath href="#ring" textLength="596" lengthAdjust="spacing">
            {personal.ring.toUpperCase()}
          </textPath>
        </text>
      </svg>
      <span className="display absolute inset-0 flex items-center justify-center text-7xl text-oxblood md:text-8xl">
        ✳
      </span>
    </div>
  );
}

// What this hero looks like with every design decision removed. Shown when
// the page is switched to A, and as the "before" layer of the split.
function ControlHero({ heading }: { heading: "h1" | "p" }) {
  const Heading = heading;
  return (
    <div className="mx-auto max-w-2xl px-5 py-10 text-center">
      <p className="label">Portfolio</p>
      <Heading className="mt-3 text-[clamp(2rem,4.6vw,3.25rem)] font-bold leading-tight tracking-tight">
        Hi, I’m Harleen Kaur. I’m a frontend developer.
      </Heading>
      <p className="mt-5 text-ink-soft">
        Frontend engineer with nearly five years of experience building A/B experiments on live
        websites for brands including Microsoft, Accor and Norwegian.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link href="/#work" className="btn btn-solid">
          View my work
        </Link>
        <Link href="/#contact" className="btn btn-ghost">
          Contact me
        </Link>
      </div>
    </div>
  );
}

const index = [
  { label: "Currently", value: "Senior Frontend Developer, Optiphoenix" },
  { label: "Based in", value: site.location },
  { label: "Runs on", value: "Coffee, mostly" },
  { label: "Browser", value: "A little ambition, a lot of tabs open" },
];

export default function Hero() {
  return (
    <section className="pb-14 md:pb-20">
      {/* Variant B: the designed hero, with the control underneath the handle */}
      <div className="only-b">
        <SplitReveal control={<ControlHero heading="p" />}>
          <div className="shell pb-12 pt-10 md:pb-16 md:pt-14">
            <p className="label flex flex-wrap justify-center gap-x-4 gap-y-1">
              <span>{site.role}</span>
              <span aria-hidden="true">/</span>
              <span>{site.location}</span>
              <span aria-hidden="true">/</span>
              <span>Field notes, since 2021</span>
            </p>

            <h1 className="display hero-title mt-6 text-center md:mt-8">
              I write code that has to survive inside{" "}
              <em className="text-oxblood">someone else’s</em> website.
            </h1>

            <div className="mt-10 grid items-end gap-10 md:mt-12 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-6">
                <p className="prose-body text-lg md:text-xl md:leading-relaxed">
                  For nearly five years I’ve built A/B experiments for brands including Microsoft,
                  Accor and Norwegian: new interfaces injected into production sites I don’t own, on
                  frameworks I didn’t choose. It teaches you to read a codebase before you touch it.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/#work" className="btn btn-solid arrow-link">
                    Read the case files{" "}
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                  <Link href="/#contact" className="btn btn-ghost">
                    Start a conversation
                  </Link>
                </div>
              </div>

              <aside className="flex items-center gap-6 md:col-span-6 md:col-start-7 md:justify-end">
                <div className="max-w-[15rem] md:order-1 md:text-right">
                  <p className="note md:pl-0 md:before:hidden">
                    This page was a plain one a second ago. Drag the handle on the right to see it
                    again.
                  </p>
                  <p className="label mt-5 flex items-center gap-2.5 md:justify-end">
                    <span className="relative flex size-2 shrink-0">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-oxblood opacity-60 motion-reduce:hidden" />
                      <span className="relative inline-flex size-2 rounded-full bg-oxblood" />
                    </span>
                    {site.availability}
                  </p>
                </div>
                <div className="md:order-2">
                  <Ring />
                </div>
              </aside>
            </div>
          </div>
        </SplitReveal>
      </div>

      {/* Variant A: the whole page is the control */}
      <div className="only-a shell py-10">
        <ControlHero heading="h1" />
      </div>

      <dl className="shell">
        <div className="grid grid-cols-2 border-t border-ink md:grid-cols-4">
          {index.map((item) => (
            <div
              key={item.label}
              className="border-b border-rule py-4 pr-4 md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0"
            >
              <dt className="label">{item.label}</dt>
              <dd className="mt-1 text-[0.9375rem] leading-snug">{item.value}</dd>
            </div>
          ))}
        </div>
      </dl>
    </section>
  );
}
