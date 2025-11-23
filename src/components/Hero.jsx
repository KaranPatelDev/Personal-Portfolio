import { motion } from "framer-motion";
import resumeFile from "../../resume.pdf";
import { FloatingDock } from "./ui/floating-dock";
import { LampContainer } from "./ui/lamp";
import { TypingAnimation } from "./ui/typing-animation";

const Hero = () => {
  const socialLinks = [
    {
      title: "Resume",
      icon: (
        <svg
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.828c0-.53-.21-1.039-.586-1.414l-4.828-4.828A2 2 0 0 0 13.172 2H6zm0 2h7v4a1 1 0 0 0 1 1h4v11H6V4zm9 6H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm0 4H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm-4 4H9a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" />
        </svg>
      ),
      href: resumeFile,
    },
    {
      title: "GitHub",
      icon: (
        <svg
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      href: "https://github.com/KaranPatelDev",
    },
    {
      title: "LinkedIn",
      icon: (
        <svg
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "https://linkedin.com/in/karan-patel-16700a215/",
    },
    {
      title: "Twitter",
      icon: (
        <svg
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://x.com/KaranPatel1404",
    },
  ];

  return (
    <section className="relative w-full h-screen mx-auto">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 text-center"
        >
          <h1 className="py-4 text-5xl font-bold tracking-tight md:text-7xl">
            <TypingAnimation className="text-white" duration={5} delay={100}>
              Karan Patel
            </TypingAnimation>
          </h1>
          <p className="mt-6 text-xl md:text-3xl font-light">
            <TypingAnimation className="text-white" duration={0.5} delay={200}>
              Backend Dev by Discipline — AI/ML by Curiosity
            </TypingAnimation>
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-10 flex justify-center"
          >
            <FloatingDock items={socialLinks} />
          </motion.div>
        </motion.div>
      </LampContainer>
      <div className="absolute sm:bottom-24 bottom-36 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
