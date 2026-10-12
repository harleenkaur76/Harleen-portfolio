import Image from "next/image";
import { about } from "@/content/home";
import { mailto } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="border-t border-rule bg-paper-deep/60 py-20 md:py-28">
      <div className="shell grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:sticky md:top-28 md:col-span-5 md:self-start">
          <p className="label">About</p>
          <h2 className="display mt-3 text-4xl md:text-[3.5rem]">{about.statement}</h2>

          <figure className="mt-10 flex items-end gap-4">
            <div className="avatar size-28 shrink-0 rounded-full md:size-32">
              <Image src="/portrait-print.webp" alt="Harleen Kaur" width={360} height={360} sizes="128px" />
            </div>
            <figcaption className="label max-w-[11rem] pb-1">
              Harleen Kaur, printed in two colours from a real photograph.
            </figcaption>
          </figure>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="prose-body space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-10 border-t border-ink">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-rule py-3"
              >
                <dt className="label pt-1">{fact.label}</dt>
                <dd className="text-[0.9375rem]">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-10 grid grid-cols-3 gap-4">
            {about.figures.map((figure) => (
              <li key={figure.label}>
                <p className="display text-4xl sm:text-5xl">
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
    </section>
  );
}
