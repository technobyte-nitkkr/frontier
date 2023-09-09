import React, { useState } from "react";
import "./contact.css";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="mainClass">
      <h2 className="bold text-[35px] ">What is Technobyte?</h2>
      <p className="py-4 text-xl">
        Technobyte, the official society for Computer Science and Information
        Technology students at NIT Kurukshetra, stands as a beacon of
        technological innovation and knowledge dissemination🚀. Renowned for its
        remarkable endeavors, the society takes pride in organizing North
        India's largest technical fest, TECHSPARDHA. Beyond the grand event,
        Technobyte regularly conducts workshops, classes, and guest lectures,
        imparting cutting-edge knowledge and hands-on experience to its members.
        With a commitment to nurturing technical acumen and promoting a culture
        of innovation, Technobyte continues to be a vital hub for aspiring tech
        enthusiasts at NIT Kurukshetra.
      </p>
      <Form />
    </div>
  );
};

export default Contact;
