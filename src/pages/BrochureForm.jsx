import React, { useState } from "react";
import "../styles/Brochurecss.css";

const BrochureForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, phone } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    const newErrors = {};
    if (!emailRegex.test(email)) newErrors.email = "Invalid email format.";
    if (!phoneRegex.test(phone)) newErrors.phone = "Invalid phone number.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData); // Delegate submission to the parent
  };

  return (
    <form className="brochure-form" onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BrochureForm;

