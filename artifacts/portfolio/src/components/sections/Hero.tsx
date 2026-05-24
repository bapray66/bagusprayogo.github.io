import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-[100dvh] flex flex-col justify-center relative pt-20 pb-10"
      data-testid="section-hero"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary font-mono text-sm uppercase tracking-wider font-semibold">
              Project Lead at ByteDance
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.1] mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building products <br className="hidden md:block" />
            that ship at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">scale.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm <span className="text-foreground font-medium">Bagus Prayogo</span>. I drive large-scale product initiatives, align engineering with business goals, and deliver high-impact solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 h-14 text-base font-semibold group"
              onClick={scrollToProjects}
              data-testid="button-hero-cta"
            >
              View Selected Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex items-center gap-4 px-4">
              <a href="#" className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" data-testid="link-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" data-testid="link-github">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:hello@example.com" className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" data-testid="link-email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="animate-bounce p-3 bg-card rounded-full border border-border shadow-sm text-muted-foreground">
          <ChevronDown className="h-5 w-5" />
        </div>
      </motion.div>
    </section>
  );
}
