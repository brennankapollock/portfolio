import React from "react";
import "../styles/index.css";
import content from "../content";

function Projects() {
  return (
    <div
      className="min-h-screen font-averio  flex flex-col items-center justify-center "
      id="projects"
    >
      <h1 className="text-5xl font-bold text-black">Projects</h1>
      <div className="flex flex-wrap items-center justify-center">
        {content.projects.project.map((project, index) => {
          return (
            <div
              key={index}
              className="flex items-center text-white text-xl  bg-black  m-2 p-5 mt-10"
            >
              <h2 id={project.name}>{project.name}</h2>

              <a href={project.url}>
                <button className=" bg-white text-black mx-3 px-3 mt-8 py-1 mb-8 text-md uppercase rounded-lg font-bold">
                  Repo
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
