"use client";

import { useEffect, useState } from "react";
import { User, Code2, Briefcase, Layers, BookOpen, Mail } from "lucide-react";

const navItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Layers },
  { name: "Blog", href: "#blog", icon: BookOpen },
  { name: "Contact", href: "#contact", icon: Mail },
];
export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="hidden md:flex flex-col h-[calc(100vh-2rem)] sticky top-4 border border-border bg-card/65 backdrop-blur-xl text-foreground transition-all duration-500 w-16 lg:w-60 z-30 shrink-0 my-4 ml-4 rounded-[2rem] shadow-raised overflow-hidden">
      {/* Brand Header */}
      <div className="flex items-center gap-3 h-14 px-4 border-b border-border overflow-hidden shrink-0">
        <span className="hidden lg:inline font-sans font-bold text-sm tracking-tight text-foreground">
          hylmi<span className="text-brand">.dev</span>
        </span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 py-6 space-y-2 px-2.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.slice(1);
          return (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 group relative cursor-pointer ${
                isActive
                  ? "bg-brand/10 text-brand border border-brand/20 shadow-[0_0_15px_rgba(0,240,255,0.08)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40 border border-transparent"
              }`}
            >
              <Icon className={`h-4.5 w-4.5 shrink-0 ${isActive ? "text-brand" : "group-hover:text-brand transition-colors duration-300"}`} />
              <span className="hidden lg:inline font-sans truncate">{item.name}</span>

              {/* Tooltip for collapsed mode */}
              <div className="lg:hidden absolute left-full ml-3 px-2.5 py-1.5 bg-popover border border-border text-popover-foreground text-xs font-bold rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap z-55 shadow-lg">
                {item.name}
              </div>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
