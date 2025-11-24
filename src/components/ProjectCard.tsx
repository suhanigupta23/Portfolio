import React from 'react';
import { Github, ExternalLink, Star, Zap, Shield, Users, Code, Sparkles } from 'lucide-react';

// Import project images
import saarthiImage from '../assets/saarthi-project.jpg';
import intuneImage from '../assets/intune-project.jpg';
import carManagementImage from '../assets/car-management-project.jpg';
import soundorbitImage from '../assets/soundorbit-project.jpg';
import hamsterGameImage from '../assets/hamster-game-project.jpg';
import snakeGameImage from '../assets/snake-game-project.png';

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  tags: string[];
  github: string;
  demo: string;
  features: Feature[];
  image?: string;
  metrics?: {
    stars?: number;
    users?: string;
    performance?: string;
  };
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Map project titles to their corresponding images
  const getProjectImage = (title: string) => {
    switch (title) {
      case 'Saarthi':
        return saarthiImage;
      case 'InTune':
        return intuneImage;
      case 'Car Management System':
        return carManagementImage;
      case 'SoundOrbit':
        return soundorbitImage;
      case 'Hit the Hamster':
        return hamsterGameImage;
      default:
        return null;
    }
  };

  const projectImage = getProjectImage(project.title);

  return (
    <div className="project-card group">
      {/* Project Image */}
      {projectImage ? (
        <a 
          href={project.demo} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full h-48 rounded-xl mb-6 relative overflow-hidden cursor-pointer"
        >
          <img 
            src={projectImage} 
            alt={project.title} 
            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        </a>
      ) : (
        /* Fallback placeholder for projects without images */
        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/30 rounded-xl mb-6 flex items-center justify-center border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="text-center text-muted-foreground relative z-10">
            <Code className="w-12 h-12 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-sm font-medium">{project.title}</p>
          </div>
        </div>
      )}
      
      {/* Project Info */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground flex items-center">
            <Sparkles className="w-4 h-4 mr-1 text-primary" />
            Key Features
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-sm text-muted-foreground">
                <div className="text-primary mr-2 flex-shrink-0">
                  {feature.icon}
                </div>
                {feature.text}
              </div>
            ))}
          </div>
        </div>

        {/* Metrics (if available) */}
        {project.metrics && (
          <div className="flex justify-center gap-6 py-3 border-t border-border">
            {project.metrics.stars && (
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{project.metrics.stars}</div>
                <div className="text-xs text-muted-foreground">Stars</div>
              </div>
            )}
          </div>
        )}
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 hero-button-outline text-center group flex items-center justify-center"
          >
            <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Code
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 hero-button text-center group flex items-center justify-center"
          >
            <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
