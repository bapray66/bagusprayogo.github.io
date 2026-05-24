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
    <section id="about" className="py-24 md:py-32 bg-card/50" data-testid="section-about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-10">
              Infrastructure <br />
              <span className="text-primary">at full throttle</span>
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-secondary border border-border/50" data-testid="stat-sites">
                <div className="text-4xl font-bold font-display text-foreground mb-1">55</div>
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Sites in 3 quarters</div>
              </div>
              <div className="p-6 rounded-2xl bg-secondary border border-border/50" data-testid="stat-target">
                <div className="text-4xl font-bold font-display text-primary mb-1">300%</div>
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Deployment target</div>
              </div>
              <div className="p-6 rounded-2xl bg-secondary border border-border/50" data-testid="stat-concurrent">
                <div className="text-4xl font-bold font-display text-foreground mb-1">100+</div>
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Concurrent sites</div>
              </div>
              <div className="p-6 rounded-2xl bg-secondary border border-border/50" data-testid="stat-experience">
                <div className="text-4xl font-bold font-display text-foreground mb-1">5+</div>
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Years in field</div>
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
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a project lead specializing in <strong className="text-foreground">large-scale logistics infrastructure and high-speed multi-site deployment</strong>. Based in Depok, Indonesia, I currently lead nationwide expansion programs at ByteDance, overseeing everything from technical validation to go-live handover.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              My background is in electrical engineering — from Medium Voltage (MV) to Low Voltage (LV) systems, cable sizing, transformer and panel design, to automation and conveyor infrastructure. That technical depth is what sets my project leadership apart: I can walk a site, read a BOQ, challenge an engineer, and catch what others miss.
            </p>

            <div className="space-y-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                  data-testid={`highlight-item-${i}`}
                >
                  <span className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
