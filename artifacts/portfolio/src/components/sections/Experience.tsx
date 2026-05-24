import { motion } from "framer-motion";
import { SiBytedance } from "react-icons/si";
import { Building2, Zap } from "lucide-react";

const experiences = [
  {
    id: "bytedance",
    company: "ByteDance",
    role: "Project Lead",
    dates: "Jan 2025 — Present",
    icon: <SiBytedance className="h-6 w-6" />,
    accentColor: "#0ea5e9",
    featured: true,
    metrics: [
      { value: "55", label: "Sites in 3 Quarters" },
      { value: "300%", label: "Q1 2026 Target" },
      { value: "132", label: "National Sites (2026)" },
      { value: "100+", label: "Concurrent Sites" },
    ],
    highlights: [
      "Led national-scale logistics expansion (first mile, last mile, automated sortation) across multi-region deployment",
      "Directed cross-functional execution across engineering, operations, and vendors for seamless rollout",
      "Led technical validation including BOQ review, layout alignment, and automation SAT prior to go-live",
      "Full project lifecycle ownership — planning, execution, go-live, budget, and technical validation",
    ],
  },
  {
    id: "goto",
    company: "Goto Logistic",
    role: "Senior Electrical Engineer",
    dates: "Jul 2022 — Dec 2024",
    icon: <Zap className="h-6 w-6" />,
    accentColor: "#67e8f9",
    featured: false,
    metrics: [],
    highlights: [
      "Promoted to Senior Electrical Engineer, leading technical work and team guidance",
      "Acted as main link between design, execution, and stakeholders",
      "Contributed to fulfillment center and hub expansion projects",
    ],
  },
  {
    id: "swift",
    company: "Swift Logistics Solutions",
    role: "Electrical Engineer",
    dates: "Sep 2021 — Jul 2022",
    icon: <Building2 className="h-6 w-6" />,
    accentColor: "#94a3b8",
    featured: false,
    metrics: [],
    highlights: [
      "Assisted electrical engineering tasks for a major fulfillment center",
      "Collaborated on design reviews, layouts, BOQs, and technical reviews",
    ],
  },
  {
    id: "wings",
    company: "Wings Group",
    role: "Electrical Engineer",
    dates: "Aug 2019 — Apr 2021",
    icon: <Building2 className="h-6 w-6" />,
    accentColor: "#94a3b8",
    featured: false,
    metrics: [],
    highlights: [
      "Delivered 13+ projects in under 2 years — strong execution speed and multitasking",
      "Designed electrical systems including load analysis, MEP layout, and technical specifications",
    ],
  },
  {
    id: "fuji",
    company: "Fuji SMBE",
    role: "Site Service Engineer",
    dates: "Mar 2019 — Jul 2019",
    icon: <Zap className="h-6 w-6" />,
    accentColor: "#94a3b8",
    featured: false,
    metrics: [],
    highlights: [
      "Conducted SAT and FAT with clients; performed on-site commissioning and repairs",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative" data-testid="section-experience">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-white">Career Timeline</h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl">
            From field engineering to leading nationwide infrastructure rollouts.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#0ea5e9]/60 via-[#0ea5e9]/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative pl-16 md:pl-24"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                data-testid={`experience-card-${exp.id}`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 md:left-5 top-6 h-5 w-5 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: exp.accentColor,
                    backgroundColor: exp.featured ? exp.accentColor : "#0a0f1e",
                    boxShadow: exp.featured ? `0 0 16px ${exp.accentColor}80` : "none",
                  }}
                >
                  {exp.featured && <div className="h-2 w-2 rounded-full bg-white" />}
                </div>

                {/* Card */}
                <div
                  className={`rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.08)] ${
                    exp.featured
                      ? "bg-[#111827]/90 border-[#0ea5e9]/25 hover:border-[#0ea5e9]/40"
                      : "bg-[#111827]/60 border-white/5 hover:border-white/10"
                  }`}
                >
                  {/* Card header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2.5 rounded-xl"
                        style={{ backgroundColor: `${exp.accentColor}18`, color: exp.accentColor }}
                      >
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold font-display text-white">{exp.role}</h3>
                        <p className="font-semibold" style={{ color: exp.accentColor }}>{exp.company}</p>
                      </div>
                    </div>
                    <span className="shrink-0 text-sm font-mono text-[#94a3b8] bg-white/5 px-3 py-1.5 rounded-full border border-white/8">
                      {exp.dates}
                    </span>
                  </div>

                  {/* Metric callout cards — ByteDance only */}
                  {exp.metrics.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      {exp.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3 rounded-xl bg-[#0a0f1e]/80 border border-[#0ea5e9]/15 text-center"
                          data-testid={`metric-${m.label.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <div className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-br from-[#0ea5e9] to-[#67e8f9]">
                            {m.value}
                          </div>
                          <div className="text-xs font-mono text-[#94a3b8] mt-1 uppercase tracking-wide leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#94a3b8] leading-relaxed">
                        <span
                          className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: exp.accentColor }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
