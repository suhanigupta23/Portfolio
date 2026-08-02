import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import RecruiterPanel from "./components/RecruiterPanel";
import TerminalDrawer from "./components/TerminalDrawer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true); // Default to Dark Mode
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Set theme on mount and on change
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  // Dual IntersectionObserver + Scroll Listener for 100% precise section tracking
  useEffect(() => {
    const sectionIds = ["home", "about", "experience", "skills", "projects", "achievements", "contact"];
    
    // Intersection Observer for fluid view detection
    const observerCallback = (entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        visibleEntries.sort((a, b) => {
          return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top);
        });
        setActiveSection(visibleEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-15% 0px -45% 0px",
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Fallback direct scroll position evaluator
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos <= top + height + 50) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleTerminal = () => {
    setIsTerminalOpen(!isTerminalOpen);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative overflow-x-hidden">
      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isDark={isDark}
        toggleTheme={toggleTheme}
        toggleTerminal={toggleTerminal}
      />

      {/* Pages sections */}
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/40 bg-background text-center text-xs md:text-sm text-muted-foreground font-mono">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="italic">
            "A digital portfolio crafted with care to showcase full-stack solutions and creative engineering."
          </p>
          <div className="flex justify-center gap-2 text-[10px] text-muted-foreground/60 uppercase">
            <span>&copy; {new Date().getFullYear()} Suhani Gupta</span>
            <span>&bull;</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>

      {/* Utilities */}
      <CustomCursor />
      <RecruiterPanel />
      <TerminalDrawer isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
}
