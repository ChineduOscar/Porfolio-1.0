import { experiences } from "../data";
  
  const Experiences = () => {
    return (
      <section className="flex flex-col gap-8 px-6 py-3 md:px-16 md:py-8 lg:px-[90px] text-white mt-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#85d2e6]">
          Experience
        </h2>
  
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="experience-container bg-gray-800 p-6 rounded-lg shadow-lg border-[#85d2e6] border-2"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-[#85d2e6] mb-4">
              {experience.organisation}
            </h3>
            {experience.positions.map((position, posIndex) => (
              <div key={posIndex} className="position-container mb-4">
                <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {position.title}
                </h4>
                <p className="text-sm md:text-md font-light text-white mb-4">
                  {position.duration}
                </p>
                <ul className="list-disc pl-6">
                  {position.content.map((item, contentIndex) => (
                    <li
                      key={contentIndex}
                      className="text-sm md:text-md font-light text-white mb-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>
    );
  };
  
  export default Experiences;
  