"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import VariantSwitch from "./VariantSwitch";

export default function Nav({ showShop }: { showShop: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [inView, setInView] = useState("");

  // On the homepage, mark whichever section is crossing the middle of the screen.
  useEffect(() => {
    if (pathname !== "/") return;
    const sections = site.nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setInView(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  // Mobile menu: lock the page behind it and close on Escape.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current =
    pathname === "/"
      ? inView
      : pathname.startsWith("/work")
        ? "work"
        : pathname.startsWith("/shop")
          ? "shop"
          : "";

  const items = [
    ...site.nav.map((item) => ({ ...item, href: `/#${item.id}` })),
    ...(showShop ? [{ id: "shop", label: "Shop", href: "/shop" }] : []),
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-2xl italic leading-none"
          onClick={() => setOpen(false)}
        >
          Harleen Kaur
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[0.9375rem]">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  aria-current={current === item.id ? "true" : undefined}
                  className="nav-link transition-colors hover:text-oxblood"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <VariantSwitch />
          <button
            type="button"
            className="label -mr-2 cursor-pointer px-2 py-3 text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto border-t border-rule bg-paper md:hidden"
        >
          <ol className="shell flex flex-col py-6">
            {items.map((item, index) => (
              <li key={item.id} className="border-b border-rule">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="label w-6">{String(index + 1).padStart(2, "0")}</span>
                  <span className="display text-4xl">{item.label}</span>
                </Link>
              </li>
            ))}
          </ol>
          <p className="shell note mb-10 ml-5 mt-2 max-w-xs">
            {site.availability}.
          </p>
        </nav>
      )}
    </header>
  );
}
