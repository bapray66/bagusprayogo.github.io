import { motion } from "framer-motion";
import { ChevronDown, Download, Linkedin, FolderOpen } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { useEffect, useState } from "react";

function KpiCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
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
      data-testid={`kpi-card-${label.toLowerCase().replace(/\s+/g, "-")}`}
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
    const el = document.getElementById("projects");
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  const ctaButtons = [
    {
      id: "download-cv",
      label: "Download CV",
      icon: <Download className="h-4 w-4" />,
      variant: "primary" as const,
      onClick: () => {
        const a = document.createElement("a");
        a.href = "/Bagus_Prayogo_CV.pdf";
        a.download = "Bagus_Prayogo_CV.pdf";
        a.click();
      },
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      variant: "glass" as const,
      onClick: () => window.open("https://linkedin.com/in/baguspray", "_blank", "noopener,noreferrer"),
    },
    {
      id: "view-projects",
      label: "View Projects",
      icon: <FolderOpen className="h-4 w-4" />,
      variant: "ghost" as const,
      onClick: scrollToProjects,
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex flex-col justify-center relative pt-32 pb-20"
      data-testid="section-hero"
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col h-full justify-center">
        <div className="max-w-5xl mx-auto text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-[1px] w-8 bg-[#0ea5e9]" />
            <span className="text-[#0ea5e9] font-mono text-sm md:text-base uppercase tracking-[0.2em] font-semibold">
              Infrastructure & Expansion Project Lead
            </span>
            <div className="h-[1px] w-8 bg-[#0ea5e9]" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.1] mb-8 tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Bagus Prayogo
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-2xl text-[#94a3b8] max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Experienced in nationwide infrastructure expansion, electrical systems, automation projects, and operational rollout management across Indonesia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Download CV — Primary solid */}
            <motion.button
              onClick={ctaButtons[0].onClick}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0ea5e9] text-white font-semibold text-base shadow-[0_0_24px_rgba(14,165,233,0.35)] hover:shadow-[0_0_40px_rgba(14,165,233,0.55)] hover:bg-[#38bdf8] transition-all duration-300 overflow-hidden"
              data-testid="button-download-cv"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Download className="h-4 w-4 shrink-0" />
              Download CV
            </motion.button>

            {/* LinkedIn — Glass */}
            <motion.button
              onClick={ctaButtons[1].onClick}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold text-base hover:bg-white/10 hover:border-[#0ea5e9]/50 hover:shadow-[0_0_24px_rgba(14,165,233,0.2)] transition-all duration-300"
              data-testid="button-linkedin"
            >
              <Linkedin className="h-4 w-4 shrink-0 text-[#67e8f9]" />
              LinkedIn
            </motion.button>

            {/* View Projects — Ghost with arrow */}
            <motion.button
              onClick={ctaButtons[2].onClick}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/15 text-[#94a3b8] font-semibold text-base hover:text-white hover:border-white/30 hover:shadow-[0_0_16px_rgba(255,255,255,0.06)] transition-all duration-300"
              data-testid="button-view-projects"
            >
              <FolderOpen className="h-4 w-4 shrink-0 group-hover:text-[#67e8f9] transition-colors duration-300" />
              View Projects
            </motion.button>
          </motion.div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-auto">
          <KpiCard value={55}  suffix=""  label="Operational Sites Delivered"     delay={0.5} />
          <KpiCard value={100} suffix="+" label="Concurrent Sites Monitored"      delay={0.6} />
          <KpiCard value={300} suffix="%" label="Deployment Target Achievement"   delay={0.7} />
          <KpiCard value={132} suffix=""  label="National Expansion Sites (2026)" delay={0.8} />
        </div>
      </div>

      {/* Scroll indicator */}
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
