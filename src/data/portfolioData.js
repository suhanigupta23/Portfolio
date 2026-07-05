export const portfolioData = {
  name: "Suhani Gupta",
  title: "Full-Stack Developer & Creative Technologist",
  subtitle: "fullstack developer",
  taglines: [
    "<dev />",
    "{ code: true }",
    "() => create",
    "// crafted with care",
    "<Suhani />",
    "npm run dream"
  ],
  bio: "I’m a Full Stack Developer with hands-on experience in AI-integration, currently exploring modern technologies while pursuing B.Tech in Computer Science Engineering. I’ve built real-world, scalable web applications and love creating intelligent solutions that make an impact — always exploring more.",
  shortBio: ", a Computer Science student passionate about building full-stack solutions that blend AI, creativity, and usability. I thrive in hackathons, open-source, and collaborative projects.",
  
  focusAreas: [
    { title: "Full-Stack Development ⌨️" },
    { title: "Hackathons ✨" },
    { title: "Open-Source Contribution 🎨" },
    { title: "AI & Backend Exploration 🚀" },
    { title: "Music 🎸" },
    { title: "Anime 🎬" },
    { title: "Sketching ✏️" },
    { title: "Exploration 🌏" }
  ],

  socials: {
    github: "https://github.com/suhanigupta23",
    linkedin: "https://www.linkedin.com/in/suhani-gupta23/",
    instagram: "https://www.instagram.com/suhanigupta_23_/",
    gfg: "https://www.geeksforgeeks.org/user/user_8chfh8aqclt/",
    leetcode: "https://leetcode.com/u/SuhaniGupta_/",
    codechef: "https://www.codechef.com/users/mizuki_231",
    codeforces: "https://codeforces.com/profile/Suhani_Gupta23",
    email: "suhanigupta2304@gmail.com",
    codolio: "https://codolio.com/profile/SuhaniGupta"
  },

  education: [
    {
      degree: "BTech in Computer Science & Engineering",
      institution: "Indian Institute of Information Technology",
      duration: "2023-2027",
      location: "Kota, Rajasthan",
      type: "college"
    },
    {
      degree: "Class XII - 88.88%",
      institution: "Sagar Public School",
      duration: "2022",
      location: "Bhopal, Madhya Pradesh",
      type: "school"
    },
    {
      degree: "Class X - 95.2%",
      institution: "Sagar Public School",
      duration: "2020",
      location: "Bhopal, Madhya Pradesh",
      type: "school"
    }
  ],

  hobbies: [
    {
      name: "Guitar",
      description: "My stress reliever",
      category: "Music"
    },
    {
      name: "Sketching",
      description: "Relaxing and creative",
      category: "Art"
    },
    {
      name: "Anime",
      description: "Exploring different worlds",
      category: "Media"
    },
    {
      name: "Music",
      description: "Fuels my creativity",
      category: "Music"
    },
    {
      name: "Travelling",
      description: "Exploring new places and cultures",
      category: "Adventure"
    }
  ],

  skillsCategories: [
    {
      title: "Programming Languages",
      iconColor: "text-blue-400",
      accent: "bg-blue-400/10 border-blue-400/30",
      skills: [
        { name: "Java", slug: "openjdk", color: "ED8B00" },
        { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
        { name: "Python", slug: "python", color: "3776AB" },
        { name: "C", slug: "c", color: "A8B9CC" }
      ]
    },
    {
      title: "Frontend",
      iconColor: "text-purple-400",
      accent: "bg-purple-400/10 border-purple-400/30",
      skills: [
        { name: "React.js", slug: "react", color: "61DAFB" },
        { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
        { name: "HTML5", slug: "html5", color: "E34F26" }
      ]
    },
    {
      title: "Backend",
      iconColor: "text-green-400",
      accent: "bg-green-400/10 border-green-400/30",
      skills: [
        { name: "Spring Boot", slug: "springboot", color: "6DB33F" },
        { name: "REST APIs", slug: "fastapi", color: "009688" }
      ]
    },
    {
      title: "Databases",
      iconColor: "text-orange-400",
      accent: "bg-orange-400/10 border-orange-400/30",
      skills: [
        { name: "MongoDB", slug: "mongodb", color: "47A248" },
        { name: "MySQL", slug: "mysql", color: "4479A1" },
        { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
        { name: "Firebase", slug: "firebase", color: "FFCA28" }
      ]
    },
    {
      title: "Tools & Design",
      iconColor: "text-cyan-400",
      accent: "bg-cyan-400/10 border-cyan-400/30",
      skills: [
        { name: "Git", slug: "git", color: "F05032" },
        { name: "VS Code", slug: "vscodium", color: "007ACC" },
        { name: "Postman", slug: "postman", color: "FF6C37" }
      ]
    },
    {
      title: "Relevant Coursework",
      iconColor: "text-indigo-400",
      accent: "bg-indigo-400/10 border-indigo-400/30",
      skills: [
        { name: "OS", slug: "linux", color: "FCC624" },
        { name: "DBMS", slug: "databricks", color: "FF3621" },
        { name: "Computer Networks", slug: "wireshark", color: "1679A7" },
        { name: "OOP", slug: "oracle", color: "F80000" }
      ]
    }
  ],

  projects: [
    {
      title: "CareerCopilot",
      description: "AI-integrated job application tracker that matches resumes with job descriptions and generates AI-based compatibility scores. Built secure REST APIs with Spring Boot & JWT auth, and integrated OpenAI GPT-3.5 for resume-to-JD scoring.",
      tech: ["Spring Boot", "React", "JavaScript", "PostgreSQL", "JWT", "OpenAI API"],
      tags: ["AI", "Full-Stack"],
      github: "https://github.com/suhanigupta23/CareerCopilot",
      demo: "https://github.com/suhanigupta23/CareerCopilot",
      image: "/projects/career-copilot.png"
    },
    {
      title: "InTune",
      description: "AI roommate matching platform pairing users by lifestyle compatibility using SBERT cosine similarity, with EasyOCR-based identity verification and real-time match state via Firestore.",
      tech: ["React", "Node.js", "TypeScript", "Python", "MongoDB", "EasyOCR", "Tailwind CSS", "Firestore"],
      tags: ["AI", "Hackathon Project"],
      github: "https://github.com/suhanigupta23/Intune",
      demo: "https://team-naruto.vercel.app/",
      image: "/projects/intune.png"
    },
    {
      title: "SketchRoom",
      description: "Interactive multiplayer whiteboard enabling real-time collaborative sketching, brainstorming and ideation across devices.",
      tech: ["WebSocket", "Spring Boot", "React", "Redis", "Docker", "PostgreSQL"],
      tags: ["Full-Stack", "Real-Time"],
      github: "https://github.com/suhanigupta23/SketchRoom",
      demo: "https://sketch-room-ashy.vercel.app/",
      image: "/projects/sketch-room.jpg"
    },
    {
      title: "Saarthi",
      description: "AI-powered health platform with real-time assistance and emergency features",
      tech: ["React", "Flask", "Node.js", "MongoDB", "OpenAI GPT", "WebRTC"],
      tags: ["AI", "Full-Stack", "Health"],
      github: "https://github.com/suhanigupta23/Saarthi",
      demo: "https://saarthi-empower-hub-revamp.vercel.app/",
      image: "/projects/saarthi.png"
    },
    {
      title: "DermaIQ",
      description: "AI-powered skincare analysis platform that detects skin concerns and recommends personalized routines.",
      tech: ["JavaScript", "Hugging Face API"],
      tags: ["AI", "Full-Stack"],
      github: "https://github.com/suhanigupta23/DermaIQ",
      demo: "https://github.com/suhanigupta23/DermaIQ",
      image: "/projects/derma-iq.png"
    },
    {
      title: "Hit the Hamster",
      description: "Fun and interactive browser-based game with score tracking",
      tech: ["HTML", "CSS", "JavaScript"],
      tags: ["Game"],
      github: "https://github.com/suhanigupta23/Hit-The-Hamster",
      demo: "https://creative-choux-e20f8d.netlify.app/",
      image: "/projects/hit-the-hamster.png"
    },
    {
      title: "Snake Game – Hand Gesture Controlled",
      description: "Classic Snake game controlled entirely via hand gestures using a webcam",
      tech: ["Python", "OpenCV", "MediaPipe", "Pygame"],
      tags: ["Game", "AI"],
      github: "https://github.com/suhanigupta23/Snake-Game-Hand-Gesture",
      demo: "https://github.com/suhanigupta23/Snake-Game-Hand-Gesture",
      image: "/projects/snake-game.png"
    }
  ],

  achievements: [
    {
      title: "SheBuilds Hackathon 2025",
      event: "National Finalist",
      description: "Developed InTune - AI roommate matchmaking platform. Grand Finalist at SheBuilds, organised by Hackerearth (VLIV Delhi) among 1500+ participants"
    },
    {
      title: "HackOrbit Hackathon 2025",
      event: "Top 10",
      description: "Built Saarthi - AI-powered health platform. Secured position in Top 10 at Hackorbit Hackathon, MITS Gwalior among 800+ participants. Winner in Open Innovation category."
    },
    {
      title: "Google Girl Hackathon 2025",
      event: "Top 300",
      description: "Created innovative solutions for skin problem analysis by AI-detection and recommendation for skincare. Selected in Top 300 nationwide."
    },
    {
      title: "GirlScript Summer of Code 2024",
      event: "Top 160",
      description: "Active Open-Source Contributor. Ranked #154 among top 160 contributors in a global program with thousands of participants from 3-month intensive projects."
    },
    {
      title: "Academic Excellence",
      event: "₹60,000 Scholarship",
      description: "Awarded scholarship for outstanding academic performance and leadership qualities."
    },
    {
      title: "NDA (W) Qualified",
      event: "NDA(W)-II-2021",
      description: "Successfully qualified National Defence Academy written examination NDA-II-(W)-148."
    }
  ]
};
