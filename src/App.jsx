import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About"; // Import the About component
import NavigationBar from "./pages/NavigationBar"; // Import the NavigationBar
import AboutTheCompany from "./pages/AboutTheCompany";
import Enquiry from "./pages/Enquiry";
import ProjectGallery from"./pages/ProjectGallery";
import Contact from "./pages/Contact";
import Gallery from "./pages/TestimonialGallery";
import TeamGallery from "./pages/TeamGallery";
function App() {
  return (
    <Router>
      <NavigationBar /> {/* Navbar will remain constant across all routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-the-company" element={<AboutTheCompany />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/projects" element={<ProjectGallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/TestimonialGallery" element={<Gallery/>}/>
        <Route path="/TeamGallery" element ={<TeamGallery/>}/>
      </Routes>
    </Router>
  );
}

export default App;

