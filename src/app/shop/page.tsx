import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Templates, guides and working tools.",
  alternates: { canonical: "/shop" },
};

// Dormant until src/content/products.ts has at least one product.
export default function ShopPage() {
  if (products.length === 0) notFound();

  return (
    <section className="shell py-16 md:py-24">
      <p className="label">Shop</p>
      <h1 className="display mt-3 text-5xl md:text-7xl">Things I made to be used</h1>
      <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.slug}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
