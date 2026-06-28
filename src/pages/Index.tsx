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
        { name: 'Java', slug: 'openjdk', color: 'ED8B00' },
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
        { name: 'CSS3', slug: 'css3', color: '1572B6' },
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
        { name: 'Figma', slug: 'figma', color: 'F24E1E' },
        { name: 'Canva', slug: 'canva', color: '00C4CC' },
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
        { name: 'Networks', slug: 'cisco', color: '1BA0D7' },
        { name: 'OOP', slug: 'oracle', color: 'F80000' },
      ],
    },
  ];


  const projects = [
    {
      title: 'Saarthi',
      description: 'AI-powered health platform with real-time assistance and emergency features',
      tech: ['React', 'Flask', 'Node.js', 'MongoDB', 'GPT', 'Twilio', 'Mapbox'],
      tags: ['AI', 'Full-Stack', 'Health'],
      github: 'https://github.com/suhanigupta23/Saarthi',
      demo: 'https://saarthi-empower-hub-revamp.vercel.app/',
      features: [
        { icon: <Zap className="w-4 h-4" />, text: 'Real-time AI health assistance' },
        { icon: <Shield className="w-4 h-4" />, text: 'Emergency SOS with location tracking' },
        { icon: <Users className="w-4 h-4" />, text: 'Multi-language support' },
        { icon: <Star className="w-4 h-4" />, text: 'Smart symptom analysis' },
      ],
    },
    {
      title: 'InTune',
      description: 'Roommate matchmaking platform using AI for compatibility scoring',
      tech: ['AI', 'Machine Learning', 'React', 'Node.js'],
      tags: ['AI', 'Hackathon Project'],
      github: 'https://github.com/suhanigupta23/Intune',
      demo: 'https://team-naruto.vercel.app/',
      features: [
        { icon: <Zap className="w-4 h-4" />, text: 'AI-powered compatibility scoring' },
        { icon: <Users className="w-4 h-4" />, text: 'Smart roommate matching' },
        { icon: <Shield className="w-4 h-4" />, text: 'Verified user profiles' },
        { icon: <Star className="w-4 h-4" />, text: 'Real-time chat system' },
      ],
    },
    {
      title: 'Hit the Hamster',
      description: 'Fun and interactive browser-based game with score tracking',
      tech: ['HTML', 'CSS', 'JavaScript'],
      tags: ['Game'],
      github: 'https://github.com/suhanigupta23/Hit-The-Hamster',
      demo: 'https://creative-choux-e20f8d.netlify.app/',
      features: [
        { icon: <Zap className="w-4 h-4" />, text: 'Fast-paced gameplay' },
        { icon: <Star className="w-4 h-4" />, text: 'High score tracking' },
        { icon: <Users className="w-4 h-4" />, text: 'Multiplayer support' },
        { icon: <Shield className="w-4 h-4" />, text: 'Responsive design' },
      ],
    },
    {
      title: 'Snake Game – Hand Gesture Controlled',
      description: 'Classic Snake game controlled entirely via hand gestures using a webcam',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Pygame'],
      tags: ['Game', 'AI'],
      github: 'https://github.com/suhanigupta23/Snake-Game-Hand-Gesture',
      demo: 'https://github.com/suhanigupta23/Snake-Game-Hand-Gesture',
      features: [
        { icon: <Zap className="w-4 h-4" />, text: 'Real-time hand gesture recognition' },
        { icon: <Users className="w-4 h-4" />, text: 'Control snake movements without keyboard' },
        { icon: <Shield className="w-4 h-4" />, text: 'Pause and resume using gestures' },
        { icon: <Star className="w-4 h-4" />, text: 'Smooth gameplay with OpenCV and Pygame' },
      ],
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
            <div className="flex items-center justify-between h-16">
              {/* Logo / Name */}
              <a href="#home" className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 transition-all">
                  <span className="text-primary font-bold text-sm">SG</span>
                </div>
                <span className="hidden sm:block text-foreground font-semibold tracking-tight">
                  Suhani Gupta
                </span>
              </a>

              {/* Nav links - horizontal scroll on small screens */}
              <nav className="flex-1 mx-4 overflow-x-auto no-scrollbar">
                <ul className="flex items-center justify-center gap-1 md:gap-2 min-w-max">
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
                  <li>
                    <button
                      onClick={() => setShowResumeViewer(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                    >
                      <Download className="w-4 h-4" />
                      <span>Resume</span>
                    </button>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center">
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
                      I’m a Full Stack Developer currently exploring modern technologies while
                      pursuing B.Tech in Computer Science Engineering. I’ve worked on building
                      real-world, scalable web applications and enjoy creating solutions that make
                      an impact.
                    </p>
                  </ScrollAnimations>

                  <ScrollAnimations delay={1.5}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                      <button
                        onClick={() => setShowResumeViewer(true)}
                        className="hero-button flex items-center gap-2"
                      >
                        <Download className="w-5 h-5" />
                        My Resume
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
          <section id="about" className="py-20 px-6 bg-accent/5 relative">
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
          <section id="skills" className="py-20 px-6 bg-secondary/5">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimations>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Technical <span className="text-primary">Skills</span>
                  </h2>
                  <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>
              </ScrollAnimations>

              {/* Horizontal row layout - each category is a row */}
              <div className="bg-card/60 border border-border rounded-2xl overflow-hidden divide-y divide-border/60">
                {skillsCategories.map((category, index) => (
                  <ScrollAnimations key={category.title} delay={index * 0.08}>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-5 md:p-6 hover:bg-primary/5 transition-colors duration-300">
                      {/* Category label */}
                      <div className="md:w-60 shrink-0 flex items-center gap-3">
                        <div className={`p-2 rounded-lg border ${category.accent} ${category.iconColor}`}>
                          {category.icon}
                        </div>
                        <h3 className="text-sm md:text-base font-semibold text-foreground">
                          {category.title}
                        </h3>
                      </div>

                      {/* Divider on desktop */}
                      <div className="hidden md:block w-px h-10 bg-border" />

                      {/* Skills as chips */}
                      <div className="flex flex-wrap gap-2 flex-1">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-background border border-border/60 rounded-md text-sm font-medium text-foreground/85 hover:text-primary hover:border-primary/40 transition-all duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimations>
                ))}
              </div>

              {/* Currently Exploring */}
              <ScrollAnimations delay={0.6}>
                <div className="mt-8">
                  <div className="bg-card border border-primary/30 rounded-xl p-6 text-center">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Currently Exploring</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                      {exploringTech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primary/10 border border-primary/25 rounded-lg text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimations>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 px-6 bg-secondary/5">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimations>
                <h2 className="section-title text-primary">Projects</h2>
              </ScrollAnimations>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Two placeholder cards at top - ready for upcoming projects */}
                {[1, 2].map((slot) => (
                  <ScrollAnimations key={`placeholder-${slot}`} delay={slot * 0.5}>
                    <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center p-8 rounded-2xl border-2 border-dashed border-primary/30 bg-card/40 hover:border-primary/60 hover:bg-card/60 transition-all duration-300">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                        <Plus className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">New Project #{slot}</h3>
                      <p className="text-muted-foreground text-sm max-w-xs">
                        Coming soon — a fresh build I'm shipping next. Stay tuned.
                      </p>
                    </div>
                  </ScrollAnimations>
                ))}

                {projects.map((project, index) => (
                  <ScrollAnimations key={project.title} delay={(index + 2) * 0.3}>
                    <ProjectCard project={project} index={index} />
                  </ScrollAnimations>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="py-20 px-6 bg-primary/5">
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

          {/* Resume Section */}
          <section id="resume" className="py-20 px-6 bg-accent/5">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimations>
                <h2 className="section-title text-primary">Resume</h2>
                <p className="section-subtitle">Download or view my resume</p>
              </ScrollAnimations>

              <ScrollAnimations delay={1}>
                <div className="flex flex-col items-center justify-center gap-8">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <a
                      href="/Suhani-Gupta-Resume.pdf"
                      download
                      className="hero-button bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 shadow-lg flex items-center justify-center"
                    >
                      <Download className="w-6 h-6 mr-3" />
                      Download Resume
                    </a>
                    <button
                      onClick={() => setShowResumeViewer(true)}
                      className="hero-button-outline border-accent text-accent hover:bg-accent hover:text-white text-lg px-8 py-4 shadow-lg flex items-center justify-center"
                    >
                      <ExternalLink className="w-6 h-6 mr-3" />
                      View Resume
                    </button>
                  </div>
                </div>
              </ScrollAnimations>
            </div>
          </section>

          {/* Contact / Let's Connect Section */}
          <section id="contact" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimations>
                <h2 className="text-5xl md:text-6xl font-bold text-center text-primary mb-16 tracking-tight">
                  Let's Connect
                </h2>
              </ScrollAnimations>

              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Social Media cards */}
                <ScrollAnimations delay={1}>
                  <div className="space-y-4">
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
                  </div>
                </ScrollAnimations>

                {/* Contact form */}
                <ScrollAnimations delay={2}>
                  <div className="hidden lg:block">
                    <ContactForm />
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

              {/* Coding Profiles */}
              <ScrollAnimations delay={3}>
                <div className="mt-16">
                  <h3 className="text-2xl font-bold text-primary mb-8 text-center">Coding Profiles</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { name: 'LeetCode', desc: 'Problem Solving', icon: <Code className="w-7 h-7" />, color: 'leetcode-color', href: socialLinks.leetcode },
                      { name: 'CodeChef', desc: 'Competitive Coding', icon: <Trophy className="w-7 h-7" />, color: 'codechef-color', href: socialLinks.codechef },
                      { name: 'GeeksforGeeks', desc: 'DSA Practice', icon: <Sparkles className="w-7 h-7" />, color: 'gfg-color', href: socialLinks.gfg },
                      { name: 'Codeforces', desc: 'Contests & Ratings', icon: <Zap className="w-7 h-7" />, color: 'codeforces-color', href: socialLinks.codeforces },
                    ].map((p) => (
                      <a
                        key={p.name}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-[hsl(var(--${p.color}))]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className={`w-14 h-14 rounded-xl bg-[hsl(var(--${p.color}))]/10 flex items-center justify-center mb-4 text-[hsl(var(--${p.color}))]`}>
                            {p.icon}
                          </div>
                          <h4 className={`font-bold text-foreground mb-1 group-hover:text-[hsl(var(--${p.color}))] transition-colors`}>{p.name}</h4>
                          <p className="text-xs text-muted-foreground">{p.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollAnimations>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-6 bg-[hsl(var(--footer-bg))] border-t border-border transition-colors duration-300">
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
