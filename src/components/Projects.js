import React from "react";
import "../styles/index.css";
import content from "../content";

function Projects(){





    return (
        <div className="min-h-screen font-mono flex flex-col items-center justify-center" id="projects" style={{ background: "#000000" }}>
            <h1 className="text-5xl font-bold text-white">Projects</h1>
            <div className="flex items-center">
                {content.projects.project.map((project, index) => {
                    return (
                        <div className="flex-col">
                        <div className="text-white text-xl flex w-auto h-auto bg-black m-2 items-center p-5 mt-10">
                            {project.name}
                        </div>
                        <button className=" items-center bg-indigo-500 mx-3 px-6 py-3 mb-8 text-md uppercase  rounded-lg font-bold">
                                Repo
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;