import React from "react";
import content from "../content";
import "../styles/index.css";

function Nav() {
  return (
    <div style={{background: "#000000"}}>
      <div className="flex items-center font-mono justify-between w-10/12 mx-auto py-3 text-white">
      <h1 className="text-3xl font-bold">BP</h1>
      <div>
        {content.nav.links.map((link, index) => {
          return <span key={index} className="text-xl mr-4">{link.text}</span>;
        })}
      </div>
      </div>
    </div>
  );
}

export default Nav;
