import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import RecruiterPanel from "./components/RecruiterPanel";
import TerminalDrawer from "./components/TerminalDrawer";
import { portfolioData } from "./data/portfolioData";

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

  // Scroll section listener to update active nav highlight
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "achievements", "contact"];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
