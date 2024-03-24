import React, { useState, useEffect } from "react";
import './donate.css'
import defPic from '../../images/def.jpg'
import { FaDonate } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

function DonatePopUp() {
    const [showDonateWindow, setShowDonateWindow] = useState(true);

    useEffect(() => {
      
        setShowDonateWindow(true);
        document.body.style.overflow = "hidden"; // Disable scrolling
     
    
        // Clean up function to clear the timer if component unmounts before the timeout
        return () => {
          clearTimeout(timer);
          document.body.style.overflow = ""; // Re-enable scrolling when component unmounts
        };
      }, []);
    
      const handleClose = () => {
        setShowDonateWindow(false);
        document.body.style.overflow = ""; // Re-enable scrolling when pop-up is closed
      };



    return showDonateWindow ? (
        <div id="donateWindow">
            <div id="donateBox">
                <button id="closePopUp" onClick={handleClose}><IoCloseSharp /></button>

                <img src={defPic} alt="Default" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum metus eget velit fermentum, sit amet cursus felis vehicula.
                </p>
                <button id="popUpDonateBtn" onClick={() => {alert("THANKS FOR THE DONATION")}}>
                    <FaDonate style={{
                        marginRight: "5px"
                    }} />
                    DONATE
                    <FaDonate style={{
                        marginLeft: "5px"
                    }} />
                </button>
            </div>
        </div>
    ) : null;
}

export default DonatePopUp;
