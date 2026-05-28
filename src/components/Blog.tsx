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
    <section id="blog" className="py-20 bg-muted/30 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-primary uppercase">Blog</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            My Latest Tech Insights
          </p>
          <div className="mt-4 h-1 w-12 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    <BookOpen className="h-3.5 w-3.5 mr-1" />
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Article Summary */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              {/* Read button */}
              <div className="pt-4 border-t border-border/60">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline cursor-pointer"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
