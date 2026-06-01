# Harleen Kaur — Portfolio

A bold, animated portfolio built with Next.js 15, Tailwind CSS, and Framer Motion.

## Features

- **Bold Dark Design** with coral (`#FF6B35`) and teal (`#00d4aa`) accents
- **Scroll-triggered animations** powered by Framer Motion
- **Animated stat counters** (100+ experiments, 80% faster setup, etc.)
- **Metric-driven experience timeline** — every bullet has business impact
- **Interactive skills grid** with hover effects
- **Project showcases** with performance metrics
- **Contact form** connected to Gmail via Resend
- **Fully responsive** — mobile, tablet, desktop
- **SEO optimised** with metadata, OpenGraph tags, semantic HTML

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React + Custom SVG |
| Email | Resend (Server Actions) |
| Fonts | Geist Sans + Geist Mono |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push to GitHub
2. Import into [vercel.com](https://vercel.com)
3. Add environment variable:
   - `RESEND_API_KEY` — from [resend.com](https://resend.com)
4. Update the `from` email in `src/app/actions.ts` to your verified domain
5. Deploy!

## Contact Form Setup

The contact form uses Resend to send emails to `harleenbindra07@gmail.com`.

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add it as `RESEND_API_KEY` in Vercel environment variables
4. Verify your domain (or use `onboarding@resend.dev` for testing)
5. Update the `to` address in `src/app/actions.ts` if needed

## Project Structure

```
src/
├── app/
│   ├── actions.ts          # Server action for contact form
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage composing all sections
│   └── globals.css          # Global styles + CSS variables
├── components/
│   ├── Navbar.tsx           # Fixed nav + mobile menu
│   ├── Hero.tsx             # Animated hero section
│   ├── Stats.tsx            # Animated counters
│   ├── Experience.tsx       # Work history timeline
│   ├── Skills.tsx           # Interactive skills grid
│   ├── Projects.tsx         # Project showcases
│   ├── Contact.tsx          # Contact form + info
│   ├── Footer.tsx           # Footer with social links
│   └── Icons.tsx            # Custom SVG icons (GitHub, LinkedIn)
```

## Contact

- Email: harleenbindra07@gmail.com
- LinkedIn: [linkedin.com/in/harleenkaur07](https://linkedin.com/in/harleenkaur07)
- GitHub: [github.com/harleenkaur76](https://github.com/harleenkaur76)
