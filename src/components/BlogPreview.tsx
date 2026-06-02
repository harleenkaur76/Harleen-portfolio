"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getFeaturedPosts } from "@/lib/blog-data";

export default function BlogPreview() {
  const posts = getFeaturedPosts().slice(0, 3);

  return (
    <section id="blog" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#141210]/40 via-transparent to-[#141210]/30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="absolute -top-8 -right-4 sm:-right-8 pointer-events-none">
            <span className="text-[8rem] sm:text-[10rem] font-black text-white/[0.015] leading-none">06</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#e5bc5c]" />
            <p className="text-sm font-mono text-[#e5bc5c]">// writings</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f2eee6] mb-4">Blog</h2>
              <p className="text-[#b8ad9c] max-w-md">
                I write when I learn something worth sharing — or when I am frustrated enough to work through it in public.
              </p>
            </div>
            <a
              href="/blog"
              className="shrink-0 inline-flex items-center gap-2 text-sm text-[#b8ad9c] hover:text-[#e5bc5c] transition-colors duration-300 group"
            >
              All posts
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>

        <div className="space-y-3">
          {posts.map((post, index) => (
            <motion.a
              key={post.slug}
              href={`/blog/${post.slug}`}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              className="group block p-5 rounded-xl bg-[#181614]/60 border border-white/[0.04] hover:border-[#e5bc5c]/20 hover:bg-[#181614] transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,188,92,0.04)]"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-mono text-[#e5bc5c]">{post.tags[0]}</span>
                <span className="text-[#9a9386]/25 text-xs">|</span>
                <span className="flex items-center gap-1 text-xs text-[#9a9386]">
                  <Calendar size={11} />
                  {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#9a9386]">
                  <Clock size={11} />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-base font-semibold text-[#f2eee6] mb-2 group-hover:text-[#e5bc5c] transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-sm text-[#b8ad9c]/70 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
