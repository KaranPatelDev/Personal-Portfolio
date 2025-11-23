"use client";

import { useEffect, useState } from "react";

// ================================
// TERMINAL WRAPPER
// ================================
export function Terminal({ children }) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="rounded-xl border border-emerald-600/20 bg-[#0b0f0c] shadow-lg overflow-hidden relative">
        
        {/* Subtle scanlines */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[url('https://i.ibb.co/vVh9xvJ/scanlines.png')] mix-blend-overlay"></div>

        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-emerald-600/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <span className="text-emerald-400 text-sm ml-3 font-semibold tracking-wide">
            karan@terminal:~$
          </span>
        </div>

        {/* Content */}
        <div className="p-6 font-mono text-sm space-y-3 min-h-[300px] text-emerald-300">
          {children}
        </div>
      </div>
    </div>
  );
}

// ================================
// TYPING ANIMATION
// ================================
export function TypingAnimation({
  children,
  className = "",
  duration = 30,
  delay = 0,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const text = typeof children === "string" ? children : "";

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, started, duration, text]);

  if (!started) return null;

  return (
    <div className={`font-bold tracking-wide ${className}`}>
      <span className="text-emerald-400">{displayedText}</span>
      {currentIndex < text.length && (
        <span className="animate-pulse text-emerald-300 ml-1">▋</span>
      )}
    </div>
  );
}

// ================================
// DELAYED SPAN
// ================================
export function AnimatedSpan({ children, className = "", delay = 0 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  if (!visible) return null;

  return (
    <div className={`text-emerald-300 ${className}`}>
      {children}
    </div>
  );
}
