import React from "react";
import { Code, Terminal, Server, Database, Settings, BookOpen, Layers } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skillsCategories } = portfolioData;

  const categoryIcons = {
    "Programming Languages": Code,
    "Frontend": Layers,
    "Backend": Server,
    "Databases": Database,
    "Tools & Design": Settings,
    "Relevant Coursework": BookOpen,
  };

  return (
    <section id="skills" className="py-32 px-10 md:px-20 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-28 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {skillsCategories.map((category, idx) => {
            const Icon = categoryIcons[category.title] || Code;
            return (
              <div
                key={idx}
                className="bg-card/35 border border-border/80 rounded-2xl p-10 md:p-12 hover:border-primary/45 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between shadow-md"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-5 mb-8 pb-5 border-b border-border/50">
                    <div className={`p-3.5 rounded-xl bg-primary/10 ${category.iconColor || "text-primary"} group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-black text-foreground font-mono uppercase tracking-wider">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl border border-border/80 bg-background/50 hover:bg-primary/5 hover:border-primary/40 text-base font-bold text-foreground/80 hover:text-foreground transition-all duration-300 cursor-pointer shadow-sm"
                        style={{
                          "--skill-accent": `#${skill.color}`
                        }}
                      >
                        {/* Custom small colored circle representing the skill logo */}
                        <span 
                          className="w-3.5 h-3.5 rounded-full inline-block shrink-0 shadow-inner"
                          style={{ backgroundColor: `#${skill.color}` }}
                        />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
