import React, { useState } from "react";
import Dropdown from "./Dropdown";
import emailjs from "emailjs-com";
import Countries from "./Countries";
import Button from "../Button/Button";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phoneNumber: "",
    message: "",
  });

  const [selectedCounty, setSelectedCounty] = useState("India");

  const [btnText, setBtnText] = useState("Submit");

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
    // console.log("Submitting form");
    const dialCode = Countries.find(
      (country) => country.name === selectedCounty
    ).dial_code;
    // console.log(dialCode);
    try {
      await emailjs.send(
        "service_fsffmpr","template_d3ues63",
        {
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          dialCode: dialCode,
          city : formData.city,
          email: formData.email
        },
        "tPp7ffxoxdcF1eUWj"
      );
      setBtnText("Submitted!");
    } catch (error) {
      setBtnText("Error!!.... retry?")
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className="flex flex-col text-black sm:pr-4" onSubmit={handleSubmit}>
      <input
        className="w-full bg-white my-1 md:my-4 h-12 placeholder:px-3 cursor-pointer px-2"
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(event) => handleInputChange(event, "name")}
      ></input>
      <input
        type="email"
        placeholder="Email*"
        className="my-1 md:my-4 h-12 placeholder:px-3 cursor-pointer px-2"
        value={formData.email}
        onChange={(event) => handleInputChange(event, "email")}
      ></input>
      <input
        type="text"
        placeholder="Current City*"
        className="my-1 md:my-4 h-12 placeholder:px-3 cursor-pointer px-2"
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
          className="h-12 placeholder:px-3 my-1 md:my-4 md:mr-0 md:mx-6 w-full px-2"
          type="tel"
          placeholder="Enter Your WhatsApp number"
          value={formData.phoneNumber}
          onChange={(event) => handleInputChange(event, "phoneNumber")}
        ></input>
      </div>
      <textarea
        placeholder="Please write your message here"
        className=" h-32 resize-none my-1 md:my-4 placeholder:px-3 cursor-pointer px-2"
        onChange={(event) => handleInputChange(event, "message")}
      ></textarea>
      <div className="flex justify-center items-center h-[8rem]">
        <Button btnText={btnText} sty="h-[4rem] w-full md:w-[12rem]" />
      </div>
    </form>
  );
};

export default Form;
