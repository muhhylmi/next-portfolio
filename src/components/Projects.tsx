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
  stats: string; // Big primary metric like "70% Latency Cut" or "1.2ms Avg Latency"
  metricLabel: string; // Label for the metric like "Latency Optimization" or "Response Time"
}

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "Go" | "Node.js" | "ML" | "DevOps">("All");

  const projects: ProjectItem[] = [
    {
      title: "PRD Generator V1",
      category: "Node.js",
      description: "An automated platform that transforms raw product ideas into comprehensive, structured Product Requirement Documents (PRDs) using Gemini AI integration, backed by a PostgreSQL database.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "Gemini API"],
      githubUrl: "https://github.com/muhhylmi/prd-generator-be",
      liveUrl: "https://prd-generator.kemitbelajar.my.id/",
      stats: "Instant",
      metricLabel: "PRD Document Generation"
    },
    {
      title: "AI Chat Streamer API (Hono & SSE)",
      category: "Node.js",
      description: "Designed a real-time AI API integration engine that streams structured response chunks to clients, reducing time-to-first-token latency by 70%. Implemented with Hono and Server-Sent Events.",
      tech: ["Node.js (Hono)", "Server-Sent Events", "TypeScript", "AI API Integration"],
      githubUrl: "https://github.com",
      stats: "70% Cut",
      metricLabel: "Time-to-First-Token Latency"
    },
    {
      title: "Go Logistics Microservices (Fiber & gRPC)",
      category: "Go",
      description: "Engineered microservices for a nationwide logistics application. Utilized gRPC for ultra-fast internal RPC communication and Go Fiber for external REST endpoints, managing high-throughput loads.",
      tech: ["Go (Fiber)", "gRPC", "PostgreSQL", "Docker", "Kubernetes"],
      githubUrl: "https://github.com",
      stats: "1.2ms",
      metricLabel: "Average Internal Latency"
    },
    {
      title: "Real-time Messaging Hub (RabbitMQ & WebSockets)",
      category: "DevOps",
      description: "Created a message distribution engine managing 5,000+ active socket connections. Integrates RabbitMQ queues with Socket.io server to forward live notifications to frontend dashboards.",
      tech: ["Node.js", "Express", "RabbitMQ", "WebSockets", "Redis Cache"],
      githubUrl: "https://github.com",
      stats: "5k+",
      metricLabel: "Concurrent WebSocket Connections"
    },
    {
      title: "ERP Document Management System Core",
      category: "Node.js",
      description: "Built the REST API and relational database schema for an enterprise ERP, CRM, and Document Management System (DMS). Includes robust access controls and revision history logging.",
      tech: ["Node.js (NestJS)", "Laravel", "MySQL", "Elasticsearch"],
      githubUrl: "https://github.com",
      stats: "150+",
      metricLabel: "Production API Endpoints"
    },
    {
      title: "Containerized Microservices Cluster Config",
      category: "DevOps",
      description: "Configured Kubernetes orchestrations with Docker containers, ELK stack monitoring, and GitHub CI/CD pipelines to ensure continuous delivery with automated vulnerability checks.",
      tech: ["Docker", "Kubernetes", "ELK Stack", "GitHub Actions", "AWS"],
      githubUrl: "https://github.com",
      stats: "99.99%",
      metricLabel: "Cluster Infrastructure Uptime"
    }
  ];

  const categories: ("All" | "Go" | "Node.js" | "ML" | "DevOps")[] = ["All", "Go", "Node.js", "ML", "DevOps"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden border-b border-border">
      {/* Background gradients */}
      <div className="bg-mesh-glow absolute top-1/4 left-1/3 h-80 w-80 bg-accent-purple/10"></div>
      <div className="bg-mesh-glow absolute bottom-1/4 right-1/4 h-96 w-96 bg-brand/10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-brand mb-3">
            Architectures
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground font-sans">
            Featured Projects
          </h2>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-start gap-2.5 mb-12 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              suppressHydrationWarning
              className={`rounded-full px-4 py-2 font-bold transition-all duration-300 cursor-pointer active:scale-95 border ${
                filter === cat
                  ? "bg-brand text-brand-foreground shadow-raised border-brand/20"
                  : "border-border bg-card/45 backdrop-blur-sm text-muted-foreground hover:bg-muted hover:text-foreground"
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                key={project.title}
                className="hover-card-trigger"
              >
                <div className="double-bezel-outer h-full flex flex-col">
                  <div className="double-bezel-inner p-6 flex flex-col justify-between flex-grow relative overflow-hidden">
                    {/* Background Tint Card */}
                    <div className="absolute top-0 right-0 -z-10 h-24 w-24 bg-gradient-to-bl from-brand/5 to-transparent rounded-bl-3xl transition-transform group-hover:scale-110"></div>

                    <div>
                      {/* Large Prominent Metric - PostHog style */}
                      <div className="mb-6">
                        <div className="text-4xl font-extrabold text-brand font-mono leading-none tracking-tight">
                          {project.stats}
                        </div>
                        <div className="text-[9px] font-mono font-bold text-muted-foreground uppercase mt-1.5 tracking-wider">
                          {project.metricLabel}
                        </div>
                      </div>

                      {/* Category Pill */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="inline-flex items-center gap-1 rounded-xl bg-brand/10 px-3 py-1 text-xs font-mono font-bold text-brand border border-brand/15">
                          <Layers className="h-3.5 w-3.5" />
                          {project.category}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-lg font-bold text-foreground mb-3 font-sans transition-colors">
                        {project.title}
                      </h3>

                      {/* Project Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-sans">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-xl border border-border bg-muted/30 px-2.5 py-1 text-[10px] font-mono font-bold text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* External Links */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-muted-foreground hover:text-brand transition-colors cursor-pointer"
                        >
                          <Github className="h-4 w-4 text-brand" />
                          Source Code
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-1 text-xs font-mono font-bold text-brand hover:text-brand/80 cursor-pointer"
                          >
                            <span>Demo</span>
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        )}
                      </div>
                    </div>
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
