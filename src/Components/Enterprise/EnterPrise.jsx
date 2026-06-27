<<<<<<< HEAD
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
=======
import "../../styles/Enterprise.css";

const PILLARS = [
  {
    icon: "🔒",
    title: "Enterprise-Grade Security",
    desc: "SOC 2 Type II, ISO 27001, GDPR, and HIPAA compliant. End-to-end encryption, SSO, and granular access controls built in.",
  },
  {
    icon: "⚡",
    title: "Unlimited Scale",
    desc: "Built to handle millions of records and thousands of concurrent users with 99.9% uptime SLAs and global data centers.",
  },
  {
    icon: "🔗",
    title: "Deep Integrations",
    desc: "Connect with Salesforce, Microsoft 365, SAP, Slack, Jira, and 1000+ tools via Zoho Flow's no-code integration builder.",
  },
  {
    icon: "🧩",
    title: "Customizable Platform",
    desc: "White-label, extend, and customize every app with Creator, Deluge scripting, and open APIs — no vendor lock-in.",
  },
  {
    icon: "🤝",
    title: "Dedicated Success Team",
    desc: "A named Customer Success Manager, priority support with <2 hour SLAs, and onboarding engineers included.",
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    desc: "Zoho Analytics with AI-powered insights, custom dashboards, and real-time BI across all your business data.",
  },
];

const LOGOS = ["HYUNDAI", "MARRIOTT", "BOSCH", "FedEx", "HDFC LIFE", "L'ORÉAL"];

const PLANS = [
  {
    name: "Professional",
    users: "Up to 50 users",
    price: "$30",
    per: "user/mo",
    features: ["All 55+ apps", "SSO & MFA", "API access", "Standard support", "5 TB storage"],
    cta: "Start Trial",
    highlight: false,
  },
  {
    name: "Enterprise",
    users: "Unlimited users",
    price: "Custom",
    per: "talk to sales",
    features: [
      "All 55+ apps",
      "SSO, MFA & DLP",
      "Custom SLAs",
      "Dedicated CSM",
      "Unlimited storage",
      "Custom data residency",
      "White-labeling",
    ],
    cta: "Contact Sales",
    highlight: true,
  },
];

export default function Enterprise() {
  return (
    <div className="ent-root">
      {/* NAV */}
      <nav className="ent-nav">
        <div className="ent-nav__logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="12" height="12" rx="3" fill="#1D3557" />
            <rect x="16" width="12" height="12" rx="3" fill="#E63946" />
            <rect y="16" width="12" height="12" rx="3" fill="#E63946" />
            <rect x="16" y="16" width="12" height="12" rx="3" fill="#1D3557" />
          </svg>
          <span>Zoho</span>
          <span className="ent-nav__sep">|</span>
          <span className="ent-nav__section">Enterprise</span>
        </div>
        <div className="ent-nav__actions">
          <a href="#ent-contact" className="ent-nav__link">Contact Sales</a>
          <a href="#ent-contact" className="ent-btn">Request Demo</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="ent-hero" id="ent-hero">
        <div className="ent-hero__inner">
          <div className="ent-hero__eyebrow">Enterprise Suite</div>
          <h1 className="ent-hero__title">
            Built for <em>enterprise</em><br />at every scale.
          </h1>
          <p className="ent-hero__sub">
            Zoho Enterprise gives large organizations a unified, secure, and infinitely scalable
            platform — with dedicated support, custom SLAs, and complete data sovereignty.
          </p>
          <div className="ent-hero__ctas">
            <a href="#ent-contact" className="ent-btn ent-btn--primary">Request a Demo</a>
            <a href="#ent-plans" className="ent-btn ent-btn--outline">View Plans</a>
>>>>>>> fb1cf9e8630ed9a333f6e5ef2e66a6b71b910b89
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="recognition-section">
        <div className="section-container">
          <h3>Recognised in the Gartner® Magic Quadrant™ for</h3>
          <div className="recognition-grid">
            <div className="recog-item">Analytics and Business Intelligence Platforms 2025</div>
            <div className="recog-item">Sales Force Automation Platforms 2025</div>
            <div className="recog-item">Enterprise Low-Code Application Platforms 2024</div>
=======
      {/* LOGO STRIP */}
      <div className="ent-logos">
        <span className="ent-logos__label">Trusted by global enterprises</span>
        <div className="ent-logos__strip">
          {LOGOS.map((l) => (
            <div className="ent-logo-chip" key={l}>{l}</div>
          ))}
        </div>
      </div>

      {/* PILLARS */}
      <section className="ent-pillars">
        <div className="container">
          <div className="ent-section-header">
            <div className="ent-eyebrow">Core Capabilities</div>
            <h2>Everything an enterprise needs</h2>
            <p>From security to customization, Zoho Enterprise is designed to meet the highest standards.</p>
          </div>
          <div className="ent-pillars__grid">
            {PILLARS.map(({ icon, title, desc }) => (
              <div className="ent-pillar-card" key={title}>
                <span className="ent-pillar-card__icon">{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
>>>>>>> fb1cf9e8630ed9a333f6e5ef2e66a6b71b910b89
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="trusted-section">
        <div className="section-container">
          <h3>TRUSTED BY TEAMS AT</h3>
          <div className="trusted-logos">
            <div className="logo-placeholder">BigBasket</div>
            <div className="logo-placeholder">MGM Healthcare</div>
            <div className="logo-placeholder">Blue Star</div>
            <div className="logo-placeholder">TAFE</div>
            <div className="logo-placeholder">Union Bank</div>
=======
      {/* PLANS */}
      <section className="ent-plans" id="ent-plans">
        <div className="container">
          <div className="ent-section-header">
            <div className="ent-eyebrow">Pricing</div>
            <h2>Simple, transparent pricing</h2>
          </div>
          <div className="ent-plans__grid">
            {PLANS.map(({ name, users, price, per, features, cta, highlight }) => (
              <div className={`ent-plan-card ${highlight ? "ent-plan-card--highlight" : ""}`} key={name}>
                {highlight && <span className="ent-plan-card__badge">Most Popular</span>}
                <h3>{name}</h3>
                <p className="ent-plan-card__users">{users}</p>
                <div className="ent-plan-card__price">
                  <span className="ent-plan-card__amount">{price}</span>
                  <span className="ent-plan-card__per">{per}</span>
                </div>
                <ul className="ent-plan-card__features">
                  {features.map((f) => (
                    <li key={f}><span>✓</span> {f}</li>
                  ))}
                </ul>
                <a href="#ent-contact" className={`ent-btn ${highlight ? "ent-btn--primary" : "ent-btn--outline"} ent-btn--full`}>
                  {cta}
                </a>
              </div>
            ))}
>>>>>>> fb1cf9e8630ed9a333f6e5ef2e66a6b71b910b89
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* CONTACT */}
      <section className="ent-contact" id="ent-contact">
        <div className="ent-contact__inner">
          <h2>Ready to talk enterprise?</h2>
          <p>Our enterprise team will design a custom plan that fits your organization perfectly.</p>
          <form className="ent-contact__form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full name" className="ent-input" />
            <input type="email" placeholder="Work email" className="ent-input" />
            <input type="text" placeholder="Company name" className="ent-input" />
            <select className="ent-input">
              <option value="">Company size</option>
              <option>100–500 employees</option>
              <option>500–2,000 employees</option>
              <option>2,000–10,000 employees</option>
              <option>10,000+ employees</option>
            </select>
            <textarea className="ent-input ent-textarea" placeholder="Tell us about your needs…" rows="4"></textarea>
            <button type="submit" className="ent-btn ent-btn--primary ent-btn--full">Get in Touch</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ent-footer">
        <p>© 2026 Zoho Corporation. All rights reserved.</p>
>>>>>>> fb1cf9e8630ed9a333f6e5ef2e66a6b71b910b89
      </footer>
    </div>
  );
}
<<<<<<< HEAD

export default Enterprise;
=======
>>>>>>> fb1cf9e8630ed9a333f6e5ef2e66a6b71b910b89
