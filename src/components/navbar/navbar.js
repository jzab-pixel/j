import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/TCBL_color_blocks.png";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="Navigation"
      /*#785e4b*/
      style={{ backgroundColor: "#C0C0C0" , position: "sticky", top: "0"}}  
    >
      <Container className="navbar-container">
    
          <Navbar.Brand as={Link} to="/" className="logo">
            <img src={logo} alt="logo" className="logo-image" />
          </Navbar.Brand>
     
      
          <Nav className="ml-auto">
           
            <Nav.Link as={Link} to="/Visit" className="nav-link">
              <span className="hover-underline-animation">
                VISIT
              </span>
            </Nav.Link>
          
            <Nav.Link as={Link} to="/Publications" className="nav-link">
              <span className="hover-underline-animation">
                PUBLICATIONS
              </span>
            </Nav.Link>
            
            {/*
            <Nav.Link as={Link} to="/Learn" className="nav-link">
              <span className="hover-underline-animation">
                LEARN
              </span>
            </Nav.Link>
            <Nav.Link as={Link} to="/GetInvolved" className="nav-link">
              <span className="hover-underline-animation">
                GET INVOLVED
              </span>
            </Nav.Link>
            
            <Nav.Link as={Link} to="/Support" className="nav-link">
              <span className="hover-underline-animation">
                SUPPORT
              </span>
            </Nav.Link>*/}
            <Nav.Link as={Link} to="/About" className="nav-link">
              <span className="hover-underline-animation">
                ABOUT
              </span>
            </Nav.Link>
            <Nav.Link as={Link} to="/Donate" id="donateBtn">
              <span>
                DONATE
              </span>
            </Nav.Link>
          </Nav>
     
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
