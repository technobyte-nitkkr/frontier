import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./style.css";

export default function Registration({ showBtn }) {
  return (
    <div className="reg-container">
      <h2>What is Techspardha 2023?</h2>
      <p>
        Techspardha is the annual techno-managerial festival of National
        Institute of Technology, Kurukshetra. It started in 1995 as
        "Technospect" (later changed to Literati). The year 2013 marked the
        Golden Jubilee of NIT Kurukshetra, thus it was renamed as Techspardha.
        Etymologically, the word ‘Techspardha’ is composed of two words, ‘Tech’
        in English is a contraction of technology and ‘Spardha’ in Hindi means
        competition. Techspardha is known for hosting a variety of events that
        include competitions, exhibitions, guest lectures as well as workshops.
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
