import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    title: "Project & Execution",
    skills: [
      "Project Leadership",
      "Budget & Cost Control",
      "Team Management",
      "Technical Supervision",
      "Roadmap Planning",
      "Stakeholder Management",
      "Agile / Scrum",
      "Multi-site Coordination",
    ],
  },
  {
    title: "Electrical Engineering",
    skills: [
      "MV / LV Power Systems",
      "Cable Sizing & Load Calculation",
      "Transformer & Cubicle",
      "ATS / AMF & Panel Distribution",
      "BOQ Review",
      "SAT / FAT & Commissioning",
      "Automation & Conveyor Infrastructure",
      "MEP Layout & Design",
    ],
  },
  {
    title: "Tools & Software",
    skills: [
      "AutoCAD",
      "ETAP",
      "SAP",
      "Advanced Excel & MS Project",
      "Dialux",
      "SolidWork",
      "Lark / Feishu",
      "Google Looker Studio",
    ],
  },
  {
    title: "Languages",
    skills: ["Bahasa Indonesia (Native)", "English (Professional)"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32" data-testid="section-skills">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Deep technical roots combined with cross-functional leadership experience in high-stakes environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              data-testid={`skill-category-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <h3 className="text-2xl font-semibold font-display mb-8 text-foreground border-b border-border pb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors"
                    data-testid={`skill-item-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
