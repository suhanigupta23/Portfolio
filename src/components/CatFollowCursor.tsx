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

      // Update left eye position
      leftEyeRef.current.setAttribute('cx', (35 + eyeOffsetX).toString());
      leftEyeRef.current.setAttribute('cy', (35 + eyeOffsetY).toString());

      // Update right eye position  
      rightEyeRef.current.setAttribute('cx', (65 + eyeOffsetX).toString());
      rightEyeRef.current.setAttribute('cy', (35 + eyeOffsetY).toString());
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`${className}`}>
      <svg
        ref={catRef}
        width="100"
        height="80"
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-16"
      >
        {/* Cat ears */}
        <path
          d="M20 20 L30 5 L40 20 Z"
          fill="currentColor"
          className="text-foreground"
        />
        <path
          d="M60 20 L70 5 L80 20 Z"
          fill="currentColor"
          className="text-foreground"
        />
        
        {/* Inner ears */}
        <path
          d="M25 17 L30 8 L35 17 Z"
          fill="currentColor"
          className="text-primary"
        />
        <path
          d="M65 17 L70 8 L75 17 Z"
          fill="currentColor"
          className="text-primary"
        />
        
        {/* Cat head */}
        <ellipse
          cx="50"
          cy="45"
          rx="35"
          ry="30"
          fill="currentColor"
          className="text-foreground"
        />
        
        {/* Cat eyes (white background) */}
        <ellipse cx="35" cy="35" rx="8" ry="10" fill="white" />
        <ellipse cx="65" cy="35" rx="8" ry="10" fill="white" />
        
        {/* Cat pupils (moving parts) */}
        <ellipse
          ref={leftEyeRef}
          cx="35"
          cy="35"
          rx="4"
          ry="5"
          fill="currentColor"
          className="text-foreground transition-all duration-100 ease-out"
        />
        <ellipse
          ref={rightEyeRef}
          cx="65"
          cy="35"
          rx="4"
          ry="5"
          fill="currentColor"
          className="text-foreground transition-all duration-100 ease-out"
        />
        
        {/* Cat nose */}
        <path
          d="M47 45 L53 45 L50 50 Z"
          fill="currentColor"
          className="text-primary"
        />
        
        {/* Cat mouth */}
        <path
          d="M50 50 Q45 55 40 52"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-foreground"
        />
        <path
          d="M50 50 Q55 55 60 52"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-foreground"
        />
        
        {/* Cat whiskers */}
        <line x1="15" y1="40" x2="30" y2="42" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
        <line x1="15" y1="48" x2="30" y2="48" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
        <line x1="70" y1="42" x2="85" y2="40" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
        <line x1="70" y1="48" x2="85" y2="48" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
      </svg>
    </div>
  );
};

export default CatFollowCursor;