import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs
import ProjectCard from "../pages/Projectcard";
import Modal from "../pages/Modal";
import BrochureForm from "../pages/BrochureForm";
import ProjectItems from "../pages/ProjectItems";
import "../styles/ProjectGalleryCss.css";
import "../styles/Projectcss.css";

const ProjectGallery = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProject(null);
  };

  const handleFormSubmit = (formData) => {
    emailjs
      .send(
        "MumbaInfra_2022", // Replace with your EmailJS service ID
        "Mumba_Infra_2022", // Replace with your EmailJS template ID
        { ...formData, project: selectedProject.title },
        "n21bgENXtB721fJS_" // Replace with your EmailJS public key
      )
      .then(() => {
        alert("Form submitted successfully!");
        closeModal();

        // Trigger brochure download
        const link = document.createElement("a");
        link.href = selectedProject.brochureLink;
        link.download = `${selectedProject.title} Brochure.pdf`;
        link.click();
      })
      .catch((error) => console.error("Failed to send email:", error));
  };

  return (
    <div className="our-projects">
      <h2>Our Projects</h2>
      <div className="project-gallery">
        {ProjectItems.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onDownloadBrochure={() => openModal(project)}
          />
        ))}
      </div>

      {isModalVisible && (
        <Modal isVisible={isModalVisible} onClose={closeModal}>
          <BrochureForm onSubmit={handleFormSubmit} />
        </Modal>
      )}
    </div>
  );
};

export default ProjectGallery;
