import React, { useState, useEffect } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/TCBL_color_blocks.png";
import "./navbar.css";
import { Link } from "react-scroll";

function NavigationBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos <= 0 || currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
      <div className="navbar-container">
        <div>
          <img src={logo} alt="logo" className="logo-image" />
        </div>
        <div className="ml-auto">
          <span className="separator">|</span>
          <Link to="visit" duration={1000} smooth={true} className="nav-link">
            <span className="hover-underline-animation">VISIT</span>
          </Link>
          <span className="separator">|</span>
          <Link to="publications" duration={1000} smooth={true} className="nav-link">
            <span className="hover-underline-animation">PUBLICATIONS</span>
          </Link>
          <span className="separator">|</span>
          <Link to="about" smooth={true} duration={1000} className="nav-link">
            <span className="hover-underline-animation">ABOUT</span>
          </Link>
          <span className="separator">|</span>
          <Link to="donatePage" id="donateBtn">
            <span>DONATE</span>
          </Link>
        </div>
      </div>
  );
}

export default NavigationBar;
