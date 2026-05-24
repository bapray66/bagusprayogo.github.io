import { motion } from "framer-motion";
import { SiBytedance } from "react-icons/si";
import { Building2, Zap } from "lucide-react";

const experiences = [
  {
    id: "bytedance",
    role: "Project Lead",
    company: "ByteDance",
    logo: <SiBytedance className="h-6 w-6" />,
    dates: "Jan 2025 — Present",
    location: "Indonesia",
    highlights: [
      "Led national-scale logistics expansion (first mile, last mile, automated sortation) across multi-region deployment.",
      "Delivered 55 operational sites within 3 quarters (Java expansion) under aggressive rollout timeline.",
      "Achieved 300% of Q1 2026 deployment target (30 sites vs 10 planned), demonstrating high-speed execution capability.",
      "Driving 132-site national expansion program (2026) with multi-site parallel execution strategy.",
      "Directed cross-functional execution across engineering, operations, and vendors to ensure seamless rollout and go-live readiness.",
      "Led technical validation including BOQ review, layout alignment, and automation SAT prior to operational handover.",
    ],
  },
  {
    id: "goto",
    role: "Senior Electrical Engineer",
    company: "Goto Logistic",
    logo: <Zap className="h-6 w-6" />,
    dates: "Jul 2022 — Dec 2024",
    location: "Indonesia",
    highlights: [
      "Promoted to Senior Electrical Engineer, leading technical work and team guidance.",
      "Acted as main link between design, execution, and stakeholders across logistics and industrial builds.",
      "Contributed to fulfillment center and hub expansion projects — keeping work on track with time, budget, and technical needs.",
    ],
  },
  {
    id: "swift",
    role: "Electrical Engineer",
    company: "Swift Logistics Solutions",
    logo: <Building2 className="h-6 w-6" />,
    dates: "Sep 2021 — Jul 2022",
    location: "Indonesia",
    highlights: [
      "Assisted electrical engineering tasks for a major fulfillment center.",
      "Collaborated on design reviews, layouts, BOQs, and technical reviews.",
      "Coordinated across teams for execution and reporting throughout the full project cycle.",
    ],
  },
  {
    id: "wings",
    role: "Electrical Engineer",
    company: "Wings Group",
    logo: <Building2 className="h-6 w-6" />,
    dates: "Aug 2019 — Apr 2021",
    location: "Indonesia",
    highlights: [
      "Delivered 13+ projects within under 2 years, demonstrating strong execution speed and multitasking capability.",
      "Designed electrical systems including load analysis, MEP layout, and technical specifications.",
      "Managed BOQ preparation and supported procurement readiness for project execution.",
    ],
  },
  {
    id: "fuji",
    role: "Site Service Engineer",
    company: "Fuji SMBE",
    logo: <Zap className="h-6 w-6" />,
    dates: "Mar 2019 — Jul 2019",
    location: "Indonesia",
    highlights: [
      "Checked installed panels for accuracy against drawings.",
      "Conducted SAT and FAT with the client; performed on-site repairs and commissioning.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-card/50" data-testid="section-experience">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            From field engineering to leading 100+ concurrent infrastructure sites nationwide.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-8 md:pl-0 mb-16 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              data-testid={`experience-item-${exp.id}`}
            >
              <div className="md:hidden absolute left-[15px] top-2 bottom-[-4rem] w-[2px] bg-border last:hidden" />

              <div className="grid md:grid-cols-12 gap-6 md:gap-12 relative">
                <div className="hidden md:flex absolute left-[31.5%] top-2 bottom-[-4rem] w-[2px] bg-border last:hidden translate-x-[-1px]" />

                <div className="md:col-span-4 flex flex-col md:items-end text-left md:text-right relative z-10">
                  <div className="hidden md:flex absolute right-[-2.3rem] top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                  <div className="md:hidden absolute left-[-2.3rem] top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />

                  <h4 className="text-lg font-mono font-semibold text-foreground mb-1">{exp.dates}</h4>
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{exp.location}</span>
                </div>

                <div className="md:col-span-8 relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-secondary rounded-md text-foreground">
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-display text-foreground">{exp.role}</h3>
                      <div className="text-xl text-primary font-medium">{exp.company}</div>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed text-lg flex items-start">
                        <span className="text-primary mr-3 mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
