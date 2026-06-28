import React, { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';
import owlCover from '../assets/codolio-owl.gif.asset.json';


interface LoadingScreenProps {
  onComplete: () => void;
  duration?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, duration = 5000 }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        setExiting(true);
        setTimeout(onComplete, 600);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        {/* Owl cover */}
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-primary/10 border border-primary/30 flex items-center justify-center overflow-hidden p-3">
            <img src={owlCover.url} alt="Scholar owl mascot" className="w-full h-full object-contain" />
          </div>
          <div className="absolute -inset-2 rounded-3xl border border-primary/20 animate-ping" />
          <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-background border border-primary/30 flex items-center justify-center shadow-lg">
            <Code2 className="w-5 h-5 text-primary" />
          </div>
        </div>


        {/* Name */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Suhani Gupta
          </h1>
          <p className="text-sm text-muted-foreground mt-2 font-mono">
            <span className="text-primary">{'<'}</span> loading portfolio{' '}
            <span className="text-primary">{'/>'}</span>
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-80">
          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
            <span>{Math.round(progress)}%</span>
            <span>initializing...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
