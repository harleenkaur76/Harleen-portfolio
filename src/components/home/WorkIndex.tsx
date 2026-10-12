import Link from "next/link";
import Cover from "@/components/covers/Cover";
import { work } from "@/content/work";
import SectionHeading from "./SectionHeading";

// Each case file gets its own composition so the list reads as three
// stories, not three identical cards.
const layouts = [
  { cover: "md:col-span-7", text: "md:col-span-4 md:col-start-9 md:self-end md:pb-10" },
  {
    cover: "md:col-span-6 md:col-start-7 md:order-2",
    text: "md:col-span-5 md:order-1 md:self-center",
  },
  {
    cover: "md:col-span-6 md:col-start-2",
    text: "md:col-span-4 md:col-start-9 md:self-start md:pt-8",
  },
];

export default function WorkIndex() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionHeading
          label="Selected work"
          title="Case files"
          count="03"
          note="Three problems worth writing down. Client results aren’t mine to publish, so these are about the engineering."
        />

        <ol className="mt-12 space-y-20 md:mt-16 md:space-y-28">
          {work.map((study, index) => {
            const layout = layouts[index % layouts.length];
            return (
              <li key={study.slug}>
                <Link
                  href={`/work/${study.slug}`}
                  className="arrow-link group grid gap-6 md:grid-cols-12 md:gap-8"
                >
                  <div className={layout.cover}>
                    <Cover study={study} reveal />
                  </div>
                  <div className={`reveal ${layout.text}`}>
                    <p
                      className="display text-7xl italic leading-none text-oxblood md:text-8xl"
                      aria-hidden="true"
                    >
                      {study.number}
                    </p>
                    <p className="label mt-4">{study.client}</p>
                    <h3 className="display mt-3 text-4xl transition-colors duration-300 group-hover:text-oxblood md:text-[3.25rem]">
                      {study.title}
                    </h3>
                    <p className="mt-4 text-ink-soft">{study.dek}</p>
                    <p className="mt-6 font-medium">
                      Read the case file{" "}
                      <span className="arrow" aria-hidden="true">
                        →
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>

        <p className="display reveal mx-auto mt-20 max-w-[20ch] text-center text-4xl md:mt-28 md:text-6xl">
          Got a page that misbehaves like one of these?{" "}
          <Link href="/#contact" className="arrow-link italic text-oxblood">
            Tell me about it{" "}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
}
