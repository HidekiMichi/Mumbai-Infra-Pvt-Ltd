import React from "react";
import "../styles/TeamModal.css";

const TeamModal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn-teamModal" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default TeamModal;
