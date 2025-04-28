import React from 'react';
import './ServicesPage.css';
import Navbar from './Navbar';

const ServicePage = () => {
  return (
    <div id="service-page-container">
        <Navbar/>
      <section id="services-section">
        <div id="services-section-title">
          <h2>Our Services</h2>
          <div id="section-title-underline"></div>
        </div>
        <div id="services-cards-container">
          {/* Service Card 1 */}
          <div className="service-card-item">
            <div className="service-card-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Service One</h3>
            <p>
              Detailed information about service one. This service is designed to help you with...
            </p>
            <button className="service-card-btn">Learn More</button>
          </div>
          
          {/* Service Card 2 */}
          <div className="service-card-item">
            <div className="service-card-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3>Service Two</h3>
            <p>
              Detailed information about service two. This service helps you to achieve...
            </p>
            <button className="service-card-btn">Learn More</button>
          </div>

          {/* Service Card 3 */}
          <div className="service-card-item">
            <div className="service-card-icon">
              <i className="fas fa-laptop"></i>
            </div>
            <h3>Service Three</h3>
            <p>
              Detailed information about service three. This service focuses on providing...
            </p>
            <button className="service-card-btn">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
