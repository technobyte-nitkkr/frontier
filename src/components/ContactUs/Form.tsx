"use client";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
// @ts-ignore
import emailjs from "emailjs-com";
import Countries from "./Countries";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phoneNumber: "",
    message: "",
  });

  const [selectedCounty, setSelectedCounty] = useState("India");
  const [btnText, setBtnText] = useState("Send Message");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    const { value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountyChange = (selectedCountry: string) => {
    setSelectedCounty(selectedCountry);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dialCode =
      Countries.find((c: any) => c.name === selectedCounty)?.dial_code || "";
    setBtnText("Sending…");
    try {
      await emailjs.send(
        "service_fsffmpr",
        "template_d3ues63",
        {
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          dialCode,
          city: formData.city,
          email: formData.email,
        },
        "tPp7ffxoxdcF1eUWj"
      );
      setSubmitted(true);
      setBtnText("Message Sent ✓");
    } catch (error) {
      setBtnText("Failed — Retry");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className="cf-form" onSubmit={handleSubmit} noValidate>
      <div className="cf-row cf-row-2">
        <div className="cf-field">
          <label className="cf-label">Full Name</label>
          <input
            className="cf-input"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => handleInputChange(e, "name")}
            required
          />
        </div>
        <div className="cf-field">
          <label className="cf-label">Email Address</label>
          <input
            className="cf-input"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
            required
          />
        </div>
      </div>

      <div className="cf-row cf-row-2">
        <div className="cf-field">
          <label className="cf-label">City</label>
          <input
            className="cf-input"
            type="text"
            placeholder="New Delhi"
            value={formData.city}
            onChange={(e) => handleInputChange(e, "city")}
          />
        </div>
        <div className="cf-field">
          <label className="cf-label">WhatsApp Number</label>
          <div className="cf-phone-row">
            <div className="cf-dropdown-wrap">
              <Dropdown
                selectedCounty={selectedCounty}
                handleCountyChange={handleCountyChange}
              />
            </div>
            <input
              className="cf-input cf-phone-input"
              type="tel"
              placeholder="98765 43210"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange(e, "phoneNumber")}
            />
          </div>
        </div>
      </div>

      <div className="cf-field">
        <label className="cf-label">Message</label>
        <textarea
          className="cf-input cf-textarea"
          placeholder="Write your message here…"
          rows={5}
          onChange={(e) => handleInputChange(e, "message")}
        />
      </div>

      <button
        type="submit"
        className={`cf-submit ${submitted ? "cf-submit--done" : ""}`}
        disabled={submitted}
      >
        {btnText}
        {!submitted && (
          <svg className="cf-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </form>
  );
};

export default Form;
