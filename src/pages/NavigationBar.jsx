import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navigation.css";
import logo from "../assets/Final-LogoFINAL.png";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // React Router's navigate hook

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleEnquiryNavigation = () => {
    setIsMenuOpen(false); // Close menu if open
    navigate("/enquiry"); // Navigate to the enquiry page
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-brand">
          <img
            src={logo}
            alt="Logo"
            height="150px"
            className="logo"
          />
        </div>
        <button 
          className="burger-menu" 
          onClick={toggleMenu} 
          aria-expanded={isMenuOpen} 
          aria-label="Toggle navigation">
          &#9776;
        </button>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>
            Our Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/TestimonialGallery" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>
            Gallery
          </NavLink>
          <span
            className="nav-link enquiry-btn"
            onClick={handleEnquiryNavigation}
          >
            Enquiry Now
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default NavigationBar;



