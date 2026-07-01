import React, { useState, useEffect, useRef } from 'react';
import ResumeViewer from '../components/ResumeViewer';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Guitar,
  Palette,
  Film,
  Music,
  Code,
  Trophy,
  Award,
  Instagram,
  User,
  MapPin,
  Star,
  Zap,
  Shield,
  Users,
  Sparkles,
  MessageCircle,
  GraduationCap,
  Calendar,
  Heart,
  Plus,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import ParticleCanvas from '../components/ParticleCanvas';
import TypingEffect from '../components/TypingEffect';
import DarkModeToggle from '../components/DarkModeToggle';
import ScrollAnimations from '../components/ScrollAnimations';
import ContactForm from '../components/ContactForm';
import ProjectCard from '../components/ProjectCard';
import LoadingScreen from '../components/LoadingScreen';
import CustomCursor from '../components/CustomCursor';
import CodingDecoration from '../components/CodingDecoration';
import profileImage from '../assets/profile.jpg';
import codolioOwl from '../assets/codolio-owl.gif.asset.json';
import leetcodeLogo from '../assets/leetcode-logo.png.asset.json';
import javaLogo from '../assets/java-logo.png.asset.json';
import oopLogo from '../assets/oop-logo.png.asset.json';


const Index = () => {
  const [showResumeViewer, setShowResumeViewer] = useState(false);
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);

  // Scroll-based active section detection
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const educationData = [
    {
      degree: 'BTech in Computer Science & Engineering',
      institution: 'Indian Institute of Information Technology',
      duration: '2023-2027',
      location: 'Kota, Rajasthan',
      type: 'college',
    },
    {
      degree: 'Class XII - 88.88%',
      institution: 'Sagar Public School',
      duration: '2023',
      location: 'Bhopal, Madhya Pradesh',
      type: 'school',
    },
    {
      degree: 'Class X - 95.2%',
      institution: 'Sagar Public School',
      duration: '2021',
      location: 'Bhopal, Madhya Pradesh',
      type: 'school',
    },
  ];

  const interests = [
    { name: 'Guitar', icon: <Guitar className="w-8 h-8 text-orange-500" />, description: 'My stress reliever' },
    { name: 'Sketching', icon: <Palette className="w-8 h-8 text-purple-500" />, description: 'Relaxing and creative' },
    { name: 'Anime', icon: <Film className="w-8 h-8 text-blue-500" />, description: 'Exploring different worlds' },
    { name: 'Music', icon: <Music className="w-8 h-8 text-green-500" />, description: 'Fuels my creativity' },
    { name: 'Travelling', icon: <MapPin className="w-8 h-8 text-red-500" />, description: 'Exploring new places and cultures' },
  ];

  const typingWords = [
    'Full-Stack Development ⌨️',
    'Hackathons ✨',
    'Open-Source Contribution 🎨',
    'AI & Backend Exploration 🚀',
    'Music 🎸',
    'Anime 🎬',
    'Sketching ✏️',
    'Exploration 🌏',
  ];

  // Skills with brand logos via simpleicons CDN
  const skillsCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-5 h-5" />,
      iconColor: 'text-blue-400',
      accent: 'bg-blue-400/10 border-blue-400/30',
      skills: [
        { name: 'Java', slug: 'openjdk', color: 'ED8B00', img: javaLogo.url },
        { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
        { name: 'Python', slug: 'python', color: '3776AB' },
        { name: 'C', slug: 'c', color: 'A8B9CC' },
      ],
    },
    {
      title: 'Frontend',
      icon: <Palette className="w-5 h-5" />,
      iconColor: 'text-purple-400',
      accent: 'bg-purple-400/10 border-purple-400/30',
      skills: [
        { name: 'React.js', slug: 'react', color: '61DAFB' },
        { name: 'Tailwind', slug: 'tailwindcss', color: '06B6D4' },
        { name: 'HTML5', slug: 'html5', color: 'E34F26' },
      ],
    },
    {
      title: 'Backend',
      icon: <Zap className="w-5 h-5" />,
      iconColor: 'text-green-400',
      accent: 'bg-green-400/10 border-green-400/30',
      skills: [
        { name: 'Spring Boot', slug: 'springboot', color: '6DB33F' },
        { name: 'REST APIs', slug: 'fastapi', color: '009688' },
      ],
    },
    {
      title: 'Databases',
      icon: <Shield className="w-5 h-5" />,
      iconColor: 'text-orange-400',
      accent: 'bg-orange-400/10 border-orange-400/30',
      skills: [
        { name: 'MongoDB', slug: 'mongodb', color: '47A248' },
        { name: 'MySQL', slug: 'mysql', color: '4479A1' },
        { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
        { name: 'Firebase', slug: 'firebase', color: 'FFCA28' },
      ],
    },
    {
      title: 'Tools & Design',
      icon: <Sparkles className="w-5 h-5" />,
      iconColor: 'text-cyan-400',
      accent: 'bg-cyan-400/10 border-cyan-400/30',
      skills: [
        { name: 'Git', slug: 'git', color: 'F05032' },
        { name: 'VS Code', slug: 'vscodium', color: '007ACC' },
        { name: 'Postman', slug: 'postman', color: 'FF6C37' },
      ],
    },
    {
      title: 'Relevant Coursework',
      icon: <GraduationCap className="w-5 h-5" />,
      iconColor: 'text-indigo-400',
      accent: 'bg-indigo-400/10 border-indigo-400/30',
      skills: [
        { name: 'OS', slug: 'linux', color: 'FCC624' },
        { name: 'DBMS', slug: 'databricks', color: 'FF3621' },
        { name: 'Computer Networks', slug: 'wireshark', color: '1679A7' },
        { name: 'OOP', slug: 'oracle', color: 'F80000', img: oopLogo.url },
      ],
    },
  ];



  const projects = [
    {
      title: 'SketchRoom',
      description: 'Interactive multiplayer whiteboard enabling real-time collaborative sketching, brainstorming and ideation across devices.',
      tech: ['WebSocket', 'Spring Boot', 'React', 'Redis', 'Docker', 'PostgreSQL'],
      tags: ['Full-Stack', 'Real-Time'],
      github: 'https://github.com/suhanigupta23/SketchRoom',
      demo: 'https://sketch-room-ashy.vercel.app/',
      features: [],
    },
    {
      title: 'InTune',
      description: 'Roommate matchmaking platform using AI for compatibility scoring',
      tech: ['React', 'EasyOCR', 'SBERT Cosine Similarity', 'Node.js'],
      tags: ['AI', 'Hackathon Project'],
      github: 'https://github.com/suhanigupta23/Intune',
      demo: 'https://team-naruto.vercel.app/',
      features: [],
    },
    {
      title: 'Saarthi',
      description: 'AI-powered health platform with real-time assistance and emergency features',
      tech: ['React', 'Flask', 'Node.js', 'MongoDB', 'OpenAI GPT', 'WebRTC', 'Mapbox'],
      tags: ['AI', 'Full-Stack', 'Health'],
      github: 'https://github.com/suhanigupta23/Saarthi',
      demo: 'https://saarthi-empower-hub-revamp.vercel.app/',
      features: [],
    },
    {
      title: 'DermaIQ',
      description: 'AI-powered skincare analysis platform that detects skin concerns and recommends personalized routines.',
      tech: ['Next.js', 'API', 'AI'],
      tags: ['AI', 'Full-Stack'],
      github: 'https://github.com/suhanigupta23/DermaIQ',
      demo: 'https://github.com/suhanigupta23/DermaIQ',
      features: [],
    },
    {
      title: 'Hit the Hamster',
      description: 'Fun and interactive browser-based game with score tracking',
      tech: ['HTML', 'CSS', 'JavaScript'],
      tags: ['Game'],
      github: 'https://github.com/suhanigupta23/Hit-The-Hamster',
      demo: 'https://creative-choux-e20f8d.netlify.app/',
      features: [],
    },
    {
      title: 'Snake Game – Hand Gesture Controlled',
      description: 'Classic Snake game controlled entirely via hand gestures using a webcam',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Pygame'],
      tags: ['Game', 'AI'],
      github: 'https://github.com/suhanigupta23/Snake-Game-Hand-Gesture',
      demo: 'https://github.com/suhanigupta23/Snake-Game-Hand-Gesture',
      features: [],
    },
  ];


  const achievements = [
    {
      title: 'SheBuilds Hackathon 2025',
      event: 'National Finalist',
      description:
        'Developed InTune - AI roommate matchmaking platform. Grand Finalist at SheBuilds, organised by Hackerearth (VLIV Delhi) among 1500+ participants',
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      title: 'HackOrbit Hackathon 2025',
      event: 'Top 10',
      description:
        'Built Saarthi - AI-powered health platform. Secured position in Top 10 at Hackorbit Hackathon, MITS Gwalior among 800+ participants. Winner in Open Innovation category.',
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: 'Google Girl Hackathon 2025',
      event: 'Top 300',
      description:
        'Created innovative solutions for skin problem analysis by AI-detection and recommendation for skincare. Selected in Top 300 nationwide.',
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: 'GirlScript Summer of Code 2024',
      event: 'Top 160',
      description:
        'Active Open-Source Contributor. Ranked #154 among top 160 contributors in a global program with thousands of participants from 3-month intensive projects.',
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: 'Academic Excellence',
      event: '₹60,000 Scholarship',
      description: 'Awarded scholarship for outstanding academic performance and leadership qualities.',
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      title: 'NDA (W) Qualified',
      event: 'NDA(W)-II-2021',
      description: 'Successfully qualified National Defence Academy written examination NDA-II-(W)-148.',
      icon: <Award className="w-6 h-6" />,
    },
  ];

  const socialLinks = {
    github: 'https://github.com/suhanigupta23',
    linkedin: 'https://www.linkedin.com/in/suhani-gupta23/',
    instagram: 'https://www.instagram.com/suhanigupta_23_/',
    gfg: 'https://www.geeksforgeeks.org/user/user_8chfh8aqclt/',
    leetcode: 'https://leetcode.com/u/SuhaniGupta_/',
    codechef: 'https://www.codechef.com/users/mizuki_231',
    codeforces: 'https://codeforces.com/profile/Suhani_Gupta23',
    email: 'suhanigupta2304@gmail.com',
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <User className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <Heart className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <Code className="w-4 h-4" /> },
    { id: 'achievements', label: 'Achievements', icon: <Trophy className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} duration={5000} />}
      <CustomCursor />
      <CodingDecoration />

      <div className="min-h-screen bg-background relative overflow-x-hidden">
        {/* Top Navbar */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 dark:bg-background/70 backdrop-blur-md border-b border-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 gap-4">
              {/* Nav links */}
              <nav className="flex-1 overflow-x-auto no-scrollbar">
                <ul className="flex items-center gap-1 md:gap-2 min-w-max">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                          activeSection === item.id
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground/80 hover:text-foreground hover:bg-primary/10'
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex items-center gap-2 shrink-0">
                <DarkModeToggle />
              </div>

            </div>

          </div>
        </header>

        {/* Main Content */}
        <main className="w-full pt-16">
          {/* Hero Section */}
          <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-background pt-10"
          >
            <ParticleCanvas />
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Profile Picture */}
                <ScrollAnimations>
                  <div className="flex justify-center lg:justify-end">
                    <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/30 border-4 border-primary/30 flex items-center justify-center group hover:border-accent/50 transition-all duration-500 shadow-2xl">
                      <img
                        src={profileImage}
                        alt="Suhani Gupta"
                        className="w-80 h-80 lg:h-96 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </ScrollAnimations>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <ScrollAnimations delay={0.5}>
                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
                      Suhani Gupta
                    </h1>
                  </ScrollAnimations>

                  <ScrollAnimations delay={0.8}>
                    <div className="mb-8">
                      <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                        fullstack developer
                      </div>
                      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xl lg:text-2xl text-primary font-medium">
                        <span className="text-foreground">I am into</span>
                        <TypingEffect words={typingWords} className="font-semibold text-primary" />
                      </div>
                    </div>
                  </ScrollAnimations>

                  <ScrollAnimations delay={1.2}>
                    <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                      I’m a Full Stack Developer with hands-on experience in AI-integration,
                      currently exploring modern technologies while pursuing B.Tech in Computer
                      Science Engineering. I’ve built real-world, scalable web applications and
                      love creating intelligent solutions that make an impact — always exploring
                      more.
                    </p>
                  </ScrollAnimations>

                  <ScrollAnimations delay={1.5}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                      <button
                        onClick={() => setShowResumeViewer(true)}
                        className="hero-button flex items-center gap-2 justify-center"
                      >
                        <Download className="w-5 h-5" />
                        Resume
                      </button>

                      <a
                        href="#contact"
                        className="hero-button-outline flex items-center gap-2 justify-center"
                      >
                        <Mail className="w-5 h-5" />
                        Get In Touch
                      </a>
                    </div>
                  </ScrollAnimations>

                  <ScrollAnimations delay={1.8}>
                    <div className="flex justify-center lg:justify-start gap-6">
                      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" title="GitHub">
                        <Github className="w-6 h-6" />
                      </a>
                      <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" title="LinkedIn">
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" title="Instagram">
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a href={`mailto:${socialLinks.email}`} className="text-muted-foreground hover:text-primary transition-colors duration-300" title="Email">
                        <Mail className="w-6 h-6" />
                      </a>
                    </div>
                  </ScrollAnimations>
                </div>
              </div>
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="py-20 px-6 bg-background relative">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimations>
                <h2 className="section-title text-primary">About Me</h2>
                <p className="section-subtitle text-muted-foreground">
                  I'm <span className="text-primary font-semibold">Suhani Gupta</span>, a Computer
                  Science student passionate about building{' '}
                  <span className="text-accent font-medium">full-stack solutions</span> that blend
                  AI, creativity, and usability. I thrive in hackathons, open-source, and
                  collaborative projects.
                </p>
              </ScrollAnimations>

              <div className="grid lg:grid-cols-2 gap-12 mt-12">
                {/* Education */}
                <ScrollAnimations delay={1}>
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                      <GraduationCap className="w-6 h-6 mr-2" />
                      Education
                    </h3>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                      <div className="space-y-8">
                        {educationData.map((edu, index) => (
                          <div key={index} className="relative pl-10">
                            <div className="absolute left-2 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                            <div className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-all duration-300">
                              <div className="flex items-center mb-2">
                                {edu.type === 'college' ? (
                                  <GraduationCap className="w-5 h-5 text-accent mr-2" />
                                ) : (
                                  <Award className="w-5 h-5 text-primary mr-2" />
                                )}
                                <span className="text-sm text-muted-foreground flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {edu.duration}
                                </span>
                              </div>
                              <h4 className="font-bold text-foreground text-lg">{edu.degree}</h4>
                              <p className="text-primary font-medium">{edu.institution}</p>
                              <p className="text-sm text-muted-foreground mt-1 flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {edu.location}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollAnimations>

                {/* Interests */}
                <ScrollAnimations delay={2}>
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                      <Heart className="w-6 h-6 mr-2" />
                      Interests & Hobbies
                    </h3>
                    <div className="space-y-4">
                      {interests.map((interest, index) => (
                        <div
                          key={index}
                          className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-all duration-300 group"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                              {interest.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground text-lg">{interest.name}</h4>
                              <p className="text-muted-foreground text-sm mt-1">{interest.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimations>
              </div>
            </div>
          </section>

          {/* Skills Section - List/Row Layout */}
          <section id="skills" className="py-20 px-6 bg-background">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimations>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Technical <span className="text-primary">Skills</span>
                  </h2>
                  <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>
              </ScrollAnimations>

              {/* Flashcards: one card per category, brand-logo skill tiles inside */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {skillsCategories.map((category, index) => (
                  <ScrollAnimations key={category.title} delay={index * 0.08}>
                    <div className="h-full bg-card/70 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border/60">
                        <div className={`p-2 rounded-lg border ${category.accent} ${category.iconColor}`}>
                          {category.icon}
                        </div>
                        <h3 className="text-base font-semibold text-foreground">
                          {category.title}
                        </h3>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="group flex flex-col items-center justify-start text-center gap-2 p-3 rounded-xl bg-background/60 border border-border/50 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
                          >
                            <div className="w-9 h-9 flex items-center justify-center">
                              <img
                                src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
                                alt={skill.name}
                                className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-200"
                                loading="lazy"
                              />
                            </div>
                            <span className="text-[11px] font-medium text-foreground/80 leading-tight">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimations>
                ))}
              </div>

            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimations>
                <h2 className="section-title text-primary">Projects</h2>
              </ScrollAnimations>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Single placeholder slot at top - ready for the next upcoming project */}
                <ScrollAnimations delay={0.3}>
                  <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center p-8 rounded-2xl border-2 border-dashed border-primary/30 bg-card/40 hover:border-primary/60 hover:bg-card/60 transition-all duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                      <Plus className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">New Project</h3>
                    <p className="text-muted-foreground text-sm max-w-xs">
                      Coming soon — a fresh build I'm shipping next. Stay tuned.
                    </p>
                  </div>
                </ScrollAnimations>

                {projects.map((project, index) => (
                  <ScrollAnimations key={project.title} delay={(index + 2) * 0.2}>
                    <ProjectCard project={project} index={index} />
                  </ScrollAnimations>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-button flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View All Projects on GitHub
                </a>
              </div>
            </div>
          </section>


          {/* Achievements Section */}
          <section id="achievements" className="py-20 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimations>
                <h2 className="section-title text-primary">Hackathons & Achievements</h2>
              </ScrollAnimations>

              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <ScrollAnimations key={achievement.title} delay={index + 1}>
                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300 glow-on-hover bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                      <div className="flex items-start mb-2">
                        <div className="p-3 rounded-full bg-primary/10 text-primary mr-4 flex-shrink-0">
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground mb-1">{achievement.title}</h3>
                          <p className="text-muted-foreground text-sm mb-2">{achievement.event}</p>
                          <p className="text-sm text-foreground/80">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimations>
                ))}
              </div>
            </div>
          </section>

          {/* Contact / Let's Connect Section */}
          <section id="contact" className="py-20 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimations>
                <h2 className="section-title text-primary">Let's Connect</h2>
              </ScrollAnimations>

              <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                {/* Left column: addresses + coding profiles to match form height */}
                <ScrollAnimations delay={1}>
                  <div className="h-full flex flex-col gap-4">
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="flex items-center p-4 rounded-xl bg-[hsl(var(--email-color))]/10 border border-[hsl(var(--email-color))]/30 hover:border-[hsl(var(--email-color))]/50 hover:bg-[hsl(var(--email-color))]/15 transition-all duration-300 group glow-on-hover"
                    >
                      <div className="w-12 h-12 bg-[hsl(var(--email-color))]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[hsl(var(--email-color))]/30">
                        <Mail className="w-5 h-5 text-[hsl(var(--email-color))] group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-[hsl(var(--email-color))] transition-colors">Email Me</div>
                        <div className="text-sm text-muted-foreground">suhanigupta2304@gmail.com</div>
                      </div>
                    </a>

                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-xl bg-[hsl(var(--linkedin-color))]/10 border border-[hsl(var(--linkedin-color))]/30 hover:border-[hsl(var(--linkedin-color))]/50 hover:bg-[hsl(var(--linkedin-color))]/15 transition-all duration-300 group glow-on-hover"
                    >
                      <div className="w-12 h-12 bg-[hsl(var(--linkedin-color))]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[hsl(var(--linkedin-color))]/30">
                        <Linkedin className="w-5 h-5 text-[hsl(var(--linkedin-color))] group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-[hsl(var(--linkedin-color))] transition-colors">LinkedIn</div>
                        <div className="text-sm text-muted-foreground">suhani-gupta23</div>
                      </div>
                    </a>

                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-xl bg-[hsl(var(--github-color))]/10 border border-[hsl(var(--github-color))]/30 hover:border-[hsl(var(--github-color))]/50 hover:bg-[hsl(var(--github-color))]/15 transition-all duration-300 group glow-on-hover"
                    >
                      <div className="w-12 h-12 bg-[hsl(var(--github-color))]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[hsl(var(--github-color))]/30">
                        <Github className="w-5 h-5 text-[hsl(var(--github-color))] group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-[hsl(var(--github-color))] transition-colors">GitHub</div>
                        <div className="text-sm text-muted-foreground">suhanigupta23</div>
                      </div>
                    </a>

                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-xl bg-[hsl(var(--instagram-color))]/10 border border-[hsl(var(--instagram-color))]/30 hover:border-[hsl(var(--instagram-color))]/50 hover:bg-[hsl(var(--instagram-color))]/15 transition-all duration-300 group glow-on-hover"
                    >
                      <div className="w-12 h-12 bg-[hsl(var(--instagram-color))]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[hsl(var(--instagram-color))]/30">
                        <Instagram className="w-5 h-5 text-[hsl(var(--instagram-color))] group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-[hsl(var(--instagram-color))] transition-colors">Instagram</div>
                        <div className="text-sm text-muted-foreground">suhanigupta_23_</div>
                      </div>
                    </a>

                    {/* Two coding profile cards filling the remaining space */}
                    <div className="grid grid-cols-2 gap-4 flex-1">
                      <a
                        href={socialLinks.leetcode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center text-center p-5 rounded-xl bg-card border border-border hover:border-[#FFA116]/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="w-14 h-14 rounded-xl bg-[#FFA116]/10 flex items-center justify-center mb-3 p-2">
                          <img src={leetcodeLogo.url} alt="LeetCode" className="w-full h-full object-contain" />
                        </div>
                        <h4 className="font-bold text-foreground group-hover:text-[#FFA116] transition-colors">LeetCode</h4>
                        <p className="text-xs text-muted-foreground mt-1">@SuhaniGupta_</p>
                      </a>
                      <a
                        href="https://codolio.com/profile/SuhaniGupta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center text-center p-5 rounded-xl bg-card border border-border hover:border-primary/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 p-1">
                          <img src={codolioOwl.url} alt="Codolio" className="w-full h-full object-contain" />
                        </div>
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">Codolio</h4>
                        <p className="text-xs text-muted-foreground mt-1">Coding tracker</p>
                      </a>
                    </div>
                  </div>
                </ScrollAnimations>

                {/* Contact form column - matches left column height */}
                <ScrollAnimations delay={2}>
                  <div className="h-full hidden lg:flex flex-col">
                    <div className="flex-1 flex">
                      <div className="w-full">
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                  <div className="lg:hidden">
                    <button
                      onClick={() => setShowContactDialog(true)}
                      className="w-full py-4 px-6 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Open Contact Form
                    </button>
                  </div>
                </ScrollAnimations>
              </div>

            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-6 bg-background border-t border-border transition-colors duration-300">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-foreground text-base md:text-lg italic leading-relaxed">
                A digital portfolio to showcase{' '}
                <span className="text-primary font-semibold not-italic">who I am</span>,{' '}
                <span className="text-primary font-semibold not-italic">what I do</span>, and the
                things I <span className="text-primary font-semibold not-italic">love to create</span>.
              </p>
            </div>
          </footer>
        </main>

        <ResumeViewer isOpen={showResumeViewer} onClose={() => setShowResumeViewer(false)} />

        <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">Get In Touch</DialogTitle>
              <DialogDescription>
                Fill out the form below and I'll get back to you as soon as possible!
              </DialogDescription>
            </DialogHeader>
            <ContactForm onSuccess={() => setShowContactDialog(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Index;
