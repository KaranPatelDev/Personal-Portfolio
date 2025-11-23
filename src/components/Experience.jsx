import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { Timeline } from "./ui/timeline";

const Experience = () => {
  const timelineData = experiences.map((exp) => ({
    title: exp.title,
    content: (
      <div>
        <div className="mb-8">
          <h3 className="text-white text-2xl font-bold mb-2">
            {exp.company_name}
          </h3>
          <p className="text-neutral-400 text-sm mb-4">{exp.location}</p>
        </div>
        <ul className="space-y-3">
          {exp.points.map((point, idx) => (
            <li
              key={idx}
              className="text-neutral-300 text-sm md:text-base leading-relaxed"
            >
              • {point}
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={timelineData} />
    </div>
  );
};

export default SectionWrapper(Experience, "work");
