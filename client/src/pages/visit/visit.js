import React from "react";
import "./visit.css";
import defPic from '../../images/def.jpg'

function VisitPicSection(){
  return (
    <div id="visitPicBox">
      <img src={defPic} alt="defPic"/>
      <div id="visitDesc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non lacus quam. Integer vel magna nec eros viverra fringilla. Ut ultricies felis sed nibh placerat, non dictum justo scelerisque. Sed euismod, nisi eu tempus commodo, elit mauris lacinia velit, eget vehicula nisi dolor ut nisi. Duis nec lectus convallis, laoreet ipsum id, finibus mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet tortor at quam sodales vehicula. Vivamus quis tellus ut ex efficitur condimentum id eu turpis. Proin vel risus at justo ullamcorper congue. Mauris eget tincidunt velit. Nulla in metus vitae odio vestibulum efficitur non nec ligula. Donec in aliquam purus. Nunc scelerisque magna eu libero tincidunt, non luctus tortor ultricies. Vivamus id elit et leo congue iaculis at vel nisi.

Suspendisse vitae semper dui, vel pellentesque risus. Vivamus tincidunt varius eros, in condimentum nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin et convallis magna, nec efficitur libero. Nullam congue, justo sed varius commodo, tortor

      </div>
    </div>
  );
}

// Component for the Visit section
function HoursSection() {  
    return (
      <div className="visit-visitSection" style={{padding: "1rem", backgroundColor: "#eee"}}>
        <div className="visit-visitSectionTitle">Hours & Location</div>
        <div className="visit-visitSectionText">
        1834 S. Park Ave<br></br>
        Tucson, AZ 85713 <br></br>
        10 a.m. to 5:30 p.m. daily<br></br>
        Closed Dec. 25
        </div>
      </div>

    );
  }

// Component for the Elements section
function EntrySection() {  
    return (
      <div className="visit-visitSection" style={{padding: "1rem", backgroundColor: "#eee"}}>
        <div className="visit-visitSectionText">
          <div className="visit-visitSectionTitle">Entry</div>
          <div style={{ fontWeight: "bold" }}>Admission</div>
            Admission is free of charge at all locations except the Cooper Hewitt in New York City.
            Most museums are open every day of the year except December 25. The Cooper Hewitt in New York is open every day except Thanksgiving and December 25.

            <div style={{ fontWeight: "bold" }}>Passes/Tickets</div>
            The museum does not require passes or tickets for entry.
        </div>
      </div>
    );
  }
  
  function Visit() {
    return (
      <div id="visitPage">
        <div>
          <div>
            <VisitPicSection />
          </div>
          <div style={{display:"flex", flexDirection:"row", width:"63%", gap:"40px"}}>
            <HoursSection />
            <EntrySection />
          </div>
        </div>
      </div>
    );
  }
  
  export default Visit;