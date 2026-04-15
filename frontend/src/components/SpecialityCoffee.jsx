import React from 'react';
import '../styles/specialitycoffee.css';
import { ArrowRight, Leaf, Droplets, MapPin } from 'lucide-react';

// Import your local product images
import coffee1 from '../assets/images/product1.jpeg';
import coffee2 from '../assets/images/product4.jpeg';
import coffee3 from '../assets/images/product2.jpeg'; 

// IMPORT YOUR LOCAL VIDEO HERE
// Make sure you create a 'videos' folder in assets and put an mp4 file there
import heroVideo from '../assets/images/herovideo.mp4'; 

const SpecialityCoffee = () => {
  const collection = [
    {
      id: "01",
      name: "Monsoon Malabar",
      roast: "Medium-Dark",
      notes: "Earthy, Dark Chocolate, Spiced",
      price: "₹850",
      image: coffee1
    },
    {
      id: "02",
      name: "Attikan Estate",
      roast: "Medium",
      notes: "Roasted Nuts, Caramel, Red Apple",
      price: "₹750",
      image: coffee2
    },
    {
      id: "03",
      name: "Pulp Sun Dried",
      roast: "Light-Medium",
      notes: "Jasmine, Black Tea, Bergamot",
      price: "₹900",
      image: coffee3
    }
  ];

  return (
    <div className="speciality-page">
      
      {/* --- EDITORIAL HERO SECTION (UPDATED WITH VIDEO) --- */}
      <section className="sp-hero">
        <div className="sp-hero-content">
          <span className="sp-eyebrow">The Origin Series</span>
          <h1 className="sp-title">Specialty<br/>Coffee</h1>
          <p className="sp-hero-desc">
            Sourced ethically from India's finest high-altitude estates. Roasted meticulously in-house to highlight the unique terroir of every bean.
          </p>
        </div>
        
        <div className="sp-hero-visual">
          <div className="sp-video-frame">
            <video 
              src={heroVideo} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="sp-hero-video"
            />
          </div>
        </div>
      </section>

      {/* --- THE PHILOSOPHY BANNER --- */}
      <section className="sp-philosophy">
        <div className="sp-phil-container">
          <div className="phil-item">
            <MapPin className="phil-icon" size={28} />
            <h3>Single Origin</h3>
            <p>Fully traceable coffees from specific farms and microlots.</p>
          </div>
          <div className="phil-item">
            <Droplets className="phil-icon" size={28} />
            <h3>Small Batch</h3>
            <p>Roasted to order in small batches for peak freshness.</p>
          </div>
          <div className="phil-item">
            <Leaf className="phil-icon" size={28} />
            <h3>Ethical Trade</h3>
            <p>Direct relationships ensuring fair wages for local farmers.</p>
          </div>
        </div>
      </section>

      {/* --- THE COLLECTION SHOWCASE --- */}
      <section className="sp-collection">
        <div className="sp-collection-header">
          <h2 className="sp-section-title">Current Offerings</h2>
          <div className="sp-divider"></div>
        </div>

        <div className="sp-grid">
          {collection.map((item) => (
            <article key={item.id} className="sp-card">
              
              <div className="sp-card-visual">
                <span className="sp-card-number">{item.id}</span>
                <img src={item.image} alt={item.name} className="sp-card-img" />
                
                {/* Hidden overlay that appears on hover */}
                <div className="sp-card-action">
                  <span>View Details</span>
                </div>
              </div>

              <div className="sp-card-info">
                <div className="sp-card-meta">
                  <span>{item.roast} Roast</span>
                  <span className="sp-price">{item.price}</span>
                </div>
                <h3 className="sp-card-title">{item.name}</h3>
                <p className="sp-card-notes">{item.notes}</p>
                
                <button className="sp-add-btn">
                  Add to Bag <ArrowRight size={16} />
                </button>
              </div>

            </article>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SpecialityCoffee;