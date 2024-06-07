import "./Navbar.css";
import logo from "/TechnoLogo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar({  }) {
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth > 900);

  useEffect(() => {
    const updateIsMenuOpen = () => {
      setIsMenuOpen(window.innerWidth > 900);
    };
    updateIsMenuOpen();
    window.addEventListener("resize", updateIsMenuOpen);
    return () => {
      window.removeEventListener("resize", updateIsMenuOpen);
    };
  }, []);

  const toggleMenu = () => {
    if(window.innerWidth < 900)
      setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      {/* <TimeLine show={isOpen} onClickOutside={closeOverlay} /> */}
      <Link to="/" className="logoLink">
        <img src={logo} alt="Technobyte" className="tb-logo" />
      </Link>

      <div href="#" className="toggle-button" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div
        className="navbar-links"
        id="toToggle"
        onClick={toggleMenu}
        style={{ visibility: isMenuOpen ? "visible" : "hidden" }}
      >
        <ul className="navMenus">
          <li className="navbarItem">
            <Link to={{ pathname: "/", hash: "#events" }}>
              <span>EVENTS</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link to={{ pathname: "/", hash: "#Gallery" }}>
              <span>Gallery</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link to={{ pathname: "/", hash: "#sponsors" }}>
              <span>SPONSORS</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link to={{ pathname: "/", hash: "#lectures" }}>
              <span>LECTURES</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link to={{ pathname: "/", hash: "#about" }}>
              <span>ABOUT</span>
            </Link>
          </li>
          <li className="navbarItem">
            <a href="/team">
              <span>TEAM</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
