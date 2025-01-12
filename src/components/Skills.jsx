import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { skills } from "../data";

const Skills = () => {

  return (
    <section className="flex flex-col gap-8 px-6 py-3 md:px-16 md:py-8 lg:px-[90px] text-white mt-12">
      {/* Left-aligned Skills Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#85d2e6]">
        Skills
      </h2>

      {/* Skill Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 md:gap-4 rounded-lg p-4 shadow-lg bg-gray-800 border-[#85d2e6] border-2"
          >
            {/* Skill Image */}
            <LazyLoadImage
              src={skill.img}
              alt={skill.name}
              effect="blur"
              className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
            />
            {/* Skill Name */}
            <span className="text-sm md:text-xl font-semibold text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
