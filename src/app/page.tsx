import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { Terminal, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-muted/20 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <Terminal className="h-4 w-4 text-primary" />
              <span>
                hylmi<span className="text-primary">.dev</span>
              </span>
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <span>© {new Date().getFullYear()} Muh. Syahabuddin Hylmi. Built with</span>
              <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse" />
              <span>using Next.js & Tailwind.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
