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
    <section id="projects" className="py-20 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left mb-12 border-l-4 border-brand pl-4">
          <p className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground font-sans">
            Featured Projects
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-start gap-2 mb-12 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              suppressHydrationWarning
              className={`rounded px-3 py-1.5 font-bold transition-all cursor-pointer ${filter === cat
                ? "bg-brand text-brand-foreground shadow-raised"
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-raised hover:shadow-overlay hover:border-brand/35 transition-all overflow-hidden relative"
              >
                {/* Background Tint Card */}
                <div className="absolute top-0 right-0 -z-10 h-24 w-24 bg-gradient-to-bl from-brand/5 to-transparent rounded-bl-3xl transition-transform group-hover:scale-110"></div>

                <div>
                  {/* Large Prominent Metric - PostHog style */}
                  <div className="mb-4">
                    <div className="text-3xl font-extrabold text-brand font-sans leading-none tracking-tight">
                      {project.stats}
                    </div>
                    <div className="text-[10px] font-mono font-bold text-muted-foreground uppercase mt-1">
                      {project.metricLabel}
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-flex items-center gap-1 rounded bg-brand/10 px-2 py-0.5 text-xs font-mono font-bold text-brand">
                      <Layers className="h-3 w-3" />
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 font-sans group-hover:text-brand transition-colors">
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
                        className="rounded border border-border bg-muted px-2 py-0.5 text-[10px] font-mono font-bold text-muted-foreground"
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
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold text-brand hover:underline cursor-pointer"
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
