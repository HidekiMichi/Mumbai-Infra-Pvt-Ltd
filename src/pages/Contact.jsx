import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Contactcss.css"; // Custom CSS file

const ContactComponent = () => {
  return (
    <div className="contact-container">
      <div className="contact-header" style={{ textAlign: "left" }}>
        <h6>Presence</h6>
        <h1>Reach Us</h1>
      </div>
      <div className="contact-rows">
        {/* First Row */}
        <div className="contact-row">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h4>Rabale Office Address</h4>
              <p>
                PLOT NO. PAP/R-194-197 OPP.GP PARSIK SHAHAKARI BANK, MIDC INDUSRIAL AREA,
                (RABALE EAST), NAVI MUMBAI.400708
              </p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <h4>Phone</h4>
              <p>8779018176</p>
              <p>9167860156</p>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Email</h4>
              <p>mumbainfrapvt.99@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="contact-row">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h4>Kasheli Office Address</h4>
              <p>
                SHOP NO.8 TO 12, BUILDING NO.6, SAWAPNA NAGRI, NEAR DIVINE SCHOOL, KASHELI, 
                THANE WEST, MUMBAI.400605
              </p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <h4>Phone</h4>
              <p>9167860156</p>
              <p>9136929492</p>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Email</h4>
              <p>mumbainfrapvt.99@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;



