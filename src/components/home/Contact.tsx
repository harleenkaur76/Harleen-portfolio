import { mailto, site, socials } from "@/content/site";
import ContactForm from "./ContactForm";

const routes = [
  { who: "Hiring", label: "Discuss an opportunity", href: mailto("An opportunity to discuss") },
  {
    who: "Freelance",
    label: "Work with me",
    href: mailto("Freelance enquiry", "A link to the site, and what you think is going wrong:\n\n"),
  },
  { who: "Curious", label: "Just say hello", href: mailto("Hello Harleen") },
];

export default function Contact() {
  return (
    <section id="contact" className="tone-wine section">
      <div className="shell">
        <p className="label text-center">Contact</p>
        <h2 className="display reveal mt-4 text-center text-[clamp(2.75rem,6vw,5.5rem)]">
          Tell me what you’re <em className="text-oxblood">building.</em>
        </h2>

        <div className="mt-12 grid gap-14 md:mt-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <p className="prose-body text-lg text-ink-soft">
              Hiring for a frontend or product engineering role, or have a site that needs a careful
              second look? A few lines is enough to start.
            </p>

            <ul className="mt-8 border-t border-ink">
              {routes.map((route) => (
                <li key={route.who} className="border-b border-rule">
                  <a href={route.href} className="arrow-link group flex items-baseline gap-5 py-4">
                    <span className="label w-20 shrink-0">{route.who}</span>
                    <span className="display text-3xl transition-colors group-hover:text-oxblood md:text-4xl">
                      {route.label}{" "}
                      <span className="arrow" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8">
              <a className="link text-lg" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <ul className="label mt-5 flex flex-wrap gap-x-7 gap-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a className="link" href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <p className="note mb-8">Or write it here. No account, no newsletter, three fields.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
