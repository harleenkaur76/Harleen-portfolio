import RichText from "@/components/RichText";
import { principles, services } from "@/content/home";
import { mailto } from "@/content/site";
import SectionHeading from "./SectionHeading";

export default function Approach() {
  return (
    <section id="approach" className="tone-dark section">
      <div className="shell">
        <SectionHeading
          label="How I think and work"
          title="Six things the work taught me"
          count="06"
        />

        <ol className="mt-12 border-t border-rule md:mt-16">
          {principles.map((principle, index) => (
            <li
              key={principle.title}
              className="reveal group grid gap-x-8 gap-y-3 border-b border-rule py-8 md:grid-cols-12 md:items-start md:py-11"
            >
              <span
                className="display text-6xl italic leading-none text-oxblood transition-transform duration-500 group-hover:-translate-y-1 md:col-span-2 md:text-8xl"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="display text-3xl md:col-span-4 md:text-[2.6rem]">{principle.title}</h3>
              <div className="md:col-span-5 md:col-start-8">
                <p className="text-ink-soft">
                  <RichText text={principle.body} />
                </p>
                <p className="label mt-4">From: {principle.source}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 border border-ink p-6 md:mt-20 md:grid-cols-12 md:gap-8 md:p-12">
          <div className="md:col-span-5">
            <p className="label">For founders and small teams</p>
            <h3 className="display mt-3 text-4xl md:text-5xl">
              Busy site, <em className="text-oxblood">quiet</em> checkout?
            </h3>
            <p className="mt-5 text-ink-soft">{services.intro}</p>
            <a
              href={mailto(
                "Freelance enquiry",
                "A link to the site, and what you think is going wrong:\n\n",
              )}
              className="btn btn-solid arrow-link mt-8"
            >
              Work with me{" "}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ol>
              {services.items.map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[2rem_1fr] gap-x-3 border-b border-rule py-5 first:pt-0"
                >
                  <span className="label pt-1.5">{String.fromCharCode(97 + index)}.</span>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="mt-1 text-[0.9375rem] text-ink-soft">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="note mt-7">{services.caveat}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
