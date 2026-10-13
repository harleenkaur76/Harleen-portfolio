import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import WorkIndex from "@/components/home/WorkIndex";
import About from "@/components/home/About";
import Approach from "@/components/home/Approach";
import Experiments from "@/components/home/Experiments";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WorkIndex />
      <About />
      <Approach />
      <Experiments />
      <Contact />
    </>
  );
}
