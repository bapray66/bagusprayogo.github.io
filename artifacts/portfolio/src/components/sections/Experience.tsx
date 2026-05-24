import { motion } from "framer-motion";
import { SiBytedance, SiDatadog } from "react-icons/si";
import { Building2 } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      id: "bytedance",
      role: "Project Lead",
      company: "ByteDance",
      logo: <SiBytedance className="h-6 w-6" />,
      dates: "2022 — Present",
      location: "Singapore / Remote",
      highlights: [
        "Led cross-functional engineering and product teams to launch high-scale internal platforms serving 10,000+ employees globally.",
        "Architected and implemented a streamlined process tracking tool that reduced cross-departmental coordination overhead by 35%.",
        "Drove quarterly roadmap planning, aligning technical resources with strategic business objectives."
      ]
    },
    {
      id: "datadog",
      role: "Senior Product Manager",
      company: "Datadog",
      logo: <SiDatadog className="h-6 w-6" />,
      dates: "2019 — 2022",
      location: "New York, NY",
      highlights: [
        "Spearheaded the development of a unified internal analytics dashboard, integrating fragmented data sources into a single source of truth.",
        "Collaborated with data engineering to design scalable SQL pipelines and optimize query performance for enterprise reporting.",
        "Mentored a team of 4 junior PMs and established agile best practices across the product organization."
      ]
    },
    {
      id: "startup",
      role: "Technical Lead",
      company: "Nexus Systems (Acquired)",
      logo: <Building2 className="h-6 w-6" />,
      dates: "2016 — 2019",
      location: "San Francisco, CA",
      highlights: [
        "Led a team of 8 full-stack engineers in building a B2B SaaS platform using Python and React.",
        "Designed core system architecture and database schema, ensuring scalability from MVP to 500+ enterprise clients.",
        "Facilitated seamless post-acquisition technical integration with the parent company's infrastructure."
      ]
    }
  ];

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
            A track record of building and leading at elite technology companies.
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
            >
              {/* Timeline Line (Mobile only) */}
              <div className="md:hidden absolute left-[15px] top-2 bottom-[-4rem] w-[2px] bg-border last:hidden" />
              
              <div className="grid md:grid-cols-12 gap-6 md:gap-12 relative">
                {/* Timeline Dot (Desktop only) */}
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
