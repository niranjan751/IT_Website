// src/Enterprise.jsx
import React, { useState, useEffect } from 'react';
import './importEnterPrise.css';

function Enterprise() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <img src="https://www.zoho.com/zoho-logo.svg" alt="Zoho Logo" className="zoho-logo" />
            <span className="enterprise-text">Enterprise</span>
          </div>

          <div className="nav-links">
            <a href="#solutions">Solutions</a>
            <a href="#industries">Industries</a>
            <a href="#security">Security</a>
            <a href="#partners">Partners</a>
          </div>

          <div className="nav-actions">
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Contact Sales</button>
            <button 
              className="mobile-menu-btn"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              ☰
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="mobile-menu">
            <a href="#solutions">Solutions</a>
            <a href="#industries">Industries</a>
            <a href="#security">Security</a>
            <a href="#partners">Partners</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-badge">AI-Powered Enterprise Software</div>
          <h1 className="hero-title">
            Accelerate enterprise growth with customisable software solutions
          </h1>
          <p className="hero-subtitle">
            Deliver great customer experiences, collaborate seamlessly, and automate business processes—all on a software platform built in India.
          </p>
          <div className="hero-cta">
            <button className="btn-primary large">CONTACT SALES</button>
            <button className="btn-secondary large">Watch Video</button>
          </div>
        </div>

        <div className="hero-image">
          <img 
            src="https://www.zoho.com/en-in/enterprise/images/enterprise-hero.webp" 
            alt="Zoho Enterprise Dashboard" 
            className="hero-img"
          />
        </div>
      </header>

      {/* Rest of the sections (same as before) */}
      <section className="agents-section">
        <div className="section-container">
          <div className="agents-content">
            <h2>Meet your new team, powered by Zia Agents</h2>
            <p>Run sales, marketing, finance, and support with pre-built AI agents that are autonomous and context-aware.</p>
            <button className="btn-primary">Explore Agents</button>
          </div>
        </div>
      </section>

      <section className="recognition-section">
        <div className="section-container">
          <h3>Recognised in the Gartner® Magic Quadrant™ for</h3>
          <div className="recognition-grid">
            <div className="recog-item">Analytics and Business Intelligence Platforms 2025</div>
            <div className="recog-item">Sales Force Automation Platforms 2025</div>
            <div className="recog-item">Enterprise Low-Code Application Platforms 2024</div>
          </div>
        </div>
      </section>

      <section className="trusted-section">
        <div className="section-container">
          <h3>TRUSTED BY TEAMS AT</h3>
          <div className="trusted-logos">
            <div className="logo-placeholder">BigBasket</div>
            <div className="logo-placeholder">MGM Healthcare</div>
            <div className="logo-placeholder">Blue Star</div>
            <div className="logo-placeholder">TAFE</div>
            <div className="logo-placeholder">Union Bank</div>
          </div>
        </div>
      </section>

      <section id="solutions" className="solutions-section">
        <div className="section-container">
          <h2>Customisable solutions for enterprise management</h2>
          <div className="solutions-grid">
            <div className="solution-card">
              <h3>Customer Experience</h3>
              <h4>Engage your customers at every stage of the journey</h4>
              <p>Unify CRM activities like sales, marketing, and support using a single platform.</p>
            </div>
            <div className="solution-card">
              <h3>Employee Experience</h3>
              <h4>Streamline HR operations</h4>
              <p>Manage your entire employee lifecycle on a single, integrated HRMS platform.</p>
            </div>
            <div className="solution-card">
              <h3>Productivity & Collaboration</h3>
              <h4>Enterprise-ready tools</h4>
              <p>Streamline email, chat, project management, and more.</p>
            </div>
            <div className="solution-card">
              <h3>Finance</h3>
              <h4>Move fast and make smart financial decisions</h4>
              <p>From billing to accounting.</p>
            </div>
            <div className="solution-card">
              <h3>Custom Solutions</h3>
              <h4>Design, build, and deploy bespoke solutions</h4>
              <p>Low-code and pro-code tools with AI.</p>
            </div>
            <div className="solution-card">
              <h3>Business Intelligence</h3>
              <h4>Craft contextual data narratives</h4>
              <p>Blend data from 500+ sources.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="security-section">
        <div className="section-container">
          <h2>Enterprise-grade security at the forefront</h2>
          <p>At Zoho, we take data privacy and security seriously.</p>
          <button className="btn-primary">Learn More</button>
        </div>
      </section>

      <section id="industries" className="industries-section">
        <div className="section-container">
          <h2>Bespoke solutions across industries</h2>
          <div className="industries-grid">
            <div className="industry-card"><h3>FMCG AND RETAIL</h3><p>Tata's BigBasket automates CapEx procurement...</p></div>
            <div className="industry-card"><h3>HEALTHCARE AND PHARMA</h3><p>The MGM success story</p></div>
            <div className="industry-card"><h3>MANUFACTURING</h3><p>Blue Star Limited</p></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <img src="https://www.zoho.com/zoho-logo.svg" alt="Zoho" className="footer-logo" />
            <p>Built in India. Serving the world.</p>
          </div>
          <div className="footer-links">
            <a href="#">Products</a>
            <a href="#">Solutions</a>
            <a href="#">Partners</a>
            <a href="#">Resources</a>
          </div>
          <div className="footer-copyright">
            © 2026 Zoho Corporation Pvt. Ltd. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Enterprise;