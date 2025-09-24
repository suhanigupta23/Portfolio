import React, { useEffect, useRef } from 'react';

interface CatFollowCursorProps {
  className?: string;
}

const CatFollowCursor: React.FC<CatFollowCursorProps> = ({ className = "" }) => {
  const leftEyeRef = useRef<SVGEllipseElement>(null);
  const rightEyeRef = useRef<SVGEllipseElement>(null);
  const catRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!catRef.current || !leftEyeRef.current || !rightEyeRef.current) return;

      const catRect = catRef.current.getBoundingClientRect();
      const catCenterX = catRect.left + catRect.width / 2;
      const catCenterY = catRect.top + catRect.height / 2;

      // Calculate angle from cat to cursor
      const deltaX = e.clientX - catCenterX;
      const deltaY = e.clientY - catCenterY;
      const angle = Math.atan2(deltaY, deltaX);

      // Define eye positions and constraints
      const eyeRadius = 2;
      const maxEyeMovement = 3;

      // Calculate eye pupil positions
      const eyeOffsetX = Math.cos(angle) * Math.min(maxEyeMovement, Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 100);
      const eyeOffsetY = Math.sin(angle) * Math.min(maxEyeMovement, Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 100);

      // Update left eye position (adjusted for new cat design)
      leftEyeRef.current.setAttribute('cx', (45 + eyeOffsetX).toString());
      leftEyeRef.current.setAttribute('cy', (45 + eyeOffsetY).toString());

      // Update right eye position (adjusted for new cat design)
      rightEyeRef.current.setAttribute('cx', (75 + eyeOffsetX).toString());
      rightEyeRef.current.setAttribute('cy', (45 + eyeOffsetY).toString());
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`${className}`}>
      <svg
        ref={catRef}
        width="120"
        height="100"
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-20"
      >
        {/* Cat ears */}
        <path
          d="M25 25 L35 8 L45 25 Z"
          fill="currentColor"
          className="text-foreground"
        />
        <path
          d="M75 25 L85 8 L95 25 Z"
          fill="currentColor"
          className="text-foreground"
        />
        
        {/* Inner ears (pink) */}
        <path
          d="M30 22 L35 12 L40 22 Z"
          fill="#FF69B4"
        />
        <path
          d="M80 22 L85 12 L90 22 Z"
          fill="#FF69B4"
        />
        
        {/* Cat head (larger and rounder) */}
        <ellipse
          cx="60"
          cy="55"
          rx="40"
          ry="35"
          fill="currentColor"
          className="text-foreground"
        />
        
        {/* Cat eyes (much larger and more anime-style) */}
        <ellipse cx="45" cy="45" rx="12" ry="15" fill="white" />
        <ellipse cx="75" cy="45" rx="12" ry="15" fill="white" />
        
        {/* Eye highlights (to make them sparkle) */}
        <ellipse cx="48" cy="42" rx="3" ry="4" fill="white" opacity="0.8" />
        <ellipse cx="78" cy="42" rx="3" ry="4" fill="white" opacity="0.8" />
        
        {/* Cat pupils (moving parts - larger for cute effect) */}
        <ellipse
          ref={leftEyeRef}
          cx="45"
          cy="45"
          rx="6"
          ry="8"
          fill="currentColor"
          className="text-foreground transition-all duration-100 ease-out"
        />
        <ellipse
          ref={rightEyeRef}
          cx="75"
          cy="45"
          rx="6"
          ry="8"
          fill="currentColor"
          className="text-foreground transition-all duration-100 ease-out"
        />
        
        {/* Small white highlights in pupils */}
        <circle cx="47" cy="42" r="2" fill="white" />
        <circle cx="77" cy="42" r="2" fill="white" />
        
        {/* Cat nose (heart-shaped for cuteness) */}
        <path
          d="M58 55 Q60 52 62 55 Q60 58 58 55 Z"
          fill="#FF69B4"
        />
        
        {/* Cat mouth (cute smile) */}
        <path
          d="M60 58 Q55 62 50 58"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-foreground"
        />
        <path
          d="M60 58 Q65 62 70 58"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-foreground"
        />
        
        {/* Cat whiskers (longer and more prominent) */}
        <line x1="20" y1="50" x2="38" y2="52" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        <line x1="18" y1="58" x2="38" y2="58" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        <line x1="20" y1="66" x2="38" y2="64" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        
        <line x1="82" y1="52" x2="100" y2="50" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        <line x1="82" y1="58" x2="102" y2="58" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        <line x1="82" y1="64" x2="100" y2="66" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        
        {/* Cute cheek blush */}
        <ellipse cx="25" cy="60" rx="8" ry="5" fill="#FFB6C1" opacity="0.6" />
        <ellipse cx="95" cy="60" rx="8" ry="5" fill="#FFB6C1" opacity="0.6" />
      </svg>
    </div>
  );
};

export default CatFollowCursor;