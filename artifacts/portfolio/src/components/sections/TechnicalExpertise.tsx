import { motion } from "framer-motion";
import { Zap, Activity, Box, Battery, Settings, CheckSquare, MapPin, ClipboardCheck, FileText, ChevronRight, ChevronDown } from "lucide-react";

const expertise = [
  { icon: Zap, title: "Electrical Power Distribution (MV/LV)", desc: "End-to-end design and execution of power systems." },
  { icon: Activity, title: "Cable Sizing & Load Calculation", desc: "Precision calculations for optimal infrastructure reliability." },
  { icon: Box, title: "Transformer & Cubicle Systems", desc: "Installation and management of high-capacity transformers." },
  { icon: Battery, title: "Capacitor Bank & ATS/AMF", desc: "Power quality optimization and automatic transfer switching." },
  { icon: Settings, title: "Automation & Conveyor Projects", desc: "Industrial automation and sorting line installations." },
  { icon: CheckSquare, title: "Technical Validation & Commissioning", desc: "Rigorous testing protocols for site handover." },
  { icon: MapPin, title: "Site Execution & Go-Live Readiness", desc: "Managing contractors and timelines for zero-delay launches." },
  { icon: ClipboardCheck, title: "SAT/FAT Support", desc: "Factory and Site Acceptance Testing coordination." },
  { icon: FileText, title: "BOQ & Technical Review", desc: "Bill of Quantities validation and cost control." },
];

const flowSteps = [
  { icon: Zap, label: "MV Power" },
  { icon: Box, label: "Transformer" },
  { icon: Battery, label: "ATS/AMF" },
  { icon: Activity, label: "Distribution Panel" },
  { icon: MapPin, label: "Low Voltage" },
  { icon: Settings, label: "Automation/Conveyor" }
];

export function TechnicalExpertise() {
  return (
    <section id="expertise" className="py-24 md:py-32 relative" data-testid="section-expertise">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Deep domain knowledge across electrical systems, automation infrastructure, and project delivery.
          </p>
        </motion.div>

        {/* Infrastructure Flow Visualization */}
        <motion.div 
          className="mb-20 overflow-hidden relative rounded-2xl p-6 md:p-8 bg-[#111827]/80 backdrop-blur-sm border border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-testid="infrastructure-flow"
        >
          {/* Shimmer pulse effect */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent animate-shimmer" />
          </div>

          <h3 className="text-sm font-mono text-[#94a3b8] uppercase tracking-wider mb-8 text-center md:text-left">Infrastructure Delivery Flow</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            {flowSteps.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-4 md:gap-2 w-full md:w-auto">
                <div className="flex flex-col items-center justify-center p-4 w-full md:w-36 h-28 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#0ea5e9]/30 hover:bg-white/[0.04] transition-all z-10 group">
                  <step.icon className="w-8 h-8 text-[#0ea5e9] mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-center text-white/80">{step.label}</span>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="text-white/20 my-2 md:my-0">
                    <ChevronRight className="w-6 h-6 hidden md:block" />
                    <ChevronDown className="w-6 h-6 block md:hidden" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              className="group p-8 rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-white/5 hover:border-[#0ea5e9]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              data-testid={`card-expertise-${i}`}
            >
              <div className="mb-6 p-4 rounded-xl bg-primary/10 w-fit text-primary group-hover:scale-110 transition-transform duration-300">
                <item.icon className="h-8 w-8 text-[#0ea5e9]" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">{item.title}</h3>
              <p className="text-[#94a3b8] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
