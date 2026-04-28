import React, { useEffect } from 'react';
import '../styles/pizza.css'; 

// Import your local product images
import product1 from '../assets/images/Pizza.jpeg'; // Pizza
import FriedChicken from '../assets/images/FriedChicken.jpeg'; // Burger
import product4 from '../assets/images/product4.jpeg'; // Burger
import product2 from '../assets/images/product2.jpeg'; // Mocktail

// Import your local video
import heroVideo3 from '../assets/images/herovideo3.mp4'; 

const Pizza = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      id: "1",
      name: "Gourmet Pizzas",
      subtitle: "Oven Fired Classics",
      notes: "Authentic, hand-tossed pizzas loaded with premium ingredients and fresh cheese.",
      image: product1
    },
    {
      id: "2", 
      name: "Crispy Fried Chicken",
      subtitle: "Golden & Juicy",
      notes: "Irresistibly crispy on the outside, tender and juicy on the inside.",
      image: FriedChicken
    },
    {
      id: "3", 
      name: "Juicy Burgers",
      subtitle: "Premium Patties",
      notes: "Towering, flavor-packed burgers served with our signature house sauces.",
      image: product4
    },
    {
      id: "4", 
      name: "Refreshing Mocktails",
      subtitle: "Handcrafted Drinks",
      notes: "Cool down with our vibrant, mixologist-crafted signature beverages.",
      image: product2
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
          <source src={heroVideo3} type="video/mp4" />
        </video>

        <div className="sp-hero-overlay"></div>

        <div className="sp-hero-content-center">
          <h1 className="sp-hero-title-main">
            <span className="title-solid">Varkala</span>
            <span className="title-outline">Menu</span>
          </h1>
        </div>
      </section>

      {/* --- THE COLLECTION SHOWCASE --- */}
      <section className="sp-collection">
        <div className="sp-collection-header">
          <h2 className="sp-section-title">Explore Our Categories</h2>
          <div className="sp-divider"></div>
        </div>

        <div className="sp-grid">
          {categories.map((item) => (
            <a 
              href="https://flan2.ciferon.com/" 
              key={item.id} 
              style={{textDecoration: 'none'}}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <article className="sp-card">
                
                <div className="sp-card-visual">
                  <img src={item.image} alt={item.name} className="sp-card-img" />
                  
                  <div className="sp-card-action">
                    <span>View Menu</span>
                  </div>
                </div>

                <div className="sp-card-info">
                  <div className="sp-card-meta">
                    <span>{item.subtitle}</span>
                  </div>
                  <h3 className="sp-card-title">{item.name}</h3>
                  <p className="sp-card-notes">{item.notes}</p>
                </div>

              </article>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Pizza;