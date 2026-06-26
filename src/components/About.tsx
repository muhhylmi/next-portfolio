"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, CheckCircle } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Companies Worked", value: "4" },
    { label: "Tech Publications", value: "1" },
    { label: "GPA", value: "3.45/4" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden border-b border-border">
      {/* Background glow effects */}
      <div className="bg-mesh-glow absolute top-1/3 left-1/4 h-72 w-72 bg-accent-purple/10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-brand mb-3">
            Profile Specifications
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground font-sans">
            Core Specifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Bio & Stats (Asymmetrical Bento) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Bio Card (Double-Bezel) */}
            <div className="double-bezel-outer hover-card-trigger">
              <div className="double-bezel-inner p-6 md:p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground font-sans leading-tight">
                  Designing High-Availability & Resilient Backend Architectures
                </h3>
                <p className="text-muted-foreground leading-relaxed font-sans text-sm">
                  I am a specialized Backend Developer with over 4 years of professional experience writing clean, 
                  scalable, and high-performance server logic. I primarily design system architectures using 
                  <strong className="text-foreground"> Node.js (Express, NestJS, Hono)</strong>, <strong className="text-foreground">Golang (Fiber, Echo)</strong>, and 
                  <strong className="text-foreground"> Laravel</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans text-sm">
                  My expertise includes designing efficient relational and document schemas, handling 
                  asynchronous communication through message brokers like <strong className="text-foreground">RabbitMQ</strong> and 
                  <strong className="text-foreground">Kafka</strong>, and deploying robust containers with Docker and Kubernetes on AWS/GCP cloud platforms.
                </p>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="double-bezel-outer hover-card-trigger">
                  <div className="double-bezel-inner p-4 text-center">
                    <div className="text-3xl font-extrabold text-brand font-sans tracking-tight">{stat.value}</div>
                    <div className="text-[9px] font-mono font-bold text-muted-foreground uppercase mt-1.5 tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Education & Publications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Card */}
            <div className="double-bezel-outer hover-card-trigger">
              <div className="double-bezel-inner p-6 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-brand/10 text-brand">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm font-sans">Education</h4>
                    <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">University Graduation</p>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <h5 className="font-bold text-sm text-foreground font-sans">
                    Bachelor of Computer Science
                  </h5>
                  <p className="text-xs text-brand font-bold mt-1 font-sans">
                    Universitas Sebelas Maret (2016 – 2021)
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground font-mono">
                    <CheckCircle className="h-3.5 w-3.5 text-brand" />
                    <span>GPA: 3.45 / 4.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Publication Card */}
            <div className="double-bezel-outer hover-card-trigger">
              <div className="double-bezel-inner p-6 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-accent-purple/10 text-accent-purple">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm font-sans">Publications</h4>
                    <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">IEEE Peer-Reviewed Papers</p>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <h5 className="font-bold text-sm text-foreground leading-snug font-sans">
                    Detection of Potato Leaf Disease Using Multi-Class Support Vector Machine Based on Texture, Color, and Shape Features
                  </h5>
                  <p className="text-[11px] text-muted-foreground mt-2 font-sans leading-relaxed">
                    An academic paper published on IEEE (2022) detailing machine learning algorithms for agricultural automated disease detection.
                  </p>
                  <div className="pt-4">
                    <a
                      href="https://doi.org/10.1109/IEIT56384.2022.9967866"
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand/80 cursor-pointer"
                    >
                      <Award className="h-4 w-4" />
                      <span>View IEEE Publication</span>
                      <span className="text-[10px] transition-transform group-hover:translate-x-0.5">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
