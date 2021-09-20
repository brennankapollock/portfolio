import "../styles/index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import content from "../content";
import { useEffect, useState } from "react";
Aos.init();

function Stack() {
  // const [windowSize, setWindowSize] = useState();

  // useEffect(() => {
  //   setWindowSize(document.documentElement.clientWidth);
  //   console.log(windowSize);
  // });

  // function StackDisplay() {
  //   if (windowSize >= 768) {
  //     return <img src={content.stack.carbon} />;
  //   } else {
  //     return <h1>Test</h1>;
  //   }
  // }

  return (
    <div
      className="min-h-screen font-averio flex justify-center items-center  bg-black text-white"
      id="stack"
    >
      <div className="">
        <img src={content.stack.carbon} />
      </div>

      {/* <div>
        <div className="font-bold  text-center  pt-40  flex justify-center items-center  ">
          <h1 className=" text-white px-3 text-4xl  ">Stack</h1>
        </div>

        <div className="flex justify-evenly text-2xl mt-12  ">
          <ul
            className="text-center"
            data-aos="fade-up"
            data-aos-easing="ease-in"
            data-aos-duration="1500"
            data-aos-delay="0"
            data-aos-once="true"
          >
            <li className="my-8">React</li>
            <li className="my-8">Express</li>
            <li className="my-8">Node</li>
            <li className="my-8">PostgreSQL</li>
          </ul>
          <ul
            className="text-center"
            data-aos="fade-up"
            data-aos-easing="ease-in"
            data-aos-duration="1500"
            data-aos-delay="0"
            data-aos-once="true"
          >
            <li className="my-8">MongoDB</li>
            <li className="my-8">Tailwind</li>
            <li className="my-8">GraphQL</li>
            <li className="my-8">Next.js</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Stack;
