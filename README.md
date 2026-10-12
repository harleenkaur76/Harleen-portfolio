# Harleen Kaur — portfolio

A personal portfolio built as an annotated editorial notebook ("Field Notes").
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. Every page is
statically generated; the only server code is the contact form action.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Where things live

| To change… | Edit |
|---|---|
| Name, email, links, availability line, nav | `src/content/site.ts` |
| Case studies (homepage rows and `/work/[slug]` pages) | `src/content/work.ts` |
| About text, working principles, freelance offer, experiments list | `src/content/home.ts` |
| Future shop products | `src/content/products.ts` |
| Colours, type, annotations, motion | `src/app/globals.css` |
| Case-study cover drawings | `src/components/covers/Cover.tsx` |
| Portrait | `public/portrait-print.webp` (generated from `public/profile.jpg`) |

### Add a case study

Add an object to the `work` array in `src/content/work.ts`. It needs a `cover`
key; either reuse one of the existing drawings or add a new one in `Cover.tsx`
with a Control group (`only-a`) and a Variant group (`only-b`). The page, the
homepage row and the sitemap entry are generated from the data.

### Status labels

Every project carries an honest status. Use one of: *Live product*, *Completed
project*, *Working prototype*, *Prototype in progress*, *Learning project*,
*Concept in development*. Update the label when the project changes, not before.

### The A/B switch

The header switch sets `data-variant="a" | "b"` on `<html>`. Any element with
the class `only-a` or `only-b` shows in one state only. It is decorative: it
stores nothing and sends nothing.

## Contact form

The form posts to a server action (`src/app/actions.ts`).

- With `RESEND_API_KEY` set, messages are emailed through Resend.
- Without it, or if sending fails, the form opens the visitor's email app with
  their message already filled in.

Set the key in Vercel under Project → Settings → Environment Variables. Never
commit it. Resend's shared `onboarding@resend.dev` sender only delivers to the
address that owns the Resend account; verify a domain to change the sender.

## Launching a product later

`src/content/products.ts` is empty on purpose. While it is empty `/shop` returns
404 and no Shop link is shown. To launch:

1. Create the product on a hosted checkout that handles payment and file
   delivery (Lemon Squeezy, Gumroad or a Stripe Payment Link).
2. Add a `Product` object with that `checkoutUrl` and a cover image in
   `public/products/`.

The Shop nav link, the `/shop` grid, the `/shop/[slug]` page and the sitemap
entries then appear on their own. No payment data touches this site.

## Deploying

The repo is connected to Vercel. Pushing to `main` deploys. When a custom domain
is attached, set `NEXT_PUBLIC_SITE_URL` to it so canonical URLs, the sitemap and
social previews use the right address.
