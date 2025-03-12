import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import emailjs from "emailjs-com"; // Import EmailJS
import "../styles/Enquiryform.css";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    whatsappNumber: "",
    address: "",
    inquiryType: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate fields
    if (!formData.firstName) {
      newErrors.firstName = "First name is required.";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.whatsappNumber) {
      newErrors.whatsappNumber = "WhatsApp number is required.";
    } else if (!validatePhone(formData.whatsappNumber)) {
      newErrors.whatsappNumber =
        "Invalid phone number. Must start with 6-9 and be 10 digits.";
    }
    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Send email using EmailJS with public key instead of user ID
    emailjs
      .send(
        "MumbaInfra_2022", // Replace with your EmailJS Service ID
        "Enquiry_Template2022", // Replace with your EmailJS Template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          whatsappNumber: formData.whatsappNumber,
          address: formData.address,
          inquiryType: formData.inquiryType,
          dateOfBirth: formData.dateOfBirth,
        },
        "n21bgENXtB721fJS_" // Replace with your public key (EmailJS Public Key)
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Form submitted successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            email: "",
            whatsappNumber: "",
            address: "",
            inquiryType: "",
          });
          navigate("/"); // Redirect to home page
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  // Handle go back button click
  const handleGoBack = () => {
    navigate("/"); // This will navigate the user back to the home page
  };

  return (
    <div className="enquiry-page">
      <h1 className="enquiry-title">Enquiry Form</h1>
      <form className="enquiry-form" onSubmit={handleSubmit}>
        {/* Form Fields (Same as before) */}
        <div className="form-group">
          <label>What are you looking for?</label>
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="1BHK">Buy 1BHK</option>
            <option value="2BHK">Buy 2BHK</option>
            <option value="1RK">Buy 1RK</option>
            <option value="invest">Invest in Real Estate</option>
            <option value="Loan">Loan</option>
          </select>
          {errors.inquiryType && <span className="error">{errors.inquiryType}</span>}
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>WhatsApp Number:</label>
          <input
            type="tel"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
          />
          {errors.whatsappNumber && (
            <span className="error">{errors.whatsappNumber}</span>
          )}
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Go back home button */}
      <button onClick={handleGoBack} className="back-button">
        Back
      </button>
    </div>
  );
};

export default Enquiry;





