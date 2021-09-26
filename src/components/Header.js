import React from "react";
import "../styles/index.css";
import content from "../content";
import Typical from "react-typical";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import ParticlesBg from "particles-bg";

function Header() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div>
      <div className=" min-h-screen flex  flex-wrap-reverse justify-center items-center">
        <div className=" ">
          <ParticlesBg type="cobweb" num={80} bg={true} />

          <div className="text-black font-averio font-bold lg:text-left text-center md:mx-24 ">
            <h2
              className={`${
                animated ? "" : "translate-y-10 opacity-0"
              } transform transition duration-1000 ease-in-out text-3xl lg:text-5xl font-bold`}
            >
              {content.header.text[0]}
              <br />
              {content.header.text[1]}
            </h2>
            <h1
              className={`${
                animated ? "" : "translate-y-10 opacity-0"
              } transform transition duration-1000 ease-in-outfont-bold text-2xl  text-black mt-6`}
            >
              {content.header.text[2]}{" "}
              <Typical
                steps={content.header.typical}
                loop={Infinity}
                className="inline-block"
              />
            </h1>

            <div className="flex lg:justify-start justify-center">
              <ScrollLink
                to="stack"
                smooth="true"
                className="  bg-black text-white  px-4 mx-1 py-3 mb-8 text-xl  mt-12  transition delay-75 duration-75 ease-in-out transform hover:-translate-y-2 hover:-translate-x-2  "
              >
                <button>Stack</button>
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth="true"
                className="  bg-black text-white  px-6 mx-4 py-3 mb-8 text-xl  mt-12 transition delay-75 duration-75 ease-in-out transform hover:-translate-y-2 hover:-translate-x-2  "
              >
                <button>Projects</button>
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth="true"
                className="  bg-black text-white  px-4 mx-1 py-3 mb-8 text-xl mt-12 transition delay-75 duration-75 ease-in-out transform hover:-translate-y-2 hover:-translate-x-2  "
              >
                <button>About</button>
              </ScrollLink>
            </div>
            <div className="flex justify-center lg:justify-start lg:-mx-2">
              <a href="https://www.linkedin.com/in/brennanpollock/">
                <span className="fab fa-linkedin text-4xl px-2 mx-1 py-3 mb-8 "></span>
              </a>
              <a href="https://github.com/brennankapollock">
                <span className="fab fa-github text-4xl px-4 mx-4 py-3 mb-8  "></span>
              </a>
              <a href="https://twitter.com/hootscootboogie">
                <span className="fab fa-twitter text-4xl px-2 mx-1 py-3 mb-8 "></span>
              </a>
            </div>
          </div>
        </div>

        <img
          className="w-1/4 lg:ml-32 lg:mb-12 rounded-full  md:-mb-32 -mb-16  "
          src={content.header.me}
        />
      </div>

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
    </div>
  );
}

export default Header;

//Possible terminal UI to add into the portfolio.

/* <div className="pl-64 mb-8 mt-56">
        <Terminal
          color="white"
          backgroundColor="black"
          barColor="black"
          style={{
            fontWeight: "bold",
            fontSize: "1em",
            width: "100%",
            height: "50%",
          }}
          commands={{
            "open-google": () =>
              window.open("https://www.google.com/", "_blank"),

            popup: () => alert("Terminal in React"),
          }}
          descriptions={{
            "open-google": "opens google.com",

            alert: "alert",
            popup: "alert",
          }}
          msg="You can write anything here. Example - Hello! My name is Foo and I like Bar."
        />
      </div> */

//animated blob elements to be used in another project. i learned more keyframe utilities doing this.

/* <div className="bg-yellow-300 absolute w-64 h-64 p-40 mx-40 -my-8  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 "></div>
<div className="bg-pink-300 absolute w-64 h-64  p-40 -my-8 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
 <div className="bg-purple-300 absolute w-64 h-64 p-40 mx-20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 "></div> */
