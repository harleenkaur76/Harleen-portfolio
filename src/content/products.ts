// Digital products. This list is EMPTY on purpose: while it is empty, /shop
// returns a 404, the nav shows no Shop link and the sitemap lists nothing.
//
// To launch a product:
//   1. Create it on a hosted checkout that also handles file delivery
//      (Lemon Squeezy, Gumroad or a Stripe Payment Link).
//   2. Add an object below with that checkout URL.
//   3. Put its cover image in /public/products/.
// The Shop link, the /shop grid, the /shop/[slug] page and the sitemap
// entries all appear automatically. No payment details ever touch this site.

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  // Display string, e.g. "$19" or "Free".
  price: string;
  kind: "Template" | "Guide" | "Planner" | "Checklist";
  cover: string; // path under /public, e.g. "/products/workflow-kit.webp"
  // What the buyer receives, shown as a list on the detail page.
  includes: string[];
  // Hosted checkout or download URL. Opens in a new tab.
  checkoutUrl: string;
  // Optional free sample (a PDF or page) to preview before buying.
  previewUrl?: string;
};

export const products: Product[] = [];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
