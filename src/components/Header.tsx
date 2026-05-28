"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
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
      const scrollPosition = window.scrollY + 120;

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
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-2xl border border-border/40 bg-card/60 px-4 shadow-lg backdrop-blur-md dark:border-border/10 dark:bg-card/40 my-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-mono text-lg font-bold text-primary">
            <Terminal className="h-5 w-5 animate-pulse text-primary" />
            <span className="tracking-tight text-foreground">
              hylmi<span className="text-primary">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-primary py-1 px-1 ${
                  activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none transition-colors border border-border/20 dark:border-border/10 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-emerald-400" />
              ) : (
                <Moon className="h-5 w-5 text-emerald-700" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none transition-colors border border-border/20 dark:border-border/10 cursor-pointer"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 z-40 rounded-2xl border border-border/40 bg-card/95 p-6 shadow-xl backdrop-blur-lg dark:border-border/10"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold transition-colors hover:text-primary ${
                    activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
