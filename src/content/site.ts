// Everything global about the site lives here: identity, links, navigation.
// Edit this file to change contact details or the availability line.

export const site = {
  name: "Harleen Kaur",
  role: "Frontend engineer",
  location: "India",
  // Set NEXT_PUBLIC_SITE_URL in Vercel when a custom domain is attached.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://harleen-portfolio-eosin.vercel.app",
  description:
    "Frontend engineer with nearly five years of building A/B experiments inside live production websites. Now moving toward product engineering and AI-assisted developer tools.",
  email: "harleenbindra07@gmail.com",
  links: {
    github: "https://github.com/harleenkaur76",
    linkedin: "https://www.linkedin.com/in/harleenkaur07/",
  },
  // Shown in the hero and contact section. Keep it true.
  availability: "Open to new roles and select freelance work",
  nav: [
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "approach", label: "Approach" },
    { id: "experiments", label: "Experiments" },
    { id: "contact", label: "Contact" },
  ],
} as const;

export function mailto(subject: string, body?: string) {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${site.email}?${params.join("&")}`;
}
