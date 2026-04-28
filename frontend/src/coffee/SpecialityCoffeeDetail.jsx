import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/specialitycoffeedetail.css';
import { ShoppingBag, ArrowLeft, Minus, Plus, Truck, RotateCcw, ShieldCheck, Star, Sparkles, Leaf, Award , PackageCheck} from 'lucide-react';
// Import local images
import coffee1 from '../assets/images/coffee4.jpeg';
import coffee2 from '../assets/images/coffee2.jpeg';
import coffee3 from '../assets/images/coffee3.jpeg';
import prod1 from '../assets/images/product1.jpeg';
import prod2 from '../assets/images/product2.jpeg';
import prod3 from '../assets/images/product3.jpeg';
import prod4 from '../assets/images/product4.jpeg';
import prod5 from '../assets/images/product5.jpeg';
import prod6 from '../assets/images/product6.jpeg';

// Expanded Database
const specialityCoffeeDatabase = {
  "1": { 
    name: "100% Arabica", 
    basePrice: 850, 
    images: [coffee1, prod4, prod2, prod6], 
    category: "Specialty Coffee",
    roastLevel: 4, 
    intensity: 4,  
    origin: "Malabar Coast, Karnataka", 
    process: "Traditional Monsooned", 
    altitude: "1100m - 1200m", 
    notes: ["Earth", "Dark Cocoa", "Warm Spices"], 
    desc: "A true historical marvel in a cup. Exposed to the moisture-laden monsoon winds of the Malabar coast, this swelled bean yields a remarkably heavy, syrupy body, practically zero acidity, and deep, brooding flavor notes of roasted nuts and dark cocoa. Best enjoyed black or as a rich French Press."
  },
  "2": { 
    name: "Robusta", 
    basePrice: 450, 
    images: [prod2, prod5, prod3, prod1], 
    category: "Fine Cacao | 72% Dark",
    roastLevel: 2,
    intensity: 3,
    origin: "Idukki Hills, Kerala", 
    process: "48-Hr Stone Ground", 
    altitude: "850m", 
    notes: ["Wild Berries", "Caramel", "Bright Acidity"], 
    desc: "Sourced directly from a single, family-owned estate nestled in the lush, bio-diverse Idukki mountains. These heirloom cacao beans are slowly roasted and then stone-ground in micro-batches for a full 48 hours to ensure an impeccably smooth, velvety texture."
  },
  "3": { 
    name: "Arabica Peaberry", 
    basePrice: 900, 
    images: [prod4, prod1, prod3, prod2], 
    category: "Specialty Coffee | Espresso Roast",
    roastLevel: 5,
    intensity: 5,
    origin: "Chikmagalur & Bababudangiri", 
    process: "Washed & Naturals", 
    altitude: "1350m", 
    notes: ["Melted Chocolate", "Hazelnut", "Velvety Crema"], 
    desc: "The foundation of our cafe's legendary milk-based drinks. This is a meticulously engineered blend of our finest high-altitude dark roasts, designed specifically to cut through milk while retaining its robust character."
  },
  "4": { 
    name: "Limited Edition Blend", 
    basePrice: 1200,
    images: [prod6, prod2, prod5, prod3], 
    category: "Specialty Coffee | Seasonal Blend",
    roastLevel: 3,    
    intensity: 4,
    origin: "Blend of 3 Single Origins", 
    process: "Varied (Washed, Natural, Honey)",
    altitude: "900m - 1300m",
    notes: ["Citrus Zest", "Floral Aromas", "Nutty Undertones"], 
    desc: "A rotating seasonal blend that showcases the best of the current harvests. Each batch is a unique symphony of flavors, crafted to highlight the distinct characteristics of the beans while maintaining a harmonious balance."
    },
};

const SpecialityCoffeeDetail = () => {
  const { id } = useParams();
  const product = specialityCoffeeDatabase[id] || specialityCoffeeDatabase["default"];
  
  // State Management
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState('250g');
  const [selectedGrind, setSelectedGrind] = useState('Whole Beans');
  const [activeTab, setActiveTab] = useState('description');
  
  // States for Pincode Checker
  const [pincode, setPincode] = useState('');
  const [deliveryMsg, setDeliveryMsg] = useState('');

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(product.images[0]); 
    setDeliveryMsg(''); 
  }, [id, product]);

  // Calculations
  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  const sizeMultiplier = selectedSize === '500g' ? 1.9 : selectedSize === '1kg' ? 3.6 : 1;
  const currentPrice = Math.round(product.basePrice * sizeMultiplier);
  const totalPrice = (currentPrice * quantity).toLocaleString('en-IN');

  // Helper function to render visual dots
  const renderDots = (filledCount, max = 5) => {
    let dots = [];
    for (let i = 1; i <= max; i++) {
      dots.push(<span key={i} className={`dot ${i <= filledCount ? 'dot-filled' : 'dot-empty'}`}></span>);
    }
    return dots;
  };

  const checkPincode = () => {
    if (pincode.length === 6) {
      setDeliveryMsg("Delivery available! Estimated time: 2-4 business days.");
    } else {
      setDeliveryMsg("Please enter a valid 6-digit pincode.");
    }
  };

  return (
    <div className="premium-pdp">
      
      {/* Top Breadcrumb Nav */}
      <div className="pdp-nav-bar">
        <Link to="/" className="back-btn">
          <ArrowLeft size={16} /> <span>Back to Shop</span>
        </Link>
      </div>

      {/* Main Product Container */}
      <div className="pdp-main-container">
        
        {/* LEFT: Image Gallery */}
        <div className="pdp-gallery-section">
          <div className="main-image-box">
            <img src={activeImage} alt={product.name} />
          </div>
          <div className="thumbnail-row">
            {product.images.map((img, index) => (
              <div 
                key={index} 
                className={`thumbnail-box ${activeImage === img ? 'active-thumb' : ''}`}
                onClick={() => setActiveImage(img)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info & Buy Box */}
        <div className="pdp-info-section">
          
          <span className="cat-eyebrow">{product.category}</span>
          <h1 className="pdp-title-main">{product.name}</h1>
          
          {/* Reviews & Hoverable Dots Indicators */}
          <div className="pdp-visual-stats">
            {/* <div className="reviews-mock">
              <Star size={14} fill="#D2C49A" color="#D2C49A"/>
              <Star size={14} fill="#D2C49A" color="#D2C49A"/>
              <Star size={14} fill="#D2C49A" color="#D2C49A"/>
              <Star size={14} fill="#D2C49A" color="#D2C49A"/>
              <Star size={14} fill="#D2C49A" color="#D2C49A"/>
              <span>(59 Reviews)</span>
            </div> */}
            
            <div className="dots-indicator">
              <span className="dot-label">Intensity:</span>
              <div className="dots-group">{renderDots(product.intensity)}</div>
              <div className="hover-img-tooltip">
                <img src={prod4} alt="Intensity Scale Guide" />
              </div>
            </div>

            <div className="dots-indicator">
              <span className="dot-label">Roast:</span>
              <div className="dots-group">{renderDots(product.roastLevel)}</div>
              <span className="dot-text-val">{product.roastText}</span>
              <div className="hover-img-tooltip">
                <img src={prod6} alt="Roast Level Guide" />
              </div>
            </div>
          </div>

          {/* Price Area */}
          <div className="pdp-price-area">
            <span className="price-rupee">₹ {currentPrice.toLocaleString('en-IN')}</span>
            {/* ✨ UPDATED TAX & SHIPPING NOTE ✨ */}
            <div className="tax-note">
              <PackageCheck size={15} className="tax-icon" />
              <span>Inclusive of all taxes • From Roastery to Doorstep</span>
            </div>
          </div>

          <div className="divider-line"></div>

          {/* Pincode Checker Section */}
          <div className="pincode-checker-section">
            <div className="pincode-header">
              <Truck size={18} />
              <span>Estimated Delivery</span>
            </div>
            <div className="pincode-input-row">
              <input 
                type="text" 
                placeholder="Enter Pincode" 
                value={pincode}
                onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                maxLength="6"
              />
              <button onClick={checkPincode}>Check Now</button>
            </div>
            {deliveryMsg && <span className="pincode-msg">{deliveryMsg}</span>}
          </div>

          {/* Selector: Coffee Type / Grind */}
          <div className="variant-selector">
            <h4 className="variant-label">Grind Size: <span>{selectedGrind}</span></h4>
            <div className="variant-options">
              {['Whole Beans', 'Pour Over', 'Espresso Machine Cold Brew', 'French Press','Filter','Moka pot','Aero Press'].map((grind) => (
                <button 
                  key={grind}
                  className={`variant-btn ${selectedGrind === grind ? 'active-variant' : ''}`}
                  onClick={() => setSelectedGrind(grind)}
                >
                  {grind}
                </button>
              ))}
            </div>
          </div>

          {/* Selector: Size / Weight */}
          <div className="variant-selector">
            <h4 className="variant-label">Size: <span>{selectedSize}</span></h4>
            <div className="variant-options">
              {['250g', '500g', '1kg'].map((sz) => (
                <button 
                  key={sz}
                  className={`variant-btn ${selectedSize === sz ? 'active-variant' : ''}`}
                  onClick={() => setSelectedSize(sz)}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Actions */}
          <div className="cart-action-area">
            <div className="qty-control">
              <button onClick={decreaseQty}><Minus size={16} /></button>
              <span>{quantity}</span>
              <button onClick={increaseQty}><Plus size={16} /></button>
            </div>
            <button className="add-to-bag-btn">
              <ShoppingBag size={18} style={{marginRight: '8px'}}/> 
              Add To Bag — ₹{totalPrice}
            </button>
          </div>

          <button className="buy-now-btn">Buy It Now</button>

          {/* Premium Trust Badges */}
        <ul className="trust-perks">
          <li><Sparkles size={18}/> Nitrogen Flushed to Seal in Aromas</li>
          <li><RotateCcw size={18}/> Roasted to Order in Micro-Batches</li>
          <li><Leaf size={18}/> Ethically Sourced from Indian Estates</li>
          <li><Truck size={18}/> Free Premium Shipping over ₹1,000</li>
          <li><ShieldCheck size={18}/> 1 Year Price Lock Subscription [Upto 15% Off]</li>
          <li><Award size={18}/> 100% Quality Guarantee</li>
        </ul>

        </div>
      </div>

      {/* BOTTOM: Tabs Section (Reverted to Original Coffee Story format) */}
      <div className="pdp-tabs-container">
        <div className="tabs-header">
          <button className={activeTab === 'description' ? 'active-tab' : ''} onClick={() => setActiveTab('description')}>Description</button>
          <button className={activeTab === 'origin' ? 'active-tab' : ''} onClick={() => setActiveTab('origin')}>Origin & Process</button>
          <button className={activeTab === 'brewing' ? 'active-tab' : ''} onClick={() => setActiveTab('brewing')}>Brewing Guide</button>
        </div>
        
        <div className="tabs-content">
          {activeTab === 'description' && (
            <div className="tab-pane">
              <h3>About {product.name}</h3>
              <p>{product.desc}</p>
              <br/>
              <h4>Tasting Notes</h4>
              <div className="tab-tags">
                {product.notes.map((n, i) => <span key={i} className="taste-tag">{n}</span>)}
              </div>
            </div>
          )}
          {activeTab === 'origin' && (
            <div className="tab-pane">
              <ul className="origin-list">
                <li><strong>Estate / Region:</strong> {product.origin}</li>
                <li><strong>Altitude:</strong> {product.altitude}</li>
                <li><strong>Processing Method:</strong> {product.process}</li>
              </ul>
            </div>
          )}
          {activeTab === 'brewing' && (
            <div className="tab-pane">
              <p>For the best experience with our <strong>{product.roastText}</strong> profiles, we recommend resting the beans for 7-10 days post-roast.</p>
              <ul className="origin-list">
                <li><strong>Water Temp:</strong> 93°C - 95°C</li>
                <li><strong>Brew Ratio:</strong> 1:15 for Pour Over, 1:2 for Espresso</li>
              </ul>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default SpecialityCoffeeDetail;