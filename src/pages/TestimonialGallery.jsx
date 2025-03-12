import React from 'react';
import '../styles/TestimonialGalleryCss.css';
import TestimonialItems from '../pages/TestimonialItems';
import TestimonialCard from '../pages/TestimonialCard';
import Story from '../assets/Customer_story.mp4';
import story2 from '../assets/Customer_Story_2.mp4';

const videos = [
  {
    title: 'Customer Experience - Rakesh Bitile',
    url: Story,
  },
  {
    title: 'Customer Experience - Akshata Bonkar',
    url: story2,
  },
];

const TestimonialGallery = () => {
  return (
    <div className="testimonial-gallery">
      <h2>Our Customer</h2>
      <div className="testimonial-gallery-container">
        {TestimonialItems.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img 
              className="testimonial-avatar" 
              src={testimonial.img} 
              alt={`${testimonial.user}'s avatar`} 
              style={{ width: '300px', height: '350px', objectFit: 'cover', borderRadius: '10px' }}
            />
            <p className="testimonial-user">{testimonial.user}</p>
          </div>
        ))}
      </div>

      <h2>Watch Customer Stories</h2>
      <div className="video-container">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <iframe
              src={video.url}
              title={video.title}
              className="testimonial-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialGallery;
