"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

interface BlogPost {
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  link: string;
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      title: "Building Scalable Real-Time Systems with RabbitMQ and WebSockets",
      summary: "A deep dive into integrating RabbitMQ broker message queues with WebSocket servers to handle load spikes and achieve stable real-time updates at scale.",
      category: "Architecture",
      date: "May 15, 2026",
      readTime: "6 min read",
      link: "https://dev.to"
    },
    {
      title: "Why We Migrated from REST to gRPC for Internal Microservices",
      summary: "Exploring performance gains, strict schema enforcement, and automated client generation benefits of gRPC when refactoring high-traffic internal microservices in Go.",
      category: "Go & Microservices",
      date: "Apr 28, 2026",
      readTime: "8 min read",
      link: "https://dev.to"
    },
    {
      title: "A Practical Guide to AI Streaming Outputs with Hono and Node.js",
      summary: "Step-by-step tutorial on implementing Server-Sent Events (SSE) in Hono to stream OpenAI response chunks to client web interfaces with minimal memory overhead.",
      category: "Node.js",
      date: "Mar 12, 2026",
      readTime: "5 min read",
      link: "https://dev.to"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-background relative overflow-hidden border-b border-border">
      {/* Background gradients */}
      <div className="bg-mesh-glow absolute top-1/3 left-1/4 h-80 w-80 bg-accent-purple/10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-brand mb-3">
            Insights Feed
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground font-sans">
            Technical Articles
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.32, 0.72, 0, 1] }}
              className="hover-card-trigger flex flex-col justify-between cursor-pointer"
            >
              <div className="double-bezel-outer h-full flex flex-col">
                <div className="double-bezel-inner p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Meta details */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-border">
                      <span className="inline-flex items-center rounded-xl bg-brand/10 px-3 py-1 text-xs font-mono font-bold text-brand border border-brand/15 w-max">
                        <BookOpen className="h-3.5 w-3.5 mr-1.5" />
                        {post.category}
                      </span>
                      <div className="flex items-center gap-3.5 text-xs font-mono text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-brand" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-brand" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Article Title */}
                    <h3 className="text-lg font-bold text-foreground mb-3 leading-snug font-sans transition-colors group-hover:text-brand">
                      {post.title}
                    </h3>

                    {/* Article Summary */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-sans">
                      {post.summary}
                    </p>
                  </div>

                  {/* Read button */}
                  <div className="pt-4 border-t border-border mt-auto">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand hover:text-brand/80 cursor-pointer"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
