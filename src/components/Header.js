import "../styles/index.css";
import content from "../content";
import Typical from "react-typical";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-special  ">
      <div className=" mx-auto  md:flex-row-reverse ">
        <div className="text-black font-averio font-bold text-center mb-10  ">
          <h2
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-1000 ease-in-out text-3xl md:text-5xl font-bold`}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-1000 ease-in-outfont-bold text-2xl mb-4 text-black mt-6`}
          >
            {content.header.text[2]}{" "}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
            />
          </h1>
          <div className="flex mb-4 mt-18 justify-center">
            <ScrollLink to="stack" smooth="true">
              <button className="  bg-black text-white  px-4 mx-1 py-3 mb-8 text-xl uppercase mt-12 rounded-lg ">
                Stack
              </button>
            </ScrollLink>
            <ScrollLink to="projects" smooth="true">
              <button className="  bg-black text-white  px-6 mx-4 py-3 mb-8 text-xl uppercase mt-12 rounded-lg ">
                Projects
              </button>
            </ScrollLink>
            <ScrollLink to="about" smooth="true">
              <button className="  bg-black text-white  px-4 mx-1 py-3 mb-8 text-xl uppercase mt-12 rounded-lg ">
                About
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

//animated blob elements to be used in another project. i learned more keyframe utilities doing this.
{
  /* <div className="bg-yellow-300 absolute w-64 h-64 p-40 mx-40 -my-8  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 "></div>
<div className="bg-pink-300 absolute w-64 h-64  p-40 -my-8 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
 <div className="bg-purple-300 absolute w-64 h-64 p-40 mx-20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 "></div> */
}
