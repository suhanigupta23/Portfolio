
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    // Default to dark mode if no preference is stored
    const shouldUseDark = stored === null ? true : stored === 'true';
    
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('darkMode', newIsDark.toString());
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-20 right-6 z-50 p-3 rounded-full bg-card border border-border hover:bg-accent transition-all duration-300 glow-on-hover"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-foreground" />
      ) : (
        <Moon className="w-5 h-5 text-foreground" />
      )}
    </button>
  );
};

export default DarkModeToggle;
