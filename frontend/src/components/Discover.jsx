import React from 'react';
import '../styles/discover.css';

// 1. IMPORT YOUR LOCAL IMAGES HERE
import coffeeImg from '../assets/images/coffee.jpeg';
import cacaoImg from '../assets/images/cacao.jpeg';
import bakehouseImg from '../assets/images/bakehouse.jpeg';

const Discover = () => {
  const offerings = [
    {
      id: "01",
      title: "Specialty Coffee",
      description: "Ethically sourced single-origin beans, roasted with precision to highlight their natural terroir.",
      image: coffeeImg,
      align: "align-top" // This creates the staggered look
    },
    {
      id: "02",
      title: "Fine Cacao",
      description: "Artisanal bean-to-bar chocolate, crafted to showcase the complex tasting notes of Indian cacao.",
      image: cacaoImg,
      align: "align-bottom" // Pushes the middle image down
    },
    {
      id: "03",
      title: "Craft Bakehouse",
      description: "Naturally leavened sourdough and buttery, flaky laminated pastries baked fresh daily.",
      image: bakehouseImg,
      align: "align-top"
    }
  ];

  return (
    <section className="editorial-section">
      <div className="editorial-container">
        
        {/* Section Header */}
        <div className="editorial-header">
          <h2 className="editorial-title">Mastering the Craft</h2>
          <div className="title-line"></div>
          <p className="editorial-subtitle">
            A dedication to origin, process, and the final pour.
          </p>
        </div>

        {/* Staggered Arch Grid */}
        <div className="editorial-grid">
          {offerings.map((item) => (
            <div key={item.id} className={`editorial-card ${item.align}`}>
              
              {/* The Arch Shaped Image */}
              <div className="arch-image-wrapper">
                <img src={item.image} alt={item.title} className="arch-image" />
                <div className="arch-overlay">
                   <span>Explore</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="card-text-content">
                {/* <span className="card-number">{item.id}</span> */}
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Discover;    