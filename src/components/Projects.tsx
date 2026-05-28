"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Layers, ArrowUpRight } from "lucide-react";

interface ProjectItem {
  title: string;
  category: "Go" | "Node.js" | "ML" | "DevOps" | "All";
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  stats: string; // e.g. "70% Latency Reduction" or "10k msg/sec"
}

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "Go" | "Node.js" | "ML" | "DevOps">("All");

  const projects: ProjectItem[] = [
    {
      title: "AI Chat Streamer API (Hono & SSE)",
      category: "Node.js",
      description: "Designed a real-time AI API integration engine that streams structured response chunks to clients, reducing time-to-first-token latency by 70%. Implemented with Hono and Server-Sent Events.",
      tech: ["Node.js (Hono)", "Server-Sent Events", "TypeScript", "AI API Integration"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      stats: "70% Latency Cut"
    },
    {
      title: "Go Logistics Microservices (Fiber & gRPC)",
      category: "Go",
      description: "Engineered microservices for a nationwide logistics application. Utilized gRPC for ultra-fast internal RPC communication and Go Fiber for external REST endpoints, managing high-throughput loads.",
      tech: ["Go (Fiber)", "gRPC", "PostgreSQL", "Docker", "Kubernetes"],
      githubUrl: "https://github.com",
      stats: "1.2ms Avg Latency"
    },
    {
      title: "Real-time Messaging Hub (RabbitMQ & WebSockets)",
      category: "DevOps",
      description: "Created a message distribution engine managing 5,000+ active socket connections. Integrates RabbitMQ queues with Socket.io server to forward live notifications to frontend dashboards.",
      tech: ["Node.js", "Express", "RabbitMQ", "WebSockets", "Redis Cache"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      stats: "5k+ Live Sockets"
    },
    {
      title: "Potato Leaf Disease Classifier (SVM Machine Learning)",
      category: "ML",
      description: "Developed an SVM-based classification pipeline extracting leaf texture, color, and shape features to detect disease states in potato crops. Academic publication reference from IEEE 2022.",
      tech: ["Python", "OpenCV", "Scikit-Learn", "SVM Classifier", "SQLite"],
      githubUrl: "https://github.com",
      stats: "94.5% Accuracy"
    },
    {
      title: "ERP Document Management System Core",
      category: "Node.js",
      description: "Built the REST API and relational database schema for an enterprise ERP, CRM, and Document Management System (DMS). Includes robust access controls and revision history logging.",
      tech: ["Node.js (NestJS)", "Laravel", "MySQL", "Elasticsearch"],
      githubUrl: "https://github.com",
      stats: "150+ API Endpoints"
    },
    {
      title: "Containerized Microservices Cluster Config",
      category: "DevOps",
      description: "Configured Kubernetes orchestrations with Docker containers, ELK stack monitoring, and GitHub CI/CD pipelines to ensure continuous delivery with automated vulnerability checks.",
      tech: ["Docker", "Kubernetes", "ELK Stack", "GitHub Actions", "AWS"],
      githubUrl: "https://github.com",
      stats: "99.99% System Uptime"
    }
  ];

  const categories: ("All" | "Go" | "Node.js" | "ML" | "DevOps")[] = ["All", "Go", "Node.js", "ML", "DevOps"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base font-semibold tracking-wider text-primary uppercase">Projects</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Featured Backend Architectures
          </p>
          <div className="mt-4 h-1 w-12 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              suppressHydrationWarning
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all overflow-hidden relative"
              >
                {/* Background Tint Card */}
                <div className="absolute top-0 right-0 -z-10 h-24 w-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-3xl transition-transform group-hover:scale-110"></div>

                <div>
                  {/* Category and Performance Stats */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      <Layers className="h-3 w-3" />
                      {project.category}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">
                      {project.stats}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-1">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* External Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/60">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline cursor-pointer"
                      >
                        Demo
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
