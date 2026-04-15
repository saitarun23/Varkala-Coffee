import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { Search, User, ShoppingCart, ChevronDown } from 'lucide-react';
import logo from '../assets/images/logo1.png';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="main-header">
         
         {/* Brand Section - NOW WRAPPED IN A LINK TO "/" */}
         <Link to="/" className="brand-container" style={{ textDecoration: 'none' }}>
           <div className="logo-container">
             <img src={logo} alt="Varkala Coffee Roasters" className="logo" />
           </div>
           
           <div className="brand-divider"></div>
           
           <div className="brand-text">
             <span>COFFEE</span>
             <span>ROASTERS &</span>
             <span>BAKEHOUSE</span>
           </div>
         </Link>

         {/* Navigation Links */}
         <nav className="main-nav">
           <ul>
             <li className="has-mega-menu">
               <a href="#">Coffee</a>
               <div className="mega-menu">
                 <ul>
                   <li><Link to="/specialty-coffee">Speciality Coffee</Link></li>
                   <li><Link to="/Signature-Blends">Signature Blends</Link></li>
                   <li><Link to="/filter-coffee">Filter Coffee</Link></li>
                   <li><Link to="/tasting-samples">Tasting Samples</Link></li>
                   <li><Link to="/brewing-gear">Brewing Gear</Link></li>
                 </ul>
               </div>
             </li>
             
             <li className="has-mega-menu">
               <a href="#">Cacao</a>
               <div className="mega-menu">
                 <ul>
                   <li><a href="#">Artisanal Kunafa</a></li>
                   <li><a href="#">Cacao Clusters</a></li>
                   <li><a href="#">Origin Chocolate Bars</a></li>
                   <li><a href="#">Chocolate Dragees</a></li>
                   <li><a href="#">Hot Chocolate Blend</a></li>
                   <li><a href="#">Stoneground Nut Butters</a></li>
                 </ul>
               </div>
             </li>

             <li><a href="#">Bakehouse</a></li>
             <li><a href="#">Pizza</a></li>
             <li><a href="#">Merchandise</a></li>
             <li><a href="#">Gifting</a></li>
             <li><a href="#">About us</a></li>
             <li className="dropdown">
               <a href="#">Contact <ChevronDown size={14} /></a>
             </li>
           </ul>
         </nav>

         {/* Search & Actions */}
         <div className="right-actions">
          
           <div className="actions-container">
              <button className="btn-account">
                <User size={18} />
              </button>
              <button className="btn-cart">
                <ShoppingCart size={18} />  
              </button>
           </div>
         </div>

      </div>
    </header>
  );
};

export default Navbar;