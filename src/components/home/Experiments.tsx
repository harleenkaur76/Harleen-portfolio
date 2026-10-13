import { experiments } from "@/content/home";
import SectionHeading from "./SectionHeading";

export default function Experiments() {
  return (
    <section id="experiments" className="section">
      <div className="shell">
        <SectionHeading
          label="Experiments and explorations"
          title="The back of the notebook"
          note="Unfinished on purpose. Each one says exactly how far along it is."
        />

        <ul className="mt-12 border-t border-ink md:mt-16">
          {experiments.map((experiment) => (
            <li
              key={experiment.name}
              className="reveal grid gap-x-8 gap-y-3 border-b border-rule py-8 md:grid-cols-12"
            >
              <div className="md:col-span-4">
                <h3 className="display text-4xl">
                  {experiment.href ? (
                    <a
                      href={experiment.href}
                      target="_blank"
                      rel="noreferrer"
                      className="arrow-link transition-colors hover:text-oxblood"
                    >
                      {experiment.name}{" "}
                      <span className="arrow text-2xl" aria-hidden="true">
                        ↗
                      </span>
                      <span className="sr-only"> (GitHub, opens in a new tab)</span>
                    </a>
                  ) : (
                    experiment.name
                  )}
                </h3>
                <p className="label mt-2 text-oxblood">{experiment.status}</p>
              </div>
              <p className="text-ink-soft md:col-span-5">{experiment.body}</p>
              <p className="label md:col-span-3 md:pt-1.5 md:text-right">{experiment.stack}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
