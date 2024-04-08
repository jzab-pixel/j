import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/TCBL_color_blocks.png";
import "./navbar.css";
import { Link } from "react-router-dom";

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
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={`Navigation ${visible ? "" : "hidden"}`}
      style={{ backgroundColor: "#C0C0C0" }}
    >
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="logo">
          <img src={logo} alt="logo" className="logo-image" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <span className="separator">|</span>
          <Nav.Link as={Link} to="/Visit" className="nav-link">
            <span className="hover-underline-animation">VISIT</span>
          </Nav.Link>
          <span className="separator">|</span>
          <Nav.Link as={Link} to="/Publications" className="nav-link">
            <span className="hover-underline-animation">PUBLICATIONS</span>
          </Nav.Link>
          <span className="separator">|</span>
          <Nav.Link as={Link} to="/About" className="nav-link">
            <span className="hover-underline-animation">ABOUT</span>
          </Nav.Link>
          <span className="separator">|</span>
          <Nav.Link as={Link} to="/Donate" id="donateBtn">
            <span>DONATE</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
