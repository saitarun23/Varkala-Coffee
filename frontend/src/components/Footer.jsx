import React from 'react';
import '../styles/footer.css';
import { ArrowRight } from 'lucide-react'; // Only keeping ArrowRight from lucide

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top Section: Massive Brand Name & Newsletter */}
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-massive-text">VARKALA</h2>
            <p className="footer-tagline">Elevating the daily ritual.</p>
          </div>
          
          <div className="footer-newsletter">
            <h4 className="newsletter-heading">Join the Club</h4>
            <p className="newsletter-text">Insider access to limited roasts and bakehouse specials.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" className="newsletter-input" required />
              <button type="submit" className="newsletter-btn">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Clean Link Columns */}
        <div className="footer-middle">
          <div className="footer-column">
            <h5 className="column-title">Explore</h5>
            <ul className="footer-links">
              <li><a href="#">Specialty Coffee</a></li>
              <li><a href="#">Fine Cacao</a></li>
              <li><a href="#">Craft Bakehouse</a></li>
              <li><a href="#">Merchandise</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5 className="column-title">Information</h5>
            <ul className="footer-links">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Brew Guides</a></li>
              <li><a href="#">Wholesale</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5 className="column-title">Support</h5>
            <ul className="footer-links">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-column social-column">
            <h5 className="column-title">Connect</h5>
            <div className="social-icons">
              {/* Instagram SVG */}
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              {/* Facebook SVG */}
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              
              {/* Twitter SVG */}
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} URMISTEK. All rights reserved.
          </div>
          {/* <div className="credit">
            Copyright by <span className="credit-name">URMISTEK</span>
          </div> */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;