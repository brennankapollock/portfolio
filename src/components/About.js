import React from "react";
import "../styles/index.css";
import content from "../content";

function About() {
  return (
    <div>
      <div className="overflow-hidden ">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "#000000",
            width: "100%",
            height: 150,
            transform: "rotate(180deg) scaleX(-1)",
          }}
        >
          <path d="M1200 120L0 16.48V0h1200v120z" />
        </svg>
      </div>
      <div
        className="min-h-screen font-mono flex flex-col items-center justify-center bg-black  "
        id="about"
      >
        <h1 className="text-5xl font-bold text-white">Who Am I?</h1>
        <div className="flex flex-col mx-4 items-center justify-center ">
          {content.about.text.map((text, index) => {
            return (
              <div
                key={index}
                className="flex text-center items-center text-white text-lg  font-averio  mx-12 p-5 mt-10 rounded-lg"
              >
                <h2>{text.one}</h2>
                <h2>{text.two}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
