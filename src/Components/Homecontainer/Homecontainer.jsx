import React from "react";
import "./style.css";
import tag from "/assets/home/home-tag.svg";
import eclipse from "/assets/home/home-eclipse.svg";

export default function Homecontainer({ heading, element }) {
  return (
    <div className="homecontainer">
      <div className="designContainer">
        <div className="hc-headingline">
          <img src={tag} alt="" />
          <div>{heading}</div>
        </div>
        <div className="hc-eclipse">
          <div>
            <img src={eclipse} alt="" />
          </div>
        </div>
        <div className="hc-body">
          <div className="hc-line">
            <div></div>
          </div>
          <div className="hc-subbody">{element}</div>
        </div>
      </div>
    </div>
  );
}

{
  /* sample snippet <Homecontainer heading="Sample" element={<h1>Welcome to NIT KKR</h1>} /> */
}
