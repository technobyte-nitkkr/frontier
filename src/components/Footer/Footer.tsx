import "./Footer.css";
import Link from "next/link";
import {
  FaGithub,
  FaFacebookSquare,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="footer-inner">
        {/* Brand column */}
        <div className="footer-brand">
          <img src="/TechnoLogo.png" alt="Technobyte" className="footer-logo" />
          <p className="footer-tagline">
            The official technical club of NIT Kurukshetra — driving innovation,
            one line of code at a time.
          </p>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/technobyte_nitkkr/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/techn0byte/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.linkedin.com/company/technobyte-nitkkr/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/technobyte-nitkkr"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/sih">SIH</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/#events">Events</Link></li>
            <li><Link href="/#sponsors">Sponsors</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact Us</h4>
          <ul className="footer-contact-list">
            <li>
              <FaEnvelope className="footer-contact-icon" />
              <a href="mailto:technobyte@nitkkr.ac.in">technobyte@nitkkr.ac.in</a>
            </li>
            <li>
              <FaMapMarkerAlt className="footer-contact-icon" />
              <span>NIT Kurukshetra, Haryana — 136 119</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {currentYear} Technobyte, NIT Kurukshetra. All rights reserved.</span>
        <span className="footer-made-with">Made with ❤️ by Technobyte</span>
      </div>
    </footer>
  );
}
