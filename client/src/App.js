import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { TransitionGroup, CSSTransition, useLocation } from "react-transition-group";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";
import Visit from "./pages/visit/visit";
import Publications from "./pages/publications/publications";
import About from "./pages/about/about";
import DonatePopUp from "./components/donate/donate";
import ScrollToTopButton from "./components/scrollToTop/scroll";
import "./App.css";

function RoutesWithTransition() {
  let location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/Visit" element={<Visit />} />
          <Route path="/Publications" element={<Publications />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  const [showDonatePopUp, setShowDonatePopUp] = useState(false);
  const [backEndData, setBackEndData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((data) => setBackEndData(data))
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  }, []);

  useEffect(() => {
    // Show donate pop-up after 5 seconds
    const timer = setTimeout(() => {
      setShowDonatePopUp(true);
    }, 2000);

    // Clean up function to clear the timer if component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []);

  // Ensure path resets to "/" on every update
  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div style={{ backgroundColor: "rgb(100, 0, 0)" }}>
      <p>{backEndData.test}</p>
      <BrowserRouter>
        <Navbar />
        <RoutesWithTransition />
        {showDonatePopUp && <DonatePopUp />}
        <ScrollToTopButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
