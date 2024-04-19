import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";
import Visit from "./pages/visit/visit";
import Publications from "./pages/publications/publications";
import PublicationPage from "./pages/publicationInfoPage/publicationPage";
import About from "./pages/about/about";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
          <Router>
            <Route exact path="/" component={PublicationPage} /> {/* Route for PublicationPage */}
            <Route path="/publications" component={Publications} /> {/* Route for Publications */}
          </Router>
        </div>
        <div id="about">
         <About/>
        </div>
    </div>
  );
}

export default App;
