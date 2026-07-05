import React, { useState } from "react";
import { Mail, Github, Linkedin, Instagram, Code2, Send, CheckCircle2, Copy, Check } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { socials } = portfolioData;
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-8 md:px-12 bg-background/50 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch mt-12">
          {/* Left Column: Form Info & Coding Platform Badges */}
          <div className="flex flex-col justify-between space-y-10">
            <div className="space-y-8">
              <h3 className="text-3xl font-black text-foreground font-mono">Let's Connect</h3>
              <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Drop me a line!
              </p>

              <div className="flex flex-col gap-4">
                {/* Direct email display */}
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border max-w-md group shadow-sm">
                  <div className="p-3.5 rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-widest mb-0.5">Email me</p>
                    <p className="text-sm md:text-base font-bold text-foreground truncate font-mono">{socials.email}</p>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>

                {/* GitHub Card */}
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border max-w-md group shadow-sm hover:border-primary/50 transition-colors"
                >
                  <div className="p-3.5 rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                    <Github className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-widest mb-0.5">GitHub</p>
                    <p className="text-sm md:text-base font-bold text-foreground truncate font-mono">suhanigupta23</p>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border max-w-md group shadow-sm hover:border-primary/50 transition-colors"
                >
                  <div className="p-3.5 rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-widest mb-0.5">LinkedIn</p>
                    <p className="text-sm md:text-base font-bold text-foreground truncate font-mono">suhani-gupta23</p>
                  </div>
                </a>

                {/* Instagram Card */}
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border max-w-md group shadow-sm hover:border-primary/50 transition-colors"
                >
                  <div className="p-3.5 rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-widest mb-0.5">Instagram</p>
                    <p className="text-sm md:text-base font-bold text-foreground truncate font-mono">suhanigupta_23_</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Coding Profiles Badges */}
            <div className="space-y-5">
              <h4 className="text-sm font-bold text-foreground/80 uppercase font-mono tracking-widest flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                <span>Coding Platforms</span>
              </h4>

              <div className="grid grid-cols-2 gap-4 max-w-md">
                {/* LeetCode */}
                <a
                  href={socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-orange-500/5 hover:bg-orange-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 font-mono text-sm font-bold text-foreground hover:shadow-md"
                >
                  <span className="w-5 h-5 bg-[#FFA116] rounded flex items-center justify-center text-xs text-black font-extrabold shrink-0">L</span>
                  <span>LeetCode</span>
                </a>

                {/* Codolio */}
                <a
                  href={socials.codolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 font-mono text-sm font-bold text-foreground hover:shadow-md"
                >
                  <span className="w-5 h-5 bg-[#1E88E5] rounded flex items-center justify-center text-xs text-white font-extrabold shrink-0">C</span>
                  <span>Codolio</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="bg-card border border-border/80 rounded-2xl p-8 md:p-10 relative shadow-md">
            {isSubmitted ? (
              <div className="absolute inset-0 bg-card rounded-2xl flex flex-col items-center justify-center p-8 text-center z-10 animate-fadeIn">
                <CheckCircle2 className="w-20 h-20 text-green-500 mb-6 animate-bounce" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
                <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
                  Thank you for reaching out, {formData.name}. I'll get back to you at {formData.email} as soon as possible!
                </p>
              </div>
            ) : null}

            <h3 className="text-2xl font-bold text-foreground mb-8 font-mono">Send Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-background border border-border hover:border-primary/40 focus:border-primary rounded-xl px-5 py-3 text-sm transition-colors outline-none text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    className="w-full bg-background border border-border hover:border-primary/40 focus:border-primary rounded-xl px-5 py-3 text-sm transition-colors outline-none text-foreground"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Enter message subject"
                  className="w-full bg-background border border-border hover:border-primary/40 focus:border-primary rounded-xl px-5 py-3 text-sm transition-colors outline-none text-foreground"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your message details..."
                  className="w-full bg-background border border-border hover:border-primary/40 focus:border-primary rounded-xl px-5 py-3 text-sm transition-colors outline-none resize-none text-foreground leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-mono uppercase tracking-wider py-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all hover:shadow-xl active:scale-[0.98] cursor-pointer"
              >
                <Send className="w-4.5 h-4.5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
