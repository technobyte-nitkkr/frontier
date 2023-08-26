import React, { useState } from "react";
import "./contact.css";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="mainClass">
      <h2 className="bold text-[35px] ">What is Technobyte 2023</h2>
      <p className="py-4 text-xl">
        Techspardha is the annual techno-managerial festival of National
        Institute of Technology, Kurukshetra. It started in 1995 as
        "Technospect" (later changed to Literati). The year 2013 marked the
        Golden Jubilee of NIT Kurukshetra, thus it was renamed as Techspardha.
        Etymologically, the word 'Techspardha' is composed of two words, 'Tech'
        in English is a contraction of technology and 'Spardha' in Hindi means
        competition. Techspardha is known for hosting a variety of events that
        include competitions, exhibitions, guest lectures as well as workshops
      </p>
      <Form />
    </div>
  );
};

export default Contact;
