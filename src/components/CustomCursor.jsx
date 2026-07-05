import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseOver = (e) => {
      // Check if hovering over clickable elements
      const target = e.target;
      const isClickable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") || 
        target.getAttribute("role") === "button" ||
        target.hasAttribute("data-cursor-hover");
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      <div 
        className={`custom-cursor-dot ${isHovered ? "hovered" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`custom-cursor-ring ${isHovered ? "hovered" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}
