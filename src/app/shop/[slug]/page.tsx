import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/content/products";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline,
    alternates: { canonical: `/shop/${product.slug}` },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <article className="shell grid gap-12 py-16 md:grid-cols-12 md:gap-8 md:py-24">
      <div className="md:col-span-7">
        <div className="cover relative aspect-[4/3]">
          <Image
            src={product.cover}
            alt={`${product.name} preview`}
            fill
            priority
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-4 md:col-start-9">
        <p className="label">
          <Link href="/shop" className="link">
            Shop
          </Link>{" "}
          <span aria-hidden="true">/</span> {product.kind}
        </p>
        <h1 className="display mt-4 text-5xl">{product.name}</h1>
        <p className="mt-4 text-lg text-ink-soft">{product.tagline}</p>
        <div className="mt-6 space-y-4">
          {product.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-8 border-t border-ink">
          {product.includes.map((item) => (
            <li key={item} className="border-b border-rule py-3 text-[0.9375rem]">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={product.checkoutUrl} target="_blank" rel="noreferrer" className="btn btn-solid">
            {product.price === "Free" ? "Download" : `Buy for ${product.price}`}
          </a>
          {product.previewUrl && (
            <a href={product.previewUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
              See a preview
            </a>
          )}
        </div>
        <p className="label mt-4">Checkout and delivery are handled by the payment provider.</p>
      </div>
    </article>
  );
}
