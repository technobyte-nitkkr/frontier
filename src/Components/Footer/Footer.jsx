import "./Footer.css";
import logo from "/assets/technobyte.svg";
import {
  FaGithub,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTwitch,
  FaTiktok,
  FaCopyright,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="foot flex flex-col py-6">
          <div className="ul1 text-center pb-4">
            Developed with ❤️ by Technobyte
          </div>
          <div className="footer-menu">
            <ul className="flex justify-evenly max-w-3xl m-auto">
              <li>
                <a href="https://www.instagram.com/technobyte_nitkkr/">
                  <FaInstagram size={"1.3em"} className="icons" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/techn0byte/">
                  <FaFacebookSquare size={"1.3em"} className="icons" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/technobyte-nitkkr/">
                  <FaLinkedinIn size={"1.3em"} className="icons" />
                </a>
              </li>
              <li>
                <a href="https://github.com/technobyte-nitkkr">
                  <FaGithub size={"1.3em"} className="icons" />
                </a>
              </li>
            </ul>
          </div>
      </footer>
    </>
  );
}
