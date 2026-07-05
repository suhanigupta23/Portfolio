import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDownRight, FileText } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Hero({ setActiveSection }) {
  const { name, bio, taglines, socials } = portfolioData;
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentTagline = taglines[taglineIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentTagline.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentTagline.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentTagline) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex, taglines, typingSpeed]);

  const handleScrollToProjects = () => {
    setActiveSection("projects");
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background pt-24 pb-16 px-8 md:px-12 overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/10 dark:bg-primary/20 blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 dark:bg-accent/20 blur-3xl animate-pulse pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 py-16">
        {/* Intro details */}
        <div className="text-center lg:text-left order-2 lg:order-1 space-y-6">
          <div>
            <span className="text-sm md:text-base font-bold tracking-widest text-primary uppercase font-mono bg-primary/10 px-4 py-1.5 rounded-full">
              Welcome to my space
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mt-6 mb-4 tracking-tight leading-tight">
              Hi, I'm <span className="text-primary">{name}</span>
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent h-16 flex items-center justify-center lg:justify-start font-mono">
              {displayText}
              <span className="animate-blink ml-1 text-foreground">|</span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
            <button
              onClick={handleScrollToProjects}
              className="hero-button flex items-center gap-2.5 justify-center group cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowDownRight className="w-4.5 h-4.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button-outline flex items-center gap-2.5 justify-center"
            >
              <FileText className="w-4.5 h-4.5" />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 pt-6">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-120"
              title="GitHub"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-120"
              title="LinkedIn"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-120"
              title="Email"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Visual Coder Illustration / Card */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-3 rounded-3xl border border-primary/20 animate-ping opacity-35 pointer-events-none" />
            
            {/* Visual Container */}
            <div className="w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 flex flex-col items-center justify-center p-8 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              
              {/* Inner glowing grids */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />

              {/* Code visualizer display */}
              <div className="w-full bg-slate-950/85 rounded-xl p-5 md:p-6 font-mono text-xs md:text-sm text-left shadow-2xl border border-slate-800 text-teal-400 select-none overflow-hidden relative leading-relaxed">
                <div className="flex gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <p className="text-slate-500">// suhanigupta.js</p>
                <p className="text-purple-400">const <span className="text-blue-400">developer</span> = &#123;</p>
                <p className="pl-5">name: <span className="text-amber-300">"{name}"</span>,</p>
                <p className="pl-5">role: <span className="text-amber-300">"Full-Stack"</span>,</p>
                <p className="pl-5">passion: <span className="text-amber-300">"AI + Creative Tech"</span>,</p>
                <p className="pl-5">hackathons: <span className="text-amber-300">"Active National Finalist"</span>,</p>
                <p className="pl-5">status: <span className="text-amber-300">"Ready to build"</span></p>
                <p className="text-purple-400">&#125;;</p>
                <br />
                <p className="text-slate-500">// click the terminal icon top right</p>
                <p className="text-slate-500">// to explore interactive features!</p>
              </div>

              {/* Float floating badge */}
              <div className="absolute -bottom-2 -right-2 w-14 h-14 rounded-xl bg-background border border-primary/30 flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-0 transition-transform">
                <span className="text-3xl animate-wiggle inline-block">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
