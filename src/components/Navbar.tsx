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
            ? "bg-[#0d0c0a]/95 backdrop-blur-md border-b border-white/[0.05]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-sm font-bold tracking-tight font-mono group">
              <span className="text-[#e5bc5c] group-hover:text-[#f0d28a] transition-colors">hk</span>
              <span className="text-[#9a9386]">.</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={resolveHref(link.href)}
                  className="text-sm text-[#b8ad9c] hover:text-[#f2eee6] transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#e5bc5c] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Link
                href="/blog"
                className={`text-sm transition-colors duration-300 ${
                  pathname.startsWith("/blog")
                    ? "text-[#f2eee6]"
                    : "text-[#b8ad9c] hover:text-[#f2eee6]"
                }`}
              >
                Blog
              </Link>
            </div>

            <a
              href="mailto:harleenbindra07@gmail.com"
              className="hidden md:inline-flex px-5 py-2 rounded-lg text-sm font-mono text-[#0d0c0a] bg-[#e5bc5c] hover:bg-[#f0d28a] transition-all duration-300 font-semibold shadow-[0_0_20px_rgba(229,188,92,0.15)]"
            >
              say hi
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#b8ad9c] hover:text-[#f2eee6] transition-colors"
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
            className="fixed inset-0 z-40 bg-[#0d0c0a]/98 backdrop-blur-xl pt-20"
          >
            <div className="flex flex-col items-center gap-8 py-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={resolveHref(link.href)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-medium text-[#f2eee6] hover:text-[#e5bc5c] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-medium hover:text-[#e5bc5c] transition-colors duration-300 ${
                  pathname.startsWith("/blog") ? "text-[#e5bc5c]" : "text-[#f2eee6]"
                }`}
              >
                Blog
              </Link>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                href="mailto:harleenbindra07@gmail.com"
                className="mt-4 px-8 py-3.5 rounded-lg bg-[#e5bc5c] text-[#0d0c0a] font-medium font-mono text-sm shadow-[0_0_20px_rgba(229,188,92,0.2)]"
              >
                say hi
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
