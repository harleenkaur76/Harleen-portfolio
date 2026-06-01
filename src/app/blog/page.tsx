import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog-data";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Harleen Kaur",
  description:
    "Articles on frontend engineering, A/B testing, performance optimization, and building production-grade applications.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-[#8B5CF6] text-sm font-medium uppercase tracking-widest">
            Blog
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            All Articles
          </h1>
          <p className="text-[#6b7280] max-w-xl">
            Deep dives into frontend engineering, conversion optimization, and
            the realities of shipping production code at scale.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-6 sm:p-8 rounded-2xl bg-[#12121a] border border-white/5 card-hover"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-md text-xs bg-[#8B5CF6]/10 text-[#8B5CF6] font-medium">
                  {post.tags[0]}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#6b7280]">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#6b7280]">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#f5f5f5] mb-3 group-hover:text-[#8B5CF6] transition-colors">
                {post.title}
              </h2>

              <p className="text-[#a1a1aa] mb-4 leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(1).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs bg-white/5 text-[#6b7280]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1 text-sm text-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  Read Article
                  <ArrowRight size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
