import React from "react";
import "../styles/index.css";
import content from "../content";

function Projects(){
   

    


    return (
        <div className="min-h-screen font-mono flex-col flex items-center justify-center" id="projects" style={{ background: "#000000" }}>
            <h1 className="text-5xl font-bold text-white">Projects</h1>
            <div className="flex">
                {content.projects.project.map((project, index) => {
                    return (
                        <div key={index} className="flex items-center flex-col text-white text-xl  bg-black m-2 p-5 mt-10">
                            <h2 id={project.name}>{project.name}</h2>
                           
                            <a href={project.url}>
                            <button  className=" bg-indigo-500 mx-3 px-4 mt-8 py-2 mb-8 text-md uppercase rounded-lg font-bold">
                                Repo
                        </button>
                        </a>
                        
                        </div>
                        
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;