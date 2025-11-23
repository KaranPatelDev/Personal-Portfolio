"use client";

import { useEffect, useState } from "react";

export function TypingAnimation({
  children,
  className = "",
  duration = 50,
  delay = 0,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = typeof children === "string" ? children : "";

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, delay + currentIndex * duration);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, duration, text]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-white">|</span>
      )}
    </span>
  );
}
