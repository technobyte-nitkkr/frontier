import React from "react";
import "./style.css";

interface HomecontainerProps {
  heading: string;
  element: React.ReactNode;
}

export default function Homecontainer({ heading, element }: HomecontainerProps) {
  return (
    <div className="homecontainer">
      <div className="designContainer">
        <div className="hc-headingline">
          <img src="/assets/home/home-tag.svg" alt="" />
          <div>{heading}</div>
        </div>
        <div className="hc-eclipse">
          <div>
            <img src="/assets/home/home-eclipse.svg" alt="" />
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
