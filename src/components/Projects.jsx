import React from "react";
import { Github, ExternalLink, Code } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { projects, socials } = portfolioData;

  // Let's create beautiful matching gradient covers for each project card based on index
  const gradients = [
    "from-teal-500/20 to-blue-500/20",
    "from-purple-500/20 to-pink-500/20",
    "from-blue-500/20 to-indigo-500/20",
    "from-emerald-500/20 to-teal-500/20",
    "from-indigo-500/20 to-purple-500/20",
    "from-amber-500/20 to-orange-500/20",
    "from-rose-500/20 to-red-500/20",
  ];

  return (
    <section id="projects" className="py-32 px-10 md:px-20 lg:px-24 bg-background/50 border-y border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-28 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {projects.map((project, idx) => {
            const grad = gradients[idx % gradients.length];
            return (
              <div
                key={idx}
                className="bg-card border border-border/80 rounded-2xl overflow-hidden hover:border-accent hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-md"
              >
                <div>
                  {/* Card Header Illustration / Image / Gradient */}
                  <div className={`w-full h-44 bg-gradient-to-br ${grad} flex items-center justify-center border-b border-border/40 relative overflow-hidden`}>
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Dark glassmorphic gradient overlay to guarantee text/badge contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/30" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    )}
                    
                    <div className="text-center text-muted-foreground relative z-10 p-4 w-full h-full flex flex-col justify-between">
                      <div className="flex-1 flex items-center justify-center">
                        {!project.image && (
                          <Code className="w-12 h-12 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                        )}
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs font-bold font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-background/90 text-foreground border border-border/60 shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-10 pb-6">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6 h-32 overflow-y-auto no-scrollbar">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-bold px-3 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Links */}
                <div className="p-10 pt-0 border-t border-border/30 flex gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 px-4 rounded-xl border border-border hover:bg-secondary/40 text-xs font-bold flex items-center justify-center gap-2 transition-colors font-mono uppercase tracking-wider text-foreground/85 hover:text-foreground"
                  >
                    <Github className="w-4.5 h-4.5" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 px-4 rounded-xl bg-primary hover:bg-primary/95 text-primary-foreground text-xs font-bold flex items-center justify-center gap-2 transition-colors font-mono uppercase tracking-wider"
                    >
                      <ExternalLink className="w-4.5 h-4.5" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* View All on GitHub */}
        <div className="mt-16 flex justify-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button flex items-center gap-2 hover:shadow-lg transition-shadow"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
