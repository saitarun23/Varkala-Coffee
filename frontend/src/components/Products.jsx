import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/products.css';
import { ShoppingBag } from 'lucide-react'; // Swapped to a more premium bag icon

// Import your local product images
import prod1 from '../assets/images/product1.jpeg';
import prod2 from '../assets/images/product2.jpeg';
import prod3 from '../assets/images/product3.jpeg';
import prod4 from '../assets/images/product4.jpeg';
import prod5 from '../assets/images/product5.jpeg';
import prod6 from '../assets/images/product6.jpeg';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Monsoon Malabar",
      category: "Specialty Coffee",
      price: "₹850",
      notes: ["Earthy", "Dark Chocolate", "Spiced"],
      description: "Exposed to the moisture-laden monsoon winds, this uniquely Indian coffee offers a heavy body, practically zero acidity, and deep, brooding flavors.",
      image: prod1,
    },
    {
      id: 2,
      name: "Kerala Single Estate",
      category: "Fine Cacao (72%)",
      price: "₹450",
      notes: ["Fruity", "Caramel", "Bright"],
      description: "Stone-ground for 48 hours, this single-estate chocolate bar highlights the bright, fruity acidity native to the Idukki region's rich soils.",
      image: prod2,
    },
    {
      id: 3,
      name: "The Varkala Sourdough",
      category: "Craft Bakehouse",
      price: "₹300",
      notes: ["Crusty", "Tangy", "Open Crumb"],
      description: "Fermented for 36 hours using our signature wild yeast starter. A deeply caramelized, blistered crust gives way to a soft, chewy interior.",
      image: prod3,
    },
    {
      id: 4,
      name: "Espresso Blend",
      category: "Specialty Coffee",
      price: "₹900",
      notes: ["Chocolatey", "Nutty", "Velvety"],
      description: "A blend of our darkest roasts, designed for a syrupy body and rich crema. Perfect for espresso lovers who crave depth and sweetness.",
      image: prod4,
    },
    {   
      id: 5,
      name: "Cardamom Chai Chocolate",
      category: "Fine Cacao (60%)",
      price: "₹400",
      notes: ["Spiced", "Creamy", "Aromatic"],
      description: "Infused with freshly ground cardamom and a hint of black tea, this chocolate bar offers a cozy, chai-inspired flavor experience.",
      image: prod5,
    },
    {
      id: 6,
      name: "Hazelnut Praline",
      category: "Fine Cacao (70%)",
      price: "₹450",
      notes: ["Nutty", "Caramel", "Smooth"],
      description: "A rich, indulgent chocolate bar featuring a smooth hazelnut praline center, encased in a velvety dark chocolate shell.",
      image: prod6,
    },
  ];

  return (
    <section className="modern-store-section">
      <div className="modern-store-container">
        
        <div className="modern-header">
          <div>
            <h2 className="modern-title">Signature Collection</h2>
            <p className="modern-subtitle">Uncompromising quality, delivered fresh.</p>
          </div>
          <div className="header-count">
            <span>{products.length} Products</span>
          </div>
        </div>

        {/* The New Elevated Grid */}
        <div className="modern-grid">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="modern-card" style={{ textDecoration: 'none' }}>
              
              {/* Image Area with Floating Elements */}
              <div className="mc-image-area">
                <img src={product.image} alt={product.name} className="mc-image" />
                
                {/* Floating Frosted Tags */}
                <div className="mc-tags">
                  {/* <span className="mc-tag category-tag">{product.category}</span> */}
                  {product.notes.slice(0, 1).map((note, i) => (
                    <span key={i} className="mc-tag note-tag">{note}</span>
                  ))}
                </div>

                {/* Hidden "Quick Add" button that slides up on hover */}
                <button className="mc-quick-add">
                  <ShoppingBag size={18} />
                  <span>Add To Bag</span>
                </button>
              </div>

              {/* Clean Text Details Area */}
              <div className="mc-info-area">
                <div className="mc-title-row">
                  <h3 className="mc-title">{product.name}</h3>
                  <span className="mc-price">{product.price}</span>
                </div>
                {/* <p className="mc-desc">{product.description}</p> */}
              </div>
                  
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;