import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import picTrackerImg from "@assets/Porto_2.1_1779589471901.png";

const projects = [
  {
    id: "pic-aging-tracker",
    title: "Real-Time PIC & Aging Tracker",
    subtitle: "Multi-Site Execution Tracking — Plan vs Actual Progress",
    role: "Project Coordinator, tracking site progress vs planned milestones",
    description:
      "Developed a real-time dashboard to monitor the progress of 68+ concurrent sites in a structured and transparent way. The tracker shows who is responsible (PIC) for each task, how long a task has been pending (aging), and the real-time status of each activity. Color-coded status highlights (Completed, Ongoing, To Monitor, Urgent) enable instant decision-making across distributed teams.",
    tags: ["Lark Sheet", "Multi-site Tracking", "PIC Management", "Aging Analysis", "Status Dashboard"],
    image: picTrackerImg,
    featured: true,
  },
  {
    id: "gantt-chart",
    title: "Project Timeline & Gantt Chart System",
    subtitle: "Cross-Workstream Milestone Management",
    role: "Project Lead managing Gantt timelines across workstreams",
    description:
      "Built a structured Gantt chart system to manage project timelines across multiple phases and sites. Used to track dependencies, monitor progress, and ensure on-time delivery of project milestones. Enabled visibility across all active workstreams under a single timeline view.",
    tags: ["MS Project", "Gantt Chart", "Dependency Tracking", "Milestone Management"],
    image: null,
    featured: false,
  },
  {
    id: "cost-dashboard",
    title: "Project Cost Control & Budget Monitoring Dashboard",
    subtitle: "Real-Time Budget vs Expenditure Visibility",
    role: "Project Lead tracking budget vs expenditure across sites",
    description:
      "Designed to monitor project expenditure versus allocated budget across multiple workstreams. Provides real-time visibility into cost performance and helps identify overspending risks early. Integrated data from Google Sheets into Looker Studio for dynamic reporting, shared via Feishu for cross-functional access.",
    tags: ["Google Sheets", "Looker Studio", "Feishu", "Cost Control", "Budget Monitoring"],
    image: null,
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32" data-testid="section-projects">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Selected Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Operational tools built in the field to solve real coordination problems — fast-moving projects, distributed teams, live data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative flex flex-col justify-between rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              data-testid={`card-project-${project.id}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              {project.featured && project.image && (
                <div className="relative w-full overflow-hidden border-b border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover object-top max-h-[420px]"
                    data-testid="img-project-featured"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent pointer-events-none" />
                </div>
              )}

              <div className="relative z-10 p-8 flex flex-col flex-1">
                {project.featured && (
                  <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider w-fit">
                    Highlighted Project
                  </div>
                )}

                <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-primary mb-2">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground/70 italic mb-4">Role: {project.role}</p>

                <p className={`text-muted-foreground leading-relaxed mb-8 ${project.featured ? "md:text-xl max-w-4xl" : "text-base"}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary font-mono text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-border/50">
                  <a
                    href="https://linkedin.com/in/baguspray"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-semibold text-foreground hover:text-primary transition-colors"
                    data-testid={`link-project-${project.id}`}
                  >
                    View on LinkedIn
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
