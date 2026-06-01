"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getFeaturedPosts } from "@/lib/blog-data";

export default function BlogPreview() {
  const posts = getFeaturedPosts().slice(0, 3);

  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-[#8B5CF6] text-sm font-medium uppercase tracking-widest">
                Latest Writings
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                Blog
              </h2>
              <p className="text-[#6b7280] max-w-xl">
                I write about frontend engineering, A/B testing, performance optimization, and the lessons learned from shipping production code.
              </p>
            </div>
            <a
              href="/blog"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-[#f5f5f5] text-sm font-medium hover:bg-white/5 transition-all"
            >
              View All Posts
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.a
              key={post.slug}
              href={`/blog/${post.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block p-6 rounded-2xl bg-[#12121a] border border-white/5 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-md text-xs bg-[#8B5CF6]/10 text-[#8B5CF6] font-medium">
                  {post.tags[0]}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#6b7280]">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[#f5f5f5] mb-2 group-hover:text-[#8B5CF6] transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-sm text-[#a1a1aa] mb-4 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs text-[#6b7280]">
                  <Clock size={12} />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-1 text-sm text-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity">
                  Read
                  <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
