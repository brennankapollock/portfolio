// import "../styles/index.css";
// import content from "../content";
// import Typical from "react-typical";
// import { useEffect, useState } from "react";
// import { Link as ScrollLink } from "react-scroll";

// function Header() {
//   const [animated, setAnimated] = useState(false);

//   useEffect(() => {
//     setAnimated(true);
//   }, []);

//   return (
//     <div className="min-h-screen flex  bg-special  ">
//       <div className="">
//         <div className="text-black font-averio font-bold text-center mb-10  ">
//           <h2
//             className={`${
//               animated ? "" : "translate-y-10 opacity-0"
//             } transform transition duration-1000 ease-in-out text-3xl md:text-5xl font-bold`}
//           >
//             {content.header.text[0]}
//             <br />
//             {content.header.text[1]}
//           </h2>
//           <h1
//             className={`${
//               animated ? "" : "translate-y-10 opacity-0"
//             } transform transition duration-1000 ease-in-outfont-bold text-2xl mb-4 text-black mt-6`}
//           >
//             {content.header.text[2]}{" "}
//             <Typical
//               steps={content.header.typical}
//               loop={Infinity}
//               className="inline-block"
//             />
//           </h1>
//           <div className="flex mb-4 mt-18 justify-center">
//             <ScrollLink to="stack" smooth="true">
//               <button className="  bg-black text-white  px-4 mx-1 py-3 mb-8 text-xl uppercase mt-12 rounded-lg ">
//                 Stack
//               </button>
//             </ScrollLink>
//             <ScrollLink to="projects" smooth="true">
//               <button className="  bg-black text-white  px-6 mx-4 py-3 mb-8 text-xl uppercase mt-12 rounded-lg ">
//                 Projects
//               </button>
//             </ScrollLink>
//             <ScrollLink to="about" smooth="true">
//               <button className="  bg-black text-white  px-4 mx-1 py-3 mb-8 text-xl uppercase mt-12 rounded-lg ">
//                 About
//               </button>
//             </ScrollLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

//animated blob elements to be used in another project. i learned more keyframe utilities doing this.

/* <div className="bg-yellow-300 absolute w-64 h-64 p-40 mx-40 -my-8  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 "></div>
<div className="bg-pink-300 absolute w-64 h-64  p-40 -my-8 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
 <div className="bg-purple-300 absolute w-64 h-64 p-40 mx-20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 "></div> */

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
    <div className="min-h-screen flex md:justify-start justify-center items-center bg-gradient-r-red ">
      <div className="text-black font-averio font-bold md:text-left text-center md:mx-24 ">
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
          } transform transition duration-1000 ease-in-outfont-bold text-2xl  text-black mt-6`}
        >
          {content.header.text[2]}{" "}
          <Typical
            steps={content.header.typical}
            loop={Infinity}
            className="inline-block"
          />
        </h1>

        <div className="flex md:justify-start justify-center">
          <ScrollLink to="stack" smooth="true">
            <button className="  bg-black text-white  px-4 mx-1 py-3 mb-8 text-xl  mt-12  transition delay-75 duration-75 ease-in-out transform hover:-translate-y-2 hover:-translate-x-2  ">
              Stack
            </button>
          </ScrollLink>
          <ScrollLink to="projects" smooth="true">
            <button className="  bg-black text-white  px-6 mx-4 py-3 mb-8 text-xl  mt-12 transition delay-75 duration-75 ease-in-out transform hover:-translate-y-2 hover:-translate-x-2  ">
              Projects
            </button>
          </ScrollLink>
          <ScrollLink to="about" smooth="true">
            <button className="  bg-black text-white  px-4 mx-1 py-3 mb-8 text-xl mt-12 transition delay-75 duration-75 ease-in-out transform hover:-translate-y-2 hover:-translate-x-2  ">
              About
            </button>
          </ScrollLink>
        </div>
        <div className="flex justify-center md:justify-start md:-mx-2    ">
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
  );
}

export default Header;

//Possible terminal UI to add into the portfolio.
{
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
}
