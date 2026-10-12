import { about } from "@/content/home";
import { mailto } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="tone-blush section overflow-hidden">
      <div className="shell">
        <p className="label text-center">About</p>
        <h2 className="display reveal mx-auto mt-4 max-w-[22ch] text-center text-[clamp(2rem,4.6vw,4.25rem)]">
          <span className="text-oxblood" aria-hidden="true">
            “
          </span>
          {about.statement}
          <span className="text-oxblood" aria-hidden="true">
            ”
          </span>
        </h2>

        <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-8">
          {/* An index card, set down slightly crooked */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <div className="tone-paper reveal -rotate-2 border border-ink p-6 shadow-[7px_7px_0_var(--oxblood)] transition-transform duration-500 hover:rotate-0 md:p-7">
                <p className="label flex justify-between">
                  <span>Index card</span>
                  <span>H.K.</span>
                </p>
                <dl className="mt-4 border-t border-ink">
                  {about.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="grid grid-cols-[5.5rem_1fr] gap-3 border-b border-rule py-2.5 last:border-b-0"
                    >
                      <dt className="label pt-1">{fact.label}</dt>
                      <dd className="text-[0.9375rem] leading-snug">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="note mt-9 max-w-xs">{about.aside}</p>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="prose-body space-y-5 text-lg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-12 grid grid-cols-3 gap-4 border-t border-ink pt-6">
              {about.figures.map((figure) => (
                <li key={figure.label}>
                  <p className="display text-5xl md:text-7xl">
                    {figure.value}
                    <sup className="ml-0.5 font-sans text-xs text-oxblood">1</sup>
                  </p>
                  <p className="label mt-1">{figure.label}</p>
                </li>
              ))}
            </ul>
            <p className="label mt-5 max-w-md normal-case tracking-normal">
              <span className="text-oxblood">1</span> My own count from nearly five years at
              Optiphoenix, not an audited figure. The full résumé is{" "}
              <a className="link" href={mailto("Résumé request")}>
                available on request
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
