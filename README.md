<div align="center">

  <img src="public/profile.jpg" width="120" height="120" style="border-radius: 50%; object-fit: cover;" />

  # Harleen Kaur

  **Frontend Engineer & A/B Testing Expert**

  <p align="center">
    <a href="mailto:harleenbindra07@gmail.com">Email</a> &middot;
    <a href="https://linkedin.com/in/harleenkaur07">LinkedIn</a> &middot;
    <a href="https://github.com/harleenkaur76">GitHub</a>
  </p>

  [![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF4444?logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

## About

A bold, animated portfolio built from scratch to showcase what I do best — **shipping production-grade A/B experiments and performance-optimised SPAs** for global brands.

Built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. Dark-themed with coral and teal accents, scroll-triggered animations, and a working contact form powered by Resend.

| Metric | What I Deliver |
|--------|--------------|
| 100+ | Production A/B experiments deployed |
| 80% | Faster experiment setup time |
| 35%+ | Average conversion lift per test |
| 3+ | Years of client-side engineering |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React + Custom SVG |
| Email | Resend (Server Actions) |
| Fonts | Geist Sans + Geist Mono |

---

## Features

- **Bold Dark Design** — deep space background with coral (`#FF6B35`) and teal (`#00d4aa`) accents
- **Particle Background** — animated canvas particles floating behind content
- **Scroll-Triggered Animations** — every section fades/slides in via Framer Motion
- **Animated Stat Counters** — numbers count up when scrolled into view
- **Metric-Driven Experience Timeline** — every role has quantified business impact
- **Interactive Skills Grid** — proficiency bars animate on scroll
- **Project Showcases** — with performance metrics and tech tags
- **Contact Form** — fully working email delivery via Resend
- **Fully Responsive** — mobile, tablet, desktop
- **SEO Optimised** — metadata, OpenGraph, semantic HTML

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/harleenkaur76/harleen-portfolio.git
cd harleen-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── actions.ts          # Server action for contact form
│   ├── layout.tsx          # Root layout with metadata + SEO
│   ├── page.tsx            # Homepage composing all sections
│   ├── globals.css         # Global styles + CSS variables
│   └── blog/               # Blog pages
├── components/
│   ├── Hero.tsx            # Animated hero with typewriter
│   ├── Stats.tsx           # Animated counters
│   ├── Experience.tsx      # Work history timeline
│   ├── Skills.tsx          # Interactive skills grid
│   ├── Projects.tsx        # Project showcases
│   ├── Contact.tsx         # Contact form + info
│   ├── Footer.tsx          # Footer with social links
│   ├── Navbar.tsx          # Fixed nav + mobile menu
│   ├── ParticleBackground.tsx  # Canvas particle effect
│   └── Icons.tsx           # Custom SVG icons
├── lib/
│   └── blog-data.ts        # Blog post data
public/
└── profile.jpg             # Author photo
```

---

## Deploy to Vercel

1. Push to GitHub
2. Import into [vercel.com](https://vercel.com)
3. Add environment variable in Vercel dashboard:
   - `RESEND_API_KEY` — from [resend.com](https://resend.com)
4. Deploy!

Vercel auto-deploys on every push to `main`.

---

## Contact Form Setup

The contact form uses [Resend](https://resend.com) to send emails.

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add it as `RESEND_API_KEY` in Vercel environment variables
4. Verify your domain (or use `onboarding@resend.dev` for testing)
5. Update the `from` and `to` addresses in `src/app/actions.ts` if needed

---

## License

MIT — feel free to use this as a template for your own portfolio. Just swap in your own content and colours.

---

<div align="center">

  Built with care by **Harleen Kaur**

  <p align="center">
    <a href="mailto:harleenbindra07@gmail.com">Email</a> &middot;
    <a href="https://linkedin.com/in/harleenkaur07">LinkedIn</a> &middot;
    <a href="https://github.com/harleenkaur76">GitHub</a>
  </p>

</div>
