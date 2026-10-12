import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-rule">
      <div className="shell grid gap-6 py-10 md:grid-cols-12">
        <p className="font-display text-2xl italic md:col-span-4">Harleen Kaur</p>
        <div className="label space-y-1.5 md:col-span-5">
          <p>Set in Instrument Serif, DM Sans and DM Mono.</p>
          <p>
            No trackers. The A/B switch is a visible toggle, not a real test, and
            records nothing.
          </p>
        </div>
        <ul className="label flex gap-5 md:col-span-3 md:justify-end">
          <li>
            <a className="link" href={`mailto:${site.email}`}>
              Email
            </a>
          </li>
          <li>
            <a className="link" href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="link" href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
