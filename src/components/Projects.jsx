import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { projects } from "../data"

const Projects = () => {
  return (
    <section className="flex flex-col gap-8 px-6 py-6 md:px-16 md:py-8 lg:px-[90px] text-white mt-6">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#85d2e6]">
        Projects
      </h2>

      {/* Project List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-60 object-cover"
            />
            <div className="p-4 md:p-8">
              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              {/* Project Description */}
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Tech Stack with Border */}
              <div className="flex flex-wrap gap-4 mb-4">
                {project.stacks.map((stack, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 border border-[#85d2e6] rounded-full text-gray-400 text-sm font-semibold"
                  >
                    {stack}
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <BsLink45Deg size="2rem" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <AiFillGithub size="2rem" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
