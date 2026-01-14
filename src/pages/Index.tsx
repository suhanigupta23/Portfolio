
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
  Phone,
  MessageCircle,
  GraduationCap,
  Calendar,
  Heart,
  Menu,
  X
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ParticleCanvas from '../components/ParticleCanvas';
import TypingEffect from '../components/TypingEffect';
import AnimatedCounter from '../components/AnimatedCounter';
import DarkModeToggle from '../components/DarkModeToggle';
import ScrollAnimations from '../components/ScrollAnimations';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import ProjectCard from '../components/ProjectCard';
import narutoImage from '../assets/naruto-character.png';
import profilePhoto from '../assets/profile-photo.jpg';
import gfgLogo from '../assets/gfg-logo.png';
import leetcodeLogo from '../assets/leetcode-logo.png';
import codechefLogo from '../assets/codechef-logo.png';
import profileImage from '../assets/profile.jpg';
const Index = () => {
  const [projectFilter, setProjectFilter] = useState<string>('all');
  const [showResumeViewer, setShowResumeViewer] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Education data from the user's provided image
  const educationData = [
    {
      degree: "BTech in Computer Science & Engineering",
      institution: "Indian Institute of Information Technology",
      duration: "08/2023 — present",
      location: "Kota, Rajasthan",
      type: "college"
    },
    {
      degree: "Class XII - 89%",
      institution: "Sagar Public School", 
      duration: "2023",
      location: "Bhopal, Madhya Pradesh",
      type: "school"
    },
    {
      degree: "Class X - 95.2%",
      institution: "Sagar Public School",
      duration: "2021", 
      location: "Bhopal, Madhya Pradesh",
      type: "school"
    }
  ];

  // Interests and hobbies with descriptions
  const interests = [
    {
      name: "Guitar",
      icon: <Guitar className="w-8 h-8 text-orange-500" />,
      description: "My stress reliever"
    },
    {
      name: "Sketching", 
      icon: <Palette className="w-8 h-8 text-purple-500" />,
      description: "Relaxing and creative"
    },
    {
      name: "Anime",
      icon: <Film className="w-8 h-8 text-blue-500" />,
      description: "Exploring different worlds"
    },
    {
      name: "Music",
      icon: <Music className="w-8 h-8 text-green-500" />,
      description: "Fuels my creativity"
    },
    {
      name: "Travelling",
      icon: <MapPin className="w-8 h-8 text-red-500" />,
      description: "Exploring new places and cultures"
    },
  ];

  const typingWords = [
    "Full-Stack Development ⌨️",
    "Hackathons ✨", 
    "Open-Source Contribution 🎨",
    "AI & Backend Exploration 🚀",
    "Music 🎸",
    "Anime 🎬",
    "Sketching ✏️",
    "Exploration 🌏"
  ];

  const skills = {
    "Programming": ["Java", "JavaScript", "C", "HTML5", "CSS3"],
    "Frontend": ["React.js", "TailwindCSS", "Bootstrap"],
    "Backend": ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Firebase"],
    "Databases": ["MongoDB", "SQL", "Firebase Firestore"],
    "Tools": ["Git", "GitHub", "Postman", "VS Code", "NPM"],
    "Design": ["Figma", "Canva"],
    "Currently Exploring": ["AI/ML", "Spring Boot"]
  };

  const projects = [
    {
      title: "Saarthi",
      description: "AI-powered health platform with real-time assistance and emergency features",
      tech: ["React", "Flask", "Node.js", "MongoDB", "GPT", "Twilio", "Mapbox"],
      tags: ["AI", "Full-Stack", "Health"],
      github: "https://github.com/suhanigupta23/Saarthi",
      demo: "https://saarthi-empower-hub-revamp.vercel.app/",
      features: [
        { icon: <Zap className="w-4 h-4" />, text: "Real-time AI health assistance" },
        { icon: <Shield className="w-4 h-4" />, text: "Emergency SOS with location tracking" },
        { icon: <Users className="w-4 h-4" />, text: "Multi-language support" },
        { icon: <Star className="w-4 h-4" />, text: "Smart symptom analysis" }
      ],
      metrics: {
        stars: 50
      }
    },
    {
      title: "InTune", 
      description: "Roommate matchmaking platform using AI for compatibility scoring",
      tech: ["AI", "Machine Learning", "React", "Node.js"],
      tags: ["AI", "Hackathon Project"],
      github: "https://github.com/suhanigupta23/Intune",
      demo: "https://team-naruto.vercel.app/",
      features: [
        { icon: <Zap className="w-4 h-4" />, text: "AI-powered compatibility scoring" },
        { icon: <Users className="w-4 h-4" />, text: "Smart roommate matching" },
        { icon: <Shield className="w-4 h-4" />, text: "Verified user profiles" },
        { icon: <Star className="w-4 h-4" />, text: "Real-time chat system" }
      ]
    },
    {
      title: "Car Management System",
      description: "Created a system that allows users to manage car details, such as adding, updating, viewing, and deleting car information",
      tech: ["Java", "Dockerfile"],
      tags: ["Full-Stack", "CRUD"],
      github: "https://github.com/suhanigupta23/car-management",
      demo: "#",
      features: [
        { icon: <Star className="w-4 h-4" />, text: "Complete CRUD operations" },
        { icon: <Shield className="w-4 h-4" />, text: "JWT authentication" },
        { icon: <Users className="w-4 h-4" />, text: "User management" },
        { icon: <Zap className="w-4 h-4" />, text: "Real-time updates" }
      ]
    },
    {
      title: "SoundOrbit",
      description: "Spotify-like music streaming application with playlist management",
      tech: ["React", "Howler.js", "TailwindCSS"],
      tags: ["Music", "Full-Stack"],
      github: "https://github.com/suhanigupta23/SoundOrbit", 
      demo: "#",
      features: [
        { icon: <Star className="w-4 h-4" />, text: "Seamless music streaming" },
        { icon: <Users className="w-4 h-4" />, text: "Collaborative playlists" },
        { icon: <Zap className="w-4 h-4" />, text: "Smart music recommendations" },
        { icon: <Shield className="w-4 h-4" />, text: "Cross-platform sync" }
      ],
      metrics: {
        stars: 30
      }
    },
    {
      title: "Hit the Hamster",
      description: "Fun and interactive browser-based game with score tracking",
      tech: ["HTML", "CSS", "JavaScript"],
      tags: ["Game"],
      github: "https://github.com/suhanigupta23/Hit-The-Hamster",
      demo: "https://creative-choux-e20f8d.netlify.app/",
      features: [
        { icon: <Zap className="w-4 h-4" />, text: "Fast-paced gameplay" },
        { icon: <Star className="w-4 h-4" />, text: "High score tracking" },
        { icon: <Users className="w-4 h-4" />, text: "Multiplayer support" },
        { icon: <Shield className="w-4 h-4" />, text: "Responsive design" }
      ]
    },
    {
      title: "Snake Game – Hand Gesture Controlled",
      description: "Classic Snake game controlled entirely via hand gestures using a webcam",
      tech: ["Python", "OpenCV", "MediaPipe", "Pygame"],
      tags: ["Game", "AI"],
      github: "https://github.com/suhanigupta23/Snake-Game-Hand-Gesture",
      demo: "https://github.com/suhanigupta23/Snake-Game-Hand-Gesture",
      features: [
        { icon: <Zap className="w-4 h-4" />, text: "Real-time hand gesture recognition" },
        { icon: <Users className="w-4 h-4" />, text: "Control snake movements without keyboard" },
        { icon: <Shield className="w-4 h-4" />, text: "Pause and resume using gestures" },
        { icon: <Star className="w-4 h-4" />, text: "Smooth gameplay with OpenCV and Pygame" }
      ]
    }
  ];

  const achievements = [
    {
      title: "SheBuilds Hackathon 2025",
      event: "National Finalist",
      description: "Developed InTune - AI roommate matchmaking platform. Grand Finalist at SheBuilds, organised by Hackerearth (VLIV Delhi) among 1500+ participants",
      icon: <Trophy className="w-6 h-6" />,
      certificateLink: "#", // TODO: Add certificate link
      linkedinPost: "https://www.linkedin.com/posts/lekhni-bakliwal-8a8236311_shebuilds-shebuildshackathon-nationalfinalist-ugcPost-7357845697427107840-6pSW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaAQ48BNHI2_nnfLgTc3mb5XkTqaGcfCF8" // TODO: Add LinkedIn post link
    },
    {
      title: "HackOrbit Hackathon 2025", 
      event: "Top 10",
      description: "Built Saarthi - AI-powered health platform. Secured position in Top 10 at Hackorbit Hackathon, MITS Gwalior among 800+ participants.",
      icon: <Award className="w-6 h-6" />,
      certificateLink: "#", // TODO: Add certificate link
      linkedinPost: "https://www.linkedin.com/posts/nandani-goyal-927835291_hackorbit2025-saarthi-teamnaruto-ugcPost-7351249359792975872-9JwU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaAQ48BNHI2_nnfLgTc3mb5XkTqaGcfCF8" // TODO: Add LinkedIn post link
    },
    {
      title: "Google Girl Hackathon 2025",
      event: "Top 300",
      description: "Created innovative solutions for skin problem analysis by AI-detection and recommendation for skincare. Selected in Top 300 nationwide.",
      icon: <Award className="w-6 h-6" />,
      certificateLink: "#", // TODO: Add certificate link
      linkedinPost: "#" // TODO: Add LinkedIn post link
    },
    {
      title: "GirlScript Summer of Code 2024",
      event: "Top 160",
      description: "Active contributor in open-source projects. Ranked in Top 160 contributors as 154th position.",
      icon: <Code className="w-6 h-6" />,
      certificateLink: "#", // TODO: Add certificate link
      linkedinPost: "https://www.linkedin.com/posts/suhani-gupta23_gssoc-girlscriptsummerofcode-opensource-activity-7193705970844188672-s9kf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaAQ48BNHI2_nnfLgTc3mb5XkTqaGcfCF8" // TODO: Add LinkedIn post link
    },
    {
      title: "Academic Excellence",
      event: "₹60,000 Scholarship",
      description: "Awarded scholarship for outstanding academic performance and leadership qualities.",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "NDA (W) Qualified",
      event: "NDA(W)-II-2021",
      description: "Successfully qualified National Defence Academy written examination NDA-II-(W)-148.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const filteredProjects = projectFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(projectFilter));

  const uniqueTags = ['all', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  // TODO: Replace these placeholder links with your actual social media URLs
  const socialLinks = {
    github: "https://github.com/suhanigupta23", // TODO: Replace with your GitHub URL
    linkedin: "https://www.linkedin.com/in/suhani-gupta23/", // TODO: Replace with your LinkedIn URL  
    instagram: "https://www.instagram.com/suhanigupta_23_/", // TODO: Replace with your Instagram URL
    gfg: "https://www.geeksforgeeks.org/user/user_8chfh8aqclt/", // TODO: Replace with your GeeksforGeeks URL
    leetcode: "https://leetcode.com/u/SuhaniGupta_/", // TODO: Replace with your LeetCode URL
    codechef: "https://www.codechef.com/users/mizuki_231", // TODO: Replace with your CodeChef URL
    email: "suhanigupta2304@gmail.com" // TODO: Replace with your actual email
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Hamburger Button - Always Visible */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 p-3 bg-primary text-primary-foreground rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-300"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay when menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Hidden by default, shown on hamburger click */}
      <div className={`fixed left-0 top-0 w-64 h-screen bg-background border-r border-border z-40 flex flex-col transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Portfolio Title */}
        <div className="relative p-6 text-center border-b border-border/20">
          <h1 className="text-2xl font-bold text-foreground mb-1">PORTFOLIO</h1>
          <div className="text-xs text-muted-foreground">Student of pixels & logic!</div>
        </div>
        
        {/* Navigation Menu */}
        <nav className="px-4 py-3">
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeSection === 'home' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-foreground hover:bg-primary/20'
                }`}
              >
                <User className="w-4 h-4" />
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeSection === 'about' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-foreground hover:bg-primary/20'
                }`}
              >
                <Heart className="w-4 h-4" />
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeSection === 'skills' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-foreground hover:bg-primary/20'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                SKILLS
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeSection === 'projects' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-foreground hover:bg-primary/20'
                }`}
              >
                <Code className="w-4 h-4" />
                PROJECTS
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeSection === 'achievements' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-foreground hover:bg-primary/20'
                }`}
              >
                <Trophy className="w-4 h-4" />
                ACHIEVEMENTS
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowResumeViewer(true);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-foreground py-3 px-4 rounded-lg font-medium text-sm hover:bg-primary/20 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                RESUME
              </button>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeSection === 'contact' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-foreground hover:bg-primary/20'
                }`}
              >
                <Mail className="w-4 h-4" />
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        {/* Social Media Icons */}
        <div className="p-8 border-t border-border/20">
          <div className="text-center mb-4">
            <div className="text-xs text-muted-foreground mb-3">Let's connect! ♡</div>
            <div className="flex justify-center gap-4">
              <a href={socialLinks.email} className="p-2 rounded-full bg-pink-100 dark:bg-pink-900/20 text-pink-600 hover:text-pink-700 hover:bg-pink-200 dark:hover:bg-pink-900/40 transition-all duration-300" title="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 dark:bg-gray-900/20 text-gray-600 hover:text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-900/40 transition-all duration-300" title="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 hover:text-blue-700 hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-all duration-300" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 hover:text-purple-700 hover:bg-purple-200 dark:hover:bg-purple-900/40 transition-all duration-300" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Area - Full width */}
      <div className="w-full">
        <DarkModeToggle />

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-background pt-20">
        <ParticleCanvas />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Profile Picture - Left Side */}
            <ScrollAnimations>
              <div className="flex justify-center lg:justify-end">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/30 border-4 border-primary/30 flex items-center justify-center group hover:border-accent/50 transition-all duration-500 shadow-2xl">
                  {/* TODO: Replace with your actual profile image */}
                  <img 
                    src={profileImage}
                    alt="Suhani Gupta"
                    className="w-80 h-80 lg:h-96 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
              </div>
            </ScrollAnimations>
            
            {/* Content - Right Side */}
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
                  I’m a Full Stack Developer currently exploring modern technologies while pursuing B.Tech in Computer Science Engineering. I’ve worked on building real-world, scalable web applications and enjoy creating solutions that make an impact.</p>
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

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimations>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter target={4} suffix="+" />
                </div>
                <div className="text-muted-foreground">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter target={5} suffix="+" />
                </div>
                <div className="text-muted-foreground">Hackathons</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  Top 1%
                </div>
                <div className="text-muted-foreground">Hackathon Finalist</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter target={10} suffix="+" />
                </div>
                <div className="text-muted-foreground">Tech Tools</div>
              </div>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 bg-accent/5 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimations>
            <h2 className="section-title text-primary">About Me</h2>
            <p className="section-subtitle text-muted-foreground">
              I'm <span className="text-primary font-semibold">Suhani Gupta</span>, a Computer Science student passionate about building <span className="text-accent font-medium">full-stack solutions</span> that blend AI, creativity, and usability. I thrive in hackathons, open-source, and collaborative projects.
            </p>
          </ScrollAnimations>

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            {/* Education Timeline */}
            <ScrollAnimations delay={1}>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  Education Journey
                </h3>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                  
                  <div className="space-y-8">
                    {educationData.map((edu, index) => (
                      <div key={index} className="relative pl-10">
                        {/* Timeline dot */}
                        <div className="absolute left-2 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                        
                        <div className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-all duration-300">
                          <div className="flex items-center mb-2">
                            {edu.type === 'college' ? 
                              <GraduationCap className="w-5 h-5 text-accent mr-2" /> : 
                              <Award className="w-5 h-5 text-primary mr-2" />
                            }
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

            {/* Interests & Hobbies */}
            <ScrollAnimations delay={2}>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <Heart className="w-6 h-6 mr-2" />
                  Interests & Hobbies
                </h3>
                <div className="space-y-4">
                  {interests.map((interest, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-all duration-300 group">
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

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimations>
            <h2 className="section-title text-primary">Skills & Technologies</h2>
          </ScrollAnimations>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => {
              const getSkillClass = (category: string) => {
                switch (category.toLowerCase()) {
                  case 'programming': return 'skill-programming';
                  case 'frontend': return 'skill-frontend';
                  case 'backend': return 'skill-backend';
                  case 'databases': return 'skill-databases';
                  case 'tools': return 'skill-tools';
                  case 'design': return 'skill-design';
                  case 'currently exploring': return 'skill-exploring';
                  default: return 'skill-chip';
                }
              };
              
              return (
                <ScrollAnimations key={category} delay={index * 0.2}>
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-accent transition-all duration-300 glow-on-hover">
                    <h3 className="text-lg font-bold text-foreground mb-4 text-center border-b border-border pb-2">{category}</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {skillList.map((skill) => (
                        <span key={skill} className={`${getSkillClass(category)} px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 border`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollAnimations>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimations>
            <h2 className="section-title text-primary">Featured Projects</h2>
          </ScrollAnimations>

          <ScrollAnimations delay={1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {uniqueTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setProjectFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    projectFilter === tag
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent'
                  }`}
                >
                  {tag === 'all' ? 'All' : tag}
                </button>
              ))}
            </div>
          </ScrollAnimations>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollAnimations key={project.title} delay={index + 2}>
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
                  <div className="flex items-start mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mr-4 flex-shrink-0">
                      {achievement.icon}
                    </div>
                     <div className="flex-1">
                       <h3 className="font-bold text-foreground mb-1">{achievement.title}</h3>
                       <p className="text-muted-foreground text-sm mb-2">{achievement.event}</p>
                       <p className="text-sm text-foreground/80 mb-3">{achievement.description}</p>
                       {(achievement.certificateLink || achievement.linkedinPost) && (
                         <div className="flex justify-between items-center">
                           <div className="flex gap-3 items-center justify-center">
                             {achievement.certificateLink && (
                               <a 
                                 href={achievement.certificateLink} 
                                 target="_blank" 
                                 rel="noopener noreferrer" 
                                 className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-105" 
                                 title="View Certificate"
                               >
                                 <Award className="w-5 h-5" />
                                 <span className="text-sm font-medium">Certificate</span>
                               </a>
                             )}
                             {achievement.linkedinPost && (
                               <a 
                                 href={achievement.linkedinPost} 
                                 target="_blank" 
                                 rel="noopener noreferrer" 
                                 className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[hsl(var(--linkedin-color))]/10 text-[hsl(var(--linkedin-color))] hover:bg-[hsl(var(--linkedin-color))]/20 transition-all duration-300 hover:scale-105" 
                                 title="LinkedIn Post"
                               >
                                 <Linkedin className="w-5 h-5" />
                                 <span className="text-sm font-medium">LinkedIn</span>
                               </a>
                             )}
                           </div>
                         </div>
                       )}
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
            <p className="section-subtitle">
              Download my resume or scan the QR code for quick access
            </p>
          </ScrollAnimations>

          <ScrollAnimations delay={1}>
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex flex-col md:flex-row items-center gap-4">
                {/* TODO: Add your actual resume download and view links here */}
                <a href="/Suhani-Gupta-Resume.pdf" download className="hero-button bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 shadow-lg flex items-center justify-center">
                  <Download className="w-6 h-6 mr-3" />
                  Download Resume
                </a>
                <button onClick={() => setShowResumeViewer(true)} className="hero-button-outline border-accent text-accent hover:bg-accent hover:text-white text-lg px-8 py-4 shadow-lg flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 mr-3" />
                  View Resume
                </button>
              </div>
              
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimations>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to bring your ideas to life? Let's connect and create something amazing together!
            </p>
          </ScrollAnimations>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Social Links */}
            <ScrollAnimations delay={1}>
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-primary mb-4">Let's Connect</h3>
                  <p className="text-muted-foreground mb-8">
                    Always excited to discuss new opportunities, collaborations, or innovative projects. 
                    Whether you have a specific idea or just want to brainstorm, I'm here to help bring your vision to life.
                  </p>
                </div>

                {/* Social Media Links - Full Width */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary mb-4 text-center">Social Media</h4>
                  
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
              </div>
            </ScrollAnimations>

            {/* Contact Form - Desktop */}
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

          {/* Coding Profiles Section - Full Width */}
          <ScrollAnimations delay={3}>
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">Coding Profiles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* LeetCode */}
                <a 
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-10 rounded-xl bg-orange-500/10 border-2 border-orange-500/30 hover:border-orange-500/50 hover:bg-orange-500/20 transition-all duration-300 group glow-on-hover min-h-[200px]"
                  title="LeetCode"
                >
                  <img src={leetcodeLogo} alt="LeetCode" className="w-24 h-24 mb-6 group-hover:scale-110 transition-transform" />
                  <span className="text-xl font-semibold text-foreground group-hover:text-orange-500 transition-colors text-center break-words w-full">LeetCode</span>
                  <span className="text-sm text-muted-foreground mt-3 text-center">Problem Solving</span>
                </a>

                {/* CodeChef */}
                <a 
                  href={socialLinks.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-10 rounded-xl bg-purple-500/10 border-2 border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300 group glow-on-hover min-h-[200px]"
                  title="CodeChef"
                >
                  <img src={codechefLogo} alt="CodeChef" className="w-24 h-24 mb-6 group-hover:scale-110 transition-transform" />
                  <span className="text-xl font-semibold text-foreground group-hover:text-purple-500 transition-colors text-center break-words w-full">CodeChef</span>
                  <span className="text-sm text-muted-foreground mt-3 text-center">Competitive Coding</span>
                </a>

                {/* GeeksforGeeks */}
                <a 
                  href={socialLinks.gfg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-10 rounded-xl bg-green-500/10 border-2 border-green-500/30 hover:border-green-500/50 hover:bg-green-500/20 transition-all duration-300 group glow-on-hover min-h-[200px]"
                  title="GeeksforGeeks"
                >
                  <img src={gfgLogo} alt="GeeksforGeeks" className="w-24 h-24 mb-6 group-hover:scale-110 transition-transform" />
                  <span className="text-xl font-semibold text-foreground group-hover:text-green-500 transition-colors text-center break-words w-full">GeeksforGeeks</span>
                  <span className="text-sm text-muted-foreground mt-3 text-center">DSA Practice</span>
                </a>
              </div>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Footer */}
      {/* Footer - UPDATED: Changed to match theme with proper dark/light mode support */}
      <footer className="py-12 px-6 bg-[hsl(var(--footer-bg))] border-t border-border transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left - Name & Title */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">Suhani Gupta</h3>
              <p className="text-[hsl(var(--footer-text))] text-sm">Full Stack Developer</p>
            </div>
            
            {/* Center - Social Links */}
            <div className="flex justify-center gap-4">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" 
                 className="text-[hsl(var(--footer-link))] hover:text-[hsl(var(--footer-link-hover))] transition-colors duration-300" 
                 title="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" 
                 className="text-[hsl(var(--footer-link))] hover:text-[hsl(var(--footer-link-hover))] transition-colors duration-300" 
                 title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" 
                 className="text-[hsl(var(--footer-link))] hover:text-[hsl(var(--footer-link-hover))] transition-colors duration-300" 
                 title="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={`mailto:${socialLinks.email}`} 
                 className="text-[hsl(var(--footer-link))] hover:text-[hsl(var(--footer-link-hover))] transition-colors duration-300" 
                 title="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            {/* Right - Copyright */}
            <div className="text-center md:text-right">
              <p className="text-[hsl(var(--footer-text))] text-sm">
                © 2025 Suhani Gupta. Built with ❤️
              </p>
              <p className="text-[hsl(var(--footer-text))] text-xs mt-1 opacity-75">
                Made with React & Tailwind CSS
              </p>
            </div>
          </div>
          
          {/* Bottom tagline */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-[hsl(var(--footer-text))] text-sm italic">
              A digital portfolio to showcase who I am, what I do, and the things I love to create 💛
            </p>
          </div>
        </div>
        </footer>
        
        <ResumeViewer isOpen={showResumeViewer} onClose={() => setShowResumeViewer(false)} />
        
        {/* Contact Form Dialog for Mobile */}
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
    </div>
  );
};

export default Index;
