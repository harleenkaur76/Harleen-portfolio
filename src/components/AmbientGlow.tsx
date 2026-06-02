"use client";

import { useEffect, useState } from "react";

export default function AmbientGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible]);

  // Don't show on mobile/touch devices
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-0 hidden md:block"
      style={{
        left: mousePos.x - 300,
        top: mousePos.y - 300,
        width: 600,
        height: 600,
        opacity: isVisible ? 0.04 : 0,
        transition: "opacity 1s ease",
        background: "radial-gradient(circle, #d4a853 0%, transparent 70%)",
        filter: "blur(80px)",
      }}
    />
  );
}
