"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Github, Linkedin, Mail } from "lucide-react";
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
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <>
      <header className="sticky top-4 mx-4 z-40 flex h-14 items-center justify-between border border-border bg-card/65 backdrop-blur-xl px-5 shadow-raised rounded-full transition-all duration-300">
        {/* Left Side: SaaS-style Breadcrumbs & Hamburger */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-5 h-5 flex flex-col justify-between items-center cursor-pointer focus:outline-none z-50 p-[2px]"
            aria-label="Toggle Mobile Menu"
          >
            <span className={`w-5 h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`w-5 h-[2px] bg-foreground rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>

        {/* Right Side: Theme Toggle & Social Quicklinks */}
        <div className="flex items-center gap-3">
          {/* Social icons */}
          <div className="hidden sm:flex items-center gap-2 border-r border-border pr-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              title="GitHub"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              title="LinkedIn"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            <a
              href="mailto:hylmi.muh@gmail.com"
              className="rounded-xl p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              title="Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>

          {/* Theme Toggler */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-xl p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer focus:outline-none transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4.5 w-4.5 text-brand" />
            ) : (
              <Moon className="h-4.5 w-4.5 text-brand" />
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
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 z-45 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 bottom-0 left-0 w-72 z-50 bg-background/95 backdrop-blur-xl text-foreground border-r border-border p-6 flex flex-col justify-between shadow-modal"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border pb-5 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="font-sans font-bold text-sm text-foreground">
                      hylmi<span className="text-brand">.dev</span>
                    </span>
                  </div>
                </div>

                {/* Nav Links */}
                <motion.nav
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-2.5"
                >
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.slice(1);
                    return (
                      <motion.a
                        key={item.name}
                        variants={itemVariants}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                          isActive
                            ? "bg-brand/10 text-brand border-brand/20 shadow-[0_0_15px_rgba(0,240,255,0.08)]"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/40 border-transparent"
                        }`}
                      >
                        {item.name}
                      </motion.a>
                    );
                  })}
                </motion.nav>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="border-t border-border pt-5">
                <div className="flex items-center justify-around text-muted-foreground">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground hover:scale-105 transition-transform cursor-pointer">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground hover:scale-105 transition-transform cursor-pointer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="mailto:hylmi.muh@gmail.com" className="hover:text-foreground hover:scale-105 transition-transform cursor-pointer">
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
