import React from "react";
import { GraduationCap, BookOpen, Calendar, MapPin, Smile } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { name, shortBio, education } = portfolioData;

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
        <div className="max-w-4xl mx-auto mb-20 bg-card/45 border border-border/80 rounded-2xl p-10 md:p-12 backdrop-blur-sm shadow-md flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
          {/* Avatar Container */}
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-border bg-muted shrink-0 relative group shadow-inner">
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
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 justify-center md:justify-start">
              <Smile className="w-7 h-7 text-primary" />
              <span>My Background</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm <span className="text-primary font-semibold">{name}</span>
              {shortBio}
            </p>
          </div>
        </div>

        {/* Vertical Education Stack */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-black text-primary mb-12 flex items-center justify-center">
            <GraduationCap className="w-8 h-8 mr-3 text-primary" />
            <span>Education</span>
          </h3>

          <div className="space-y-6">
            {education.map((item, idx) => {
              const Icon = item.type === "college" ? GraduationCap : BookOpen;
              return (
                <div
                  key={idx}
                  className="bg-card border border-border/80 rounded-2xl p-8 hover:border-accent hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300 shadow-md flex flex-col md:flex-row gap-6 md:items-center justify-between"
                >
                  {/* Left block: Metadata */}
                  <div className="md:w-1/4 shrink-0 flex flex-col gap-2.5">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full w-fit ${
                      item.type === "college" 
                        ? "bg-accent/15 text-accent border border-accent/20" 
                        : "bg-primary/10 text-primary border border-primary/20"
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                      {item.type === "college" ? "College" : "School"}
                    </span>
                    <span className="text-sm font-bold text-muted-foreground flex items-center gap-1.5 font-mono">
                      <Calendar className="w-4 h-4 text-primary/70" />
                      {item.duration}
                    </span>
                  </div>

                  {/* Middle block: Degree/Institution details & Scholarship note */}
                  <div className="flex-1 space-y-1.5 md:border-l md:border-border/60 md:pl-8">
                    <h4 className="font-bold text-foreground text-xl md:text-2xl leading-snug">
                      {item.degree}
                    </h4>
                    <p className="text-primary font-bold text-base md:text-lg">
                      {item.institution}
                    </p>
                    {item.note && (
                      <p className="text-xs md:text-sm text-muted-foreground/85 font-medium pt-1">
                        {item.note}
                      </p>
                    )}
                  </div>

                  {/* Right block: Location and subtle percentage pill */}
                  <div className="md:w-1/4 shrink-0 flex flex-col md:items-end items-start gap-2">
                    <div className="text-xs font-semibold text-muted-foreground flex items-center md:justify-end gap-1.5">
                      <MapPin className="w-4 h-4 text-accent/70" />
                      <span>{item.location}</span>
                    </div>
                    {item.percentage && (
                      <span className="text-[11px] font-mono font-medium text-muted-foreground/60 bg-secondary/50 border border-border/40 px-2.5 py-0.5 rounded-full">
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
