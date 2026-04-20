import React, { useEffect } from 'react';
import '../styles/aboutus.css';
import { ArrowDown, Leaf, Flame, Wind } from 'lucide-react';

// Using your existing images as beautiful placeholders
import about1 from '../assets/images/cacao.jpeg'; // Imagine this as a coffee roasting shot
import about2 from '../assets/images/product3.jpeg'; // Imagine this as a fresh bread/bakehouse shot
import about3 from '../assets/images/product1.jpeg'; // Imagine this as a farm/estate shot

const AboutUs = () => {
  // Always scroll to top when opening a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      
      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-eyebrow">The Varkala Heritage</span>
          <h1 className="about-title">
            Rooted in tradition.<br />
            <span className="italic-serif">Crafted for tomorrow.</span>
          </h1>
          <div className="scroll-indicator">
            <span>Discover Our Story</span>
            <ArrowDown size={20} className="bounce-arrow" />
          </div>
        </div>
      </section>

      {/* --- STICKY EDITORIAL SCROLL SECTION --- */}
      <section className="editorial-container">
        
        {/* LEFT SIDE: Frozen/Sticky Panel */}
        <div className="sticky-sidebar">
          <h2 className="sticky-heading">The Pursuit of Perfection</h2>
          <p className="sticky-subtext">
            From the high-altitude estates of Chikmagalur to the warm hearth of our Varkala bakehouse, every element is an obsession.
          </p>
          
          <div className="about-stats">
            <div className="stat-block">
              <span className="stat-num">100%</span>
              <span className="stat-label">Arabica Sourced</span>
            </div>
            <div className="stat-block">
              <span className="stat-num">48h</span>
              <span className="stat-label">Slow Fermentation</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Scrolling Magazine Content */}
        <div className="scrolling-content">
          
          <div className="story-block">
            <p className="drop-cap-text">
              <span className="drop-cap">I</span>t began with a simple belief: that coffee and bread, the two oldest companions of human mornings, deserved to be treated not as commodities, but as craft. We didn't just want to serve coffee; we wanted to honor the generations of Indian farmers who cultivate it.
            </p>
            <p className="standard-text">
              By working directly with microlots across the Western Ghats, we ensure that the terroir of every bean is respected. We pay premiums above fair trade because exceptional quality demands exceptional partnerships.
            </p>
          </div>

          <div className="asymmetrical-images">
            <img src={about1} alt="Roasting Process" className="img-large parallax-img" />
            <div className="image-caption">
              <span className="caption-line"></span>
              <p>Our master roaster monitoring the Maillard reaction in our vintage drum roaster.</p>
            </div>
          </div>

          <div className="story-block">
            <h3 className="story-subtitle">The Bakehouse Philosophy</h3>
            <p className="standard-text">
              Our bakehouse operates on a rhythm dictated by nature, not commerce. Our signature sourdough relies on a wild yeast culture we have nurtured for years. It requires a painstaking 48-hour cold fermentation process to break down complex starches and develop that deep, resonant flavor and blistering crust. 
            </p>
          </div>

          <div className="staggered-image-grid">
            <img src={about2} alt="Sourdough Bread" className="img-tall" />
            <img src={about3} alt="Coffee Estate" className="img-wide" />
          </div>

        </div>
      </section>

      {/* --- THE 3 PILLARS (BOTTOM BANNER) --- */}
      <section className="pillars-section">
        <div className="pillar">
          <Leaf size={32} className="pillar-icon" />
          <h4>Ethical Sourcing</h4>
          <p>Direct trade relationships that empower estate workers and protect biodiversity.</p>
        </div>
        <div className="pillar">
          <Flame size={32} className="pillar-icon" />
          <h4>Precision Roasting</h4>
          <p>Small-batch roasting tailored to the unique density and moisture of each harvest.</p>
        </div>
        <div className="pillar">
          <Wind size={32} className="pillar-icon" />
          <h4>Wild Fermentation</h4>
          <p>Artisanal baking using natural airborne yeasts and ancient grain techniques.</p>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;