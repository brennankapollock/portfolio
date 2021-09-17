import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../content";
import "../styles/index.css";

function Stack() {
  return (
    <div
      className="min-h-screen font-averio  flex flex-col items-center justify-center bg-special"
      id="stack"
    >
      <h1 className="text-5xl font-bold">Stack</h1>
      <div className="flex flex-wrap items-center justify-center">
        {content.stack.tech.map((tech, index) => {
          return (
            <span
              className={`${
                index % 2 === 0 ? "animate-float" : "animate-refloat"
              } w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5 mt-10"`}
            >
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          );
        })}
      </div>
      <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">
        {content.stack.desc}
      </p>
    </div>
  );
}

export default Stack;
