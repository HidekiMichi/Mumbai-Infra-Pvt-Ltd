import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import { useNavigate } from "react-router-dom";
import "../styles/AboutCompanycss.css";
import whoweareimg from "../assets/whoweareimg.jpg";
import CompanyOverviewcover from "../assets/CompanyOverviewcover.jpg";
import OurVision from "../assets/OurVision.jpg";
import OurPhilosophy from "../assets/OurPhilosophy.jpg";
import bluepin from "../assets/placeholder.png";

// Custom pin icons
const pinIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Small pin icon URL (default red pin)
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const largePinIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Large red pin icon URL
  iconSize: [35, 55],
  iconAnchor: [17, 55],
});

const bluePinIcon = new Icon({
  iconUrl: bluepin, // Blue pin icon URL (use a blue version here)
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const largeBluePinIcon = new Icon({
  iconUrl: bluepin, // Larger blue pin icon URL
  iconSize: [35, 55],
  iconAnchor: [17, 55],
});

// Locations data
const locations = [
  { id: 1, name: "Mumba Infra Pvt.Ltd Rabale Office.", lat: 19.141941246381766, lng: 73.00721482580731 },
  { id: 2, name: "Mumba Infra Pvt.Ltd Kasheli Office.", lat: 19.238063076570057, lng: 73.00980010238983 },
  { id: 3, name: "Vakratunda Kasheli Thane", lat: 19.237651326999657, lng: 73.00707650063153 },
  { id: 4, name: "Mahakaya Kasheli Thane", lat: 19.237651326999657, lng: 73.00707650063153 },
  { id: 5, name: "Suryakoti Kasheli Thane", lat: 19.237651326999657, lng: 73.00707650063153 },
  { id: 6, name: "Kavya Shrushti Kasheli Thane", lat: 19.23630493488236, lng: 73.0073914708637 },
  { id: 7, name: "Vinayak Apartment Kasheli Thane", lat: 19.23630493488236, lng: 73.0073914708637 },
];

// Component to zoom and pan the map
const FlyToLocation = ({ lat, lng }) => {
  const map = useMap();
  map.flyTo([lat, lng], 14, { duration: 1.5 });
  return null;
};

const AboutTheCompany = () => {
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState({});
  const [activeLocation, setActiveLocation] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const contentSections = [
    {
      id: 1,
      image: whoweareimg,
      title: "Who We Are",
      description: (
        <>
          Established in <strong>2022</strong>, <strong>Mumba Infra Pvt. Ltd.</strong> has emerged as a trusted name in the real estate industry. Over the years, we have successfully delivered <strong>25+</strong> projects, earning the trust of our valued clients.
          <br /><br />
          With a strong foothold in the thriving regions of <strong>Navi Mumbai</strong> and <strong>New Thane</strong>, we have built a reputation for delivering high-quality, innovative, and sustainable real estate solutions. Our commitment to excellence and a customer-centric approach has made us a preferred choice for individuals and families seeking their dream homes.
          <br /><br />
          At <strong>Mumba Infra Pvt. Ltd.</strong>, we are not just building properties; we are crafting spaces where dreams are nurtured, and lives are transformed. Our dedication to delivering value, trust, and innovation drives everything we do, ensuring that we remain a cornerstone in the communities we serve.
        </>
      ),
    },
    
    {
      id: 2,
      image: OurVision,
      title: "Our Vision",
      description: (
        <>
          Our vision is to <strong>empower individuals from the middle-class community to achieve the dream of owning their first home</strong>. We are dedicated to supporting customers who can manage a monthly installment of <strong>₹10,000 to ₹15,000</strong> and afford a down payment of just <strong>10% of the property value</strong>.
          <br /><br />
          Our goal is to provide <strong>affordable housing solutions</strong> for individuals and families living on rent, helping them transition to homeownership with budget-friendly options in the range of <strong>₹20 to ₹25 lakhs</strong>.
          <br /><br />
          We aim to guide our customers—such as <strong>auto drivers, painters, freelancers, electricians, housemaids, delivery partners, and drivers</strong>—through the process of purchasing a home legally and affordably. Recognizing the challenges faced by individuals without a stable or formal source of income, we work to <strong>facilitate home loans</strong> for those who are willing and committed to making repayments, enabling them to secure a brighter and more secure future.
          <br /><br />
          At the core of our mission is the belief that <strong>everyone deserves a place to call their own</strong>, and we are here to make that dream a reality for the hardworking middle-class community.
        </>
      ),
    },
    
    {
      id: 3,
      image: OurPhilosophy,
      title: "Our Philosophy",
      description: (
        <>
          At the core of our philosophy is the unwavering belief that <strong>owning a home is a fundamental right</strong>, not a privilege. We are inspired by the principle, <strong>"एक तरी स्वतःच घर असावं"</strong> (<strong>Everyone deserves at least one home to call their own</strong>), which guides us in every step of our journey.
          <br /><br />
          We aim to go beyond conventional housing solutions by <strong>prioritizing inclusivity and accessibility</strong>. Our philosophy is centered on bridging the gap between aspirations and affordability, ensuring that even those with informal incomes or modest financial means can achieve their dream of homeownership.
          <br /><br />
          We recognize the struggles of individuals from all walks of life—<strong>self-employed professionals, gig workers, artisans, and service providers</strong>—and focus on offering <strong>tailored guidance and support</strong> through the often complex process of buying a home. By simplifying legal, financial, and technical aspects, we strive to create a seamless and empowering experience.
          <br /><br />
          Our approach is rooted in empathy and innovation. We are committed to building more than just homes; we create <strong>opportunities for stability, growth, and dignity</strong>. Every family we serve becomes part of a larger vision to transform lives and strengthen communities.
          <br /><br />
          At its heart, our philosophy is about fostering hope, <strong>turning challenges into opportunities</strong>, and paving the way for a future where <strong>homeownership is not a distant dream but a tangible reality</strong>. We are proud to stand by those who work tirelessly to achieve this milestone and to help them take the first step toward a better tomorrow.
        </>
      ),
    }
    
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const rows = document.querySelectorAll(".content-row");
    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-company">
      {/* Top Section */}
      <div
        className="top-section"
        style={{ backgroundImage: `url(${CompanyOverviewcover})` }}
      >
        <h1 className="company-overview">Company Overview</h1>
      </div>

      {/* Content Section */}
      <div className="content-sections">
        {contentSections.map((section, index) => (
          <div
            key={section.id}
            data-id={section.id}
            className={`content-row ${
              index % 2 === 0 ? "left" : "right"
            } ${visibleSections[section.id] ? "animate" : ""}`}
          >
            <div className="image-container">
              <img src={section.image} alt={section.title} />
            </div>
            <div className="text-container">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Map Section */}
      <div className="map-section">
        <h2>Our Presence</h2>
        <div className="map-container">
          <div className="location-list">
            <ul>
              {locations.map((location) => (
                <li
                  key={location.id}
                  className={activeLocation?.id === location.id ? "active" : ""}
                  onClick={() => setActiveLocation(location)}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  {location.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="interactive-map">
            <MapContainer
              center={[19.0760, 72.8777]} // Mumbai coordinates
              zoom={10}
              className="Map"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
              {activeLocation && (
                <FlyToLocation
                  lat={activeLocation.lat}
                  lng={activeLocation.lng}
                />
              )}
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  position={[location.lat, location.lng]}
                  icon={
                    location.id >= 3 && location.id <= 7 // If the location ID is between 3 and 6
                      ? (hoveredLocation === location.id || activeLocation?.id === location.id)
                        ? largeBluePinIcon // Larger blue pin when hovered or active
                        : bluePinIcon // Normal blue pin
                      : (hoveredLocation === location.id || activeLocation?.id === location.id)
                      ? largePinIcon // Larger red pin when hovered or active
                      : pinIcon // Normal red pin
                  }
                  eventHandlers={{
                    mouseover: () => setHoveredLocation(location.id),
                    mouseout: () => setHoveredLocation(null),
                  }}
                >
                  <Popup>{location.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="back-button-div">
        <button className="back-btn" onClick={() => navigate("/about")}>
          Back to About
        </button>
      </div>
    </div>
  );
};

export default AboutTheCompany;





