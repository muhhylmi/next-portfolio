"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Cpu, Server, Database, MessageSquare } from "lucide-react";

const titles = ["Backend Developer", "Golang & Node.js Specialist", "System Architect", "Database Designer"];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = titles[titleIndex];

    const type = () => {
      if (!isDeleting) {
        setDisplayText((prev) => currentFullText.substring(0, prev.length + 1));
        if (displayText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
        } else {
          timer = setTimeout(type, 100);
        }
      } else {
        setDisplayText((prev) => currentFullText.substring(0, prev.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        } else {
          timer = setTimeout(type, 50);
        }
      }
    };

    timer = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center py-12 md:py-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5"></div>
      <div className="absolute bottom-1/3 right-1/4 -z-10 h-96 w-96 rounded-full bg-lime-500/10 blur-3xl dark:bg-lime-500/5"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:col-span-7 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:bg-primary/10">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for New Projects
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              Hi, I&apos;m Muh. Syahabuddin
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 dark:from-emerald-400 dark:to-lime-400 mt-2">
                Hylmi
              </span>
            </h1>

            <div className="h-10 text-xl md:text-2xl font-mono text-muted-foreground font-semibold flex items-center justify-center lg:justify-start">
              <span>{displayText}</span>
              <span className="ml-1 w-2.5 h-6 bg-primary animate-pulse"></span>
            </div>

            <p className="max-w-2xl mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground leading-relaxed">
              Backend Developer with over 4 years of experience in building and maintaining scalable systems. 
              I specialize in designing efficient database schemas, microservices with Node.js and Golang, 
              and real-time event streaming architectures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/95 hover:shadow-primary/20 hover:scale-[1.02] cursor-pointer"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card hover:bg-muted px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:scale-[1.02] cursor-pointer"
              >
                Let&apos;s Connect
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 pt-6 text-muted-foreground">
              <a
                href={process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com"}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-border bg-card p-3 transition-colors hover:text-primary hover:border-primary/40 cursor-pointer"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com"}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-border bg-card p-3 transition-colors hover:text-primary hover:border-primary/40 cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "hylmi.muh@gmail.com"}`}
                className="rounded-xl border border-border bg-card p-3 transition-colors hover:text-primary hover:border-primary/40 cursor-pointer"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Interactive Graphic (Animated Architecture Design) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative h-[380px] w-full"
          >
            <div className="relative w-full max-w-[380px] aspect-square rounded-3xl border border-border/40 bg-card/40 p-6 shadow-xl backdrop-blur-sm dark:border-border/10 dark:bg-card/20 flex flex-col justify-between overflow-hidden">
              {/* Grid Background Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

              {/* Server Nodes */}
              <div className="flex justify-between items-center z-10">
                {/* Client Node */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-2xl border border-emerald-500/20 bg-background/80 shadow-md"
                >
                  <Cpu className="h-6 w-6 text-emerald-500" />
                  <span className="font-mono text-[10px] font-medium text-muted-foreground">Client App</span>
                </motion.div>

                {/* Animated Connection Link */}
                <div className="flex-1 h-[2px] bg-gradient-to-r from-emerald-500/50 to-primary/50 mx-2 relative overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                  />
                </div>

                {/* Backend Server Node */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-2xl border border-primary/20 bg-background/80 shadow-md"
                >
                  <Server className="h-6 w-6 text-primary" />
                  <span className="font-mono text-[10px] font-medium text-muted-foreground">Go / Node.js</span>
                </motion.div>
              </div>

              {/* Vertical Center Connection */}
              <div className="flex justify-center z-0 relative h-16 w-full">
                <div className="w-[2px] h-full bg-gradient-to-b from-primary/50 to-emerald-500/50 relative overflow-hidden">
                  <motion.div
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
                  />
                </div>
              </div>

              {/* Lower Section (RabbitMQ Broker / Database) */}
              <div className="flex justify-between items-center z-10">
                {/* RabbitMQ Msg Broker */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-2xl border border-lime-500/20 bg-background/80 shadow-md"
                >
                  <MessageSquare className="h-6 w-6 text-lime-500" />
                  <span className="font-mono text-[10px] font-medium text-muted-foreground">RabbitMQ</span>
                </motion.div>

                {/* Animated Horizontal Dot Link */}
                <div className="flex-1 h-[2px] bg-gradient-to-r from-lime-500/50 to-emerald-500/50 mx-2 relative overflow-hidden">
                  <motion.div
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-transparent via-lime-400 to-transparent"
                  />
                </div>

                {/* Databases */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-2xl border border-emerald-500/20 bg-background/80 shadow-md"
                >
                  <Database className="h-6 w-6 text-emerald-500" />
                  <span className="font-mono text-[10px] font-medium text-muted-foreground">Postgres/Mongo</span>
                </motion.div>
              </div>

              {/* Title Overlay in Graphic */}
              <div className="text-center mt-4 pt-4 border-t border-border/20">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                  System Dataflow Architecture
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
