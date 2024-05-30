import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./style.css";

export default function Registration1({ showBtn }) {
  return (
    <div className="reg-container">
      <h2>What is Technobyte ?</h2>
      <p>
        Technobyte, the official society for Computer Science and Information
        Technology students at NIT Kurukshetra, is a thriving hub of
        technological innovation and knowledge dissemination🚀.<br></br> It have
        different teams like Media team , EP team , Tech team , Sponsorship team
        to create interest among students in different domains. Its renowned
        reputation is upheld through the organization of TECHSPARDHA, North
        India's largest technical fest. In which they conduct different events
        like <b>HACKSHETRA, EXCALIBUR, GAMESTATION, ENCODER, DESIGNATHON, WEBHUNT and BLACKBOX </b>.
        <br></br> Beyond
        these flagship event, Technobyte consistently conducts workshops,
        classes, and guest lectures, providing members with cutting-edge
        knowledge and hands-on experience. Moreover, Technobyte fosters
        enthusiasm among students by hosting weekly contests like <b>CODERUN</b>,
        encouraging their participation in international-level coding
        competitions Coderun also promotes students irrespective of any branch
        to show their problem solving skills . Committed to nurturing technical
        acumen and promoting an innovative culture, Technobyte remains a vital
        and celebratory hub for aspiring tech enthusiasts at NIT
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
