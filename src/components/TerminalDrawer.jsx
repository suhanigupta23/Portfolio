import React, { useState, useRef, useEffect } from "react";
import { Terminal, X, Minimize2, Maximize2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function TerminalDrawer({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { text: "Welcome to Suhani's Portfolio CLI v1.0.0", type: "system" },
    { text: "Type 'help' to see a list of available commands.", type: "system" },
  ]);
  const [input, setInput] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const { name, bio, education, experience, skillsCategories, projects, achievements, socials } = portfolioData;

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      if (inputRef.current) inputRef.current.focus();
    }
  }, [isOpen, history]);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `suhani-portfolio$ ${input}`, type: "command" }];

    switch (cmd) {
      case "help":
        newHistory.push({
          text: `Available commands:\n  about        - Show summary biography\n  experience   - List work & open-source experience\n  skills       - List technical skill sets\n  projects     - List key project details\n  education    - Show education timeline\n  achievements - List hackathon accomplishments\n  contact      - Get contact details\n  clear        - Clear console output\n  close        - Close terminal panel`,
          type: "output",
        });
        break;
      case "about":
        newHistory.push({
          text: `Biography:\n${bio}`,
          type: "output",
        });
        break;
      case "experience":
        const expText = experience
          .map((exp) => `* ${exp.role} @ ${exp.organization} (${exp.period})\n  Type: ${exp.type} | Location: ${exp.location}\n  ${exp.points.map(p => `  - ${p}`).join("\n")}`)
          .join("\n\n");
        newHistory.push({
          text: `Experience:\n${expText}`,
          type: "output",
        });
        break;
      case "skills":
        const skillsText = skillsCategories
          .map((cat) => `* ${cat.title}: ${cat.skills.map((s) => s.name).join(", ")}`)
          .join("\n");
        newHistory.push({
          text: `Technical Skills:\n${skillsText}`,
          type: "output",
        });
        break;
      case "projects":
        const projectsText = projects
          .map((p, idx) => `${idx + 1}. ${p.title} - ${p.description}\n   Tech: ${p.tech.join(", ")}`)
          .join("\n\n");
        newHistory.push({
          text: `Projects:\n${projectsText}`,
          type: "output",
        });
        break;
      case "education":
        const eduText = education
          .map((edu) => `* ${edu.degree} | ${edu.institution} (${edu.duration}) - ${edu.location}`)
          .join("\n");
        newHistory.push({
          text: `Education Timeline:\n${eduText}`,
          type: "output",
        });
        break;
      case "achievements":
        const achText = achievements
          .map((ach) => `* ${ach.title} (${ach.event}) - ${ach.description}`)
          .join("\n");
        newHistory.push({
          text: `Achievements & Hackathons:\n${achText}`,
          type: "output",
        });
        break;
      case "contact":
        newHistory.push({
          text: `Contact Info:\n  Email: ${socials.email}\n  GitHub: ${socials.github}\n  LinkedIn: ${socials.linkedin}\n  LeetCode: ${socials.leetcode}`,
          type: "output",
        });
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "close":
      case "exit":
        onClose();
        setInput("");
        return;
      default:
        newHistory.push({
          text: `Command not found: '${cmd}'. Type 'help' for suggestions.`,
          type: "error",
        });
    }

    setHistory(newHistory);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-slate-950 text-slate-100 font-mono border-t border-slate-800 flex flex-col transition-all duration-300 shadow-2xl ${
        isMaximized ? "h-[80vh]" : "h-72"
      }`}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 select-none">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Terminal className="w-4 h-4 text-accent" />
          <span>Interactive shell (~/suhanigupta)</span>
        </div>
        <div className="flex items-center gap-1.5">
          {/* Maximize Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMaximized(!isMaximized);
            }}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            title={isMaximized ? "Minimize" : "Maximize"}
          >
            {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="p-1 rounded hover:bg-red-500 hover:text-white text-slate-400 transition-colors"
            title="Close Terminal"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Output Console */}
      <div className="flex-1 p-4 overflow-y-auto text-xs md:text-sm space-y-2 leading-relaxed selection:bg-accent/30 selection:text-white no-scrollbar">
        {history.map((line, idx) => {
          let textClass = "text-slate-300";
          if (line.type === "command") textClass = "text-yellow-400 font-semibold";
          if (line.type === "error") textClass = "text-red-400";
          if (line.type === "system") textClass = "text-teal-400 font-semibold";

          return (
            <div key={idx} className={`whitespace-pre-wrap ${textClass}`}>
              {line.text}
            </div>
          );
        })}
        <div ref={terminalEndRef} />
      </div>

      {/* Input Prompter */}
      <form
        onSubmit={handleCommand}
        className="flex items-center gap-1 px-4 py-2.5 bg-slate-900 border-t border-slate-800 text-xs md:text-sm"
      >
        <span className="text-accent font-bold">suhani-portfolio$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type a command..."
          className="flex-1 bg-transparent text-slate-100 focus:outline-none outline-none border-none caret-accent"
          autoFocus
          autoComplete="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
}
