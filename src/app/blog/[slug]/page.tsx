import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog-data";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Harleen Kaur`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Convert markdown-like content to HTML
  const htmlContent = post.content
    .split("\n")
    .map((line) => {
      // Headers
      if (line.startsWith("# ")) {
        return `<h1 class="text-3xl font-bold text-[#f5f5f5] mt-12 mb-4">${line.slice(2)}</h1>`;
      }
      if (line.startsWith("## ")) {
        return `<h2 class="text-2xl font-bold text-[#f5f5f5] mt-10 mb-3">${line.slice(3)}</h2>`;
      }
      if (line.startsWith("### ")) {
        return `<h3 class="text-xl font-semibold text-[#f5f5f5] mt-8 mb-2">${line.slice(4)}</h3>`;
      }
      // Code blocks
      if (line.startsWith("```")) {
        return `<div class="my-6 rounded-xl overflow-hidden bg-[#0d1117] border border-white/5">`;
      }
      if (line.startsWith("\`\`\`")) {
        return `</div>`;
      }
      // Inline code
      const inlineCode = line.replace(
        /`([^`]+)`/g,
        '<code class="px-1.5 py-0.5 rounded bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-mono">$1</code>'
      );
      // Bold
      const bold = inlineCode.replace(
        /\*\*([^*]+)\*\*/g,
        '<strong class="text-[#f5f5f5]">$1</strong>'
      );
      // Lists
      if (line.startsWith("- ")) {
        return `<li class="text-[#a1a1aa] ml-5 mb-1">${bold.slice(2)}</li>`;
      }
      if (line.startsWith("1. ")) {
        return `<li class="text-[#a1a1aa] ml-5 mb-1">${bold.slice(3)}</li>`;
      }
      // Blockquote
      if (line.startsWith("> ")) {
        return `<blockquote class="border-l-2 border-[#8B5CF6] pl-4 py-2 my-4 bg-[#8B5CF6]/5 rounded-r-lg text-[#a1a1aa]">${bold.slice(2)}</blockquote>`;
      }
      // Paragraphs
      if (line.trim()) {
        return `<p class="text-[#a1a1aa] leading-relaxed mb-4">${bold}</p>`;
      }
      return "";
    })
    .join("\n");

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#f5f5f5] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </a>

        {/* Header */}
        <div className="mb-10">
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

          <h1 className="text-3xl sm:text-4xl font-bold text-[#f5f5f5] mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-[#a1a1aa] leading-relaxed">{post.excerpt}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10 pb-10 border-b border-white/5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs bg-white/5 text-[#6b7280] border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <article
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Share */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#6b7280]">
              Thanks for reading! Found this helpful?
            </p>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                post.title
              )}&url=${encodeURIComponent(
                `https://harleenkaur.dev/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-[#a1a1aa] hover:text-[#f5f5f5] hover:bg-white/10 transition-all text-sm"
            >
              <Share2 size={14} />
              Share
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
