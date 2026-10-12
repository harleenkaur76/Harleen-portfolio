import Link from "next/link";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <section className="shell pb-20 pt-14 md:pb-28 md:pt-24">
      <p className="label flex flex-wrap gap-x-4 gap-y-1">
        <span>{site.role}</span>
        <span aria-hidden="true">/</span>
        <span>{site.location}</span>
        <span aria-hidden="true">/</span>
        <span>Field notes, since 2021</span>
      </p>

      <div className="mt-8 grid gap-10 md:mt-10 md:grid-cols-12 md:gap-8">
        <h1 className="display text-[clamp(2.9rem,8.4vw,7.25rem)] md:col-span-11">
          <span className="only-b">
            I write code that has to survive inside{" "}
            <em className="text-oxblood">someone else’s</em> website.
          </span>
          <span className="only-a">
            Frontend engineer with nearly five years of A/B experiments on live
            websites.
          </span>
        </h1>

        <div className="md:col-span-6 md:col-start-1">
          <p className="prose-body text-lg md:text-xl md:leading-relaxed">
            For nearly five years I’ve built A/B experiments for brands
            including Microsoft, Accor and Norwegian: new interfaces injected
            into production sites I don’t own, on frameworks I didn’t choose.
            It teaches you to read a codebase before you touch it. I’m now
            bringing that to product engineering and AI-assisted developer
            tools.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/#work" className="btn btn-solid arrow-link">
              Read the case files <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/#contact" className="btn btn-ghost">
              Start a conversation
            </Link>
          </div>
        </div>

        <aside className="md:col-span-4 md:col-start-9 md:pt-2">
          <p className="note only-b">
            You’re reading variant B. The switch in the corner shows the
            control, here and on every drawing below.
          </p>
          <p className="note only-a">
            This is the control: same person, more sensible headline. Flip back
            to B for the one I’d actually ship.
          </p>
          <p className="label mt-6 flex items-center gap-2.5">
            <span className="inline-block size-2 rounded-full bg-oxblood" aria-hidden="true" />
            {site.availability}
          </p>
        </aside>
      </div>
    </section>
  );
}
