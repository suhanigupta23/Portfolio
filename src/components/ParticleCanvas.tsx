import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 6 + 4, // Bigger particles: 4-10px instead of 1-3px
          opacity: Math.random() * 0.4 + 0.3,
        });
      }
      
      particlesRef.current = particles;
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      
      // Draw connections
      ctx.strokeStyle = getComputedStyle(document.documentElement)
        .getPropertyValue('--particle-color')
        ? `hsl(${getComputedStyle(document.documentElement).getPropertyValue('--particle-color')} / 0.1)`
        : 'rgba(139, 123, 110, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Draw particles
      particles.forEach(particle => {
        ctx.fillStyle = getComputedStyle(document.documentElement)
          .getPropertyValue('--particle-color')
          ? `hsl(${getComputedStyle(document.documentElement).getPropertyValue('--particle-color')} / ${particle.opacity})`
          : `rgba(139, 123, 110, ${particle.opacity})`;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      });
    };

    const animate = () => {
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;
      
      // Add new particles around click position
      const newParticles: Particle[] = [];
      for (let i = 0; i < 5; i++) {
        newParticles.push({
          x: clickX + (Math.random() - 0.5) * 100,
          y: clickY + (Math.random() - 0.5) * 100,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 6 + 4,
          opacity: Math.random() * 0.4 + 0.3,
        });
      }
      particlesRef.current = [...particlesRef.current, ...newParticles];
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    return () => {
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    />
  );
};

export default ParticleCanvas;
