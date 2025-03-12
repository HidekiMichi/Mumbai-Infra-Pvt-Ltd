import React from "react";
import "../styles/TestimonialCss.css";

const TestimonialCard = ({ user, comment, stars, img }) => (
  <div className="testimonial-card">
    {/* Speech Bubble */}
    <div className="testimonial-bubble">
      <p className="testimonial-comment">{comment}</p>
      <div className="testimonial-stars">
        {"⭐".repeat(stars)} {/* Render stars inside the bubble */}
      </div>
    </div>

    {/* User Avatar and Name */}
    <div className="testimonial-footer">
      <img className="testimonial-avatar" src={img} alt={`${user}'s avatar`} />
      <p className="testimonial-user">{user}</p>
    </div>
  </div>
);

export default TestimonialCard;



