import React from "react";
import "../styles/TeamCard.css";

const TeamCard = ({ imageUrl, name, role, onReadMore }) => {
  return (
    <div className="team-card-horizontal">
      <img src={imageUrl} alt={name} className="team-card-img-horizontal" />
      <div className="team-card-info">
        <h3>{name}</h3>
        <p className="team-role">{role}</p>
        <button className="read-more-btn" onClick={onReadMore}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default TeamCard;

