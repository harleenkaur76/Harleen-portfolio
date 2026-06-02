import Hero from "@/components/Hero";
import Now from "@/components/Now";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import TerminalShowcase from "@/components/TerminalShowcase";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Now />
      <SectionDivider label="experience" />
      <Experience />
      <SectionDivider label="tools" />
      <Skills />
      <SectionDivider label="projects" />
      <Projects />
      <SectionDivider label="code" />
      <TerminalShowcase />
      <SectionDivider label="writings" />
      <BlogPreview />
      <SectionDivider label="contact" />
      <Contact />
    </>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="flex items-center gap-4 py-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.05]" />
        <span className="text-[10px] font-mono text-[#9a9386]/25 uppercase tracking-[0.4em]">
          {label}
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.05]" />
      </div>
    </div>
  );
}
