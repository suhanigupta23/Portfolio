import React from "react";
import { Home, User, Briefcase, Cpu, Layers, Award, Mail, Sun, Moon, Terminal } from "lucide-react";

export default function Navbar({ activeSection, setActiveSection, isDark, toggleTheme, toggleTerminal }) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Cpu },
    { id: "projects", label: "Projects", icon: Layers },
    { id: "achievements", label: "Achievements", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop - 70;
      window.scrollTo({
        top: topOffset > 0 ? topOffset : 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/85 dark:bg-background/80 backdrop-blur-md border-b border-border/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 gap-2 sm:gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <span 
            className="text-xl font-black font-mono tracking-tight cursor-pointer text-primary hover:text-accent transition-colors select-none"
            onClick={() => handleNavClick("home")}
          >
            &lt;Suhani /&gt;
          </span>
        </div>

        {/* Navigation links */}
        <div className="flex-1 overflow-x-auto no-scrollbar flex justify-center">
          <div className="flex items-center gap-1 md:gap-1.5 min-w-max py-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  title={item.label}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer select-none ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-105"
                      : "text-foreground/75 hover:text-foreground hover:bg-primary/10 hover:shadow-sm"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Terminal Toggle Button */}
          <button
            onClick={toggleTerminal}
            className="p-2 rounded-full text-foreground/75 hover:text-foreground hover:bg-primary/10 transition-colors cursor-pointer"
            title="Open Interactive Terminal"
            aria-label="Terminal"
          >
            <Terminal className="w-5 h-5 text-accent animate-pulse" />
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-foreground/75 hover:text-foreground hover:bg-primary/10 transition-colors cursor-pointer"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Theme Toggle"
          >
            {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
