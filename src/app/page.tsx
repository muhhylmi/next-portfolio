import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      {/* Navigation Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow h-screen overflow-y-auto">
        <TopNav />

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
        <footer className="border-t border-border bg-card py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Terminal className="h-4 w-4 text-brand" />
                <span>
                  hylmi<span className="text-brand">.dev</span>
                </span>
              </div>
              <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                <span>© {new Date().getFullYear()} Muh. Syahabuddin Hylmi</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
