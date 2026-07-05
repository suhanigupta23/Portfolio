import React, { useState } from "react";
import { UserCheck, FileDown, Copy, Check, ExternalLink, X, Briefcase } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function RecruiterPanel() {
  const { socials } = portfolioData;
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 left-6 z-30 select-none">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-accent-foreground/10 group cursor-pointer"
        >
          <UserCheck className="w-5 h-5 group-hover:animate-pulse" />
          <span className="text-xs font-bold font-mono tracking-wider uppercase">Recruiter Access</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
        </button>
      )}

      {/* Expanded Quick-Access Card */}
      {isOpen && (
        <div className="bg-card/95 border border-border/80 rounded-2xl p-5 shadow-2xl w-80 backdrop-blur-md animate-slideUp relative">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2 rounded-xl bg-accent/20 text-accent">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground font-mono">Recruiter Desk</h4>
              <p className="text-[10px] text-muted-foreground font-mono">Quick resources for hiring managers</p>
            </div>
          </div>

          <div className="space-y-3.5">
            {/* Quick Pitch */}
            <div className="bg-secondary/40 rounded-xl p-3 text-xs leading-relaxed text-muted-foreground border border-border/40">
              <span className="font-semibold text-foreground">Suhani Gupta</span> is seeking full-stack and AI internship or full-time opportunities (CS Grad 2027).
            </div>

            {/* Resume Download */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/95 transition-colors font-mono text-xs font-bold"
            >
              <span className="flex items-center gap-2">
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

            {/* Email Copy */}
            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-between w-full p-2.5 rounded-xl bg-background border border-border hover:bg-secondary/60 transition-all font-mono text-xs font-semibold text-foreground"
            >
              <span className="flex items-center gap-2 truncate">
                <span className="p-1 rounded bg-secondary text-primary shrink-0">@</span>
                <span className="truncate">{socials.email}</span>
              </span>
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground" />
              )}
            </button>

            {/* Social quicklinks */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-900 text-white hover:bg-black transition-colors font-mono text-[10px] font-bold uppercase tracking-wider"
              >
                LinkedIn
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-secondary text-foreground hover:bg-secondary/80 border border-border transition-colors font-mono text-[10px] font-bold uppercase tracking-wider"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
