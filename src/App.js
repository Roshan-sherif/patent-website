// App.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaLightbulb, FaCogs, FaChartLine, FaUserTie } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    patents: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
          
          // Check if element is in viewport for animations
          const rect = element.getBoundingClientRect();
          const isInViewport = (
            rect.top <= window.innerHeight &&
            rect.bottom >= 0
          );
          
          setIsVisible(prev => ({
            ...prev,
            [section]: isInViewport
          }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            TechPatent
          </motion.span>
        </div>
        
        <div className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {['home', 'about', 'services', 'patents', 'contact'].map((section) => (
              <motion.li
                key={section}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: ['home', 'about', 'services', 'patents', 'contact'].indexOf(section) * 0.1 }}
              >
                <button
                  className={activeSection === section ? 'active' : ''}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" ref={sectionRefs.home} className="hero-section">
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Innovative Patent Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Protecting your intellectual property with cutting-edge technology
            </motion.p>
            <motion.button
              className="cta-button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </motion.button>
          </div>
          <div className="hero-background">
            <div className="overlay"></div>
          </div>
        </section>

        <section id="about" ref={sectionRefs.about} className="about-section">
          <motion.div
            className="section-title"
            initial="hidden"
            animate={isVisible.about ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2>About Us</h2>
            <div className="title-underline"></div>
          </motion.div>
          
          <motion.div
            className="about-content"
            initial="hidden"
            animate={isVisible.about ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div className="about-image" variants={fadeInUp}>
              <div className="image-container">
                <div className="pattern-bg"></div>
              </div>
            </motion.div>
            
            <div className="about-text">
              <motion.h3 variants={fadeInUp}>Leading the Innovation in Patent Management</motion.h3>
              <motion.p variants={fadeInUp}>
                Founded in 2015, TechPatent has been at the forefront of intellectual property protection and patent management. Our team of experienced patent attorneys, engineers, and technology specialists work collaboratively to safeguard your innovations.
              </motion.p>
              <motion.p variants={fadeInUp}>
                We believe that every great idea deserves protection. Our mission is to simplify the complex patent process while ensuring maximum protection for your intellectual property in the global marketplace.
              </motion.p>
              
              <motion.div className="stats" variants={staggerContainer}>
                <motion.div className="stat-item" variants={fadeInUp}>
                  <span className="stat-number">1500+</span>
                  <span className="stat-label">Patents Filed</span>
                </motion.div>
                <motion.div className="stat-item" variants={fadeInUp}>
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Success Rate</span>
                </motion.div>
                <motion.div className="stat-item" variants={fadeInUp}>
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Industry Experts</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="services" ref={sectionRefs.services} className="services-section">
          <motion.div
            className="section-title"
            initial="hidden"
            animate={isVisible.services ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2>Our Services</h2>
            <div className="title-underline"></div>
          </motion.div>
          
          <motion.div 
            className="services-grid"
            initial="hidden"
            animate={isVisible.services ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {[
              {
                icon: <FaBriefcase />,
                title: "Patent Filing",
                description: "Comprehensive patent application preparation and filing services both domestically and internationally."
              },
              {
                icon: <FaLightbulb />,
                title: "IP Strategy",
                description: "Strategic planning to maximize the value and protection of your intellectual property assets."
              },
              {
                icon: <FaCogs />,
                title: "Patent Management",
                description: "Ongoing management of your patent portfolio including maintenance and renewals."
              },
              {
                icon: <FaChartLine />,
                title: "Market Analysis",
                description: "In-depth market research to identify potential patent infringement and opportunities."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <motion.button 
                  className="service-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="patents" ref={sectionRefs.patents} className="patents-section">
          <motion.div
            className="section-title"
            initial="hidden"
            animate={isVisible.patents ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2>Patent Process</h2>
            <div className="title-underline"></div>
          </motion.div>
          
          <motion.div 
            className="process-container"
            initial="hidden"
            animate={isVisible.patents ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {[
              { number: "01", title: "Initial Consultation", desc: "We discuss your invention and determine patentability." },
              { number: "02", title: "Prior Art Search", desc: "Comprehensive search to ensure your invention is unique." },
              { number: "03", title: "Patent Drafting", desc: "Our experts craft detailed patent applications with proper claims." },
              { number: "04", title: "Filing & Prosecution", desc: "We file and respond to office actions until approval." },
              { number: "05", title: "Patent Grant", desc: "Successfully obtain your patent and celebrate your innovation." }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="process-step"
                variants={fadeInUp}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                {index < 4 && <div className="step-connector"></div>}
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="patent-stats"
            initial="hidden"
            animate={isVisible.patents ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h3>Our Patent Portfolio</h3>
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <div className="portfolio-value">40%</div>
                <div className="portfolio-label">Technology</div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio-value">25%</div>
                <div className="portfolio-label">Healthcare</div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio-value">20%</div>
                <div className="portfolio-label">Manufacturing</div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio-value">15%</div>
                <div className="portfolio-label">Energy</div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="contact" ref={sectionRefs.contact} className="contact-section">
          <motion.div
            className="section-title"
            initial="hidden"
            animate={isVisible.contact ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2>Contact Us</h2>
            <div className="title-underline"></div>
          </motion.div>
          
          <div className="contact-container">
            <motion.div
              className="contact-info"
              initial="hidden"
              animate={isVisible.contact ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp}>Get In Touch</motion.h3>
              <motion.p variants={fadeInUp}>
                Have questions about patent filing or want to discuss your invention? Reach out to our team of experts today.
              </motion.p>
              
              <motion.ul className="contact-details" variants={staggerContainer}>
                <motion.li variants={fadeInUp}>
                  <FaEnvelope />
                  <span>info@techpatent.com</span>
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <FaPhone />
                  <span>+1 (800) 123-4567</span>
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <FaMapMarkerAlt />
                  <span>123 Innovation Drive, Tech City, TC 10001</span>
                </motion.li>
              </motion.ul>
              
              <motion.div className="social-links" variants={fadeInUp}>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="contact-form"
              initial="hidden"
              animate={isVisible.contact ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>TechPatent</h3>
            <p>Protecting innovations since 2015</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                {['home', 'about', 'services', 'patents', 'contact'].map((section) => (
                  <li key={section}>
                    <button onClick={() => scrollToSection(section)}>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Patent Filing</a></li>
                <li><a href="#">IP Strategy</a></li>
                <li><a href="#">Patent Management</a></li>
                <li><a href="#">Market Analysis</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} TechPatent. All rights reserved.</p>
        </div>
      </footer>
      
      <motion.div
        className="scroll-to-top"
        initial={{ opacity: 0 }}
        animate={{ opacity: window.scrollY > 300 ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 3l-8 8h5v10h6v-10h5z" />
        </svg>
      </motion.div>
    </div>
  );
};

export default App;