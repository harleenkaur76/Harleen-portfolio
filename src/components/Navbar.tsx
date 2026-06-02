"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Tools" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      return isHome ? href : `/${href}`;
    }
    return href;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? "bg-[#0d0c0a]/95 backdrop-blur-sm border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-sm font-bold tracking-tight font-mono">
              <span className="text-[#d4a853]">hk</span>
              <span className="text-[#9a9386]">.</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={resolveHref(link.href)}
                  className="text-sm text-[#9a9386] hover:text-[#f2eee6] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/blog"
                className={`text-sm transition-colors ${
                  pathname.startsWith("/blog")
                    ? "text-[#f2eee6]"
                    : "text-[#9a9386] hover:text-[#f2eee6]"
                }`}
              >
                Blog
              </Link>
            </div>

            <a
              href="mailto:harleenbindra07@gmail.com"
              className="hidden md:inline-flex px-4 py-1.5 rounded text-sm font-mono text-[#0d0c0a] bg-[#d4a853] hover:bg-[#e8c97a] transition-all font-medium"
            >
              say hi
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#9a9386]"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0d0c0a]/98 backdrop-blur-lg pt-16"
          >
            <div className="flex flex-col items-center gap-6 py-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={resolveHref(link.href)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-medium text-[#f2eee6] hover:text-[#d4a853] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-medium hover:text-[#d4a853] transition-colors ${
                  pathname.startsWith("/blog") ? "text-[#d4a853]" : "text-[#f2eee6]"
                }`}
              >
                Blog
              </Link>
              <a
                href="mailto:harleenbindra07@gmail.com"
                className="mt-4 px-8 py-3 rounded bg-[#d4a853] text-[#0d0c0a] font-medium font-mono text-sm"
              >
                say hi
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
