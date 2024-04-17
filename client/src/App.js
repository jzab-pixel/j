import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";
import Visit from "./pages/visit/visit";
import Publications from "./pages/publications/publications";
import About from "./pages/about/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Link} from 'react-scroll';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import DonatePopUp from "./components/donate/donate";
import ScrollToTopButton from "./components/scrollToTop/scroll";
// function RoutesWithTransition() {
//   let location = useLocation();
  
//   return (
//           // homepage
//           <Link to="home" smooth={true} duration></Link>
//           <Link path="/Visit" element={<Visit />} />
//           <Link path="/Publications" element={<Publications />} />
//           <Link path="/About" element={<About />} />
//           {/* <Route path="/Authors" element={<Authors />} /> */}
//           {/* <Route path="/Bibliography" element={<Bibliography />} /> */}
//           {/* <Route path="/About" element={<About />} /> */}
//   );
// }

function App() {
  const [showDonatePopUp, setShowDonatePopUp] = useState(false);

  useEffect(() => {
    // Show donate pop-up after 5 seconds
    const timer = setTimeout(() => {
      setShowDonatePopUp(true);
    }, 2000);

    // Clean up function to clear the timer if component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(100, 0, 0)" }}>
     
        <Navbar />
        {showDonatePopUp && <DonatePopUp />}
        <ScrollToTopButton />
        <div id="home">
          <Homepage/>
        </div>
        <div id="visit">
          <Visit/>
        </div>
        <div id="publications">
          <Publications/>
        </div>
        <div id="about">
         <About/>
        </div>
    </div>
  );
}

export default App;
