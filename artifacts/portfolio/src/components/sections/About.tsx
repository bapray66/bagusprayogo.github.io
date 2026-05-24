import { motion } from "framer-motion";

const highlights = [
  "Delivered 55 operational sites within 3 quarters under aggressive rollout timeline",
  "Achieved 300% of Q1 2026 deployment target — 30 sites vs 10 planned",
  "Managed 100+ concurrent sites across multiple regions in Indonesia",
  "Driving 132-site national expansion program (2026) with parallel execution strategy",
  "Full project lifecycle ownership: planning, execution, go-live, budget, and technical validation",
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative" data-testid="section-about">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-10 text-white">
              Infrastructure <br />
              <span className="text-[#0ea5e9]">at full throttle</span>
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-white/5" data-testid="stat-sites">
                <div className="text-4xl font-bold font-display text-white mb-1">55</div>
                <div className="text-sm font-mono text-[#94a3b8] uppercase tracking-wider">Sites in 3 quarters</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-white/5" data-testid="stat-target">
                <div className="text-4xl font-bold font-display text-[#0ea5e9] mb-1">300%</div>
                <div className="text-sm font-mono text-[#94a3b8] uppercase tracking-wider">Deployment target</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-white/5" data-testid="stat-concurrent">
                <div className="text-4xl font-bold font-display text-white mb-1">100+</div>
                <div className="text-sm font-mono text-[#94a3b8] uppercase tracking-wider">Concurrent sites</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-white/5" data-testid="stat-experience">
                <div className="text-4xl font-bold font-display text-white mb-1">5+</div>
                <div className="text-sm font-mono text-[#94a3b8] uppercase tracking-wider">Years in field</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-display text-white mb-6">About Me</h3>
            <p className="text-lg md:text-xl text-[#94a3b8] leading-relaxed mb-6">
              I'm a project lead specializing in <strong className="text-white">large-scale logistics infrastructure and high-speed multi-site deployment</strong>. Based in Depok, Indonesia, I currently lead nationwide expansion programs at ByteDance, overseeing everything from technical validation to go-live handover.
            </p>
            <p className="text-lg md:text-xl text-[#94a3b8] leading-relaxed mb-8">
              My background is in electrical engineering — from Medium Voltage (MV) to Low Voltage (LV) systems, cable sizing, transformer and panel design, to automation and conveyor infrastructure. That technical depth is what sets my project leadership apart: I can walk a site, read a BOQ, challenge an engineer, and catch what others miss.
            </p>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                  data-testid={`highlight-item-${i}`}
                >
                  <span className="mt-1.5 shrink-0 h-2 w-2 rounded-full bg-[#0ea5e9] shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                  <span className="text-[#e2e8f0] leading-relaxed font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
