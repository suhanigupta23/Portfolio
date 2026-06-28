import React, { useEffect, useState } from 'react';

/**
 * Small floating animated coding decoration.
 * Typing-style snippet that cycles through a few playful code arrows / lines.
 */
const snippets = [
  '<dev />',
  '{ code: true }',
  '() => create',
  '// crafted with care',
  '<Suhani />',
  'npm run dream',
];

const CodingDecoration: React.FC = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % snippets.length);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-30 pointer-events-none select-none hidden md:block">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-card/80 backdrop-blur-md border border-primary/30 shadow-lg">
        <span className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-red-400/80" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
          <span className="w-2 h-2 rounded-full bg-green-400/80" />
        </span>
        <span className="font-mono text-xs text-primary min-w-[120px] transition-all duration-300">
          {snippets[idx]}
          <span className="inline-block w-[6px] h-[10px] bg-primary ml-1 animate-pulse" />
        </span>
      </div>
    </div>
  );
};

export default CodingDecoration;
