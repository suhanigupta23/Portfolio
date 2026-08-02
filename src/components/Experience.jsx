import React from "react";
import { Calendar, MapPin, Award, CheckCircle2, GitBranch } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-32 px-10 md:px-20 lg:px-24 bg-background/60 border-y border-border/40 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            Work & <span className="text-primary">Experience</span>
          </h2>
          <div className="w-28 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-card border border-border/80 rounded-2xl p-8 md:p-10 hover:border-accent hover:shadow-2xl transition-all duration-300 shadow-md relative overflow-hidden group"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-80" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">
                      <GitBranch className="w-3.5 h-3.5" />
                      {exp.type}
                    </span>
                    {exp.badge && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-accent/15 text-accent border border-accent/25 font-mono">
                        <Award className="w-3.5 h-3.5" />
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-bold text-lg md:text-xl mt-1">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex flex-row md:flex-col md:items-end gap-3 md:gap-1 text-xs font-semibold text-muted-foreground font-mono shrink-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary/70" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent/70" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* 3 Summary Points */}
              <ul className="space-y-3 mb-6">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-muted-foreground text-sm md:text-base leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              {exp.tech && exp.tech.length > 0 && (
                <div className="pt-4 border-t border-border/40 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-bold text-foreground/70 uppercase tracking-wider font-mono mr-1">
                    Stack:
                  </span>
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
