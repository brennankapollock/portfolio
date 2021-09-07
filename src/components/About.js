import React from "react";
import "../styles/index.css";
import content from "../content";

function About() {
  return (
    <div
      className="min-h-screen font-mono flex flex-col items-center justify-center bg-special"
      id="about"
    >
      <h1 className="text-5xl font-bold text-black">Who Am I?</h1>
      <div className="flex flex-col mx-4 items-center justify-center ">
        {content.about.text.map((text, index) => {
          return (
            <div
              key={index}
              className="flex text-center items-center text-black text-lg  font-averio  mx-12 p-5 mt-10 rounded-lg"
            >
              <h2>{text.one}</h2>
              <h2>{text.two}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
