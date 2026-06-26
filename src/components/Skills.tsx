"use client";

import { motion } from "framer-motion";
import { Server, Database, MessageSquare, Cloud, Layout, ShieldCheck } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express", "NestJS", "Hono", "Golang (Fiber)", "Golang (Echo)", "PHP (Laravel)", "Phalcon"],
    },
    {
      title: "Databases & Caching",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "SQL Schemas", "NoSQL Modeling"],
    },
    {
      title: "Messaging & Real-time",
      icon: <MessageSquare className="h-6 w-6" />,
      skills: ["RabbitMQ", "Kafka", "gRPC", "WebSockets", "Socket.io", "Event-Driven Architecture"],
    },
    {
      title: "DevOps & Cloud Platforms",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Docker", "Kubernetes", "AWS (EC2/S3/RDS)", "GCP", "ELK Stack", "GitHub CI/CD", "Monitoring"],
    },
    {
      title: "Web Development",
      icon: <Layout className="h-6 w-6" />,
      skills: ["ReactJS", "Next.js", "Tailwind CSS", "Bootstrap", "HTML5 & CSS Grid", "Responsive Design"],
    },
    {
      title: "Work Methodologies",
      icon: <ShieldCheck className="h-6 w-6" />,
      skills: ["Git / Version Control", "Agile / Scrum", "RESTful APIs", "API Documentation", "System Scalability"],
    },
  ];
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden border-b border-border">
      {/* Background gradients */}
      <div className="bg-mesh-glow absolute right-0 top-1/3 h-80 w-80 bg-accent-purple/10"></div>
      <div className="bg-mesh-glow absolute left-0 bottom-1/4 h-80 w-80 bg-brand/10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-brand mb-3">
            Capabilities
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground font-sans">
            Technical Stack
          </h2>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: catIndex * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className="hover-card-trigger"
              >
                <div className="double-bezel-outer">
                  <div className="double-bezel-inner p-6 min-h-[300px] flex flex-col justify-between">
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-3.5 mb-6">
                        <div className="p-3 rounded-2xl bg-brand/10 text-brand transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
                          {category.icon}
                        </div>
                        <h3 className="text-base font-bold text-foreground font-sans">
                          {category.title}
                        </h3>
                      </div>

                      {/* Skills tags block */}
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            whileHover={{ scale: 1.05, y: -1 }}
                            className="px-3 py-1.5 rounded-xl bg-muted/30 text-xs font-mono font-bold text-muted-foreground hover:text-brand border border-border hover:border-brand/40 transition-all flex items-center gap-1.5 cursor-pointer"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-brand"></span>
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
