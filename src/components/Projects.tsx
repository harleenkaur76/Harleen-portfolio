"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Gauge,
  Zap,
  Layers,
  Users,
  Clock,
  TrendingUp,
  ArrowRight,
  ImageIcon,
  Bot,
  Wifi,
  Languages,
  BrainCircuit,
  Mail,
  FileText,
  CreditCard,
  BarChart3,
  UtensilsCrossed,
  MapPin,
  WifiOff,
} from "lucide-react";
import { GithubIcon } from "./Icons";

const projects = [
  {
    title: "StreamVault",
    subtitle: "AI-Powered Video Streaming Platform",
    description:
      "A full-stack YouTube clone rebuilt with AI at its core. Beyond standard video streaming, it features AI-generated thumbnails, sentiment-aware comment moderation, real-time live streaming, and intelligent content recommendations that improve with every watch.",
    problem:
      "Existing video platforms lack intelligent content discovery and creators spend hours on thumbnails, captions, and comment moderation. Live streaming setup is complex and inaccessible.",
    solution:
      "Built an end-to-end streaming platform with TensorFlow.js recommendation engine, OpenAI-powered thumbnail generation, WebRTC live streaming, and automated multi-language captioning.",
    image: "/projects/streamvault.jpg",
    metrics: [
      { icon: Gauge, label: "<2s Video Start" },
      { icon: Wifi, label: "WebRTC Live" },
      { icon: Bot, label: "AI Thumbnails" },
      { icon: Languages, label: "Auto Captions" },
    ],
    results: [
      "AI recommendation engine with 85% user engagement accuracy",
      "Real-time live streaming with <100ms latency via WebRTC",
      "Auto-generated thumbnails reducing creator effort by 70%",
      "Multi-language captions supporting 12 languages",
      "Sentiment analysis moderating 10K+ comments/day",
      "10K+ concurrent streams handled with 99.9% uptime",
    ],
    architecture: [
      "Next.js 14",
      "Node.js",
      "MongoDB",
      "Redis",
      "WebRTC",
      "TensorFlow.js",
      "AWS S3",
      "FFmpeg",
    ],
    tags: ["Next.js", "AI/ML", "WebRTC", "Streaming", "Full-Stack"],
    github: "https://github.com/harleenkaur76",
    live: null,
    color: "#8B5CF6",
    featured: true,
  },
  {
    title: "CogniFlow",
    subtitle: "AI SaaS Productivity Suite",
    description:
      "A B2B SaaS platform that integrates AI into daily workflows. Features document analysis, smart email drafting, AI code review, meeting transcription, and a no-code chatbot builder. Built with Stripe billing, team collaboration, and real-time analytics.",
    problem:
      "Teams waste 40% of their week on repetitive tasks — summarizing documents, drafting emails, reviewing code, and extracting action items from meetings.",
    solution:
      "Unified AI workspace with LangChain orchestration, RAG-based document Q&A, fine-tuned models for code review, and Socket.io real-time collaboration.",
    image: "/projects/cogniflow.jpg",
    metrics: [
      { icon: FileText, label: "50K+ Docs" },
      { icon: Clock, label: "40% Time Saved" },
      { icon: TrendingUp, label: "$10K MRR" },
      { icon: BrainCircuit, label: "RAG + LangChain" },
    ],
    results: [
      "50K+ documents processed with 94% summarization accuracy",
      "AI code review catching 30% more bugs than manual review",
      "Meeting transcription with 98% accuracy and auto action items",
      "Stripe subscription billing with 3 tiers and team management",
      "Custom chatbot builder deployed by 200+ teams",
      "Reached $10K MRR within 6 months of launch",
    ],
    architecture: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "OpenAI API",
      "LangChain",
      "Pinecone",
      "Stripe",
      "Socket.io",
    ],
    tags: ["SaaS", "AI", "Full-Stack", "Stripe", "RAG"],
    github: "https://github.com/harleenkaur76",
    live: null,
    color: "#00d4aa",
    featured: true,
  },
  {
    title: "Caviar",
    subtitle: "Food Ordering App",
    description:
      "A production-grade React SPA designed for real-world food delivery. Built with performance as a constraint from day one, achieving sub-2-second LCP on 3G networks with offline support and intelligent caching.",
    problem:
      "Food ordering apps suffer from slow initial loads and poor offline handling, leading to 40%+ cart abandonment on slow networks.",
    solution:
      "Implemented Redux Toolkit for predictable state management, lazy-loaded routes for code splitting, and Shimmer UI skeletons to eliminate perceived load time.",
    image: "/projects/caviar.jpg",
    metrics: [
      { icon: Gauge, label: "<2s LCP on 3G" },
      { icon: Zap, label: "Redux Toolkit" },
      { icon: Layers, label: "Lazy Routes" },
      { icon: WifiOff, label: "Offline Support" },
    ],
    results: [
      "Sub-2s Largest Contentful Paint on simulated 3G",
      "40% reduction in perceived load time via skeleton screens",
      "Offline indicator + retry logic for flaky networks",
      "Live restaurant/menu API integration with intelligent caching",
      "Cart persistence across sessions with localStorage sync",
    ],
    architecture: [
      "React.js",
      "Redux Toolkit",
      "React Router",
      "REST API",
      "Service Workers",
    ],
    tags: ["React.js", "Redux Toolkit", "REST API", "Performance"],
    github: "https://github.com/harleenkaur76",
    live: null,
    color: "#8B5CF6",
    featured: false,
  },
];

function ProjectImage({
  src,
  title,
  color,
}: {
  src: string;
  title: string;
  color: string;
}) {
  return (
    <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 group">
      {/* Placeholder state */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-[#6b7280]">
        <ImageIcon size={40} className="mb-3 opacity-30" />
        <p className="text-sm opacity-50">Add screenshot: {src}</p>
      </div>
      {/* Hover overlay hint */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        style={{ backgroundColor: `${color}10` }}
      >
        <span className="text-sm font-medium" style={{ color }}>
          {title}
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#8B5CF6] text-sm font-medium uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-[#6b7280] max-w-xl">
            Production-grade full-stack applications with AI integration, real-time features, and measurable business impact.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${project.color}15`,
                      color: project.color,
                    }}
                  >
                    Featured Project
                  </span>
                </div>
              )}

              <div
                className="relative rounded-2xl bg-[#12121a] border border-white/5 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ backgroundColor: project.color }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className="p-6 lg:p-8 lg:border-r border-white/5">
                    <ProjectImage
                      src={project.image}
                      title={project.title}
                      color={project.color}
                    />

                    {/* Quick metrics under image */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white/5"
                        >
                          <metric.icon
                            size={16}
                            style={{ color: project.color }}
                          />
                          <span className="text-xs text-[#a1a1aa]">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="p-6 lg:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#f5f5f5]">
                          {project.title}
                        </h3>
                        <p
                          className="text-sm font-medium mt-1"
                          style={{ color: project.color }}
                        >
                          {project.subtitle}
                        </p>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-[#a1a1aa] hover:text-[#f5f5f5] hover:bg-white/10 transition-all text-sm"
                      >
                        <GithubIcon size={16} />
                        Code
                      </a>
                    </div>

                    <p className="text-[#a1a1aa] mb-5 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Problem / Solution */}
                    <div className="grid grid-cols-1 gap-3 mb-5">
                      <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                        <h4 className="text-xs font-semibold text-red-400 mb-1">
                          Problem
                        </h4>
                        <p className="text-xs text-[#a1a1aa] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-[#00d4aa]/5 border border-[#00d4aa]/10">
                        <h4 className="text-xs font-semibold text-[#00d4aa] mb-1">
                          Solution
                        </h4>
                        <p className="text-xs text-[#a1a1aa] leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold text-[#f5f5f5] mb-2">
                        Key Results
                      </h4>
                      <ul className="space-y-1.5">
                        {project.results.map((result, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-[#a1a1aa]"
                          >
                            <ArrowRight
                              size={12}
                              className="mt-0.5 shrink-0"
                              style={{ color: project.color }}
                            />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Architecture */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.architecture.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-md text-[10px] bg-white/5 text-[#6b7280] border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
