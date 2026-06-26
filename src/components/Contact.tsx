"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Copy, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleCopyEmail = () => {
    const emailAddr = "hylmi.muh@gmail.com";
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

    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Glow detail */}
      <div className="bg-mesh-glow absolute left-0 bottom-0 h-80 w-80 bg-brand/10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Toast Notification Container */}
        {status === "success" && (
          <div className="fixed bottom-6 right-6 z-50 rounded-2xl bg-card/85 backdrop-blur-xl border border-brand/20 p-4 shadow-overlay max-w-sm flex items-center gap-3 animate-fade-in">
            <div className="rounded-full bg-brand/10 p-2 text-brand">
              <CheckCircle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">Message Sent!</h4>
              <p className="text-xs text-muted-foreground mt-1 font-sans">
                Thank you, I will get back to you shortly.
              </p>
            </div>
          </div>
        )}

        {/* Section Heading */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-brand mb-3">
            Telemetry Connection
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground font-sans">
            Connect With Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Contact Info & Mascot */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="double-bezel-outer hover-card-trigger h-full">
              <div className="double-bezel-inner p-6 md:p-8 flex flex-col justify-between h-full space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground font-sans leading-tight">
                    Let&apos;s Build Something Scalable
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-sans">
                    Whether you have an interesting job opening, want to discuss a software project idea, or just talk tech, feel free to send a message.
                  </p>
                </div>

                {/* Direct Contact Options */}
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card text-brand group-hover:bg-brand/10 transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <span className="block text-[9px] font-mono font-bold text-muted-foreground uppercase tracking-wider">Email</span>
                      <span className="font-mono text-sm font-bold text-foreground break-all">
                        hylmi.muh@gmail.com
                      </span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      suppressHydrationWarning
                      className="rounded-xl border border-border p-2.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
                      title="Copy Email Address"
                    >
                      {copied ? (
                        <CheckCircle className="h-4 w-4 text-brand" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card text-brand">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono font-bold text-muted-foreground uppercase tracking-wider">Address</span>
                      <span className="text-sm font-bold text-foreground font-sans">Klaten, Jawa Tengah, Indonesia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="double-bezel-outer hover-card-trigger">
              <div className="double-bezel-inner p-6 md:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name field */}
                    <div className="space-y-2.5">
                      <label htmlFor="name" className="text-[9px] font-mono font-bold text-muted-foreground uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        suppressHydrationWarning
                        className={`w-full rounded-2xl border bg-background px-4 py-3.5 text-sm font-mono text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/35 transition-all duration-300 ${
                          errors.name ? "border-brand" : "border-border"
                        }`}
                        placeholder="Enter name"
                      />
                      {errors.name && (
                        <span className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-brand mt-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email field */}
                    <div className="space-y-2.5">
                      <label htmlFor="email" className="text-[9px] font-mono font-bold text-muted-foreground uppercase tracking-wider">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        suppressHydrationWarning
                        className={`w-full rounded-2xl border bg-background px-4 py-3.5 text-sm font-mono text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/35 transition-all duration-300 ${
                          errors.email ? "border-brand" : "border-border"
                        }`}
                        placeholder="Enter email"
                      />
                      {errors.email && (
                        <span className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-brand mt-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2.5">
                    <label htmlFor="message" className="text-[9px] font-mono font-bold text-muted-foreground uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      suppressHydrationWarning
                      rows={6}
                      className={`w-full rounded-2xl border bg-background px-4 py-3.5 text-sm font-mono text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/35 transition-all duration-300 ${
                        errors.message ? "border-brand" : "border-border"
                      }`}
                      placeholder="Tell me about your project or inquiry..."
                    />
                    {errors.message && (
                      <span className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-brand mt-1">
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
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-sm font-bold text-brand-foreground shadow-raised transition-all hover:scale-[1.01] hover:shadow-overlay active:scale-[0.99] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer disabled:opacity-85"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
