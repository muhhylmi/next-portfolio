"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Tag } from "lucide-react";

interface JobExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  techStack: string[];
}

export default function Experience() {
  const experiences: JobExperience[] = [
    {
      role: "Backend Developer",
      company: "PT. Node Solusi Teknologi",
      period: "January 2025 – May 2026",
      location: "Indonesia",
      highlights: [
        "Spearheaded the design and implementation of AI API integrations with chunked streaming output, enabling efficient real-time data flow between backend services and frontend clients to significantly enhance system responsiveness.",
        "Architected database schemas and developed REST APIs for ERP, CRM, and Document Management Systems (DMS) utilizing a diverse stack of Node.js (Hono), Laravel, MySQL, and PostgreSQL.",
        "Implemented robust real-time messaging features using RabbitMQ to deliver live updates and notifications across the entire system."
      ],
      techStack: ["Node.js (Hono)", "Laravel", "PostgreSQL", "MySQL", "RabbitMQ", "AI Streaming"]
    },
    {
      role: "Backend Developer",
      company: "PT. Telekomunikasi Indonesia",
      period: "April 2022 – April 2024",
      location: "Indonesia (Remote / Hybrid)",
      highlights: [
        "Collaborated within an Agile Scrum team to deliver stable backend features for nationwide logistics applications, focusing on high availability and high performance.",
        "Developed and deployed microservices using Node.js (Restify, MongoDB, Kafka) and Golang (Fiber, PostgreSQL, gRPC).",
        "Containerized services with Docker and managed orchestration through Kubernetes to ensure consistent and scalable deployment environments.",
        "Implemented application monitoring via the ELK Stack, improving issue detection and overall system stability."
      ],
      techStack: ["Golang (Fiber)", "Node.js (Restify)", "MongoDB", "Kafka", "gRPC", "Docker", "Kubernetes", "ELK Stack"]
    },
    {
      role: "Backend Developer",
      company: "PT. Global Inovasi Ventura",
      period: "March 2021 – April 2022",
      location: "Indonesia",
      highlights: [
        "Developed REST APIs for HR applications using PHP (Phalcon) with MongoDB as the primary database.",
        "Built real-time communication features using RabbitMQ and WebSocket with Node.js (Express).",
        "Deployed applications on AWS, ensuring reliability and scalability in production environments."
      ],
      techStack: ["PHP (Phalcon)", "Node.js (Express)", "MongoDB", "RabbitMQ", "WebSocket", "AWS"]
    },
    {
      role: "Software Engineer Intern",
      company: "PT. Biptek Indonesia Sukoharjo",
      period: "January 2019 – February 2019",
      location: "Sukoharjo, Indonesia",
      highlights: [
        "Developed a prototype mobile Point of Sale (POS) application using Android Studio and SQLite for efficient local data storage."
      ],
      techStack: ["Android Studio", "Java / Kotlin", "SQLite", "Mobile POS Proto"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-primary uppercase">Experience</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            My Professional Timeline
          </p>
          <div className="mt-4 h-1 w-12 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-border/80 dark:border-border/20 ml-4 md:ml-32 max-w-4xl md:mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-card text-primary shadow-sm dark:border-primary/10">
                <Briefcase className="h-4 w-4" />
              </div>

              {/* Experience Card */}
              <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border/60 pb-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-primary mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:items-center text-xs font-semibold text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                    <span className="hidden sm:inline text-border">|</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-3 list-disc pl-5 text-sm text-muted-foreground leading-relaxed">
                  {exp.highlights.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="marker:text-primary/70">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech tags used */}
                <div className="flex flex-wrap gap-2 pt-6">
                  {exp.techStack.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="inline-flex items-center gap-1 rounded-lg border border-border bg-muted/50 px-2.5 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/25 hover:text-primary"
                    >
                      <Tag className="h-3 w-3 text-primary/75" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
