"use client";

import { useState, useEffect } from "react";

const chars = "!<>-_\\/[]{}—=+*^?#________";

export default function TextScramble({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [display, setDisplay] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    const timeout = setTimeout(() => {
      setHasAnimated(true);
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        iteration += 1 / 2;
        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplay(text);
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, hasAnimated]);

  return <span className={className}>{display}</span>;
}
