import React, { useRef, useState } from "react";
import Slider from "react-slick";
import emailjs from "emailjs-com"; // Import emailjs
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "../pages/Projectcard";
import Modal from "../pages/Modal";
import BrochureForm from "../pages/BrochureForm";
import ProjectItems from "../pages/ProjectItems";
import "../styles/Projectcss.css";

const Project = () => {
  const sliderRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
        },
      },
    ],
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
    setAutoplay(false);
    sliderRef.current.slickPause();// to pause the slider
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProject(null);
    setAutoplay(true);
    sliderRef.current.slickPlay(); // to resume the slider
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
      <Slider ref={sliderRef} {...settings} className="project-slider">
        {ProjectItems.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onDownloadBrochure={() => openModal(project)}
          />
        ))}
      </Slider>

      {isModalVisible && (
        <Modal isVisible={isModalVisible} onClose={closeModal}>
          <BrochureForm onSubmit={handleFormSubmit} />
        </Modal>
      )}
    </div>
  );
};

export default Project;





