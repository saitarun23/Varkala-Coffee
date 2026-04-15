import React from 'react';
import '../styles/experience.css';
import { MapPin, Clock, Coffee } from 'lucide-react';

// Import local images for your cafe/roastery space
import cafeInterior from '../assets/images/product1.jpeg'; 
import coffeeDetail from '../assets/images/product2.jpeg'; 

const Experience = () => {
  return (
    <section className="experience-section">
      
      {/* Infinite Scrolling Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>FRESHLY ROASTED</span>
          <span className="marquee-dot">•</span>
          <span>NATURALLY LEAVENED</span>
          <span className="marquee-dot">•</span>
          <span>SINGLE ORIGIN CACAO</span>
          <span className="marquee-dot">•</span>
          <span>FRESHLY ROASTED</span>
          <span className="marquee-dot">•</span>
          <span>NATURALLY LEAVENED</span>
          <span className="marquee-dot">•</span>
          <span>SINGLE ORIGIN CACAO</span>
          <span className="marquee-dot">•</span>
        </div>
      </div>

      <div className="experience-container">
        
        {/* Left Side: Text and Location Details */}
        <div className="experience-text-content">
          <h2 className="experience-title">Step Into<br/>Our World</h2>
          <p className="experience-description">
            Experience the sensory journey of our in-house roasting process, the warmth of our bakehouse ovens, and the meticulous craft of our baristas in our flagship sanctuary.
          </p>
          
          <div className="location-details">
            <div className="detail-item">
              <MapPin size={24} className="detail-icon" />
              <div>
                <h4 className="detail-heading">Location</h4>
                <p className="detail-text">124 Heritage Lane, Vizag<br/>India 695141</p>
              </div>
            </div>
            
            <div className="detail-item">
              <Clock size={24} className="detail-icon" />
              <div>
                <h4 className="detail-heading">Hours</h4>
                <p className="detail-text">Mon - Sun: 7:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>

          <button className="visit-btn">Get Directions</button>
        </div>

        {/* Right Side: Overlapping Image Composition */}
        <div className="experience-visuals">
          
          {/* Main Large Image */}
          <div className="visual-main">
            <img src={cafeInterior} alt="Cafe Interior" className="exp-img-main" />
          </div>

          {/* Overlapping Smaller Detail Image */}
          <div className="visual-overlap">
            <img src={coffeeDetail} alt="Coffee Detail" className="exp-img-overlap" />
          </div>

          {/* Rotating Quality Stamp (Pure CSS) */}
          <div className="rotating-stamp">
            <svg viewBox="0 0 100 100" width="120" height="120">
              <defs>
                <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text fontSize="7" fontWeight="bold" letterSpacing="2.5" fill="#FDFDF8">
                <textPath href="#circle">
                  • QUALITY GUARANTEED • ROASTED DAILY 
                </textPath>
              </text>
            </svg>
            <Coffee className="stamp-center-icon" size={40} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;