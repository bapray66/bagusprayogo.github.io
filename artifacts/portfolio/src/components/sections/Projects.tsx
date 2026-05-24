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
    <section id="projects" className="py-24 md:py-32 relative" data-testid="section-projects">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-white">Project Execution Portfolio</h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl">
            A record of large-scale infrastructure programs delivered at speed and at scale — directing cross-functional teams, managing vendors, and driving site readiness from first concept to full operation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative flex flex-col rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-white/5 overflow-hidden hover:border-[#0ea5e9]/50 hover:shadow-[0_10px_40px_rgba(14,165,233,0.15)] transition-all duration-500 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              data-testid={`card-project-${project.id}`}
            >
              {/* Project screenshot */}
              <div className={`relative w-full overflow-hidden border-b border-white/5 bg-[#0a0f1e] ${project.featured ? "max-h-[500px]" : "max-h-[280px]"}`}>
                <div className="absolute inset-0 bg-[#0ea5e9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  data-testid={`img-project-${project.id}`}
                />
              </div>

              <div className="relative z-20 p-8 md:p-10 flex flex-col flex-1">
                {project.featured && (
                  <div className="mb-4 inline-flex items-center rounded-full border border-[#0ea5e9]/30 bg-[#0ea5e9]/10 px-4 py-1.5 text-xs font-bold text-[#67e8f9] uppercase tracking-wider w-fit shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                    Highlighted Project
                  </div>
                )}

                <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-2 group-hover:text-[#67e8f9] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-[#0ea5e9] mb-2">{project.subtitle}</p>
                <p className="text-sm text-[#94a3b8] italic mb-6">Role: {project.role}</p>

                <p className="text-[#94a3b8] leading-relaxed mb-8 text-base md:text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-mono text-xs bg-white/5 hover:bg-white/10 text-[#94a3b8] border-none px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <a
                    href="https://linkedin.com/in/baguspray"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-semibold text-white hover:text-[#0ea5e9] transition-colors"
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
