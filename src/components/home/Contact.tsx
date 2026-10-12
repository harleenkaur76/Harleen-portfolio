import { mailto, site } from "@/content/site";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink py-20 md:py-32">
      <div className="shell grid gap-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <p className="label">Contact</p>
          <h2 className="display mt-3 text-[clamp(2.75rem,7vw,6rem)]">
            Tell me what you’re <em className="text-oxblood">building.</em>
          </h2>
          <p className="prose-body mt-7 text-lg text-ink-soft">
            Hiring for a frontend or product engineering role, or have a site
            that needs a careful second look? Either way, a few lines is enough
            to start.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={mailto("Hello Harleen")} className="btn btn-solid">
              {site.email}
            </a>
            <a href={mailto("An opportunity to discuss")} className="btn btn-ghost">
              Discuss an opportunity
            </a>
          </div>
          <ul className="mt-10 flex gap-7">
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

        <div className="md:col-span-4 md:col-start-9 md:pt-6">
          <p className="note mb-8">Or write it here. No account, no newsletter, three fields.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
