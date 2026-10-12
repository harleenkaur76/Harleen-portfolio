import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="arrow-link group block">
      <div className="cover aspect-[4/3]">
        <Image
          src={product.cover}
          alt=""
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <p className="label mt-4 flex justify-between">
        <span>{product.kind}</span>
        <span className="text-ink">{product.price}</span>
      </p>
      <h3 className="display mt-2 text-3xl transition-colors group-hover:text-oxblood">
        {product.name} <span className="arrow" aria-hidden="true">→</span>
      </h3>
      <p className="mt-2 text-ink-soft">{product.tagline}</p>
    </Link>
  );
}
