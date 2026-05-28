"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Let's import standard elements:
import { Mail, MapPin, Send, Copy, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleCopyEmail = () => {
    const emailAddr = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "hylmi.muh@gmail.com";
    navigator.clipboard.writeText(emailAddr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const tempErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) tempErrors.name = "Name is required";
    if (!email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    // Simulate sending email to backend
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Glow detail */}
      <div className="absolute left-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-lime-500/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Toast Notification Container */}
        <div className="fixed bottom-5 right-5 z-50 pointer-events-none">
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                className="flex items-center gap-3 rounded-2xl bg-card border border-emerald-500/20 p-4 shadow-xl pointer-events-auto max-w-sm"
              >
                <div className="rounded-full bg-emerald-500/10 p-1.5 text-emerald-500">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Message Sent!</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Thank you, I will get back to you shortly.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-primary uppercase">Contact</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Get In Touch With Me
          </p>
          <div className="mt-4 h-1 w-12 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground">Let&apos;s Build Something Scalable</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Whether you have an interesting job opening, want to discuss a software project idea, or just talk tech, feel free to send a message.
              </p>
            </div>

            {/* Direct Contact Options */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-primary group-hover:bg-primary/5 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <span className="block text-xs font-semibold text-muted-foreground uppercase">Email</span>
                  <span className="font-mono text-sm font-bold text-foreground">
                    {process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "hylmi.muh@gmail.com"}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  suppressHydrationWarning
                  className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer border border-border/20"
                  title="Copy Email Address"
                >
                  {copied ? (
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-muted-foreground uppercase">Address</span>
                  <span className="text-sm font-bold text-foreground">Klaten, Jawa Tengah, Indonesia</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm space-y-6"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-muted-foreground uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    suppressHydrationWarning
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary ${errors.name ? "border-red-500/50" : "border-border"
                      }`}
                    placeholder="Enter name"
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-muted-foreground uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    suppressHydrationWarning
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary ${errors.email ? "border-red-500/50" : "border-border"
                      }`}
                    placeholder="Enter email"
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-muted-foreground uppercase">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className={`w-full rounded-xl border bg-background px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary ${errors.message ? "border-red-500/50" : "border-border"
                    }`}
                  placeholder="Tell me about your project or inquiry..."
                />
                {errors.message && (
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-red-500">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending"}
                suppressHydrationWarning
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/95 hover:shadow-primary/20 hover:scale-[1.01] cursor-pointer disabled:opacity-85"
              >
                {status === "sending" ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
