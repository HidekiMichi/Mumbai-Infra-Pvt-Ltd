import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Aboutcss.css";
import backgroundImage from "../assets/Backgroundimage.jpg";

const About = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClose = () => {
    navigate("/"); // Navigate back to the LandingPage ("/")
  };

  const handleAboutTheCompanyClick = () => {
    navigate("/about-the-company"); // Navigate to the AboutTheCompany component
  };

  const handleTeamClick = () => {
    navigate("/TeamGallery"); // Navigate to the Team component
  };


  return (
    <div className="about-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="background-overlay">
        <div className="content">
          <div className="item" onClick={handleAboutTheCompanyClick} style={{ cursor: "pointer" }}>
            <h2>About The Company</h2>
            <div className="line"></div>
          </div>
          <div className="item">
            <h2>Journey</h2>
            <div className="line"></div>
          </div>
          <div className="item"  onClick={handleTeamClick} style={{ cursor: "pointer" }}>
            <h2>Team</h2>
            <div className="line"></div>
          </div>
        </div>
        <button className="close-btn" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default About;


