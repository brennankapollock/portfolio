import content from "../content";
import "../styles/index.css";

function Stack() {
  return (
    <div
      className="min-h-screen font-averio flex flex-col justify-center items-center bg-black"
      id="stack"
    >
      <h1 className="text-white text-center text-5xl">Stack</h1>
      <ul className="flex text-white flex-col text-xl mr-20 mt-12 text-center">
        <li className="mt-3">JavaScript E6</li>
        <li className="mt-3">React</li>
        <li className="mt-3">Express</li>
        <li className="mt-3">PostgreSQL</li>
        <li className="mt-3">Node</li>
      </ul>
    </div>
  );
}

export default Stack;
