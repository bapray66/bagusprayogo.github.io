import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Leadership & Strategy",
      skills: ["Product Management", "Project Leadership", "Cross-functional Team Leadership", "Roadmap Planning", "Stakeholder Management", "Agile/Scrum"]
    },
    {
      title: "Technical Engineering",
      skills: ["System Design", "Python", "SQL", "Data Analytics", "API Architecture", "Engineering Coordination"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

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
            A dual-threat skill set combining strategic leadership with deep technical knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-semibold font-display mb-8 text-foreground border-b border-border pb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <motion.div 
                    key={skill} 
                    variants={itemVariants}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">{skill}</span>
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
