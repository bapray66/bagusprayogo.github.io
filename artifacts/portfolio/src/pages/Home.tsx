import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechnicalExpertise } from "@/components/sections/TechnicalExpertise";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { AnimatedBackground } from "@/components/layout/AnimatedBackground";

export default function Home() {
  return (
    <main className="bg-background min-h-[100dvh] text-foreground selection:bg-primary/30 relative">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Projects />
      <TechnicalExpertise />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
