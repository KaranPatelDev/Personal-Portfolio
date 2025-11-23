import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_website_link,
}) => {
  const primaryLink = live_website_link && live_website_link !== "#"
    ? live_website_link
    : source_code_link;

  return (
    <motion.div
      className="flex-shrink-0 h-full"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl min-w-[320px] sm:min-w-[360px] sm:w-[360px] flex h-full flex-col"
      >
        <div
          className="w-full h-[230px] relative cursor-pointer rounded-2xl overflow-hidden bg-[#0d1328] flex items-center justify-center"
          onClick={() => {
            if (primaryLink) {
              window.open(primaryLink, "_blank", "noreferrer");
            }
          }}
        >
          <img
            src={`${image}${image.includes("?") ? "&" : "?"}tr=f-auto`}
            alt={name}
            loading="lazy"
            className="h-full w-full object-contain"
          />

          <div className="absolute  inset-0 flex justify-end mt-3 card-img_hover">
            <div
              onClick={() => {
                if (source_code_link) {
                  window.open(source_code_link, "_blank", "noreferrer");
                }
              }}
              className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
            >
              <img
                src={`${github}${github.includes("?") ? "&" : "?"}tr=f-auto`}
                alt="GitHub Icon"
                loading="lazy"
                width="50%"
                height="50%"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col flex-1">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary mt-4 text-[15px] leading-relaxed flex-1">
            {description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} taxt-[15px]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Shipped Products & Platforms</p>
        <h2 className={styles.sectionHeadText}>Project Showcase.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] sm:text-[17px] max-w-3xl sm:leading-[30px] leading-1"
        >
          A snapshot of the systems I’ve architected—ranging from ML-driven
          tooling and computer-vision utilities to production-ready Node and
          FastAPI backends. Each project includes the live experience or the
          full source code so you can explore the engineering up close.
        </motion.p>
      </div>
      <div className="mt-20 flex gap-7 overflow-x-auto pb-2 md:pb-4 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
