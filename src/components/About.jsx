import { motion } from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.3 * index, 0.75)}
      className="w-auto"
    >
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="div"
        duration={2}
        className="bg-black hover:bg-slate-950 rounded-full"
      >
        <div className="py-3 px-6 flex items-center justify-center gap-2">
          <span className="text-white text-xl">›</span>
          <h3 className="text-white text-base font-medium whitespace-nowrap">
            {title}
          </h3>
        </div>
      </HoverBorderGradient>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4"
      >
        <Terminal>
          <TypingAnimation delay={100} duration={15} className="text-emerald-400">
            <span className="text-cyan-400">$</span> whoami
          </TypingAnimation>

          <AnimatedSpan delay={500} className="text-white font-semibold pl-2 border-l-2 border-emerald-500">
            <span className="text-emerald-400">→</span> Karan Patel - <span className="text-cyan-300">Backend Developer</span>
          </AnimatedSpan>

          <TypingAnimation delay={800} duration={15} className="text-emerald-400 mt-4">
            <span className="text-cyan-400">$</span> cat about.txt
          </TypingAnimation>

          <AnimatedSpan delay={1200} className="text-gray-300 leading-relaxed pl-2">
            <div className="space-y-1">
              <p>Backend Developer with hands-on experience in building <span className="text-emerald-400 font-semibold">scalable systems</span>,</p>
              <p><span className="text-cyan-400 font-semibold">API development</span>, and <span className="text-purple-400 font-semibold">AI-driven automation</span>. I bring a strong foundation in</p>
              <p>Python, Node.js, and data analytics, supported by industry internships</p>
              <p>across AI, data engineering, and technical support. I focus on writing</p>
              <p>clean, efficient backend logic and delivering solutions that are reliable,</p>
              <p>performance-oriented, and aligned with real-world user needs.</p>
            </div>
          </AnimatedSpan>

          <TypingAnimation delay={1500} duration={15} className="text-emerald-400 mt-4">
            <span className="text-cyan-400">$</span> ls skills/
          </TypingAnimation>

          <AnimatedSpan delay={1800} className="pl-2 text-gray-300">
            <div className="space-y-1">
              <p>Check out the <span className="text-emerald-400 font-semibold">Technologies</span> section below to see my full tech stack →</p>
            </div>
          </AnimatedSpan>
        </Terminal>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-6 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
