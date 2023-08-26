import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phoneNumber: "",
    message: "",
  });

  const [selectedCounty, setSelectedCounty] = useState("India");

  const handleInputChange = (event, name) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCountyChange = (selectedCountry) => {
    setSelectedCounty(selectedCountry);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className="flex flex-col text-black sm:pr-4" onSubmit={handleSubmit}>
      <input
        className="w-full bg-white my-4 h-12 placeholder:px-3 cursor-pointer px-2"
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(event) => handleInputChange(event, "name")}
      ></input>
      <input
        type="email"
        placeholder="Email*"
        className="my-4 h-12 placeholder:px-3 cursor-pointer px-2"
        value={formData.email}
        onChange={(event) => handleInputChange(event, "email")}
      ></input>
      <input
        type="text"
        placeholder="Current City*"
        className="my-4 h-12 placeholder:px-3 cursor-pointer px-2"
        value={formData.city}
        onChange={(event) => handleInputChange(event, "city")}
      ></input>
      <div className="w-full flex flex-col md:flex-row">
        <div className="text-black">
          <Dropdown
            selectedCounty={selectedCounty}
            handleCountyChange={handleCountyChange}
          />
        </div>
        <input
          className="h-12 placeholder:px-3 my-4 md:mr-0 md:mx-6 w-full px-2"
          type="tel"
          placeholder="Enter Your WhatsApp number"
          value={formData.phoneNumber}
          onChange={(event) => handleInputChange(event, "phoneNumber")}
        ></input>
      </div>
      <textarea
        placeholder="Please write your message here"
        className=" h-32 resize-none my-4 placeholder:px-3 cursor-pointer px-2"
      ></textarea>
      <button
        type="submit"
        className="text-white border-black my-8 bg-blue-500 h-12 w-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
