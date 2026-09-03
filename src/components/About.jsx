import React from "react";
import { GraduationCap, BookOpen, Calendar, MapPin, Smile } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { name, aboutMe, education } = portfolioData;

  return (
    <section id="about" className="py-32 px-10 md:px-20 lg:px-24 bg-background/50 border-y border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-28 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        {/* Centered Biography */}
        <div className="max-w-5xl mx-auto mb-20 bg-card/45 border border-border/80 rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-md flex flex-col md:flex-row gap-8 items-center md:items-center text-center md:text-left">
          {/* Avatar Container */}
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-border bg-muted shrink-0 relative group shadow-inner">
            <img
              src="/avatar.jpg"
              alt="Suhani Gupta"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Fallback elegant profile initials block */}
            <div className="hidden absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 items-center justify-center text-primary font-black text-3xl font-mono">
              SG
            </div>
          </div>

          {/* Biography Text */}
          <div className="flex-1 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2.5 justify-center md:justify-start">
              <Smile className="w-6 h-6 text-primary" />
              <span>My Background</span>
            </h3>
            
            <div className="text-muted-foreground leading-relaxed text-base md:text-lg space-y-4 text-left">
              {aboutMe.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Education Stack */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-primary mb-8 flex items-center justify-center">
            <GraduationCap className="w-7 h-7 mr-2.5 text-primary" />
            <span>Education</span>
          </h3>

          <div className="space-y-4">
            {education.map((item, idx) => {
              const Icon = item.type === "college" ? GraduationCap : BookOpen;
              return (
                <div
                  key={idx}
                  className="bg-card border border-border/80 rounded-xl p-5 md:p-6 hover:border-accent hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shadow-sm flex flex-col md:flex-row gap-4 md:items-center justify-between"
                >
                  {/* Left block: Metadata */}
                  <div className="md:w-1/4 shrink-0 flex flex-col gap-2">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded-full w-fit ${
                      item.type === "college" 
                        ? "bg-accent/15 text-accent border border-accent/20" 
                        : "bg-primary/10 text-primary border border-primary/20"
                    }`}>
                      <Icon className="w-3 h-3" />
                      {item.type === "college" ? "College" : "School"}
                    </span>
                    <span className="text-xs font-bold text-muted-foreground flex items-center gap-1.5 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-primary/70" />
                      {item.duration}
                    </span>
                  </div>

                  {/* Middle block: Degree/Institution details & Scholarship note */}
                  <div className="flex-1 space-y-1 md:border-l md:border-border/60 md:pl-6">
                    <h4 className="font-bold text-foreground text-base md:text-lg leading-snug">
                      {item.degree}
                    </h4>
                    <p className="text-primary font-semibold text-sm md:text-base">
                      {item.institution}
                    </p>
                    {item.note && (
                      <p className="text-xs text-muted-foreground/85 font-medium pt-0.5">
                        {item.note}
                      </p>
                    )}
                  </div>

                  {/* Right block: Location and subtle percentage pill */}
                  <div className="md:w-1/4 shrink-0 flex flex-col md:items-end items-start gap-1.5">
                    <div className="text-xs font-semibold text-muted-foreground flex items-center md:justify-end gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent/70" />
                      <span>{item.location}</span>
                    </div>
                    {item.percentage && (
                      <span className="text-[10px] font-mono font-medium text-muted-foreground/60 bg-secondary/50 border border-border/40 px-2 py-0.5 rounded-full mt-1 md:mt-0">
                        {item.percentage}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
