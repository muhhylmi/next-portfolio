"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Github, Linkedin, Mail, Home } from "lucide-react";
import { HedgehogMascot } from "./Sidebar";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function TopNav() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects", "blog", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial run
    handleScroll();
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  // Map active section to dashboard-like path name
  const getSectionLabel = () => {
    switch (activeSection) {
      case "about":
        return "About Me";
      case "skills":
        return "Capabilities";
      case "experience":
        return "Work History";
      case "projects":
        return "Architectures";
      case "blog":
        return "Insights Feed";
      case "contact":
        return "Telemetry Connection";
      default:
        return "System Overview";
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 flex h-12 w-full items-center justify-between border-b border-border bg-card px-4 shadow-flat">
        {/* Left Side: SaaS-style Breadcrumbs & Hamburger */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-1 hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Breadcrumbs path removed */}
        </div>

        {/* Right Side: Theme Toggle & Social Quicklinks */}
        <div className="flex items-center gap-3">
          {/* Social icons */}
          <div className="hidden sm:flex items-center gap-2 border-r border-border pr-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-1 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              title="GitHub"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-1 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              title="LinkedIn"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            <a
              href="mailto:hylmi.muh@gmail.com"
              className="rounded-md p-1 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              title="Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>

          {/* Theme Toggler */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md p-1 hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer focus:outline-none transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4.5 w-4.5 text-[#F9BD2B]" />
            ) : (
              <Moon className="h-4.5 w-4.5 text-[#F9BD2B]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 z-45 bg-black"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 bottom-0 left-0 w-64 z-50 bg-white text-[#1D1D1D] border-r border-border dark:bg-[#1D1D1D] dark:text-[#EEEFE9] dark:border-[#2D2D2D] p-5 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border dark:border-[#2D2D2D] pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-sans font-bold text-sm text-foreground">
                      hylmi<span className="text-[#F9BD2B]">.dev</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-md p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.slice(1);
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#F9BD2B] text-[#1D1D1D]"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="border-t border-border dark:border-[#2D2D2D] pt-4">
                <div className="flex items-center justify-around text-muted-foreground">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground cursor-pointer">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground cursor-pointer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="mailto:hylmi.muh@gmail.com" className="hover:text-foreground cursor-pointer">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
