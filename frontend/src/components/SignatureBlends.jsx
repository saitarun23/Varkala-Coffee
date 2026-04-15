import React from 'react';
import '../styles/signatureblends.css';
import { ShoppingBag, SlidersHorizontal } from 'lucide-react';

// Import local images and video
import heroVideo from '../assets/images/herovideo.mp4'; 
import blend1 from '../assets/images/product1.jpeg';
import blend2 from '../assets/images/product2.jpeg';
import blend3 from '../assets/images/product3.jpeg';
import blend4 from '../assets/images/product4.jpeg';

const SignatureBlends = () => {
  const products = [
    {
      id: 1,
      title: "Customised Sampler",
      subtitle: "Attikan Estate, Silver Oak...",
      price: "₹700",
      image: blend1,
      tag: "Best Seller"
    },
    {
      id: 2,
      title: "The Rich & Bold Trio",
      subtitle: "Vienna Roast, French Roast...",
      price: "₹1,170",
      image: blend2,
      tag: null
    },
    {
      id: 3,
      title: "5-in-1 Explorer Pack",
      subtitle: "Varkala Coffee Roasters",
      price: "₹1,500",
      image: blend3,
      tag: "New"
    },
    {
      id: 4,
      title: "Kerehaklu Estate",
      subtitle: "Orange, Black Tea, Green Apple",
      price: "₹850",
      image: blend4,
      tag: "Limited Release"
    }
  ];

  return (
    <div className="blends-page">
      
      {/* --- FULL WIDTH CINEMATIC VIDEO HERO --- */}
      <section className="blends-hero">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="blends-video-bg"
        />
        <div className="blends-hero-overlay">
          <span className="hero-eyebrow">The Master Roasts</span>
          <h1 className="blends-hero-title">Signature Blends</h1>
          <p className="blends-hero-desc">
            Perfectly balanced profiles, roasted daily and sealed in our premium flexible cover bags to guarantee peak freshness upon arrival.
          </p>
        </div>
      </section>

      {/* --- NEW BOUTIQUE SHOP LAYOUT --- */}
      <section className="boutique-shop-container">
        
        {/* EDITORIAL SIDEBAR FILTERS (No Checkboxes) */}
        <aside className="boutique-sidebar">
          <div className="sidebar-header">
            <SlidersHorizontal size={18} />
            <span>Refine Collection</span>
          </div>
          
          <div className="boutique-filter-group">
            <h4 className="boutique-filter-title">Roast Profile</h4>
            <ul className="boutique-filter-list">
              <li className="filter-item">Light</li>
              <li className="filter-item active">Medium</li>
              <li className="filter-item">Medium Dark</li>
              <li className="filter-item">Dark</li>
            </ul>
          </div>

          <div className="boutique-filter-group">
            <h4 className="boutique-filter-title">Preparation</h4>
            <ul className="boutique-filter-list">
              <li className="filter-item">Perfect with Milk</li>
              <li className="filter-item">Black / Without Milk</li>
              <li className="filter-item">Versatile</li>
            </ul>
          </div>

          <div className="boutique-filter-group">
            <h4 className="boutique-filter-title">Tasting Notes</h4>
            <ul className="boutique-filter-list">
              <li className="filter-item">Fruity & Sweet</li>
              <li className="filter-item active">Nutty & Chocolate</li>
              <li className="filter-item">Bold & Earthy</li>
            </ul>
          </div>
        </aside>

        {/* RIGHT PRODUCT GRID (Floating Design) */}
        <div className="boutique-grid-area">
          
          <div className="boutique-sort-bar">
            <span className="boutique-results">Showing {products.length} curated blends</span>
            <div className="boutique-sort">
              <span className="sort-label">Sort by:</span>
              <span className="sort-value">Featured</span>
            </div>
          </div>

          <div className="boutique-product-grid">
            {products.map((product) => (
              <div key={product.id} className="boutique-card">
                
                {/* Image Area with Glide-Up Button */}
                <div className="bc-image-box">
                  {product.tag && (
                    <span className="bc-tag">{product.tag}</span>
                  )}
                  <img src={product.image} alt={product.title} className="bc-image" />
                  
                  {/* The Action Pill that slides up on hover */}
                  <div className="bc-action-pill">
                    <ShoppingBag size={16} />
                    <span>Add to Bag — {product.price}</span>
                  </div>
                </div>

                {/* Minimalist Text Details below image */}
                <div className="bc-details">
                  <h3 className="bc-title">{product.title}</h3>
                  <p className="bc-subtitle">{product.subtitle}</p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </section>
    </div>
  );
};

export default SignatureBlends;