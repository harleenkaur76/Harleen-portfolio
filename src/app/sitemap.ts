import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { site } from "@/content/site";
import { work } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    ...work.map((study) => `/work/${study.slug}`),
    ...(products.length > 0 ? ["/shop", ...products.map((p) => `/shop/${p.slug}`)] : []),
  ];
  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
