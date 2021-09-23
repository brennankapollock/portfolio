import React from "react";
import "../styles/index.css";
import content from "../content";

function Projects() {
  return (
    <div>
      <div className="overflow-hidden">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: "#000000", width: "100%", height: 150 }}
        >
          <path d="M1200 120L0 16.48V0h1200v120z" />
        </svg>
      </div>
      <div
        className="min-h-screen font-averio w-full grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1  gap-4 p-16 mt-8 "
        id="projects"
      >
        {content.projects.project.map((project, index) => (
          <div
            key={index}
            className="flex flex-col xl:justify-evenly lg:justify-evenly md:justify-evenly"
          >
            <div className="  ">
              <div className="px-10 py-6 mb-10 text-center ">
                <h1 className="mb-4 text-3xl font-bold text-black ">
                  {project.name}
                </h1>
                <h2 className="text-sm">{project.desc}</h2>
              </div>

              <div className="flex justify-evenly">
                <a href={project.url} target="blank">
                  <button className="px-4 mx-1 py-3 mb-8  text-lg  text-white  bg-black  ">
                    Github
                  </button>
                </a>
                <button className="px-4 mx-1 py-3 mb-8  text-lg  text-white  bg-black  ">
                  Live
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
