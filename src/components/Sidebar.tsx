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

export const HedgehogMascot = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body shadow/base */}
    <circle cx="50" cy="55" r="35" fill="#2E2E2E" />
    {/* Spines (hedgehog spikes) */}
    <path d="M25 40 L15 25 L35 35 L30 15 L45 32 L50 10 L55 32 L70 15 L65 35 L85 25 L75 40" stroke="#F9BD2B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 50 L8 45 L25 45 L10 60 L28 55" stroke="#F9BD2B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M80 50 L92 45 L75 45 L90 60 L72 55" stroke="#F9BD2B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    {/* Inner body / face */}
    <circle cx="50" cy="58" r="30" fill="#EAD5C3" />
    {/* Cheeks */}
    <circle cx="35" cy="62" r="4" fill="#F4A261" opacity="0.6" />
    <circle cx="65" cy="62" r="4" fill="#F4A261" opacity="0.6" />
    {/* Goggles/Glasses (quicky developer look) */}
    <rect x="30" y="50" width="16" height="12" rx="3" fill="#1D4AFF" />
    <rect x="54" y="50" width="16" height="12" rx="3" fill="#1D4AFF" />
    <line x1="46" y1="56" x2="54" y2="56" stroke="#1D4AFF" strokeWidth="3" />
    <line x1="26" y1="56" x2="30" y2="56" stroke="#1D4AFF" strokeWidth="2" />
    <line x1="70" y1="56" x2="74" y2="56" stroke="#1D4AFF" strokeWidth="2" />
    {/* Eyes inside goggles */}
    <circle cx="38" cy="56" r="2.5" fill="white" />
    <circle cx="62" cy="56" r="2.5" fill="white" />
    <circle cx="39" cy="55" r="1" fill="black" />
    <circle cx="63" cy="55" r="1" fill="black" />
    {/* Snout/Nose */}
    <path d="M48 66 L52 66 L50 69 Z" fill="#2A2A2A" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round" />
    {/* Mouth */}
    <path d="M47 73 Q50 76 53 73" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round" />
    {/* Developer Hardhat / yellow brand cap */}
    <path d="M32 40 C32 25, 68 25, 68 40 Z" fill="#F9BD2B" />
    <rect x="28" y="38" width="44" height="4" rx="1" fill="#E2A612" />
    <rect x="46" y="24" width="8" height="6" fill="#1D4AFF" />
  </svg>
);

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
    <aside className="hidden md:flex flex-col h-screen sticky top-0 border-r border-border bg-white text-[#1D1D1D] dark:bg-[#1D1D1D] dark:text-[#EEEFE9] dark:border-[#2D2D2D] transition-all duration-300 w-16 lg:w-60 z-30 shrink-0">
      {/* Brand Header */}
      <div className="flex items-center gap-3 h-12 px-4 border-b border-border dark:border-[#2D2D2D] overflow-hidden shrink-0">
        <span className="hidden lg:inline font-sans font-bold text-sm tracking-tight text-foreground">
          hylmi<span className="text-[#F9BD2B]">.dev</span>
        </span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 py-4 space-y-1.5 px-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.slice(1);
          return (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all group relative cursor-pointer ${
                isActive
                  ? "bg-[#F9BD2B] text-[#1D1D1D]"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Icon className={`h-4.5 w-4.5 shrink-0 ${isActive ? "text-[#1D1D1D]" : "group-hover:text-[#F9BD2B] transition-colors"}`} />
              <span className="hidden lg:inline font-sans truncate">{item.name}</span>

              {/* Tooltip for collapsed mode */}
              <div className="lg:hidden absolute left-full ml-3 px-2.5 py-1.5 bg-popover border border-border dark:border-[#2D2D2D] text-popover-foreground text-xs font-bold rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-55 shadow-lg">
                {item.name}
              </div>
            </a>
          );
        })}
      </nav>


    </aside>
  );
}
