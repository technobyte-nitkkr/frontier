"use client";

import "./Navbar.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

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
      <Link href="/" className="logoLink">
        <img src="/TechnoLogo.png" alt="Technobyte" className="tb-logo" />
      </Link>

      <div className="toggle-button" onClick={toggleMenu}>
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
            <Link href="/sih">
              <span>SIH</span><sup className="text-red-600">new</sup>
            </Link>
          </li>
          <li className="navbarItem">
            <Link href="/#events">
              <span>EVENTS</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link href="/#Gallery">
              <span>Gallery</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link href="/#sponsors">
              <span>SPONSORS</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link href="/#lectures">
              <span>LECTURES</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link href="/#about">
              <span>ABOUT</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link href="/team">
              <span>TEAM</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link href="/dev">
              <span>Dev-Team</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
