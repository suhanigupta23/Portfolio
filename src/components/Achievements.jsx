import React from "react";
import { Trophy, Award, Medal, Shield, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Achievements() {
  const { achievements } = portfolioData;

  const achievementIcons = {
    "SheBuilds Hackathon 2025": Trophy,
    "HackOrbit Hackathon 2025": Medal,
    "Google Girl Hackathon 2025": Trophy,
    "GirlScript Summer of Code 2024": Medal,
    "Academic Excellence": Award,
    "NDA (W) Qualified": Shield,
  };

  return (
    <section id="achievements" className="py-32 px-10 md:px-20 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            Achievements & <span className="text-primary">Hackathons</span>
          </h2>
          <div className="w-28 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {achievements.map((item, idx) => {
            // Find appropriate icon (fallback to Sparkles)
            const Icon = achievementIcons[item.title] || Shield;
            // Additional styling for the Google Girl Hackathon and SheBuilds
            const isHackathon = item.title.includes("Hackathon") || item.title.includes("GirlScript");
            
            return (
              <div
                key={idx}
                className="bg-card border border-border/80 rounded-2xl p-10 hover:border-accent hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    {/* Floating Icon Box */}
                    <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    {/* Badge */}
                    <span className="text-xs font-bold font-mono tracking-wider uppercase px-3.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {item.event}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtag illustration */}
                <div className="mt-6 pt-4 border-t border-border/30 flex items-center gap-2 text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span>{isHackathon ? "Hackathon Credential" : "Honor / Award"}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Helper block to avoid missing Lucide icon imports: we mapped Shield, Medal, Trophy, Award, Sparkles.
