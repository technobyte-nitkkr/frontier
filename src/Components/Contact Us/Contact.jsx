import React, { useState } from "react";
import "./contact.css";
import Dropdown from "./Dropdown";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phoneNumber: "",
    message: "",
  });

  const [selectedCounty, setSelectedCounty] = useState("India");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    city: "",
    phoneNumber: "",
  });

  const handleInputChange = (event, name) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleCountyChange = (selectedCountry) => {
    setSelectedCounty(selectedCountry);
  };

  return (
    <div className="mainClass">
      <h2 className="bold text-3xl">What is Technobyte 2023</h2>
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
      <form className="flex flex-col text-black">
        <input
          className="w-full bg-white my-4 h-12 placeholder:px-3 cursor-pointer px-2"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(event) => handleInputChange(event, "name")}
        ></input>
        {errors.name && <span className="error">{errors.name}</span>}
        <input
          type="email"
          placeholder="Email*"
          className="my-4 h-12 placeholder:px-3 cursor-pointer px-2"
          value={formData.email}
          onChange={(event) => handleInputChange(event, "email")}
        ></input>
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          type="text"
          placeholder="Current City*"
          className="my-4 h-12 placeholder:px-3 cursor-pointer px-2"
          value={formData.city}
          onChange={(event) => handleInputChange(event, "city")}
        ></input>
        {errors.city && <span className="error">{errors.city}</span>}
        <div className="w-full flex flex-row ">
          <div className="text-black">
            <Dropdown
              selectedCounty={selectedCounty}
              handleCountyChange={handleCountyChange}
            />
          </div>
          <input
            className="h-12 mx-6 mr-0 w-full placeholder:px-3 px-2"
            type="tel"
            placeholder="Enter Your WhatsApp number"
            value={formData.phoneNumber}
            onChange={(event) => handleInputChange(event, "phoneNumber")}
          ></input>
        </div>
        {errors.phoneNumber && (
          <span className="error">{errors.phoneNumber}</span>
        )}
        <textarea
          type="textarea"
          placeholder="Please write your message here"
          className=" h-32 resize-none my-4 placeholder:px-3 cursor-pointer px-2"
        ></textarea>
        <button
          className="text-white border-black my-8 bg-blue-500 h-12 w-auto "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
