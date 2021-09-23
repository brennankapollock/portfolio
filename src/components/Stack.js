import "../styles/index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import content from "../content";
import { Responsive } from "responsive-react";

Aos.init();

function Stack() {
  return (
    <div
      className="min-h-screen font-averio flex justify-center items-center  bg-black text-white"
      id="stack"
    >
      <Responsive displayIn={["Laptop"]}>
        <div
          className="lg:w-3/4 "
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img src={content.stack.carbon} />
        </div>
      </Responsive>

      <Responsive displayIn={["Mobile", "Tablet"]}>
        <div>
          <div className="font-bold  text-center   flex justify-center items-center  ">
            <h1 className=" text-white px-3 text-4xl  ">Stack</h1>
          </div>

          <div className="flex justify-evenly text-2xl mt-4    ">
            <ul
              className="text-center ml-20"
              data-aos="fade-right"
              data-aos-easing="ease-in"
              data-aos-duration="1500"
              data-aos-delay="0"
              data-aos-once="true"
            >
              <li className="my-8 border border-double border-2 border-white p-2 ">
                React
              </li>

              <li className="my-8 border border-double border-2 border-white p-2">
                Express
              </li>

              <li className="my-8 border border-double border-2 border-white p-2">
                Node
              </li>
              <li className="my-8 border border-double border-2 border-white p-2">
                PostgreSQL
              </li>
            </ul>
            <ul
              className="text-center mx-20"
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="1500"
              data-aos-delay="0"
              data-aos-once="true"
            >
              <li className="my-8 border border-double border-2 border-white p-2">
                MongoDB
              </li>
              <li className="my-8 border border-double border-2 border-white p-2">
                Tailwind
              </li>
              <li className="my-8 border border-double border-2 border-white p-2">
                GraphQL
              </li>
              <li className="my-8 border border-double border-2 border-white p-2">
                Next.js
              </li>
            </ul>
          </div>
        </div>
      </Responsive>
    </div>
  );
}

export default Stack;
