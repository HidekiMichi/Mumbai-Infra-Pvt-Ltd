import React, { useState } from "react";
import TeamCard from "../pages/Teamcard"; 
import TeamMemberList from "../pages/Teammemberlist"; 
import TeamModal from "../pages/TeamModal"; 
import "../styles/TeamGallery.css";

const TeamGallery = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = (member) => {
    setSelectedMember(member);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedMember(null);
    setModalVisible(false);
  };

  return (
    <div className="team-gallery">
      <h2>Our Team</h2>
      <div className="team-gallery-container">
        {TeamMemberList.map((member, index) => (
          <TeamCard
            key={index}
            {...member}
            onReadMore={() => openModal(member)}
          />
        ))}
      </div>

      {isModalVisible && selectedMember && (
        <TeamModal isVisible={isModalVisible} onClose={closeModal}>
          <div className="team-modal">
            <div className="modal-image">
              <img
                src={selectedMember.imageUrl}
                alt={selectedMember.name}
                className="modal-img"
              />
            </div>
            <div className="modal-content">
              <h3>{selectedMember.name}</h3>
              <p className="modal-role">{selectedMember.role}</p>
              <p className="modal-description">{selectedMember.description}</p>
            </div>
          </div>
        </TeamModal>
      )}
    </div>
  );
};

export default TeamGallery;

