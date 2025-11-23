// Tech.jsx
import { motion } from "framer-motion";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { cn } from "../lib/utils";
import { styles } from "../styles";
import { AnimatedBeam } from "./ui/animated-beam";

const Circle = forwardRef(({ className, children, href, onClick }, ref) => {
  const handleClick = (e) => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
    if (onClick) onClick(e);
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={cn(
        "z-10 flex size-14 sm:size-16 items-center justify-center rounded-full border-2 border-purple-500/40 bg-gradient-to-br from-purple-900/20 to-black p-3 sm:p-3.5 shadow-[0_0_20px_-12px_rgba(145,94,255,0.8)] backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-purple-400 hover:shadow-[0_0_30px_-8px_rgba(145,94,255,1)]",
        href && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const Tech = () => {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  
  const techRefs = useRef([]);
  techRefs.current = technologies.map(
    (_, i) => techRefs.current[i] ?? React.createRef()
  );
  
  // Category centers
  const pythonCenterRef = useRef(null);
  const webCenterRef = useRef(null);
  const databaseCenterRef = useRef(null);
  const toolsCenterRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <motion.div className="w-full text-center py-10">
        <p className={styles.sectionSubText}>What I Use to Build</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <div
        className="relative flex min-h-[680px] w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-black to-purple-950/20 border border-purple-500/20 px-4 py-10 sm:px-8 sm:py-12 lg:p-12"
        ref={containerRef}
      >
        <div className="flex size-full max-w-7xl flex-col items-stretch justify-between gap-14 lg:gap-20">
          
          {/* Python Ecosystem */}
          <div className="flex flex-col items-center gap-10">
            <div className="text-purple-300 text-sm font-semibold tracking-wider">PYTHON ECOSYSTEM</div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:flex-nowrap lg:items-center lg:justify-center lg:gap-16">
              
              {/* Left side - FastAPI, OpenCV, NumPy */}
              <div className="flex flex-col items-center gap-6 md:gap-10">
                {[10, 11, 12].map((idx) => (
                  <Circle key={technologies[idx].name} ref={techRefs.current[idx]} href={technologies[idx].docs}>
                    <img src={technologies[idx].icon} alt={technologies[idx].name} className="w-full h-full object-contain" title={technologies[idx].name} />
                  </Circle>
                ))}
              </div>

              {/* Left center - Pandas, Matplotlib, Seaborn */}
              <div className="flex flex-col items-center gap-6 md:gap-10">
                {[13, 14, 15].map((idx) => (
                  <Circle key={technologies[idx].name} ref={techRefs.current[idx]} href={technologies[idx].docs}>
                    <img src={technologies[idx].icon} alt={technologies[idx].name} className="w-full h-full object-contain" title={technologies[idx].name} />
                  </Circle>
                ))}
              </div>

              {/* Python Center - Larger */}
              <Circle ref={pythonCenterRef} className="size-16 sm:size-20 border-purple-500" href={technologies[0].docs}>
                <img src={technologies[0].icon} alt={technologies[0].name} className="w-full h-full object-contain" title={technologies[0].name} />
              </Circle>

              {/* Right center - MediaPipe, PyAutoGUI, Flet */}
              <div className="flex flex-col items-center gap-6 md:gap-10">
                {[16, 17, 18].map((idx) => (
                  <Circle key={technologies[idx].name} ref={techRefs.current[idx]} href={technologies[idx].docs}>
                    <img src={technologies[idx].icon} alt={technologies[idx].name} className="w-full h-full object-contain" title={technologies[idx].name} />
                  </Circle>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row: Web, Databases, Tools */}
          <div className="flex flex-col gap-16 px-4 sm:px-6 md:px-8 md:flex-row md:items-start md:justify-between">
            
            {/* Web Technologies */}
            <div className="flex flex-col items-center gap-10 flex-1">
              <div className="text-purple-300 text-sm font-semibold tracking-wider">WEB TECHNOLOGIES</div>
              <div className="flex flex-col items-center gap-8 sm:gap-10">
                
                {/* Top row - HTML, CSS, Tailwind */}
                <div className="flex gap-6 sm:gap-10">
                  {[2, 3, 4].map((idx) => (
                    <Circle key={technologies[idx].name} ref={techRefs.current[idx]} href={technologies[idx].docs}>
                      <img src={technologies[idx].icon} alt={technologies[idx].name} className="w-full h-full object-contain" title={technologies[idx].name} />
                    </Circle>
                  ))}
                </div>
                
                {/* Center - React (same size as others) */}
                <Circle ref={webCenterRef} className="border-purple-500" href={technologies[1].docs}>
                  <img src={technologies[1].icon} alt={technologies[1].name} className="w-full h-full object-contain" title={technologies[1].name} />
                </Circle>

                {/* Bottom row - JS, TS, Node */}
                <div className="flex gap-6 sm:gap-10">
                  {[5, 6, 7].map((idx) => (
                    <Circle key={technologies[idx].name} ref={techRefs.current[idx]} href={technologies[idx].docs}>
                      <img src={technologies[idx].icon} alt={technologies[idx].name} className="w-full h-full object-contain" title={technologies[idx].name} />
                    </Circle>
                  ))}
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="flex flex-col items-center gap-10 flex-1">
              <div className="text-purple-300 text-sm font-semibold tracking-wider">DATABASES</div>
              <div className="flex flex-col items-center gap-8 sm:gap-10">
                {/* MongoDB (same size) */}
                <Circle ref={databaseCenterRef} className="border-purple-500" href={technologies[8].docs}>
                  <img src={technologies[8].icon} alt={technologies[8].name} className="w-full h-full object-contain" title={technologies[8].name} />
                </Circle>
                
                {/* SQL */}
                <Circle ref={techRefs.current[9]} href={technologies[9].docs}>
                  <img src={technologies[9].icon} alt={technologies[9].name} className="w-full h-full object-contain" title={technologies[9].name} />
                </Circle>
              </div>
            </div>

            {/* Tools */}
            <div className="flex flex-col items-center gap-10 flex-1">
              <div className="text-purple-300 text-sm font-semibold tracking-wider">TOOLS</div>
              <div className="flex flex-col items-center gap-8 sm:gap-10">
                {/* Git (same size) */}
                <Circle ref={toolsCenterRef} className="border-purple-500" href={technologies[19].docs}>
                  <img src={technologies[19].icon} alt={technologies[19].name} className="w-full h-full object-contain" title={technologies[19].name} />
                </Circle>
                
                {/* Postman */}
                <Circle ref={techRefs.current[20]} href={technologies[20].docs}>
                  <img src={technologies[20].icon} alt={technologies[20].name} className="w-full h-full object-contain" title={technologies[20].name} />
                </Circle>

                {/* Docker */}
                <Circle ref={techRefs.current[21]} href={technologies[21].docs}>
                  <img src={technologies[21].icon} alt={technologies[21].name} className="w-full h-full object-contain" title={technologies[21].name} />
                </Circle>
              </div>
            </div>

          </div>
        </div>

        {/* Animated beams - only render after mount */}
        {mounted && (
          <>
            {/* Animated beams - Python ecosystem */}
            {[10, 11, 12, 13, 14, 15, 16, 17, 18].map((idx) => (
              <AnimatedBeam
                key={`python-${idx}`}
                containerRef={containerRef}
                fromRef={techRefs.current[idx]}
                toRef={pythonCenterRef}
                duration={3 + Math.random() * 2}
                delay={idx * 0.1}
                pathColor="#915eff"
                pathWidth={2}
                pathOpacity={0.3}
              />
            ))}

            {/* Animated beams - Web technologies */}
            {[2, 3, 4, 5, 6, 7].map((idx) => (
              <AnimatedBeam
                key={`web-${idx}`}
                containerRef={containerRef}
                fromRef={techRefs.current[idx]}
                toRef={webCenterRef}
                duration={3 + Math.random() * 2}
                delay={idx * 0.1}
                pathColor="#915eff"
                pathWidth={2}
                pathOpacity={0.3}
              />
            ))}

            {/* Animated beams - Database */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={techRefs.current[9]}
              toRef={databaseCenterRef}
              duration={4}
              delay={0}
              pathColor="#915eff"
              pathWidth={2}
              pathOpacity={0.3}
            />

            {/* Animated beams - Tools */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={techRefs.current[20]}
              toRef={toolsCenterRef}
              duration={4}
              delay={0}
              pathColor="#915eff"
              pathWidth={2}
              pathOpacity={0.3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={techRefs.current[21]}
              toRef={toolsCenterRef}
              duration={4.3}
              delay={0.15}
              pathColor="#915eff"
              pathWidth={2}
              pathOpacity={0.3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={techRefs.current[21]}
              toRef={toolsCenterRef}
              duration={4.5}
              delay={0.2}
              pathColor="#915eff"
              pathWidth={2}
              pathOpacity={0.3}
            />
          </>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
