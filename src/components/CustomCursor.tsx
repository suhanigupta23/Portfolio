import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]');
      setHovering(!!interactive);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        className="custom-cursor-ring"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${hovering ? 1.8 : 1})`,
        }}
      />
      {/* Inner dot */}
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${hovering ? 0 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
