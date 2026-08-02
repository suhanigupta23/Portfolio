import React from "react";
import { Trophy, Award, Medal, Shield, Sparkles, Code2, Zap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Achievements() {
  const { achievements } = portfolioData;

  const achievementIcons = {
    "Flipkart GRiD 8.0": Zap,
    "SheBuilds Hackathon 2025": Trophy,
    "HackOrbit Hackathon 2025": Medal,
    "Google Girl Hackathon 2025": Trophy,
    "GirlScript Summer of Code 2024": Medal,
    "Competitive Programming": Code2,
    "Academic Excellence & Scholarship": Award,
    "NDA (W) Qualified": Shield,
  };

  return (
    <section id="achievements" className="py-32 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            Achievements & <span className="text-primary">Hackathons</span>
          </h2>
          <div className="w-28 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        {/* 4 columns in one line for a balanced 4x2 matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => {
            const Icon = achievementIcons[item.title] || Shield;
            const isHackathon = 
              item.title.includes("Hackathon") || 
              item.title.includes("GirlScript") || 
              item.title.includes("Flipkart");
            
            return (
              <div
                key={idx}
                className="bg-card border border-border/80 rounded-2xl p-6 hover:border-accent hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    {/* Icon Box */}
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Badge */}
                    <span className="text-[11px] font-bold font-mono tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 text-right shrink-0">
                      {item.event}
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtag footer */}
                <div className="mt-4 pt-3 border-t border-border/30 flex items-center gap-1.5 text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-accent shrink-0" />
                  <span className="truncate">{isHackathon ? "Hackathon Credential" : "Honor / Milestone"}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
