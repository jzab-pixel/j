import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import Charles from "../../images/charles.jpg"

function Homepage() {
  const navigate = useNavigate();

  return (
 
     <div  id="welcomeBox" style={{transform: "translate(50%, 10%)"}}>
      <img src={Charles} alt="charles" style={{width: "100%", marginBottom: "40px"}}/ >
        <div>
          Welcome to TCBL
        </div>
        <div className="visit-visitSectionText"style={{color:"#000"}}>
          The Tucson Center for Black Life is the world's largest museum, education, and research complex. We are a community of learning and an opener of doors. Join us on a voyage of discovery. Explore our vast digital resources and learn online.
        </div>
      </div>
  
  );
}

export default Homepage;
