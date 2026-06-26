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
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20 overflow-hidden bg-background">
      {/* Background glow effects (Mesh Glows) */}
      <div className="bg-mesh-glow absolute top-1/4 left-1/4 h-80 w-80 bg-accent-purple/15"></div>
      <div className="bg-mesh-glow absolute bottom-1/4 right-1/4 h-96 w-96 bg-brand/15"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="space-y-8 lg:col-span-7 text-center lg:text-left"
          >
            <div className="space-y-4">

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground font-sans leading-tight">
                Hi, I&apos;m Muh. Syahabuddin
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent-purple mt-2 font-bold leading-tight">
                  Hylmi
                </span>
              </h1>
            </div>

            <div className="h-10 text-lg md:text-xl font-mono text-muted-foreground font-semibold flex items-center justify-center lg:justify-start">
              <span className="bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg">{displayText}</span>
              <span className="ml-2 w-2 h-5 bg-brand animate-pulse"></span>
            </div>

            <p className="max-w-2xl mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground leading-relaxed font-sans">
              Backend Developer with over 4 years of experience in building and maintaining scalable systems. 
              I specialize in designing efficient database schemas, microservices with Node.js and Golang, 
              and real-time event streaming architectures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-between gap-3 rounded-full bg-brand text-brand-foreground pl-6 pr-2.5 py-2.5 text-sm font-bold shadow-raised transition-all hover:scale-[1.02] cursor-pointer hover:shadow-overlay active:scale-[0.98] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <span>View Portfolio</span>
                <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card/45 hover:bg-muted px-6 py-3.5 text-sm font-bold text-foreground transition-all hover:scale-[1.02] cursor-pointer active:scale-[0.98] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                Let&apos;s Connect
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 pt-6 text-muted-foreground">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-border bg-card/45 p-3.5 transition-all hover:text-brand hover:border-brand/40 cursor-pointer hover:scale-105"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-border bg-card/45 p-3.5 transition-all hover:text-brand hover:border-brand/40 cursor-pointer hover:scale-105"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hylmi.muh@gmail.com"
                className="rounded-2xl border border-border bg-card/45 p-3.5 transition-all hover:text-brand hover:border-brand/40 cursor-pointer hover:scale-105"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Interactive Graphic - Double-Bezel Hardware Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative w-full hover-card-trigger"
          >
            <div className="double-bezel-outer w-full max-w-[390px] aspect-square shadow-raised">
              <div className="double-bezel-inner h-full w-full p-6 flex flex-col justify-between overflow-hidden relative">
                {/* Grid Background Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

                {/* Server Nodes */}
                <div className="flex justify-between items-center z-10 relative">
                  {/* Client Node */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-2xl border border-brand/20 bg-background/80 shadow-raised"
                  >
                    <Cpu className="h-6 w-6 text-brand" />
                    <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase">Client App</span>
                  </motion.div>

                  {/* Animated Connection Link */}
                  <div className="flex-1 h-[2px] bg-brand/20 mx-2 relative overflow-hidden rounded-full">
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                      className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-transparent via-brand to-transparent"
                    />
                  </div>

                  {/* Backend Server Node */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-2xl border border-brand/20 bg-background/80 shadow-raised"
                  >
                    <Server className="h-6 w-6 text-brand" />
                    <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase">Go / Node.js</span>
                  </motion.div>
                </div>

                {/* Vertical Center Connection */}
                <div className="flex justify-center z-0 relative h-16 w-full">
                  <div className="w-[2px] h-full bg-brand/20 relative overflow-hidden">
                    <motion.div
                      animate={{ y: ["-100%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                      className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent via-brand to-transparent"
                    />
                  </div>
                </div>

                {/* Lower Section (RabbitMQ Broker / Database) */}
                <div className="flex justify-between items-center z-10 relative">
                  {/* RabbitMQ Msg Broker */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-2xl border border-accent-purple/20 bg-background/80 shadow-raised"
                  >
                    <MessageSquare className="h-6 w-6 text-accent-purple" />
                    <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase">RabbitMQ</span>
                  </motion.div>

                  {/* Animated Horizontal Dot Link */}
                  <div className="flex-1 h-[2px] bg-accent-purple/20 mx-2 relative overflow-hidden rounded-full">
                    <motion.div
                      animate={{ x: ["100%", "-100%"] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                      className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-transparent via-accent-purple to-transparent"
                    />
                  </div>

                  {/* Databases */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-2xl border border-brand/20 bg-background/80 shadow-raised"
                  >
                    <Database className="h-6 w-6 text-brand" />
                    <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase">Postgres/Mongo</span>
                  </motion.div>
                </div>

                {/* Title Overlay in Graphic */}
                <div className="text-center mt-4 pt-4 border-t border-border z-10 relative">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                    Telemetry & Data Pipeline
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
