import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/productdetails.css';
import { ShoppingBag, ArrowLeft, Minus, Plus } from 'lucide-react';

import prod1 from '../assets/images/product1.jpeg';
import prod2 from '../assets/images/product2.jpeg';
import prod3 from '../assets/images/product3.jpeg';
import prod4 from '../assets/images/product4.jpeg';
import prod5 from '../assets/images/product5.jpeg';
import prod6 from '../assets/images/product6.jpeg';

const productDatabase = {
  "1": { 
    name: "Monsoon Malabar", 
    price: "₹850", 
    image: prod1, 
    category: "Specialty Coffee",
    roast: "Medium Dark", 
    origin: "Varkala Bakehouse", 
    process: "Traditional Monsooned", 
    altitude: "1100m - 1200m", 
    notes: ["Earth", "Dark Cocoa", "Warm Spices"], 
    desc: "A true historical marvel in a cup. Historically, coffee transported by sailing ships from India to Europe took months, exposing the beans to high humidity and sea winds. We replicate this exact process by exposing our hand-picked beans to the moisture-laden monsoon winds of the Malabar coast. The result is a swelled bean that yields a remarkably heavy, syrupy body, practically zero acidity, and deep, brooding flavor notes of roasted nuts and dark cocoa. Best enjoyed black or as a rich French Press.", 
    intensity: 8 
  },
  "2": { 
    name: "Kerala Single Estate", 
    price: "₹450", 
    image: prod2, 
    category: "Fine Cacao",
    roast: "72% Fine Cacao", 
    origin: "Varkala Bakehouse", 
    process: "48-Hr Stone Ground", 
    altitude: "850m", 
    notes: ["Wild Berries", "Caramel", "Bright Acidity"], 
    desc: "Sourced directly from a single, family-owned estate nestled in the lush, bio-diverse Idukki mountains. These heirloom cacao beans are slowly roasted and then stone-ground in micro-batches for a full 48 hours to ensure an impeccably smooth, velvety texture. This 72% dark chocolate bar masterfully highlights the bright, fruity acidity native to Kerala's rich, volcanic soils, balanced beautifully by deep undertones of toasted caramel and forest honey.", 
    intensity: 6 
  },
  "3": { 
    name: "The Varkala Sourdough", 
    price: "₹300", 
    image: prod3, 
    category: "Craft Bakehouse",
    roast: "Fresh Baked Daily", 
    origin: "Varkala Bakehouse", 
    process: "48-Hr Cold Ferment", 
    altitude: "Sea Level", 
    notes: ["Deep Crust", "Tangy", "Airy Crumb"], 
    desc: "The heartbeat of our morning bakehouse. This artisanal loaf is crafted using our proprietary, five-year-old wild yeast starter. We utilize a painstaking 48-hour slow cold fermentation process to break down the gluten and develop complex, tangy flavor profiles that commercial bread simply cannot replicate. Baked on stone hearths at scorching temperatures, a deeply caramelized, blistering crust gives way to a beautifully soft, chewy, and open interior crumb. Perfect for soaking up high-quality olive oil or pairing with our single-origin coffees.", 
    intensity: 5 
  },
  "4": { 
    name: "Signature Espresso Blend", 
    price: "₹900", 
    image: prod4, 
    category: "Specialty Coffee",
    roast: "Dark Espresso", 
    origin: "Varkala Bakehouse", 
    process: "Washed & Naturals", 
    altitude: "1350m", 
    notes: ["Melted Chocolate", "Hazelnut", "Velvety Crema"], 
    desc: "The foundation of our cafe's legendary milk-based drinks. This is a meticulously engineered blend of our finest high-altitude dark roasts, designed specifically to cut through milk while retaining its robust character. Expertly roasted to draw out maximum sweetness without the burnt bitterness, pulling a shot of this blend yields a thick, tiger-striped crema. Expect a heavy, syrupy mouthfeel with profound layers of roasted hazelnut, dark caramel, and a lingering molasses finish. Essential for the perfect flat white or cortado.", 
    intensity: 9 
  },
  "5": { 
    name: "Cardamom Chai Infusion", 
    price: "₹400", 
    image: prod5, 
    category: "Fine Cacao",
    roast: "60% Dark Couverture", 
    origin: "Varkala Bakehouse", 
    process: "Botanical Infusion", 
    altitude: "950m", 
    notes: ["Toasted Spice", "Creamy", "Aromatic"], 
    desc: "An evocative homage to the monsoon rains of South India. We start with our exceptionally smooth 60% dark couverture chocolate and delicately infuse it with freshly ground, indigenous green cardamom pods and a whisper of single-estate Wayanad black tea. Hand-tempered to achieve the perfect snap, this bar melts luxuriously on the palate, offering a cozy, warming, and distinctly chai-inspired flavor journey that unfolds elegantly with every bite.", 
    intensity: 7 
  },
  "6": { 
    name: "Hazelnut Praline Center", 
    price: "₹450", 
    image: prod6, 
    category: "Fine Cacao",
    roast: "70% Dark Couverture", 
    origin: "Varkala Bakehouse", 
    process: "Handcrafted Filled Bar", 
    altitude: "1000m", 
    notes: ["Roasted Nuts", "Burnt Sugar", "Silky"], 
    desc: "The ultimate indulgence for the luxury confectionary lover. We begin by slow-roasting premium whole hazelnuts until golden, then coat them in a cracking layer of caramelized sugar to create a traditional, crunchy French praline. This praline is then ground into a lush, creamy center and generously encased within a thick shell of our bold, 70% dark chocolate. The contrast between the bittersweet snap of the outer shell and the sweet, nutty melt of the interior is nothing short of spectacular.", 
    intensity: 8 
  }
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = productDatabase[id] || productDatabase["1"];
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // Helper function to safely calculate price
  const calculateTotal = () => {
    const rawPrice = parseInt(product.price.replace(/[^\d]/g, ''), 10);
    return (rawPrice * quantity).toLocaleString('en-IN');
  };

  return (
    <div className="editorial-pdp">
      
      {/* LEFT SIDE: Edge-to-Edge Image */}
      <div className="editorial-visual">
        {/* <Link to="/" className="btn-back">
          <ArrowLeft size={18} />
          <span>Back</span>
        </Link> */}
        <img src={product.image} alt={product.name} className="hero-product-img" />
      </div>

      {/* RIGHT SIDE: Structured Typography */}
      <div className="editorial-info">
        <div className="info-wrapper">
          
          {/* Header & Price */}
          <div className="info-header">
            {/* Dynamic Category based on the database */}
            <span className="product-category">{product.category}</span>
            <h1 className="product-title">{product.name}</h1>
            <div className="price-row">
              <span className="product-price">{product.price}</span>
              <span className="tax-inclusive">Inclusive of all taxes</span>
            </div>
          </div>

          {/* Action Area (Quantity + Cart) */}
          <div className="action-row">
            <div className="qty-box">
              <button onClick={decreaseQty}><Minus size={16} /></button>
              <span>{quantity}</span>
              <button onClick={increaseQty}><Plus size={16} /></button>
            </div>
            <button className="btn-add-cart">
              Add to Bag • ₹{calculateTotal()}
            </button>
          </div>

          {/* The Story / Description */}
          <div className="info-section">
            <p className="product-story">{product.desc}</p>
          </div>

          {/* Tasting Notes */}
          <div className="info-section">
            <h3 className="section-heading">Sensory Profile</h3>
            <div className="tags-row">
              {product.notes.map((note, index) => (
                <span key={index} className="taste-tag">{note}</span>
              ))}
            </div>
          </div>

          {/* The Spec Sheet */}
          <div className="info-section no-border">
            <h3 className="section-heading">The Details</h3>
            <ul className="spec-list">
              <li>
                <span className="spec-key">Origin</span>
                <span className="spec-val">{product.origin}</span>
              </li>
              <li>
                <span className="spec-key">Altitude</span>
                <span className="spec-val">{product.altitude}</span>
              </li>
              <li>
                <span className="spec-key">Process</span>
                <span className="spec-val">{product.process}</span>
              </li>
              <li>
                {/* Smart Label: If it's bread, say "Profile", otherwise "Roast Level" */}
                <span className="spec-key">{product.category === "Craft Bakehouse" ? "Profile" : "Roast Level"}</span>
                <span className="spec-val">{product.roast}</span>
              </li>
              <li>
                <span className="spec-key">Intensity</span>
                <div className="intensity-bar">
                  <div className="i-fill" style={{ width: `${product.intensity * 10}%` }}></div>
                </div>
              </li>
            </ul>
          </div>


        </div>
      </div>

    </div>
  );
};

export default ProductDetails;