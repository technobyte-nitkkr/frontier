import React from "react";
import "./contact.css";
import Form from "./Form";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaEnvelope className="contact-info-icon" />,
    label: "Email Us",
    value: "technobyte@nitkkr.ac.in",
    href: "mailto:technobyte@nitkkr.ac.in",
  },
  {
    icon: <FaMapMarkerAlt className="contact-info-icon" />,
    label: "Our Location",
    value: "NIT Kurukshetra, Haryana — 136 119",
    href: null,
  },
];

const socialLinks = [
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "https://www.instagram.com/technobyte_nitkkr/",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/technobyte-nitkkr/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/technobyte-nitkkr",
  },
];

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-body">
        {/* Left info panel */}
        <div className="contact-info-panel">
          <div className="contact-info-card">
            <h3 className="contact-info-heading">Reach Out Directly</h3>
            <p className="contact-info-desc">
              Drop us a message and our team will get back to you within 24 hours.
            </p>

            <ul className="contact-info-list">
              {contactDetails.map((item, i) => (
                <li key={i} className="contact-info-item">
                  {item.icon}
                  <div>
                    <span className="contact-info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact-info-value contact-link">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-info-value">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="contact-socials-row">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="contact-social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <div className="contact-form-panel">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
