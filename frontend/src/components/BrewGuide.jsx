import React, { useState } from 'react';
import '../styles/brewguide.css';
import { Thermometer, Clock, Droplets, Settings } from 'lucide-react';

// Import your local images for the brewing methods
import espressoImg from '../assets/images/product1.jpeg'; 
import pouroverImg from '../assets/images/product2.jpeg';
import coldbrewImg from '../assets/images/product3.jpeg';

const BrewGuide = () => {
  // State to track which brewing method is currently selected
  const [activeTab, setActiveTab] = useState(0);

  const brewMethods = [
    {
      id: 0,
      name: "Espresso",
      tagline: "The heartbeat of the cafe.",
      description: "A concentrated, syrupy shot of coffee pulled under immense pressure. The foundation of flat whites and cortados.",
      stats: { temp: "93°C", time: "28 sec", ratio: "1:2", grind: "Fine" },
      image: espressoImg
    },
    {
      id: 1,
      name: "Pour Over",
      tagline: "Clarity, patience, and precision.",
      description: "A delicate gravity-fed drip method using a V60 or Chemex. Highlights the bright, fruity, and floral notes of single-origin beans.",
      stats: { temp: "96°C", time: "3 mins", ratio: "1:16", grind: "Medium" },
      image: pouroverImg
    },
    {
      id: 2,
      name: "Cold Brew",
      tagline: "Low and slow extraction.",
      description: "Steeped in cold water for up to 24 hours. The result is a naturally sweet, low-acidity concentrate perfect for Indian summers.",
      stats: { temp: "4°C", time: "18 hrs", ratio: "1:8", grind: "Coarse" },
      image: coldbrewImg
    }
  ];

  return (
    <section className="ritual-section">
      <div className="ritual-container">
        
        {/* Section Header */}
        <div className="ritual-header">
          <span className="ritual-eyebrow">Master The Craft</span>
          <h2 className="ritual-title">The Daily Ritual</h2>
        </div>

        <div className="ritual-split-layout">
          
          {/* LEFT SIDE: Interactive Vertical Menu */}
          <div className="ritual-menu">
            {brewMethods.map((method, index) => (
              <button 
                key={method.id}
                className={`menu-btn ${activeTab === index ? 'active-btn' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="menu-number">0{index + 1}</span>
                <span className="menu-name">{method.name}</span>
              </button>
            ))}
          </div>

          {/* RIGHT SIDE: Dynamic Content that changes based on selection */}
          <div className="ritual-content">
            
            {/* Image Box */}
            <div className="ritual-image-wrapper">
              {brewMethods.map((method, index) => (
                <img 
                  key={`img-${method.id}`}
                  src={method.image} 
                  alt={method.name} 
                  className={`ritual-image ${activeTab === index ? 'img-visible' : 'img-hidden'}`}
                />
              ))}
            </div>

            {/* Info & Stats Box */}
            <div className="ritual-info">
              <h3 className="info-tagline">{brewMethods[activeTab].tagline}</h3>
              <p className="info-paragraph">{brewMethods[activeTab].description}</p>
              
              {/* Brewing Specs Grid */}
              <div className="specs-grid">
                <div className="spec-item">
                  <Thermometer size={20} className="spec-icon"/>
                  <div className="spec-text">
                    <span className="spec-label">Temp</span>
                    <span className="spec-value">{brewMethods[activeTab].stats.temp}</span>
                  </div>
                </div>
                
                <div className="spec-item">
                  <Clock size={20} className="spec-icon"/>
                  <div className="spec-text">
                    <span className="spec-label">Time</span>
                    <span className="spec-value">{brewMethods[activeTab].stats.time}</span>
                  </div>
                </div>
                
                <div className="spec-item">
                  <Droplets size={20} className="spec-icon"/>
                  <div className="spec-text">
                    <span className="spec-label">Ratio</span>
                    <span className="spec-value">{brewMethods[activeTab].stats.ratio}</span>
                  </div>
                </div>

                <div className="spec-item">
                  <Settings size={20} className="spec-icon"/>
                  <div className="spec-text">
                    <span className="spec-label">Grind</span>
                    <span className="spec-value">{brewMethods[activeTab].stats.grind}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BrewGuide;