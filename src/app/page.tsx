import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ClientMarquee from "@/components/ClientMarquee";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import ProcessSection from "@/components/ProcessSection";
import Skills from "@/components/Skills";
import TerminalShowcase from "@/components/TerminalShowcase";
import Projects from "@/components/Projects";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ClientMarquee />
      <Services />
      <Experience />
      <ProcessSection />
      <Skills />
      <TerminalShowcase />
      <Projects />
      <BlogPreview />
      <Contact />
    </>
  );
}
