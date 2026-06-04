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

  const getCategoryStyles = (title: string) => {
    switch (title) {
      case "Backend Development":
        return {
          iconBg: "bg-brand/10 text-brand",
          dotColor: "bg-brand",
          borderColor: "hover:border-brand/40",
          hoverIconBg: "group-hover:bg-brand group-hover:text-brand-foreground"
        };
      case "Databases & Caching":
        return {
          iconBg: "bg-brand/10 text-brand",
          dotColor: "bg-brand",
          borderColor: "hover:border-brand/40",
          hoverIconBg: "group-hover:bg-brand group-hover:text-brand-foreground"
        };
      case "Messaging & Real-time":
        return {
          iconBg: "bg-brand/15 text-[#E2A612] dark:text-brand",
          dotColor: "bg-brand",
          borderColor: "hover:border-brand/40",
          hoverIconBg: "group-hover:bg-brand group-hover:text-brand-foreground"
        };
      case "DevOps & Cloud Platforms":
        return {
          iconBg: "bg-accent-teal/10 text-accent-teal",
          dotColor: "bg-accent-teal",
          borderColor: "hover:border-accent-teal/40",
          hoverIconBg: "group-hover:bg-accent-teal group-hover:text-primary-foreground"
        };
      case "Web Development":
        return {
          iconBg: "bg-brand/10 text-brand",
          dotColor: "bg-brand",
          borderColor: "hover:border-brand/40",
          hoverIconBg: "group-hover:bg-brand group-hover:text-brand-foreground"
        };
      default:
        return {
          iconBg: "bg-brand/10 text-brand",
          dotColor: "bg-brand",
          borderColor: "hover:border-brand/40",
          hoverIconBg: "group-hover:bg-brand group-hover:text-brand-foreground"
        };
    }
  };

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden border-b border-border">
      {/* Background gradients */}
      <div className="absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-accent-purple/5 blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-brand/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left mb-16 border-l-4 border-brand pl-4">
          <p className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground font-sans">
            Technical Stack
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const styles = getCategoryStyles(category.title);
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group p-6 rounded-lg border border-border bg-card shadow-raised transition-all flex flex-col justify-between ${styles.borderColor}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className={`p-3 rounded-lg ${styles.iconBg} ${styles.hoverIconBg} transition-all duration-300 group-hover:rotate-6 group-hover:scale-105`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground transition-colors font-sans">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills tags block */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="px-3 py-1.5 rounded bg-muted/50 text-xs font-mono font-bold text-muted-foreground hover:text-brand border border-border/40 hover:border-brand/20 transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand"></span>
                        {skill}
                      </motion.span>
                    ))}
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
