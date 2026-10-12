import Link from "next/link";
import Cover from "@/components/covers/Cover";
import { work } from "@/content/work";
import SectionHeading from "./SectionHeading";

// Each case file gets its own composition so the list reads as three
// stories, not three identical cards.
const layouts = [
  { cover: "md:col-span-7", text: "md:col-span-4 md:col-start-9 md:pt-10" },
  { cover: "md:col-span-6 md:col-start-7 md:order-2", text: "md:col-span-5 md:order-1 md:pt-16" },
  { cover: "md:col-span-5 md:col-start-2", text: "md:col-span-5 md:col-start-8 md:pt-6" },
];

export default function WorkIndex() {
  return (
    <section id="work" className="border-t border-rule py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          label="Selected work"
          title="Case files"
          note="Three problems worth writing down. Client results aren’t mine to publish, so these are about the engineering."
        />

        <ol className="mt-14 space-y-24 md:mt-20 md:space-y-36">
          {work.map((study, index) => {
            const layout = layouts[index % layouts.length];
            return (
              <li key={study.slug} className="reveal">
                <Link
                  href={`/work/${study.slug}`}
                  className="arrow-link group grid gap-7 md:grid-cols-12 md:gap-8"
                >
                  <div className={layout.cover}>
                    <Cover study={study} />
                  </div>
                  <div className={layout.text}>
                    <p className="label">
                      No. {study.number} <span aria-hidden="true">·</span> {study.client}
                    </p>
                    <h3 className="display mt-4 text-4xl transition-colors group-hover:text-oxblood md:text-[3.25rem]">
                      {study.title}
                    </h3>
                    <p className="mt-5 text-ink-soft">{study.dek}</p>
                    <p className="label mt-6">{study.status}</p>
                    <p className="mt-6 font-medium">
                      Read the case file <span className="arrow" aria-hidden="true">→</span>
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
