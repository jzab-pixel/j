import React from "react";
import "./about.css";
import { CloseButton } from "react-bootstrap";
import defPic from '../../images/def.jpg'
import Missions from "../../components/missions/missions";

function About() {
  return (
    <div style={{ width: "80vw",marginTop: "1rem", marginLeft:"auto", marginRight:"auto"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          margin: "0px",
        }}
      >
        <div className="about-aboutSection" style={{
          padding: "1rem",
          color:"#000",

          marginBottom: "1rem"

        }}>
          <div className="about-aboutSectionTitle">About</div>
          <div className="about-aboutSectionText">
          In the late 90’s Charles Kendrick and his friend Shad Blair combined their extensive collections of historical items and put them on display, free of charge and embarked on an aspiration to open the very 1st Afro American Museum in Tucson, AZ .
            <br />
            <br />
            The Museum is dedicated to the discovery, preservation, interpretation and sharing of historical and cultural experiences of African Americans for present and future generations.
            <br />
            <br />
            Charles Kendrick  is passionate for telling the story of Black cowboys and Buffalo Soldiers but also broader than this with interests in the stories of all those early Blacks who came west and performed as miners, soldiers, homesteaders, ranchers, blacksmiths, schoolteachers, lawmen, and every other profession needed to build up the West.
            <br />
            <br />
            Our Museum contains imagery that is not often in history books and contains historic stories that must be told . Our aim is to  tell the American story through the lens of African American history and culture. 
          </div>
        </div>
        <div>
          <div className="about-aboutSection" style={{
          padding: "1rem",
          color:"#000",
          marginBottom: "1rem"

        }}>
            <div className="about-aboutSectionText">
              <div className="about-aboutSectionTitle">Mission</div>
              Our Mission for The Tucson Center for Black Life is to re- create and sustain a cultural center and museum that is dedicated to advancing a comprehensive understanding of Black life in the Southwest; past, present, and future. 
            </div>
            <div>
              {/* <img src={defPic} id="aboutPic"/> */}
              <Missions />
            </div>
          </div>
        </div>
      </div>
       <div
        className="about-aboutSectionBottom" style={{
          padding: "1rem",
          color:"#000 !important",
         
        }}
      >
        <div className="about-aboutSectionText">
          <div className="about-aboutSectionTitle">
            A Timeline of the Platforms Development
          </div>
          <div style={{ fontWeight: "bold" }}>2013</div>
          Black digital religion scholar Erika Gault was wrapping up her
          dissertation on the religious lives of gospel rappers when a committee
          member, Dr. Jason Young, suggested to her that her study of research
          participants' online religious lives was "a real thing" and she should
          explore this further as a book project. That work became Networking
          the Black Church: Digital Black Religion and Hip Hop (2022).
          <br />
          <br />
          <div style={{ fontWeight: "bold" }}>2013-2020</div> An explosion of
          Black digital religious communities like Danyelle Thomas' Unfit
          Christian and Melva Sampson’s Pink Robe Chronicle took place. These
          communities attracted large numbers of Black adherents. When the
          pandemic began, they continued to provide guidance to their followers
          and an increasing number of new followers displaced by the pandemic
          from their physically located religious communities. Digital faith
          leaders more generally experienced increased engagement with their
          digital content. The role of such digital Black communities and faith
          leaders in the physical to digital migration that occurred in Black
          faith communities during this time had yet to be fully captured in the
          literature.
          <br />
          <br />
          <div style={{ fontWeight: "bold" }}>June 2020</div> At the height of
          the pandemic and in wake of the tragic murders of Black men and women
          like George Floyd, Ahmaud Arbery, and Breonna Taylor and subsequent
          protests a digital event was held to discuss what this all meant and
          what role Black religion might play in mobilizing the prophetic voices
          among us. That event, titled "Gathering in the Moment: Mobilizing the
          Digital Black Church's Prophetic Witness" was hosted by Dr. Erika
          Gault and sponsored by the{" "}
          <a className="hover-underline-animation " href="https://digitalhumanities.arizona.edu" target="_blank">
            {" "}
            Center for Digital Humanities
          </a>{" "}
          (Dr. Bryan Carter) and the{" "}
          <a className="hover-underline-animation " href="https://fteleaders.org" target="_blank">
            {" "}
            Forum for Theological Exploration
          </a>{" "}
          (Dr. Darlene Hutto). It drew over 11,000 viewers and sparked a
          conversation among participants regarding next steps for the study of
          digital Black religion.
          <br />
          <br />
          <div style={{ fontWeight: "bold" }}>2021-2023</div> Louisville
          Institute provided funding through the Project Grant for Researchers
          to Associate Professor and Principal Investigator Dr. Erika Gault to
          lead a national study of the digital religious beliefs and practices
          of Black Americans. NEH Advancing Digital Humanities Initiative
          provided another $50,000 to develop a platform and bring scholars and
          practitioners together to create tools and guidance regarding the
          platform’s development.
        </div>
      </div>
      <br/>
        <br/>
    </div>
  );
}

export default About;
