import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/use-count-up";
import { useEffect, useState } from "react";

function KpiCard({ value, suffix, label, delay }: { value: number, suffix: string, label: string, delay: number }) {
  const [start, setStart] = useState(false);
  const count = useCountUp(start ? value : 0, 2000);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-white/5 hover:border-[#0ea5e9]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] flex flex-col"
    >
      <div className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-br from-[#0ea5e9] to-[#67e8f9] mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-mono text-[#94a3b8] uppercase tracking-wider leading-relaxed">
        {label}
      </div>
    </motion.div>
  );
}

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
      className="min-h-[100dvh] flex flex-col justify-center relative pt-32 pb-20"
      data-testid="section-hero"
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col h-full justify-center">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-[1px] w-8 bg-[#0ea5e9]"></div>
            <span className="text-[#0ea5e9] font-mono text-sm md:text-base uppercase tracking-[0.2em] font-semibold">
              Infrastructure & Expansion Project Lead
            </span>
            <div className="h-[1px] w-8 bg-[#0ea5e9]"></div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.1] mb-8 tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Bagus Prayogo
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-[#94a3b8] max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Experienced in nationwide infrastructure expansion, electrical systems, automation projects, and operational rollout management across Indonesia.
          </motion.p>

          <motion.div
            className="flex justify-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="rounded-full px-10 h-14 text-base font-semibold group bg-[#0ea5e9] hover:bg-[#38bdf8] text-white border-none shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all"
              onClick={scrollToProjects}
              data-testid="button-hero-cta"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-auto">
          <KpiCard value={55} suffix="" label="Operational Sites Delivered" delay={0.5} />
          <KpiCard value={100} suffix="+" label="Concurrent Sites Monitored" delay={0.6} />
          <KpiCard value={300} suffix="%" label="Deployment Target Achievement" delay={0.7} />
          <KpiCard value={132} suffix="" label="National Expansion Sites (2026)" delay={0.8} />
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="animate-bounce text-[#94a3b8]/50 p-2">
          <ChevronDown className="h-6 w-6" />
        </div>
      </motion.div>
    </section>
  );
}
