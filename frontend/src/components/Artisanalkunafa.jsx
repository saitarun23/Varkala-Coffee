import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/artisanalkunafa.css';
import { ArrowRight, Leaf, Droplets, MapPin } from 'lucide-react';

// Import your local product images
import coffee1 from '../assets/images/product1.jpeg';
import coffee2 from '../assets/images/product4.jpeg';
import coffee3 from '../assets/images/product2.jpeg'; 
import coffee4 from '../assets/images/product3.jpeg';

// Import your local video
import heroVideo2 from '../assets/images/herovideo2.mp4'; 

const Artisanalkunafa = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const collection = [
    {
      id: "1",
      name: "Classic Kunafa",
      roast: "Traditional",
      notes: "Crispy phyllo, Pistachio, Sweet cream",
      price: "₹450",
      image: coffee1
    },
    {
      id: "2", 
      name: "Premium Kunafa Deluxe",
      roast: "Artisanal",
      notes: "Caramelized phyllo, Almonds, Custard filling",
      price: "₹650",
      image: coffee2
    },
    {
      id: "3", 
      name: "Kunafa with Coffee Cream",
      roast: "Specialty",
      notes: "Crispy base, Coffee infused cream, Walnut topping",
      price: "₹550",
      image: coffee3
    },
    {
      id: "4",
      name: "Royal Kunafa Collection",
      roast: "Premium",
      notes: "Golden phyllo, Mixed nuts, Honey drizzle",
      price: "₹850",
      image: coffee4
    }
  ];

  return (
    <div className="speciality-page">
      
      {/* --- FULL SCREEN CINEMATIC HERO --- */}
      <section className="sp-fullscreen-hero">
        <video 
          className="sp-hero-video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={heroVideo2} type="video/mp4" />
        </video>

        <div className="sp-hero-overlay"></div>

        <div className="sp-hero-content-center">
          <h1 className="sp-hero-title-main">
            <span className="title-solid">Artisanal</span>
            <span className="title-outline">Kunafa</span>
          </h1>
        </div>
      </section>

      {/* --- THE PHILOSOPHY BANNER --- */}
      {/* <section className="sp-philosophy">
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
      </section> */}

      {/* --- THE COLLECTION SHOWCASE --- */}
      <section className="sp-collection">
        <div className="sp-collection-header">
          <h2 className="sp-section-title">Our Kunafa Collection</h2>
          <div className="sp-divider"></div>
        </div>

        <div className="sp-grid">
          {collection.map((item) => (
            /* Wrapped the article in a Link to go to Product Details */
            <Link to={`/product/${item.id}`} key={item.id} style={{textDecoration: 'none'}}>
              <article className="sp-card">
                
                <div className="sp-card-visual">
                  {/* <span className="sp-card-number">0{item.id}</span> */}
                  <img src={item.image} alt={item.name} className="sp-card-img" />
                  
                  <div className="sp-card-action">
                    <span>View Details</span>
                  </div>
                </div>

                <div className="sp-card-info">
                  <div className="sp-card-meta">
                    <span>{item.roast}</span>
                    <span className="sp-price">{item.price}</span>
                  </div>
                  <h3 className="sp-card-title">{item.name}</h3>
                  <p className="sp-card-notes">{item.notes}</p>
                  
                  {/* <button className="sp-add-btn">
                    Explore Profile <ArrowRight size={16} />
                  </button> */}
                </div>

              </article>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Artisanalkunafa;