"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Copy, CheckCircle, AlertCircle } from "lucide-react";

const WavingHedgehog = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body shadow/base */}
    <circle cx="60" cy="65" r="40" fill="#2E2E2E" />
    {/* Spines */}
    <path d="M30 45 L15 30 L40 40 L35 15 L55 35 L60 10 L65 35 L85 15 L80 40 L105 30 L90 45" stroke="#F9BD2B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25 60 L8 55 L30 55 L10 75 L32 70" stroke="#F9BD2B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M95 60 L112 55 L90 55 L110 75 L88 70" stroke="#F9BD2B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    {/* Inner body / face */}
    <circle cx="60" cy="68" r="35" fill="#EAD5C3" />
    {/* Cheeks */}
    <circle cx="43" cy="72" r="4" fill="#F4A261" opacity="0.6" />
    <circle cx="77" cy="72" r="4" fill="#F4A261" opacity="0.6" />
    {/* Eyes */}
    <circle cx="48" cy="64" r="3" fill="#1D1D1D" />
    <circle cx="72" cy="64" r="3" fill="#1D1D1D" />
    <circle cx="50" cy="62" r="1" fill="white" />
    <circle cx="74" cy="62" r="1" fill="white" />
    {/* Snout */}
    <path d="M58 74 L62 74 L60 77 Z" fill="#2A2A2A" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round" />
    {/* Mouth (Happy Smile) */}
    <path d="M55 81 Q60 86 65 81" stroke="#2A2A2A" strokeWidth="2.5" strokeLinecap="round" />
    {/* Waving Arm (Left Arm) */}
    <path d="M28 80 Q20 70 15 80" stroke="#EAD5C3" strokeWidth="8" strokeLinecap="round" />
    {/* Waving Hand motion lines */}
    <path d="M10 65 Q7 70 5 68" stroke="#F9BD2B" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
    <path d="M12 60 Q9 65 7 63" stroke="#F9BD2B" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
    {/* Yellow brand Hardhat */}
    <path d="M40 45 C40 28, 80 28, 80 45 Z" fill="#F9BD2B" />
    <rect x="36" y="43" width="48" height="4" rx="1" fill="#E2A612" />
    <rect x="56" y="27" width="8" height="6" fill="#1D4AFF" />
  </svg>
);

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
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Glow detail */}
      <div className="absolute left-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-brand/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Toast Notification Container */}
        {status === "success" && (
          <div className="fixed bottom-5 right-5 z-50 rounded-lg bg-card border border-brand/20 p-4 shadow-overlay max-w-sm flex items-center gap-3">
            <div className="rounded-full bg-brand/10 p-1.5 text-brand">
              <CheckCircle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">Message Sent!</h4>
              <p className="text-xs text-muted-foreground mt-0.5 font-sans">
                Thank you, I will get back to you shortly.
              </p>
            </div>
          </div>
        )}

        {/* Section Heading */}
        <div className="text-left mb-16 border-l-4 border-brand pl-4">
          <p className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground font-sans">
            Connect With Me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Contact Info & Mascot */}
          <div className="lg:col-span-5 space-y-8">
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
                <div className="flex h-12 w-12 items-center justify-center rounded border border-border bg-card text-brand group-hover:bg-brand/5 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <span className="block text-[10px] font-mono font-bold text-muted-foreground uppercase">Email</span>
                  <span className="font-mono text-sm font-bold text-foreground">
                    hylmi.muh@gmail.com
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  suppressHydrationWarning
                  className="rounded border border-border p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
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
                <div className="flex h-12 w-12 items-center justify-center rounded border border-border bg-card text-brand">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-muted-foreground uppercase">Address</span>
                  <span className="text-sm font-bold text-foreground font-sans">Klaten, Jawa Tengah, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Removed Mascot and Telemetry Status */}
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-border bg-card p-6 md:p-8 shadow-raised space-y-6"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-mono font-bold text-muted-foreground uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    suppressHydrationWarning
                    className={`w-full rounded border bg-background px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand focus:ring-0 ${
                      errors.name ? "border-brand" : "border-border"
                    }`}
                    placeholder="Enter name"
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-brand">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-mono font-bold text-muted-foreground uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    suppressHydrationWarning
                    className={`w-full rounded border bg-background px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand focus:ring-0 ${
                      errors.email ? "border-brand" : "border-border"
                    }`}
                    placeholder="Enter email"
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-brand">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-mono font-bold text-muted-foreground uppercase">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  suppressHydrationWarning
                  rows={5}
                  className={`w-full rounded border bg-background px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand focus:ring-0 ${
                    errors.message ? "border-brand" : "border-border"
                  }`}
                  placeholder="Tell me about your project or inquiry..."
                />
                {errors.message && (
                  <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-brand">
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
                className="group w-full inline-flex items-center justify-center gap-2 rounded bg-brand px-6 py-3.5 text-sm font-bold text-brand-foreground shadow-raised transition-all hover:scale-[1.01] hover:shadow-overlay active:scale-[0.99] cursor-pointer disabled:opacity-85"
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
    </section>
  );
}
