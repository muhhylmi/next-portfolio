"use client";

import { motion } from "framer-motion";
import { Server, Database, MessageSquare, Cloud, Layout, ShieldAlert } from "lucide-react";

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
      icon: <ShieldAlert className="h-6 w-6" />,
      skills: ["Git / Version Control", "Agile / Scrum", "RESTful APIs", "API Documentation", "System Scalability"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-lime-500/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-primary uppercase">Skills</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            My Technical Capabilities
          </p>
          <div className="mt-4 h-1 w-12 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg hover:border-primary/20 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {category.title}
                  </h3>
                </div>

                {/* Skills tags block */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 rounded-xl bg-muted/50 text-xs font-semibold text-muted-foreground hover:text-primary border border-border/40 hover:border-primary/30 hover:bg-primary/5 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80 group-hover:bg-primary transition-colors"></span>
                      {skill}
                    </motion.span>
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
