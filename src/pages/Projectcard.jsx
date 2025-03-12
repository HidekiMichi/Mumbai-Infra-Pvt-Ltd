import React from "react";
import "../styles/projectcss.css";

const ProjectCard = ({ image, title, description, location, onDownloadBrochure }) => (
  <div className="project-card">
    <img src={image} alt={title} className="project-image" />
    <div className="project-details">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onDownloadBrochure} className="brochure-link">
        Download Brochure
      </button>
      <p className="project-location">{location}</p>
    </div>
  </div>
);

export default ProjectCard;

