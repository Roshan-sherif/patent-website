import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css'; // Add your styles here

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();  // Get current location to check the page

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (section) => {
    // Trigger scroll only if scrollToSection exists and it's the Home page
    if (scrollToSection && location.pathname === '/') {
      scrollToSection(section);
    }
  };

  return (
    <header className="header">
      {/* Logo with animation */}
      <div className="logo">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="logo-text"
        >
          TechPatent
        </motion.span>
      </div>
      
      {/* Hamburger icon for mobile */}
      <div className="mobile-menu-toggle" onClick={handleMenuToggle}>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      {/* Navigation menu */}
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-item" onClick={() => handleClick('home')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item" onClick={() => handleClick('about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-item" onClick={() => handleClick('services')}>
              Services
            </Link>
          </li>
          {/* Use `Link` for navigation on the About page to ensure proper routing */}
          <li>
            <Link to="/#patents" className="nav-item" onClick={() => handleClick('patents')}>
              Patent
            </Link>
          </li>
          <li>
            <Link to="/#contact" className="nav-item" onClick={() => handleClick('contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
