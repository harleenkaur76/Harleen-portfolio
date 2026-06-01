"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
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

  // On blog pages, section links go back to homepage with hash
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
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-[#8B5CF6]">HK</span>
              <span className="text-[#f5f5f5]">.</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={resolveHref(link.href)}
                  className="text-sm text-[#6b7280] hover:text-[#f5f5f5] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/blog"
                className={`text-sm transition-colors duration-200 ${
                  pathname.startsWith("/blog")
                    ? "text-[#f5f5f5]"
                    : "text-[#6b7280] hover:text-[#f5f5f5]"
                }`}
              >
                Blog
              </Link>
              <a
                href="https://linkedin.com/in/harleenkaur07/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 rounded-full bg-[#8B5CF6] text-white font-medium hover:bg-[#8B5CF6]/90 transition-colors"
              >
                Hire Me
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#f5f5f5]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="fixed inset-0 z-40 bg-[#0a0a0f]/98 backdrop-blur-lg pt-20"
          >
            <div className="flex flex-col items-center gap-8 py-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={resolveHref(link.href)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-[#f5f5f5] hover:text-[#8B5CF6] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-medium hover:text-[#8B5CF6] transition-colors ${
                  pathname.startsWith("/blog")
                    ? "text-[#8B5CF6]"
                    : "text-[#f5f5f5]"
                }`}
              >
                Blog
              </Link>
              <a
                href="https://linkedin.com/in/harleenkaur07/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-8 py-3 rounded-full bg-[#8B5CF6] text-white font-medium"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
