import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import picAgingTracker from "@assets/Porto_2.1_1779589886044.png";
import picRolloutDashboard from "@assets/Porto_2_1779589886043.jpg";
import picGanttChart from "@assets/Porto_1_1779589886043.jpg";
import picCapexDashboard from "@assets/porto_3_1779589886044.jpg";

const projects = [
  {
    id: "pic-aging-tracker",
    title: "Real-Time PIC & Aging Tracker",
    subtitle: "Multi-Site Execution Tracking — Plan vs Actual Progress",
    role: "Project Coordinator, tracking site progress vs planned milestones",
    description:
      "Developed a real-time dashboard to monitor the progress of 68+ concurrent sites. Shows who is responsible (PIC) for each task, how long a task has been pending (aging), and the live status of each activity. Color-coded status highlights (Completed, Ongoing, To Monitor, Urgent) enable instant decision-making across distributed teams.",
    tags: ["Lark Sheet", "Multi-site Tracking", "PIC Management", "Aging Analysis"],
    image: picAgingTracker,
    featured: true,
  },
  {
    id: "gantt-chart",
    title: "Project Timeline & Gantt Chart System",
    subtitle: "Cross-Workstream Milestone Management",
    role: "Project Lead managing Gantt timelines across workstreams",
    description:
      "Built a structured Gantt chart system to manage project timelines across multiple phases and sites. Tracks dependencies, monitors progress, and ensures on-time delivery of project milestones across all active workstreams.",
    tags: ["MS Project", "Gantt Chart", "Dependency Tracking", "Milestone Management"],
    image: picGanttChart,
    featured: false,
  },
  {
    id: "rollout-dashboard",
    title: "Expansion Planning & Rollout Dashboard",
    subtitle: "Planned vs Actual Site Openings by Region and Month",
    role: "Project Lead overseeing national expansion rollout",
    description:
      "Dashboard tracking the expansion planning for 2026 across all regions, comparing planned vs actual site openings by quarter. Helped identify execution gaps and acceleration opportunities — Q1 Region A alone exceeded target with 38 actual vs 24 planned.",
    tags: ["Google Sheets", "Looker Studio", "Rollout Planning", "Regional Tracking"],
    image: picRolloutDashboard,
    featured: false,
  },
  {
    id: "cost-dashboard",
    title: "Project Cost Control & Budget Monitoring (MCP Dashboard)",
    subtitle: "Real-Time CAPEX Budget vs Expenditure — 207 Sites",
    role: "Project Lead tracking budget vs expenditure across sites",
    description:
      "Monitors project CAPEX expenditure versus allocated budget across 207 sites and multiple workstreams (Civil & MEP, IT, Fit-Out). Features a national site map, vendor resource allocation breakdown, and project weight analysis to identify overspending risks early.",
    tags: ["Google Sheets", "Looker Studio", "Feishu", "CAPEX Monitoring", "207 Sites"],
    image: picCapexDashboard,
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
            Operational tools built in the field to solve real coordination problems — distributed teams, live data, zero margin for error.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/60 hover:shadow-lg transition-all duration-300 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              data-testid={`card-project-${project.id}`}
            >
              {/* Project screenshot */}
              <div className={`relative w-full overflow-hidden border-b border-border ${project.featured ? "max-h-[460px]" : "max-h-[240px]"}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  data-testid={`img-project-${project.id}`}
                />
              </div>

              <div className="relative z-10 p-8 flex flex-col flex-1">
                {project.featured && (
                  <div className="mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider w-fit">
                    Highlighted Project
                  </div>
                )}

                <h3 className="text-xl md:text-2xl font-bold font-display text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-primary mb-1">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground italic mb-4">Role: {project.role}</p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-mono text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto pt-5 border-t border-border">
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
