import React from 'react';
import '../styles/hero.css'; 
// Keeping your exact video import path!
import heroVideo from '../assets/images/herovideo.mp4'; 

const Hero = () => {
  return (
    <section className="hero-container">
      {/* Background Video */}
      <video 
        className="hero-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay to make text readable */}
      <div className="hero-overlay"></div>

      {/* Hero Content / Text */}
      <div className="hero-content">
        <h1 className="hero-title">
          {/* Added specific classes to these spans */}
          <span className="title-word brand-name">VARKALA</span>
          <span className="title-word product-name">Coffee</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;