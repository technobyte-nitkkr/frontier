import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./style.css";

export default function Registration({ showBtn }) {
  return (
    <div className="reg-container">
      <h2>What is Technobyte ?</h2>
      <p>
        Technobyte, the official society for Computer Science and Information
        Technology students at NIT Kurukshetra, stands as a beacon of
        technological innovation and knowledge dissemination🚀. Renowned for its
        remarkable endeavors, the society takes pride in organizing North
        India's largest technical fest, TECHSPARDHA. Beyond the grand event,
        Technobyte regularly conducts workshops, classes, and guest lectures,
        imparting cutting-edge knowledge and hands-on experience to its members.
        Not only this , technobyte also conducts weekly contests like Coderun to
        increase more enthusiasm among students for participating in
        international level coding competitions . With a commitment to nurturing
        technical acumen and promoting a culture of innovation, Technobyte
        continues to be a vital hub for aspiring tech enthusiasts at NIT
        Kurukshetra.🥳👨‍💻
      </p>
      {showBtn ? (
        <div className="dwnBtn" id="eventElementHelper">
          {/* <Link to="/about"> */}
          <a href="/about">
            <Button btnText={"Know more"} />
          </a>
          {/* </Link> */}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
