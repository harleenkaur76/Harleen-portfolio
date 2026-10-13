import { site, socials } from "@/content/site";

export default function Footer() {
  return (
    <footer className="tone-dark relative z-10">
      <div className="shell grid gap-6 py-10 md:grid-cols-12 md:items-end">
        <p className="font-display text-3xl italic md:col-span-4">{site.name}</p>
        <p className="label md:col-span-4">
          No trackers. The A/B switch is a visible toggle, not a real test, and records nothing.
        </p>
        <ul className="label flex flex-wrap gap-x-5 gap-y-2 md:col-span-4 md:justify-end">
          <li>
            <a className="link" href={`mailto:${site.email}`}>
              Email
            </a>
          </li>
          {socials.map((social) => (
            <li key={social.label}>
              <a className="link" href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
