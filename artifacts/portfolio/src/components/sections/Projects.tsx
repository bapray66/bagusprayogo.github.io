import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      id: "process-tracker",
      title: "FlowState Process Tracker",
      description: "A centralized process tracking tool designed to streamline internal workflows across engineering and product departments. Replaced 14 fragmented spreadsheets, reducing status update meetings by 40% and providing real-time visibility into cross-functional initiatives.",
      tags: ["Python", "React", "System Design", "Internal Tools"],
      link: "#",
      featured: true
    },
    {
      id: "analytics-platform",
      title: "Unified Analytics Hub",
      description: "An internal analytics platform that aggregated data from 5 disparate microservices into a single pane of glass. Enabled PMs and engineers to query adoption metrics without writing raw SQL, drastically improving decision velocity.",
      tags: ["Data Analytics", "SQL", "Dashboarding", "ETL"],
      link: "#"
    },
    {
      id: "team-efficiency",
      title: "ScrumBot Efficiency Tool",
      description: "Automated efficiency tool that hooks into issue trackers to calculate sprint velocity, identify bottlenecks, and auto-generate retro reports. Adopted by 12 squads within the first quarter.",
      tags: ["API Architecture", "Python", "Agile", "Automation"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32" data-testid="section-projects">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Selected Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              High-leverage internal tools and platforms built to solve organizational bottlenecks.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`group relative flex flex-col justify-between p-8 rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors ${project.featured ? 'lg:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              data-testid={`card-project-${project.id}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              <div className="relative z-10">
                {project.featured && (
                  <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
                    Highlighted Project
                  </div>
                )}
                <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className={`text-muted-foreground leading-relaxed mb-8 ${project.featured ? 'md:text-xl max-w-4xl' : 'text-lg'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-12">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50 hover:bg-secondary font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-border/50">
                <a 
                  href={project.link}
                  className="inline-flex items-center font-semibold text-foreground hover:text-primary transition-colors"
                  data-testid={`link-project-${project.id}`}
                >
                  View Details
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
