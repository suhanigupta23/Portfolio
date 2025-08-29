
import React, { useEffect, useRef } from 'react';

interface ScrollAnimationsProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay * 100);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`fade-in-up ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimations;
