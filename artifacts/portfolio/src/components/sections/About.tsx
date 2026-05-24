import { motion } from "framer-motion";

const competencies = [
  "Infrastructure Expansion",
  "Multi-Site Execution",
  "Electrical Systems",
  "Technical Validation",
  "Operational Rollout"
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative" data-testid="section-about">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
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

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-white/5 transition-colors hover:border-[#0ea5e9]/30" data-testid="stat-sites">
                <div className="text-4xl font-bold font-display text-white mb-1">55</div>
                <div className="text-sm font-mono text-[#94a3b8] uppercase tracking-wider">Sites in 3 quarters</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-white/5 transition-colors hover:border-[#0ea5e9]/30" data-testid="stat-target">
                <div className="text-4xl font-bold font-display text-[#0ea5e9] mb-1">300%</div>
                <div className="text-sm font-mono text-[#94a3b8] uppercase tracking-wider">Deployment target</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-white/5 transition-colors hover:border-[#0ea5e9]/30" data-testid="stat-concurrent">
                <div className="text-4xl font-bold font-display text-white mb-1">100+</div>
                <div className="text-sm font-mono text-[#94a3b8] uppercase tracking-wider">Concurrent sites</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-white/5 transition-colors hover:border-[#0ea5e9]/30" data-testid="stat-experience">
                <div className="text-4xl font-bold font-display text-white mb-1">5+</div>
                <div className="text-sm font-mono text-[#94a3b8] uppercase tracking-wider">Years in field</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {competencies.map((comp, idx) => (
                <div key={idx} className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-sm font-medium text-white/80 hover:border-[#0ea5e9]/50 hover:text-white transition-colors cursor-default">
                  {comp}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-display text-white mb-6">Executive Summary</h3>
            <p className="text-lg md:text-xl text-[#94a3b8] leading-relaxed mb-6">
              I am a Project Lead engineering high-performance logistics networks and executing multi-site rollouts with uncompromising precision. Currently driving nationwide expansion programs at ByteDance, I orchestrate the full deployment lifecycle from technical validation through operational go-live.
            </p>
            <p className="text-lg md:text-xl text-[#94a3b8] leading-relaxed mb-8">
              My technical foundation spans complex electrical systems, automation, and conveyor infrastructures. I leverage this depth to drive rigorous project execution: identifying critical path dependencies, optimizing BOQs, steering cross-functional teams, and consistently delivering infrastructure scale ahead of aggressive commercial timelines.
            </p>

            <div className="space-y-4 border-l-2 border-[#0ea5e9]/30 pl-6">
              <div className="text-white text-lg font-medium">Core Tenets</div>
              <p className="text-[#94a3b8] leading-relaxed">
                Accelerate deployment without sacrificing reliability. Connect deep technical insight with high-level operational strategy. Command the site, control the budget, and scale the infrastructure.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
