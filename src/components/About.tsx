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
    <section id="about" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-primary uppercase">About Me</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Get to Know My Professional Story
          </p>
          <div className="mt-4 h-1 w-12 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">
              Designing Scale and Reliability in Backend Systems
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I am a specialized Backend Developer with over 4 years of professional experience writing clean, 
              scalable, and high-performance server logic. I primarily design system architectures using 
              <strong> Node.js (Express, NestJS, Hono)</strong>, <strong>Golang (Fiber, Echo)</strong>, and 
              <strong> Laravel</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise includes designing efficient relational and document schemas, handling 
              asynchronous communication through message brokers like <strong>RabbitMQ</strong> and 
              <strong>Kafka</strong>, and deploying robust containers with Docker and Kubernetes on AWS/GCP cloud platforms.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl border border-border bg-card text-center shadow-sm"
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs font-medium text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Education & Publications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Card */}
            <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Education</h4>
                  <p className="text-xs text-muted-foreground">University Graduation</p>
                </div>
              </div>
              <div className="border-t border-border/60 pt-4">
                <h5 className="font-bold text-sm text-foreground">
                  Bachelor of Computer Science
                </h5>
                <p className="text-xs text-primary font-medium mt-0.5">
                  Universitas Sebelas Maret (2016 – 2021)
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                  <span>GPA: 3.45 / 4.00</span>
                </div>
              </div>
            </div>

            {/* Publication Card */}
            <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Publications</h4>
                  <p className="text-xs text-muted-foreground">IEEE Peer-Reviewed Papers</p>
                </div>
              </div>
              <div className="border-t border-border/60 pt-4">
                <h5 className="font-bold text-sm text-foreground leading-snug">
                  Detection of Potato Leaf Disease Using Multi-Class Support Vector Machine Based on Texture, Color, and Shape Features
                </h5>
                <p className="text-[11px] text-muted-foreground mt-1.5">
                  An academic paper published on IEEE (2022) detailing machine learning algorithms for agricultural automated disease detection.
                </p>
                <div className="pt-3">
                  <a
                    href="https://doi.org/10.1109/IEIT56384.2022.9967866"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer"
                  >
                    <Award className="h-4 w-4" />
                    <span>View IEEE Publication</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
