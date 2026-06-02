"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getFeaturedPosts } from "@/lib/blog-data";

export default function BlogPreview() {
  const posts = getFeaturedPosts().slice(0, 3);

  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#d4a853]" />
            <p className="text-sm font-mono text-[#d4a853]">// writings</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f2eee6] mb-4">
                Blog
              </h2>
              <p className="text-[#9a9386] max-w-md">
                I write when I learn something worth sharing — or when I am frustrated enough
                to work through a problem in public.
              </p>
            </div>
            <a
              href="/blog"
              className="shrink-0 inline-flex items-center gap-2 text-sm text-[#9a9386] hover:text-[#d4a853] transition-colors group"
            >
              All posts
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <div className="space-y-3">
          {posts.map((post, index) => (
            <motion.a
              key={post.slug}
              href={`/blog/${post.slug}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group block p-5 rounded-lg bg-[#181614]/60 border border-white/[0.03] hover:border-[#d4a853]/20 hover:bg-[#181614] transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-mono text-[#d4a853]">{post.tags[0]}</span>
                <span className="text-[#9a9386]/20 text-xs">|</span>
                <span className="flex items-center gap-1 text-xs text-[#9a9386]/50">
                  <Calendar size={11} />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#9a9386]/50">
                  <Clock size={11} />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-base font-medium text-[#f2eee6] mb-1.5 group-hover:text-[#d4a853] transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-sm text-[#9a9386]/60 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
